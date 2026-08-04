// SINGLE SOURCE OF TRUTH for company/site identity.
//
// Change this file when reusing the template for a new project —
// name, contact info, socials, and SEO defaults all flow from here
// into the layout, Navbar, Footer, Contact page, and the contact
// form's email route.

export const site = {
  // Company Information
  name: "NodeJs Template",
  shortName: "Template",
  slogan: "Reusable website template",
  description:
    "This is a big step in my website development projects journey",

  // Branding
  logo: "/logo.png",
  favicon: "/favicon.ico",

  // Contact Information
  email: "info@template.com",
  phone: "+265 99X XXX XXX",
  // Digits only, no spaces or +, for building wa.me links
  whatsapp: "26599XXXXXXXX",
  address: "Area 25 Lilongwe, Malawi",

  // Website
  website: "https://tiatamw.com",

  // Social Media
  social: {
    facebook: "https://web.facebook.com/profile.php?id=61565642885490",
    instagram: "https://www.instagram.com/tiata_investment/",
    linkedin: "https://www.linkedin.com/company/107577742/",
    x: "",
    youtube: "",
    tiktok: "",
  },

  // Footer
  footerTitle: "Template",
  footerDescription:
    "This is a big step in my website development projects journey",

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
    title: "Tiata Investment | Real fruit, pressed close to where it grows",
    description:
      "Tiata Investment turns mango, baobab, passion fruit, and guava from Malawian smallholder farms into juice on shelf within days of harvest.",
    keywords: [
      "Tiata Investment",
      "Malawian juice",
      "mango juice Malawi",
      "natural fruit juice",
      "kitchen essentials Malawi",
    ],
    ogImage: "/og-image.jpg",
  },
};

// Always computes the current year — call this instead of storing
// a static copyright string, so it never goes stale.
export function getCopyrightText(): string {
  return `© ${new Date().getFullYear()} ${site.name}. All rights reserved.`;
}
