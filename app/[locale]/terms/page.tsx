import type { Metadata } from "next";
import { DOMAIN, EMAIL, PHONE_NUMBER } from "@/lib/data/config";

type Props = {
  params: Promise<{ locale: string }>;
};

export const revalidate = 86400;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const url = `${DOMAIN}/${locale}/terms`;
  return {
    title: "Terms & Conditions",
    description:
      "Booking terms, cancellation policy, and conditions of service for Poseidon Transfers & Tours private transfers and tours in Greece.",
    alternates: {
      canonical: url,
      languages: {
        "en-US": `${DOMAIN}/en-US/terms`,
        el: `${DOMAIN}/el/terms`,
        "x-default": `${DOMAIN}/en-US/terms`,
      },
    },
    robots: { index: true, follow: true },
  };
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  const isGreek = locale === "el";

  return (
    <main className="container mx-auto px-4 py-16 max-w-3xl">
      <article className="prose prose-invert max-w-none">
        {isGreek ? <TermsEl /> : <TermsEn />}
        <p className="text-sm text-muted-foreground mt-12">
          Last updated: January 1, 2026 · Contact:{" "}
          <a href={`mailto:${EMAIL}`} className="underline">
            {EMAIL}
          </a>{" "}
          · {PHONE_NUMBER}
        </p>
      </article>
    </main>
  );
}

function TermsEn() {
  return (
    <>
      <h1>Terms &amp; Conditions</h1>
      <p>
        These terms govern bookings made with Poseidon Transfers &amp; Tours (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;) for private transfers and tours in Greece. By making a booking you accept
        these terms.
      </p>

      <h2>Booking and confirmation</h2>
      <p>
        Bookings are submitted via our website, email, phone, or WhatsApp and are confirmed in
        writing. A booking is binding only after we send a written confirmation. We reserve the
        right to decline bookings.
      </p>

      <h2>Pricing and payment</h2>
      <ul>
        <li>Prices are quoted in EUR. USD prices shown on the site are indicative.</li>
        <li>Quoted prices include the vehicle, professional driver, fuel, tolls, and applicable taxes.</li>
        <li>
          Site entrance fees, food, optional licensed guides, and gratuities are not included unless
          explicitly stated.
        </li>
        <li>
          Payment is accepted in cash (EUR or USD) or by major credit card (Visa, Mastercard,
          American Express) at the end of the service unless otherwise agreed in writing.
        </li>
      </ul>

      <h2>Cancellation policy</h2>
      <ul>
        <li>
          <strong>Free cancellation</strong> up to 24 hours before pickup time — full refund of any
          deposit paid.
        </li>
        <li>
          Cancellations within 24 hours of pickup may be charged up to 50% of the booked price.
        </li>
        <li>
          No-shows (failure to appear at the agreed pickup point and time without notice) may be
          charged 100%.
        </li>
        <li>
          We may cancel for force majeure events (severe weather, strikes, civil unrest, road
          closures) and will offer a full refund or rescheduling.
        </li>
      </ul>

      <h2>Pickup, delays, and missed flights</h2>
      <p>
        For airport and cruise port transfers, we monitor flight and ship arrivals where possible
        and provide complimentary waiting time of 60 minutes after airport arrival or scheduled ship
        disembarkation. Significant delays beyond this may incur additional charges. If you miss a
        confirmed pickup without prior notice, the booking may be treated as a no-show.
      </p>

      <h2>Vehicle and driver</h2>
      <p>
        We reserve the right to substitute the assigned vehicle for one of equivalent or higher
        category. All drivers are licensed, English-speaking, and trained on the routes covered by
        the booking.
      </p>

      <h2>Passenger conduct and liability</h2>
      <p>
        Passengers must wear seatbelts, refrain from smoking inside the vehicle, and treat the
        vehicle and driver with respect. We may terminate a service in case of unsafe or abusive
        behavior; no refund will be provided in such cases. Passengers are liable for damage caused
        to the vehicle.
      </p>

      <h2>Insurance</h2>
      <p>
        Our vehicles are fully insured for passenger liability under Greek law. We strongly
        recommend that you maintain your own travel insurance.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        We are not liable for delays caused by traffic, weather, road closures, public works,
        strikes, force majeure, or events outside our reasonable control. Our maximum liability for
        any claim related to a booking is limited to the price paid for that booking.
      </p>

      <h2>Governing law and jurisdiction</h2>
      <p>
        These terms are governed by the laws of Greece. Any dispute shall be subject to the
        exclusive jurisdiction of the courts of Athens, Greece.
      </p>

      <h2>Contact</h2>
      <p>
        For questions about these terms or about your booking, contact us at{" "}
        <a href={`mailto:${EMAIL}`} className="underline">
          {EMAIL}
        </a>{" "}
        or {PHONE_NUMBER}.
      </p>
    </>
  );
}

function TermsEl() {
  return (
    <>
      <h1>Όροι &amp; Προϋποθέσεις</h1>
      <p>
        Οι παρόντες όροι διέπουν τις κρατήσεις που γίνονται με την Poseidon Transfers &amp; Tours
        για ιδιωτικές μεταφορές και περιηγήσεις στην Ελλάδα. Με την κράτηση αποδέχεστε τους
        όρους αυτούς.
      </p>

      <h2>Κράτηση και επιβεβαίωση</h2>
      <p>
        Οι κρατήσεις γίνονται μέσω ιστοτόπου, email, τηλεφώνου ή WhatsApp και επιβεβαιώνονται
        γραπτώς. Η κράτηση δεσμεύει μόνο μετά την έγγραφη επιβεβαίωση από εμάς.
      </p>

      <h2>Τιμές και πληρωμή</h2>
      <ul>
        <li>Οι τιμές αναγράφονται σε EUR. Οι τιμές σε USD είναι ενδεικτικές.</li>
        <li>
          Περιλαμβάνουν όχημα, επαγγελματία οδηγό, καύσιμα, διόδια και ισχύοντες φόρους.
        </li>
        <li>
          Δεν περιλαμβάνονται εισιτήρια αρχαιολογικών χώρων, φαγητό, αδειοδοτημένος ξεναγός και
          φιλοδωρήματα, εκτός αν αναφέρεται ρητά.
        </li>
        <li>
          Δεκτή πληρωμή σε μετρητά (EUR ή USD) ή κάρτα (Visa, Mastercard, Amex) στο τέλος της
          υπηρεσίας, εκτός αν συμφωνηθεί διαφορετικά γραπτώς.
        </li>
      </ul>

      <h2>Πολιτική ακύρωσης</h2>
      <ul>
        <li>
          <strong>Δωρεάν ακύρωση</strong> έως 24 ώρες πριν την ώρα παραλαβής — πλήρης επιστροφή
          τυχόν προκαταβολής.
        </li>
        <li>Ακυρώσεις εντός 24 ωρών ενδέχεται να χρεωθούν έως 50%.</li>
        <li>
          Μη εμφάνιση (no-show) στο συμφωνημένο σημείο και ώρα παραλαβής χωρίς προηγούμενη
          ειδοποίηση μπορεί να χρεωθεί 100%.
        </li>
        <li>
          Διατηρούμε το δικαίωμα ακύρωσης λόγω ανωτέρας βίας (ακραία καιρικά φαινόμενα, απεργίες,
          κλπ.) με πλήρη επιστροφή ή επαναπρογραμματισμό.
        </li>
      </ul>

      <h2>Παραλαβή, καθυστερήσεις, χαμένες πτήσεις</h2>
      <p>
        Για μεταφορές από αεροδρόμιο ή λιμάνι, παρακολουθούμε τις αφίξεις πτήσεων και πλοίων όπου
        είναι δυνατόν και παρέχουμε δωρεάν αναμονή 60 λεπτών. Σημαντικές καθυστερήσεις πέραν αυτού
        μπορεί να συνεπάγονται πρόσθετη χρέωση.
      </p>

      <h2>Όχημα και οδηγός</h2>
      <p>
        Διατηρούμε το δικαίωμα αντικατάστασης του οχήματος με ισοδύναμη ή ανώτερη κατηγορία. Όλοι
        οι οδηγοί είναι αδειούχοι και αγγλόφωνοι.
      </p>

      <h2>Συμπεριφορά επιβατών και ευθύνη</h2>
      <p>
        Οι επιβάτες οφείλουν να φορούν ζώνη ασφαλείας, να μην καπνίζουν εντός οχήματος και να
        συμπεριφέρονται με σεβασμό. Δικαιούμαστε να διακόψουμε την υπηρεσία σε περίπτωση επικίνδυνης
        ή προσβλητικής συμπεριφοράς χωρίς επιστροφή χρημάτων. Οι επιβάτες είναι υπεύθυνοι για
        ζημιές στο όχημα.
      </p>

      <h2>Ασφάλιση</h2>
      <p>
        Τα οχήματά μας είναι πλήρως ασφαλισμένα για ευθύνη επιβατών σύμφωνα με την ελληνική
        νομοθεσία. Συνιστούμε να διατηρείτε τη δική σας ταξιδιωτική ασφάλιση.
      </p>

      <h2>Περιορισμός ευθύνης</h2>
      <p>
        Δεν ευθυνόμαστε για καθυστερήσεις λόγω κυκλοφορίας, καιρού, οδικών έργων, απεργιών ή
        ανωτέρας βίας. Η μέγιστη ευθύνη μας περιορίζεται στο τίμημα της συγκεκριμένης κράτησης.
      </p>

      <h2>Εφαρμοστέο δίκαιο</h2>
      <p>
        Οι παρόντες όροι διέπονται από το ελληνικό δίκαιο. Αρμόδια είναι αποκλειστικά τα δικαστήρια
        των Αθηνών.
      </p>

      <h2>Επικοινωνία</h2>
      <p>
        Για ερωτήσεις:{" "}
        <a href={`mailto:${EMAIL}`} className="underline">
          {EMAIL}
        </a>{" "}
        · {PHONE_NUMBER}.
      </p>
    </>
  );
}
