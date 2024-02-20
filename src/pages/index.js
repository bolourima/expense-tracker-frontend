import { useState } from "react";
import { Login } from "../components/Login";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL = "http://localhost:8080";

export default function Home() {
  console.log("main");
  return <main>{/* <Login /> */}</main>;
}
