// app/api/getCities/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const query = url.searchParams.get('query') || '';

    if (query.length < 3) {
      return NextResponse.json({ cities: [] });
    }

    const apiKey = 'AIzaSyADYuqwcgreNj8vpN06HUoiJ6L8OdmyoC4'; // Replace with your actual API key
    const response = await fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&types=(cities)&key=${apiKey}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching data from Google Places API:', error);
    return NextResponse.error();
  }
}
