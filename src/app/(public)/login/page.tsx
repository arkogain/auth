import LoginForm from "@/components/Auth/LoginForm";
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
  title: "Login - Auth Project",
  description: "Login page for the Auth Project",
};

const page = () => {
  return (
    <section className="grid h-dvh place-items-center">
      <Card className="w-sm">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Login</CardTitle>
        </CardHeader>

        <CardContent>
          <LoginForm />
        </CardContent>

        <CardFooter className="justify-center gap-1">
          Don't have an account?
          <Link
            href="/register"
            className="text-blue-500">
            Register
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
};

export default page;
