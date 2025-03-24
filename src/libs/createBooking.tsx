import { Dayjs } from "dayjs"

export default async function createBooking(token:string, id:string, date:Dayjs) {
    id = '67bb46c5dc54dc6929a4b8da'
    const response = await fetch(`http://localhost:5000/api/hotels/${id}/appointments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            apptDate: date.toISOString()
        }),
    })

    if(!response.ok) {
        const error = await response.text() 
        throw new Error(`Failed to create Booking: ${error}`);
    }

    return await response.json()
}