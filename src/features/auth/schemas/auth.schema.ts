import {z} from "zod";
import {name, email, password} from "@/features/shared/schemas/primitives"

export const registerSchema = z.object({
    name,
    email,
    password,
});

export type RegisterInput = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
    email,
    password,
})

export type LoginInput = z.infer<typeof loginSchema>;