import { Dayjs } from "dayjs"

export default async function updateBooking(token:string, id:string, date:Dayjs) {
    const response = await fetch(`http://localhost:5000/api/appointments/${id}`, {
        method: "PUT",
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