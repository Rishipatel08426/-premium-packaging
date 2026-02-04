"use client";

import { FormEvent, useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function ContactPage() {
  const [brandName, setBrandName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(false);
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "enquiries"), {
        brandName,
        email,
        details,
        createdAt: serverTimestamp(),
      });

      setSuccess(true);
      setBrandName("");
      setEmail("");
      setDetails("");
    } catch (err: unknown) {
      console.error(err);
      setError("We couldn't send your enquiry right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-heading text-3xl tracking-tight text-olive-700 md:text-4xl">
        Start a project
      </h1>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-olive-700/85">
        Share a few details about your brand, the experience you are designing
        and the volumes you are exploring. We will respond within two business
        days with samples and pricing guidance.
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
            Project details
          </label>
          <textarea
            rows={4}
            value={details}
            onChange={(event) => setDetails(event.target.value)}
            className="w-full rounded-lg border border-sage-100 bg-beige-50/60 px-3 py-2 text-sm text-olive-700 outline-none ring-olive-500/10 focus:border-olive-500 focus:ring-2"
            placeholder="Tell us about your packaging, key formats and timelines."
            required
          />
        </div>
        {error && (
          <p className="text-xs text-red-700">{error}</p>
        )}
        {success && !error && (
          <p className="text-xs text-olive-700/80">
            Thank you — your enquiry has been sent. We will get back to you
            within two business days.
          </p>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 inline-flex items-center rounded-full bg-olive-700 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-beige-50 transition-colors hover:bg-olive-500 disabled:opacity-60"
        >
          {isSubmitting ? "Sending..." : "Send enquiry"}
        </button>
      </form>
    </main>
  );
}
