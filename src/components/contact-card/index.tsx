"use client";

import type React from "react";

import { useRouter } from "next/navigation";
import type { Contact } from "@/types/contact";
import { Card, CardContent } from "@/components/ui/card";

interface ContactCardProps {
  contact: Contact;
}

export function ContactCard({ contact }: ContactCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/contact/${contact.id}`);
  };
  return (
    <>
      <Card
        key={contact.id}
        className="hover:shadow-md transition-shadow duration-200 cursor-pointer"
      >
        <CardContent
          className="flex items-start justify-between gap-4 px-4"
          onClick={handleClick}
        >
          <div className="flex items-start gap-4">
            <div>
              <h3 className="font-bold">{contact.name}</h3>
              <h4 className="font-light">{contact.email}</h4>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
