import z from "zod";

export const loginSchema = z.object({
  email: z
    .email({ error: "Invalid email address" })
    .max(64, { error: "Email must be at most 64 characters long" })
    .lowercase(),

  password: z
    .string()
    .min(8, { error: "Password must be at least 8 characters long" })
    .max(128, { error: "Password must be at most 128 characters long" }),

  rememberMe: z.boolean().default(false),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(5, { error: "Name must be at least 5 characters long" })
      .max(32, { error: "Name must be at most 32 characters long" }),

    email: z
      .email({ error: "Invalid email address" })
      .max(64, { error: "Email must be at most 64 characters long" })
      .lowercase(),

    password: z
      .string()
      .min(8, { error: "Password must be at least 8 characters long" })
      .max(128, { error: "Password must be at most 128 characters long" }),

    confirmPassword: z
      .string()
      .min(1, { error: "Confirm password must be at least 1 characters long" }),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    error: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterSchemaType = z.infer<typeof registerSchema>;
