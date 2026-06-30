"use client";

import { authClient } from "@/lib/auth-client";
import { LoaderIcon, LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "react-toastify";
import { Button } from "../shadcnui/button";

const LogOutBtn = () => {
  const [isPending, startTransition] = useTransition();

  const { replace } = useRouter();

  const logOutHandler = async () => {
    try {
      const { error } = await authClient.signOut();

      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Logout successfull ✅");

        replace("/login");
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
    <>
      <Button
        type="button"
        onClick={() => startTransition(logOutHandler)}
        disabled={isPending}
        variant={"destructive"}>
        {isPending ?
          <>
            <LoaderIcon className="animate-spin" /> logingout..
          </>
        : <>
            <LogOutIcon /> Logout
          </>
        }
      </Button>
    </>
  );
};

export default LogOutBtn;
