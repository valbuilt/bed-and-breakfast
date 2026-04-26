import type { NewBooking, NewMessage } from "../types/type";

export async function editBooking(newMessage: NewMessage, id: number): Promise<NewBooking> {
  
  try {
    const res: Response = await fetch(`http://localhost:3000/api/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer lalala`,
      },
      body: JSON.stringify(newMessage),
    });

    if (!res.ok) {
      throw new Error(`HTTP fail: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    throw error;
  }
}