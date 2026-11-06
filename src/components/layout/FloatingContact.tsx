import { MessageCircle, Phone } from "lucide-react";

import { brand, telLink, whatsappLink } from "@/config/brand";

/**
 * Floating Call + WhatsApp buttons, pinned to the bottom-right of every
 * public page. Numbers and links come from `src/config/brand.ts`.
 */
export function FloatingContact() {
  const phone = brand.phones.primary;
  if (!phone.international) return null;

  return (
    <div
      className="fixed right-4 z-40 flex flex-col items-end gap-3 sm:right-6"
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href={telLink(phone.international)}
        aria-label={`Call ${brand.name} on ${phone.display}`}
        className="fab bg-accent text-accent-foreground"
      >
        <span className="fab-label pl-5">Call us</span>
        <span className="grid size-14 shrink-0 place-items-center">
          <Phone className="size-6" aria-hidden="true" />
        </span>
      </a>

      <a
        href={whatsappLink(`Hello ${brand.name}, I would like to ask about a car.`)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with ${brand.name} on WhatsApp`}
        className="fab bg-whatsapp text-whatsapp-foreground"
      >
        <span className="fab-label pl-5">WhatsApp</span>
        <span className="grid size-14 shrink-0 place-items-center">
          <MessageCircle className="size-6" aria-hidden="true" />
        </span>
      </a>
    </div>
  );
}
