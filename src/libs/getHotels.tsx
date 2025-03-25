
export default async function getHotels() {
    const BASE_URL = process.env.NEXT_PUBLIC_API_URL
    const response = await fetch(`${BASE_URL}/api/hotels`, {
        method: "GET",
    })

    if(!response.ok) {
        throw new Error("Failed to fetch bookings")
    }

    return await response.json()
}