"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { SignupFormProps } from "@/types/components";

const SignupForm: React.FC<SignupFormProps> = ({
  email,
  password,
  formErrors,
  onSetEmail,
  onSetPassword,
  onSignupSubmit,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="lg:w-1/3">
      <form onSubmit={onSignupSubmit} className="flex flex-col gap-7">
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
              onChange={(e) => onSetEmail(e.target.value)}
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
              onChange={(e) => onSetPassword(e.target.value)}
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
      </form>
    </section>
  );
};

export default SignupForm;
