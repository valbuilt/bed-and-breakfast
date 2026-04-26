import type { Booking } from "../types/type";

export async function getAllBookings(): Promise<Booking[]> {
  try {
    const res = await fetch("http://localhost:3000/api/bookings");

    if (!res.ok) {
      throw new Error(`Failed to fetch bookings (status ${res.status})`);
    }
     
    return await res.json();

  } catch (error) {
    throw error;
  }
}

