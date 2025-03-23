import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";
import Venue from "@/db/models/Venue";
import { dbConnect } from "@/db/dbConnect";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function DashboardPage() {

    const addVenue = async (addVenueForm:FormData) => {
        'use server'
        const name = addVenueForm.get("venue") as string;
        const description = addVenueForm.get("desc") as string;
        const picture = addVenueForm.get("picture") as string;

        try {
            await dbConnect()
            const venue = await Venue.create({
                name: name,
                description: description,
                picture: picture,
              });
              
        } catch (err) {
            console.log(err)
        }
        revalidateTag("venues")
        redirect('/venue')
    }

    const session = await getServerSession(authOptions)
    if(!session) console.log('nah')
    if(!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)

    console.log(profile)
    return(
        <main className="m-5 p-5">
            <div className="text-2xl">{profile.data.name}</div>
            <table className="table-auto border-separate border-spacing-2">
                <tbody>
                    <tr>
                        <td>Email</td>
                        <td>{profile.data.email}</td>
                    </tr>
                    <tr>
                        <td>Tel.</td>
                        <td>{profile.data.tel}</td>
                    </tr>
                    <tr>
                        <td>Member Since</td>
                        <td>{createdAt.toString()}</td>
                    </tr>
                </tbody>
            </table>
            {
                (profile.data.role=="admin")?
                <form action={addVenue}>
                    <div className="text-xl text-blue-700">Create Venue</div>
                    <div className="flex items-center w-1/2 my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="venue">Hotel</label>
                        <input type="text" required id="venue" name="venue" placeholder="Venue Name"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2
                        text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>
                    <div className="flex items-center w-1/2 my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="desc">Description</label>
                        <input type="text" required id="desc" name="desc" placeholder="Venue Description"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2
                        text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>
                    <div className="flex items-center w-1/2 my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="picture">Picture</label>
                        <input type="text" required id="picture" name="picture" placeholder="Venue Picture"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2
                        text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>
                </form>
                :null
            }
        </main>
    )
}