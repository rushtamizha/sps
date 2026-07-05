'use client';

import React, { useState } from 'react';
import { Shield, Scale, Clock, AlertTriangle, CheckCircle, FileText, Phone, MessageSquare } from 'lucide-react';

const SECTIONS = [
  { id: 'introduction', title: '1. Introduction & Overview', icon: FileText },
  { id: 'booking', title: '2. Booking & Confirmation', icon: CheckCircle },
  { id: 'pricing', title: '3. Pricing, Fares & Tolls', icon: Scale },
  { id: 'cancellation', title: '4. Cancellation & Refund Policy', icon: Clock },
  { id: 'responsibilities', title: '5. Passenger Responsibilities', icon: Shield },
  { id: 'disclaimer', title: '6. Disclaimers & Limitations', icon: AlertTriangle },
];

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState('introduction');

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for floating navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-800 pt-32 pb-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* HERO TITLE HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="flex items-center justify-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full w-max mx-auto">
            <Scale className="w-3.5 h-3.5" />
            Legal & Policy Framework
          </div>
          <h1 className="text-2xl md:text-4xl font-semibold text-gray-900 ">
            Terms & Conditions
          </h1>
          <p className="text-gray-500 text-sm md:text-base font-medium">
            Last Updated: July 2026 • Please read these terms carefully before booking your ride.
          </p>
        </div>

        {/* MAIN LAYOUT SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* STICKY SIDEBAR NAVIGATION (DESKTOP) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 bg-white border border-gray-100 rounded-3xl p-6 shadow-xs">
            <h3 className="text-xs font-semibold uppercase text-gray-400  mb-4 px-2">
              Table of Contents
            </h3>
            <nav className="space-y-1">
              {SECTIONS.map((sec) => {
                const Icon = sec.icon;
                return (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-left transition-all ${
                      activeSection === sec.id
                        ? 'bg-blue-600 text-white shadow-xs shadow-blue-600/10'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{sec.title}</span>
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* DYNAMIC DOCUMENT CONTENT PANEL */}
          <div className="lg:col-span-8 space-y-8 bg-white border border-gray-100 rounded-3xl p-6 md:p-10 shadow-xs">
            
            {/* INTRODUCTION */}
            <section id="introduction" className="space-y-3 scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 flex items-center gap-2.5 pb-2 border-b border-gray-100">
                <FileText className="w-5 h-5 text-blue-600" />
                1. Introduction & Overview
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Welcome to Chennai - Pondi Taxi. By accessing our platform, utilizing our online booking tools, or using our phone/WhatsApp booking channels, you agree to comply with and be bound by the following terms and conditions.
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                These terms govern all intercity, one-way, round-trip, and airport transfer transit services managed or arranged by Chennai - Pondi Taxi across Tamil Nadu, Karnataka, Kerala, and surrounding regions.
              </p>
            </section>

            {/* BOOKING */}
            <section id="booking" className="space-y-3 scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 flex items-center gap-2.5 pb-2 border-b border-gray-100">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                2. Booking & Confirmation
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                All taxi booking requests made via our website widgets, direct customer care line, or official WhatsApp channels are subject to driver and vehicle availability at the scheduled point of departure.
              </p>
              <ul className="list-disc pl-5 text-gray-600 text-sm md:text-base space-y-1.5 pt-1">
                <li>Bookings are confirmed only after a formal booking confirmation message or digital receipt is transmitted to your registered mobile number or email address.</li>
                <li>The passenger must provide accurate pickup addresses, destination details, contact information, and desired departure timings. Chennai - Pondi Taxi is not responsible for delayed execution resulting from inaccurate input data.</li>
              </ul>
            </section>

            {/* PRICING */}
            <section id="pricing" className="space-y-3 scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 flex items-center gap-2.5 pb-2 border-b border-gray-100">
                <Scale className="w-5 h-5 text-blue-600" />
                3. Pricing, Fares & Tolls
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                We take immense pride in maintaining fully transparent pricing models without hidden adjustments or unexpected additions:
              </p>
              <ul className="list-disc pl-5 text-gray-600 text-sm md:text-base space-y-1.5">
                <li><strong>One-Way Fares:</strong> Calculated based on standard fixed rate per kilometer subject to a strict minimum distance mandate (e.g., 130 KM base rate limits).</li>
                <li><strong>Round-Trip Fares:</strong> Subject to a minimum running average calculation of 250 KM per calendar day.</li>
                <li><strong>Exclusions:</strong> Unless explicitly noted inside a specific premium itemized package, state permit charges, parking assessments, and national highway toll booth entries are to be paid dynamically by the passenger.</li>
                <li><strong>Driver Bata:</strong> Standard flat daily driver allowances (Driver Bata) apply dynamically based on the trip tier choice (e.g., ₹400 for One Way, ₹500/Day for standard Round Trip variations).</li>
              </ul>
            </section>

            {/* CANCELLATION */}
            <section id="cancellation" className="space-y-3 scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 flex items-center gap-2.5 pb-2 border-b border-gray-100">
                <Clock className="w-5 h-5 text-blue-600" />
                4. Cancellation & Refund Policy
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                We understand that travel itineraries can change unexpectedly. Cancellations can be performed seamlessly by coordinating directly with our customer support desks:
              </p>
              <ul className="list-disc pl-5 text-gray-600 text-sm md:text-base space-y-1.5">
                <li>No cancellation fees will apply if the cancellation request is successfully submitted at least 4 hours before the scheduled pickup time window.</li>
                <li>Cancellations requested inside the 4-hour window may attract a nominal dispatch modification charge to offset losses incurred by the assigned vehicle fleet operator.</li>
              </ul>
            </section>

            {/* RESPONSIBILITIES */}
            <section id="responsibilities" className="space-y-3 scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 flex items-center gap-2.5 pb-2 border-b border-gray-100">
                <Shield className="w-5 h-5 text-blue-600" />
                5. Passenger Responsibilities
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                To guarantee optimal safety levels for both our professional driving partners and fellow occupants, passengers are expected to adhere strictly to the following parameters:
              </p>
              <ul className="list-disc pl-5 text-gray-600 text-sm md:text-base space-y-1.5">
                <li>Smoking, consumption of alcoholic beverages, or handling illicit hazardous substances inside any vehicle in our active fleet is strictly prohibited.</li>
                <li>Luggage capacities must correspond comfortably with the chosen vehicle configuration limits (e.g., standard allowances for sedans vs large storage profiles allocated to SUV/Innova tiers).</li>
              </ul>
            </section>

            {/* DISCLAIMER */}
            <section id="disclaimer" className="space-y-3 scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 flex items-center gap-2.5 pb-2 border-b border-gray-100">
                <AlertTriangle className="w-5 h-5 text-blue-600" />
                6. Disclaimers & Limitations
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                While our drivers make every effort to arrive ahead of your scheduled time, Chennai - Pondi Taxi is not legally liable for delayed arrivals caused by unavoidable external forces. These include severe regional weather events, sudden highway gridlocks, force majeure incidents, or vehicle mechanical breakdowns en route.
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                In the rare event of a mechanical failure during a trip, our central support grid will prioritize dispatching a replacement fleet alternative as quickly as possible to ensure minimal disruption to your travel itinerary.
              </p>
            </section>

          </div>
        </div>

        {/* BOTTOM QUICK RESOLUTION ACTION BAR */}
        <div className="mt-12 bg-gray-900 rounded-[2rem] p-8 text-center text-white relative overflow-hidden shadow-xs">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-transparent to-transparent pointer-events-none" />
          <h3 className="text-xl md:text-2xl font-semibold  mb-2">
            Have Questions Regarding Our Policies?
          </h3>
          <p className="text-gray-400 text-xs md:text-sm max-w-xl mx-auto mb-6 font-medium">
            Our legal compliance team and booking managers are available 24 hours a day to clear up inquiries regarding fares, zones, or booking guidelines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+918825555154"
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl text-xs uppercase  transition-colors w-full sm:w-auto shadow-md"
            >
              <Phone className="w-4 h-4 fill-current" />
              Call Support Line
            </a>
            <a
              href="https://wa.me/918825555154"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20ba5a] text-white font-bold py-3 px-6 rounded-xl text-xs uppercase  transition-colors w-full sm:w-auto shadow-md"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              WhatsApp Help Desk
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}