import React from "react";
import { PlusIcon } from "./svg images/PlusIcon";

export const OpenModal = () => {
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box h-[50%] w-[790px]">
          <div className="mb-4 px-4 h-[40px] shadow-md rounded-md font-bold text-lg flex justify-between items-center">
            <h3>Add Record</h3>
            <div className="modal-action ">
              <form className="flex pb-6" method="dialog">
                {/* if there is a button, it will close the modal */}
                <button>X</button>
              </form>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2 flex flex-col gap-4">
              <div className="flex">
                <button className="w-1/2 btn bg-[#0166FF] text-white">
                  Expense
                </button>
                <button className="w-1/2 btn">Income</button>
              </div>

              <div className="bg-[#F3F4F6] p-3 rounded-md">
                <label>Amount</label>
                <input className="bg-[#F3F4F6]" type="number" placeholder="000,000"></input>
              </div>
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Find or Choose category
                </option>
                <option>
                  <button>
                    <PlusIcon /> <p>Add Category</p>
                  </button>
                </option>
                <option>Gift</option>
                <option>Food</option>
                <option>Drink</option>
                <option>Taxi</option>
                <option>Coffee</option>
              </select>
              <button className="btn bg-[#0166FF] text-white">
                Add Record
              </button>
            </div>
            <div className="w-1/2">
              <div>
                <p>Payee</p>
                <input className="input h-[50px] w-full bg-[#F3F4F6]"></input>
              </div>
              <div>
                <p>Note</p>
                <input className="input h-[165px] w-full bg-[#F3F4F6]"></input>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};
