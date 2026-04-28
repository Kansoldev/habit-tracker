"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { User, FormErrors } from "@/types/auth";
import Logo from "@/components/ui/Logo";
import BgGradient from "@/components/ui/BgGradient";
import SignupForm from "@/components/auth/SignupForm";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

      window.localStorage?.setItem(
        "habit-tracker-session",
        JSON.stringify({
          userId: id,
          email: email,
        }),
      );

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

        <SignupForm
          email={email}
          password={password}
          formErrors={formErrors}
          onSetEmail={setEmail}
          onSetPassword={setPassword}
          onSignupSubmit={handleSignUpForm}
        />

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
