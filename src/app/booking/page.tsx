'use client'
import DateReserve from "@/components/DateReserve";
import { Select, TextField } from "@mui/material";
import { useSession } from "next-auth/react";
import getUserProfile from "@/libs/getUserProfile";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { addBooking } from "@/redux/features/bookSlice";
import { AppDispatch } from "@/redux/store";
import { useState } from "react";
import dayjs, {Dayjs} from "dayjs";
import { BookingItem } from "../../../interface";
import { useEffect } from "react";
import createBooking from "@/libs/createBooking";

export default function Reservations() {
        const urlParams = useSearchParams()
        const vid = urlParams.get('id')

        const dispatch = useDispatch<AppDispatch>()

        const [name, setName] = useState<string>("")
        const [bookDate, setBookDate] = useState<Dayjs|null>(null)
        const [venue, setVenue] = useState<string>("")
        const [tel, setTel] = useState<string>("")

        const { data: session, status } = useSession();  // Access session and its status

        const makeReservation = () => {
            if(vid && name && bookDate && session) {
                createBooking(session.user?.token, vid, bookDate);
            }
        }

    return(
        <main className="w-full max-w-lg mx-auto p-6 space-y-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-center text-gray-800">New Reservation</h2>

            <div className="space-y-4">
                <div>
                    <label className="text-md font-medium text-gray-700">Name and Lastname</label>
                    <TextField
                        className="w-full"
                        variant="outlined"
                        fullWidth
                        name="Name-Lastname"
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                <div>
                    <label className="text-md font-medium text-gray-700">Contact Number</label>
                    <TextField
                        className="w-full"
                        variant="outlined"
                        fullWidth
                        name="Contact-Number"
                        onChange={e => setTel(e.target.value)}
                    />
                </div>

                <div>
                    <label className="text-md font-medium text-gray-700">Pick-Up Date and Location</label>
                    <DateReserve
                        onDateChange={(value: Dayjs|null) => setBookDate(value)}
                    />
                </div>
            </div>

            <button
                className="w-full py-2 px-4 bg-sky-600 text-white font-medium rounded-md shadow-md hover:bg-indigo-600 transition duration-300"
                name="Book Venue"
                onClick={makeReservation}
            >
                Book Hotel
            </button>
        </main>
    );
}