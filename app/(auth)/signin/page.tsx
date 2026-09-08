"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";


export default function SignInPage() {
    const [email, setEmail] = useState("")
    const [sent, setSent] = useState(false)

    const resendAction = (formData: FormData) => {
        signIn("resend", { email: formData.get("email"), redirect:false, redirectTo:"/calendar" } )
        setEmail(formData.get("email") as string)
        setSent(true)
    } 

    if (sent) {
        return (
            <div className="flex flex-col min-h-screen items-center justify-center">
                <p className="text-xl font-fredoka text-coffee">
                Check your email for a sign-in link!
                </p>
                <div className="text-sm text-paper">Sent to {email}</div>
            </div>
        )
    }

    return (
        <div className="flex min-h-screen items-center justify-center">
            <form action={resendAction} className="flex flex-col gap-4 bg-paper p-8 rounded-2xl w-full max-w-sm">
                <h1 className="text-3xl font-fredoka text-coffee text-center">Sign In</h1>
                <label htmlFor="email-resend">
                    <input
                        className="border rounded-lg px-4 py-2 outline-none"
                        type="email"
                        id="email-resend"
                        name="email"
                        // onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        required
                    />
                </label>
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