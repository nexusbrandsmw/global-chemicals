// SINGLE SOURCE OF TRUTH for company/site identity.
//
// Change this file when reusing the template for a new project —
// name, contact info, socials, and SEO defaults all flow from here
// into the layout, Navbar, Footer, Contact page, and the contact
// form's email route.

export const site = {
  // Company Information
  name: "Global Chemicals",
  shortName: "Global Chemicals",
  slogan:
    "Sellers and suppliers of quality agricultural products, tools, equipment, pest control, veterinary services and drugs.",
  description:
    "Global Chemicals is a company owned by indigenous Malawians that deals in the selling, provision and supplying of agricultural supplies such as seeds, fertilizers, chemicals,  herbicides, tools & equipment, veterinary drugs, pest control and fumigation services",

  // Branding
  logo: "/logo.png",
  favicon: "/favicon.ico",

  // Contact Information
  email: "info@globalchemicalsmw.com",
  phone: "+265 999 724 962",
  // Digits only, no spaces or +, for building wa.me links
  whatsapp: "265999724962",
  address: "Kampala House, Kamuzu Procession Road, Lilongwe, Malawi",

  // Website
  // TODO: confirm their actual domain — not stated in the company profile.
  website: "https://globalchemicalsmw.com",

  // Social Media
  // TODO: confirm Global Chemicals' actual handles — not stated in the
  // company profile. These are unset rather than guessed.
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    x: "",
    youtube: "",
    tiktok: "",
  },

  // Footer
  footerTitle: "Global Chemicals",
  footerDescription:
    "Quality agricultural products, tools and equipment, pest control, veterinary services and drugs — from our branches in Lilongwe, Malangalanga and Mitundu.",

  // Copyright
  copyright: {
    developer: {
      label: "Developed by",
      name: "Nexus Brands",
      website: "https://nexusbrandsmw.com",
    },
  },

  // SEO Defaults
  seo: {
    title: "Global Chemicals | Agricultural Inputs, Pest Control & Veterinary Supply",
    description:
      "Global Chemicals sells and supplies agricultural products, tools, equipment, fumigation and pest control services, and veterinary services and drugs across Malawi.",
    keywords: [
      "Global Chemicals",
      "agricultural inputs Malawi",
      "pest control Lilongwe",
      "fumigation services Malawi",
      "veterinary supplies Malawi",
      "agrochemicals Malawi",
    ],
    ogImage: "/og-image.jpg",
  },
};

// Always computes the current year — call this instead of storing
// a static copyright string, so it never goes stale.
export function getCopyrightText(): string {
  return `© ${new Date().getFullYear()} ${site.name}. All rights reserved.`;
}