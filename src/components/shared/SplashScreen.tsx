import Link from "next/link";
import Logo from "../ui/Logo";
import BgGradient from "../ui/BgGradient";

export default function SplashScreen() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center gap-8 bg-[#0f0f13] px-6 py-14 relative overflow-hidden"
      data-testid="splash-screen"
    >
      <BgGradient />

      <div className="flex flex-col items-center gap-6 z-10">
        <Logo />

        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
            HabitFlow
          </h1>

          <p className="text-[#9ca3af] mt-2 leading-relaxed">
            Build lasting habits, one day at a time.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-5 w-full max-w-sm z-10">
        <Link
          href="/login"
          className="w-full py-4 rounded-lg bg-linear-to-r from-[#7c3aed] to-[#6d28d9] text-white font-semibold text-base shadow-lg active:scale-[0.98] transition-transform cursor-pointer text-center"
        >
          Login
        </Link>

        <Link
          href="/signup"
          className="w-full py-4 rounded-lg bg-[#1c1c24] border border-[#2d2d38] text-[#c4b5fd] font-semibold text-base active:scale-[0.98] transition-transform cursor-pointer text-center"
        >
          Sign up
        </Link>
      </div>
    </section>
  );
}
