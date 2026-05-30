import {auth} from "@/lib/auth";
import {headers} from "next/headers";
import {SignOutButton} from "@/components/shared/sign-out-button";
import {ReturnButton} from "@/components/shared/return-button";

export default async function ProfilePage(){
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if(!session){
        return <p className="text-destructive">Unauthorized</p>
    }

    return(
        <section className="container space-y-8">
            <ReturnButton href={"/"} label={"Home"}/>
            <h1 className={"text-3xl font-bold"}>Profile Page</h1>

            <article className="max-w-md mx-auto items-center justify-between">
                <SignOutButton />
                <pre className="prettyprint text-sm overflow-clip">
                {
                    JSON.stringify(session,null,2)
                }
            </pre>
            </article>

        </section>

    )
}