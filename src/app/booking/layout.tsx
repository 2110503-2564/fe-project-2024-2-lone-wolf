import React from "react";
import ReservationMenu from "@/components/ReservationMenu";

export default function BookingLayout({ children }: {children: React.ReactNode}){
    return (
        <div>
            <ReservationMenu/>
            {children}
        </div>
    );
}