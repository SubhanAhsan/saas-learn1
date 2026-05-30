import { Button } from "@/components/ui/button";
import Link from "next/link";
import {ArrowLeftIcon} from "lucide-react";

interface ReturnButtonProps {
    href: string,
    label: string,
}

export const ReturnButton = ({href, label}: ReturnButtonProps) =>{
    return(
        <Button size="sm" asChild variant={"outline"}>
            <Link href={href}>
                <ArrowLeftIcon />{label}
            </Link>
        </Button>
    )
}