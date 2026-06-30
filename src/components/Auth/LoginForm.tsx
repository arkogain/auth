"use client";

import { authClient } from "@/lib/auth-client";
import { loginSchema, LoginSchemaType } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FingerprintIcon, LoaderIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "../shadcnui/button";
import { Field, FieldError, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";

const LoginForm = () => {
  const { replace } = useRouter();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    mode: "all",
  });

  const loginHandler = async ({
    email,
    password,
    rememberMe,
  }: LoginSchemaType) => {
    try {
      const { error } = await authClient.signIn.email({
        email,
        password,
        rememberMe,
      });

      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Login successfull ✅");

        reset();

        replace("/");
      }
    } catch (allError) {
      // if (allError instanceof Error) {
      //   toast.error(allError.message);
      // } else {
      //   toast.error("Unexpected Error: something went wrong please try again");
      // }

      toast.error(
        allError instanceof Error ?
          allError.message
        : "Unexpected Error: something went wrong please try again",
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(loginHandler)}
      className="grid gap-4"
      noValidate>
      {/* Email */}

      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Email Address</FieldLabel>
            <Input
              {...field}
              id={field.name}
              type="email"
              aria-invalid={fieldState.invalid}
              placeholder="Enter your email"
              autoComplete="email"
            />

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      {/* Password */}

      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Password</FieldLabel>
            <Input
              {...field}
              id={field.name}
              type="password"
              aria-invalid={fieldState.invalid}
              placeholder="Enter your password"
              autoComplete="new-password"
            />

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Button
        type="submit"
        disabled={isSubmitting}>
        {isSubmitting ?
          <>
            <LoaderIcon className="animate-spin" /> Logining...
          </>
        : <>
            <FingerprintIcon /> Login
          </>
        }
      </Button>
    </form>
  );
};

export default LoginForm;
