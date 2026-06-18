import { BUSINESS, SITE, SOCIAL } from "@/lib/business";
import { IMG } from "@/lib/images";

export function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "GeneralContractor"],
    "@id": `${SITE.url}/#business`,
    name: BUSINESS.legalName,
    alternateName: BUSINESS.shortName,
    image: IMG.hero,
    logo: `${SITE.url}/logo.png`,
    url: SITE.url,
    telephone: BUSINESS.phoneE164,
    email: BUSINESS.email,
    priceRange: "$$",
    founder: { "@type": "Person", name: BUSINESS.founder },
    foundingDate: BUSINESS.foundingDate,
    slogan: "Built right. Delivered on time.",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.region,
      postalCode: BUSINESS.address.postal,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.address.lat,
      longitude: BUSINESS.address.lng,
    },
    openingHoursSpecification: BUSINESS.hours.spec.map((s) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: s.days,
      opens: s.opens,
      closes: s.closes,
    })),
    areaServed: BUSINESS.areaServed.map((a) => ({
      "@type": "City",
      name: a.split(",")[0].trim(),
      addressRegion: a.split(",")[1]?.trim(),
    })),
    sameAs: [SOCIAL.google, SOCIAL.bbb].filter(Boolean),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Custom Wood Fabrication Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Butcher Block Countertops" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Plastic Laminate Countertops" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Live Edge & Slab Counters" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Epoxy Resin Countertops" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Casework" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Millwork & CNC Fabrication" } },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
