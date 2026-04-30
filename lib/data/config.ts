export const DOMAIN = "https://poseidontransfer.com";
export const PHONE_NUMBER = "+30 6976550034";
export const EMAIL = "info@poseidontransfer.com";

// Social profile URLs. Leave as null until the real profiles are live —
// the UI will hide the social icons and the Organization schema will
// drop the empty `sameAs` entries automatically.
export const SOCIAL = {
  instagram: null as string | null,
  facebook: null as string | null,
  tripadvisor: null as string | null,
  googleBusinessProfile: null as string | null,
  youtube: null as string | null,
  whatsapp: `https://wa.me/${PHONE_NUMBER.replace(/\D/g, "")}`,
} as const;

// Aggregate rating data. Only set these once you have a real source
// (Google Reviews API, TripAdvisor, etc.). Leave as null until then —
// fake ratings violate Google's structured data policies and are
// punished aggressively.
export const AGGREGATE_RATING: { ratingValue: string; reviewCount: number } | null = null;

// Business identity / E-E-A-T metadata.
export const BUSINESS = {
  legalName: "Poseidon Transfers & Tours",
  tagline: "Luxury private transfers and guided tours in Greece",
  foundedYear: null as number | null, // set when known, e.g. 2018
  ownerName: null as string | null, // set when known, e.g. "Dimitris Papadakis"
  vatNumber: null as string | null, // set when known
  eotLicense: null as string | null, // Greek Tourism Organization registration, when known
  primaryAddress: {
    streetAddress: null as string | null, // optional
    addressLocality: "Athens",
    addressRegion: "Attica",
    postalCode: null as string | null,
    addressCountry: "GR",
  },
  // Approximate Athens center for LocalBusiness geo (real address takes priority once added)
  geo: { latitude: 37.9755, longitude: 23.7348 },
} as const;
