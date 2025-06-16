import { Contact } from "@/types/contact";

export async function list(): Promise<Contact[]> {
  try {
    const response = await fetch("http://localhost:3001/users");
    if (!response) {
      throw new Error("Erro ao buscar contatos");
    }

    const data: Contact[] = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
