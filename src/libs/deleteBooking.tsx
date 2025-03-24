import { Dayjs } from "dayjs"

export default async function deleteBooking(token:string, id:string) {
    const response = await fetch(`http://localhost:5000/api/appointments/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }
    })

    if(!response.ok) {
        const error = await response.text() 
        throw new Error(`Failed to create Booking: ${error}`);
    }

    return await response.json()
}