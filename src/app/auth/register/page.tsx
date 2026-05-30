import {RegisterForm} from "@/features/auth/components/register-form";
import {ReturnButton} from "@/components/shared/return-button";
import Link from "next/link";

export default function RegisterPage() {
    return (

        <section className="container space-y-8">
            <ReturnButton href={"/"} label={"Home"}/>

            <h1 className={"text-3xl font-bold"}>Register Page</h1>

            <article className="max-w-md mx-auto items-center justify-between">
                <RegisterForm/>

                <p className="text-muted-foreground text-sm">
                    Already have an account?{" "}
                    <Link href="/auth/login" className={"text-sm hover:text-foreground"}>
                        Login
                    </Link>
                </p>
            </article>

        </section>

    )
}