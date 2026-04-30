import type { Metadata } from "next";
import { DOMAIN, EMAIL } from "@/lib/data/config";

type Props = {
  params: Promise<{ locale: string }>;
};

export const revalidate = 86400;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const url = `${DOMAIN}/${locale}/privacy-policy`;
  return {
    title: "Privacy Policy",
    description:
      "How Poseidon Transfers & Tours collects, uses, and protects your personal information when you book a private transfer or tour.",
    alternates: {
      canonical: url,
      languages: {
        "en-US": `${DOMAIN}/en-US/privacy-policy`,
        el: `${DOMAIN}/el/privacy-policy`,
        "x-default": `${DOMAIN}/en-US/privacy-policy`,
      },
    },
    robots: { index: true, follow: true },
  };
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params;
  const isGreek = locale === "el";

  return (
    <main className="container mx-auto px-4 py-16 max-w-3xl">
      <article className="prose prose-invert max-w-none">
        {isGreek ? <PrivacyEl /> : <PrivacyEn />}
        <p className="text-sm text-muted-foreground mt-12">
          Last updated: January 1, 2026 · Contact:{" "}
          <a href={`mailto:${EMAIL}`} className="underline">
            {EMAIL}
          </a>
        </p>
      </article>
    </main>
  );
}

function PrivacyEn() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p>
        Poseidon Transfers &amp; Tours (&ldquo;we&rdquo;, &ldquo;us&rdquo;) operates the website
        poseidontransfer.com and provides private transfer and tour services in Greece. This
        Privacy Policy explains what personal information we collect, how we use it, and the rights
        you have over it.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Booking details:</strong> name, email, phone number, hotel or pickup address,
          flight or cruise details, number of passengers, vehicle preference, and special requests.
        </li>
        <li>
          <strong>Payment information:</strong> handled by our payment processor; we do not store
          full card numbers on our servers.
        </li>
        <li>
          <strong>Communications:</strong> messages you send via our contact form, WhatsApp, email,
          or phone, plus any follow-up correspondence.
        </li>
        <li>
          <strong>Website analytics:</strong> anonymized data such as pages visited, device type,
          and approximate location, collected via Vercel Analytics and Google Ads conversion
          tracking.
        </li>
      </ul>

      <h2>How we use your data</h2>
      <ul>
        <li>To confirm, schedule, and operate your booking.</li>
        <li>To contact you about your reservation, including changes or cancellations.</li>
        <li>To process payment and issue receipts or invoices on request.</li>
        <li>To improve our services and website.</li>
        <li>
          To comply with Greek and EU legal obligations (tax records, accounting, dispute
          resolution).
        </li>
      </ul>

      <h2>Sharing your data</h2>
      <p>
        We do not sell your personal information. We share booking details only with the assigned
        driver and, where applicable, with payment processors and accounting providers. We may
        share data with authorities when legally required.
      </p>

      <h2>Data retention</h2>
      <p>
        Booking and payment records are kept for up to 10 years to comply with Greek tax law.
        Marketing-related contact data is kept until you ask us to remove it.
      </p>

      <h2>Your rights (GDPR)</h2>
      <p>
        Under the EU General Data Protection Regulation, you have the right to access, correct,
        delete, restrict, or object to the processing of your data, and to data portability. To
        exercise these rights, email{" "}
        <a href={`mailto:${EMAIL}`} className="underline">
          {EMAIL}
        </a>
        . You can also lodge a complaint with the Hellenic Data Protection Authority
        (dpa.gr).
      </p>

      <h2>Cookies and tracking</h2>
      <p>
        We use minimal first-party cookies for language preference and basic site functionality, and
        third-party scripts (Google Ads, Vercel Analytics) to measure traffic and ad performance.
        You can disable these via your browser settings.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the
        bottom reflects the latest version.
      </p>
    </>
  );
}

function PrivacyEl() {
  return (
    <>
      <h1>Πολιτική Απορρήτου</h1>
      <p>
        Η Poseidon Transfers &amp; Tours λειτουργεί τον ιστότοπο poseidontransfer.com και παρέχει
        υπηρεσίες ιδιωτικής μεταφοράς και περιηγήσεων στην Ελλάδα. Η παρούσα Πολιτική Απορρήτου
        εξηγεί ποια προσωπικά δεδομένα συλλέγουμε, πώς τα χρησιμοποιούμε και ποια είναι τα
        δικαιώματά σας.
      </p>

      <h2>Τι συλλέγουμε</h2>
      <ul>
        <li>
          <strong>Στοιχεία κράτησης:</strong> ονοματεπώνυμο, email, τηλέφωνο, διεύθυνση παραλαβής,
          στοιχεία πτήσης ή κρουαζιέρας, αριθμός επιβατών, προτίμηση οχήματος, ειδικά αιτήματα.
        </li>
        <li>
          <strong>Πληροφορίες πληρωμής:</strong> διεκπεραιώνονται από τον πάροχο πληρωμών μας· δεν
          αποθηκεύουμε πλήρεις αριθμούς καρτών.
        </li>
        <li>
          <strong>Επικοινωνίες:</strong> μηνύματα μέσω της φόρμας επικοινωνίας, WhatsApp, email ή
          τηλεφώνου.
        </li>
        <li>
          <strong>Στατιστικά ιστοτόπου:</strong> ανώνυμα δεδομένα όπως σελίδες που επισκέπτεστε,
          τύπος συσκευής, κατά προσέγγιση τοποθεσία.
        </li>
      </ul>

      <h2>Πώς χρησιμοποιούμε τα δεδομένα σας</h2>
      <ul>
        <li>Για την επιβεβαίωση και διεκπεραίωση της κράτησής σας.</li>
        <li>Για επικοινωνία σχετικά με αλλαγές ή ακυρώσεις.</li>
        <li>Για την επεξεργασία πληρωμών και έκδοση παραστατικών.</li>
        <li>Για βελτίωση των υπηρεσιών και του ιστοτόπου.</li>
        <li>Για συμμόρφωση με ελληνικές και ευρωπαϊκές νομικές υποχρεώσεις.</li>
      </ul>

      <h2>Κοινοποίηση δεδομένων</h2>
      <p>
        Δεν πουλάμε τα προσωπικά σας δεδομένα. Τα μοιραζόμαστε μόνο με τον οδηγό που έχει
        αναλάβει την αποστολή και, όπου χρειάζεται, με τους παρόχους πληρωμών και λογιστικής. Όπου
        απαιτείται από τον νόμο, με τις αρχές.
      </p>

      <h2>Διατήρηση δεδομένων</h2>
      <p>
        Στοιχεία κρατήσεων και πληρωμών διατηρούνται έως 10 έτη για συμμόρφωση με την ελληνική
        φορολογική νομοθεσία.
      </p>

      <h2>Δικαιώματά σας (GDPR)</h2>
      <p>
        Έχετε δικαίωμα πρόσβασης, διόρθωσης, διαγραφής, περιορισμού, εναντίωσης και φορητότητας. Για
        να ασκήσετε τα δικαιώματά σας στείλτε email στο{" "}
        <a href={`mailto:${EMAIL}`} className="underline">
          {EMAIL}
        </a>
        . Μπορείτε επίσης να υποβάλετε καταγγελία στην Αρχή Προστασίας Δεδομένων Προσωπικού
        Χαρακτήρα (dpa.gr).
      </p>

      <h2>Cookies</h2>
      <p>
        Χρησιμοποιούμε ελάχιστα cookies πρώτου μέρους για τη γλώσσα και τη βασική λειτουργία του
        ιστοτόπου, και scripts τρίτων (Google Ads, Vercel Analytics) για μέτρηση κίνησης. Μπορείτε
        να τα απενεργοποιήσετε από τις ρυθμίσεις του browser σας.
      </p>

      <h2>Αλλαγές</h2>
      <p>
        Η παρούσα πολιτική ενδέχεται να ενημερωθεί. Η ημερομηνία στο τέλος αντικατοπτρίζει την
        τελευταία έκδοση.
      </p>
    </>
  );
}
