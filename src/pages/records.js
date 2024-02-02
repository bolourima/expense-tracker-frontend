import { Inter } from "next/font/google";
import { Logo } from "@/components/svg images/Logo";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL = "http://localhost:8080";

export default function Records() {
  return (
    <div className="w-screen max-w-[1440px] m-auto px-[120px]">
      <div className="flex h-[72px] justify-between items-center mb-8 shadow-xl px-3 rounded-lg">
        <div className="flex gap-5">
          <Logo />
          <a href="/dashboard">Dashboard</a>{" "}
          <a href="/records" className="font-semibold">
            Records
          </a>
        </div>
        <div className="flex gap-5 items-center">
          <button className="btn">+ Record</button>
          <p>IMG</p>
        </div>
      </div>
      <main className="flex max-w-[1440px] h-screen gap-6">
        <aside className="w-[25%] card py-6 px-4 shadow-lg">
          <p className="text-2xl font-semibold w-1/3">Records</p>
          <button className="h-8 rounded-lg mt-7 bg-[#0166FF] text-white">
            {" "}
            + Add
          </button>
          <input
            type="text"
            placeholder="Search"
            className="h-8 mt-7 input input-bordered w-full max-w-xs"
          />
          <div>
            <p>Types</p>
          </div>
        </aside>
        <aside className="w-[75%]">
          <div className="flex justify-between">
            <div className="h-8 flex gap-3 mt-6 justify-center items-center">
              <button className="w-8 h-8 rounded-md bg-gray-100 shadow flex items-center justify-center">
                <FaAngleLeft />
              </button>
              <p>Last 30 days</p>
              <button className="w-8 h-8 rounded-md bg-gray-100 shadow flex items-center justify-center">
                <FaAngleRight />
              </button>
            </div>
            <select className="m-2 w-[180px] select select-bordered max-w-xs">
              <option disabled selected>
                Sort
              </option>
              <option>Newest first</option>
              <option>Oldest first</option>
            </select>
          </div>
        </aside>
      </main>
    </div>
  );
}
