import { Inter } from "next/font/google";
import { Logo } from "@/components/svg images/Logo";
import { LogoWhite } from "@/components/svg images/LogoWhite";
import { GreenDot } from "@/components/svg images/GreenDot";
import { BlueDot } from "@/components/svg images/Bluedot";
import { Upsum } from "@/components/svg images/Upsum";
import { OpenModal } from "@/components/OpenModal";

// const inter = Inter({ subsets: ["latin"] });

export default function Dashboard() {
  return (
    <main className="w-screen max-w-[1440px] m-auto px-[120px]">
      <div className="flex h-[72px] justify-between items-center mb-8 shadow-xl px-3 rounded-lg">
        <div className="flex gap-5">
          <Logo />
          <a className="font-semibold">Dashboard</a>
          <a href="/records">Records</a>
        </div>
        <div className="flex gap-5 items-center">
          <button
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className="btn"
          >
            + Record
          </button>
          <OpenModal />
        </div>
      </div>
      <div className="h-[220px] flex justify-between">
        <div className="card w-96 shadow-xl bg-[#1C64F2] text-[#FFF] flex flex-col items-stretch">
          <div className="card-body max-w-sm min-w-40 flex flex-col justify-between">
            <div>
              <LogoWhite />
            </div>
            <div>
              <h2 className="card-title mb-2">Cash</h2>
              <p>1,000,000</p>
            </div>
          </div>
        </div>
        <div className="card w-96 shadow-xl flex flex-col items-stretch">
          <div className="card-body flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <GreenDot />
              <p>Your Income</p>
            </div>
            <div>
              <h2 className="card-title mb-2">1,200,000</h2>
              <p>Your Income Amount</p>
            </div>
            <div className="flex gap-2">
              <BlueDot />
              <p>32% from last month</p>
            </div>
          </div>
        </div>
        <div className="card w-96 shadow-xl flex flex-col items-stretch">
          <div className="card-body flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <Upsum />
              <p>Total Expenses</p>
            </div>
            <div>
              <h2 className="card-title mb-2">1,200,000</h2>
              <p>Your Income Amount</p>
            </div>
            <div className="flex gap-2">
              <Upsum />
              <p>32% from last month</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
