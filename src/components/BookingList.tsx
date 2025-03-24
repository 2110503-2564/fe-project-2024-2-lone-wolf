/*'use client'
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
}*/

'use client'
import { removeBooking } from "@/redux/features/bookSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { BookingItem } from "../../interface";

export default function BookingList() {
    const venueItems = useAppSelector((state) => state.reduxPersistedReducer.bookSlice.bookItems);
    const dispatch = useDispatch<AppDispatch>();

    console.log(venueItems);

    return (
        <div className="flex flex-col items-center w-full max-w-2xl mx-auto mt-6">
            {venueItems.length === 0 ? (
                <div className="text-center text-gray-500 text-lg font-medium py-6">
                    No Hotel Booking
                </div> // Show message if empty
            ) : (
                venueItems.map((reservationItem: BookingItem) => (
                    <div className="bg-white shadow-lg rounded-lg px-6 py-4 w-full mb-4" key={reservationItem.venue}>
                        <h3 className="text-xl font-semibold text-gray-800">{reservationItem.nameLastname}</h3>
                        <p className="text-gray-600 text-sm">📞 Tel: {reservationItem.tel}</p>
                        <p className="text-gray-600 text-sm">🏨 Hotel: {reservationItem.venue}</p>
                        <p className="text-gray-600 text-sm">📅 Booking Date: {reservationItem.bookDate}</p>
                        <button
                            className="mt-3 w-full bg-red-500 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition-all duration-300"
                            onClick={() => dispatch(removeBooking(reservationItem))}
                        >
                            Remove from Cart
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

