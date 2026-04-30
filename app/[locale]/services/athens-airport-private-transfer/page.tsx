import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { DOMAIN, PHONE_NUMBER } from "@/lib/data/config";
import { breadcrumbListSchema, faqPageSchema, jsonLdScript } from "@/lib/seo/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Plane, Clock, Users, ShieldCheck, Check } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export const revalidate = 86400;

const FAQ = [
  {
    question: "How much is a private transfer from Athens Airport (ATH) to the city center?",
    answer:
      "A fixed flat rate of $79 USD (€69) for a Mercedes E-Class sedan (up to 3 passengers + 3 bags) and $109 USD (€99) for a Mercedes V-Class or Vito van (up to 7 passengers + luggage). The price is per vehicle, not per person. It includes meet-and-greet at the arrivals hall, all road tolls, parking, and fuel. No surge pricing, no late-night surcharge, no surprises.",
  },
  {
    question: "How long does the transfer from ATH airport to central Athens take?",
    answer:
      "About 35 minutes to the historic center (Plaka, Syntagma, Acropolis area), 45 minutes to Piraeus port, 25 minutes to the Athens Riviera (Glyfada, Vouliagmeni). All times via the Attiki Odos motorway, outside rush hour. Add 15-25 minutes during weekday rush (8-10 AM, 5-8 PM).",
  },
  {
    question: "Where will my driver meet me at Athens Airport?",
    answer:
      "Inside the arrivals hall at exit 3, holding a sign with your name on it. We monitor your flight in real time and adjust pickup if your flight is early or delayed — no extra charge for delays. After baggage claim, you walk straight to the driver, no waiting around outside.",
  },
  {
    question: "What if my flight is delayed?",
    answer:
      "We track your flight number in real time. If you're delayed by 30 minutes or 3 hours, we adjust the pickup automatically and you're not charged extra. The driver will be there when you walk out of arrivals. If you miss your flight entirely, contact us by WhatsApp and we'll reschedule for free as long as we have notice.",
  },
  {
    question: "Do you provide child seats?",
    answer:
      "Yes — infant seats, toddler car seats, and booster seats are all available free of charge. Please request when booking and tell us the age and weight of each child so we bring the right seat.",
  },
  {
    question: "Can you do a transfer to or from a cruise ship at Piraeus?",
    answer:
      "Yes — fixed flat rate of $99 USD (€89) for a sedan, $129 USD (€119) for a V-Class. We meet you at the gangway with your ship name on a sign. Same flight-monitoring service applies to cruise tracking. Average drive: ATH airport to Piraeus is about 45 minutes via the Attiki Odos.",
  },
  {
    question: "What if I have a really early or late flight?",
    answer:
      "We operate 24/7 with no surcharge for early-morning or late-night transfers. The 5 AM pickup and the midnight pickup cost the same as a 2 PM pickup.",
  },
  {
    question: "Can the driver hold the car at the airport while I clear immigration?",
    answer:
      "Yes — we include 60 minutes of free waiting time after your flight's actual landing. If immigration is slow (it sometimes is, especially for non-Schengen flights), you don't pay extra for the wait. After 60 minutes we charge €10 per additional 30 minutes.",
  },
  {
    question: "How do I pay?",
    answer:
      "Cash in EUR or USD, or major credit card (Visa, Mastercard, American Express) at the end of the trip. No deposit required to book. Payment is taken when you reach your destination, not in advance.",
  },
  {
    question: "What's the cancellation policy?",
    answer:
      "Free cancellation up to 4 hours before pickup time for airport transfers. Full refund of any deposit. We're flexible — if you have to cancel last-minute due to a missed connection or genuine emergency, contact us and we'll work it out.",
  },
  {
    question: "Can you arrange a stopover or sightseeing on the way?",
    answer:
      "Yes — popular options: a 30-minute stop at the Acropolis viewpoint on Areopagus Hill on the way to your hotel, a stop at a Plaka taverna for the first Greek meal, or a quick stop at Syntagma Square for the Changing of the Guard. Adds $30-50 USD to the transfer depending on duration. Just mention when booking.",
  },
  {
    question: "Is meet-and-greet included or extra?",
    answer:
      "Included. Every airport transfer includes meet-and-greet inside the arrivals hall — driver with name sign, help with luggage, walk to the vehicle. We don't do curbside pickup at airport — Athens Airport doesn't allow it for private vehicles, and inside meet-and-greet is genuinely a better arrival experience.",
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const url = `${DOMAIN}/${locale}/services/athens-airport-private-transfer`;
  const title = "Athens Airport Private Transfer | Fixed Flat Rate from $79 USD";
  const description =
    "Private transfer from Athens International Airport (ATH) to your hotel. Fixed flat rate from $79, English-speaking driver, meet-and-greet at arrivals, free flight monitoring, 24/7.";
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        "en-US": `${DOMAIN}/en-US/services/athens-airport-private-transfer`,
        el: `${DOMAIN}/el/services/athens-airport-private-transfer`,
        "x-default": `${DOMAIN}/en-US/services/athens-airport-private-transfer`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale,
      siteName: "Poseidon Transfers & Tours",
      images: [{ url: `${DOMAIN}/images/hero-greece.jpg`, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`${DOMAIN}/images/hero-greece.jpg`] },
  };
}

export default async function AirportTransferPage({ params }: Props) {
  const { locale } = await params;
  const url = `${DOMAIN}/${locale}/services/athens-airport-private-transfer`;

  const breadcrumb = breadcrumbListSchema([
    { name: "Home", url: `${DOMAIN}/${locale}` },
    { name: "Services", url: `${DOMAIN}/${locale}/#services` },
    { name: "Athens Airport Private Transfer", url },
  ]);

  const faqSchema = faqPageSchema(FAQ);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Athens Airport Private Transfer",
    name: "Athens International Airport (ATH) Private Transfer",
    description:
      "Private chauffeured transfer between Athens International Airport (ATH) and any Athens hotel, Airbnb, or Piraeus cruise port. Fixed flat rate, English-speaking driver, meet-and-greet at arrivals, 24/7 service.",
    provider: {
      "@type": "TaxiService",
      "@id": `${DOMAIN}/#business`,
      name: "Poseidon Transfers & Tours",
      url: DOMAIN,
      telephone: PHONE_NUMBER,
    },
    areaServed: [
      { "@type": "City", name: "Athens" },
      { "@type": "AdministrativeArea", name: "Attica" },
    ],
    offers: [
      {
        "@type": "Offer",
        name: "Sedan transfer (Mercedes E-Class, up to 3 passengers)",
        price: "69",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Van transfer (Mercedes V-Class or Vito, up to 7 passengers)",
        price: "99",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
      },
    ],
    url,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumb)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(serviceSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(faqSchema)} />

      <main>
        {/* Hero */}
        <section className="relative h-[50vh] w-full">
          <Image
            src="/images/hero-greece.jpg"
            alt="Private airport transfer from Athens International Airport (ATH) — luxury Mercedes vehicle"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Athens Airport Private Transfer
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-2">
                Fixed flat rate · English-speaking driver · Meet-and-greet at arrivals · 24/7
              </p>
              <p className="text-sm md:text-base text-white/80 mb-6">
                From <span className="font-bold">$79 USD</span> (€69) — no surge pricing, no late-night surcharge.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="lg" className="cta-button">
                  <Link href={`/${locale}/booking-wizard`}>Book Your Transfer</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20 hover:text-white">
                  <a href="tel:+306976550034">
                    <Phone className="mr-2 h-4 w-4" /> +30 697 655 0034
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="container mx-auto px-4 py-16 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Fixed flat-rate pricing</h2>
          <p className="text-center text-muted-foreground mb-10">
            Per vehicle, not per person. Includes all road tolls, parking, fuel, meet-and-greet, and
            up to 60 minutes of free waiting time after landing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Mercedes E-Class</h3>
                    <p className="text-sm text-muted-foreground">Up to 3 passengers · 3 large bags</p>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-primary">$79</span>
                  <span className="text-muted-foreground ml-2">(€69)</span>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><Check className="h-4 w-4 text-primary mt-0.5" /> Meet-and-greet inside arrivals hall</li>
                  <li className="flex items-start gap-2"><Check className="h-4 w-4 text-primary mt-0.5" /> 60 min free waiting time</li>
                  <li className="flex items-start gap-2"><Check className="h-4 w-4 text-primary mt-0.5" /> Free flight monitoring</li>
                  <li className="flex items-start gap-2"><Check className="h-4 w-4 text-primary mt-0.5" /> All tolls + parking included</li>
                  <li className="flex items-start gap-2"><Check className="h-4 w-4 text-primary mt-0.5" /> Free child seat / booster on request</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Mercedes V-Class / Vito</h3>
                    <p className="text-sm text-muted-foreground">Up to 7 passengers · 6+ large bags</p>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-primary">$109</span>
                  <span className="text-muted-foreground ml-2">(€99)</span>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><Check className="h-4 w-4 text-primary mt-0.5" /> Same meet-and-greet inside arrivals</li>
                  <li className="flex items-start gap-2"><Check className="h-4 w-4 text-primary mt-0.5" /> Premium leather + climate control</li>
                  <li className="flex items-start gap-2"><Check className="h-4 w-4 text-primary mt-0.5" /> Free Wi-Fi onboard</li>
                  <li className="flex items-start gap-2"><Check className="h-4 w-4 text-primary mt-0.5" /> Best for families and groups</li>
                  <li className="flex items-start gap-2"><Check className="h-4 w-4 text-primary mt-0.5" /> All tolls + parking included</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What you get */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold mb-10 text-center">What's included in every airport transfer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Plane className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Flight monitoring</h3>
                  <p className="text-sm text-muted-foreground">
                    We track your flight in real time. Early or late, your driver is there when you walk out.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Meet-and-greet</h3>
                  <p className="text-sm text-muted-foreground">
                    Driver inside arrivals with a sign. Help with luggage. Walk straight to the vehicle.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="font-bold mb-2">60 min free wait</h3>
                  <p className="text-sm text-muted-foreground">
                    Slow immigration? Lost luggage? No problem — first hour after landing is on us.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <ShieldCheck className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Fixed flat rate</h3>
                  <p className="text-sm text-muted-foreground">
                    No surge pricing. No late-night surcharge. The price you see is the price you pay.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Routes */}
        <section className="container mx-auto px-4 py-16 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Common routes &amp; durations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { route: "Athens Airport (ATH) ⇄ City Center (Plaka, Syntagma, Acropolis)", time: "35 min", price: "From $79" },
              { route: "Athens Airport (ATH) ⇄ Piraeus Cruise Port", time: "45 min", price: "From $99" },
              { route: "Athens Airport (ATH) ⇄ Athens Riviera (Glyfada, Vouliagmeni)", time: "25 min", price: "From $79" },
              { route: "Athens Airport (ATH) ⇄ Marathon / Rafina", time: "30 min", price: "From $89" },
              { route: "Athens Airport (ATH) ⇄ Sounion", time: "55 min", price: "From $129" },
              { route: "Athens Airport (ATH) ⇄ Lavrio Port", time: "30 min", price: "From $79" },
            ].map((r) => (
              <Card key={r.route}>
                <CardContent className="p-5">
                  <h3 className="font-semibold mb-2">{r.route}</h3>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground"><Clock className="inline h-3 w-3 mr-1" /> {r.time}</span>
                    <span className="text-primary font-semibold">{r.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently asked questions</h2>
            <div className="divide-y divide-border bg-card rounded-xl border p-2 md:p-6">
              {FAQ.map((item) => (
                <details key={item.question} className="group py-4 px-4 md:px-2">
                  <summary className="flex justify-between items-start gap-4 cursor-pointer list-none font-medium hover:text-primary transition-colors">
                    <span>{item.question}</span>
                    <span className="text-primary text-xl flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Book your Athens airport transfer</h2>
            <p className="mb-8 text-primary-foreground/90">
              Send us your flight number and hotel — we&rsquo;ll confirm in minutes.
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
