import type { NewUser } from "../types/type";

export async function postUser(newUser: NewUser): Promise<NewUser> {
  
  try {
    const res: Response = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer lalala`,
      },
      body: JSON.stringify(newUser),
    });

    if (!res.ok) {
      throw new Error(`HTTP fail: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    throw error;
  }
}