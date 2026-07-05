

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Users, 
  Building2, 
  Award, 
  MapPin, 
  Clock, 
  HeartHandshake, 
  Phone, 
  MessageSquare,
  ThumbsUp
} from 'lucide-react';

const CORE_VALUES = [
  {
    title: 'Safety First',
    desc: 'Every driver undergoes strict verification. Vehicles are regularly inspected to guarantee a secure environment for long distance travel.',
    icon: ShieldCheck,
    color: 'text-blue-600 bg-blue-50'
  },
  {
    title: 'Absolute Transparency',
    desc: 'No hidden adjustments, unannounced costs, or surprise tolls. What you view on your estimated quote is what you pay.',
    icon: ThumbsUp,
    color: 'text-emerald-600 bg-emerald-50'
  },
  {
    title: '24/7 Availability',
    desc: 'Whether it is an early morning airport run or a midnight intercity departure, our booking grid operates round-the-clock.',
    icon: Clock,
    color: 'text-purple-600 bg-purple-50'
  },
  {
    title: 'Customer First Mandate',
    desc: 'We tailor road itineraries around passenger schedules, offering clean cars and seamless roadside support grids.',
    icon: HeartHandshake,
    color: 'text-amber-600 bg-amber-50'
  }
];

const STATS = [
  { metric: '500,000+', label: 'Kilometers Covered' },
  { metric: '25,000+', label: 'Happy Passengers' },
  { metric: '150+', label: 'Verified Drivers' },
  { metric: '21+', label: 'South India Hubs' }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 pt-32 pb-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HERO TITLE BLOCK */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="flex items-center justify-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full w-max mx-auto">
            <Building2 className="w-3.5 h-3.5" />
            Our Corporate Journey
          </div>
          <h1 className="text-2xl md:text-4xl font-semibold text-gray-900  leading-tight">
            Redefining Premium <br />
            <span className="text-blue-600">Intercity Travel</span> Experience
          </h1>
          <p className="text-gray-500 text-sm md:text-base font-medium max-w-2xl mx-auto">
            Chennai - Pondi Taxi was established with a singular objective: to eliminate hidden costs and deliver dependable transit across South India.
          </p>
        </div>

        {/* BRAND SUMMARY STORY SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-10">
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 ">
              Bridging the Gap Between Comfort & Fixed Pricing Models
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              For years, outstation travelers faced ambiguous pricing setups, dynamic surging, and poor vehicle upkeep. Chennai - Pondi Taxi entered the market to reshape this landscape by introducing certified one-way premium fares and structured round-trip solutions.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Today, our operating network effortlessly links primary sectors across <span className="font-bold text-gray-900">Tamil Nadu, Karnataka, and Kerala</span>. We accommodate local airport runs, cultural heritage tours, and corporate commutes with tailored care.
            </p>
            
            <div className="flex items-start gap-3 bg-white p-4 border border-gray-100 rounded-2xl shadow-sm max-w-lg">
              <Award className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div className="text-xs md:text-sm text-gray-500 font-medium">
                <span className="font-bold text-gray-900 block mb-0.5">Recognized Fleet Standards</span>
                Every vehicle in our collection features rigorous safety checks and clean interiors to guarantee reliable highway performance.
              </div>
            </div>
          </div>

          {/* VISUAL IMAGE CARD FRAME */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-transparent rounded-[2.5rem] transform -rotate-3 scale-102 -z-10" />
            <div className="w-full h-70 md:h-[350px] rounded-[2rem] overflow-hidden bg-gray-200 border border-white shadow-xs relative">
              <img 
                src="/taxi-hero.png" 
                alt="Our Fleet Experience" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-gray-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Main Base</span>
                  <span className="text-sm font-extrabold text-gray-900 flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-blue-600" /> Tamil Nadu & South India
                  </span>
                </div>
                <Users className="w-8 h-8 text-blue-600 opacity-20" />
              </div>
            </div>
          </div>
        </div>

        {/* METRICS COUNT Grid */}
        <div className="bg-gray-900 text-white rounded-[2.5rem] p-8 md:p-12 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center shadow-xs mb-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-transparent pointer-events-none" />
          {STATS.map((stat, i) => (
            <div key={i} className="space-y-1">
              <div className="text-3xl md:text-5xl font-semibold text-blue-500 ">{stat.metric}</div>
              <div className="text-xs md:text-sm text-gray-400 font-semibold uppercase ">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CORE VALUES VIEW SECTION */}
        <div className="mb-10">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="text-2xl md:text-4xl font-semibold text-gray-900 ">The Principles That Guide Us</h3>
            <p className="text-gray-500 text-sm font-medium mt-2">How we ensure consistency across thousands of bookings every month.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CORE_VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-xs flex flex-col sm:flex-row gap-5 items-start hover:shadow-sm transition-shadow">
                  <div className={`p-3.5 rounded-2xl shrink-0 ${val.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-lg font-bold text-gray-900">{val.title}</h4>
                    <p className="text-gray-500 text-xs md:text-sm font-medium leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>


        <div className="bg-gray-900 text-white rounded-[2.5rem] p-8 md:p-12 shadow-xs text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-transparent to-transparent pointer-events-none" />
                  <h3 className="text-2xl md:text-4xl font-semibold ">
                    Need Travel Guidance or Immediate Booking?
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm max-w-xl mx-auto mt-3 mb-8 font-medium">
                    Connect instantly with our dispatch team. Get verified fare estimates, vehicle class options, and quick booking confirmations with no advance structural deposits.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                      href="tel:+918825555154"
                      className="flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl text-xs uppercase  transition-all w-full sm:w-auto shadow-md active:scale-98"
                    >
                      <Phone className="w-4 h-4 fill-current" />
                      Call Support Desk
                    </a>
                    <a
                      href="https://wa.me/918825555154"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2.5 bg-[#25d366] hover:bg-[#20ba5a] text-white font-bold py-3.5 px-6 rounded-xl text-xs uppercase  transition-all w-full sm:w-auto shadow-md active:scale-98"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      WhatsApp Booking Support
                    </a>
                  </div>
                </div>

      </div>
    </main>
  );
}