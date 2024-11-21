"use client";
import React, {  useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
 
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";


const AdminPanel = () => {
  const [selectedBus, setSelectedBus] = useState("");
  const router = useRouter();
  const buses = ["S098", "B568", "S897", "A587", "C741", "D125", "E256"];
  const handleClick = (selectedBus: string) => {
    router.push(`/seat/${selectedBus}`);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      
        <div className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Admin Panel
        </div>

       
        <div className="mb-4">
          <div className="text-lg font-medium text-gray-600 mb-2">
            SELECT DESTINATION:
          </div>
          <div>
            <Select onValueChange={(value) => setSelectedBus(value)}>
              <SelectTrigger className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <SelectValue placeholder="Select Destination" />
              </SelectTrigger>
              <SelectContent className="bg-white rounded-md shadow-lg">
                <SelectGroup>
                  {buses.map((bus) => (
                    <SelectItem key={bus} value={bus}>
                      {bus}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

       
        {selectedBus && (
          <div className="mt-6 flex justify-center">
            <Button
              onClick={() => handleClick(selectedBus)}
              className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              SEE DETAILS OF BUS NO. {selectedBus}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
export default AdminPanel;
