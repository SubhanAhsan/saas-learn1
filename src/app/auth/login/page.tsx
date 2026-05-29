import {LoginForm} from "@/features/auth/components/login-form";

export default function LoginPage(){
    return (
        <div>
            <section className="container" >
                <h1>Login Page</h1>

                <article className="max-w-md mx-auto py-4 items-center justify-between">
                    <LoginForm/>
                </article>

            </section>
        </div>
    )
}