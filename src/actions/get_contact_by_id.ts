import { Contact } from "@/types/contact";

export async function getById(id: string): Promise<Contact | null> {
  try {
    const response = await fetch(`http://localhost:3001/users/${id}`);
    if (!response) {
      throw new Error("Erro ao buscar contatos");
    }

    const data: Contact = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
