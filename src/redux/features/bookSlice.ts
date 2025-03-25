import { createSlice } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interface";
import { PayloadAction } from "@reduxjs/toolkit";

type BookState = {
    bookItems: BookingItem[]
}

const initialState:BookState = { bookItems: []}

export const bookSlice = createSlice({
    name:"book",
    initialState,
    reducers:{
        addBooking: (state, action:PayloadAction<BookingItem>)=>{
            const index = state.bookItems.findIndex(
                (item) =>
                    item.hotel.name === action.payload.hotel.name &&
                    item.apptDate === action.payload.apptDate
            );
            if (index !== -1) {
                // if booking in same place and date, use current booking
                state.bookItems[index] = action.payload;
            } else {
                // if do not have booking, add new booking
                state.bookItems.push(action.payload);
            }
        },
        removeBooking: (state, action:PayloadAction<BookingItem>)=>{
            const remainItems = state.bookItems.filter(obj => {
                return ((obj.hotel.name !== action.payload.hotel.name) 
                || (obj.apptDate !== action.payload.apptDate)
                || (obj.hotel.tel !== action.payload.hotel.tel))
            })

            state.bookItems = remainItems
        },
    },
})

export const { addBooking, removeBooking} = bookSlice.actions
export default bookSlice.reducer