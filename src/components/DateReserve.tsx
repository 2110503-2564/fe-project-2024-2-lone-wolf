/*'use client'
import { useState } from 'react'
import { Dayjs } from 'dayjs'
import { DatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Select, MenuItem } from '@mui/material'

export default function DateReserve ({onDateChange, onLocationChange}
    : {onDateChange:Function, onLocationChange:Function}
){

    const  [reserveDate, setReserveDate] = useState<Dayjs|null>(null);
    const [location, setLocation] = useState('Bloom')
    onLocationChange('Bloom')

    return (
        <div className='bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5
        flex flex-row justify-center'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className='bg-white'
                    value={reserveDate} onChange={(value)=>{setReserveDate(value); onDateChange(value);}}/>
            </LocalizationProvider>
            <Select variant='standard' name='location' id='venue' className='h-[2em] w-[200px]'
            value={location} onChange={(e)=>{setLocation(e.target.value); onLocationChange(e.target.value);}}> 
                <MenuItem value='bloom'>LangHam Hotel</MenuItem>
                <MenuItem value='Spark'>Vischio Hotel</MenuItem>
                <MenuItem value='GrandTable'>Centara Hotel</MenuItem>
            </Select>
            
        </div>
    );
}*/

'use client'
import { useState, useEffect } from 'react'
import { Dayjs } from 'dayjs'
import { DatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Select, MenuItem } from '@mui/material'

interface DateReserveProps {
    onDateChange: (date: Dayjs | null) => void;
}

export default function DateReserve({ onDateChange }: DateReserveProps) {
    const [reserveDate, setReserveDate] = useState<Dayjs | null>(null);

    return (
        <div className='bg-slate-100 rounded-lg w-fit px-10 py-5 flex flex-row justify-center items-center space-x-5 shadow-md'>
            {/* Date Picker */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    className='bg-white rounded-md'
                    value={reserveDate}
                    onChange={(value) => { setReserveDate(value); onDateChange(value); }}
                    slotProps={{ textField: { placeholder: "Select a date" } }}
                />
            </LocalizationProvider>
            
        </div>
    );
}
