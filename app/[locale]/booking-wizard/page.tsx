import type { Metadata } from "next";
import BookingWizardSection from "../../../components/sections/BookingWizardSection";
import { DOMAIN } from "@/lib/data/config";

type Props = { params: Promise<{ locale: string }> };

export const revalidate = 3600;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const url = `${DOMAIN}/${locale}/booking-wizard`;
  const title = "Book a Private Transfer or Tour | Poseidon Transfers Athens";
  const description =
    "Book your private Athens transfer or guided tour. Free cancellation, no deposit, English-speaking driver, USD or EUR. From $319.";
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        "en-US": `${DOMAIN}/en-US/booking-wizard`,
        el: `${DOMAIN}/el/booking-wizard`,
        "x-default": `${DOMAIN}/en-US/booking-wizard`,
      },
    },
    openGraph: { title, description, url, type: "website", locale },
    robots: { index: true, follow: true },
  };
}

export default function BookingWizardPage() {
  return <BookingWizardSection />;
}
