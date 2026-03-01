import { siteMeta } from "./site";

type ExtraFaq = { q: string; a: string };

type LocationSeed = {
  suburb: string;
  region: string;
  descriptors: [string, string];
  landmarks: [string, string];
  serviceNote: string;
  renovationFocus: string;
  painPoints: string;
  tip: string;
  callout: {
    faults: string;
    lighting: string;
    circuits: string;
    outdoor: string;
    ev: string;
  };
  availabilityNote: string;
  quotingNote: string;
  extraFaq?: ExtraFaq;
  serviceArea: string[];
  nearby: string[];
  mapQuery?: string;
  metaDescription?: string;
};

export type Location = {
  slug: string;
  suburb: string;
  city: string;
  region: string;
  heroBlurb: string;
  metaDescription: string;
  intro: string;
  homeownerTip: string;
  callouts: string[];
  serviceArea: string[];
  nearby: string[];
  mapQuery: string;
  faq: {
    housing: string;
    renovations: string;
    availability: string;
    quoting: string;
    extra?: ExtraFaq;
  };
  canonicalPath: string;
  heroImage: string;
  brand: string;
};

const baseHero = "/images/heroes/residential-hero.webp";

const heroLeadIns = (
  suburb: string,
  descriptorA: string,
  descriptorB: string,
  slug: string
) => {
  const templates = [
    `${suburb} mixes ${descriptorA} with ${descriptorB}.`,
    `${descriptorA} sit alongside ${descriptorB} all through ${suburb}.`,
    `Between ${descriptorA} and ${descriptorB}, ${suburb} needs tidy electrical work.`,
  ];
  return templates[pickVariant(slug, templates.length, 1)];
};

const heroSupport = (serviceNote: string, slug: string) => {
  const templates = [
    `${siteMeta.brand} keeps everything compliant while ${serviceNote}.`,
    `${siteMeta.brand} handles the detail so ${serviceNote}.`,
    `${siteMeta.brand} documents every step so ${serviceNote}.`,
  ];
  return templates[pickVariant(slug, templates.length, 2)];
};

const introTemplates = (
  suburb: string,
  landmarks: [string, string],
  renovationFocus: string,
  painPoints: string,
  slug: string
) => {
  const [landmarkA, landmarkB] = landmarks;
  const templates = [
    `From ${landmarkA} to ${landmarkB}, we handle ${renovationFocus} and keep call-outs tight for ${painPoints}.`,
    `Covering ${landmarkA} through to ${landmarkB}, we map out ${renovationFocus} and stay on standby for ${painPoints}.`,
    `${suburb} projects between ${landmarkA} and ${landmarkB} get neat installs plus rapid troubleshooting when ${painPoints}.`,
  ];
  return templates[pickVariant(slug, templates.length, 3)];
};

const calloutSentence = (lead: string, focus: string) => `${lead} ${focus}.`;

const rawLocations: LocationSeed[] = [
  {
    suburb: "Auckland Central",
    region: "Central Auckland",
    descriptors: ["high-rise apartments", "boutique commercial fit-outs"],
    landmarks: ["Viaduct Harbour", "Karangahape Road"],
    serviceNote: "tenants, building managers, and inspectors all stay aligned",
    renovationFocus: "apartment upgrades, lobby fit-outs, and small commercial rewires",
    painPoints: "tight risers, after-hours access windows, and dated distribution boards",
    tip: "Book lift or loading-dock slots when we confirm the schedule so we can finish in a single visit without overtime fees.",
    callout: {
      faults: "CBD apartments and mixed-use floors that share risers",
      lighting: "gallery spaces, boutiques, and premium apartments needing dimming and control",
      circuits: "server cupboards, AV racks, and kitchen upgrades in towers",
      outdoor: "balconies and podium terraces exposed to salt air",
      ev: "stacked basement carparks that require load management",
    },
    availabilityNote:
      "We keep early-morning and after-hours slots open for CBD clients so outages happen before staff or residents arrive.",
    quotingNote:
      "Email floor plans, tenancy fit-out drawings, or even a quick video walkthrough — we’ll return a scoped quote with access notes you can forward to building management.",
    serviceArea: [
      "Viaduct",
      "Wynyard Quarter",
      "Victoria Quarter",
      "Britomart",
      "Aotea Precinct",
      "Grafton Gully",
    ],
    nearby: ["Ponsonby", "Parnell", "Newmarket", "Grafton"],
  },
  {
    suburb: "Ponsonby",
    region: "Central Auckland",
    descriptors: ["character villas", "modern terraces"],
    landmarks: ["Franklin Road", "Ponsonby Road"],
    serviceNote: "heritage detailing stays untouched while new gear is installed",
    renovationFocus: "villa extensions, attic conversions, and premium kitchen refits",
    painPoints: "subfloor access limits, brittle VIR cabling, and narrow switchboard cupboards",
    tip: "Photos of under-house access and ceiling spaces help us plan containment without opening freshly painted linings.",
    callout: {
      faults: "heritage villas with patchy rewires",
      lighting: "art walls, pendant clusters, and mood lighting for renovated lounges",
      circuits: "sculleries, wine fridges, and underfloor heating",
      outdoor: "courtyard and deck lighting that keeps neighbours happy",
      ev: "steep driveways and shared parking pads that need tidy chargers",
    },
    availabilityNote:
      "Standard bookings are 1–2 weeks out, but we hold emergency slots for Ponsonby outages so fridges, fans, and retail tenants stay live.",
    quotingNote:
      "Share renovation drawings or even Pinterest boards — we’ll respond with a fixed price that covers fittings, control gear, and compliance paperwork.",
    serviceArea: [
      "St Marys Bay",
      "Freemans Bay",
      "College Hill",
      "Herne Bay",
      "Western Park",
      "Three Lamps",
    ],
    nearby: ["Herne Bay", "Grey Lynn", "Auckland Central", "Parnell"],
  },
  {
    suburb: "Grey Lynn",
    region: "Central Auckland",
    descriptors: ["bay villas", "modern infill homes"],
    landmarks: ["Crum Park", "Richmond Road"],
    serviceNote: "projects glide from design to inspection without neighbours being disrupted",
    renovationFocus: "villa rewires, passive-house style retrofits, and clever garden studios",
    painPoints: "shared driveways, mixed insulation, and older sub-mains",
    tip: "Let us know if there are limited parking bays on your street — we’ll bring compact gear and keep everything tidy on the verge.",
    callout: {
      faults: "dual tenancies and rentals with patchy maintenance",
      lighting: "home offices, art studios, and statement staircases",
      circuits: "kitchens with induction, hydro taps, and wine fridges",
      outdoor: "courtyard lighting, cedar screens, and spa circuits",
      ev: "rear-lane parking and shared car pads",
    },
    availabilityNote:
      "We keep Grey Lynn call-outs flexible because so many clients work from home — we’ll schedule around meetings or school pick-ups.",
    quotingNote:
      "A quick video of your switchboard plus any plans is enough for us to price the work accurately and warn you about any isolation requirements.",
    serviceArea: [
      "Arch Hill",
      "Richmond Road",
      "Crum Park",
      "Surrey Crescent",
      "West Lynn",
      "Coxs Bay",
    ],
    nearby: ["Ponsonby", "Herne Bay", "Auckland Central", "Avondale"],
  },
  {
    suburb: "Herne Bay",
    region: "Central Auckland",
    descriptors: ["waterfront villas", "architectural rebuilds"],
    landmarks: ["Jervois Road", "Coxs Bay"],
    serviceNote: "clients get discreet installs that respect high-end finishes",
    renovationFocus: "whole-home upgrades, pool plant rooms, and automation refreshes",
    painPoints: "salt-laden air, limited ceiling space, and hidden cable paths",
    tip: "Share cabinetry drawings early — we’ll pre-plan penetrations so millwork and stone surfaces stay immaculate.",
    callout: {
      faults: "coastal switchboards and sub-mains",
      lighting: "landscape layers, art niches, and waterfront glazing",
      circuits: "saunas, gyms, and commercial-grade appliances",
      outdoor: "pools, spas, and boathouse feeds",
      ev: "multi-phase chargers for prestige vehicles",
    },
    availabilityNote:
      "We reserve longer site windows in Herne Bay so builders, landscapers, and pool installers can work in parallel without clashing.",
    quotingNote:
      "For large works we’ll meet on-site with your designer and issue a staged quote covering enabling, fit-off, and commissioning.",
    serviceArea: [
      "Coxs Bay",
      "Jervois Road",
      "Hamilton Road",
      "Marine Parade",
      "Point Erin",
      "Westhaven",
    ],
    nearby: ["Ponsonby", "St Marys Bay", "Takapuna", "Devonport"],
  },
  {
    suburb: "Parnell",
    region: "Central Auckland",
    descriptors: ["heritage terraces", "new luxury apartments"],
    landmarks: ["Parnell Rise", "Auckland Domain"],
    serviceNote: "landlords, body corporates, and homeowners all get the documentation they need",
    renovationFocus: "kitchens, bathrooms, and boutique commercial suites",
    painPoints: "heritage restrictions, fire-rated walls, and steep driveways",
    tip: "If your building has on-site security, loop us in — we’ll provide licence details so passes are issued before we arrive.",
    callout: {
      faults: "row houses and converted offices",
      lighting: "gallery lighting along Parnell Road and St Georges Bay",
      circuits: "commercial kitchens, wine rooms, and chilled storage",
      outdoor: "terraced gardens overlooking Hobson Bay",
      ev: "basement carparks with tight turning circles",
    },
    availabilityNote:
      "We can work overnight or early mornings in Parnell to keep retailers and hospitality venues trading.",
    quotingNote:
      "Email architectural mark-ups or tenancy schedules — we’ll respond with a breakdown you can attach to landlord approvals.",
    serviceArea: [
      "St Georges Bay",
      "Auckland Domain",
      "Judges Bay",
      "Newmarket",
      "Parnell Rise",
      "Strand Waterfront",
    ],
    nearby: ["Newmarket", "Remuera", "Auckland Central", "Orakei"],
  },
  {
    suburb: "Newmarket",
    region: "Central Auckland",
    descriptors: ["mixed-use towers", "light commercial tenancies"],
    landmarks: ["Broadway", "Gillies Avenue"],
    serviceNote: "retailers and apartment owners get rapid communication when shutdowns are needed",
    renovationFocus: "tenancy fit-outs, apartment refreshes, and end-of-trip facilities",
    painPoints: "shared plant rooms, complex BMS interfaces, and restricted loading zones",
    tip: "Let us know if the mall loading dock or laneway requires a permit — we’ll lodge it while finalising your quote.",
    callout: {
      faults: "retail shells turning over between tenants",
      lighting: "showroom lighting, signage feeds, and workplace upgrades",
      circuits: "air-con upgrades, kitchenettes, and nail/beauty equipment",
      outdoor: "podium terraces and communal decks",
      ev: "apartment block carparks needing smart chargers",
    },
    availabilityNote:
      "We plan noisy work before stores open and keep electrical isolations short so your revenue isn’t interrupted.",
    quotingNote:
      "Send tenancy packs or even a sketch on paper — we’ll mark it up digitally and return pricing your landlord can approve fast.",
    serviceArea: [
      "Broadway",
      "Gillies Avenue",
      "Mortimer Pass",
      "Westfield",
      "Parnell End",
      "Nuffield Precinct",
    ],
    nearby: ["Parnell", "Remuera", "Epsom", "Grafton"],
  },
  {
    suburb: "Grafton",
    region: "Central Auckland",
    descriptors: ["character homes", "medical suites"],
    landmarks: ["Auckland Hospital", "Khyber Pass"],
    serviceNote: "hospital-adjacent jobs stay compliant with access protocols",
    renovationFocus: "specialist clinics, apartments, and lab refurbishments",
    painPoints: "limited parking, shared service risers, and acoustic ceilings",
    tip: "Tell us if negative-pressure or clean-room requirements apply — we’ll stage power shutdowns around procedures.",
    callout: {
      faults: "clinics, labs, and short-stay apartments",
      lighting: "task lighting, sensor upgrades, and corridor egress",
      circuits: "medical equipment, UPS feeds, and HVAC",
      outdoor: "staff terraces and link bridges",
      ev: "hospital staff parking and residential blocks",
    },
    availabilityNote:
      "We align with DHB and university schedules so sensitive areas stay live when needed.",
    quotingNote:
      "Provide a quick scope plus any infection-control notes; we’ll return a methodology and quote your compliance officers can sign.",
    serviceArea: [
      "Auckland Hospital",
      "Park Road",
      "Carlton Gore",
      "Symonds Street",
      "Khyber Pass",
      "Auckland Grammar",
    ],
    nearby: ["Newmarket", "Parnell", "Epsom", "Auckland Central"],
  },
];

function slugifySuburb(suburb: string): string {
  return suburb
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-{2,}/g, "-")
    .replace(/^-|-$/g, "");
}

function pickVariant(slug: string, length: number, salt = 0): number {
  let hash = salt;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) % length;
  }
  return hash;
}

export const locations: Location[] = rawLocations.map((seed) => {
  const slug = `electrician-${slugifySuburb(seed.suburb)}`;
  const canonicalPath = `/locations/${slug}`;
  const heroText = `${heroLeadIns(seed.suburb, seed.descriptors[0], seed.descriptors[1], slug)} ${heroSupport(
    seed.serviceNote,
    slug,
  )}`;
  const introText = introTemplates(seed.suburb, seed.landmarks, seed.renovationFocus, seed.painPoints, slug);

  const calloutLeads = [
    calloutSentence("Fault finding and remedial work for", seed.callout.faults),
    calloutSentence("Lighting + control upgrades covering", seed.callout.lighting),
    calloutSentence("Circuit and switchboard capacity for", seed.callout.circuits),
    calloutSentence("Outdoor + garden power for", seed.callout.outdoor),
    calloutSentence("EV charger + load management for", seed.callout.ev),
  ];

  return {
    slug,
    suburb: seed.suburb,
    city: "Auckland",
    region: seed.region,
    heroBlurb: heroText,
    metaDescription:
      seed.metaDescription ??
      `${siteMeta.brand} delivers tidy electrical work in ${seed.suburb}: ${seed.renovationFocus}, rapid fault response, and fully documented sign-offs.`,
    intro: introText,
    homeownerTip: seed.tip,
    callouts: calloutLeads,
    serviceArea: Array.from(new Set([seed.suburb, ...seed.serviceArea])),
    nearby: seed.nearby,
    mapQuery: seed.mapQuery ?? `${seed.suburb}, Auckland, New Zealand`,
    faq: {
      housing: `${seed.suburb} homes span ${seed.descriptors[0]} and ${seed.descriptors[1]}, so we test and isolate before opening walls or ceilings — especially when ${seed.painPoints}.`,
      renovations: `We regularly deliver ${seed.renovationFocus}, lining up other trades so ${seed.serviceNote}.`,
      availability: seed.availabilityNote,
      quoting: seed.quotingNote,
      extra: seed.extraFaq,
    },
    canonicalPath,
    heroImage: baseHero,
    brand: siteMeta.brand,
  };
});

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug);
}

export function getLocationsByRegion(): Record<string, Location[]> {
  return locations.reduce<Record<string, Location[]>>((acc, location) => {
    if (!acc[location.region]) acc[location.region] = [];
    acc[location.region].push(location);
    return acc;
  }, {});
}
