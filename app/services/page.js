'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  UserCheck, 
  Car, 
  PhoneCall, 
  ShieldCheck, 
  MapPin, 
  MessageSquare, 
  Phone,
  CheckCircle2
} from 'lucide-react';

const SERVICES_DATA = [
  {
    title: '24×7 One Way Taxi Service',
    desc: 'Chennai - Pondi Taxi offers round-the-clock one way taxi and intercity cab services for flexible travel across Tamil Nadu and South India.',
    icon: Clock,
    color: 'text-blue-600 bg-blue-50 border-blue-100',
  },
  {
    title: 'Professional Drivers',
    desc: 'Travel with experienced drivers trained for long-distance routes, ensuring safe and smooth intercity journeys.',
    icon: UserCheck,
    color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
  },
  {
    title: 'Comfortable AC Vehicles',
    desc: 'Choose from clean and well-maintained sedan and SUV cars designed for comfortable highway and outstation travel.',
    icon: Car,
    color: 'text-purple-600 bg-purple-50 border-purple-100',
  },
  {
    title: 'Easy Booking Support',
    desc: 'Get quick booking assistance via call or WhatsApp with clear fare details and travel guidance.',
    icon: PhoneCall,
    color: 'text-amber-600 bg-amber-50 border-amber-100',
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 pt-32 pb-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HERO HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="flex items-center justify-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full w-max mx-auto">
            <ShieldCheck className="w-3.5 h-3.5" />
            Our Core Competencies
          </div>
          <h1 className="text-2xl md:text-4xl font-semibold text-gray-900  leading-tight">
            Why Choose <br />
            <span className="text-blue-600">Chennai - Pondi Taxi</span>
          </h1>
          <p className="text-gray-500 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            Chennai - Pondi Taxi provides reliable one way taxi, intercity cab, and airport transfer services with professional drivers and comfortable vehicles for a smooth travel experience.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {SERVICES_DATA.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white border border-gray-100/80 rounded-3xl p-6 md:p-8 shadow-xs hover:shadow-sm transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start group"
              >
                {/* ICON BOX */}
                <div className={`p-4 rounded-2xl shrink-0 border transition-transform duration-300 group-hover:scale-105 ${service.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                
                {/* CONTENT AREA */}
                <div className="space-y-2">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900  group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed">
                    {service.desc}
                  </p>
                  
                  {/* METRIC SUB-LABEL BADGE */}
                  <div className="pt-2 flex items-center gap-1.5 text-[11px] font-bold text-emerald-600">
                    <CheckCircle2 className="w-3.5 h-3.5 fill-current text-white" />
                    <span>Active across South India</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* INTEGRATED BRAND PROMISE SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-12 shadow-sm mb-10">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 ">
              Streamlining Long-Distance Highway Commutes
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Our travel ecosystem is built uniquely around outstation transit layout demands. By focusing on professional long-route highway navigation training and strict sanitization routines, we provide a reliable alternative to unpredictable dynamic fare apps and crowded public transits.
            </p>
            
            {/* Quick list specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs md:text-sm font-bold text-gray-700">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>Intercity Dropping Focus</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>Transparent Point-to-Point Fares</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 h-64 rounded-2xl overflow-hidden bg-gray-100 border border-gray-100 relative shadow-inner">
            <img 
              src="/taxi-hero.png" 
              alt="Chennai - Pondi Taxi Ride Experience" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* BOTTOM CALL TO ACTION BLOCK */}
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