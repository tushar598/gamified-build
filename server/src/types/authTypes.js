import z from "zod";

// Schema for user registration
export const registerUserSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(6),
});

export const loginUserSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

export const onboardingSchema = z.object({
    grade: z.enum(["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th"]),
    state: z.string().min(1),
    location: z.string().min(1),
    profileImage: z.string().url(),
    language: z.string().min(1),
});
