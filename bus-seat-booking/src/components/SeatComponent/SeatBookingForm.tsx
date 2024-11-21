"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addSeat } from "@/redux/SeatSlice/SeatSlice";

type Props = {
  busNumber: string | string[] | undefined;
};

const SeatBookingForm = ({ busNumber }: Props) => {
  const [name, setName] = useState("");
  const [busNo, setBusNo] = useState(busNumber);
  const [seatNo, setSeatNo] = useState("S098");
  const [destination, setDestination] = useState("");
  const [time, setTime] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const destinations = [
    "MIRPUR 11",
    "DHANMONDI 27",
    "BANANI 11",
    "GULSHAN 2",
    "UTTARA",
    "MOHAMMADPUR",
    "MIRPUR 2",
  ];
  const times = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "4:00 PM",
    "5:00 PM",
    "7:00 PM",
    "8:00 PM",
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newSeatBook = {
      name,
      busNo,
      seatNo,
      destination,
      time,
    };
    await dispatch(addSeat(newSeatBook));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg"
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Seat Booking Form
        </h2>
      </div>

      
      <div className="flex flex-col md:flex-row items-center mb-4">
        <Label
          htmlFor="name"
          className="text-lg font-medium text-gray-700 md:w-1/4"
        >
          Name:
        </Label>
        <div className="flex-1">
          <Input
            id="name"
            className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>

      
      <div className="flex flex-col md:flex-row items-center mb-4">
        <div className="text-lg font-medium text-gray-700 md:w-1/4">
          BUS NO:
        </div>
        <div className="flex-1 text-lg text-gray-600">{busNo}</div>
      </div>

      
      <div className="flex flex-col md:flex-row items-center mb-4">
        <div className="text-lg font-medium text-gray-700 md:w-1/4">
          SEAT NO:
        </div>
        <div className="flex-1 text-lg text-gray-600">{seatNo}</div>
      </div>

    
      <div className="flex flex-col md:flex-row items-center mb-6">
        <div className="text-lg font-medium text-gray-700 md:w-1/4">
          SELECT DESTINATION:
        </div>
        <div className="flex-1">
          <Select onValueChange={(value) => setDestination(value)}>
            <SelectTrigger className="w-full md:w-[250px] p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <SelectValue placeholder="Select Destination" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {destinations.map((destination) => (
                  <SelectItem key={destination} value={destination}>
                    {destination}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      
      <div className="flex flex-col md:flex-row items-center mb-6">
        <div className="text-lg font-medium text-gray-700 md:w-1/4">
          SELECT TIME:
        </div>
        <div className="flex-1">
          <Select onValueChange={(value) => setTime(value)}>
            <SelectTrigger className="w-full md:w-[250px] p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <SelectValue placeholder="Select Time" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {times.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      
      <div className="flex justify-center mt-6">
        <Button
          type="submit"
          className="w-full md:w-[200px] p-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Book Seat
        </Button>
      </div>
    </form>
  );
};
export default SeatBookingForm;
