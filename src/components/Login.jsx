import React, { useState } from "react";
import { Geld } from "./svg images/Geld";
import { Logo } from "./svg images/Logo";
import { useRouter } from "next/router";

const BASE_URL = "http://localhost:8080";

export const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [loginPassport, setLoginPassport] = useState("");

  const createLogin = async () => {
    if (loginPassport && email) {
      try {
        const input = {
          email: email,
          loginPassport: loginPassport,
        };
        const fetchData = await fetch(BASE_URL, {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(input),
        });
        if (fetchData.status === 201) {
          router.push("./dashboard");
        } else {
          console.log("error during login");
          alert("wrong passport or email !");
        }
      } catch (error) {
        console.error("ERROR MESSAGE: ", error);
      }
    }
  };

  return (
    <main className="w-full h-screen flex">
      <div className="w-1/2 flex justify-center items-center">
        <div className="flex flex-col gap-10 w-[384px]">
          <div className="flex justify-center items-center gap-2">
            <Logo /> <Geld />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-2xl font-semibold">Welcome Back</p>
            <p>Welcome back, Please enter your details</p>
          </div>
          <div className="flex flex-col gap-3">
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="input bg-[#F3F4F6]"
              placeholder="Email"
            ></input>
            <input
              onChange={(e) => setLoginPassport(e.target.value)}
              className="input bg-[#F3F4F6]"
              placeholder="Passport"
            ></input>
            <button
              onClick={() => createLogin()}
              className="btn bg-[#0166FF] text-white"
            >
              Log in
            </button>
          </div>
          <div className="flex justify-center">
            <p> Don't you have account?</p>
            <a href="/signup" className="px-3 text-[#0166FF]">
              Sign up
            </a>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-[#0166FF]"></div>
    </main>
  );
};
