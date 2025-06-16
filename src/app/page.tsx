"use client";

import { list } from "@/actions/get_contacts";
import { ContactCard } from "@/components/contact-card";
import { Contact } from "@/types/contact";
import { useEffect, useState } from "react";

export default function Home() {
  const [contacts, setContacts] = useState<Contact[] | null>([]);

  useEffect(() => {
    async function fetchContacts() {
      const response = await list();
      setContacts(response);
    }

    fetchContacts();
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center py-3 flex-col">
      <h1 className="text-3xl font-bold">Contatos</h1>
      <div id="boxes" className="grid grid-cols-2 gap-8 py-4">
        {contacts ? (
          contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))
        ) : (
          <p>Carregando contatos...</p>
        )}
      </div>
    </div>
  );
}
