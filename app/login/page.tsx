"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import Logo from "@/src/components/ui/Logo";
import BgGradient from "@/src/components/ui/BgGradient";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const passwordField = useRef<HTMLInputElement | null>(null);

  function showPassword() {
    if (passwordField.current) {
      passwordField.current.type =
        passwordField.current.type === "password" ? "text" : "password";
    }
  }

  return (
    <main>
      <section className="min-h-screen flex flex-col items-center justify-center gap-8 bg-[#0f0f13] px-6 py-14 relative overflow-hidden">
        <BgGradient />

        <div className="flex flex-col items-center gap-6 z-10">
          <Logo />

          <h1 className="text-3xl font-bold text-white tracking-tight">
            Welcome Back!
          </h1>

          <p className="text-[#9ca3af] mt-1">Sign in to continue your streak</p>
        </div>

        <form className="lg:w-1/3">
          <div className="flex flex-col gap-7">
            <div>
              <label className="block text-xs font-medium text-[#9ca3af] mb-1.5 uppercase tracking-widest">
                Email
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b7280]">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect
                      x="2"
                      y="4"
                      width="14"
                      height="10"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M2 7L9 11L16 7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>

                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#1c1c24] border border-[#2d2d38] rounded-xl pl-10 pr-4 py-3.5 text-white placeholder:text-[#4b4b5a] text-sm focus:outline-none focus:border-[#7c3aed] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#9ca3af] mb-1.5 uppercase tracking-widest">
                Password
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b7280]">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect
                      x="3"
                      y="7"
                      width="12"
                      height="9"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M6 7V5.5C6 3.567 7.567 2 9.5 2V2C11.433 2 13 3.567 13 5.5V7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle cx="9.5" cy="11.5" r="1" fill="currentColor" />
                  </svg>
                </span>

                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  ref={passwordField}
                  className="w-full bg-[#1c1c24] border border-[#2d2d38] rounded-xl pl-10 pr-12 py-3.5 text-white placeholder:text-[#4b4b5a] text-sm focus:outline-none focus:border-[#7c3aed] transition-colors"
                />

                <button
                  type="button"
                  onClick={showPassword}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6b7280] cursor-pointer"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M1 9C1 9 4 3 9 3C14 3 17 9 17 9C17 9 14 15 9 15C4 15 1 9 1 9Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="9"
                      cy="9"
                      r="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <button className="w-full py-4 rounded-2xl bg-linear-to-r from-[#7c3aed] to-[#6d28d9] text-white font-semibold text-base shadow-lg active:scale-[0.98] transition-transform cursor-pointer">
              Login
            </button>
          </div>
        </form>

        <div className="px-6 text-center z-10">
          <p className="text-[#6b7280] text-sm">
            Don't have an account?{" "}
            <Link href="#" className="text-[#c4b5fd] font-semibold">
              Sign up
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Page;
