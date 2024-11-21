"use client"
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/user")
  }
  const handleAdmin = () => {
    router.push("/admin")
  }

  return (
    <div>
   
    <div className="bg-blue-600 text-white p-4">
      <h1 className="text-center text-2xl font-bold">Selise Employee Bus Seat Booking</h1>
    </div>
  
    
    <div className="flex justify-center items-center gap-8 mt-[20vh]">
      <div>
        <Button onClick={handleClick} className="bg-blue-500 text-white">User</Button>
      </div>
      <div>
        <Button onClick={handleAdmin} className="bg-blue-500 text-white">Admin</Button>
      </div>
    </div>
  </div>
  );
}
