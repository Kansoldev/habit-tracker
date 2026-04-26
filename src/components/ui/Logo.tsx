import Link from "next/link";
import { Activity } from "lucide-react";

function Logo() {
  return (
    <Link href="/">
      <div className="w-24 h-24 rounded-[28px] bg-linear-to-br from-[#7c3aed] to-[#06b6d4] flex items-center justify-center shadow-2xl">
        <Activity size={45} className="text-white" />
      </div>
    </Link>
  );
}

export default Logo;
