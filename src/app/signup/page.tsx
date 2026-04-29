import Link from "next/link";
import Logo from "@/components/ui/Logo";
import BgGradient from "@/components/ui/BgGradient";
import SignupForm from "@/components/auth/SignupForm";

function Page() {
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

        <SignupForm />

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
