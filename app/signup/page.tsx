"use client";

import { FormEvent, useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { auth, db } from "@/lib/firebase";

export default function SignupPage() {
  const router = useRouter();
  const [brandName, setBrandName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const googleProvider = new GoogleAuthProvider();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      if (credentials.user && brandName) {
        await updateProfile(credentials.user, { displayName: brandName });
      }

      if (credentials.user) {
        const userRef = doc(db, "users", credentials.user.uid);
        await setDoc(
          userRef,
          {
            displayName: brandName || credentials.user.displayName || null,
            email: credentials.user.email,
            provider: "password",
            createdAt: new Date().toISOString(),
          },
          { merge: true },
        );
      }

      router.push("/");
    } catch (err: unknown) {
      console.error(err);
      setError("Unable to create an account. Please review your details.");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleGoogleSignIn() {
    setError(null);
    setIsLoading(true);

    try {
      const result = await signInWithPopup(auth, googleProvider);

      if (result.user) {
        const userRef = doc(db, "users", result.user.uid);
        await setDoc(
          userRef,
          {
            displayName: result.user.displayName,
            email: result.user.email,
            provider: "google",
            createdAt: new Date().toISOString(),
          },
          { merge: true },
        );
      }
      router.push("/");
    } catch (err: unknown) {
      console.error(err);
      setError("Unable to continue with Google. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="mx-auto flex max-w-md flex-col px-6 py-16">
      <h1 className="font-heading text-3xl tracking-tight text-olive-700">
        Create a studio account
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-olive-700/85">
        Set up secure access for your team to manage packaging specs, orders and
        custom briefs.
      </p>
      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="space-y-2 text-sm">
          <label className="block text-xs font-medium uppercase tracking-[0.18em] text-olive-700/70">
            Brand name
          </label>
          <input
            value={brandName}
            onChange={(event) => setBrandName(event.target.value)}
            className="w-full rounded-lg border border-sage-100 bg-beige-50/60 px-3 py-2 text-sm text-olive-700 outline-none ring-olive-500/10 focus:border-olive-500 focus:ring-2"
            placeholder="E.g. Mira Atelier"
            required
          />
        </div>
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
            placeholder="Create a strong password"
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
          {isLoading ? "Creating account..." : "Create account"}
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
        Already working with us? <a href="/login" className="underline">Log in to your studio</a>.
      </p>
    </main>
  );
}
