import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Seat {
   
    name: string;
    busNo: string | string[] | undefined;
    seatNo: string;
    destination: string;
    time: string;
    id?: string;
}

export interface SeatState {
    seats: Seat[];
    seat: Seat;
}




const initialState: SeatState = {
    seats: [], 
    seat: {
        name: "",
        busNo: "",
        seatNo: "",
        destination: "",
        time: "",
       
    }
};

export const SeatSlice = createSlice({
    name: "seat",
    initialState,
    reducers: {
        addSeat: (state, action: PayloadAction<Seat>) => {
            const newSeatBook = {
                ...action.payload,
                id: crypto.randomUUID(),
            };
            state.seats.push(newSeatBook);
            
           
            
                localStorage.setItem("bookedSeat", JSON.stringify(state.seats));
            
        },

        
        getAllBookedSeats: (state) => {
            const savedSeats = localStorage.getItem("bookedSeat");
            if (savedSeats) {
                state.seats = JSON.parse(savedSeats);
            }

        },
        getBookedByBusNo: (state, action: PayloadAction<string>) => {
            const savedSeats = localStorage.getItem("bookedSeat");
            if (savedSeats) {
                const seats = JSON.parse(savedSeats);
                
                const filteredSeats = seats.find((seat: Seat) => seat.busNo === action.payload);
                state.seat = filteredSeats; 
            }
        },
    },
});

export const {
    addSeat,
getAllBookedSeats,
getBookedByBusNo
} = SeatSlice.actions;

export default SeatSlice.reducer;