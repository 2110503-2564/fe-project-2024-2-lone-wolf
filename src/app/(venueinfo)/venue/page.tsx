/*import CardPanel from "@/components/CardPanel"
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
                <h1 className="text-xl font-medium">TRY Client-Side Hotel</h1>
                <CardPanel/>
            </Suspense>
        </main>
    )
}*/

import CardPanel from "@/components/CardPanel"
import getVenues from "@/libs/getVenues";
import { VenueJson } from "../../../../interface"
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import VenueCatalog from "@/components/VenueCatalog";

export default async function Venue() {
    const venues: VenueJson = await getVenues();

    return (
        <main className="p-5">
            <h1 className="text-xl font-medium text-gray-700 mb-6">Select Your Hotel</h1>
            <Suspense fallback={<div className="flex justify-center items-center py-10"><LinearProgress className="w-full" /></div>}>
                <VenueCatalog venuesJson={venues} />
            </Suspense>
            <hr className="my-10 border-t border-gray-300" />
            <h1 className="text-xl font-medium text-gray-700 mb-6">TRY Client-Side Hotel</h1>
            <CardPanel />
        </main>
    )
}
