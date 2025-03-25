'use client';
import { Hotel, HotelJson } from "../../interface";

export default function DetailCard({ hotel }: {hotel:Hotel}) {
    return (
        <>
        {hotel ? (
                <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-3">Hotel Details</h2>
                    <p className="text-gray-600"><strong>🏨 Name:</strong> {hotel.name}</p>
                    <p className="text-gray-600"><strong>📞 Tel:</strong> {hotel.tel}</p>
                    <p className="text-gray-600"><strong>📍 Address:</strong> {hotel.province}</p>
                </div>
            ) : null    
        }
        </>     
    );
}
