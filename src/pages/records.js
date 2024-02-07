import { Inter } from "next/font/google";
import { Logo } from "@/components/svg images/Logo";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { PlusIcon } from "@/components/svg images/PlusIcon";
import { OpenModal } from "@/components/OpenModal";

export default function Records() {
  return (
    <div className="relative w-screen max-w-[1440px] m-auto px-[120px]">
      <div className="flex h-[72px] justify-between items-center mb-8 shadow-xl px-3 rounded-lg">
        <div className="flex gap-5">
          <Logo />
          <a href="/dashboard">Dashboard</a>{" "}
          <a href="/records" className="font-semibold">
            Records
          </a>
        </div>
        <div className="flex gap-5 items-center">
          <button
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className="btn"
          >
            + Record
          </button>
          <p>IMG</p>
        </div>
      </div>
      <main className="flex max-w-[1440px] h-screen gap-6">
        <aside className="w-[25%] card py-6 px-4 shadow-lg">
          <p className="text-2xl font-semibold w-1/3">Records</p>
          <button
            className="btn bg-[#0166FF] text-white mt-4"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            + Add
          </button>

          <div>
            <OpenModal />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="h-8 mt-7 input input-bordered w-full max-w-xs"
          />
          <div>
            <p className="font-semibold py-6">Types</p>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">All</span>
              </label>
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Income</span>
              </label>
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Expense</span>
              </label>
            </div>
          </div>
          <div>
            <p className="font-semibold py-6">Category</p>
            <div>
              <p>Food & Drinks</p>
              <p>Shopping</p>
              <p>Housing</p>
              <p>Transportation</p>
              <p>Vehicle</p>
              <p>Life & Entertainment</p>
            </div>
          </div>
          <div>
            <p className="font-semibold py-6">Amount Range</p>
            <div className="flex gap-1">
              <input
                type="text"
                placeholder="0"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="text"
                placeholder="100"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
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
