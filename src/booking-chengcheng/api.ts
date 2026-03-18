import type { Room } from "./type";

export async function getRoomById(id: number): Promise<Room> {
  const res = await fetch(`http://localhost:3000/api/rooms/${id}`);
  if (!res.ok) throw new Error(`Room with id ${id} not found`);

  const room: Room = await res.json();
  return room;
}