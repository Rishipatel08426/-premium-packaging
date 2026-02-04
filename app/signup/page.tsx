"use client";

import { FormEvent, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";

export default function SignupPage() {
  const router = useRouter();
  const [brandName, setBrandName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

      router.push("/");
    } catch (err: unknown) {
      console.error(err);
      setError("Unable to create an account. Please review your details.");
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
      <p className="mt-4 text-xs text-olive-700/70">
        Already working with us? <a href="/login" className="underline">Log in to your studio</a>.
      </p>
    </main>
  );
}
