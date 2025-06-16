"use client";

import { getById } from "@/actions/get_contact_by_id";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Contact } from "@/types/contact";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ContactDetailPage() {
  const params = useParams<{ id: string }>();
  const [contact, setContact] = useState<Contact | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchContact() {
      if (!params?.id) return;
      const data = await getById(params.id);
      setContact(data);
    }

    fetchContact();
  }, [params?.id]);

  if (!contact) {
    return (
      <div className="text-center text-red-500 py-4">
        Contato não encontrado.
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center py-6">
      <div className="w-full max-w-md relative">
        <div className="flex justify-end mb-2">
          <Button className="cursor-pointer" variant="default" onClick={() => router.push("/")}>
            Voltar
          </Button>
        </div>
        <Card className="w-full shadow-lg">
          <CardHeader>
            <CardTitle>{contact.name}</CardTitle>
            <CardDescription>Detalhes do contato</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <span className="font-semibold">Email:</span> {contact.email}
            </div>
            <div>
              <span className="font-semibold">Idade:</span> {contact.age}
            </div>
            <div>
              <span className="font-semibold">Cargo:</span> {contact.role}
            </div>
            <div>
              <span className="font-semibold">Cidade:</span> {contact.city}
            </div>
            <div>
              <span className="font-semibold">País:</span> {contact.country}
            </div>
            <div>
              <span className="font-semibold">Ativo:</span>{" "}
              {contact.active ? "Sim" : "Não"}
            </div>
            <div>
              <span className="font-semibold">Criado em:</span>{" "}
              {new Date(contact.createdAt).toLocaleDateString()}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
