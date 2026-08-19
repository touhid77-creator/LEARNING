"use client";

import { useState, type FormEvent } from "react";
import { clsx } from "clsx";
import { buildWhatsAppLink, formatTripEnquiry } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/site-config";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/ui/Icons";

const journeyTypes = [
  "One Way",
  "Round Trip",
  "Airport Transfer",
  "Local Taxi",
  "Sightseeing",
  "Custom Tour",
];

const vehicleOptions = ["Swift Dzire", "Ertiga", "Not sure — recommend one"];

const fieldClass =
  "w-full rounded-xl border border-ocean-900/15 bg-pearl px-4 py-3 text-sm text-ocean-900 placeholder:text-ocean-800/35 transition-colors focus:border-ocean-700 focus:outline-none focus:ring-2 focus:ring-ocean-700/15";

const labelClass = "mb-1.5 block text-xs font-medium uppercase tracking-wider text-ocean-800/60";

export function TripPlannerForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickup: "",
    destination: "",
    date: "",
    time: "",
    passengers: "",
    vehicle: "",
    journeyType: "One Way",
    notes: "",
  });

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const message = formatTripEnquiry(form);
    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
  }

  const isValid = form.name.trim() && form.phone.trim() && form.pickup.trim();

  return (
    <form onSubmit={handleSubmit} className="glass rounded-xl2 border border-white/40 p-6 shadow-glass md:p-10">
      <div className="mb-8">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold-700">
          Journey type
        </span>
        <div className="mt-3 flex flex-wrap gap-2">
          {journeyTypes.map((type) => (
            <button
              type="button"
              key={type}
              onClick={() => update("journeyType", type)}
              className={clsx(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                form.journeyType === type
                  ? "bg-ocean-800 text-pearl"
                  : "bg-ocean-900/5 text-ocean-800/70 hover:bg-ocean-900/10"
              )}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">Your name</label>
          <input
            id="name"
            required
            className={fieldClass}
            placeholder="Full name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">Phone / WhatsApp number</label>
          <input
            id="phone"
            required
            type="tel"
            className={fieldClass}
            placeholder="10-digit mobile number"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="pickup">Pickup location</label>
          <input
            id="pickup"
            required
            className={fieldClass}
            placeholder="e.g. Udupi bus stand, your hotel name"
            value={form.pickup}
            onChange={(e) => update("pickup", e.target.value)}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="destination">Destination</label>
          <input
            id="destination"
            className={fieldClass}
            placeholder="e.g. Malpe Beach, Mangaluru Airport"
            value={form.destination}
            onChange={(e) => update("destination", e.target.value)}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="date">Travel date</label>
          <input
            id="date"
            type="date"
            className={fieldClass}
            value={form.date}
            onChange={(e) => update("date", e.target.value)}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="time">Pickup time</label>
          <input
            id="time"
            type="time"
            className={fieldClass}
            value={form.time}
            onChange={(e) => update("time", e.target.value)}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="passengers">Passengers</label>
          <input
            id="passengers"
            type="number"
            min={1}
            className={fieldClass}
            placeholder="Number of people travelling"
            value={form.passengers}
            onChange={(e) => update("passengers", e.target.value)}
          />
        </div>
        <div>
          <label className={labelClass}>Vehicle preference</label>
          <div className="flex flex-wrap gap-2 pt-1">
            {vehicleOptions.map((v) => (
              <button
                type="button"
                key={v}
                onClick={() => update("vehicle", v)}
                className={clsx(
                  "rounded-full px-3.5 py-2 text-xs font-medium transition-colors",
                  form.vehicle === v
                    ? "bg-ocean-800 text-pearl"
                    : "bg-ocean-900/5 text-ocean-800/70 hover:bg-ocean-900/10"
                )}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5">
        <label className={labelClass} htmlFor="notes">Additional requirements</label>
        <textarea
          id="notes"
          rows={4}
          className={fieldClass}
          placeholder="Flight number, number of bags, a route you'd like included, anything else we should know"
          value={form.notes}
          onChange={(e) => update("notes", e.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={!isValid}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-palm-700 px-7 py-4 text-base font-medium text-pearl transition-all hover:bg-palm-900 disabled:cursor-not-allowed disabled:opacity-40 md:w-auto"
      >
        <WhatsAppIcon className="h-4 w-4" />
        Send via WhatsApp
        <ArrowRightIcon className="h-4 w-4" />
      </button>
      <p className="mt-3 text-xs text-ocean-800/50">
        This opens WhatsApp with your trip details filled in, addressed to {siteConfig.name} —
        nothing is sent until you hit send there.
      </p>
    </form>
  );
}
