import z from "zod";

export const editUserProfileSchema = z.object({
    name: z.string().min(1),
    grade: z.enum(["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th"]),
    state: z.string().min(1),
    location: z.string().min(1),
    profileImage: z.string().url(),
    language: z.string().min(1),
})
