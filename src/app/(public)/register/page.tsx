import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Register - Auth Project",
  description: "Register page for the Auth Project",
};

const page = () => {
  return (
    <section className="grid h-dvh place-items-center">
      <Card className="w-sm">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Register</CardTitle>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="justify-center gap-1">
          Already have an account?
          <Link
            href="/login"
            className="text-blue-500">
            Login
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
};

export default page;
