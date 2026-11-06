import { Link, createFileRoute } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone } from "lucide-react";

import interiorImage from "@/assets/car-interior.jpg";
import { PageIntro, PublicLayout } from "@/components/layout/PublicLayout";
import { brand, brandPhones, directionsUrl, telLink, whatsappLink } from "@/config/brand";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About ${brand.name} — used cars in ${brand.address.city}` },
      {
        name: "description",
        content: `${brand.name} is a used car dealership in ${brand.address.full}.`,
      },
      { property: "og:title", content: `About ${brand.name}` },
      {
        property: "og:description",
        content: `A used car dealership in ${brand.address.city}.`,
      },
    ],
  }),
  component: About,
});

// TODO(client): add the real story (year started, team, how cars are sourced and
// checked, warranties/after-sales). Nothing below is a claim beyond the supplied
// contact and location details.
const pillars = [
  {
    icon: MapPin,
    title: "Visit us",
    body: brand.address.full,
  },
  {
    icon: Phone,
    title: "Call us",
    body: brand.phones.primary.display,
  },
  {
    icon: MessageCircle,
    title: "Message us",
    body: `WhatsApp or send a message through the contact page and ${brand.name} will get back to you.`,
  },
];

function About() {
  return (
    <PublicLayout>
      <PageIntro
        eyebrow="About us"
        title={
          <>
            A used car dealership
            <br />
            <span className="bg-gradient-to-r from-accent to-glow bg-clip-text text-transparent">
              in {brand.address.city}.
            </span>
          </>
        }
        lead={`${brand.name} sells used cars in ${brand.address.city}. Browse the listings online, then call, message or visit us in ${brand.address.city}.`}
      />

      <div className="mx-auto max-w-7xl px-6 pb-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="glass glass-hover rounded-2xl p-6">
              <pillar.icon className="size-5 text-accent" aria-hidden="true" />
              <h2 className="mt-3 font-grotesk text-lg font-semibold">{pillar.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-mist">{pillar.body}</p>
            </div>
          ))}
        </div>

        <div className="glass mt-8 grid gap-8 rounded-3xl p-6 lg:grid-cols-2 lg:items-center">
          <img
            src={interiorImage}
            alt="Car interior"
            loading="lazy"
            width={1024}
            height={640}
            className="aspect-[16/10] w-full rounded-2xl object-cover"
          />
          <div>
            <h2 className="font-grotesk text-2xl font-bold">Ask us about any car</h2>
            <p className="mt-4 text-sm leading-relaxed text-mist">
              See a car you like on this site? Contact {brand.name} to ask about it, or visit us
              in {brand.address.city}.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/browse" className="btn-accent">
                See the current listings
              </Link>
              <a href={telLink(brandPhones[0].international)} className="btn-glass">
                <Phone className="size-4" aria-hidden="true" />
                Call
              </a>
              <a
                href={whatsappLink(`Hello ${brand.name}, I would like to ask about a car.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                WhatsApp
              </a>
              <a
                href={directionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass"
              >
                <MapPin className="size-4" aria-hidden="true" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
