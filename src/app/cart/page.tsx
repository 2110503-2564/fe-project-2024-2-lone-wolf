import BookingList from "@/components/BookingList"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"

export default function CartPage(){
    return(
        <main>
            <Suspense fallback={<div className="flex justify-center items-center py-10"><LinearProgress className="w-full" /></div>}>
                <BookingList></BookingList>
            </Suspense>
        </main>
    )
}