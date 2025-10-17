interface Service {
  name: string;
  description: string;
}

interface LocationInfo {
  summary: string;
  teamMembers: Record<string, number>;
}

interface TeamUnit {
  name: string;
  email: string;
  responsibilities: string;
  members: string[];
}

interface Benefit {
  name: string;
  description: string;
  instructions?: string;
}

interface CorporateStory {
  origin: string;
  focus: string;
}

interface CorporateContacts {
  phone: string;
  address: string;
  region: string;
}

interface SocialLinks {
  linkedIn: string;
  instagram: string;
  x: string;
  youtube: string;
}

export const corporateServices: Service[] = [
  {
    name: "Digital Experiences + Strategy",
    description:
      "Strategic expertise to understand, design, and deliver plans for agile, lean transformations.",
  },
  {
    name: "Labs + Technologies",
    description:
      "Continuous development and implementation of innovative technology solutions that serve immediate and long-term organizational needs.",
  },
  {
    name: "Engineering + Operational Services",
    description:
      "Delivery management and operational excellence for enterprise digital products, initiatives, and programs.",
  },
];

export const corporateStats = {
  yearsInBusiness:
    "+10 years in business – Kopius has provided top-notch managed services since inception.",
  activeProjects:
    "100+ active projects across industries such as e-commerce, AI & IoT, risk management, healthcare, agrotech, and fintech.",
  headquarters: "HQ locations: Seattle and Buenos Aires.",
  teamDistribution: "Team members: 50 in the US and 483 across LatAm & Europe.",
  remotePresence: "Remote footprint: 9 US states and 17 countries.",
};

export const corporateLocations: LocationInfo = {
  summary: "Detailed headcount distribution across Kopius regions.",
  teamMembers: {
    Argentina: 395,
    "República Dominicana": 7,
    España: 15,
    "Costa Rica": 3,
    México: 2,
    Uruguay: 29,
    Brasil: 36,
    Perú: 4,
    Colombia: 11,
    Bolivia: 7,
    "Estados Unidos": 48,
    Portugal: 6,
    Paraguay: 1,
    Chile: 1,
    Italia: 1,
  },
};

export const corporateClients: string[] = [
  "Advisor Engine",
  "Ameren",
  "Apex",
  "Atria",
  "Bershkire Hathaway Inc.",
  "Brado",
  "Broadspire",
  "Careficient",
  "Caremetrix",
  "Cars",
  "Casechek",
  "CBOE (ErisX)",
  "Celltrak",
  "Clarity Parners",
  "Climate",
  "CME",
  "Cohesion",
  "ConnectFSS",
  "Connor Consulting",
  "Coventry",
  "Dealer Inspire",
  "EDX Markets",
  "First Close",
  "Fyc Labs",
  "Gallagher",
  "Gauge",
  "Gordon Brothers",
  "Global Health Labs",
  "HCHB",
  "High Tower",
  "HSF",
  "Intus Care",
  "ISOS",
  "JP Morgan",
  "Magenium Solutions",
  "Majorkey",
  "Market Axess",
  "MG Stover",
  "Microsoft",
  "OTC",
  "Pinnacle",
  "Pragma",
  "PredictLaw",
  "Ratelinx",
  "Rialto Markets",
  "ShipBob",
  "Synagen",
  "Swanton",
  "Tassat",
  "Telemetry",
  "Think Cerca",
  "The Official AI",
  "TMC Health",
  "T-Mobile",
  "TopStep",
  "Totam",
  "TXI Inc.",
  "Whereoware",
  "Widenet",
  "Veracio",
  "Vizient",
  "XSELL",
];

export const corporateObjective =
  "Kopius inspires and guides organizations on their digital journey, partnering to solve complex technology challenges and deliver results.";

export const corporateMission =
  "To empower customer potential through digital innovation.";

export const corporateVision =
  "Define who we are, what we do, and what we aspire to be.";

export const corporateValues: string[] = [
  "The moral code that guides our operations and decisions",
  "Foster Community & Connection",
  "Create Exceptional Experiences",
  "Embrace New Ideas",
  "Exhibit Ownership Mentality",
  "Walk the Talk",
  "Moving At the Speed of Technology",
];

export const corporateStory: CorporateStory = {
  origin:
    "Kopius means abundance—of ideas, opportunities, and possibilities. Kopius emerged from the merger of Tradehelm and Valence, combining engineering excellence with team-based IT solutions.",
  focus:
    "The organization focuses on digital strategy, design, and engineering, solving current challenges and exploring new frontiers to keep customers ahead in a fast-moving digital world.",
};

export const corporateLeaders = [
  { name: "Jim Darrin", role: "CEO" },
  { name: "Danny Vally", role: "COO" },
  { name: "Malena Garilli", role: "CPO" },
  {
    name: "Matias Mazzucchelli",
    role: "President & EVP of Managed and Augmented Services",
  },
  { name: "Diego Anfossi", role: "CDO" },
  { name: "Renee Christensen", role: "VP of Operations" },
  { name: "Ian Au-Yeung", role: "CRO Chief Revenue Officer" },
  { name: "Justin Cloutier", role: "VP Strategic Alliances" },
];

export const corporateTeams: TeamUnit[] = [
  {
    name: "People Operations",
    email: "payroll@kopiustech.com",
    responsibilities:
      "Administrative support including invoices, BigTime, reimbursements, and paychecks.",
    members: [
      "Camila Assadourian – People Operations Analyst",
      "Iván Inturri – People Operations Analyst",
      "Florencia Rico – People Operations Specialist",
    ],
  },
  {
    name: "People Care Team",
    email: "people@kopiustech.com",
    responsibilities:
      "Experience follow-up, benefit approvals, and overall well-being for each team member.",
    members: [
      "Morena Cirocco – People Care Trainee",
      "Manuela Ibarra – People Care Specialist",
      "Gabriel Sierra – HR Analyst",
      "María Schiavo – HR Business Partner",
      "Renata Trombetta – People Care Trainee",
      "Paula Arce – People Care Specialist",
    ],
  },
  {
    name: "Delivery Team",
    email: "delivery@kopiustech.com",
    responsibilities:
      "Technical point of contact within client engagements; tools and project inquiries.",
    members: [
      "Alexandre Arroyo – Project Manager",
      "Agustín Zanni – LatAm Delivery Manager",
      "Pablo Poggi – Project Manager",
      "Douglas Kulakiewicz – Project Manager",
    ],
  },
  {
    name: "Recruiting Team",
    email: "careers@kopiustech.com",
    responsibilities:
      "Recruitment, hiring, contracts, and project reassignments.",
    members: [
      "Florencia Parenti – US Recruiting Manager",
      "Camila Lamberti – LatAm Recruiting Manager",
      "Josefina Albarello",
      "Alejandra Echenique",
      "Josefina Saez",
      "Joaquien Peña",
      "Ignacio Franco",
      "Milgros Aguirre",
      "Julen Leizza",
      "Lola de las Carreras",
      "Melina Gorriz",
      "Renata Correa",
    ],
  },
  {
    name: "IT Support Team",
    email: "helpdesk@kopiustech.com",
    responsibilities:
      "Hardware and software support, access provisioning, and technical assistance.",
    members: [
      "Matías Rognone – IT Director",
      "Joaquien Lopez – SysAdmin & DevOps Engineer",
      "Gonzalo Stete – IT SysAdmin Analyst",
      "Agustín Pistiner – Technical Support Lead",
      "Dante Silvano – Technical Support Analyst",
      "Alvaro Roman – Technical Support Analyst",
      "Kevin Lannes – IT SysAdmin Analyst",
      "Ignacio Pucheta – Technical Support Analyst",
      "Agustín Marini – Technical Support Analyst",
      "Ulises Garaban – Technical Support",
    ],
  },
];

export const argentinaHolidays: string[] = [
  "New Year’s Eve",
  "Carnival",
  "National Day of Memory and Justice",
  "Day of the Veteran and the Fallen in the Malvinas War",
  "Holy Friday",
  "Workers’ Day",
  "May Revolution Day",
  "Day of the Immortality of General Martín Miguel de Güemes",
  "General Manuel Belgrano Immortality Day",
  "Independence Day",
  "Day of General José de San Martín",
  "Day of Respect for Cultural Diversity",
  "National Sovereignty Day",
  "Immaculate Conception Day",
  "Christmas Day",
];

export const corporateBenefits: Benefit[] = [
  {
    name: "Kopius Lab",
    description:
      "Certification opportunities with AWS, Azure, and GCP, plus free courses through preferred platforms.",
    instructions:
      "Complete the designated form for course approval and coordinate certifications aligned to your goals.",
  },
  {
    name: "Kopius Academy",
    description:
      "Webinars, workshops, and communities of practice for shared learning and growth.",
  },
  {
    name: "Teamworks Coworking",
    description:
      "Daily access to coworking spaces, open areas, or private rooms.",
    instructions:
      "Review available spaces via the internal link and submit the reservation form with your visit details.",
  },
  {
    name: "THE B✱X",
    description:
      "Snack box deliveries to celebrate special dates for team members.",
    instructions:
      "Keep your address updated by emailing people@kopiustech.com.",
  },
  {
    name: "Communication Training",
    description:
      "Group or individual English and Portuguese classes through Further Languages In Company SA.",
    instructions:
      "Complete the English or Portuguese assessment form and notify people@kopiustech.com.",
  },
  {
    name: "Keep Moving",
    description:
      "Monthly reimbursement up to 20 USD for physical activities such as gym, yoga, or dance.",
    instructions:
      "Submit payment receipts to payroll@kopiustech.com to activate the benefit.",
  },
];

export const referralProgram = [
  "Upload your referral’s resume.",
  "Recruiting team assessment.",
  "Earn up to USD 2000 for IT roles once the referral completes 3 months.",
];

export const corporateContacts: CorporateContacts[] = [
  {
    region: "Kopius, United States",
    phone: "+1 312-821-4600",
    address: "3055 112th Ave NE, Suite 225, Bellevue, WA 98004, USA.",
  },
  {
    region: "Kopius, Latinoamérica",
    phone: "",
    address: "Olga Cossettini 363, C1107CCH Puerto Madero, Argentina.",
  },
] as const;

export const corporateSocial: SocialLinks = {
  linkedIn: "https://www.linkedin.com/company/kopius",
  instagram: "https://www.instagram.com/kopius",
  x: "https://twitter.com/kopius",
  youtube: "https://www.youtube.com/@kopius",
};

function formatServices(): string {
  return corporateServices
    .map((service) => `• ${service.name}: ${service.description}`)
    .join("\n");
}

function formatTeamDistribution(): string {
  const entries = Object.entries(corporateLocations.teamMembers)
    .map(([country, count]) => `${country}: ${count}`)
    .join(", ");
  return `${corporateStats.teamDistribution}\n${entries}.`;
}

function formatTeams(): string {
  return corporateTeams
    .map(
      (team) =>
        `${team.name} (${team.email}) — ${team.responsibilities}. Integrantes: ${team.members.join(
          "; ",
        )}.`,
    )
    .join("\n");
}

function formatBenefits(): string {
  return corporateBenefits
    .map((benefit) => {
      const details = [benefit.description, benefit.instructions]
        .filter(Boolean)
        .join(" ");
      return `${benefit.name}: ${details}`;
    })
    .join("\n");
}

function formatLeadership(): string {
  return corporateLeaders
    .map((leader) => `${leader.name} – ${leader.role}`)
    .join("; ");
}

function formatClients(): string {
  return corporateClients.join(", ");
}

function formatContacts(): string {
  return corporateContacts
    .map((contact) => {
      const phone = contact.phone ? ` Tel: ${contact.phone}.` : "";
      return `${contact.region}: ${contact.address}.${phone}`;
    })
    .join("\n");
}

function formatHolidays(): string {
  return argentinaHolidays.join(", ");
}

export function formatCorporateAnswer(topic?: string): string {
  if (!topic) {
    return [
      "Somos Kopius, una compañía con más de 10 años brindando servicios gestionados.",
      formatServices(),
      `Misión: ${corporateMission}`,
      `Visión: ${corporateVision}`,
    ].join("\n");
  }

  const normalizedTopic = topic.toLowerCase();

  if (
    normalizedTopic.includes("qué hacemos") ||
    normalizedTopic.includes("what do we do") ||
    normalizedTopic.includes("servicio")
  ) {
    return `¿Qué hacemos?\n${formatServices()}`;
  }

  if (
    normalizedTopic.includes("mission") ||
    normalizedTopic.includes("visión") ||
    normalizedTopic.includes("valores") ||
    normalizedTopic.includes("vision") ||
    normalizedTopic.includes("value")
  ) {
    return [
      `Objetivo: ${corporateObjective}`,
      `Misión: ${corporateMission}`,
      `Visión: ${corporateVision}`,
      `Valores: ${corporateValues.join("; ")}`,
    ].join("\n");
  }

  if (
    normalizedTopic.includes("clientes") ||
    normalizedTopic.includes("clients") ||
    normalizedTopic.includes("portfolio")
  ) {
    return `Clientes destacados (${corporateClients.length}): ${formatClients()}`;
  }

  if (
    normalizedTopic.includes("líder") ||
    normalizedTopic.includes("leaders") ||
    normalizedTopic.includes("management")
  ) {
    return `Nuestro liderazgo: ${formatLeadership()}`;
  }

  if (
    normalizedTopic.includes("equipo") ||
    normalizedTopic.includes("team") ||
    normalizedTopic.includes("contacto") ||
    normalizedTopic.includes("contact")
  ) {
    return `Equipos clave y contacto:\n${formatTeams()}`;
  }

  if (
    normalizedTopic.includes("beneficio") ||
    normalizedTopic.includes("benefits") ||
    normalizedTopic.includes("programa")
  ) {
    return [
      "Beneficios disponibles:",
      formatBenefits(),
      `Programa de referidos: ${referralProgram.join(" → ")}`,
    ].join("\n");
  }

  if (
    normalizedTopic.includes("holiday") ||
    normalizedTopic.includes("feriado") ||
    normalizedTopic.includes("calendario")
  ) {
    return `Feriados Argentina: ${formatHolidays()}`;
  }

  if (
    normalizedTopic.includes("historia") ||
    normalizedTopic.includes("story") ||
    normalizedTopic.includes("origen")
  ) {
    return [
      `Origen: ${corporateStory.origin}`,
      `Enfoque: ${corporateStory.focus}`,
    ].join("\n");
  }

  if (
    normalizedTopic.includes("ubicación") ||
    normalizedTopic.includes("location") ||
    normalizedTopic.includes("office") ||
    normalizedTopic.includes("dirección")
  ) {
    return [
      corporateStats.headquarters,
      formatTeamDistribution(),
      "Contactos:",
      formatContacts(),
      `Redes sociales: LinkedIn ${corporateSocial.linkedIn}, Instagram ${corporateSocial.instagram}, X ${corporateSocial.x}, YouTube ${corporateSocial.youtube}.`,
    ].join("\n");
  }

  return [
    "Resumen corporativo:",
    corporateStats.yearsInBusiness,
    corporateStats.activeProjects,
    formatServices(),
    `Misión: ${corporateMission}`,
  ].join("\n");
}

