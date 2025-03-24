'use client'
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
        <div className="flex flex-col items-center w-full max-w-2xl mx-auto mt-6">
            {!venueItems? (
                <div className="text-center text-gray-500 text-lg font-medium py-6">No Hotel Booking</div> // show message if empty
            ) : (
                venueItems.data.map((reservationItem: BookingItem) => (
                    <div className="bg-white shadow-lg rounded-lg px-6 py-4 w-full mb-4" key={reservationItem._id}>
                        <h3 className="text-xl font-semibold text-gray-800">{reservationItem.user}</h3>
                        <p className="text-gray-600 text-sm">📞 Tel: {reservationItem.hotel.tel}</p>
                        <p className="text-gray-600 text-sm">🏨 Hotel: {reservationItem.hotel.name}</p>
                        <p className="text-gray-600 text-sm">📅 Booking Date: {reservationItem.apptDate}</p>
                        <button
                            className="mt-3 w-full bg-red-500 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition-all duration-300"
                        >
                            Remove from Cart
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

