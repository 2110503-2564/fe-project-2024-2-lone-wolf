import { removeBooking } from "@/redux/features/bookSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { BookingItem, BookingJson, VenueItem, VenueJson } from "../../interface";
import getBooking from "@/libs/getBooking";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function BookingList() {
    // const venueItems = useAppSelector((state) => state.reduxPersistedReducer.bookSlice.bookItems);
    // const dispatch = useDispatch<AppDispatch>();

    const session = await getServerSession(authOptions);
    if(!session) return null

    const venueItems:BookingJson = await getBooking(session?.user.token)

        
    return (
        <>
            {!venueItems? (
                <div className="text-center text-gray-600 text-lg">No Hotel Booking</div> // show message if empty
            ) : (
                venueItems.data.map((reservationItem:BookingItem) => (
                    <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={reservationItem._id}>
                        <div className="text-xl">Hotel: {reservationItem.hotel.name}</div>
                        <div className="text-sm">Tel: {reservationItem.hotel.tel}</div>
                        <div className="text-sm">Booking Date: {reservationItem.apptDate}</div>
                        <button
                            className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm"

                        >
                            Remove from Cart
                        </button>
                    </div>
                    
                ))
            )}
        </>
    );
}
