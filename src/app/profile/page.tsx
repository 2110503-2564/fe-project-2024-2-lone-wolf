/*import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";
import Venue from "@/db/models/Venue";
import { dbConnect } from "@/db/dbConnect";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { UserData, UserDataJson } from "../../../interface";

export default async function ProfilePage() {

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
    if(!session || !session.user.token) return null

    const profile:UserDataJson  = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.created);

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
                        <td>Role</td>
                        <td>{profile.data.role}</td>
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
}*/

import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";
import Venue from "@/db/models/Venue";
import { dbConnect } from "@/db/dbConnect";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { UserDataJson } from "../../../interface";

export default async function ProfilePage() {
    const addVenue = async (addVenueForm: FormData) => {
        'use server'
        const name = addVenueForm.get("venue") as string;
        const description = addVenueForm.get("desc") as string;
        const picture = addVenueForm.get("picture") as string;

        try {
            await dbConnect();
            await Venue.create({
                name,
                description,
                picture,
            });
        } catch (err) {
            console.log(err);
        }
        revalidateTag("venues");
        redirect('/venue');
    };

    const session = await getServerSession(authOptions);
    if (!session || !session.user.token) return null;

    const profile: UserDataJson = await getUserProfile(session.user.token);
    const createdAt = new Date(profile.data.created);

    return (
        <main className="m-5 p-5 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
            <div className="text-3xl font-bold text-gray-800 mb-4 text-center">{profile.data.name}</div>
            <div className="overflow-hidden border border-gray-300 rounded-lg">
                <table className="table-auto w-full text-left">
                    <tbody className="divide-y divide-gray-300">
                        <tr className="bg-gray-100">
                            <td className="p-3 font-medium text-gray-600">Email</td>
                            <td className="p-3 text-gray-800">{profile.data.email}</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-medium text-gray-600">Role</td>
                            <td className="p-3 text-gray-800">{profile.data.role}</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="p-3 font-medium text-gray-600">Member Since</td>
                            <td className="p-3 text-gray-800">{createdAt.toDateString()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {profile.data.role === "admin" && (
                <form action={addVenue} className="mt-6 bg-gray-50 p-6 rounded-lg shadow-md">
                    <div className="text-xl font-semibold text-blue-700 mb-4">Create Venue</div>
                    <div className="space-y-4">
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium" htmlFor="venue">Hotel</label>
                            <input type="text" required id="venue" name="venue" placeholder="Venue Name"
                                className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium" htmlFor="desc">Description</label>
                            <input type="text" required id="desc" name="desc" placeholder="Venue Description"
                                className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium" htmlFor="picture">Picture</label>
                            <input type="text" required id="picture" name="picture" placeholder="Venue Picture URL"
                                className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400" />
                        </div>
                        <button type="submit" className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                            Add Venue
                        </button>
                    </div>
                </form>
            )}
        </main>
    );
}
