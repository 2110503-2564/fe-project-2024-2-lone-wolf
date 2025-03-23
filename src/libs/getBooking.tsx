
export default async function getBooking(token:string) {
    
    const response = await fetch("http://localhost:5000/api/appointments", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

    if(!response.ok) {
        throw new Error("Failed to fetch bookings")
    }

    return await response.json()
}