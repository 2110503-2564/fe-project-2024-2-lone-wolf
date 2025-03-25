
export default async function getUserProfile(token:string) {
    const BASE_URL = process.env.NEXT_PUBLIC_API_URL
    
    const response = await fetch(`${BASE_URL}/api/auth/me`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

    if(!response.ok) {
        throw new Error("Failed to fetch user profile")
    }

    return await response.json()
}