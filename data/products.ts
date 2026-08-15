import { FaSprayCan, FaBug, FaSyringe, FaWarehouse } from "react-icons/fa";

export const catalog = [
  {
    name: "Seeds",
    slug: "seeds",
    image: "/seeds.jpg",
    description:
      "Certified seed varieties for maize, vegetables and legumes, sourced from trusted producers.",
    features: [
      "Certified quality seed varieties",
      "Maize, vegetable and legume seed available",
      "Sourced from Seed Co, Global Seeds, Peacock Seeds & Demeter",
    ],
    examples: [
      "Hybrid Maize (SC 719, SC 627, SC 403)",
      "Vegetable Seeds (Tomato, Cabbage, Onion, Rape)",
      "Legume Seeds (Beans, Soya, Groundnuts, Cow Peas)",
    ],
  },
  {
    name: "Fertilizers",
    slug: "fertilizers",
    image: "/fertilizers.jpg",
    description:
      "A full range of fertilizers and soil boosters to support every stage of crop growth.",
    features: [
      "NPK, Urea, CAN and D Compound in stock",
      "Foliar feeds and boosters available",
      "Bulk and retail pack sizes",
    ],
    examples: [
      "NPK 23-10-5+6+1.0Zn",
      "Urea 46% N",
      "CAN 27% N",
      "D Compound",
    ],
  },
  {
    name: "Pesticides",
    slug: "pesticides",
    image: "/pesticides.jpg",
    description:
      "Insecticides, fungicides, rodenticides and grain protectants for effective pest and disease control.",
    features: [
      "Responsible-use dosage guidance provided",
      "Covers crawling, flying and stored-grain pests",
      "Registered, trusted brands",
    ],
    examples: [
      "Cypermethrine",
      "Chlorpyrifos",
      "Actellic 300CS",
      "Dithane",
    ],
  },
  {
    name: "Herbicides",
    slug: "herbicides",
    image: "/herbicides.jpg",
    description:
      "Weed control solutions for maize, soya and general field crop management.",
    features: [
      "Pre- and post-emergence options",
      "Suited to Malawi's major field crops",
      "Application guidance available",
    ],
    examples: [
      "Roundup",
      "Harness",
      "Dual Magnum",
      "Stellar Star",
    ],
  },
  {
    name: "Veterinary Products",
    slug: "veterinary-products",
    image: "/veterinary.jpg",
    description:
      "Antibiotics, vaccines, dewormers and equipment for livestock and poultry health.",
    features: [
      "Injectable and powdered antibiotics",
      "Vaccines, dewormers and vitamins",
      "Veterinary technician on staff",
    ],
    examples: [
      "Oxytetracycline Injectables",
      "Lasota Vaccine",
      "Ivomectin",
      "Piperazine Dewormer",
    ],
  },
  {
    name: "Farming Tools",
    slug: "farming-tools",
    image: "/farm-tools.jpg",
    description:
      "Sprayers, protective wear and hand tools equipped for fieldwork and application.",
    features: [
      "Knapsack and hand sprayers",
      "Full protective wear range",
      "Hand tools for planting and harvesting",
    ],
    examples: [
      "Knapsack Sprayers",
      "Wheelbarrows",
      "Protective Wear & Gumboots",
      "Hand Tools",
    ],
  },
];

export const services = [
  {
    slug: "fumigation-services",
    icon: FaSprayCan,
    image: "/fumigation-services.jpg",
    title: "Fumigation Services",
    text: "Properties, offices, houses, hotels, ships, warehouses, air cargo and crop fumigation, including hot-gas treatment.",
    description:
      "Full fumigation coverage for residential, commercial and agricultural sites — dosage and treatment approach calculated for each property, with protective wear on every job.",
    features: [
      "Properties, offices and house fumigation",
      "Hotel, ship and air cargo fumigation",
      "Crop and warehouse fumigation",
      "Hot-gas treatment for food processing units",
    ],
  },
  {
    slug: "pest-termite-control",
    icon: FaBug,
    image: "/pest-termite-control.jpg",
    title: "Pest & Termite Control",
    text: "Termite control treatment, general insect and pest control, and anti-fungal treatment for export packing pallets.",
    description:
      "Structural and general pest control, from termite treatment to protecting export packaging from fungal damage.",
    features: [
      "Termite control treatment",
      "General insect and pest control",
      "Anti-fungal treatment for export packing pallets",
      "Degree-of-infestation assessment before treatment",
    ],
  },
  {
    slug: "veterinary-services",
    icon: FaSyringe,
    image: "/veterinary-services.jpg",
    title: "Veterinary Services",
    text: "Castration, spaying, dog bathing, and a full veterinary products range from antibiotics to vaccines.",
    description:
      "Hands-on veterinary care backed by our veterinary technician and a full range of antibiotics, vaccines, dewormers and equipment.",
    features: [
      "Castration and spaying",
      "Dog bathing",
      "Antibiotics, vaccines and dewormers on hand",
      "Handled by a qualified veterinary technician",
    ],
  },
  {
    slug: "environmental-disinfection",
    icon: FaWarehouse,
    image: "/environmental-disinfection.jpg",
    title: "Environmental Disinfection",
    text: "Cleaning and disinfection of environmental surfaces, including COVID-19 protocols for healthcare and non-healthcare sites.",
    description:
      "Cleaning and disinfection of environmental surfaces across healthcare and non-healthcare settings, using recommended detergents and disinfectants applied safely.",
    features: [
      "Healthcare facility disinfection (rooms, halls, equipment)",
      "Non-healthcare facility disinfection (offices, homes)",
      "High-touch surface disinfection",
      "COVID-19 cleaning protocols",
    ],
  },
];

export const customers = [
  { name: "Concern World Wide", logo: "/logos/concern.avif" },
  { name: "CIAT", logo: "/logos/ciat.jpg" },
  { name: "LUANAR", logo: "/logos/luanar.jpg" },
  { name: "ICRISAT", logo: "/logos/icrisat.png" },
  { name: "Ministry of Water & Sanitation", logo: "/logos/mowas.png" },
  { name: "MRDRMP / MWASIP", logo: "/logos/mwasip.jpg" },
  { name: "FISD", logo: "/logos/fisd.jpg" },
  { name: "Good Neighbors", logo: "/logos/good-neighbors.webp" },
];

export const suppliers = [
  { name: "Seed Co Malawi", logo: "/logos/seedco.png" },
  { name: "Demeter Agriculture", logo: "/logos/demeter.webp" },
  { name: "Global Seeds", logo: "/logos/global-seeds.png" },
  { name: "Peacock Seeds", logo: "/logos/peacock.png" },
  { name: "Bayer Malawi", logo: "/logos/bayer.svg" },
  { name: "Farmers Organization", logo: "/logos/farmers-org.jpg" },
  { name: "Osho Chemicals", logo: "/logos/osho.webp" },
];

import { FaShieldAlt, FaTruck, FaUsers, FaCertificate } from "react-icons/fa";

export const whyUs = [
  {
    icon: FaShieldAlt,
    title: "Safety First",
    text: "Regulated dosage, operator safety and full protective wear on every job.",
  },
  {
    icon: FaTruck,
    title: "Just-in-Time Delivery",
    text: "Reliable stock and delivery timed to when your farm or business needs it.",
  },
  {
    icon: FaUsers,
    title: "Customer-Focused",
    text: "A team that understands your needs and fulfills them at affordable cost.",
  },
  {
    icon: FaCertificate,
    title: "Trusted Partners",
    text: "Sourced from established manufacturers like Bayer, Seed Co and Osho Chemicals.",
  },
];