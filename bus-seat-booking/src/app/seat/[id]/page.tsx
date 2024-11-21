"use client";
import SeatsUI from "@/components/SeatComponent/SeatsUI";
import { useParams } from "next/navigation";
import React from "react";



const Page = () => {
  const { id } = useParams();
  return (
    <div className="bg-[#f4f5ff]">
      <SeatsUI busNumber={id} />
    </div>
  );
};

export default Page;
