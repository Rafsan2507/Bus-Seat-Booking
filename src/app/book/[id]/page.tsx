"use client"
import React from 'react'
import { useParams } from 'next/navigation';
import SeatBookingForm from '@/components/SeatComponent/SeatBookingForm'

export default function Page() {
  const params = useParams();
  const id = params.id;
  
  return (
    <SeatBookingForm busNumber={id} />
  )
}