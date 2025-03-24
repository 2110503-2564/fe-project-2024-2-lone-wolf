import { useEffect, useState } from "react";
import Card from "./Card";
import { Hotel, HotelJson, VenueItem, VenueJson } from "../../interface";
import Link from "next/link";

export default async function VenueCatalog({ venuesJson }: { venuesJson: HotelJson }) {
    const venueJsonReady = await venuesJson

    return (
        <div className="m-5 flex flex-row content-around, justify-around flex-wrap">
            {
                venueJsonReady.data.map((venueItem: Hotel) => {
                    return (
                        <Link
                            href={`/venue/${venueItem.id}`}
                            key={venueItem.id}
                            className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%] p-2 sm:p-4 md:p-4 lg:p-8"
                        >
                            <Card venueName={venueItem.name} imgSrc='/img/bloom.jpg' />
                        </Link>
                    );
                })
            }
        </div>
    );
}
