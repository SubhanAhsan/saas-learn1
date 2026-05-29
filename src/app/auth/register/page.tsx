import {RegisterForm} from "@/features/auth/components/register-form";

export default function RegisterPage() {
    return (
        <div>
            <section className="container" >
                <h1>Register Page</h1>

                <article className="max-w-md mx-auto py-4 items-center justify-between">
                    <RegisterForm />
                </article>

            </section>
        </div>
    )
}