import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { tours } from "@/lib/data/tours";
import { DOMAIN } from "@/lib/data/config";
import { breadcrumbListSchema, faqPageSchema, jsonLdScript } from "@/lib/seo/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Check, MapPin, Phone } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export const revalidate = 3600;

const FAQ = [
  {
    question: "What does 'private tour' mean exactly?",
    answer:
      "A private tour means the entire vehicle is yours — no shared van, no group of strangers, no fixed pickup time. It's just you, your party, your driver, and a luxury Mercedes. The itinerary, pace, and stops are flexible. Pickup is door-to-door from your hotel, Airbnb, or the cruise port at Piraeus.",
  },
  {
    question: "How much does a private day tour from Athens cost?",
    answer:
      "Private day tours from Athens range from $319 (Athens half-day, 4 hours) to $1,019 (Meteora full-day, 12 hours). Pricing is per vehicle, not per person — so for groups of 3 to 7 the per-person cost drops significantly versus group tours. All our prices include the vehicle, English-speaking driver, fuel, tolls, and hotel pickup.",
  },
  {
    question: "Are your drivers also licensed guides?",
    answer:
      "Our drivers are licensed transport professionals and provide expert historical and cultural commentary during the drive. By Greek law, only state-licensed archaeological guides may guide actively inside protected archaeological sites. We partner with several licensed guides and can add one to your booking on request — this is the gold standard for sites like Delphi, Olympia, Mycenae, and the Acropolis.",
  },
  {
    question: "Do you pick up at Piraeus cruise port?",
    answer:
      "Yes — cruise port pickup and drop-off is included at no extra charge for every tour. We need your ship name, dock, and all-aboard time. We routinely work with passengers from Royal Caribbean, Norwegian, MSC, Celebrity, Viking, Holland America, and Princess sailings. Our drivers know exactly which gate to meet you at and we always have you back at the gangway with at least 60 minutes of buffer.",
  },
  {
    question: "What languages do your drivers speak?",
    answer:
      "All our drivers speak fluent English. Greek and basic Italian, French, German, and Spanish are also commonly available — let us know your preference when booking.",
  },
  {
    question: "What's the cancellation policy?",
    answer:
      "Free cancellation up to 24 hours before pickup time — full refund, no questions asked. Cancellations within 24 hours may be charged up to 50%. No-shows may be charged 100%. We'll always be reasonable about weather, missed flights, or genuine emergencies.",
  },
  {
    question: "Do you accept US dollars?",
    answer:
      "Yes — we accept US dollars in cash. We also accept euros, and major credit cards (Visa, Mastercard, American Express). Card payments are processed in EUR; your bank handles the conversion.",
  },
  {
    question: "Are kids and car seats okay?",
    answer:
      "All tours are family-friendly. We have car seats and booster seats for infants, toddlers, and small children — please request when booking, free of charge.",
  },
  {
    question: "Can you combine tours into a custom multi-day itinerary?",
    answer:
      "Yes — we regularly build 2-day, 3-day, and full-week private itineraries combining Athens, the Peloponnese (Mycenae, Nafplio, Olympia), Delphi, Meteora, and the Athens Riviera. Contact us with your travel dates and interests and we'll send a custom proposal within 24 hours.",
  },
  {
    question: "How is this better than booking through Viator or GetYourGuide?",
    answer:
      "Booking directly with us means: you talk to the operator (us), not a marketplace; pricing is the same or lower (no platform commission); the driver knows your name and itinerary before you arrive; we can adjust the tour on the fly to weather, mood, or surprise stops; and any issue is resolved by the people actually running the tour, not by a call center in another country.",
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const url = `${DOMAIN}/${locale}/private-tours-athens`;
  const title = "Private Tours from Athens | Luxury VIP Day Tours of Greece";
  const description =
    "Private luxury day tours from Athens with English-speaking drivers and Mercedes vehicles. Cape Sounion, Delphi, Meteora, Acropolis, Mycenae, Olympia. Hotel + cruise port pickup. From $319.";
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        "en-US": `${DOMAIN}/en-US/private-tours-athens`,
        el: `${DOMAIN}/el/private-tours-athens`,
        "x-default": `${DOMAIN}/en-US/private-tours-athens`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale,
      siteName: "Poseidon Transfers & Tours",
      images: [
        { url: `${DOMAIN}/images/hero-greece.jpg`, width: 1200, height: 630, alt: title },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${DOMAIN}/images/hero-greece.jpg`],
    },
  };
}

export default async function HubPage({ params }: Props) {
  const { locale } = await params;
  const url = `${DOMAIN}/${locale}/private-tours-athens`;

  const breadcrumb = breadcrumbListSchema([
    { name: "Home", url: `${DOMAIN}/${locale}` },
    { name: "Private Tours from Athens", url },
  ]);

  const faqSchema = faqPageSchema(FAQ);

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Private Day Tours from Athens",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: tours.length,
    itemListElement: tours.map((tour, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${DOMAIN}/${locale}/tour/${tour.slug}`,
      name: tour.title,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumb)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(faqSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(itemList)} />

      <main>
        {/* Hero */}
        <section className="relative h-[55vh] w-full">
          <Image
            src="/images/hero-greece.jpg"
            alt="Private luxury tours from Athens — Mercedes vehicle and English-speaking driver"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Private Tours from Athens
              </h1>
              <p className="text-lg md:text-2xl text-white/90 mb-2">
                Luxury VIP day tours of Greece — your party, your pace, your private Mercedes.
              </p>
              <p className="text-sm md:text-base text-white/80 mb-6">
                English-speaking drivers · Hotel &amp; cruise port pickup · From $319
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="lg" className="cta-button">
                  <Link href={`/${locale}/booking-wizard`}>Book a Private Tour</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20 hover:text-white">
                  <a href="tel:+306976550034">
                    <Phone className="mr-2 h-4 w-4" /> Call +30 697 655 0034
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6">Why book a private tour from Athens?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A private tour from Athens means the whole vehicle is yours — no shared van of 30 strangers,
              no fixed schedule, no rushed audio guide. Just you, your travel companions, an English-speaking
              local driver, and a luxury Mercedes for the day. Pickup is door-to-door from your hotel,
              Airbnb, or the cruise port at Piraeus. Itinerary stops, photo breaks, lunch, and pace are all
              flexible.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We&rsquo;ve been running private tours of Greece for travelers from the United States, the UK,
              Canada, and Australia for years. Our customers are first-time visitors building their bucket
              list, repeat travelers digging deeper into the Peloponnese, couples planning sunset proposals
              at the Temple of Poseidon, families with young kids who need car seats and flexibility, and
              cruise passengers with a single precious day ashore.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Below is the full lineup of our private day tours from Athens — sorted by duration. Every tour
              includes the vehicle, driver, fuel, tolls, hotel pickup, and bottled water. Prices are per
              vehicle, not per person, so a tour for two costs the same as a tour for seven. Click any card
              for the full itinerary, FAQ, and booking.
            </p>
          </div>
        </section>

        {/* Tours grid */}
        <section className="container mx-auto px-4 pb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">All private day tours from Athens</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[...tours]
              .sort((a, b) => a.hours - b.hours)
              .map((tour) => (
                <Card key={tour.slug} className="overflow-hidden hover:shadow-xl transition-shadow group">
                  <Link href={`/${locale}/tour/${tour.slug}`} className="block">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={tour.image}
                        alt={`${tour.title} — private tour from Athens`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {tour.hours} hours
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" /> Private up to 7
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                        {tour.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {tour.subtitle}
                      </p>
                      <div className="flex justify-between items-center pt-2 border-t border-border">
                        <span className="text-sm">
                          <span className="font-bold text-primary">
                            From ${tour.costUSD || Math.round(parseInt(tour.cost) * 1.07)}
                          </span>
                          <span className="text-muted-foreground text-xs ml-1">
                            (€{tour.cost})
                          </span>
                        </span>
                        <span className="text-sm text-primary font-medium group-hover:translate-x-1 transition-transform">
                          View tour →
                        </span>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
          </div>
        </section>

        {/* What's included */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold mb-8 text-center">
              What every private tour from Athens includes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Luxury Mercedes vehicle",
                  body:
                    "E-Class for couples and small groups, V-Class or Vito for groups up to 7. Leather, climate control, Wi-Fi, charging ports.",
                },
                {
                  title: "English-speaking professional driver",
                  body:
                    "Licensed, insured, with deep local knowledge. Provides historical commentary during the drive.",
                },
                {
                  title: "Door-to-door pickup",
                  body:
                    "From any hotel, Airbnb, short-term rental, or Piraeus cruise port — included, no extra charge.",
                },
                {
                  title: "All road costs covered",
                  body: "Fuel, tolls, parking, and taxes are included in the quoted price.",
                },
                {
                  title: "Bottled water + Wi-Fi",
                  body:
                    "Complimentary cold water and refreshments onboard. Free Wi-Fi for navigating, sharing photos, or taking calls.",
                },
                {
                  title: "Flexible itinerary",
                  body:
                    "Stop for photos, take a longer lunch, skip a planned stop — your driver adjusts the route to you.",
                },
              ].map((item) => (
                <Card key={item.title}>
                  <CardContent className="p-6 flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.body}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cruise + Airport callout */}
        <section className="container mx-auto px-4 py-16 max-w-4xl">
          <Card className="overflow-hidden border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <MapPin className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-3">
                    Cruise passengers and airport arrivals
                  </h2>
                  <p className="text-muted-foreground mb-3">
                    If you&rsquo;re docking at <strong>Piraeus port</strong> on a Mediterranean
                    cruise, we offer same-day private tours timed precisely to your ship&rsquo;s
                    schedule. The most popular options for a 6–10 hour stop are the
                    Athens half-day tour, the Temple of Poseidon sunset tour, and the
                    Athens &amp; Poseidon Temple combined full-day tour.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Flying into <strong>Athens International Airport (ATH)</strong>? We provide
                    fixed-price private airport transfers and combined arrival-day half-day
                    tours so you can hit the ground running. Just send us your flight
                    number and hotel.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild>
                      <Link href={`/${locale}/booking-wizard`}>Book Now</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <a href="tel:+306976550034">
                        <Phone className="mr-2 h-4 w-4" /> Call +30 697 655 0034
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ */}
        <section className="container mx-auto px-4 py-16 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Frequently asked questions about private tours from Athens
          </h2>
          <div className="divide-y divide-border bg-card rounded-xl border p-2 md:p-6">
            {FAQ.map((item) => (
              <details key={item.question} className="group py-4 px-4 md:px-2">
                <summary className="flex justify-between items-start gap-4 cursor-pointer list-none font-medium hover:text-primary transition-colors">
                  <span>{item.question}</span>
                  <span className="text-primary text-xl flex-shrink-0 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Ready to plan your private day in Greece?</h2>
            <p className="mb-8 text-primary-foreground/90">
              Tell us your dates, hotel or ship, and the tour you have in mind. We&rsquo;ll confirm
              within hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href={`/${locale}/booking-wizard`}>Book Online</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <a href="tel:+306976550034">
                  <Phone className="mr-2 h-4 w-4" /> +30 697 655 0034
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
