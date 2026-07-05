"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DollarSign,
  CheckCircle,
  Phone,
  MessageSquare,
  ShieldCheck,
  FileText,
  AlertCircle,
  HelpCircle,
} from "lucide-react";

const PRICING_TIERS = {
  "one-way": [
    {
      name: "Swift",
      price: "15",
      allowance: "₹400",
      img: "/CardCars/swift-dzire-one-way-taxi-pondicherry-to-chennai.webp",
    },
    {
      name: "Etios",
      price: "16",
      allowance: "₹400",
      img: "/CardCars/toyota-etios-airport-taxi-pondicherry-to-chennai.webp",
    },
    {
      name: "Innova",
      price: "20",
      allowance: "₹400",
      img: "/CardCars/toyota-innova-7-seater-taxi-pondicherry-to-chennai.webp",
    },
    {
      name: "Ertiga",
      price: "21",
      allowance: "₹500",
      img: "/CardCars/maruti-ertiga-6-plus-1-family-taxi-pondicherry-to-chennai.webp",
    },
    {
      name: "Innova Crysta",
      price: "21",
      allowance: "₹500",
      img: "/CardCars/toyota-innova-crysta-airport-taxi-pondicherry-to-chennai.webp",
    },
    {
      name: "Innova Hycross",
      price: "25",
      allowance: "₹500",
      img: "/CardCars/innova-hycross-premium-taxi-pondicherry-to-chennai.webp",
    },{
      name: "Tempo Traveller",
      price: "25",
      allowance: "₹500",
      img: "/CardCars/tempo-traveller-12-seater-pondicherry-to-chennai-taxi.webp",
    },
  ],
  "round-trip": [
     {
      name: "Swift",
      price: "15",
      allowance: "₹400",
      img: "/CardCars/swift-dzire-one-way-taxi-pondicherry-to-chennai.webp",
    },
    {
      name: "Etios",
      price: "16",
      allowance: "₹400",
      img: "/CardCars/toyota-etios-airport-taxi-pondicherry-to-chennai.webp",
    },
    {
      name: "Innova",
      price: "20",
      allowance: "₹400",
      img: "/CardCars/toyota-innova-7-seater-taxi-pondicherry-to-chennai.webp",
    },
    {
      name: "Ertiga",
      price: "21",
      allowance: "₹500",
      img: "/CardCars/maruti-ertiga-6-plus-1-family-taxi-pondicherry-to-chennai.webp",
    },
    {
      name: "Innova Crysta",
      price: "21",
      allowance: "₹500",
      img: "/CardCars/toyota-innova-crysta-airport-taxi-pondicherry-to-chennai.webp",
    },
    {
      name: "Innova Hycross",
      price: "25",
      allowance: "₹500",
      img: "/CardCars/innova-hycross-premium-taxi-pondicherry-to-chennai.webp",
    },{
      name: "Tempo Traveller",
      price: "25",
      allowance: "₹500",
      img: "/CardCars/tempo-traveller-12-seater-pondicherry-to-chennai-taxi.webp",
    }, ]
};

const FEATURES = [
  "Transparent Pricing",
  "24/7 Booking Support",
  "Trusted Intercity Service",
  "South India Coverage",
];

export default function FarePricing() {
  const [activeTab, setActiveTab] = useState("one-way"); // 'one-way' or 'round-trip'

  return (
    <section className="w-full bg-white py-20 px-4 md:px-8 lg:px-16 text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="flex items-center justify-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full w-max mx-auto">
            <DollarSign className="w-3.5 h-3.5" />
            Chennai - Pondi Taxi Fare
          </div>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 ">
            One Way & Intercity Pricing
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed">
            Serving all cities across Tamil Nadu including Chennai, Coimbatore,
            Madurai, Salem, and Trichy. Check transparent rates for your next
            trip.
          </p>
        </div>

        {/* TOP COMFORT CHIPS */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-10">
          {FEATURES.map((feat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 bg-white border border-gray-100 rounded-full px-4 py-2 text-xs md:text-sm font-semibold text-gray-700 shadow-xs"
            >
              <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* TRIP TYPE INTERACTIVE CONTROLLER */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-50 p-1.5 rounded-2xl flex items-center w-full max-w-xs ">
            <button
              onClick={() => setActiveTab("one-way")}
              className={`flex-1 text-center py-3 rounded-xl text-xs font-bold uppercase  transition-all ${
                activeTab === "one-way"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              One Way
            </button>
            <button
              onClick={() => setActiveTab("round-trip")}
              className={`flex-1 text-center py-3 rounded-xl text-xs font-bold uppercase  transition-all ${
                activeTab === "round-trip"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Round Trip
            </button>
          </div>
        </div>

        {/* FARE CARDS GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-16">
          <AnimatePresence mode="wait">
            {PRICING_TIERS[activeTab].map((car, idx) => (
              <motion.div
                key={`${activeTab}-${car.name}`}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.25, delay: idx * 0.04 }}
                className="w-full flex items-center justify-between gap-4 bg-white border border-gray-50 rounded-2xl p-4 md:p-5 transition-all  group relative overflow-hidden shadow-xs hover:shadow-sm"
              >
                {/* LEFT & CENTER COMBINED CONTENT */}
                <div className="flex items-center gap-4 md:gap-6">
                  {/* Vehicle Vector Render Box */}
                  <div className="h-12 w-30 md:h-16 md:w-28 flex items-center justify-center shrink-0 transform group-hover:scale-105 transition-transform duration-300 rounded-2xl">
                    <img
                      src={car.img}
                      alt={car.name}
                      className="max-h-full w-full object-cover drop-shadow-md rounded-xl"
                    />
                  </div>

                  {/* Vehicle Information Text */}
                  <div className="text-left space-y-1">
                    <h3 className="text-base md:text-lg font-bold text-blue-600 tracking-wide">
                      {car.name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-400 font-medium">
                      Driver allowance {car.allowance}
                    </p>
                  </div>
                </div>

                {/* RIGHT CONTENT: PRICING SIDE BLOCK */}
                <div className="text-right shrink-0 flex flex-col items-end justify-center">
                  <div className="text-2xl md:text-3xl font-extrabold text-[#3b82f6]  leading-none">
                    ₹{car.price}
                  </div>
                  <span className="text-[10px] md:text-xs font-bold text-gray-400 mt-1 uppercase ">
                    / KM
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* LEGAL TERMS AND GUIDANCE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* One Way Terms Card */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-xs space-y-4">
            <h4 className="text-sm font-semibold uppercase text-gray-900  flex items-center gap-2 border-b border-gray-50 pb-2">
              <FileText className="w-4 h-4 text-blue-600" />
              One Way Taxi Terms
            </h4>
            <ul className="text-xs md:text-sm text-gray-500 font-medium space-y-2.5">
              <li className="flex items-start gap-2">
                ✔{" "}
                <span>
                  Minimum billing distance: <strong>130 KM</strong> for one way
                  taxi travel
                </span>
              </li>
              <li className="flex items-start gap-2">
                ✔{" "}
                <span>
                  Driver allowance: <strong>₹400</strong> per trip
                </span>
              </li>
              <li className="flex items-start gap-2">
                ✔ <span>Waiting charges may apply after 30 minutes</span>
              </li>
              <li className="flex items-start gap-2">
                ✔ <span>Toll and parking charges are additional</span>
              </li>
              <li className="flex items-start gap-2">
                ✔{" "}
                <span>
                  Ideal for intercity travel and airport drop services
                </span>
              </li>
            </ul>
          </div>

          {/* Round Trip Terms Card */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-xs space-y-4">
            <h4 className="text-sm font-semibold uppercase text-gray-900  flex items-center gap-2 border-b border-gray-50 pb-2">
              <FileText className="w-4 h-4 text-blue-600" />
              Round Trip Taxi Terms
            </h4>
            <ul className="text-xs md:text-sm text-gray-500 font-medium space-y-2.5">
              <li className="flex items-start gap-2">
                ✔{" "}
                <span>
                  Minimum billing: <strong>250 KM per day</strong> for round
                  trip bookings
                </span>
              </li>
              <li className="flex items-start gap-2">
                ✔{" "}
                <span>
                  Driver allowance: <strong>₹500 per day</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                ✔{" "}
                <span>Distance calculated from pickup to drop and return</span>
              </li>
              <li className="flex items-start gap-2">
                ✔{" "}
                <span>
                  Additional charges apply for extra usage beyond KM limit
                </span>
              </li>
              <li className="flex items-start gap-2">
                ✔{" "}
                <span>Suitable for outstation travel and multi-day trips</span>
              </li>
            </ul>
          </div>

          {/* Important Travel Notes Card */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-xs space-y-4">
            <h4 className="text-sm font-semibold uppercase text-gray-900  flex items-center gap-2 border-b border-gray-50 pb-2">
              <AlertCircle className="w-4 h-4 text-amber-500" />
              Important Travel Notes
            </h4>
            <ul className="text-xs md:text-sm text-gray-500 font-medium space-y-2.5">
              <li className="flex items-start gap-2">
                ℹ{" "}
                <span>
                  Fare shown is an estimated amount and may vary based on route
                </span>
              </li>
              <li className="flex items-start gap-2">
                ℹ{" "}
                <span>
                  Toll, parking and interstate permit charges are extra
                </span>
              </li>
              <li className="flex items-start gap-2">
                ℹ{" "}
                <span>
                  Night driving charges may apply for late night travel
                </span>
              </li>
              <li className="flex items-start gap-2">
                ℹ{" "}
                <span>
                  All bookings are subject to availability of vehicles
                </span>
              </li>
              <li className="flex items-start gap-2">
                ℹ{" "}
                <span>
                  Customers will receive confirmation via call or WhatsApp
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM REDIRECT CLOSURE BLOCK */}
        <div className="bg-gray-900 rounded-[2.5rem] p-8 md:p-12 text-center text-white relative overflow-hidden shadow-xs">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-transparent to-transparent pointer-events-none" />

          <p className="text-gray-300 text-sm md:text-base font-medium max-w-3xl mx-auto mb-8 leading-relaxed">
            Chennai - Pondi Taxi offers reliable one way taxi and outstation cab
            services across Tamil Nadu and South India — including Chennai,
            Coimbatore, Madurai, Salem, and Trichy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+918825555154"
              className="flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl text-xs uppercase  transition-colors w-full sm:w-auto shadow-md"
            >
              <Phone className="w-4 h-4 fill-current" />
              Call Now — Get Fare
            </a>
            <a
              href="https://wa.me/918825555154"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2.5 bg-[#25d366] hover:bg-[#20ba5a] text-white font-bold py-3.5 px-6 rounded-xl text-xs uppercase  transition-colors w-full sm:w-auto shadow-md"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              Book via WhatsApp
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-800 flex items-center justify-center gap-6 text-[11px] font-bold text-gray-500 uppercase tracking-widest flex-wrap">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-500" /> Transparent
              pricing
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Verified
              drivers
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-500" /> 24×7
              support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
