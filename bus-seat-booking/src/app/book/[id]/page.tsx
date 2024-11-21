"use client"
import SeatBookingForm from '@/components/SeatComponent/SeatBookingForm'
import { useParams } from 'next/navigation';
import React, { use } from 'react'

type Props = {}

const page = (props: Props) => {
  const {id} = useParams();
  return (
    <SeatBookingForm busNumber={id}/>
  )
}

export default page