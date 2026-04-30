export interface ItineraryStep {
  time: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TourConfig {
  id: string;
  slug: string;
  image: string;
  cost: string;
  costUSD?: string;
  hours: number;
  title: string;
  subtitle: string;
  description: string[];
  highlights?: string[];
  includes?: string[];
  notIncluded?: string[];
  metaDescription?: string;
  meetingPoint?: string;
  cancellationPolicy?: string;
  languages?: string[];
  groupSize?: string;
  itinerary?: ItineraryStep[];
  faq?: FAQItem[];
}

export const tours: TourConfig[] = [
  {
    id: "poseidon-temple",
    slug: "poseidon-temple-sounio",
    image: "/images/tours/poseidon_haven.jpg",
    cost: "399",
    costUSD: "429",
    hours: 5,
    title: "Temple of Poseidon Sunset Tour",
    subtitle: "Private Day Tour from Athens to Cape Sounion with Panoramic Aegean Sunset Views",
    metaDescription:
      "Private Temple of Poseidon day tour from Athens. 5-hour luxury Mercedes ride along the Athens Riviera to Cape Sounion with sunset over the Aegean. Hotel pickup, English-speaking driver. From $429.",
    meetingPoint:
      "Hotel, Airbnb, or short-term rental anywhere in central Athens, the Athens Riviera (Glyfada to Vouliagmeni), or Piraeus cruise port. Pickup is included at no extra cost.",
    cancellationPolicy: "Free cancellation up to 24 hours before pickup time. 100% refund, no questions asked.",
    languages: ["English"],
    groupSize: "Private — up to 7 guests in a single vehicle (Mercedes E-Class, V-Class or Vito).",
    description: [
      "Stand where the ancient Greeks honored the god of the sea — and watch the sun drop into the Aegean from one of the most photographed temples in the world. This private 5-hour day tour from Athens to the Temple of Poseidon at Cape Sounion is built around timing: we leave your hotel in the late afternoon, drive the scenic Athens Riviera coastal road, and arrive at the temple roughly 90 minutes before sunset so you have time to walk the site, take photos, and find a quiet spot on the cliffs before the light show begins.",
      "Built in 444 BC during the Golden Age of Athens, the Temple of Poseidon sits 60 meters (about 200 feet) above the Aegean on the southernmost tip of mainland Attica. Sailors approaching Athens used it as a landmark for over two thousand years. Lord Byron carved his name into one of the columns in 1810 — you can still find it. The 16 surviving Doric columns are made of local Agrilesa marble, which gives the temple a distinctive white-gold glow at sunset that is impossible to capture anywhere else.",
      "Your driver is a licensed, English-speaking local who has done this drive hundreds of times and knows exactly where to stop for the best Riviera viewpoints — Glyfada, Vouliagmeni, the swimming coves at Varkiza — and exactly when to leave the temple to avoid the post-sunset traffic back to Athens. This is a private tour: no shared van, no rigid group itinerary, no rushed audio guide. If you want to stop for a swim at Vouliagmeni Lake, eat fresh fish at a Sounio taverna, or take a few extra minutes for photos, we adjust the timing to you.",
      "This tour is the most popular sunset experience for first-time visitors to Athens, repeat travelers who want to escape the city heat, cruise passengers with a long evening in port, and couples planning proposals (we've helped with 30+). It pairs especially well with our Athens half-day tour the same day if you want to combine ancient Athens and Cape Sounion in one full-day private experience.",
    ],
    highlights: [
      "Late-afternoon departure timed precisely for sunset at the Temple of Poseidon",
      "Private luxury Mercedes vehicle — no shared van, no group of strangers",
      "Scenic 70 km drive along the Athens Riviera coastal road",
      "Optional photo stops at Glyfada, Vouliagmeni Lake, and Varkiza",
      "Free time at Cape Sounion to walk the temple grounds and watch the sunset",
      "Licensed, English-speaking professional driver",
      "Door-to-door pickup from any hotel, Airbnb, or Piraeus cruise port",
      "Flexible timing — adjust stops, photo opportunities, and dinner plans on the fly",
    ],
    includes: [
      "Private luxury Mercedes vehicle (E-Class, V-Class, or Vito) with English-speaking driver",
      "Hotel, Airbnb, or cruise port pickup and drop-off in greater Athens",
      "Complimentary bottled water and refreshments",
      "Free Wi-Fi onboard",
      "All road tolls, parking, and taxes",
      "Flexible itinerary — choose your stops along the Athens Riviera",
    ],
    notIncluded: [
      "Temple of Poseidon archaeological site entrance fee (currently €10 / approx. $11 per adult, free for under-18s)",
      "Food and drinks at restaurants or tavernas",
      "Licensed archaeological guide at the site (available on request — please ask when booking)",
      "Gratuities (optional, at your discretion)",
    ],
    itinerary: [
      {
        time: "2:00 PM",
        title: "Pickup at your hotel, Airbnb, or cruise port",
        description:
          "Your driver meets you at your accommodation in a luxury Mercedes. We confirm pickup time the night before based on the exact sunset time for that day (sunset varies from 5:15 PM in winter to 8:50 PM in summer).",
      },
      {
        time: "2:30 PM",
        title: "Athens Riviera coastal drive",
        description:
          "Head south through the seaside neighborhoods of Glyfada, Voula, and Vouliagmeni. Optional photo stop at Vouliagmeni Lake — a year-round 22°C natural thermal lake.",
      },
      {
        time: "3:30 PM",
        title: "Optional taverna stop in Anavyssos or Lavrio",
        description:
          "If you'd like an early dinner before the temple, we can stop at a fresh-fish taverna by the water. Allow 60–75 minutes; we'll adjust the rest of the timing.",
      },
      {
        time: "4:30 PM",
        title: "Arrival at Cape Sounion",
        description:
          "Park at the temple lot. Pay the €10 entrance fee at the gate. Walk up to the temple — about 5 minutes from the car park. You have roughly 90 minutes before sunset.",
      },
      {
        time: "Sunset",
        title: "Sunset viewing at the Temple of Poseidon",
        description:
          "Find a spot on the cliffs facing west. The 16 Doric columns turn from white to gold to deep amber as the sun drops behind the Aegean islands. This is when the photos happen.",
      },
      {
        time: "Sunset + 30 min",
        title: "Return drive to Athens",
        description:
          "We leave shortly after sunset to beat the post-sunset traffic. Drop-off back at your hotel, Airbnb, or cruise port. Total tour time: roughly 5 hours from pickup to drop-off.",
      },
    ],
    faq: [
      {
        question: "What time exactly does the tour start?",
        answer:
          "Pickup time is calculated backward from sunset on your chosen date. We aim to arrive at the temple about 90 minutes before sunset so you have time to walk the site and find a viewing spot. In summer (June–August) that means a 5:00–6:00 PM pickup; in winter (December–February) a 1:30–2:30 PM pickup. We confirm exact timing the night before.",
      },
      {
        question: "Is the Temple of Poseidon entrance fee included?",
        answer:
          "No — the archaeological site entrance fee (€10 per adult, free for under-18s, half price for EU students/seniors) is paid directly at the gate. We don't mark this up. Hours: open 9:30 AM until sunset, year-round.",
      },
      {
        question: "Do you provide a licensed archaeological guide at the temple?",
        answer:
          "Your driver provides historical commentary during the drive, but is not a licensed Greek archaeological guide (a separate state license required to actively guide inside protected sites). If you'd like a licensed guide for an in-depth on-site tour, we partner with several and can add one to your booking — please ask when reserving. Otherwise the temple is self-guided with informational signage in English.",
      },
      {
        question: "What if it rains or the sky is overcast for sunset?",
        answer:
          "Cape Sounion is impressive in any weather — the cliffs, the temple, and the open Aegean view do not depend on a clear sky. That said, if the forecast is heavy rain we'll contact you the day before and offer to reschedule for free or convert to one of our other tours. Light rain or partial clouds we go ahead with — clouds often make the most dramatic sunset photos.",
      },
      {
        question: "We're on a cruise stopping at Piraeus. Can you pick us up at the port?",
        answer:
          "Yes — cruise port pickup and drop-off is included at no extra charge. We need your ship name, dock, and all-aboard time. We'll have you back at the gangway with at least 60 minutes to spare. Many of our customers are cruise passengers from Royal Caribbean, Norwegian, MSC, Celebrity, and Viking sailings.",
      },
      {
        question: "Can you accommodate a marriage proposal at sunset?",
        answer:
          "Yes — we've helped with over 30 proposals at the temple. We can recommend the best viewing spot, time the arrival precisely, and have the driver discreetly photograph or film the moment if you'd like. There is no extra charge — please mention it when booking so we can plan timing carefully.",
      },
      {
        question: "Is the temple area accessible for guests with limited mobility?",
        answer:
          "Partially. The walk from the car park to the temple platform is about 5 minutes on a paved path with a moderate uphill grade. The viewing area near the columns has uneven ancient stone. There is a wheelchair-accessible viewpoint slightly below the temple with an excellent view. Please let us know your needs when booking and we'll help plan the visit.",
      },
      {
        question: "Are kids okay on this tour?",
        answer:
          "Yes — the tour is family-friendly and we have car seats for infants and toddlers (please request when booking). Most kids enjoy the temple, the cliffs, and the sunset; the 5-hour duration with a coastal drive and optional dinner stop tends to work well for ages 5+.",
      },
      {
        question: "Can we combine this with a half-day Athens city tour the same day?",
        answer:
          "Absolutely — this is one of our most popular combinations. Athens half-day in the morning (Acropolis, Plaka, Panathenaic Stadium), lunch break, then Cape Sounion sunset in the afternoon. Total is about 9–10 hours. We offer it as a single full-day private tour — see our Athens & Poseidon Temple Tour for details.",
      },
      {
        question: "How and when do I pay? Is there a deposit?",
        answer:
          "We hold the booking with no deposit and confirm by email/WhatsApp. Payment is in cash (EUR) or by card at the end of the tour. Free cancellation up to 24 hours before pickup — full refund, no questions asked.",
      },
      {
        question: "Do you accept US dollars or only euros?",
        answer:
          "We accept euros (preferred), US dollars (cash), and major credit cards (Visa, Mastercard, Amex). Card payments are processed in EUR and your bank handles the conversion at their daily rate.",
      },
      {
        question: "How is this different from the cheaper bus tours to Sounion?",
        answer:
          "Group bus tours from Athens typically cost $40–60 per person but pack 30–50 strangers into a coach, follow a fixed schedule, give you 30–40 minutes at the temple, and return on a fixed schedule regardless of sunset timing. Our tour is private — just you, your driver, and a luxury vehicle. We time arrival precisely for sunset, give you as long as you want at the temple, and adjust the route to your preferences. The price reflects the private, premium service.",
      },
    ],
  },

  {
    id: "mycenae-nafplio-epidaurus",
    slug: "mycenae-nafplio-epidaurus",
    image: "/images/tours/nafplio_nouveau.jpg",
    cost: "650",
    costUSD: "699",
    hours: 9,
    title: "Mycenae, Nafplio & Epidaurus Tour",
    subtitle: "Private Full-Day Tour from Athens to Three UNESCO Sites in the Argolis",
    metaDescription:
      "Private full-day tour from Athens to Mycenae, Nafplio, and Epidaurus. Three UNESCO sites, luxury Mercedes, English-speaking driver, hotel pickup. From $699.",
    meetingPoint:
      "Hotel, Airbnb, or short-term rental anywhere in Athens, the Athens Riviera, or Piraeus cruise port. Pickup is included.",
    cancellationPolicy: "Free cancellation up to 24 hours before pickup. 100% refund.",
    languages: ["English"],
    groupSize: "Private — up to 7 guests in a single luxury Mercedes vehicle.",
    description: [
      "This is the classic Peloponnese day trip from Athens — three of the most important sites in Greek history packed into one well-paced 9-hour private tour. We cross the Corinth Canal (with a quick photo stop), visit the Bronze Age citadel of Mycenae where Homer set the Trojan War, have lunch in the elegant Venetian-Greek seaside town of Nafplio, and end at the perfectly preserved 4th-century BC theater of Epidaurus where the acoustics are still astonishing 2,400 years later. All in a private luxury Mercedes with an English-speaking driver and door-to-door pickup.",
      "Mycenae was the seat of King Agamemnon and the dominant Mycenaean civilization (1600–1100 BC) — the people who fought the Trojan War in Homer's Iliad. The site sits on a low hill in the Argolid plain, defended by 6-meter-thick Cyclopean walls so massive that later Greeks believed only the giant Cyclopes could have built them. The famous Lion Gate at the entrance is the oldest monumental sculpture in Europe (around 1250 BC). Inside the citadel you'll see Grave Circle A where Heinrich Schliemann unearthed gold death masks (now in the Athens National Archaeological Museum). The Treasury of Atreus, a beehive tomb 14 meters tall and built without mortar, is just down the hill — its dome was the largest in the world for over 1,400 years until the Pantheon in Rome.",
      "Nafplio is the perfect lunch stop — Greece's first modern capital after independence in 1828, with a narrow neoclassical old town squeezed between the sea and three Venetian fortresses. The Palamidi citadel looms 216 meters above the town with 999 famous steps to the top (don't worry, we drive up). The waterfront promenade has fresh seafood tavernas with views of Bourtzi, the small fortified island in the bay. Most US travelers spend an extra day or two in Nafplio if they have it — it's regularly voted the most beautiful small town in Greece.",
      "Epidaurus is the most acoustically perfect ancient theater in the world. Built in the 4th century BC and still in use today for the annual Athens Epidaurus Festival, the 14,000-seat theater has acoustics so precise that a coin dropped in the orchestra circle can be heard from the back row. The site was originally part of the Sanctuary of Asklepios, the most important healing center of antiquity — pilgrims came from across the Mediterranean to be cured. We end the day here, drive back to Athens via the coastal road, and drop you at your accommodation around 6 PM.",
    ],
    highlights: [
      "Three UNESCO World Heritage sites in one private day",
      "Photo stop at the Corinth Canal (the engineering marvel cutting the Peloponnese)",
      "Mycenae citadel — Lion Gate, Cyclopean Walls, Treasury of Atreus tholos tomb",
      "Lunch break in Nafplio — Greek seaside elegance, fresh seafood, Venetian forts",
      "Theater of Epidaurus — try the acoustics test from center stage",
      "Sanctuary of Asklepios, the ancient world's most famous healing center",
      "Same private luxury Mercedes and English-speaking driver throughout",
      "Door-to-door pickup from hotel, Airbnb, or Piraeus cruise port",
    ],
    includes: [
      "Private Mercedes vehicle with English-speaking driver for the full day",
      "Hotel, Airbnb, or cruise port pickup and drop-off",
      "Bottled water and refreshments",
      "Free Wi-Fi onboard",
      "All road tolls, parking, and taxes",
      "Flexible itinerary — adjust pace, lunch length, photo stops",
    ],
    notIncluded: [
      "Mycenae site &amp; museum entrance fee (€12 / approx. $13 per adult, free for EU under-25)",
      "Epidaurus theater entrance fee (€12 / approx. $13 per adult, free for EU under-25)",
      "Nafplio Palamidi fortress entrance (optional, €8 / $9)",
      "Lunch in Nafplio (typically $25–40 per person)",
      "Licensed archaeological guide (available on request)",
      "Gratuities (optional)",
    ],
    itinerary: [
      {
        time: "8:00 AM",
        title: "Hotel pickup",
        description:
          "Early start to maximize site time. Coffee available in the car. About 90 minutes to the Corinth Canal.",
      },
      {
        time: "9:30 AM",
        title: "Corinth Canal photo stop",
        description:
          "Quick 15-minute stop at the bridge over the canal — 90-meter walls, Aegean to the east, Ionian to the west.",
      },
      {
        time: "10:30 AM",
        title: "Mycenae archaeological site",
        description:
          "About 90 minutes onsite. Lion Gate, citadel walls, royal palace ruins, Grave Circle A, the small but excellent onsite museum, and the Treasury of Atreus beehive tomb.",
      },
      {
        time: "12:30 PM",
        title: "Drive to Nafplio",
        description: "About 35 minutes through olive groves and citrus orchards.",
      },
      {
        time: "1:00 PM",
        title: "Lunch in Nafplio",
        description:
          "90 minutes for lunch and a short walk through the Old Town. Recommended: a seafood taverna on the Akti Miaouli waterfront with view of Bourtzi castle.",
      },
      {
        time: "3:00 PM",
        title: "Drive to Epidaurus",
        description: "About 30 minutes through the eastern Peloponnese.",
      },
      {
        time: "3:30 PM",
        title: "Theater of Epidaurus &amp; Sanctuary of Asklepios",
        description:
          "About 75 minutes onsite. Test the acoustics from the orchestra circle, walk through the sanctuary, and visit the small museum.",
      },
      {
        time: "4:45 PM",
        title: "Return drive to Athens",
        description:
          "About 2 hours back via the Corinth area. Drop-off at your hotel, Airbnb, or cruise port around 6:30–7:00 PM.",
      },
    ],
    faq: [
      {
        question: "Why visit all three in one day instead of splitting up?",
        answer:
          "They're geographically clustered in the Argolis region of the Peloponnese — Mycenae and Epidaurus are 50 km apart with Nafplio in the middle. Doing them as one day trip gives you the full picture: Bronze Age (Mycenae 1600 BC), Classical Greek (Epidaurus 4th century BC), and Venetian/Modern Greek (Nafplio 17th century onward) — three distinct civilizations on one peninsula. If you have an extra day, an overnight in Nafplio is highly recommended.",
      },
      {
        question: "How are the entrance fees handled?",
        answer:
          "Mycenae is €12 (combined site + museum), Epidaurus is €12 (theater + sanctuary). Both are paid at the gate. Free for EU citizens under 25. Free admission days: March 6, April 18, May 18, last weekend of September, October 28, and the first Sunday of every month November–March.",
      },
      {
        question: "Is the acoustics test at Epidaurus really that impressive?",
        answer:
          "Yes. Stand in the orchestra circle (the round flat area at the bottom of the theater) and have someone speak normally — every word is audible from the top row, 60 meters away and 22 meters up. The Greeks figured this out in 350 BC. It's one of the genuinely magical experiences in classical Greek travel.",
      },
      {
        question: "How walkable is each site?",
        answer:
          "Mycenae has steep, uneven stone paths and steps inside the citadel — about 30 minutes of moderate walking. The Treasury of Atreus is mostly flat. Epidaurus is mostly flat with the theater itself involving stairs (you can stay at the bottom and skip climbing). Nafplio is flat through the old town. Total walking on the day: ~3 km. We recommend sturdy walking shoes.",
      },
      {
        question: "Should we add a licensed guide?",
        answer:
          "Recommended for Mycenae specifically — the site is dense with Bronze Age history that doesn't read intuitively without commentary. Licensed Mycenae guide is typically $180–260 USD for the full day covering all three sites. Epidaurus and Nafplio are easier to enjoy self-guided.",
      },
      {
        question: "What's lunch like in Nafplio?",
        answer:
          "Excellent. Fresh seafood (the town is right on the water), traditional Peloponnesian dishes, and Greek wine. Recommended tavernas: Stathmos (former train station, atmospheric), Antica Gelateria di Roma for ice cream, Aiolos for elegant Greek. Budget $25–40 per person for lunch with wine.",
      },
      {
        question: "Are there bathrooms at the sites?",
        answer:
          "Yes — Mycenae and Epidaurus both have visitor center facilities at the entrance. Nafplio has plenty of cafe and restaurant bathrooms.",
      },
      {
        question: "Is this tour okay for kids?",
        answer:
          "Best for ages 8+. The driving (about 4.5 hours total) is the limiting factor for younger kids. Mycenae's massive walls and the Lion Gate usually capture kids' imaginations; Epidaurus is fun if you do the acoustics demo. Car seats and boosters are free.",
      },
      {
        question: "When is the best season?",
        answer:
          "April–early June and September–October are ideal — wildflowers and mild weather. July–August are very hot at Mycenae (35–40°C, no shade) — start very early. Winter is fine but theater performances at Epidaurus are summer-only.",
      },
      {
        question: "Can we do this from a cruise stop at Piraeus?",
        answer:
          "Yes — but the timing is tight for cruises with all-aboard before 6 PM. We may compress lunch to 60 minutes and skip Palamidi to keep on schedule. Send us your ship name and all-aboard time.",
      },
      {
        question: "Free cancellation?",
        answer: "Yes — free cancellation up to 24 hours before pickup. Full refund.",
      },
    ],
  },
  {
    id: "athens-full-day",
    slug: "athens-full-day-tour",
    image: "/images/tours/athenian_marvels.jpg",
    cost: "499",
    costUSD: "539",
    hours: 10,
    title: "Athens & Poseidon Temple Tour",
    subtitle: "Private Full-Day Tour: Acropolis, Plaka, and Sunset at the Temple of Poseidon",
    metaDescription:
      "Private full-day Athens tour: Acropolis, Plaka, Panathenaic Stadium plus sunset at the Temple of Poseidon. Luxury Mercedes, English-speaking driver. From $539.",
    meetingPoint:
      "Hotel, Airbnb, or short-term rental anywhere in central Athens, the Athens Riviera, or Piraeus cruise port. Pickup is included.",
    cancellationPolicy: "Free cancellation up to 24 hours before pickup. 100% refund.",
    languages: ["English"],
    groupSize: "Private — up to 7 guests in a single luxury Mercedes vehicle.",
    description: [
      "If you have one full day in Athens — say, a single shore day on a cruise, a free day before a flight to the islands, or your only day in Greece — this is the tour we recommend. It combines our two most popular experiences: the Athens half-day city tour in the morning, and the Cape Sounion sunset tour in the late afternoon, all in one private luxury Mercedes with the same English-speaking driver from start to finish. About 10 hours, door-to-door.",
      "We start early at the Acropolis to beat the cruise crowds. You'll have 75–90 minutes onsite to walk through the Propylaea, the Parthenon, the Erechtheion with its Caryatid porch, and the Temple of Athena Nike. From there we drive past the Temple of Olympian Zeus and Hadrian's Arch, into Plaka for a coffee and a walk through the old neighborhood, then on to the Panathenaic Stadium and the Changing of the Guard at the Parliament Building. Lunch is up to you — your driver will recommend tavernas in Plaka or Monastiraki for traditional Greek food, or seafood spots in Piraeus and Glyfada if you prefer.",
      "After lunch we head south along the Athens Riviera coastal road — the scenic route through the seaside neighborhoods of Glyfada, Voula, and Vouliagmeni, with optional photo stops at the swimming coves of Varkiza and the year-round 22°C natural thermal lake at Vouliagmeni. The drive to Cape Sounion takes about 75 minutes and is timed to put you at the temple roughly 90 minutes before sunset.",
      "The day ends at the Temple of Poseidon — 16 surviving Doric columns built in 444 BC, 60 meters above the Aegean Sea. You'll have time to walk the temple grounds, take photos, and find a viewing spot on the cliffs before the sun drops behind the Aegean islands. After sunset we drive back to Athens for dinner, drop you at your hotel, Airbnb, or cruise port. This is the single best full-day private tour from Athens for first-time visitors and cruise passengers with 9–10 hours ashore.",
    ],
    highlights: [
      "Two private tours in one — Athens city + Cape Sounion sunset",
      "Same driver, same luxury Mercedes for the full 10 hours",
      "Acropolis &amp; Parthenon (early start to beat cruise crowds)",
      "Plaka old neighborhood, Panathenaic Stadium, Changing of the Guard",
      "Lunch break at a Plaka taverna or Glyfada seafood spot (your choice)",
      "Scenic Athens Riviera coastal drive",
      "Sunset at the Temple of Poseidon at Cape Sounion",
      "Door-to-door pickup and drop-off — hotel, Airbnb, or cruise port",
    ],
    includes: [
      "Private Mercedes vehicle with English-speaking driver for the full day",
      "Hotel, Airbnb, or cruise port pickup and drop-off",
      "Bottled water and refreshments",
      "Free Wi-Fi onboard",
      "All road tolls, parking, and taxes",
      "Flexible itinerary — adjust pace, lunch stop, and Riviera detours",
    ],
    notIncluded: [
      "Acropolis entrance fee (€20 / $22 per adult, free for EU under-25s)",
      "Temple of Poseidon entrance fee (€10 / $11 per adult, free for under-18s)",
      "Lunch and dinner",
      "Licensed archaeological guide (available on request)",
      "Gratuities (optional)",
    ],
    itinerary: [
      {
        time: "8:00 AM",
        title: "Hotel pickup",
        description:
          "Early start to reach the Acropolis before the cruise tour groups. Your driver meets you at your accommodation in a luxury Mercedes.",
      },
      {
        time: "8:30 AM",
        title: "Acropolis &amp; Parthenon",
        description:
          "Drop-off at the main entrance. About 75–90 minutes onsite — Propylaea, Parthenon, Erechtheion, Temple of Athena Nike, Theatre of Dionysus.",
      },
      {
        time: "10:30 AM",
        title: "Plaka & Olympieion",
        description:
          "Drive past the Temple of Olympian Zeus and Hadrian's Arch, then 30–45 min walking time in Plaka with a coffee stop.",
      },
      {
        time: "11:30 AM",
        title: "Panathenaic Stadium &amp; Changing of the Guard",
        description:
          "Photo stop at the marble stadium of the 1896 Olympics, then to Syntagma Square for the hourly Evzone guard change.",
      },
      {
        time: "12:30 PM",
        title: "Lunch break",
        description:
          "75–90 min for lunch. Your driver will recommend tavernas — Plaka for traditional, Monastiraki for souvlaki, Glyfada or Vouliagmeni for seafood with a sea view.",
      },
      {
        time: "2:00 PM",
        title: "Athens Riviera coastal drive",
        description:
          "Head south through Glyfada, Voula, Vouliagmeni — optional photo stop at Vouliagmeni Lake, the year-round natural thermal lake.",
      },
      {
        time: "4:30 PM",
        title: "Arrival at Cape Sounion",
        description:
          "Park at the temple. Pay the €10 entrance fee. About 90 minutes before sunset — time to walk the site and find a viewing spot.",
      },
      {
        time: "Sunset",
        title: "Sunset at the Temple of Poseidon",
        description:
          "16 Doric columns turn from white to gold to amber as the sun drops behind the Aegean islands. The photo of the trip.",
      },
      {
        time: "Sunset + 30 min",
        title: "Return drive to Athens",
        description:
          "Back to Athens via the coastal road. Drop-off at your hotel, Airbnb, or cruise port. Total: ~10 hours.",
      },
    ],
    faq: [
      {
        question: "Is this realistically doable in one day from a cruise ship?",
        answer:
          "Yes — this is one of our most popular cruise itineraries. Most ships dock at Piraeus by 7:00 AM with all-aboard at 6:00–8:00 PM. We start at 8:00 AM and have you back at the gangway by all-aboard with at least 60 minutes of buffer. Sunset timing varies (5:15 PM in winter to 8:50 PM in summer) — for late-summer cruises we may shift the order, doing Sounion first and Athens after, depending on your ship's schedule.",
      },
      {
        question: "What if our flight is in the evening — can we do this and still make it?",
        answer:
          "If your flight is after 10:00 PM and you're flying out of Athens International (ATH), yes. We'll structure pickup time around your departure and end at the airport instead of your hotel. For earlier flights, the Athens half-day tour alone is a safer option.",
      },
      {
        question: "How long do we get at each site?",
        answer:
          "Roughly: Acropolis 75–90 min, Plaka 30–45 min, Panathenaic Stadium 10 min photo stop, Changing of the Guard 5 min, lunch 75–90 min, Sounion 90+ min including sunset. Times are flexible — if you want longer at one site, we shorten another.",
      },
      {
        question: "Can we skip lunch and add another site?",
        answer:
          "Sure — common additions are the Acropolis Museum (45–60 min, +€15 entrance), Lycabettus Hill (panoramic view, +20 min), or extra time at Vouliagmeni Lake. Just tell your driver in the morning.",
      },
      {
        question: "Will the Acropolis be too crowded?",
        answer:
          "By starting at 8:30 AM you'll have the temples to yourself for the first hour. Cruise tour groups typically arrive between 10:30 AM and 12:30 PM. The walk from the Propylaea to the Parthenon takes about 15 min — you can get clear photos before the crowds arrive.",
      },
      {
        question: "Is this too much for kids?",
        answer:
          "Depends on age. Ages 8+ usually handle it well. Younger kids (under 6) may struggle with the 10-hour duration plus 90 min of walking at the Acropolis. We recommend the half-day for families with very young children. Car seats and boosters are free.",
      },
      {
        question: "What's the price per person?",
        answer:
          "The price is per vehicle, not per person. From $539 USD covers the entire tour for up to 7 guests in one Mercedes V-Class. For two travelers that's $269.50 each; for a family of four, $135 each — comparable to or cheaper than group bus tours, with a private driver and luxury vehicle.",
      },
      {
        question: "Free cancellation?",
        answer: "Yes — free cancellation up to 24 hours before pickup. Full refund.",
      },
      {
        question: "Do you accept US dollars?",
        answer:
          "Yes — US dollars in cash, euros, and Visa / Mastercard / Amex. Card payments are processed in EUR.",
      },
      {
        question: "Can we book a licensed Acropolis guide as an add-on?",
        answer:
          "Yes — for $130–180 USD we can add a state-licensed archaeological guide for the Acropolis section. Highly recommended if you want detailed historical commentary onsite. Booked separately from the driver.",
      },
    ],
  },
  {
    id: "athens-half-day",
    slug: "athens-half-day-tour",
    image: "/images/tours/athens_unveiled.jpg",
    cost: "299",
    costUSD: "319",
    hours: 4,
    title: "Athens Half-Day Tour",
    subtitle: "Private 4-Hour Tour of the Acropolis, Plaka, and Athens City Highlights",
    metaDescription:
      "Private 4-hour Athens tour covering the Acropolis, Plaka, Panathenaic Stadium, and Changing of the Guard. Luxury Mercedes, English-speaking driver. From $319.",
    meetingPoint:
      "Hotel, Airbnb, or short-term rental anywhere in central Athens, the Athens Riviera, or Piraeus cruise port. Pickup is included.",
    cancellationPolicy: "Free cancellation up to 24 hours before pickup. 100% refund.",
    languages: ["English"],
    groupSize: "Private — up to 7 guests in a single luxury Mercedes vehicle.",
    description: [
      "If you have one morning or afternoon in Athens — say, before a cruise departure, between flights, or as the start of a longer trip — this is the tour. In four hours we cover the city's most important ancient and modern sites with door-to-door pickup, an English-speaking local driver, and a private Mercedes. No bus, no group of strangers, no fixed schedule. Just the highlights of Athens, done well, at your pace.",
      "We start at the Acropolis — the rocky citadel above the city that has held a temple to Athena for over 2,500 years. Your driver will drop you at the entrance, give you a short briefing on what to see, and meet you at the exit when you're ready. The walk up the Acropolis takes roughly 60–90 minutes and includes the Parthenon, the Erechtheion with its famous Caryatid porch, the Temple of Athena Nike, and the ancient Theatre of Dionysus on the southern slope. The site is open from 8:00 AM in summer (8:30 AM in winter) and gets crowded after 10:30 AM — early pickups are strongly recommended.",
      "From the Acropolis we drive past the Temple of Olympian Zeus and Hadrian's Arch, then into Plaka, the old neighborhood at the foot of the Acropolis. Plaka is a maze of narrow stone streets, neoclassical mansions, Byzantine churches, and tavernas. We stop for 30–45 minutes so you can walk the streets, take photos, and grab a frappé at a café. Next is the Panathenaic Stadium — the marble stadium where the first modern Olympic Games were held in 1896 — and the Parliament Building on Syntagma Square, where you'll watch the hourly Changing of the Guard ceremony performed by the Evzones in their traditional uniforms.",
      "This tour is the ideal first day in Athens for first-time visitors and a perfect compressed option for cruise passengers with a 5–7 hour port stop. Many of our customers combine it with our Temple of Poseidon sunset tour the same day for a full Athens experience: city in the morning, Cape Sounion at sunset, dinner back in Plaka.",
    ],
    highlights: [
      "Private luxury Mercedes — no bus, no group of strangers",
      "Door-to-door pickup from your hotel, Airbnb, or Piraeus cruise port",
      "Acropolis and Parthenon (60–90 minutes onsite)",
      "Plaka old neighborhood — Byzantine churches, neoclassical streets, café stop",
      "Panathenaic Stadium (the original 1896 Olympic stadium)",
      "Changing of the Guard at the Parliament Building",
      "English-speaking professional driver with historical commentary",
      "Flexible — extend with a Lycabettus Hill stop, lunch, or museum visit",
    ],
    includes: [
      "Private Mercedes vehicle with English-speaking driver",
      "Hotel, Airbnb, or cruise port pickup and drop-off",
      "Bottled water and refreshments",
      "Free Wi-Fi onboard",
      "All road tolls, parking, and taxes",
    ],
    notIncluded: [
      "Acropolis archaeological site entrance fee (currently €20 / approx. $22, free for under-25 EU citizens)",
      "Acropolis Museum entrance (optional, €15 / approx. $16)",
      "Licensed archaeological guide for the Acropolis (available on request)",
      "Food and drinks",
      "Gratuities",
    ],
    itinerary: [
      {
        time: "8:30 AM",
        title: "Hotel pickup",
        description:
          "Your driver meets you at your accommodation in a luxury Mercedes. Early pickups are recommended in summer to beat the Acropolis crowds.",
      },
      {
        time: "9:00 AM",
        title: "Acropolis & Parthenon",
        description:
          "Drop-off at the main entrance. Pay the €20 entrance fee at the gate. Self-guided walk through the Propylaea, Parthenon, Erechtheion, and Temple of Athena Nike. About 75 minutes onsite.",
      },
      {
        time: "10:30 AM",
        title: "Olympieion & Hadrian's Arch (drive-by)",
        description:
          "Short drive past the columns of the Temple of Olympian Zeus and Hadrian's Arch with photo stop opportunity.",
      },
      {
        time: "10:50 AM",
        title: "Plaka old neighborhood",
        description:
          "Walking time in Plaka — narrow streets, Byzantine churches, neoclassical mansions, and a café stop. About 40 minutes.",
      },
      {
        time: "11:40 AM",
        title: "Panathenaic Stadium",
        description:
          "The marble stadium of the 1896 modern Olympics. Photo stop from the entrance (interior visit optional, €10 entrance).",
      },
      {
        time: "12:00 PM",
        title: "Changing of the Guard at Parliament",
        description:
          "Time the visit for the top of the hour to watch the Evzone honor guard change at Syntagma Square.",
      },
      {
        time: "12:30 PM",
        title: "Drop-off",
        description:
          "Return to your hotel, Airbnb, or cruise port. Total tour time: roughly 4 hours from pickup to drop-off.",
      },
    ],
    faq: [
      {
        question: "Is the Acropolis entrance fee included?",
        answer:
          "No — the €20 entrance fee is paid directly at the gate. We don't mark this up. Discounts: free for EU citizens under 25, half price (€10) for non-EU students and seniors over 65, and free admission days are March 6, April 18, May 18, last weekend of September, October 28, and the first Sunday of every month November–March.",
      },
      {
        question: "Do you provide a licensed guide for the Acropolis?",
        answer:
          "Your driver provides historical commentary in the car but is not a licensed Greek archaeological guide (a separate state license is required to actively guide inside protected sites). The Acropolis is fully self-guided with detailed multilingual signage. If you'd like an in-depth on-site archaeological guide, we partner with several licensed Athens guides and can add one to your booking — typically $130–180 USD for the Acropolis section.",
      },
      {
        question: "What time should we start to avoid the crowds?",
        answer:
          "8:00 AM in summer (June–September), 8:30 AM in spring/fall, 9:00 AM in winter. Cruise ship groups typically reach the Acropolis between 10:30 AM and 12:30 PM, so an early start gives you the temples nearly to yourself for the first hour.",
      },
      {
        question: "Can people with limited mobility do the Acropolis?",
        answer:
          "Partially. There is a wheelchair lift that takes visitors up to the top of the rock from the side, and the main path on top is paved but uneven (ancient marble). Some visitors prefer to view the Parthenon from the Acropolis Museum rooftop terrace or from Filopappou Hill instead — let us know your needs and we'll recommend the best option.",
      },
      {
        question: "Is this tour suitable for kids?",
        answer:
          "Yes — the 4-hour duration with multiple stops works well for ages 6+. We have car seats and booster seats available free of charge. The Acropolis walk involves about 30 minutes of stairs and uneven ground; strollers can be left at the entrance.",
      },
      {
        question: "We're on a cruise. Can you guarantee we're back at the ship in time?",
        answer:
          "Yes — we always plan cruise tours with at least 60 minutes of buffer before all-aboard time. Send us your ship name, dock, and all-aboard time and we'll structure the day around it. We've never had a customer miss a ship.",
      },
      {
        question: "Can we add a stop somewhere not on the standard itinerary?",
        answer:
          "Absolutely. Common additions: the Acropolis Museum (45–60 min, +€15 entrance), Lycabettus Hill (panoramic view, +20 min), the Central Market for foodies (+30 min), or extra time for shopping in Monastiraki. Just tell your driver — no extra charge as long as we stay within the 4-hour window.",
      },
      {
        question: "What's the difference between this and the Athens & Poseidon Temple full-day tour?",
        answer:
          "This 4-hour half-day covers Athens city only. The 10-hour Athens & Poseidon Temple full-day tour covers all of the same Athens sites in the morning, then continues with a coastal drive along the Athens Riviera and ends with sunset at the Temple of Poseidon at Cape Sounion. If you have a single full day in Athens and want to maximize it, the full-day combination is the better value.",
      },
      {
        question: "Do you accept US dollars?",
        answer:
          "Yes — we accept US dollars in cash, euros, and major credit cards. Card payments are processed in EUR; your bank handles the conversion at the daily rate.",
      },
      {
        question: "Free cancellation?",
        answer:
          "Yes — free cancellation up to 24 hours before pickup. Full refund of any deposit. No questions asked.",
      },
    ],
  },
  {
    id: "corinth-canal-tour",
    slug: "corinth-canal-ancient-corinth",
    image: "/images/tours/corinthian_wonders.jpg",
    cost: "700",
    costUSD: "749",
    hours: 6,
    title: "Corinth Canal & Ancient Corinth Tour",
    subtitle: "Private Half-Day Tour from Athens to the Corinth Canal, Ancient Corinth, and Loutraki",
    metaDescription:
      "Private day tour from Athens to the Corinth Canal and Ancient Corinth. 6 hours, luxury Mercedes, English-speaking driver, hotel pickup. From $749.",
    meetingPoint:
      "Hotel, Airbnb, or short-term rental anywhere in Athens, the Athens Riviera, or Piraeus cruise port. Pickup is included.",
    cancellationPolicy: "Free cancellation up to 24 hours before pickup. 100% refund.",
    languages: ["English"],
    groupSize: "Private — up to 7 guests in a single luxury Mercedes vehicle.",
    description: [
      "The Corinth Canal is one of those rare sites where the photo doesn't prepare you for the real thing. A 6.4-kilometer slot cut through solid limestone, 90 meters from rim to water — engineers proposed it in the 7th century BC (the Roman emperor Nero famously broke ground himself with a golden pickaxe in 67 AD before being assassinated), but it took until 1893 to actually finish. This 6-hour private day tour from Athens combines the modern marvel of the canal with the classical wonder of Ancient Corinth — a wealthy Greek city of 90,000 people that hosted Saint Paul, controlled trade between the Aegean and the Adriatic, and produced the Corinthian column capital that adorns Western architecture to this day.",
      "We start with a 90-minute drive from Athens to the Corinth Canal bridge — a quick photo stop on the pedestrian span where you can look straight down at the cargo ships and yachts threading through the narrowest navigable canal in the world. From there we drive 7 minutes to Ancient Corinth, the archaeological site that sits at the foot of Acrocorinth (the towering acropolis). The site features the well-preserved 6th-century BC Temple of Apollo (seven monolithic Doric columns standing intact), the Roman-era Agora and Bema (the speaker's platform where Saint Paul defended himself before the proconsul Gallio in 51 AD), the Peirene Fountain, and an excellent onsite museum with the famous Roman copy of the bronze head of Aphrodite.",
      "After the archaeological site we drive 15 minutes to Loutraki, an elegant Greek seaside town on the Corinthian Gulf famous for its mineral water (you'll see the brand in every Greek supermarket) and its long pebble beach. We stop here for lunch at a fish taverna with a view of the gulf, then return to Athens via the coastal road. Total tour time is about 6 hours — short enough for a half-day shore excursion or as the morning portion of a longer day combined with another stop. Many cruise passengers book this when their ship is in port for 8–9 hours.",
      "If you have a serious interest in classical history, we can extend the tour with a climb up Acrocorinth (45 minutes onsite, the Byzantine-Frankish-Ottoman fortress on top with sweeping views over both the Saronic and Corinthian gulfs) — let us know when booking. The Acrocorinth visit adds about 2 hours to the day.",
    ],
    highlights: [
      "The Corinth Canal — one of the great civil engineering feats of the 19th century",
      "Ancient Corinth archaeological site — Temple of Apollo, Roman Agora, Bema of Saint Paul",
      "Onsite Archaeological Museum with the famous Aphrodite bronze",
      "Optional ascent to Acrocorinth fortress (request when booking, +2 hours)",
      "Lunch in Loutraki on the Corinthian Gulf",
      "Same private luxury Mercedes and English-speaking driver throughout",
      "Door-to-door pickup from hotel, Airbnb, or Piraeus cruise port",
    ],
    includes: [
      "Private Mercedes vehicle with English-speaking driver",
      "Hotel, Airbnb, or cruise port pickup and drop-off",
      "Bottled water and refreshments",
      "Free Wi-Fi onboard",
      "All road tolls, parking, and taxes",
    ],
    notIncluded: [
      "Ancient Corinth site &amp; museum entrance fee (€8 / approx. $9 per adult, free for EU under-25)",
      "Acrocorinth fortress entrance (€2 / $2.20 if added)",
      "Lunch in Loutraki",
      "Licensed archaeological guide (available on request)",
      "Gratuities (optional)",
    ],
    itinerary: [
      {
        time: "9:00 AM",
        title: "Hotel pickup",
        description: "Departure from Athens, about 80 km drive to the Corinth Canal area.",
      },
      {
        time: "10:30 AM",
        title: "Corinth Canal photo stop",
        description:
          "15-minute stop on the pedestrian bridge over the canal. Walk to the center for the perfect photo down the slot — 90 meters straight down to the water.",
      },
      {
        time: "10:50 AM",
        title: "Drive to Ancient Corinth",
        description: "Short 7-minute drive from the canal to the archaeological site.",
      },
      {
        time: "11:00 AM",
        title: "Ancient Corinth site &amp; museum",
        description:
          "About 90 minutes onsite. Temple of Apollo, Agora, Bema, Peirene Fountain, and the small but excellent museum.",
      },
      {
        time: "12:30 PM",
        title: "Drive to Loutraki",
        description: "About 20 minutes via the coastal road.",
      },
      {
        time: "1:00 PM",
        title: "Lunch in Loutraki",
        description:
          "Seafood taverna with view of the Corinthian Gulf. About 75 minutes for a relaxed lunch.",
      },
      {
        time: "2:15 PM",
        title: "Return drive to Athens",
        description: "About 90 minutes back. Drop-off at your hotel, Airbnb, or cruise port around 3:30 PM. Total: ~6 hours.",
      },
    ],
    faq: [
      {
        question: "Why is the Corinth Canal famous?",
        answer:
          "It's the world's narrowest navigable canal — 21 meters wide at the water, with sheer 90-meter limestone walls. Cargo ships, yachts, and even cruise tenders pass through with just a couple of meters of clearance on each side. The Greeks proposed it in the 7th century BC, the Roman emperor Nero broke ground in 67 AD, and it was finally completed by a French-Hungarian-Greek consortium in 1893. It saves 700 km versus sailing around the Peloponnese.",
      },
      {
        question: "Can we do the bungee jump from the canal bridge?",
        answer:
          "Yes — Zulu Bungy operates from the canal bridge during the warmer months (typically April–October, weather permitting). Jumps are 79 meters and cost about $80–100. We can incorporate it into the tour with advance notice (about 1 extra hour). It is not included in the tour price.",
      },
      {
        question: "How important is Ancient Corinth historically?",
        answer:
          "In classical and Roman times, Corinth was one of the wealthiest cities in the Mediterranean — at its peak it had 90,000 inhabitants and controlled trade between the Aegean and the Adriatic via the diolkos (a paved road that ships were dragged across, before the canal existed). Saint Paul lived in Corinth for 18 months in the early 50s AD, founded the church here, and later wrote two long letters to the Corinthians (1 and 2 Corinthians in the New Testament). The Roman ruins you see today date mostly from the rebuilding under Julius Caesar after the city was destroyed by Rome in 146 BC.",
      },
      {
        question: "What's the entrance fee?",
        answer:
          "€8 / approx. $9 per adult for the combined Ancient Corinth site + museum. Free for EU citizens under 25, half price for non-EU students and seniors over 65. Free admission days: March 6, April 18, May 18, last weekend of September, October 28, and the first Sunday of every month November–March.",
      },
      {
        question: "Should we add the Acrocorinth fortress?",
        answer:
          "If you have time and decent walking shoes, yes. Acrocorinth is the towering rock fortress 575 meters above the ancient city, with successive layers of Byzantine, Frankish, Venetian, and Ottoman fortifications. The 360° views from the top cover both gulfs and a huge chunk of the Peloponnese. It adds about 2 hours to the tour and a moderate hike. Let us know when booking.",
      },
      {
        question: "Is this site walkable for older guests?",
        answer:
          "Yes — Ancient Corinth is largely flat with paved paths. Total walking is about 1 km on uneven ancient stone. The museum is fully accessible. The canal bridge requires a short walk to the center of the span. Acrocorinth is the only strenuous part — skip it if mobility is a concern.",
      },
      {
        question: "Is this a good shore excursion for a 1-day cruise stop?",
        answer:
          "Yes — at 6 hours total this fits comfortably in an 8–10 hour port stop. Send us your ship name, dock, and all-aboard time and we'll structure timing with at least 60 minutes of buffer.",
      },
      {
        question: "Lunch options?",
        answer:
          "Loutraki has good seafood tavernas right on the water — typical Greek mezedes, grilled fish, calamari, Greek salad. Budget $20–30 per person. Vegetarian options are easy.",
      },
      {
        question: "Free cancellation?",
        answer: "Yes — free cancellation up to 24 hours before pickup. Full refund.",
      },
    ],
  },
  {
    id: "delphi-archaeological-site",
    slug: "delphi-archaeological-site",
    image: "/images/tours/delphi_delights.jpg",
    cost: "866",
    costUSD: "929",
    hours: 8,
    title: "Delphi Tour",
    subtitle: "Private Full-Day Tour from Athens to the Oracle of Delphi and Mount Parnassus",
    metaDescription:
      "Private full-day Delphi tour from Athens. UNESCO archaeological site plus museum, 8 hours, luxury Mercedes, English-speaking driver, hotel pickup. From $929.",
    meetingPoint:
      "Hotel, Airbnb, or short-term rental anywhere in Athens, the Athens Riviera, or Piraeus cruise port. Pickup is included.",
    cancellationPolicy: "Free cancellation up to 24 hours before pickup. 100% refund.",
    languages: ["English"],
    groupSize: "Private — up to 7 guests in a single luxury Mercedes vehicle.",
    description: [
      "Delphi was, for the ancient Greeks, the literal center of the world — the place where Zeus's two eagles met after he released them from opposite ends of the earth. For nearly a thousand years it was where kings, generals, and citizens came to consult the Pythia, the priestess of Apollo who delivered the most important oracular prophecies in the Mediterranean. Every major decision in Greek history — colonization, war, alliances — passed through Delphi. Today the archaeological site sits on the dramatic southwestern slope of Mount Parnassus, 180 km northwest of Athens, with views down a valley of olive groves to the Gulf of Corinth.",
      "This is a private full-day tour — about 8 hours door-to-door — designed to give you the complete Delphi experience without the rush of a tour bus. The drive from Athens takes about 2.5 hours each way and follows a beautiful route through the cotton fields of Boeotia and the ski-resort village of Arachova on Mount Parnassus. Your driver will provide historical commentary on Greek mythology, the Battle of Thermopylae (we pass nearby), and the rise and fall of the Delphic oracle. Optional stops include the Sanctuary of Athena Pronaia (the famous round Tholos), the medieval village of Arachova, and a long lunch at a mountain taverna with views.",
      "At the site you'll walk the Sacred Way past the foundations of the treasuries — small temple-like buildings funded by the Greek city-states to display their dedications and gold offerings. The Temple of Apollo, where the Pythia delivered her prophecies above a fissure in the rock, stands halfway up the mountainside. Above that is the well-preserved 4th-century BC theater (5,000 seats) and at the very top the stadium where the Pythian Games were held every four years, second only to Olympia in importance.",
      "After the archaeological site we visit the Delphi Archaeological Museum — one of the best museums in Greece. It houses the bronze Charioteer of Delphi (one of the few surviving large-scale ancient bronzes, almost intact), the Sphinx of Naxos (a 2.3-meter marble guardian from 560 BC), the twin kouros statues of Cleobis and Biton, and the frieze of the Siphnian Treasury. Plan 60–90 minutes inside. We end with lunch in Arachova or back near Athens, depending on preference, and return by sunset.",
    ],
    highlights: [
      "Full-day private tour — about 8 hours, with same driver and Mercedes throughout",
      "Drive through the Greek countryside, the Battle of Thermopylae area, and Mount Parnassus",
      "UNESCO World Heritage archaeological site of Delphi",
      "Sanctuary of Athena Pronaia with the famous round Tholos",
      "The Delphi Archaeological Museum (Charioteer, Sphinx of Naxos, Siphnian frieze)",
      "Optional stop in the mountain village of Arachova",
      "Spectacular views of the Pleistos valley and Gulf of Corinth",
      "Long lunch at a mountain taverna or Athens Riviera seafood spot",
    ],
    includes: [
      "Private Mercedes vehicle with English-speaking driver for the full day",
      "Hotel, Airbnb, or cruise port pickup and drop-off",
      "Bottled water and refreshments",
      "Free Wi-Fi onboard",
      "All road tolls, parking, and taxes",
      "Flexible itinerary — adjust pace, lunch, museum time",
    ],
    notIncluded: [
      "Delphi archaeological site &amp; museum combined ticket (currently €13 / approx. $14 per adult, free for under-25 EU citizens)",
      "Lunch and food",
      "Licensed archaeological guide for the site (available on request — strongly recommended for Delphi)",
      "Gratuities (optional)",
    ],
    itinerary: [
      {
        time: "8:00 AM",
        title: "Hotel pickup",
        description: "Early start to maximize time onsite and beat the tour bus crowds. About 2.5 hours of driving to Delphi.",
      },
      {
        time: "9:00 AM",
        title: "Drive through Boeotia (rest stop)",
        description:
          "Coffee and snack stop along the route. Optional brief stop at the Battle of Thermopylae monument area depending on traffic.",
      },
      {
        time: "10:30 AM",
        title: "Arrival at Delphi — Sanctuary of Athena Pronaia",
        description:
          "Stop first at the Tholos and the Sanctuary of Athena Pronaia, just below the main site. Free entrance, about 20 min.",
      },
      {
        time: "11:00 AM",
        title: "Delphi archaeological site",
        description:
          "Walk the Sacred Way, treasuries, Temple of Apollo, theater, and stadium. About 90–120 min onsite. Steep uphill — wear good shoes.",
      },
      {
        time: "1:00 PM",
        title: "Delphi Archaeological Museum",
        description:
          "60–90 min inside. The Charioteer, Sphinx of Naxos, Cleobis &amp; Biton, Siphnian frieze. Air-conditioned.",
      },
      {
        time: "2:30 PM",
        title: "Lunch in Arachova or Delphi village",
        description:
          "Mountain taverna lunch — local lamb, formaela cheese, traditional dishes. About 75 min.",
      },
      {
        time: "4:00 PM",
        title: "Return drive to Athens",
        description: "Scenic drive back via Mount Parnassus. About 2.5 hours.",
      },
      {
        time: "6:30 PM",
        title: "Drop-off",
        description: "Back at your hotel, Airbnb, or cruise port. Total: ~10.5 hours (we list 8 onsite — full door-to-door is 10–11).",
      },
    ],
    faq: [
      {
        question: "Why is Delphi worth a full day?",
        answer:
          "Because there's nothing else like it. Delphi was the religious center of the Greek world for almost a millennium — kings consulted the Pythia before going to war, cities founded colonies based on her prophecies, and the Pythian Games were second only to Olympia. The site itself is on a mountain slope above an olive valley, the museum has world-class bronze and marble masterpieces, and the drive through Mount Parnassus is genuinely beautiful. It's the most important archaeological site in Greece outside Athens.",
      },
      {
        question: "Should we add a licensed archaeological guide?",
        answer:
          "Strongly recommended for Delphi. The site has limited onsite signage and the layout (treasuries, sanctuary, oracle, theater) doesn't read intuitively without commentary. A licensed guide for the site + museum is typically $180–250 USD and we can add one to your booking. If you skip the guide, we recommend buying the Rough Guide or Blue Guide chapter on Delphi in advance.",
      },
      {
        question: "What's the entrance fee?",
        answer:
          "€13 / approx. $14 per adult for the combined site + museum ticket, paid at the gate. Free for EU citizens under 25, half price for non-EU students and seniors over 65. Free admission days: March 6, April 18, May 18, last weekend of September, October 28, and the first Sunday of every month November–March.",
      },
      {
        question: "How physically demanding is the site?",
        answer:
          "Moderate. The walk from the entrance to the top of the site (theater and stadium) gains about 100 vertical meters on uneven ancient stone paths. Total walking is roughly 1.5 km. The museum is flat and air-conditioned. If anyone in your party has knee issues or limited mobility, you can stop at the Temple of Apollo level and skip the upper theater and stadium — still an excellent visit.",
      },
      {
        question: "Best time of year to visit Delphi?",
        answer:
          "April–June and September–October are ideal — wildflowers, mild temperatures, low crowds. July–August are hot (35°C+) and crowded. Winter (December–February) the site is snow-dusted and dramatic but the museum and lower site are still fully open. We run this tour year-round.",
      },
      {
        question: "Can we add a stop in Arachova?",
        answer:
          "Yes — Arachova is a mountain village 12 km east of Delphi, famous for handwoven rugs, formaela cheese, and panoramic views. It's a popular ski-resort village in winter and a beautiful walking village in summer. 30–45 min stop, no extra cost.",
      },
      {
        question: "Is this too long a day for kids?",
        answer:
          "It can be for under-8s — total day is 10–11 hours with 5 hours in the car. Older kids (10+) usually enjoy it. We have car seats and boosters free of charge.",
      },
      {
        question: "Is the museum included in the entrance fee?",
        answer:
          "Yes — the €13 ticket covers both the archaeological site and the museum. They are 5 minutes apart.",
      },
      {
        question: "What about lunch?",
        answer:
          "We stop in Arachova or near Delphi village for a mountain taverna lunch — typically $25–35 per person for a full meal. Let us know dietary preferences and we'll book ahead. Vegetarian and vegan options are available.",
      },
      {
        question: "Free cancellation?",
        answer: "Yes — free cancellation up to 24 hours before pickup. Full refund.",
      },
    ],
  },
  {
    id: "ancient-olympia-tour",
    slug: "ancient-olympia-tour",
    image: "/images/tours/olympian_odyssey.jpg",
    cost: "650",
    costUSD: "699",
    hours: 8,
    title: "Ancient Olympia Tour",
    subtitle: "Private Full-Day Tour from Athens to the Birthplace of the Olympic Games",
    metaDescription:
      "Private full-day tour from Athens to Ancient Olympia, the birthplace of the Olympic Games. UNESCO site plus museum, luxury Mercedes, English-speaking driver. From $699.",
    meetingPoint:
      "Hotel, Airbnb, or short-term rental anywhere in Athens, the Athens Riviera, or Piraeus cruise port. Pickup is included.",
    cancellationPolicy: "Free cancellation up to 48 hours before pickup (longer notice due to the full-day reservation). Full refund.",
    languages: ["English"],
    groupSize: "Private — up to 7 guests in a single luxury Mercedes vehicle.",
    description: [
      "Ancient Olympia is where the Olympic Games were born — and held continuously every four years for nearly 1,200 years, from 776 BC until 393 AD when the Christian emperor Theodosius banned them as pagan. The site lies in a quiet wooded valley in the western Peloponnese, at the confluence of the Alfeios and Kladeos rivers, surrounded by olive groves and pine forests. It's a long day from Athens — about 8 hours total — but if you're a sports fan, a classical history buff, or just want to see one of the most important UNESCO sites in Greece, the trip is unforgettable.",
      "The drive from Athens to Olympia takes about 3.5 hours each way via the Olympia Odos motorway and the Patras-Pyrgos road. You cross the Rio-Antirrio bridge (the second-longest cable-stayed bridge in the world when it opened in 2004) and pass through the orange groves of the western Peloponnese. Your driver provides historical commentary on the Olympic tradition, the religious sanctuary of Zeus, and the political and athletic rituals that made the Games the most important pan-Hellenic event for over a millennium.",
      "Onsite, you'll walk through the sacred precinct (the Altis) including the Temple of Zeus — which once housed the 13-meter-tall gold and ivory statue of Zeus, one of the Seven Wonders of the Ancient World, sculpted by Pheidias around 435 BC. The temple was destroyed by earthquake but its giant column drums lie where they fell. You'll also see the Temple of Hera (the oldest temple at the site, where the modern Olympic torch is still lit using a parabolic mirror), the workshop of Pheidias, and the stadium itself — enter through the original arched tunnel, run a sprint on the 192-meter track if you want, and see the marble starting blocks where ancient athletes lined up.",
      "After the archaeological site, the Olympia Archaeological Museum is a must — it houses the Hermes of Praxiteles (one of the few original ancient Greek sculptures, not a Roman copy), the Nike of Paionios, the pediment sculptures from the Temple of Zeus, and a fully preserved bronze Olympic athlete's helmet. We finish with lunch in the modern village of Olympia (lots of taverna options) before the long drive back to Athens. Total day: about 12 hours door-to-door, 8 hours of which is onsite.",
    ],
    highlights: [
      "UNESCO World Heritage site — the literal birthplace of the Olympic Games",
      "Temple of Zeus where one of the Seven Wonders of the Ancient World once stood",
      "The original Olympic stadium — run a sprint on the 192-meter ancient track",
      "Olympia Archaeological Museum (Hermes of Praxiteles, Nike of Paionios, Temple of Zeus pediments)",
      "Crossing of the Rio-Antirrio bridge — second-longest cable-stayed bridge in the world",
      "Drive through the orange-grove country of the western Peloponnese",
      "Same private luxury Mercedes and English-speaking driver throughout",
    ],
    includes: [
      "Private Mercedes vehicle with English-speaking driver for the full day",
      "Hotel, Airbnb, or cruise port pickup and drop-off",
      "Bottled water and refreshments",
      "Free Wi-Fi onboard",
      "All road tolls, parking, and taxes (including Rio-Antirrio bridge toll)",
    ],
    notIncluded: [
      "Olympia archaeological site &amp; museum combined ticket (€12 / approx. $13 per adult, free for EU under-25)",
      "Lunch in Olympia village (typically $20–35 per person)",
      "Licensed archaeological guide for the site (available on request, recommended)",
      "Gratuities (optional)",
    ],
    itinerary: [
      {
        time: "7:30 AM",
        title: "Hotel pickup",
        description:
          "Early start required — Olympia is 320 km west of Athens. Coffee in the car. About 3.5 hours of driving with one rest stop.",
      },
      {
        time: "9:00 AM",
        title: "Coffee &amp; rest stop",
        description: "Highway service stop on the Olympia Odos. About 20 minutes.",
      },
      {
        time: "11:00 AM",
        title: "Arrival in Olympia village",
        description: "Quick orientation and short walk to the archaeological site entrance.",
      },
      {
        time: "11:15 AM",
        title: "Ancient Olympia archaeological site",
        description:
          "About 90 minutes onsite — Altis sacred precinct, Temple of Zeus, Temple of Hera, Pheidias workshop, ancient stadium with original starting blocks, Bouleuterion (council hall), Philippeion.",
      },
      {
        time: "12:45 PM",
        title: "Olympia Archaeological Museum",
        description:
          "About 60–75 minutes inside. Hermes of Praxiteles, Nike of Paionios, Temple of Zeus pediment sculptures, Olympic-era bronzes, terracottas. Air-conditioned.",
      },
      {
        time: "2:00 PM",
        title: "Lunch in Olympia village",
        description: "Taverna lunch in the modern village. About 75 minutes.",
      },
      {
        time: "3:15 PM",
        title: "Return drive to Athens",
        description: "About 3.5 hours back via the same route. One rest stop. Sunset over the Corinthian Gulf in summer.",
      },
      {
        time: "7:00–7:30 PM",
        title: "Drop-off",
        description: "Back at your hotel, Airbnb, or cruise port. Total: ~12 hours door-to-door.",
      },
    ],
    faq: [
      {
        question: "Is Olympia worth a 12-hour day from Athens?",
        answer:
          "If you're a serious classical-history traveler or a sports fan, absolutely yes — Olympia is the most important pan-Hellenic site after Delphi, and the museum has world-class sculpture you can't see anywhere else. If you're not deeply invested in Greek antiquity, Delphi is shorter (8 hours total) and arguably more visually stunning. Many travelers do both: Delphi day 1, Olympia day 2.",
      },
      {
        question: "Can we run on the original stadium track?",
        answer:
          "Yes — informally. The stadium is open to visitors and people regularly run sprints on the 192-meter track between the marble starting blocks. There's no rope or restriction (just don't damage the ancient stones). It's a memorable photo op. The stadium gets crowded mid-afternoon — try to be there in the first hour after the site opens.",
      },
      {
        question: "Should we add a licensed guide?",
        answer:
          "Strongly recommended for Olympia. The site is layered (Mycenaean, Archaic, Classical, Hellenistic, Roman) and the museum is dense with masterpieces that have specific stories. Licensed Olympia guide is typically $200–280 USD for the site + museum. Booked separately from the driver.",
      },
      {
        question: "What's the entrance fee?",
        answer:
          "€12 / approx. $13 per adult for the combined site + museum ticket, paid at the gate. Free for EU citizens under 25, half price for non-EU students and seniors over 65. Free admission days: March 6, April 18, May 18, last weekend of September, October 28, and the first Sunday of every month November–March.",
      },
      {
        question: "How physically demanding?",
        answer:
          "Moderate. The site is mostly flat with paved paths, but covers a large area — total walking is about 2 km on uneven ground and ancient stone. The stadium tunnel involves about 30 stairs. Museum is fully accessible. Total walking on the day is about 3 km. Wear sturdy shoes and bring water and a hat in summer (35°C+, very little shade).",
      },
      {
        question: "When is the best time to visit?",
        answer:
          "April–early June and September–October for ideal weather and lower crowds. July–August are very hot (35–40°C) — start at site opening to avoid the worst heat. Winter (December–February) is fine but daylight is short, making the long drive home feel long.",
      },
      {
        question: "Is this too long for kids?",
        answer:
          "Best for ages 10+. The 12-hour duration with 7 hours of driving is rough on younger kids. The stadium and the chance to 'race like an Olympian' often captures kids' interest. Car seats and boosters are free.",
      },
      {
        question: "Can we add Patras or the Rio-Antirrio bridge?",
        answer:
          "We cross the bridge as part of the route — there's an optional 10-minute photo stop at the Rio side. Patras is the third-largest city in Greece and a possible add-on, though it adds an hour to an already long day. Most customers skip it unless they have a specific connection.",
      },
      {
        question: "Lunch in Olympia?",
        answer:
          "The modern village (right next to the archaeological site) has 15+ tavernas. Recommended: Taverna Bacchus, Aegean, or Anesi. Greek classics — moussaka, lamb, salad, local wine. Budget $20–35 per person.",
      },
      {
        question: "Free cancellation?",
        answer:
          "Yes — but we ask for 48 hours notice (instead of 24) because this is a long-day reservation that limits other bookings.",
      },
    ],
  },
  {
    id: "greek-gastronomy-tour",
    slug: "athens-food-tour",
    image: "/images/tours/greek_food_tour.jpg",
    cost: "280",
    costUSD: "299",
    hours: 4,
    title: "Greek Food Tour",
    subtitle: "Private 4-Hour Athens Food &amp; Market Tour: Varvakeios Market, Mezedes, and Local Wines",
    metaDescription:
      "Private 4-hour Athens food tour: Varvakeios Central Market, traditional tavernas, meze, regional cheeses, and local wines. English-speaking guide. From $299.",
    meetingPoint:
      "Hotel, Airbnb, or short-term rental anywhere in central Athens. Private walking-and-driving tour starts at your accommodation.",
    cancellationPolicy: "Free cancellation up to 24 hours before pickup. 100% refund.",
    languages: ["English"],
    groupSize: "Private — up to 6 guests for the food tasting portion (group size limited by taverna seating).",
    description: [
      "This is a private 4-hour Athens food tour built for travelers who want to taste their way through the real eating culture of the city — not just souvlaki on a tourist street. We start at the Varvakeios Central Market, the chaotic, gorgeous, century-old food market in the heart of Athens where locals have shopped for fresh fish, lamb, olives, and herbs for generations. From there we walk and drive to a curated sequence of family-run tavernas, mezedopoleions (small-plate places), bakeries, and specialty shops — each picked for one specific thing: the best loukoumades in town, the oldest patsa shop, the family that's been making koulouria since 1912, the wine merchant whose Assyrtiko bottles cost $80 in New York.",
      "Athens has been a food city for 2,500 years. The Greek diet is the most-studied 'longevity diet' in nutrition science (the Mediterranean diet originated here), and almost every dish you'll eat — feta, olive oil, baklava, dolmades, pastitsio, moussaka — has a layered history that goes through Byzantine, Ottoman, and modern Greek influences. Your guide is a local food obsessive who has been doing this tour for years and will explain not just what you're eating but why it matters: where the cheese is from, why the bread is shaped that way, which spice came in with the refugees from Smyrna in 1922.",
      "The 4-hour tour includes 6–8 distinct tasting stops with enough food to constitute a full lunch — you will not be hungry. Tastings include: a Varvakeios market walk with vendor introductions, fresh seafood meze (the morning catch), traditional savory pies (spanakopita, tyropita, kreatopita), regional Greek cheeses (feta, manouri, graviera, kasseri), cured meats (loukaniko, pastourma), warm bougatsa, loukoumades (Greek honey doughnuts), and 3–4 Greek wine pairings (Assyrtiko, Agiorgitiko, Moschofilero) plus tsipouro or ouzo if you want.",
      "This tour is best for foodies, curious travelers, repeat visitors who've already done the Acropolis, and groups who want a sit-down social experience. Many of our customers book this on their first or second night in Athens — it's an excellent orientation to the city's food scene and most guests come away with a list of restaurants for the rest of their stay. Vegetarian and vegan tours can be arranged with notice. Not recommended for guests with severe gluten or dairy intolerances (most of Greek cuisine is built on bread and cheese).",
    ],
    highlights: [
      "Varvakeios Central Market — Athens's century-old food market, behind the scenes",
      "6–8 tasting stops at family-run tavernas, mezedopoleions, and bakeries",
      "Greek cheeses: feta, manouri, graviera, kasseri (with regional context)",
      "Traditional savory and sweet pies — spanakopita, bougatsa, loukoumades",
      "3–4 Greek wine pairings (Assyrtiko, Agiorgitiko, Moschofilero)",
      "Optional tsipouro or ouzo tasting",
      "Local food expert as your guide — not just a generic city tour",
      "Equivalent of a full lunch — no need to eat afterwards",
    ],
    includes: [
      "All food and wine tastings (6–8 stops, equivalent to a full lunch)",
      "Local English-speaking food expert guide",
      "Private walking + transport between stops in central Athens",
      "Curated take-home Athens food guide (PDF)",
      "All taxes and fees",
    ],
    notIncluded: [
      "Hotel pickup outside central Athens (we start within walking distance of most central hotels)",
      "Additional drinks beyond the included wine tastings",
      "Souvenir purchases at specialty shops",
      "Gratuities (optional)",
    ],
    itinerary: [
      {
        time: "11:00 AM",
        title: "Meet at your hotel or central Athens location",
        description:
          "We meet at your accommodation in central Athens (Plaka, Monastiraki, Syntagma, Koukaki) and walk to the first stop. Morning tour times work best — markets are at peak energy.",
      },
      {
        time: "11:15 AM",
        title: "Varvakeios Central Market walk",
        description:
          "30–40 minutes inside the market. Meet our regular vendors, see the fish hall, the meat hall, the spice merchants, and the historic koulouri bakery just outside.",
      },
      {
        time: "12:00 PM",
        title: "Mezedopoleio meze tasting",
        description:
          "First sit-down stop. Small plates: fava, taramosalata, octopus, dolmades, fresh sea-salt anchovies, local olives. Paired with ouzo or tsipouro.",
      },
      {
        time: "12:45 PM",
        title: "Cheese &amp; cured meats tasting",
        description:
          "A classic Athens deli or family cheese shop. Six cheeses from different regions of Greece, with notes on terroir and pairing. Add cured meats: loukaniko, pastourma.",
      },
      {
        time: "1:15 PM",
        title: "Savory pies",
        description:
          "A historic pie bakery in Plaka. Warm spanakopita (spinach &amp; feta), tyropita (cheese), bougatsa (custard) — Greek street food perfected over generations.",
      },
      {
        time: "1:45 PM",
        title: "Greek wine tasting",
        description:
          "Stop at a wine bar or merchant for 3–4 indigenous Greek wine pairings. Assyrtiko (Santorini), Agiorgitiko (Nemea), Moschofilero (Mantinia), Vinsanto (sweet, dessert).",
      },
      {
        time: "2:30 PM",
        title: "Loukoumades &amp; coffee",
        description:
          "Final stop: warm Greek honey doughnuts at a Plaka loukoumades shop, paired with Greek coffee. The dessert finish.",
      },
      {
        time: "3:00 PM",
        title: "End of tour",
        description:
          "Tour ends in central Athens — Plaka, Monastiraki, or Syntagma depending on the day's route. We'll provide our take-home Athens food guide PDF for the rest of your trip.",
      },
    ],
    faq: [
      {
        question: "Is this enough food for a full lunch?",
        answer:
          "Yes — most guests don't eat for the rest of the day. We pace 6–8 tasting stops over 4 hours, and the total food volume is equivalent to a sit-down 3-course lunch with wine. If you have a big dinner planned, let us know and we'll lighten the portions.",
      },
      {
        question: "Can you accommodate vegetarians or vegans?",
        answer:
          "Yes for vegetarians — Greek cuisine is naturally veggie-friendly (lots of fasting traditions from Orthodox Christianity). Vegan is doable but requires advance notice — we'll route through specific vegan-friendly shops and skip cheese stops. Please let us know dietary restrictions when booking.",
      },
      {
        question: "What about gluten-free or dairy-free guests?",
        answer:
          "Greek cuisine is heavy on bread, pastry, and cheese — gluten-free and severe dairy-intolerance guests will only be able to do roughly 40% of the standard tour. We can substitute some stops with seafood, salads, and grilled meats but it changes the character of the tour. Honestly, this isn't the right tour for severe restrictions.",
      },
      {
        question: "Do you visit Plaka or Monastiraki?",
        answer:
          "Yes — most of the food stops are concentrated in the historic center between Plaka, Monastiraki, and Psyrri, plus the Varvakeios market in Athinas Street. The total walking distance is about 1.5 km, broken into short segments. We use the car for any longer connections.",
      },
      {
        question: "Is this a walking tour or a driving tour?",
        answer:
          "Mostly walking — about 1.5 km total, with short hops in the car between districts when needed. Comfortable shoes are essential.",
      },
      {
        question: "Are kids welcome?",
        answer:
          "Yes — kids 8+ usually love the market and the loukoumades stop. The wine portion can be skipped or replaced with juice for younger guests. Family pricing available — let us know how many adults vs. kids when booking.",
      },
      {
        question: "What's the best time of day for the tour?",
        answer:
          "Late morning (11:00 AM start) is ideal — markets are at peak activity, lunch tavernas are open and serving fresh food, and you finish around 3 PM with the rest of the day free. Evening tours (6 PM start) are also possible and emphasize the wine and small-plates side over the market.",
      },
      {
        question: "Do you accept dietary swaps for specific allergies?",
        answer:
          "We can swap individual stops for nut allergies, shellfish allergies, or pork-free preferences. Severe gluten or dairy issues are harder — see above. Please tell us when booking, not on the day.",
      },
      {
        question: "How is this different from a Plaka walking tour?",
        answer:
          "A Plaka walking tour is mostly visual — historic streets, churches, antiquities. This is a food-first tour where the stops are chosen for what's on the plate, not what's on the wall. We do walk through Plaka and Monastiraki but the focus is the eating, not the sightseeing.",
      },
      {
        question: "Free cancellation?",
        answer:
          "Yes — free cancellation up to 24 hours before the tour. Full refund.",
      },
    ],
  },
  {
    id: "athens-meteora",
    slug: "athens-meteora-tour",
    image: "/images/tours/meteora_monasteries.jpg",
    cost: "950",
    costUSD: "1019",
    hours: 12,
    title: "Athens-Meteora Tour",
    subtitle: "Private Full-Day Tour from Athens to Meteora's UNESCO Cliff-Top Monasteries",
    metaDescription:
      "Private full-day tour from Athens to Meteora's UNESCO monasteries. 12 hours, luxury Mercedes, English-speaking driver, hotel pickup, monastery entrance fees included. From $1,019.",
    meetingPoint:
      "Hotel, Airbnb, or short-term rental anywhere in Athens, the Athens Riviera, or Piraeus cruise port. Pickup is included.",
    cancellationPolicy: "Free cancellation up to 48 hours before pickup (longer notice due to the full-day reservation). Full refund.",
    languages: ["English"],
    groupSize: "Private — up to 7 guests in a single luxury Mercedes vehicle.",
    description: [
      "Meteora — literally &ldquo;suspended in air&rdquo; in Greek — is one of the most surreal landscapes on earth. Six active Greek Orthodox monasteries sit on top of giant sandstone pillars rising 400 meters straight up from the Thessalian plain. The monasteries were built between the 14th and 16th centuries by hermit monks who needed defensible refuges from Ottoman raiders; they hauled supplies and themselves up the cliffs in nets and rope ladders. Today four of them are open to visitors and the site is a UNESCO World Heritage destination. It&rsquo;s the second-most popular religious site in Greece after Mount Athos.",
      "This is a private long-day tour — about 12 hours door-to-door — from Athens to Meteora and back. The drive each way is roughly 4 hours via the modern E75 highway, north through the plain of Thebes, past Mount Othrys, through the Trikala region. Your driver provides historical commentary on the Byzantine empire, the Ottoman period, monastic life, and the geology of the rock formations (formed by river deposition and millions of years of erosion). It&rsquo;s a long day, but the payoff is one of the most unforgettable visits you&rsquo;ll do anywhere in Europe — and unlike a 2-day Meteora trip with overnight hotel, you&rsquo;re back in your Athens hotel by 10 PM.",
      "At Meteora itself we visit two or three of the four open monasteries (visiting all four is possible but rushed). Most popular: the Holy Monastery of Great Meteoron (the largest, founded in 14th century), Varlaam (with its iconic chapel and museum), Roussanou (perched on the most dramatic single pillar, run by nuns since 1988), Holy Trinity (the &ldquo;James Bond monastery&rdquo; from <em>For Your Eyes Only</em>), Saint Nicholas Anapafsas (the smallest, with magnificent 16th-century frescoes), and Saint Stephen (the easiest to access, with no stairs). Each visit involves a 5–15 minute walk and 100–200 stairs, plus 20–40 minutes inside the monastery. We&rsquo;ll plan the route based on the day&rsquo;s closures (each monastery closes one day a week — your driver will know the rotation).",
      "Lunch is in Kalambaka, the town directly below the rocks, with views straight up at the monasteries. Lots of taverna options for grilled meats, Thessalian cheeses, and local wine. We end the day with a sunset photo stop at the panoramic viewpoint above Kastraki — the village of red-roofed houses tucked into the rocks — before the long drive back. This is the single most memorable day trip you can do from Athens, and one of our most-requested tours by US travelers.",
    ],
    highlights: [
      "Two or three of the four open UNESCO Meteora monasteries",
      "Drive through the Thessalian plain — about 4 hours each way",
      "Lunch in Kalambaka with views up at the rock formations",
      "Sunset photo stop at the Meteora panoramic viewpoint",
      "Same private Mercedes and English-speaking driver for the full 12 hours",
      "Door-to-door pickup and drop-off in Athens, Athens Riviera, or Piraeus port",
      "Monastery entrance fees included (€3 per monastery)",
    ],
    includes: [
      "Private Mercedes vehicle with English-speaking driver for the full 12 hours",
      "Hotel, Airbnb, or cruise port pickup and drop-off",
      "All monastery entrance fees (€3 × up to 3 monasteries)",
      "Bottled water and refreshments",
      "Free Wi-Fi onboard",
      "All road tolls, parking, and taxes",
    ],
    notIncluded: [
      "Lunch in Kalambaka (typically $20–30 per person)",
      "Licensed archaeological guide for the monasteries (available on request)",
      "Modest dress shawls and skirts at the monastery gates (free if needed — provided onsite or by us)",
      "Gratuities (optional)",
    ],
    itinerary: [
      {
        time: "6:30 AM",
        title: "Early hotel pickup",
        description:
          "Yes, this is early — but Meteora is 4 hours north and we want enough time at the monasteries. Coffee available in the car.",
      },
      {
        time: "8:30 AM",
        title: "Coffee &amp; rest stop",
        description:
          "Highway stop near Lamia — bathrooms, espresso, snacks. About 20 minutes.",
      },
      {
        time: "10:30 AM",
        title: "Arrival in Kalambaka",
        description:
          "First view of the rock formations. We drive up the access road for a panoramic photo stop before the first monastery.",
      },
      {
        time: "11:00 AM",
        title: "Monastery 1: Great Meteoron or Varlaam",
        description:
          "About 60–75 minutes including walk-up and time inside. Think: catholicon (church), refectory, frescoes, museum, panoramic terrace.",
      },
      {
        time: "12:30 PM",
        title: "Monastery 2: Roussanou or Saint Stephen",
        description: "About 45–60 minutes. Roussanou is the most photographed; Saint Stephen the easiest to access (no stairs).",
      },
      {
        time: "1:45 PM",
        title: "Lunch in Kalambaka",
        description:
          "Taverna lunch with views of the rocks. About 75 minutes. Local Thessalian dishes — grilled lamb, kontosouvli, hilopites pasta.",
      },
      {
        time: "3:00 PM",
        title: "Optional 3rd monastery or panoramic drive",
        description:
          "Time for one more monastery (Holy Trinity or Saint Nicholas) or a longer scenic drive on the panoramic road above the rocks.",
      },
      {
        time: "4:30 PM",
        title: "Return drive to Athens",
        description: "About 4 hours back, with one rest stop. Sunset views over the Thessalian plain in summer.",
      },
      {
        time: "9:00–10:00 PM",
        title: "Drop-off",
        description:
          "Back at your hotel, Airbnb, or cruise port. Yes it&rsquo;s a long day — most customers say it&rsquo;s the best one of the trip.",
      },
    ],
    faq: [
      {
        question: "Is Meteora really doable as a day trip from Athens?",
        answer:
          "Yes — about 60% of our Meteora customers do it as a day trip, 40% stay overnight in Kalambaka. The day trip works because the highway drive is fast and direct (modern E75) and the time at the monasteries is sufficient for two or three visits. The downside is fatigue — 8 hours of driving plus walking, stairs, and visits in one day. The upside is you save a night in a Kalambaka hotel and don&rsquo;t pack/unpack. If you have 2 days available, an overnight in Kalambaka with sunrise photography next morning is the gold standard.",
      },
      {
        question: "Are the monastery entrance fees included?",
        answer:
          "Yes — we cover the €3 entrance per monastery (up to 3 visits). Each monastery is independently run and charges separately at the gate.",
      },
      {
        question: "Is there a dress code?",
        answer:
          "Yes — strict modest dress is required to enter the monasteries. Women: long skirts (knees covered) and shoulders covered. Men: long pants (no shorts) and sleeved shirts. The monasteries provide free wrap-skirts and shawls at the entrance for visitors who arrive in shorts or sleeveless tops, but bringing your own is more comfortable. We carry spare wraps in the car as well.",
      },
      {
        question: "Are the monasteries open year-round?",
        answer:
          "Yes — but each monastery closes one day per week (the closing day rotates so different monasteries are open on different days), and winter hours are shorter (typically 9:30 AM – 3:00 PM). Your driver will know the current rotation and plan the route accordingly. From early November to late March some monasteries close on Tuesdays, Wednesdays, or Thursdays.",
      },
      {
        question: "How much walking and how many stairs?",
        answer:
          "Each monastery requires a walk from the parking area (5–15 minutes) and a climb of 100–200 stone stairs to the entrance. Saint Stephen is the only one with no stairs (it has a small footbridge). If you have knee issues or limited mobility, we recommend Saint Stephen plus Roussanou (only ~50 stairs) and skipping Great Meteoron or Varlaam.",
      },
      {
        question: "Can we go inside the monasteries?",
        answer:
          "Yes — the public sections include the catholicon (main church), often a refectory, sometimes a small museum, and the panoramic terraces. You can&rsquo;t enter the private monastic quarters, kitchens, or cells. Photography is generally allowed outside but prohibited inside the churches (strictly enforced).",
      },
      {
        question: "Can we add a licensed guide?",
        answer:
          "Yes — for $200–280 USD we can add a state-licensed Thessaly guide who joins us in Kalambaka and accompanies you through the monastery visits. Highly recommended if you&rsquo;re interested in Byzantine art, monastic history, or theology. Booked separately from the driver.",
      },
      {
        question: "What about kids?",
        answer:
          "Best for ages 10+. Younger kids may struggle with the 12-hour duration and the stairs. Car seats and boosters free.",
      },
      {
        question: "When is the best season?",
        answer:
          "Spring (April–early June) and fall (September–October) are ideal — moderate temperatures, wildflowers in spring, low haze in fall. Summer (July–August) is hot (35°C+) and busy. Winter (December–February) sometimes has snow on the rocks, which is dramatic but adds risk to the drive — we monitor conditions and reschedule if needed.",
      },
      {
        question: "How does this compare to a 2-day Meteora trip?",
        answer:
          "A 2-day trip lets you do sunrise photography, all four open monasteries, a hike on the trails between the rocks, and a relaxed pace. A 1-day trip from Athens covers the highlights — 2-3 monasteries, lunch with a view, the panoramic viewpoint — but skips sunrise and the trails. If Meteora is your only chance, the day trip is great. If you have flexibility, an overnight is better.",
      },
      {
        question: "Free cancellation?",
        answer:
          "Yes — but we ask for 48 hours notice (instead of 24) because this is a full-day reservation that limits other bookings.",
      },
    ],
  },
];
