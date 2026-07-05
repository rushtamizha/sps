'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, MapPin, CheckCircle2, Navigation } from 'lucide-react';

const ROUTES_DATA = [
  {
    id: 1,
    tag: "Most Booked",
    tagColor: "bg-amber-500 text-white",
    title: "Chennai One Way Taxi",
    desc: "Book one way taxi to Chennai with Chennai - Pondi Taxi for reliable intercity travel, airport transfers and business trips.",
    labels: ["Airport Transfers", "Business Travel", "City Rides"],
    img: "/PopularRoutes/Chennai.jpg",
  },
  {
    id: 2,
    tag: "Business Travel",
    tagColor: "bg-blue-600 text-white",
    title: "Bangalore One Way Taxi",
    desc: "Travel to Bangalore with Chennai - Pondi Taxi for comfortable long distance and corporate travel.",
    labels: ["IT Hub", "Corporate Trips", "Night Travel"],
    img: "/PopularRoutes/Bangalore.jpg",
  },
  {
    id: 3,
    tag: "Popular Route",
    tagColor: "bg-emerald-600 text-white",
    title: "Coimbatore One Way Taxi",
    desc: "Reliable one way taxi to Coimbatore with clean vehicles and professional drivers for smooth travel.",
    labels: ["Business Trips", "City Travel", "Industrial Hub"],
    img: "/PopularRoutes/Coimbatore.avif",
  },
  {
    id: 4,
    tag: "Temple Travel",
    tagColor: "bg-orange-600 text-white",
    title: "Madurai One Way Taxi",
    desc: "Book one way taxi to Madurai for temple visits, family travel and comfortable intercity journeys.",
    labels: ["Temple Visits", "Heritage City", "Family Trips"],
    img: "/PopularRoutes/Madurai.webp",
  },
  {
    id: 5,
    tag: "Intercity Travel",
    tagColor: "bg-slate-600 text-white",
    title: "Trichy One Way Taxi",
    desc: "Travel to Trichy with Chennai - Pondi Taxi for temple visits, business trips and city travel.",
    labels: ["Temple Visits", "City Travel", "Family Trips"],
    img: "/PopularRoutes/Trichy.jpg",
  },
  {
    id: 6,
    tag: "Intercity Travel",
    tagColor: "bg-slate-600 text-white",
    title: "Salem One Way Taxi",
    desc: "Book one way taxi to Salem with Chennai - Pondi Taxi for comfortable intercity travel, business trips and temple visits.",
    labels: ["City Travel", "Business Trips", "Temple Visits"],
    img: "/PopularRoutes/Salem.jpg",
  },
  {
    id: 7,
    tag: "Weekend Trip",
    tagColor: "bg-indigo-600 text-white",
    title: "Pondicherry One Way Taxi",
    desc: "Enjoy coastal travel to Pondicherry with one way taxi service and comfortable road trips.",
    labels: ["Beach Roads", "Weekend Trips", "City Travel"],
    img: "/PopularRoutes/Pondicherry.jpg",
  },
  {
    id: 8,
    tag: "Tourism",
    tagColor: "bg-teal-600 text-white",
    title: "Mysore One Way Taxi",
    desc: "Travel to Mysore with Chennai - Pondi Taxi for palace visits and sightseeing trips.",
    labels: ["Palace Tours", "Heritage Travel", "City Trips"],
    img: "/PopularRoutes/Mysore.webp",
  },
  {
    id: 9,
    tag: "Tourism",
    tagColor: "bg-teal-600 text-white",
    title: "Cochin One Way Taxi",
    desc: "Book one way taxi to Cochin for backwater tourism and comfortable travel.",
    labels: ["Backwaters", "City Travel", "Tourism"],
    img: "/PopularRoutes/Cochin.jpg",
  },
  {
    id: 10,
    tag: "Leisure Travel",
    tagColor: "bg-pink-600 text-white",
    title: "Alleppey One Way Taxi",
    desc: "Travel to Alleppey with Chennai - Pondi Taxi for scenic backwater experiences.",
    labels: ["Backwaters", "Leisure Trips", "Tourism"],
    img: "/PopularRoutes/Alleppey.jpg",
  },
  {
    id: 11,
    tag: "Hill Travel",
    tagColor: "bg-sky-600 text-white",
    title: "Ooty One Way Taxi",
    desc: "Enjoy scenic hill travel to Ooty with experienced drivers and safe vehicles.",
    labels: ["Hill Station", "Nature Travel", "Cool Climate"],
    img: "/PopularRoutes/Ooty.avif",
  },
  {
    id: 12,
    tag: "Hill Travel",
    tagColor: "bg-sky-600 text-white",
    title: "Kodaikanal One Way Taxi",
    desc: "Book taxi to Kodaikanal for mountain travel and peaceful hill station trips.",
    labels: ["Lake Views", "Nature Travel", "Tourism"],
    img: "/PopularRoutes/Kodaikanal.webp",
  },
  {
    id: 13,
    tag: "Hill Travel",
    tagColor: "bg-sky-600 text-white",
    title: "Valparai One Way Taxi",
    desc: "Travel to Valparai with Chennai - Pondi Taxi and experience scenic hairpin bends and tea estate roads.",
    labels: ["Hairpin Roads", "Tea Estates", "Nature Travel"],
    img: "/PopularRoutes/valparai.jpg",
  },
  {
    id: 14,
    tag: "Hill Travel",
    tagColor: "bg-sky-600 text-white",
    title: "Yercaud One Way Taxi",
    desc: "Book one way taxi to Yercaud for calm hill station travel and weekend trips.",
    labels: ["Hill Station", "Nature Views", "Tourism"],
    img: "/PopularRoutes/Yercaud.jpg",
  },
  {
    id: 15,
    tag: "Hill Travel",
    tagColor: "bg-sky-600 text-white",
    title: "Munnar One Way Taxi",
    desc: "Enjoy scenic travel to Munnar with Chennai - Pondi Taxi through tea plantations.",
    labels: ["Tea Estates", "Hill Views", "Leisure Travel"],
    img: "/PopularRoutes/Munnar.jpg",
  },
  {
    id: 16,
    tag: "Most Booked",
    tagColor: "bg-amber-500 text-white",
    title: "Tirupati One Way Taxi",
    desc: "Book taxi to Tirupati for temple darshan and spiritual travel with family.",
    labels: ["Temple Darshan", "Spiritual Travel", "Family Trips"],
    img: "/PopularRoutes/Tirupati.jpg",
  },
  {
    id: 17,
    tag: "Pilgrimage",
    tagColor: "bg-rose-600 text-white",
    title: "Rameshwaram One Way Taxi",
    desc: "Travel to Rameshwaram with Chennai - Pondi Taxi for temple visits and coastal journeys.",
    labels: ["Temple Travel", "Coastal Roads", "Spiritual Travel"],
    img: "/PopularRoutes/Rameshwaram.webp",
  },
  {
    id: 18,
    tag: "Pilgrimage",
    tagColor: "bg-rose-600 text-white",
    title: "Tiruvannamalai One Way Taxi",
    desc: "Book one way taxi to Tiruvannamalai for Girivalam and temple visits.",
    labels: ["Temple Visits", "Girivalam", "Spiritual Travel"],
    img: "/PopularRoutes/Tiruvannamalai.jpg",
  },
  {
    id: 19,
    tag: "Pilgrimage",
    tagColor: "bg-rose-600 text-white",
    title: "Velankanni One Way Taxi",
    desc: "Travel to Velankanni for church visits and pilgrimage trips.",
    labels: ["Church Visits", "Pilgrimage Travel", "Family Trips"],
    img: "/PopularRoutes/Velankanni.jpg",
  },
  {
    id: 20,
    tag: "Heritage Travel",
    tagColor: "bg-purple-600 text-white",
    title: "Thanjavur One Way Taxi",
    desc: "Travel to Thanjavur with Chennai - Pondi Taxi for temple visits, heritage travel and cultural sightseeing.",
    labels: ["Temple Tourism", "Heritage Sites", "Cultural Travel"],
    img: "/PopularRoutes/Thanjavur.jpg",
  },
  {
    id: 21,
    tag: "Spiritual Travel",
    tagColor: "bg-violet-600 text-white",
    title: "Kanyakumari One Way Taxi",
    desc: "Enjoy long distance travel to Kanyakumari with scenic coastal views.",
    labels: ["Sunrise Views", "Coastal Drive", "Tourism"],
    img: "/PopularRoutes/Kanyakumari.avif",
  },
];

export default function PopularRoutes() {
  return (
    <section className="w-full bg-white py-10 px-4 md:px-8 lg:px-16 text-gray-800">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER AREA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 bg-blue-50 text-blue-600 font-bold text-xs uppercase px-3 py-1.5 rounded-full w-max ">
              <Navigation className="w-3.5 h-3.5" />
              Popular Outstation Routes
            </div>
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 tracking-tight ">
              Explore Frequently Booked <br />
              <span className="text-blue-600">Of Taxi Routes</span>
            </h2>
            <p className="text-gray-500 text-xs   md:text-sm font-medium">
              Travel across Tamil Nadu and South India with safe drivers, clean vehicles, and complete transparent pricing structure.
            </p>
          </div>

        </div>

        {/* MAPPED CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROUTES_DATA.map((route) => (
            <motion.div
              key={route.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (route.id % 3) * 0.1 }}
              className="bg-white rounded-3xl border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 flex flex-col h-full overflow-hidden relative group"
            >
              
              {/* Image & Tag Layout */}
              <div className="w-full h-48 bg-gray-200 relative overflow-hidden">
                <span className={`absolute top-4 left-4 z-10 text-[10px] font-semibold  px-2.5 py-1 rounded-lg uppercase shadow-sm ${route.tagColor}`}>
                  {route.tag}
                </span>
                <img 
                  src={route.img} 
                  alt={route.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
              </div>

              {/* Main Contents Panel */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                  <h3 className="text-xl font-semibold text-gray-900  group-hover:text-blue-600 transition-colors">
                    {route.title}
                  </h3>
                </div>

                <p className="text-gray-500 text-xs md:text-sm font-medium leading-relaxed mb-4 flex-grow">
                  {route.desc}
                </p>

                {/* Sub-label Badges Row */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {route.labels.map((lbl, idx) => (
                    <span key={idx} className="bg-gray-50 border border-gray-100 text-gray-600 text-[10px] font-medium px-2.5 py-1 rounded-md">
                      {lbl}
                    </span>
                  ))}
                </div>

                <hr className="border-gray-100 mb-4" />

                {/* Status indicator line */}
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 mb-4">
                  <CheckCircle2 className="w-3.5 h-3.5 fill-current text-white" />
                  <span>Available for booking</span>
                </div>

                {/* Interactive Action Layout Panel */}
                <div className="grid grid-cols-2 gap-2.5 mt-auto">
                  <a
                    href="https://wa.me/918825555154"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 bg-[#25d366] text-white font-bold py-3 px-2 rounded-xl text-[11px] uppercase  hover:bg-[#20ba5a] transition text-center shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" /> WA Fare
                  </a>
                  <a
                    href="tel:+918825555154"
                    className="flex items-center justify-center gap-1.5 bg-blue-600 text-white font-bold py-3 px-2 rounded-xl text-[11px] uppercase  hover:bg-blue-700 transition text-center shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5 fill-current" /> Call Now
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}