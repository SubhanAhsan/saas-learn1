"use client";

import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {registerSchema, RegisterInput} from "@/features/auth/schemas/auth.schema";
import {toast} from "sonner";
import {Field, FieldError, FieldGroup, FieldLabel} from "@/components/ui/field";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {signUpEmailAction} from "@/features/auth/actions/sign-up-email.action";


export const RegisterForm = () =>{

    const router = useRouter();
    const [isPending, setIsPending] = useState(false);

    const form = useForm<RegisterInput>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    async function onSubmit(form: RegisterInput){

        setIsPending(true);

        const {error} = await signUpEmailAction(form);

        if(error){
            toast.error(error);
            setIsPending(false);
        } else{
            toast.success("Registration complete. You're all set.");
            router.push("/auth/login");
        }

        // await signUp.email({
        //     name: form.name,
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
        //           toast.error(ctx.error.message);
        //         },
        //         onSuccess: () => {
        //             toast.success("Registration complete. You're all set");
        //             router.push("/profile");
        //         },
        //     }
        // )
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>create an account to get started</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>
                        <Controller
                            name="name"
                            control={form.control}
                            render={({field, fieldState}) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor={"name"}>Full Name</FieldLabel>
                                    <Input
                                        placeholder="Yahya S"
                                        autoComplete="off"
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

                        <Button type="submit" disabled={isPending}>Sign Up</Button>

                    </FieldGroup>
                </form>
            </CardContent>
        </Card>

    )
}