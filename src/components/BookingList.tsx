'use client'
import { removeBooking } from "@/redux/features/bookSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { BookingItem } from "../../interface";

export default function BookingList() {
    const venueItems = useAppSelector((state) => state.reduxPersistedReducer.bookSlice.bookItems);
    const dispatch = useDispatch<AppDispatch>();

    console.log(venueItems)

    return (
        <>
            {venueItems.length === 0 ? (
                <div className="text-center text-gray-600 text-lg">No Hotel Booking</div> // show message if empty
            ) : (
                venueItems.map((reservationItem:BookingItem) => (
                    <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={reservationItem.venue}>
                        <div className="text-xl">Name: {reservationItem.nameLastname}</div>
                        <div className="text-sm">Tel: {reservationItem.tel}</div>
                        <div className="text-sm">Hotel: {reservationItem.venue}</div>
                        <div className="text-sm">Booking Date: {reservationItem.bookDate}</div>
                        <button
                            className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm"
                            onClick={() => dispatch(removeBooking(reservationItem))}
                        >
                            Remove from Cart
                        </button>
                    </div>
                ))
            )}
        </>
    );
}
