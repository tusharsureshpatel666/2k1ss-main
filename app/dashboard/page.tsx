"use client";

import { useEffect } from "react";
import SearchBox from "./components/Main";
import ListedStore from "./findstore/ListedStore";
import prisma from "@/lib/prisma";

export default function Dashboard() {

  // useEffect(() => {
  //    const handleData = async() => {
  //           const res = await 
  //    }
  // })
  
  return (
    <div className="w-full max-w-6xl">
      <SearchBox />
      <div className="h-screen">

        <ListedStore />
      </div>
    </div>
  );
}
