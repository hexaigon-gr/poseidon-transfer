export interface BlogSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  datePublished: string; // ISO 8601 (YYYY-MM-DD)
  dateModified?: string;
  readMinutes: number;
  primaryKeyword: string;
  relatedTourSlugs: string[];
  intro: string[];
  sections: BlogSection[];
  faq: { question: string; answer: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "athens-cruise-port-to-acropolis-itinerary",
    title: "Athens cruise port to Acropolis: a 4-hour shore excursion itinerary (2026)",
    excerpt:
      "If your cruise is docking at Piraeus and you have 4-6 hours ashore, here's exactly how to see the Acropolis, Plaka, and the Changing of the Guard — and still be back at your ship with time to spare.",
    metaDescription:
      "Athens cruise port to Acropolis 4-hour itinerary. Step-by-step plan for Piraeus shore excursions: travel time, Acropolis tickets, Plaka, Changing of the Guard, and how to make all-aboard.",
    image: "/images/tours/athens_unveiled.jpg",
    imageAlt: "Acropolis of Athens — view of the Parthenon from the Areopagus rock",
    datePublished: "2026-04-25",
    dateModified: "2026-04-30",
    readMinutes: 9,
    primaryKeyword: "athens cruise port to acropolis",
    relatedTourSlugs: ["athens-half-day-tour", "athens-full-day-tour"],
    intro: [
      "If your cruise is docking at Piraeus and you have one shore day in Athens, the question isn't whether to see the Acropolis — it's how to do it without spending the whole day on a tour bus or losing 90 minutes to taxi confusion. This guide is the playbook we use for cruise passengers from Royal Caribbean, Norwegian, MSC, Viking, Holland America, Princess, and Celebrity ships every week of the season.",
      "The short version: with a private transfer and the right timing, you can see the Acropolis, walk through Plaka, watch the Changing of the Guard at Parliament, and have a Greek lunch in 4 hours flat — and be back at your gangway with at least 60 minutes of buffer before all-aboard.",
    ],
    sections: [
      {
        heading: "How long does it really take to get from Piraeus to the Acropolis?",
        paragraphs: [
          "About 25-35 minutes by private vehicle, depending on cruise terminal and time of day. The Piraeus port has 11 cruise terminals stretched along about 3 km of waterfront — your driver needs to know your specific dock to plan timing. We get this from your ship name + dock number when you book.",
          "Public transport options exist (Metro line 1 from Piraeus to Monastiraki, then walk to the Acropolis — about 50 minutes total) but they're not realistic for a 4-hour shore window: you'd lose 1.5-2 hours of port time on transit, which is most of your day.",
          "Taxi from the cruise terminal: 25-35 minutes, $30-50 USD depending on driver and traffic. Risk: cruise-port taxi drivers are notoriously hit-or-miss for English speakers and timing reliability — the cruise lines explicitly warn against arranging shore transport this way.",
        ],
      },
      {
        heading: "The 4-hour itinerary",
        paragraphs: [
          "This is the schedule we run with cruise passengers who have a shore window of 7 hours or less. Adjust the start time to your specific all-aboard:",
        ],
        list: [
          "Hour 1 (0:00-1:00): Pickup at gangway. Drive to the Acropolis. Walk up to the Parthenon, Erechtheion, Temple of Athena Nike. About 60 minutes onsite.",
          "Hour 2 (1:00-2:00): Drive past the Temple of Olympian Zeus and Hadrian's Arch. Walking time in Plaka — narrow streets, Byzantine churches, café stop with frappé.",
          "Hour 3 (2:00-3:00): Lunch break in Plaka or Monastiraki — 60 minutes for a sit-down Greek meal (souvlaki, moussaka, salad, local wine).",
          "Hour 4 (3:00-4:00): Panathenaic Stadium photo stop. Drive to Syntagma Square for the hourly Changing of the Guard ceremony at Parliament. Drive back to your ship at Piraeus.",
        ],
      },
      {
        heading: "Acropolis tickets and timing — the part that trips up most cruise passengers",
        paragraphs: [
          "Two things to know about the Acropolis that aren't obvious until you're standing in line:",
          "First, you need a timed-entry ticket. Since 2023 the Acropolis has implemented timed-entry slots to manage crowds — if you show up without one, you'll often be turned away or pushed to the next available slot, which could be 90 minutes later. Buy your ticket online in advance at hhticket.gr (the official Greek heritage site) for €20 per adult.",
          "Second, the Acropolis gets very crowded between 10:30 AM and 12:30 PM — exactly when most cruise passengers arrive. If your ship docks early (7-8 AM), aim for an 8:30-9:00 AM Acropolis slot. If you dock later (10-11 AM), the temples will be busy when you arrive but thinning out by noon.",
          "Heat is a real factor in summer. There's no shade on the Acropolis rock and surface temperature on the marble can hit 50°C in July-August. Bring water, a hat, sunglasses, and good shoes — the ancient stones are slippery when worn smooth.",
        ],
      },
      {
        heading: "Where to eat lunch in Plaka — quick recommendations",
        paragraphs: [
          "Plaka has more tavernas than you can count, including some genuinely tourist-trap-y ones. Three reliable picks for a one-hour lunch:",
        ],
        list: [
          "**Geros tou Moria** — classic Plaka taverna at the foot of the Acropolis, 100 years old, traditional Greek menu, decent tourist-mid prices. $18-25 USD per person.",
          "**Avocado** — vegetarian/vegan focused with a creative Greek twist. Good for groups with mixed dietary needs.",
          "**Klepsidra Café** — small bar near the Roman Agora with excellent meze plates and Greek wine. Better for a lighter, faster lunch.",
        ],
      },
      {
        heading: "Changing of the Guard at Syntagma Square",
        paragraphs: [
          "Performed every hour on the hour by the Evzones — the elite Presidential Guard in their traditional Greek uniforms with the famous fustanella (pleated skirt) and tsarouchia (clog shoes with pompoms). The Sunday 11:00 AM ceremony is the elaborate version with all 150 guards and the marching band — that one is worth planning the day around if your ship is in port on a Sunday.",
          "The ceremony itself takes 5-7 minutes. Plan to arrive 5 minutes before the hour for a good photo position. Best view is from the metal fence directly facing the Tomb of the Unknown Soldier.",
        ],
      },
      {
        heading: "What if I have more time — the 6-7 hour version",
        paragraphs: [
          "If your cruise gives you more time ashore (typical for ships overnighting or long-day stops), the better itinerary is our combined Athens + Cape Sounion full-day tour. Athens in the morning (Acropolis, Plaka, Stadium, Changing of the Guard), lunch break, then a coastal drive along the Athens Riviera to Cape Sounion for the sunset at the Temple of Poseidon. About 9-10 hours total, and you're back at your ship by sunset. Ships sailing west toward Italy or south toward Crete typically all-aboard around 6-8 PM, which fits this perfectly.",
        ],
      },
      {
        heading: "Pricing — what should this cost?",
        paragraphs: [
          "Private 4-hour shore tours from Piraeus to Athens range from $300-500 USD for a sedan (up to 3 passengers) or van (up to 7). Group bus tours run $80-130 per person but pack you into a coach with 30+ strangers, fixed timing, and limited Acropolis time.",
          "For a couple, a private 4-hour tour at $319 is $159.50 each — comparable to a group tour but with private timing, your own driver for the day, no rigid schedule, and the ability to swap stops on the fly. For a family of 4, the per-person cost drops to $80 each, cheaper than the group bus and with luxury upside.",
        ],
      },
      {
        heading: "How to book — what we need",
        paragraphs: [
          "To plan a cruise shore tour from Piraeus we need:",
        ],
        list: [
          "Ship name (Royal Caribbean Allure of the Seas, MSC Lirica, Norwegian Epic, etc.)",
          "Dock arrival time and all-aboard time (from your cruise itinerary)",
          "Number of passengers and any mobility considerations",
          "Whether you want a guide added at the Acropolis (we partner with licensed Athens guides — $130-180 USD for the Acropolis section)",
          "Dietary preferences for lunch (vegetarian, vegan, allergies, kosher options)",
        ],
      },
    ],
    faq: [
      {
        question: "Will my private driver pick me up at the cruise gangway?",
        answer:
          "Yes — your driver waits at the cruise terminal exit closest to your ship's gangway with a sign showing your name. We need your ship name and dock to know which terminal. After you clear the cruise security gate, you walk to the driver — typically 2-5 minutes from gangway to vehicle.",
      },
      {
        question: "What if our ship arrives late?",
        answer:
          "We monitor cruise arrivals and adjust pickup automatically — no extra charge for delays up to 90 minutes. If your ship is delayed by more than 90 minutes (rare but happens), we may need to compress the itinerary. We always plan with a 60-minute buffer before all-aboard, so even significant delays usually work out.",
      },
      {
        question: "Can we skip lunch and add another stop?",
        answer:
          "Sure — common additions are the Acropolis Museum (45-60 min, +€15 entrance), Lycabettus Hill (panoramic views, +20 min), or extra time for shopping in Monastiraki. Just tell your driver in the morning.",
      },
      {
        question: "Is the Acropolis wheelchair accessible from a cruise visit?",
        answer:
          "Partially. There's an elevator/lift on the north side of the rock that takes wheelchair users up to the top of the Acropolis. The path on top is paved but uneven. If a guest in your party has limited mobility, mention it when booking — we can plan an alternate that includes the Acropolis Museum (fully accessible) and viewpoints from below the rock.",
      },
      {
        question: "Should I pre-book Acropolis tickets or buy at the gate?",
        answer:
          "Pre-book online at hhticket.gr. Since 2023 the Acropolis uses timed-entry tickets and the gate-buy line can be 30-60 minutes in summer. If you book a private tour with us we can arrange tickets in advance for a small handling fee (or you can buy yourself). Group bus tours typically include skip-the-line tickets in their price.",
      },
      {
        question: "What's the dress code for the Changing of the Guard?",
        answer:
          "No specific dress code at Syntagma Square — it's a public ceremony. Wear sun protection in summer (no shade) and respectful clothing if you also plan to enter Orthodox churches in Plaka.",
      },
      {
        question: "Free cancellation?",
        answer:
          "Yes — free cancellation up to 24 hours before your ship's scheduled arrival in Piraeus. Full refund.",
      },
      {
        question: "Do you accept US dollars?",
        answer:
          "Yes — US dollars in cash, euros, and Visa/Mastercard/Amex. Card payments are processed in EUR; your bank handles the conversion at the daily rate.",
      },
    ],
  },
  {
    slug: "cape-sounion-sunset-tour-what-to-expect",
    title: "Cape Sounion sunset tour: what to expect, what to bring (2026)",
    excerpt:
      "Everything you need to know before taking a private sunset tour to the Temple of Poseidon at Cape Sounion — timing, dress code, photography tips, what's included, and how to get there from Athens.",
    metaDescription:
      "Cape Sounion sunset tour from Athens — full guide. Best time, what to bring, photography tips, entrance fees, and how to book a private tour. Updated 2026.",
    image: "/images/tours/poseidon_haven.jpg",
    imageAlt: "Temple of Poseidon at Cape Sounion at sunset — Doric columns silhouetted against the Aegean Sea",
    datePublished: "2026-04-01",
    dateModified: "2026-04-30",
    readMinutes: 8,
    primaryKeyword: "cape sounion sunset tour",
    relatedTourSlugs: ["poseidon-temple-sounio", "athens-full-day-tour"],
    intro: [
      "Cape Sounion at sunset is the photo travelers come to Greece for. Sixteen Doric columns of the Temple of Poseidon, perched 60 meters above the Aegean, glowing white-gold as the sun drops behind the Saronic islands. It's the southernmost point of mainland Attica, about 70 kilometers from Athens, and for over 2,500 years it's been the landmark sailors used to know they were home.",
      "If you're planning a private sunset tour to Sounion from Athens — or trying to decide whether it's worth the trip — this guide covers everything we've learned running the route hundreds of times: when to go, what to bring, what's included in a typical tour, what to expect at the temple, and how to make the most of the 5 hours.",
    ],
    sections: [
      {
        heading: "When to go: timing the sunset",
        paragraphs: [
          "Sunset at Cape Sounion varies dramatically by season. In late June it's around 8:50 PM; in late December it's around 5:15 PM. Most private sunset tours from Athens leave roughly 3 hours before sunset, which puts you at the temple about 90 minutes early — enough time to walk the site, take photos, and find a spot on the cliffs.",
          "April–June and September–October are the sweet spots. The light is cleaner (less summer haze), the temperature at the temple is comfortable (the wind off the Aegean drops 5–10°C from Athens), and the post-sunset traffic back to Athens is manageable. July and August are still beautiful but expect 35°C+ heat and busy traffic. Winter (December–February) gives you dramatic cloud sunsets and almost-empty cliffs — but the days are short.",
        ],
      },
      {
        heading: "What to bring",
        paragraphs: [
          "The site is open-air with no shade, no shops once you're past the entrance, and exposed wind. A few things make a real difference:",
        ],
        list: [
          "A light jacket or wrap — even in summer the wind picks up at sunset",
          "Sunglasses and a hat — the late afternoon sun is intense before it drops",
          "Water — there's a small kiosk at the entrance but it gets busy",
          "Comfortable shoes — the path from the parking area is paved but the temple area is uneven ancient stone",
          "Phone or camera — see photography tips below",
          "Cash for the entrance fee (€10 per adult, free for under-18s, paid at the gate — we don't mark it up)",
          "Modesty isn't required at this site (unlike the monasteries at Meteora)",
        ],
      },
      {
        heading: "Photography tips: getting the iconic shot",
        paragraphs: [
          "The classic Sounion sunset photo has the temple columns silhouetted against the sun and the open Aegean. To capture it well:",
          "Position yourself northwest of the temple, on the cliff path, so the columns are between you and the setting sun. There's a natural ledge about 30 meters from the temple where most of the famous photos are taken — your driver will know the spot.",
          "Use a wide-angle lens or your phone's wide-angle mode. The temple is bigger than it looks and a tighter lens will crop awkwardly.",
          "Shoot during the 'golden hour' — roughly 30 minutes before sunset, when the light is warm but the columns are still illuminated. The literal sunset moment is also dramatic but the columns are silhouetted, so detail is lost.",
          "Stay until 15 minutes after sunset for the 'blue hour' afterglow — many of the best shots happen then, with deep purple sky and sea.",
        ],
      },
      {
        heading: "What's included in a private sunset tour",
        paragraphs: [
          "A standard private Cape Sounion sunset tour from Athens runs about 5 hours door-to-door and typically includes:",
        ],
        list: [
          "Hotel, Airbnb, or cruise port pickup and drop-off in greater Athens (free)",
          "Private luxury vehicle — usually a Mercedes E-Class for couples or V-Class/Vito for groups up to 7",
          "English-speaking professional driver with historical commentary during the drive",
          "Optional photo stops along the Athens Riviera coastal road (Glyfada, Vouliagmeni Lake, Varkiza)",
          "Free time at the temple — typically 60–90 minutes before sunset plus the sunset itself",
          "Bottled water, Wi-Fi, all road tolls and parking",
        ],
      },
      {
        heading: "What's NOT included",
        paragraphs: [
          "A few things customers occasionally assume are included but aren't:",
        ],
        list: [
          "The €10 archaeological site entrance fee — paid at the gate",
          "Food and drinks at restaurants or tavernas",
          "A licensed archaeological guide at the site (available on request — see below)",
          "Gratuities (optional)",
        ],
      },
      {
        heading: "Should you add a licensed archaeological guide?",
        paragraphs: [
          "By Greek law, your driver may provide commentary during transport but only state-licensed archaeological guides may guide actively inside protected sites. For Sounion specifically, the temple is fully self-guided with informational signage in English and the historical context is straightforward — most travelers don't add a guide.",
          "If you want a deep dive (Pheidias, Periclean Athens, the symbolism of the Doric order), we partner with several licensed Athens guides who can join the tour at the temple for an additional fee — typically $130–180 USD for the Sounion section. Worth it if you're a serious classical-history traveler. Optional otherwise.",
        ],
      },
      {
        heading: "Combining Sounion with the Athens half-day tour",
        paragraphs: [
          "About 30% of our customers book the combined Athens & Poseidon Temple full-day tour instead of the standalone sunset trip. The combined tour does the Acropolis, Plaka, and the Panathenaic Stadium in the morning, lunch, then the Riviera drive and Sounion sunset in the afternoon — same private Mercedes and same driver throughout. Total around 10 hours. It's especially popular with cruise passengers who have one full day in port.",
          "If you only have one evening in Athens, the standalone sunset tour is the right call. If you have a full day and you're a first-time visitor, the combined full-day tour is the better value.",
        ],
      },
      {
        heading: "Pricing — what should this cost?",
        paragraphs: [
          "Private Cape Sounion sunset tours from Athens range from $300–500 USD depending on vehicle and operator. Group bus tours run $40–60 per person but pack 30+ strangers into a coach with fixed timing.",
          "Pricing is per vehicle, not per person — so for a couple a private tour at $429 is $214.50 each, comparable to or less than a group tour with hotel pickup and tip. For a family of 4–7 the per-person cost drops further. The trade-off is private timing, no waiting on strangers, no stranger seating, and the ability to adjust the route.",
        ],
      },
    ],
    faq: [
      {
        question: "How long does a Cape Sounion tour take from Athens?",
        answer:
          "A standard private sunset tour is about 5 hours door-to-door — pickup at your hotel, the 70 km coastal drive (about 75 minutes), 60–90 minutes onsite at the temple before sunset, the sunset itself, and the return drive. Group bus tours typically run shorter (3.5–4 hours) but with less time onsite.",
      },
      {
        question: "Is Cape Sounion worth it as a day trip?",
        answer:
          "Yes — for first-time visitors to Athens it's the most photogenic single experience after the Acropolis itself, and it's only 70 km from the city. The combination of an ancient temple, dramatic cliffs, and one of the most famous sunsets in the Mediterranean is hard to beat.",
      },
      {
        question: "Can I get to Cape Sounion by public transport?",
        answer:
          "Technically yes — KTEL Attikis runs a public bus from Athens to Sounion via the inland route (about 2 hours each way, $9 per person) and the coastal route (about 2.5 hours). It's a budget option but the timing is rigid, the bus stops short of the temple, and you have to manage the return schedule. For sunset specifically, the last buses back to Athens leave too early in summer to catch the actual sunset.",
      },
      {
        question: "What time does the temple close?",
        answer:
          "The Temple of Poseidon archaeological site is open from 9:30 AM until sunset, year-round. They literally close 30 minutes after sunset — so if you arrive too late, you'll see it from the outside but not enter the temple platform.",
      },
      {
        question: "Is the temple wheelchair accessible?",
        answer:
          "Partially. The walk from the parking area to the temple platform is about 5 minutes on a paved path with a moderate uphill grade. The viewing area near the columns has uneven ancient stone. There's a wheelchair-accessible viewpoint slightly below the temple with an excellent sunset view.",
      },
      {
        question: "Can we propose at the temple?",
        answer:
          "Yes — proposals at sunset at the Temple of Poseidon are popular (we've helped with 30+). We can recommend the best viewing spot, time the arrival, and have the driver discreetly photograph the moment. No extra charge — just mention it when booking.",
      },
    ],
  },
  {
    slug: "athens-to-delphi-day-trip-complete-guide",
    title: "Athens to Delphi: the complete private day-trip guide (2026)",
    excerpt:
      "Planning a day trip from Athens to the Oracle of Delphi? Full guide to driving times, what to see, when to go, entrance fees, and whether to add a licensed guide. Covers private tours, costs, and what makes Delphi worth the long day.",
    metaDescription:
      "Athens to Delphi day trip — complete 2026 guide. Driving time, archaeological site, museum, entrance fees, when to go, private tour costs. Updated 2026.",
    image: "/images/tours/delphi_delights.jpg",
    imageAlt: "Delphi archaeological site on the slopes of Mount Parnassus with the Tholos of Athena Pronaia",
    datePublished: "2026-04-15",
    dateModified: "2026-04-30",
    readMinutes: 10,
    primaryKeyword: "athens to delphi day trip",
    relatedTourSlugs: ["delphi-archaeological-site", "athens-meteora-tour"],
    intro: [
      "Delphi was, for almost a thousand years, the religious center of the Greek world — the place where kings, generals, and citizens came to consult the oracle of Apollo before making their most important decisions. Today the archaeological site sits on the dramatic southwestern slope of Mount Parnassus, 180 km northwest of Athens, with views down a valley of olive groves all the way to the Gulf of Corinth.",
      "If you're trying to figure out whether a day trip from Athens to Delphi is realistic, what to expect when you get there, and how much it should cost — this guide covers everything we've learned running the route. Total day is about 10–11 hours including 5 hours of driving, so it's a real commitment, but the payoff is one of the most important UNESCO sites in Europe and one of the most beautiful drives in Greece.",
    ],
    sections: [
      {
        heading: "Where is Delphi and how long does it take?",
        paragraphs: [
          "Delphi is 180 km northwest of Athens by road — about 2.5 hours each way via the modern A1 motorway, the National Road, and a final climb up Mount Parnassus. Total round-trip driving is about 5 hours. With time onsite (90 minutes at the archaeological site, 60–75 minutes at the museum, lunch, and a quick stop at the Sanctuary of Athena Pronaia), the day works out to 10–11 hours door-to-door from your Athens hotel.",
          "The drive itself is part of the experience. You leave the dense Attica plain, cross into Boeotia and the wide cotton fields north of Athens, then start climbing into the foothills of Mount Parnassus. The final 30 minutes are a switchback road up to the modern village of Delphi, with views down toward the Gulf of Corinth and the Pleistos valley of olive groves — claimed by some Greeks to be the largest olive grove in the world.",
        ],
      },
      {
        heading: "What you'll see onsite",
        paragraphs: [
          "Delphi has two visitable areas: the main archaeological site (the sanctuary of Apollo) and the Sanctuary of Athena Pronaia, about 800 meters apart. Most tours visit both. The combined entrance fee is €13 / approx. $14 per adult, paid at the gate. EU citizens under 25 are free; non-EU students and seniors over 65 get half price.",
          "The main site is a roughly rectangular sanctuary on a steep slope. You enter at the bottom, walk uphill along the Sacred Way past the foundations of small temple-like Treasuries (each city-state had one to display its dedications), reach the Temple of Apollo where the Pythia delivered her prophecies above a fissure in the rock, then continue further up to the well-preserved 4th-century BC theater (5,000 seats, with extraordinary acoustics) and finally the stadium at the very top, where the Pythian Games — second only to Olympia in importance — were held every four years.",
        ],
      },
      {
        heading: "The Delphi Archaeological Museum",
        paragraphs: [
          "Don't skip the museum. It's one of the best in Greece and houses pieces you simply cannot see anywhere else:",
        ],
        list: [
          "The Charioteer of Delphi — one of the few surviving large-scale ancient Greek bronzes, almost completely intact, dating from 478 BC",
          "The Sphinx of Naxos — a 2.3-meter marble guardian from 560 BC that once sat on top of a tall Ionic column at the entrance of the sanctuary",
          "The twin kouros statues of Cleobis and Biton, archaic Greek sculpture from around 580 BC",
          "The frieze of the Siphnian Treasury — some of the finest preserved late-archaic relief sculpture",
          "The Antinous of Delphi — Roman-era marble portrait of Hadrian's beloved",
          "The omphalos stone — the carved navel-stone marking what the Greeks believed was the literal center of the world",
        ],
      },
      {
        heading: "Should you add a licensed guide?",
        paragraphs: [
          "Strongly recommended for Delphi. The site has limited onsite signage, the layout (treasuries, sanctuary, oracle, theater) doesn't read intuitively without commentary, and the museum is dense with masterpieces that have specific stories. By Greek law, only state-licensed archaeological guides may guide actively inside protected sites — your driver can provide context during the drive but not at the site.",
          "A licensed Delphi guide for the site + museum is typically $180–250 USD for the day. Booked separately from the driver, it adds materially to the experience for travelers serious about classical history. If you skip the guide, we recommend buying the Rough Guide or Blue Guide chapter on Delphi in advance and reading it on the drive up.",
        ],
      },
      {
        heading: "When to go",
        paragraphs: [
          "April–early June and September–October are ideal — wildflowers, mild temperatures (20–25°C), clean air, and modest crowds. July–August are very hot at the site (35°C+ with limited shade) — start at site opening (8:00 AM) to do most of the walking before the heat. Winter (December–February) is fine and the snow-dusted rocks are dramatic, but daylight is short, making the long drive home feel longer.",
          "Avoid Tuesdays in the off-season — the Delphi museum sometimes closes or runs reduced hours. Free admission days are March 6, April 18, May 18, last weekend of September, October 28, and the first Sunday of every month November–March (expect heavy crowds on these days).",
        ],
      },
      {
        heading: "Lunch in Arachova or Delphi village",
        paragraphs: [
          "The modern village of Delphi (right next to the archaeological site) has a dozen tavernas with views over the valley. Quality is decent, prices are touristy ($25–35 per person for a full meal). Better food and atmosphere is 12 km east in Arachova — a beautiful mountain village famous for handwoven rugs, formaela cheese, and ski tourism in winter. Most private tours include a stop in Arachova on the way back.",
          "Recommended local dishes: lamb chops (paidakia), formaela cheese (saganaki-style fried Arachova cheese), Parnassian wild boar stew, and local mountain herbs in the salads. Pair with a Mavrodaphne (sweet local red) or any Boeotian wine.",
        ],
      },
      {
        heading: "Costs: what should this trip cost?",
        paragraphs: [
          "Private Delphi day tours from Athens range from $700–1,200 USD depending on vehicle, operator, and whether a licensed guide is included. Group bus tours run $90–130 per person but pack you into a coach with 30+ strangers, fixed timing, and a 7:00 AM pickup whether you like it or not.",
          "For a couple, a private tour at $929 USD is $464.50 each — about 4× a group bus tour, but you get a private Mercedes, your own driver for 11 hours, door-to-door pickup, no rigid schedule, the option to spend longer at the museum or skip lunch and gain time, and the trip back to Athens at your own pace. For a family of 4 the per-person cost drops to $232 each — comparable to a midrange group tour with private upside.",
        ],
      },
      {
        heading: "Should you do Delphi or Meteora — or both?",
        paragraphs: [
          "Delphi and Meteora are the two big day trips from Athens. Both are UNESCO sites, both involve a long day in the car, and both are world-class destinations. If you can only do one:",
          "Choose Delphi if you're a classical-history person — the oracle, the games, the museum bronzes, the Greek-mythology side of Greece.",
          "Choose Meteora if you're a landscape-and-photography person — the cliff-top monasteries, the Byzantine frescoes, and one of the most surreal landscapes in Europe.",
          "If you have two days, do both. Delphi is shorter (10 hours) and Meteora is longer (12 hours), so we usually suggest Meteora on the day you're more rested. They don't combine well in a single day from Athens — they're in opposite directions and 3+ hours apart.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I do Delphi as a day trip from Athens?",
        answer:
          "Yes — about 70% of visitors to Delphi do it as a day trip from Athens. The drive is fast and direct (modern motorway most of the way), and the site is sufficient for a 4–5 hour visit including the museum and lunch. The downside is the 10–11 hour total day. If you have flexibility, an overnight in Arachova or Delphi village lets you do the site at a relaxed pace and catch sunrise from the Sanctuary of Athena Pronaia the next morning.",
      },
      {
        question: "What's the entrance fee for Delphi?",
        answer:
          "€13 / approx. $14 per adult for the combined site + museum ticket, paid at the gate. Free for EU citizens under 25, half price for non-EU students and seniors over 65. Cash or card accepted.",
      },
      {
        question: "Is Delphi accessible for guests with limited mobility?",
        answer:
          "Partially. The site is on a steep slope and the main path gains about 100 vertical meters from the entrance to the upper theater and stadium, on uneven ancient stone. The lower section (Sacred Way and Temple of Apollo) is doable with moderate effort. The museum is fully accessible. If walking is limited, you can stop at the Temple of Apollo and skip the upper theater and stadium and still have an excellent visit.",
      },
      {
        question: "How long do I need at the Delphi Archaeological Museum?",
        answer:
          "60–90 minutes for most visitors. If you have an art-history background you can spend 2 hours. The museum is air-conditioned and a welcome break from the open site, especially in summer.",
      },
      {
        question: "Can I climb to Mount Parnassus or hike from Delphi?",
        answer:
          "There are several beautiful walking trails around Delphi, including the path of the ancient pilgrims from the port at Itea up to the sanctuary. For a serious hike, base in Arachova and use a separate day. The standard day tour from Athens doesn't include hiking time.",
      },
      {
        question: "Is the bungee jump at the Corinth Canal on the way?",
        answer:
          "No — the Corinth Canal is in the opposite direction (south, on the way to the Peloponnese). Delphi is north-northwest of Athens. If you want both, do them as separate day tours.",
      },
    ],
  },
];
