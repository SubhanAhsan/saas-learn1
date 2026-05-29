import {z} from "zod";
import {name, avatarUrl, bio} from "@/features/shared/schemas/primitives";

export const profileSchema = z.object({
    name,
    avatarUrl : avatarUrl.optional(),
    bio: bio.optional(),
})

export type ProfileInput = z.infer<typeof profileSchema>;