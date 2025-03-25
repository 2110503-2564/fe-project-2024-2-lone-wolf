
export default async function getHotel(id:string) {
    const BASE_URL = process.env.NEXT_PUBLIC_API_URL
    const response = await fetch(`${BASE_URL}/api/hotels/${id}`, {
        method: "GET",
    })

    if(!response.ok) {
        throw new Error("Failed to fetch bookings")
    }

    return await response.json()
}