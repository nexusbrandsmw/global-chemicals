// SINGLE SOURCE OF TRUTH for this site's design tokens.
//
// Change a value here and the whole site picks it up automatically —
// colors, fonts, and border radius are all generated from this file
// at runtime by app/layout.tsx. Nothing else needs to be touched.
//
// Colors are named by ROLE (primary, secondary, accent, surface),
// not by what color they happen to be — so switching this file for
// a new project (different palette entirely) never requires renaming
// classes anywhere else in the codebase.

export const theme = {
  colors: {
    primary: "#129447",
    secondary: "#4a3c30",
    accent: "#fcb315",
    surface: "#faf1e0",

    background: "#ffffff",
    foreground: "#171717",
    muted: "#666666",
  },

  fonts: {
    // "name" must be a valid Google Fonts family name.
    // "weights" controls which weights get loaded.
    display: { name: "Roboto Slab", weights: [500, 600, 700], fallback: "serif" },
    body: { name: "Poppins", weights: [400, 500, 600], fallback: "sans-serif" },
  },

  borderRadius: {
    small: "0.5rem",
    medium: "1rem",
    large: "2rem",
  },
};

// Builds the Google Fonts stylesheet URL from the fonts above.
export function getGoogleFontsUrl(): string {
  const families = [theme.fonts.display, theme.fonts.body]
    .map(
      (font) =>
        `${font.name.replace(/ /g, "+")}:wght@${font.weights.join(";")}`
    )
    .join("&family=");

  return `https://fonts.googleapis.com/css2?family=${families}&display=swap`;
}
