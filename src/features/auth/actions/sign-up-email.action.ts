"use server";

import {RegisterInput} from "@/features/auth/schemas/auth.schema";
import {auth} from "@/lib/auth";
import {APIError} from "better-auth";

export async function signUpEmailAction(form: RegisterInput): Promise<{error:string | null | undefined}> {

    try{

        await auth.api.signUpEmail({
           body: {
               name: form.name,
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