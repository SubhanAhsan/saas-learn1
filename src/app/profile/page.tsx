import {auth} from "@/lib/auth";
import {headers} from "next/headers";
import {SignOutButton} from "@/components/shared/sign-out-button";

export default async function ProfilePage(){
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if(!session){
        return <p className="text-destructive">Unauthorized</p>
    }

    return(
        <section className="container">
            <h1>Profile Page</h1>
            <SignOutButton />
            <pre className="prettyprint text-sm overflow-clip">
                {
                    JSON.stringify(session,null,2)
                }
            </pre>
        </section>

    )
}