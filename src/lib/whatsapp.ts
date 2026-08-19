import { siteConfig } from "./site-config";

/**
 * Builds a wa.me deep link with an optional pre-filled message.
 */
export function buildWhatsAppLink(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function buildTelLink(): string {
  return `tel:+${siteConfig.whatsapp}`;
}

export type TripEnquiry = {
  name?: string;
  phone?: string;
  pickup?: string;
  destination?: string;
  date?: string;
  time?: string;
  passengers?: string;
  vehicle?: string;
  journeyType?: string;
  notes?: string;
};

/**
 * Formats a trip enquiry into a clean, readable WhatsApp message.
 */
export function formatTripEnquiry(data: TripEnquiry): string {
  const lines = [
    `Hello Thonse Tours and Travels, I'd like to plan a trip.`,
    "",
    data.name ? `Name: ${data.name}` : null,
    data.phone ? `Phone: ${data.phone}` : null,
    data.journeyType ? `Journey type: ${data.journeyType}` : null,
    data.pickup ? `Pickup: ${data.pickup}` : null,
    data.destination ? `Destination: ${data.destination}` : null,
    data.date ? `Travel date: ${data.date}` : null,
    data.time ? `Pickup time: ${data.time}` : null,
    data.passengers ? `Passengers: ${data.passengers}` : null,
    data.vehicle ? `Preferred vehicle: ${data.vehicle}` : null,
    data.notes ? `Additional requirements: ${data.notes}` : null,
  ].filter(Boolean);

  return lines.join("\n");
}
