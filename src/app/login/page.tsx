import Link from "next/link";
import Logo from "@/components/ui/Logo";
import BgGradient from "@/components/ui/BgGradient";
import LoginForm from "@/components/auth/LoginForm";

function Page() {
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

        <LoginForm />

        <div className="px-6 text-center z-10">
          <p className="text-[#6b7280] text-sm">
            Don't have an account?{" "}
            <Link href="/signup" className="text-[#c4b5fd] font-semibold">
              Sign up
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Page;
