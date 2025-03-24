import dayjs, { Dayjs } from "dayjs"

export default async function updateBooking(token:string, id:string, date:string) {
    const defaultDate = date ? date : dayjs().toISOString;

    const response = await fetch(`http://localhost:5000/api/appointments/${id}`, {
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