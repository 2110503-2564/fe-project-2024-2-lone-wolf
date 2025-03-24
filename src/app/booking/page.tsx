/*'use client'
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

          // Use the useSession hook to get session data
        const { data: session, status } = useSession();  // Access session and its status

        // Loading state while session is being fetched
        const [loading, setLoading] = useState<boolean>(status === "loading");

        useEffect(() => {
            // Once session is fetched, stop loading
            if (status !== "loading") {
                setLoading(false);
            }
        }, [status]);
    
        const makeReservation = () => {
            if(vid && name && bookDate) {
                const item:BookingItem = {
                    bookDate: dayjs(bookDate).format('YYYY/MM/DD'),
                    nameLastname: name,
                    tel,
                    venue
                }
                dispatch(addBooking(item))

                if(session)
                    createBooking(session.user?.token, vid, bookDate);
            }
        }
        
 

    return(
        <main className="w-[100%] flex flex-col items-center space-y-4">

            <div className="text-xl font-medium">New Reservation</div>
            <div className="w-fit space-y-2">
 
                <div className="text-md text-left">Name and Lastname</div>
                <TextField
                    className="rounded-lg bg-white"
                    variant="standard"
                    fullWidth
                    name="Name-Lastname"
                    onChange={e => setName(e.target.value)}  
                />

                <div className="text-md text-left">Contact Number</div>
                <TextField
                    className="rounded-lg bg-white"
                    variant="standard"
                    fullWidth
                    name="Contact-Number"
                    onChange={e => setTel(e.target.value)}
                />

                <div className="text-md text-left text-gray-600">Pick-Up Date and Location</div>
                <DateReserve onDateChange={(value:Dayjs)=>setBookDate(value)} onLocationChange={(value:string)=>setVenue(value)}/>
            </div>
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
            shadow-sm text-white" name="Book Venue" onClick={makeReservation}>Book Hotel</button>
        </main>
    );
}*/

'use client'
import DateReserve from "@/components/DateReserve";
import { TextField } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { addBooking } from "@/redux/features/bookSlice";
import { AppDispatch } from "@/redux/store";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { BookingItem } from "../../../interface";

export default function Reservations() {
    const urlParams = useSearchParams();
    const vid = urlParams.get('id');

    const dispatch = useDispatch<AppDispatch>();

    const makeReservation = () => {
        if (vid && name && bookDate) {
            const item: BookingItem = {
                bookDate: dayjs(bookDate).format('YYYY/MM/DD'),
                nameLastname: name,
                tel,
                venue
            };
            dispatch(addBooking(item));
        }
    }

    const [name, setName] = useState<string>("");
    const [bookDate, setBookDate] = useState<Dayjs | null>(null);
    const [venue, setVenue] = useState<string>("");
    const [tel, setTel] = useState<string>("");

    return (
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
                        onDateChange={(value: Dayjs) => setBookDate(value)}
                        onLocationChange={(value: string) => setVenue(value)}
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
