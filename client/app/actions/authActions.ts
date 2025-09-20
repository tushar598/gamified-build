"use server";

import { signIn, signOut } from "@/auth";

export async function handleGithubSignIn() {
  await signIn("github", { redirectTo: "/dashboard" });
}

export async function handleGoogleSignIn() {
  await signIn("google", { redirectTo: "/dashboard" });
}

export async function handleSignOut() {
  await signOut({ redirectTo: "/" });
}
