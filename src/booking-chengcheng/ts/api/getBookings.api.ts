import type { Booking } from "../types/type";

export async function getBookingById(id: number): Promise<Booking> {
  try {
    const res = await fetch(`http://localhost:3000/api/bookings/${id}`);

    if (!res.ok) {
      throw new Error(`Booking with id ${id} not found (status ${res.status})`);
    }
     
    return await res.json();

  } catch (error) {
    throw error;
  }
}

