import {LoginForm} from "@/features/auth/components/login-form";
import {ReturnButton} from "@/components/shared/return-button";
import Link from "next/link";

export default function LoginPage() {
    return (

        <section className="container space-y-8">
            <ReturnButton href={"/"} label={"Home"}/>
            <h1 className={"text-3xl font-bold"}>Login Page</h1>

            <article className="max-w-md mx-auto items-center justify-between">
                <LoginForm/>
                <p className="text-muted-foreground text-sm">
                    Don&apos;t have an account?{" "}
                    <Link href="/auth/register" className={"text-sm hover:text-foreground"}>
                        Register
                    </Link>
                </p>
            </article>

        </section>

    )
}