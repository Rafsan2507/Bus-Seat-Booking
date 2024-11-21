"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookedSeats } from "@/redux/SeatSlice/SeatSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useRouter } from "next/navigation";

const UserSeatsUi = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const bookedSeats = useSelector((state: RootState) => state.seat.seats);

  useEffect(() => {
    dispatch(getAllBookedSeats());
  }, [dispatch]);

  const seatLabels = [
    "A1",
    "A2",
    "A3",
    "B1",
    "B2",
    "B3",
    "C1",
    "C2",
    "C3",
    "D1",
    "D2",
    "D3",
    "E1",
    "E2",
    "E3",
  ];

  const handleSeatClick = (label: string) => {
    router.push(`/book/${label}`);
  };

  return (
    <div className="mx-[8vw]">
      <div className="pt-4 p-6 border-2 rounded-full w-max text-lg font-semibold text-blue-600 border-blue-600 shadow-lg flex justify-center items-center">
        Driver
      </div>

      <div className="grid grid-cols-3 gap-6 mt-6">
        {seatLabels.map((label) => {
          const isBooked = bookedSeats.some((seat) => seat.busNo === label);

          return (
            <div
              key={label}
              className={`transition-all duration-200 transform border border-blue-500 rounded-lg p-6 text-center font-medium shadow-md cursor-pointer h-[20vh]  ${
                isBooked
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-white text-blue-600 hover:bg-blue-100 hover:scale-105"
              }`}
              onClick={() => {
                if (!isBooked) {
                  handleSeatClick(label);
                }
              }}
            >
              {label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserSeatsUi;
