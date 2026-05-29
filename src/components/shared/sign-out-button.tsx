"use client"

import {Button} from "@/components/ui/button";

import {signOut} from "@/lib/auth-client";
import {toast} from "sonner";
import {useRouter} from "next/navigation";

export const SignOutButton = () => {
    const router = useRouter();

    async function handleSignOut() {
        await signOut({
            fetchOptions :{
                onError: (ctx) => {
                    toast.error(ctx.error.message);
                },
                onSuccess: () => {
                    router.push("/auth/login");
                }
            }
        })
    }

    return (
        <Button onClick={handleSignOut} size="sm" variant="destructive">Sign Out</Button>
    );
}