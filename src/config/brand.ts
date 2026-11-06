/**
 * Cardeals by Rickmann — central brand configuration.
 *
 * Single source of truth for every piece of business information shown on the
 * site (name, contact details, social links, location). Import from here
 * instead of hardcoding details in components or routes.
 *
 * Anything marked TODO(client) has NOT been supplied by the client yet.
 * Do not invent values — ask the client, then replace the placeholder here.
 */

export const brand = {
  name: "Cardeals by Rickmann",

  /** Wordmark split used by the header/auth logo: plain part + accented part. */
  wordmark: { plain: "CARDEALS", accent: "BY RICKMANN" },

  /** Initial used for compact brand treatments. */
  monogram: "C",

  /** No tagline was supplied for this dealership. */
  tagline: null as string | null,

  address: {
    /**
     * Single-line location for display. No street address has been supplied.
     * The supplied profile shows Mombasa; no more specific address is
     * confirmed. TODO(client): supply a verified street address if available.
     */
    full: "Mombasa, Kenya",
    city: "Mombasa",
    country: "Kenya",
    /**
     * Search text used for the map embed and directions. This is a text
     * search, so the pin is approximate.
     * TODO(client): supply the exact Google Maps pin or coordinates.
     */
    mapQuery: "Mombasa, Kenya",
  },

  phones: {
    primary: { display: "0702348300", international: "+254702348300" },
  },

  /**
   * TODO(client): no email address has been supplied. Nothing on the site
   * shows an email while this is null — do not invent one.
   */
  email: null as string | null,

  /** TODO(client): business hours were not provided. */
  hours: "TODO(client): business hours",

  /**
   * Instagram profile handle supplied from the client's profile screenshot.
   * Facebook remains unavailable until the client supplies it.
   */
  social: {
    instagram: "https://www.instagram.com/_cardeals_by_rickmann_/",
    facebook: null,
  } as { instagram: string; facebook: string | null } | null,

  /**
   * Public site URL. TODO(client): domain was not provided.
   * Until a real https:// URL is set here, `getSiteUrl()` falls back to the
   * address of the page the visitor is on.
   */
  siteUrl: "TODO(client): domain",

  currency: "KES",
} as const;

/** Phone numbers in display order, handy for mapping over. */
export const brandPhones = [brand.phones.primary] as const;

/** `tel:` link for an international-format number. */
export function telLink(international: string): string {
  return `tel:${international}`;
}

/**
 * WhatsApp click-to-chat link for the primary number.
 * Format: https://wa.me/<number>?text=<encoded>. The number is digits only,
 * with country code and no "+" (WhatsApp requirement).
 */
export function whatsappLink(message?: string): string {
  const number = brand.phones.primary.international.replace(/\D/g, "");
  const base = `https://wa.me/${number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Google Maps embed (no API key) for the supplied location. */
export function mapEmbedUrl(): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(brand.address.mapQuery)}&output=embed`;
}

/** Opens Google Maps with directions to the business. */
export function directionsUrl(): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    brand.address.mapQuery,
  )}`;
}

/**
 * Site origin for building absolute links (e.g. in WhatsApp messages).
 * Uses `brand.siteUrl` once the client supplies a real https:// domain;
 * otherwise the current page's origin in the browser, or "" on the server.
 */
export function getSiteUrl(): string {
  if (/^https?:\/\//i.test(brand.siteUrl)) return brand.siteUrl.replace(/\/+$/, "");
  if (typeof window !== "undefined") return window.location.origin;
  return "";
}
