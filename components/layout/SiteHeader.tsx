"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import { auth } from "@/lib/firebase";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About & Sustainability" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [user, setUser] = useState<User | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsInitializing(false);
    });

    return () => unsubscribe();
  }, []);

  const displayName = user?.displayName || user?.email || "";

  async function handleLogout() {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out", error);
    }
  }

  return (
    <header className="border-b border-gold-200/60 bg-beige-50/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xs font-medium tracking-[0.3em] text-olive-700/70 uppercase">
            Areca Studio
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-olive-700/80 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-olive-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 text-sm">
          {user ? (
            <>
              <span className="hidden text-xs uppercase tracking-[0.18em] text-olive-700/70 md:inline">
                {displayName}
              </span>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-full border border-olive-700/30 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-olive-700 transition-colors hover:border-olive-700 hover:text-olive-700"
              >
                Log out
              </button>
            </>
          ) : (
            !isInitializing && (
              <>
                <Link
                  href="/login"
                  className="text-olive-700/80 transition-colors hover:text-olive-700"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="rounded-full bg-olive-700 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-beige-50 transition-colors hover:bg-olive-500"
                >
                  Get started
                </Link>
              </>
            )
          )}
        </div>
      </div>
    </header>
  );
}
