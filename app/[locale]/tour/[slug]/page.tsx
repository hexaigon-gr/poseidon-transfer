import { tours } from "../../../../lib/data/tours";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import TourClient from "./TourClient";
import { DOMAIN } from "@/lib/data/config";
import {
  tourTripSchema,
  faqPageSchema,
  breadcrumbListSchema,
  jsonLdScript,
} from "@/lib/seo/schema";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export const revalidate = 3600;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const tour = tours.find((tour) => tour.slug === slug);

  if (!tour) {
    return {
      title: "Tour Not Found",
      robots: { index: false, follow: false },
    };
  }

  const title = `${tour.title} | Private Tour from Athens`;
  const description =
    tour.metaDescription ||
    `Private guided ${tour.title} from Athens. Luxury Mercedes vehicle, English-speaking driver, hotel pickup. ${tour.hours}-hour tour. Book now.`;
  const canonicalUrl = `${DOMAIN}/${locale}/tour/${slug}`;
  const image = tour.image.startsWith("http") ? tour.image : `${DOMAIN}${tour.image}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-US": `${DOMAIN}/en-US/tour/${slug}`,
        el: `${DOMAIN}/el/tour/${slug}`,
        "x-default": `${DOMAIN}/en-US/tour/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: tour.title }],
      url: canonicalUrl,
      type: "website",
      locale,
      siteName: "Poseidon Transfers & Tours",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export async function generateStaticParams() {
  return tours.flatMap((tour) => [
    { locale: "en-US", slug: tour.slug },
    { locale: "el", slug: tour.slug },
  ]);
}

export default async function TourPage({ params }: Props) {
  const { slug, locale } = await params;
  const tour = tours.find((tour) => tour.slug === slug);

  if (!tour) {
    notFound();
  }

  const tripSchema = tourTripSchema(tour, locale);
  const breadcrumb = breadcrumbListSchema([
    { name: "Home", url: `${DOMAIN}/${locale}` },
    { name: "Tours", url: `${DOMAIN}/${locale}#tours` },
    { name: tour.title, url: `${DOMAIN}/${locale}/tour/${slug}` },
  ]);
  const faqSchema = tour.faq && tour.faq.length > 0 ? faqPageSchema(tour.faq) : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(tripSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumb)} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(faqSchema)} />
      )}
      <TourClient slug={slug} />
    </>
  );
}
