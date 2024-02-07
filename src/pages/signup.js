import { Geld } from "@/components/svg images/Geld";
import { Logo } from "@/components/svg images/Logo";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const BASE_URL = "http://localhost:8080";

export default function Signup() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [passport, setPassport] = useState("");
  const [rePassport, setRePassport] = useState("");
  const [isPassportMatch, setIsPassportMatch] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch(BASE_URL + "/users");
      const data = await res.json();

      setUsers(data);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleInputChange = (e) => {
    console.log("e.target.value", e.target.value);
    console.log("e.target.name", e.target.name);
    const value = e.target.value;
    if (e.target.name === "passport") {
      setPassport(value, () => setIsPassportMatch(value === rePassport));
    } else if (e.target.name === "rePassport") {
      setRePassport(value, () => setIsPassportMatch(passport === value));
    }
  };

  const createData = async () => {
    if (!name || !email || !passport) {
      return alert("Field is required");
    }
    console.log("isPassportMatch", isPassportMatch);
    if (isPassportMatch) {
      const newUser = {
        name,
        email,
        passport,
      };
      console.log("newUser", newUser);
      try {
        const res = await fetch(BASE_URL + "/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser),
        });
        if (res.ok) alert("Successfully Created User");
      } catch (error) {
        alert("ERROR BOL: " + error.message);
      }
    } else return alert("The password must be the same as before");
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main className="w-full h-screen flex">
      <div className="w-1/2 flex justify-center items-center">
        <div className="flex flex-col gap-10 w-[384px]">
          <div className="flex justify-center items-center gap-2">
            <Logo /> <Geld />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-2xl font-semibold">Create Geld account</p>
            <p>Sign up below to create your Wallet account</p>
          </div>
          <div className="flex flex-col gap-3">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="input bg-[#F3F4F6]"
              placeholder="Name"
            ></input>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="input bg-[#F3F4F6]"
              placeholder="Email"
            ></input>
            <input
              type="text"
              name="passport"
              onChange={handleInputChange}
              value={passport}
              className="input bg-[#F3F4F6]"
              placeholder="Passport"
            />
            <input
              type="text"
              name="rePassport"
              onChange={handleInputChange}
              value={rePassport}
              className="input bg-[#F3F4F6]"
              placeholder="Re-passport"
            />
            <button
              onClick={() => createData()}
              className="btn bg-[#0166FF] text-white"
            >
              Sign up
            </button>
          </div>
          <div className="flex justify-center">
            <p>Already have account?</p>
            <a href="/" className="px-3 text-[#0166FF]">
              Log in
            </a>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-[#0166FF]"></div>
    </main>
  );
}
