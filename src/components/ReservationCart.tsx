/*'use client'
import { removeBooking } from "@/redux/features/bookSlice"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"

export default function ReservationCart() {
    const venueItems = useAppSelector((state)=> state.reduxPersistedReducer.bookSlice.bookItems)
    const dispatch = useDispatch<AppDispatch>()

    return(
        <>
        {
            venueItems.map((reservationItem)=>{
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={reservationItem.venue}>
                    <div className="text-xl">{reservationItem.venue}</div>
                    <div className="text-sm">Booking {reservationItem.bookDate}</div>
                    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1
                    text-white shadow-sm" onClick={()=>dispatch(removeBooking(reservationItem))}>
                        Remove from Cart
                    </button>
                </div>
            })
        }
        </>
    )
}*/

'use client'
import { removeBooking } from "@/redux/features/bookSlice"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"

export default function ReservationCart() {
    const venueItems = useAppSelector((state) => state.reduxPersistedReducer.bookSlice.bookItems)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <>
            {venueItems.length === 0 ? (
                <div className="text-center text-gray-600 text-lg">No Hotel Booking</div>
            ) : (
                venueItems.map((reservationItem) => (
                    <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={reservationItem.venue}>
                        <div className="text-xl">{reservationItem.venue}</div>
                        <div className="text-sm">Booking: {reservationItem.bookDate}</div>
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
    )
}
