import dayjs, { Dayjs } from "dayjs"

export default async function updateBooking(token:string, id:string, date:string) {
    const BASE_URL = process.env.NEXT_PUBLIC_API_URL
    const defaultDate = date ? date : dayjs().toISOString;

    const response = await fetch(`${BASE_URL}/api/appointments/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            apptDate: defaultDate
        }),
    })

    if(!response.ok) {
        const error = await response.text() 
        throw new Error(`Failed to create Booking: ${error}`);
    }

    return await response.json()
}