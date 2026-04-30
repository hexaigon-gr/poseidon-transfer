import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { DOMAIN, PHONE_NUMBER, EMAIL, BUSINESS } from "@/lib/data/config";
import { breadcrumbListSchema, jsonLdScript } from "@/lib/seo/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Award, Users, Globe, Phone, Mail, MapPin, Clock } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export const revalidate = 86400;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const url = `${DOMAIN}/${locale}/about`;
  const title = "About Poseidon Transfers | Licensed Athens Private Tour Operator";
  const description =
    "Licensed Athens-based private tour and chauffeur company. Local English-speaking drivers, fully insured Mercedes fleet, 24/7 service. Trusted by US, UK, and Australian travelers.";
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        "en-US": `${DOMAIN}/en-US/about`,
        el: `${DOMAIN}/el/about`,
        "x-default": `${DOMAIN}/en-US/about`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale,
      siteName: "Poseidon Transfers & Tours",
      images: [{ url: `${DOMAIN}/images/about-greece.jpg`, width: 1200, height: 630, alt: title }],
    },
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const url = `${DOMAIN}/${locale}/about`;

  const breadcrumb = breadcrumbListSchema([
    { name: "Home", url: `${DOMAIN}/${locale}` },
    { name: "About", url },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumb)} />

      <main>
        {/* Hero */}
        <section className="relative h-[45vh] w-full">
          <Image
            src="/images/about-greece.jpg"
            alt="Poseidon Transfers — licensed Athens private tour and chauffeur company"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">About Poseidon Transfers</h1>
              <p className="text-lg md:text-xl text-white/90">
                Licensed Athens-based private tour and chauffeur company. Local drivers, luxury Mercedes fleet, 24/7 service.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="prose prose-invert max-w-none space-y-6">
            <h2 className="text-3xl font-bold">Who we are</h2>
            <p className="text-muted-foreground leading-relaxed">
              Poseidon Transfers &amp; Tours is an Athens-based private chauffeur and guided-tour
              company. We operate a fleet of luxury Mercedes vehicles and work exclusively with
              licensed, English-speaking professional drivers who are local to Athens and the
              Peloponnese. Our customers are mostly American, British, Australian, and Canadian
              travelers who want a private, high-quality, low-friction way to see Greece — without
              the rigidity of group tours or the unpredictability of taxi apps.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We do three things, well: <strong>private airport &amp; cruise port transfers</strong>{" "}
              between Athens International Airport (ATH), Piraeus port, the Athens Riviera, and city
              hotels; <strong>private day tours</strong> to the most important archaeological and
              cultural sites in Greece — Cape Sounion, Delphi, Meteora, Mycenae, Olympia, and the
              Acropolis; and <strong>custom multi-day private itineraries</strong> for travelers
              putting together a longer Greek trip. Pricing is per vehicle, not per person, so
              groups of 4–7 get exceptional value compared to per-seat tour packages.
            </p>

            <h2 className="text-3xl font-bold pt-8">What makes us different</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <strong>You book directly with the operator.</strong> No marketplace, no platform
                commission, no call-center agents who&apos;ve never been to Greece. The person you
                email or WhatsApp is the same person dispatching the driver.
              </li>
              <li>
                <strong>Same driver, same Mercedes, all day.</strong> Our private tours don&apos;t hand
                you off between vehicles or guides. The driver who picks you up at 8 AM is the same
                one who drops you off at 8 PM, with the same vehicle, your luggage on board.
              </li>
              <li>
                <strong>English-speaking, locally licensed drivers.</strong> Every driver speaks
                fluent English, holds a Greek professional driver license, and is trained on the
                routes we operate. Many of them have been doing this for 10+ years and know which
                taverna in Loutraki has the best octopus.
              </li>
              <li>
                <strong>Free hotel and cruise port pickup.</strong> Door-to-door from any hotel,
                Airbnb, short-term rental, or Piraeus cruise dock — included, no extra charge,
                anywhere in greater Athens or the Athens Riviera.
              </li>
              <li>
                <strong>Free cancellation, no deposits.</strong> We hold the booking on confidence,
                with payment at the end of service. Cancel up to 24 hours before pickup with no
                charge — 48 hours for the longest day tours (Olympia, Meteora).
              </li>
              <li>
                <strong>USD-friendly.</strong> We accept US dollars in cash and process card
                payments directly in EUR with daily rate conversion. No platform FX surprises.
              </li>
            </ul>

            <h2 className="text-3xl font-bold pt-8">Our fleet</h2>
            <p className="text-muted-foreground leading-relaxed">
              We operate Mercedes-Benz E-Class sedans for couples and small groups, Mercedes V-Class
              and Vito vans for groups of 5–7 with luggage, and 16-passenger Mercedes vans for
              larger family or business groups. Every vehicle is fully maintained, fully insured for
              passenger liability under Greek law, and equipped with leather seats, climate control,
              free Wi-Fi, charging ports, and bottled water onboard. Child seats and boosters are
              available free of charge — please request when booking.
            </p>

            <h2 className="text-3xl font-bold pt-8">Licensing &amp; safety</h2>
            <p className="text-muted-foreground leading-relaxed">
              All our drivers are licensed under Greek transport law and our vehicles carry
              comprehensive passenger-liability insurance as required by the Hellenic Ministry of
              Tourism and the Greek Ministry of Transport. By Greek law, professional driver-guides
              may provide commentary during transport but only state-licensed archaeological guides
              may guide actively inside protected sites — we partner with multiple licensed Athens,
              Delphi, Olympia, and Meteora guides and can add one to any tour on request.
            </p>

            <h2 className="text-3xl font-bold pt-8">Where we go</h2>
            <p className="text-muted-foreground leading-relaxed">
              We operate from Athens, with day tours covering all of Attica (Cape Sounion, the
              Athens Riviera, Marathon), the Argolis (Mycenae, Nafplio, Epidaurus, Corinth), central
              Greece (Delphi, Mount Parnassus, Meteora), and the western Peloponnese (Ancient
              Olympia, Patras). For multi-day private trips we also run extended itineraries
              covering the Mani peninsula, Monemvasia, Kalamata, and the ferry ports for the
              Saronic and Cycladic islands.
            </p>

            <h2 className="text-3xl font-bold pt-8">A note for US travelers</h2>
            <p className="text-muted-foreground leading-relaxed">
              About 60% of our customers are from the United States. We&apos;ve adapted our service to
              what American travelers consistently ask for: USD pricing transparency, English-only
              communication, fixed quotes (no surprise extras), driver gratuity guidance, free
              cancellation, fast WhatsApp response, and the ability to book without paying a
              deposit upfront. We&apos;re used to working with cruise schedules from Royal Caribbean,
              Norwegian, MSC, Viking, Holland America, Princess, and Celebrity, and with the major
              US-based travel agencies that arrange Greek itineraries.
            </p>

            <h2 className="text-3xl font-bold pt-8">Contact us</h2>
            <p className="text-muted-foreground leading-relaxed">
              We respond to email and WhatsApp typically within an hour during Athens daytime hours
              (UTC+2/+3), and within a few hours overnight. Phone is best for time-sensitive
              same-day or next-day requests.
            </p>
          </div>
        </section>

        {/* Trust pillars */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold mb-10 text-center">Why travelers choose us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <ShieldCheck className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Licensed &amp; insured</h3>
                  <p className="text-sm text-muted-foreground">
                    Greek-licensed drivers, fully insured Mercedes fleet, GDPR-compliant data
                    handling.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Globe className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="font-bold mb-2">English-speaking drivers</h3>
                  <p className="text-sm text-muted-foreground">
                    Every driver speaks fluent English with deep local knowledge of the routes and
                    sites.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Truly private</h3>
                  <p className="text-sm text-muted-foreground">
                    No shared vans, no group of strangers. The vehicle and the driver are yours for
                    the day.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Free cancellation</h3>
                  <p className="text-sm text-muted-foreground">
                    Cancel up to 24 hours before pickup, full refund. No deposit required to
                    book.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="container mx-auto px-4 py-16 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-6 flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone &amp; WhatsApp</h3>
                  <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`} className="text-muted-foreground hover:text-primary">
                    {PHONE_NUMBER}
                  </a>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href={`mailto:${EMAIL}`} className="text-muted-foreground hover:text-primary">
                    {EMAIL}
                  </a>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Based in</h3>
                  <p className="text-muted-foreground">
                    {BUSINESS.primaryAddress.addressLocality}, {BUSINESS.primaryAddress.addressRegion}, Greece
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Hours</h3>
                  <p className="text-muted-foreground">24/7 — always available</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg">
              <Link href={`/${locale}/booking-wizard`}>Book a Tour</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={`/${locale}/private-tours-athens`}>View All Tours</Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
