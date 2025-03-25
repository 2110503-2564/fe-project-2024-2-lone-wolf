import { User } from "../../interface"

export default async function userRegister(user: User) {
    const BASE_URL = process.env.NEXT_PUBLIC_API_URL

    const response = await fetch(`${BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: user.name,
            tel: user.tel,
            email: user.email,
            role: 'user',
            password: user.password,
        }),
    })

    if(!response.ok){
        throw new Error("Failed to Register")
    }

    return await response.json()
    
}