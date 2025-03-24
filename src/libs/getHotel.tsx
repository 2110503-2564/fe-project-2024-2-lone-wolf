
export default async function getHotel(id:string) {
    
    const response = await fetch(`http://localhost:5000/api/hotels/${id}`, {
        method: "GET",
    })

    if(!response.ok) {
        throw new Error("Failed to fetch bookings")
    }

    return await response.json()
}