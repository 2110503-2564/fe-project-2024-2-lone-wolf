'use client'
import { useEffect, useReducer } from 'react';
import Card from '@/components/Card';
import Link from 'next/link';
import { ClassNames } from '@emotion/react';
import { useRef, useState } from 'react';
import { VenueJson, VenueItem } from '../../interface';
import getVenues from '@/libs/getVenues';

export default function CardPanel() {   
    let defaultVenue = new Map<string, number>([
        ["LangHam Hotel", 0],
        ["Vischio Hotel", 0],
        ["Centara Hotel", 0]
    ])
    const cardReducer = (venueList:Map<string, number>, action:{type:string, venueName:string, rating?: number})=>{
        switch(action.type){
            case 'add':{
                const newVenueList = new Map(venueList);
                newVenueList.set(action.venueName, action.rating??0);
                return newVenueList;
            }
            case 'remove':{
                const newVenueList = new Map(venueList);
                newVenueList.delete(action.venueName);
                return newVenueList;
            }
            default: return venueList
        }
    }

    const [venueList, dispatch] = useReducer(cardReducer, defaultVenue)

    const handleRate = (venue:string, rating:number)=>{
        dispatch({type:'add', venueName:venue, rating})
    };

    /**
     * Mock Data for Demonstration
     */

    const mockVenueRepo = [{vid:"001", name:"LangHam Hotel", image:"/img/langham.jpg"},
        {vid:"002", name:"Vischio Hotel", image:"/img/vischio.jpg"},
        {vid:"003", name:"Centara Hotel", image:"/img/centara.jpg"}
    ]

    const [venueResponse, setVenueResponse] = useState<VenueJson|null>(null)

    useEffect(()=>{
        const fetchData = async () =>{
            const venues = await getVenues()
            setVenueResponse(venues)
        }

        fetchData()
    }, [])

    if(!venueResponse) return (<p>Hotel Panel is Loading ...</p>)

    return (
        <main>
            <div>
                <div className="m-5 flex flex-row content-around, justify-around flex-wrap">
                    {
                       venueResponse.data.map((venueItem:VenueItem)=>{
                            return(
                                <Link href={`/venue/${venueItem.id}`} className='w-1/5'>
                                    <Card venueName={venueItem.name} imgSrc={venueItem.picture} onRate={handleRate}></Card>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            <div className='w-full text-xl font-medium'>Hotel List With Ratings:{venueList.size}</div>
            <div>
            { Array.from(venueList).map(([venue, rating])=><div data-testid={venue}
                    onClick={()=>dispatch({type:'remove', venueName:venue})}>{venue}:{rating}</div>)}
            </div>

        </main>
    );
}