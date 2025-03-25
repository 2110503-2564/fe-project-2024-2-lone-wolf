
export default async function getBooking(token:string) {
    const BASE_URL = process.env.NEXT_PUBLIC_API_URL
    const response = await fetch(`${BASE_URL}/api/appointments`, {
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