'use client'
import { useState, useEffect } from "react";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useSession } from "next-auth/react";
import { BookingItem } from "../../interface";
import getBooking from "@/libs/getBooking";
import deleteBooking from "@/libs/deleteBooking";
import updateBooking from "@/libs/updateBooking";

export default function BookingList() {
    const [venueItems, setVenueItems] = useState<BookingItem[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true); // Initialize loading as true
    const [error, setError] = useState<string | null>(null);
    const [reserveDate, setReserveDate] = useState<string | null>(null);
    const [currentBookingId, setCurrentBookingId] = useState<string | null>(null);

    const { data: session } = useSession(); 

    const fetchBookings = async () => {
        try {
            if (session) {
                const venueData = await getBooking(session?.user.token);
                setVenueItems(venueData.data); // Store bookings in local state
            }
        } catch (err) {
            setError("Failed to fetch bookings.");
        } finally {
            setLoading(false); // Set loading to false once data is fetched
        }
    };

    useEffect(() => {
        fetchBookings();
    }, []);

    const handleDelete = async (id: string) => {
        setLoading(true);
        try {
            if (session) {
                await deleteBooking(session?.user.token, id);
            }
            await fetchBookings();
        } catch (err) {
            setError("Failed to delete booking.");
        } finally {
            setLoading(false);
        }
    };

    const handleUpdate = async (id: string, newApptDate: string) => {
        setLoading(true);
        try {
            if (session) {
                await updateBooking(session?.user.token, id, newApptDate);
            }
            setReserveDate(null);
            setCurrentBookingId(null);
            await fetchBookings();
        } catch (err) {
            setError("Failed to update booking.");
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (id: string, apptDate: string) => {
        setCurrentBookingId(id);
        setReserveDate(apptDate);
    };

    if (loading) {
        return <div className="text-center text-lg">Loading your bookings...</div>;
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="flex flex-col items-center w-full max-w-2xl mx-auto mt-6">
            {!venueItems || venueItems.length === 0 ? (
                <div className="text-center text-gray-500 text-lg font-medium py-6">No Hotel Booking</div>
            ) : (
                venueItems.map((reservationItem: BookingItem) => (
                    <div className="bg-white shadow-lg rounded-lg px-6 py-4 w-full mb-4" key={reservationItem._id}>
                        <h3 className="text-xl font-semibold text-gray-800">{reservationItem.user}</h3>
                        <p className="text-gray-600 text-sm">📞 Tel: {reservationItem.hotel.tel}</p>
                        <p className="text-gray-600 text-sm">🏨 Hotel: {reservationItem.hotel.name}</p>
                        <p className="text-gray-600 text-sm">📅 Booking Date: {reservationItem.apptDate}</p>

                        {/* Edit Button */}
                        <button
                            className="mt-3 w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all duration-300"
                            onClick={() => handleEdit(reservationItem._id, reservationItem.apptDate)}
                        >
                            Edit Date
                        </button>

                        {reserveDate && currentBookingId === reservationItem._id && (
                            <div className="mt-3">
                                <DatePicker
                                    className='bg-white rounded-md'
                                    onChange={(value) => { setReserveDate(value ? value.toISOString() : null) }}
                                    slotProps={{ textField: { placeholder: "Select a date" } }}
                                />
                                <button
                                    className="mt-2 w-full bg-green-500 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition-all duration-300"
                                    onClick={() => handleUpdate(reservationItem._id, reserveDate!)}
                                >
                                    Save Changes
                                </button>
                            </div>
                        )}

                        <button
                            className="mt-3 w-full bg-red-500 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition-all duration-300"
                            onClick={() => handleDelete(reservationItem._id)}
                        >
                            Remove from Cart
                        </button>
                    </div>
                ))
            )}
        </div>
        </LocalizationProvider>

        
    );
}
