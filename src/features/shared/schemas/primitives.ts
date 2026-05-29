import { z } from "zod";

export const email = z.string().email();
export const password = z.string().min(6);
export const name = z.string().min(2).max(50);
export const bio = z.string().max(200);
export const avatarUrl = z.string().url();