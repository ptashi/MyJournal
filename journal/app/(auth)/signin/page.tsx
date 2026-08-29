"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";


export default function SignInPage() {
    const [email, setEmail] = useState("")
    const [sent, setSent] = useState(false)

    async function handleSubmit(e: React.SubmitEvent) {
        e.preventDefault();
        await signIn("resend", { email, redirect:false })
        setSent(true)
    }

    if (sent) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <p className="text-xl font-fredoka text-coffee">
                Check your email for a sign-in link!
                </p>
                <div className="text-sm text-page-bg">Sent to {email}</div>
            </div>
        )
    }

    return (
        <div className="flex min-h-screen items-center justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-paper p-8 rounded-2xl w-full max-w-sm">
                <h1 className="text-3xl font-fredoka text-coffee text-center">Sign In</h1>
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="border rounded-lg px-4 py-2 outline-none"
                />
                <button
                type="submit"
                className="bg-coffee text-white rounded-full py-2 font-fredoka hover:opacity-90"
                >
                Send Magic Link
                </button>
            </form>
        </div>
  );
}