"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Eye, EyeOff } from "lucide-react";
import { User, FormErrors } from "@/types/auth";
import Logo from "@/components/ui/Logo";
import BgGradient from "@/components/ui/BgGradient";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [formErrors, setFormErrors] = useState<FormErrors>({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored_users = localStorage.getItem("habit-tracker-users");

      if (stored_users) {
        setUsers(JSON.parse(stored_users));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window?.localStorage?.setItem(
        "habit-tracker-users",
        JSON.stringify(users),
      );
    }
  }, [users]);

  function handleSignUpForm(e: React.SubmitEvent) {
    e.preventDefault();

    let isValid = true;
    const errors = { email: "", password: "" };

    if (users.length > 0) {
      const getUser = users.find((user) => user.email === email);

      if (getUser !== undefined) {
        errors.email = "User already exists";
        isValid = false;
      }
    }

    if (email === "") {
      errors.email = "Email is required";
      isValid = false;
    } else if (
      !email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    ) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (password === "") {
      errors.password = "Password is required";
      isValid = false;
    }

    setFormErrors(errors);

    if (isValid) {
      const id = uuidv4();

      setUsers((prevUsers) => [
        ...prevUsers,
        {
          id,
          email,
          password,
          createdAt: new Date().toLocaleString(),
        },
      ]);

      setEmail("");
      setPassword("");
    }
  }

  return (
    <main>
      <section className="min-h-screen flex flex-col items-center justify-center gap-8 bg-[#0f0f13] px-6 py-14 relative overflow-hidden">
        <BgGradient />

        <div className="flex flex-col items-center gap-6 z-10">
          <Logo />

          <h1 className="text-3xl font-bold text-white tracking-tight">
            Create an account
          </h1>

          <p className="text-[#9ca3af] mt-1">
            Start building better habits today
          </p>
        </div>

        <form className="lg:w-1/3" onSubmit={handleSignUpForm}>
          <div className="flex flex-col gap-7">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-[#9ca3af] mb-1.5 uppercase tracking-widest"
              >
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
                  id="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#1c1c24] border border-[#2d2d38] rounded-xl pl-10 pr-4 py-3.5 text-white placeholder:text-[#4b4b5a] text-sm focus:outline-none focus:border-[#7c3aed] transition-colors"
                  data-testid="auth-signup-email"
                />
              </div>

              {formErrors.email && (
                <span className="inline-block text-[#ed3548] font-semibold text-sm mt-2">
                  {formErrors.email}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-xs font-medium text-[#9ca3af] mb-1.5 uppercase tracking-widest"
              >
                Password
              </label>

              <div className="relative">
                <span className="absolute left-4 top-6.25 -translate-y-1/2 text-[#6b7280]">
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
                  id="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#1c1c24] border border-[#2d2d38] rounded-xl pl-10 pr-12 py-3.5 text-white placeholder:text-[#4b4b5a] text-sm focus:outline-none focus:border-[#7c3aed] transition-colors"
                  data-testid="auth-signup-password"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-6.25 -translate-y-1/2 text-[#6b7280] cursor-pointer"
                  data-testid="auth-signup-submit"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>

                {formErrors.password && (
                  <span className="inline-block text-[#ed3548] font-semibold text-sm mt-2">
                    {formErrors.password}
                  </span>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-linear-to-r from-[#7c3aed] to-[#6d28d9] text-white font-semibold text-base shadow-lg active:scale-[0.98] transition-transform cursor-pointer"
              data-testid="auth-signup-submit"
            >
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
