import CardPanel from "@/components/CardPanel"
import Card from "@/components/InteractiveCard"
import getVenues from "@/libs/getVenues";
import { VenueJson } from "../../../../interface"
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import VenueCatalog from "@/components/VenueCatalog";

export default async function Venue(){
    const venues:VenueJson = await getVenues();

    return (
        <main className="text-center p-5">
            <h1 className="text-xl font-medium">Select Your Hotel</h1>
            <Suspense fallback={<p>Loading ... <LinearProgress/></p>}>
                <VenueCatalog venuesJson={venues}/>
                <hr className="my-10"/>
            </Suspense>
        </main>
    )
}