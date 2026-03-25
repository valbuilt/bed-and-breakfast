import type { Room } from "./type";

export async function getRoomById(id: number): Promise<Room> {
  try {
    const res = await fetch(`http://localhost:3000/api/rooms/${id}`);

    if (!res.ok) {
      throw new Error(`Room with id ${id} not found (status ${res.status})`);
    }

    const data: Room = await res.json();
    return data;
    
  } catch (error) {
    console.error("Error fetching room:", error);
    throw error; 
  }
}