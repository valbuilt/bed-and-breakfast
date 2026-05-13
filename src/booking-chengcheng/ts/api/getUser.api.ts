import type { User } from "../types/type";

export async function getUsers(): Promise<User[]> {
  try {
    const res = await fetch("http://localhost:3000/api/users");

    if (!res.ok) {
      throw new Error(`Failed to fetch users (status ${res.status})`);
    }

    return await res.json();
  } catch (error) {
    throw error;
  }
}
