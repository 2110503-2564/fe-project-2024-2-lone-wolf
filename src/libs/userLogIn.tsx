
// URL : https://a08-venue-explorer-backend-2.vercel.app/api/v1/auth/login

export default async function userLogin(userEmail:string, userPassword:string) {
    const BASE_URL = process.env.NEXT_PUBLIC_API_URL

    const response = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: userEmail,
            password: userPassword,
        }),
    })

    if(!response.ok){
        throw new Error("Failed to Log in")
    }

    //console.log(await response.json())
    return await response.json()
    
}