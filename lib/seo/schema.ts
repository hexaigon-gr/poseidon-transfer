import { DOMAIN, PHONE_NUMBER, EMAIL, SOCIAL, AGGREGATE_RATING, BUSINESS } from "@/lib/data/config";
import { TourConfig } from "@/lib/data/tours";

const ORG_NAME = BUSINESS.legalName;
const ORG_URL = DOMAIN;
const ORG_LOGO = `${DOMAIN}/images/logo.png`;

function activeSocialUrls(): string[] {
  return [SOCIAL.instagram, SOCIAL.facebook, SOCIAL.tripadvisor, SOCIAL.googleBusinessProfile, SOCIAL.youtube].filter(
    (u): u is string => Boolean(u)
  );
}

function maybeAggregateRating() {
  if (!AGGREGATE_RATING) return undefined;
  return {
    "@type": "AggregateRating",
    ratingValue: AGGREGATE_RATING.ratingValue,
    reviewCount: AGGREGATE_RATING.reviewCount,
    bestRating: "5",
    worstRating: "1",
  };
}

export function organizationSchema() {
  const sameAs = activeSocialUrls();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ORG_NAME,
    url: ORG_URL,
    logo: ORG_LOGO,
    email: EMAIL,
    telephone: PHONE_NUMBER,
    address: {
      "@type": "PostalAddress",
      ...(BUSINESS.primaryAddress.streetAddress
        ? { streetAddress: BUSINESS.primaryAddress.streetAddress }
        : {}),
      addressLocality: BUSINESS.primaryAddress.addressLocality,
      addressRegion: BUSINESS.primaryAddress.addressRegion,
      ...(BUSINESS.primaryAddress.postalCode ? { postalCode: BUSINESS.primaryAddress.postalCode } : {}),
      addressCountry: BUSINESS.primaryAddress.addressCountry,
    },
    ...(sameAs.length > 0 ? { sameAs } : {}),
    ...(BUSINESS.foundedYear ? { foundingDate: String(BUSINESS.foundedYear) } : {}),
    ...(BUSINESS.vatNumber ? { vatID: BUSINESS.vatNumber } : {}),
  };
}

export function localBusinessSchema() {
  const sameAs = activeSocialUrls();
  const aggregateRating = maybeAggregateRating();

  return {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "@id": `${DOMAIN}/#business`,
    name: ORG_NAME,
    url: ORG_URL,
    image: `${DOMAIN}/images/hero-greece.jpg`,
    logo: ORG_LOGO,
    telephone: PHONE_NUMBER,
    email: EMAIL,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      ...(BUSINESS.primaryAddress.streetAddress
        ? { streetAddress: BUSINESS.primaryAddress.streetAddress }
        : {}),
      addressLocality: BUSINESS.primaryAddress.addressLocality,
      addressRegion: BUSINESS.primaryAddress.addressRegion,
      ...(BUSINESS.primaryAddress.postalCode ? { postalCode: BUSINESS.primaryAddress.postalCode } : {}),
      addressCountry: BUSINESS.primaryAddress.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Athens" },
      { "@type": "AdministrativeArea", name: "Attica" },
      { "@type": "Country", name: "Greece" },
    ],
    serviceType: [
      "Private airport transfer",
      "Cruise port transfer",
      "Private guided tour",
      "Luxury chauffeur service",
      "Wedding and event transportation",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    paymentAccepted: ["Cash", "Credit Card", "Visa", "Mastercard", "American Express"],
    currenciesAccepted: "EUR, USD",
    knowsLanguage: ["en", "el"],
    ...(BUSINESS.foundedYear ? { foundingDate: String(BUSINESS.foundedYear) } : {}),
    ...(sameAs.length > 0 ? { sameAs } : {}),
    ...(aggregateRating ? { aggregateRating } : {}),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${DOMAIN}/#website`,
    url: DOMAIN,
    name: ORG_NAME,
    publisher: { "@id": `${DOMAIN}/#business` },
    inLanguage: ["en-US", "el"],
  };
}

export function breadcrumbListSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function tourTripSchema(tour: TourConfig, locale: string) {
  const url = `${DOMAIN}/${locale}/tour/${tour.slug}`;
  const image = tour.image.startsWith("http") ? tour.image : `${DOMAIN}${tour.image}`;
  const aggregateRating = maybeAggregateRating();

  const itinerary = tour.itinerary?.map((step, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: step.title,
    description: step.description,
  }));

  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.title,
    description: tour.metaDescription || tour.description[0],
    url,
    image: [image],
    touristType: ["Luxury travelers", "Couples", "Families", "Cruise passengers"],
    inLanguage: tour.languages || ["en"],
    ...(itinerary && itinerary.length > 0
      ? { itinerary: { "@type": "ItemList", itemListElement: itinerary } }
      : {}),
    offers: {
      "@type": "Offer",
      price: tour.cost,
      priceCurrency: "EUR",
      url,
      availability: "https://schema.org/InStock",
      validFrom: new Date().toISOString().split("T")[0],
    },
    provider: {
      "@type": "TaxiService",
      "@id": `${DOMAIN}/#business`,
      name: ORG_NAME,
      url: ORG_URL,
      telephone: PHONE_NUMBER,
    },
    ...(aggregateRating ? { aggregateRating } : {}),
  };
}

export function faqPageSchema(faq: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["[itemprop=name]", "[itemprop=acceptedAnswer]"],
    },
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleSchema({
  title,
  description,
  image,
  datePublished,
  dateModified,
  url,
  authorName = ORG_NAME,
}: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  authorName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: image.startsWith("http") ? image : `${DOMAIN}${image}`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: { "@type": "Organization", name: authorName, url: DOMAIN },
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
      url: DOMAIN,
      logo: { "@type": "ImageObject", url: ORG_LOGO },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}

export function jsonLdScript(schema: object) {
  return {
    __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
  };
}
