
export default async function getHotels() {
    
    const response = await fetch("http://localhost:5000/api/hotels", {
        method: "GET",
    })

    if(!response.ok) {
        throw new Error("Failed to fetch bookings")
    }

    return await response.json()
}