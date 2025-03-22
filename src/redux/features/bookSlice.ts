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
                    item.venue === action.payload.venue &&
                    item.bookDate === action.payload.bookDate
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
                return ((obj.nameLastname !== action.payload.nameLastname) 
                || (obj.bookDate !== action.payload.bookDate)
                || (obj.venue !== action.payload.venue)
                || (obj.tel !== action.payload.tel))
            })

            state.bookItems = remainItems
        },
    },
})

export const { addBooking, removeBooking} = bookSlice.actions
export default bookSlice.reducer