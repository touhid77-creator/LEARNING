// Central place for verified business facts.
// Anything marked TODO is a placeholder — confirmed with the client before launch.

export const siteConfig = {
  name: "Thonse Tours and Travels",
  shortName: "Thonse Tours",
  owner: "Mukthar Ahmed",
  tagline: "Udupi, at your own pace.",
  description:
    "A personally-run taxi and tour service based in Udupi, Karnataka — local sightseeing, temple and beach tours, airport transfers and outstation journeys across coastal Karnataka.",
  phone: "8880954175",
  phoneIntl: "+91 8880954175",
  whatsapp: "918880954175", // country code + number, no + or spaces, for wa.me links
  // TODO(client): confirm exact office / pickup address for map + LocalBusiness schema
  addressLine: "Udupi, Karnataka, India",
  city: "Udupi",
  state: "Karnataka",
  country: "India",
  // TODO(client): confirm business enquiry email
  email: "thonsetoursandtravels@gmail.com",
  airport: {
    name: "Mangaluru International Airport",
    code: "IXE",
  },
  hours: "Available 24×7",
  social: {
    // TODO(client): add if available
    instagram: "",
    facebook: "",
  },
  url: "https://www.thonsetoursandtravels.com", // TODO(client): confirm domain
} as const;

export type SiteConfig = typeof siteConfig;
