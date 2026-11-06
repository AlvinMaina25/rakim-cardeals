import { Instagram } from "lucide-react";

import { brand } from "@/config/brand";

/**
 * Supplied Instagram profile link. Opens in a new tab.
 */
export function SocialLinks({ className = "" }: { className?: string }) {
  if (!brand.social?.instagram) return null;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <a
        href={brand.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${brand.name} on Instagram`}
        className="icon-btn size-9"
      >
        <Instagram className="size-4" aria-hidden="true" />
      </a>
    </div>
  );
}
