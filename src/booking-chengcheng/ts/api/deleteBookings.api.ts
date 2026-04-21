export async function deleteBooking(id: number): Promise<void> {
  try {
    const res: Response = await fetch(`http://localhost:3000/api/bookings/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer lalala`
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP fail: ${res.status}`);
    } else { 
    return;
    }
  } catch (error) {
    throw error;
  }
}