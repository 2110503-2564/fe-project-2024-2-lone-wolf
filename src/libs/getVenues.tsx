import { VenueJson } from "../../interface";

const urls = [
  'https://a08-venue-explorer-backend.vercel.app/api/v1/venues',
  'https://a08-venue-explorer-backend.vercel-2.app/api/v1/venues', // Second URL
  'https://a08-venue-explorer-backend.vercel-3.app/api/v1/venues'  // Third URL
];

export default async function getVenues() {
  await new Promise(resolve => setTimeout(resolve, 3000)); // 300ms delay

  const response = await fetch('https://a08-venue-explorer-backend.vercel.app/api/v1/venues', { next: {tags:['venues']}})
  if(!response.ok) {
    throw new Error('Failed to fetch venues')
  }
  return await response.json()
}
  