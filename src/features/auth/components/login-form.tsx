"use client";

import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {loginSchema, LoginInput} from "@/features/auth/schemas/auth.schema";
import {Field, FieldError, FieldGroup, FieldLabel} from "@/components/ui/field";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {toast} from "sonner";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {signInEmailAction} from "@/features/auth/actions/sign-in-email.action";

export const LoginForm = () =>{

    const router = useRouter();
    const [isPending, setIsPending] = useState(false);

    const form = useForm<LoginInput>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    async function onSubmit(form: LoginInput){
        setIsPending(true);

        const {error} = await signInEmailAction(form);

        if(error){
            toast.error(error);
            setIsPending(false);
        } else{
            toast.success("Login successful.");
            router.push("/profile");
        }

        // await signIn.email({
        //     email: form.email,
        //     password: form.password,
        // },
        //     {
        //         onRequest: () => {
        //             setIsPending(true);
        //         },
        //         onResponse: () => {
        //             setIsPending(false);
        //         },
        //         onError: (ctx) => {
        //             toast.error(ctx.error.message);
        //         },
        //         onSuccess: () => {
        //             toast.success("Login successful. Good to have you back");
        //             router.push("/profile");
        //         }
        //     }
        // )
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Log-In</CardTitle>
                <CardDescription>login with your email</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>

                        <Controller
                            name="email"
                            control={form.control}
                            render={({field, fieldState}) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor={"email"}>Email</FieldLabel>
                                    <Input
                                        placeholder="yahya@gmail.com"
                                        autoComplete="email"
                                        aria-invalid={fieldState.invalid}
                                        {...field}
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        <Controller
                            name="password"
                            control={form.control}
                            render={({field, fieldState}) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor={"password"}>Password</FieldLabel>
                                    <Input
                                        placeholder="******"
                                        autoComplete="new-password"
                                        aria-invalid={fieldState.invalid}
                                        {...field}
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        <Button type="submit" disabled={isPending}>Log In</Button>

                    </FieldGroup>
                </form>
            </CardContent>
        </Card>

    )
}