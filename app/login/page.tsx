"use client";

import { FormEvent, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";

const googleProvider = new GoogleAuthProvider();

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (err: unknown) {
      console.error(err);
      setError("Unable to sign in. Please check your details and try again.");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleGoogleSignIn() {
    setError(null);
    setIsLoading(true);

    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/");
    } catch (err: unknown) {
      console.error(err);
      setError("Unable to sign in with Google. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="mx-auto flex max-w-md flex-col px-6 py-16">
      <h1 className="font-heading text-3xl tracking-tight text-olive-700">
        Welcome back
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-olive-700/85">
        Sign in to manage orders, view custom developments and access brand
        assets.
      </p>
      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="space-y-2 text-sm">
          <label className="block text-xs font-medium uppercase tracking-[0.18em] text-olive-700/70">
            Work email
          </label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-lg border border-sage-100 bg-beige-50/60 px-3 py-2 text-sm text-olive-700 outline-none ring-olive-500/10 focus:border-olive-500 focus:ring-2"
            placeholder="name@brand.com"
            required
          />
        </div>
        <div className="space-y-2 text-sm">
          <label className="block text-xs font-medium uppercase tracking-[0.18em] text-olive-700/70">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-lg border border-sage-100 bg-beige-50/60 px-3 py-2 text-sm text-olive-700 outline-none ring-olive-500/10 focus:border-olive-500 focus:ring-2"
            placeholder="••••••••"
            required
          />
        </div>
        {error && (
          <p className="text-xs text-red-700">{error}</p>
        )}
        <button
          type="submit"
          disabled={isLoading}
          className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-olive-700 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-beige-50 transition-colors hover:bg-olive-500 disabled:opacity-60"
        >
          {isLoading ? "Signing in..." : "Log in"}
        </button>
      </form>
      <div className="mt-4 flex items-center gap-3 text-[11px] text-olive-700/60">
        <div className="h-px flex-1 bg-sage-100" />
        <span>or</span>
        <div className="h-px flex-1 bg-sage-100" />
      </div>
      <button
        type="button"
        onClick={handleGoogleSignIn}
        disabled={isLoading}
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-olive-700/30 bg-beige-50/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-olive-700 transition-colors hover:border-olive-700 hover:text-olive-700 disabled:opacity-60"
      >
        <span className="h-4 w-4 rounded-full bg-olive-700/10" />
        Continue with Google
      </button>
      <p className="mt-4 text-xs text-olive-700/70">
        New to Areca Studio? <a href="/signup" className="underline">Create an account</a>.
      </p>
    </main>
  );
}
