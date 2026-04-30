"use client";

import { useTranslations } from "next-intl";
import { tours } from "../../../../lib/data/tours";
import BookingWizardSection from "../../../../components/sections/BookingWizardSection";
import { Card, CardContent, CardHeader } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { ArrowLeft, Check, X, Clock, Users, Languages, MapPin, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type TourClientProps = {
  slug: string;
};

const TourClient = ({ slug }: TourClientProps) => {
  const t = useTranslations("Tours.tourDetails");
  const tour = tours.find((tour) => tour.slug === slug);

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md w-full">
          <CardHeader>
            <h2 className="font-semibold leading-none tracking-tight text-center">Tour Not Found</h2>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-4">The requested tour could not be found.</p>
            <Button asChild>
              <Link href="/#tours">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t("back")}
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src={tour.image}
          alt={`${tour.title} — private luxury tour from Athens`}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{tour.title}</h1>
            <p className="text-lg md:text-xl mb-6">{tour.subtitle}</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full">
                <Clock className="h-4 w-4" /> {tour.hours} hours
              </span>
              {tour.groupSize && (
                <span className="flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full">
                  <Users className="h-4 w-4" /> Private
                </span>
              )}
              {tour.languages && tour.languages.length > 0 && (
                <span className="flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full">
                  <Languages className="h-4 w-4" /> {tour.languages.join(", ")}
                </span>
              )}
              <span className="flex items-center gap-2 bg-primary/90 px-3 py-1.5 rounded-full font-semibold">
                {tour.costUSD ? `From $${tour.costUSD}` : `From €${tour.cost}`}
                {tour.costUSD && (
                  <span className="text-white/80 text-xs">(€{tour.cost})</span>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="space-y-12 max-w-4xl mx-auto">
          {/* Description */}
          <Card className="shadow-md">
            <CardHeader>
              <h2 className="text-2xl font-semibold tracking-tight">About this tour</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              {Array.isArray(tour.description) ? (
                tour.description.map((paragraph, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-muted-foreground leading-relaxed">{tour.description}</p>
              )}
            </CardContent>
          </Card>

          {/* Quick info grid */}
          {(tour.meetingPoint || tour.cancellationPolicy || tour.groupSize) && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {tour.meetingPoint && (
                <Card className="shadow-sm">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Meeting point</h3>
                        <p className="text-sm text-muted-foreground">{tour.meetingPoint}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
              {tour.cancellationPolicy && (
                <Card className="shadow-sm">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Cancellation</h3>
                        <p className="text-sm text-muted-foreground">{tour.cancellationPolicy}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
              {tour.groupSize && (
                <Card className="shadow-sm">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Group size</h3>
                        <p className="text-sm text-muted-foreground">{tour.groupSize}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {/* Highlights */}
          {tour.highlights && tour.highlights.length > 0 && (
            <Card className="shadow-md">
              <CardHeader>
                <h2 className="text-2xl font-semibold tracking-tight">{t("highlights")}</h2>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                  {tour.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Itinerary */}
          {tour.itinerary && tour.itinerary.length > 0 && (
            <Card className="shadow-md">
              <CardHeader>
                <h2 className="text-2xl font-semibold tracking-tight">Itinerary</h2>
                <p className="text-sm text-muted-foreground mt-2">
                  Sample timeline — your driver will adjust pickup time and stops based on the
                  exact sunset for your date.
                </p>
              </CardHeader>
              <CardContent>
                <ol className="relative border-l-2 border-primary/30 pl-6 space-y-6">
                  {tour.itinerary.map((step, i) => (
                    <li key={i} className="relative">
                      <span className="absolute -left-[34px] flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                        {i + 1}
                      </span>
                      <div>
                        <div className="flex items-baseline gap-3 flex-wrap">
                          <span className="text-sm font-mono text-primary font-semibold">
                            {step.time}
                          </span>
                          <h3 className="font-semibold">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground mt-1">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          )}

          {/* What's included / not included */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tour.includes && tour.includes.length > 0 && (
              <Card className="shadow-md">
                <CardHeader>
                  <h2 className="text-xl font-semibold tracking-tight">{t("includes")}</h2>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tour.includes.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
            {tour.notIncluded && tour.notIncluded.length > 0 && (
              <Card className="shadow-md">
                <CardHeader>
                  <h2 className="text-xl font-semibold tracking-tight">Not included</h2>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tour.notIncluded.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <X className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>

          {/* FAQ */}
          {tour.faq && tour.faq.length > 0 && (
            <Card className="shadow-md">
              <CardHeader>
                <h2 className="text-2xl font-semibold tracking-tight">Frequently asked questions</h2>
              </CardHeader>
              <CardContent>
                <div className="divide-y divide-border">
                  {tour.faq.map((item, i) => (
                    <details key={i} className="group py-4">
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
              </CardContent>
            </Card>
          )}

          {/* Booking */}
          <div className="pt-8">
            <BookingWizardSection tourSlug={slug} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourClient;
