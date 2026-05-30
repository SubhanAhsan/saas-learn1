"use client"

import {Button} from "@/components/ui/button";

import {signOut} from "@/lib/auth-client";
import {toast} from "sonner";
import {useRouter} from "next/navigation";
import {useState} from "react";

export const SignOutButton = () => {
    const router = useRouter();
    const [isPending, setIsPending] = useState(false);

    async function handleSignOut() {
        await signOut({
            fetchOptions :{
                onRequest : () => {
                    setIsPending(true);
                },
                onResponse : () => {
                    setIsPending(false);
                },
                onError: (ctx) => {
                    toast.error(ctx.error.message);
                },
                onSuccess: () => {
                    toast.success("You've logged out. See you soon!");
                    router.push("/auth/login");
                }
            }
        })
    }

    return (
        <Button onClick={handleSignOut} size="sm" variant="destructive" disabled={isPending}>
            Sign Out
        </Button>
    );
}