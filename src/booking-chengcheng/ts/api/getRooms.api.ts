import type { Room } from "../types/type";

export async function getRoomById(id: number): Promise<Room> {
  try {
    const res = await fetch(`http://localhost:3000/api/rooms/${id}`);

    if (!res.ok) {
      throw new Error(`Room with id ${id} not found (status ${res.status})`);
    }

    return await res.json();
  } catch (error) {
    throw error;
  }
}
