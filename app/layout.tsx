import type { Metadata } from "next";
import { theme, getGoogleFontsUrl } from "@/data/theme";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.website),
  title: {
    default: site.seo.title,
    template: `%s | ${site.name}`,
  },
  description: site.seo.description,
  keywords: site.seo.keywords,
  openGraph: {
    siteName: site.name,
    type: "website",
    locale: "en_MW",
  },
};

const rootCssVars = `
  :root {
    --primary: ${theme.colors.primary};
    --secondary: ${theme.colors.secondary};
    --accent: ${theme.colors.accent};
    --surface: ${theme.colors.surface};

    --background: ${theme.colors.background};
    --foreground: ${theme.colors.foreground};
    --muted: ${theme.colors.muted};

    --font-display: "${theme.fonts.display.name}", ${theme.fonts.display.fallback};
    --font-body: "${theme.fonts.body.name}", ${theme.fonts.body.fallback};

    --radius-sm: ${theme.borderRadius.small};
    --radius-md: ${theme.borderRadius.medium};
    --radius-lg: ${theme.borderRadius.large};
  }
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link href={getGoogleFontsUrl()} rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: rootCssVars }} />
      </head>
      <body className="font-body">{children}</body>
    </html>
  );
}
