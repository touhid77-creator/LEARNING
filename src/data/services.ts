export type Service = {
  slug: string;
  name: string;
  description: string;
};

export const services: Service[] = [
  {
    slug: "udupi-local-taxi",
    name: "Udupi Local Taxi",
    description:
      "Errands, appointments, a train to catch — point-to-point rides around town, on your schedule rather than a bus timetable.",
  },
  {
    slug: "airport-pickup",
    name: "Airport Pickup",
    description:
      "A driver waiting at Mangaluru International Airport (IXE) when you land, with a direct ride to Udupi, Manipal or wherever you're staying.",
  },
  {
    slug: "airport-drop",
    name: "Airport Drop",
    description: "We plan the departure time around your flight. Not the usual way round, where you plan your morning around the driver.",
  },
  {
    slug: "udupi-sightseeing",
    name: "Udupi Sightseeing",
    description: "Temples, beaches and the old town, in whatever order suits you. Half a day if you're passing through, a full one if you're not.",
  },
  {
    slug: "temple-tours",
    name: "Temple Tours",
    description:
      "The Krishna Matha in town, or a longer pilgrimage out to Kollur, Dharmasthala or Kukke Subramanya. We plan these around darshan timings, not just the driving.",
  },
  {
    slug: "beach-tours",
    name: "Beach Tours",
    description: "Malpe and St. Mary's Island close by, or further up the coast to Maravanthe and Murudeshwar if you have the day for it.",
  },
  {
    slug: "outstation-travel",
    name: "Outstation Travel",
    description: "Gokarna, Sringeri, Agumbe, the Kudremukh region — for the trips where you want to see more of Karnataka than just Udupi.",
  },
  {
    slug: "custom-trips",
    name: "Custom Trips",
    description: "Not every trip fits a category on this page. Tell us what you actually have in mind and we'll build a route around it.",
  },
  {
    slug: "tourist-vehicle-service",
    name: "Tourist Vehicle Service",
    description: "One known driver and one known car for the length of your stay, rather than a different one sent each morning.",
  },
];
