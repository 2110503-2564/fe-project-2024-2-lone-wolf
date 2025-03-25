import getVenue from "@/libs/getVenue";
import Image from "next/image";
import { VenueItem, VenueJson } from "../../../../../interface";
import { Link } from "@mui/material";
import getBooking from "@/libs/getBooking";
import getHotel from "@/libs/getHotel";

export default async function VenueDetailPage({params}: {params: {vid:string}}){
    const venueDetail= await getHotel(params.vid)

    return(
        <main className="text-center p-5">
            <h1 className="text-lg font-medium">{venueDetail.data.name}</h1>
            <div className="flex flex-row my-5">
            <Image src={venueDetail.data.picture}
                alt='Product Picture'
                width={0} height={0} sizes="100vw"
                className="rounded-lg w-[30%] bg-black"/>
            <div className="text-md mx-5 text-left">
                <div>Name: {venueDetail.data.name}</div>
                <div>Address: {venueDetail.data.address}</div>
                <div>District: {venueDetail.data.district}</div>
                <div>Postal Code: {venueDetail.data.postalcode}</div>
                <div>Tel: {venueDetail.data.tel}</div>
                <div>Daily Rate: {venueDetail.data.dailyrate}</div>

                <Link href={`/booking?id=${params.vid}&name=${venueDetail.data.name}`}>
                <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3
                py-1 text-white shadow-sm">Make Reservation</button>
                </Link>
            </div>
            </div>
        </main>
    );
}