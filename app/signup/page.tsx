"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Logo from "@/src/components/ui/Logo";

function Page() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main>
      <section className="min-h-screen flex flex-col items-center justify-center gap-8 bg-[#0f0f13] px-6 py-14 relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-85 h-85 rounded-full bg-[#7c3aed] opacity-20 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-15 -right-15 w-70 h-70 rounded-full bg-[#06b6d4] opacity-15 blur-[90px] pointer-events-none" />
        <div />

        <div className="flex flex-col items-center gap-6 z-10">
          <Logo />

          <h1 className="text-3xl font-bold text-white tracking-tight">
            Create an account
          </h1>

          <p className="text-[#9ca3af] mt-1">
            Start building better habits today
          </p>
        </div>

        <form className="lg:w-1/3">
          <div className="flex flex-col gap-7">
            <div>
              <label className="block text-xs font-medium text-[#9ca3af] mb-1.5 uppercase tracking-widest">
                Full Name
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b7280]">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle
                      cx="9"
                      cy="5.5"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M2 16c0-3.314 3.134-6 7-6s7 2.686 7 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>

                <input
                  type="text"
                  placeholder="Jane Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-[#1c1c24] border border-[#2d2d38] rounded-xl pl-10 pr-4 py-3.5 text-white placeholder:text-[#4b4b5a] text-sm focus:outline-none focus:border-[#7c3aed] transition-colors"
                />
              </div>
            </div>

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
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#1c1c24] border border-[#2d2d38] rounded-xl pl-10 pr-12 py-3.5 text-white placeholder:text-[#4b4b5a] text-sm focus:outline-none focus:border-[#7c3aed] transition-colors"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6b7280] cursor-pointer"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button className="w-full py-4 rounded-2xl bg-linear-to-r from-[#7c3aed] to-[#6d28d9] text-white font-semibold text-base shadow-lg active:scale-[0.98] transition-transform cursor-pointer">
              Create Account
            </button>
          </div>
        </form>

        <div className="px-6 text-center z-10">
          <p className="text-[#6b7280] text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-[#c4b5fd] font-semibold">
              Login
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Page;
