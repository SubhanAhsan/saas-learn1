"use server";

import {LoginInput} from "@/features/auth/schemas/auth.schema";
import {auth} from "@/lib/auth";
import {headers} from "next/headers";
import {APIError} from "better-auth";

export async function signInEmailAction(form: LoginInput): Promise<{error:string | null | undefined}> {

    try{

        await auth.api.signInEmail({
            headers: await headers(),
            body: {
                email: form.email,
                password: form.password,
            }
        });

        return {error: null};

    } catch(err: unknown){
        //console.log(err);

        if(err instanceof APIError){
            return {error: err.body?.message}
        }else if (err instanceof Error){
            return {error: "Oops, something went wrong while loging in"};
        }else
        {
            return {error: "Internal Server Error" };
        }
    }
}