import { Activity } from "lucide-react";

export default function SplashScreen() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-8 bg-[#0f0f13] px-6 py-14 relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-85 h-85 rounded-full bg-[#7c3aed] opacity-20 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-15 -right-15 w-70 h-70 rounded-full bg-[#06b6d4] opacity-15 blur-[90px] pointer-events-none" />
      <div />

      <div className="flex flex-col items-center gap-6 z-10">
        <div className="w-24 h-24 rounded-[28px] bg-linear-to-br from-[#7c3aed] to-[#06b6d4] flex items-center justify-center shadow-2xl">
          <Activity size={45} className="text-white" />
        </div>

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
        <button className="w-full py-4 rounded-lg bg-linear-to-r from-[#7c3aed] to-[#6d28d9] text-white font-semibold text-base shadow-lg active:scale-[0.98] transition-transform cursor-pointer">
          Login
        </button>

        <button className="w-full py-4 rounded-lg bg-[#1c1c24] border border-[#2d2d38] text-[#c4b5fd] font-semibold text-base active:scale-[0.98] transition-transform cursor-pointer">
          Sign up
        </button>
      </div>
    </section>
  );
}
