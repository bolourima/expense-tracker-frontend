import { useState } from "react";

import { Inter } from "next/font/google";
import { Waiting } from "@/components/Waiting";
import { Logo } from "@/components/svg images/Logo";
import { Geld } from "@/components/svg images/Geld";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Currency() {
  const router = useRouter();
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center gap-6">
      <div className="flex items-center gap-2">
        <Logo /> <Geld />{" "}
      </div>
      <div>
        <p className="text-3xl semibold">Select base currency</p>
      </div>
      <select className="select">
        <option>MNT - Mongolian Tugrik</option>
        <option>USD - United state Dollar</option>
        <option>CNY - Chinese Yuan</option>
      </select>
      <a href="/balance">
        <button
          className="btn bg-[#0166FF]"
          onClick={() => router.push("/balance")}
        >
          Confirm
        </button>
      </a>
    </main>
  );
}
