import type { Metadata } from "next";

export const siteDescription =
  "Dental therapist, general dentist, and endodontist.";

export const defaultSiteMetadata: Metadata = {
  title: {
    default: "Yana Bourne",
    template: "%s | Yana Bourne",
  },
  description: siteDescription,
};

/** Home routes use the site default title only (bypasses root title template). */
export const homeMetadata: Metadata = {
  title: { absolute: "Yana Bourne" },
  description: siteDescription,
};