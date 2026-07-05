'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, Mail, MapPin, ShieldCheck, HelpCircle, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="w-full bg-white py-10 px-4 md:px-8 lg:px-16 text-gray-800 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* GRID LAYOUT SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
          
          {/* LEFT SIDE CONTENT PANEL */}


          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider bg-blue-50 px-3.5 py-1.5 rounded-full w-max">
              <HelpCircle className="w-3.5 h-3.5" />
              Contact Chennai - Pondi Taxi
            </div>
             <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 tracking-tight ">
              Book Your One Way Taxi <br />
              <span className="text-blue-600">Of With Instant Support</span>
            </h2>
            
            <p className="text-gray-600 text-sm md:text-base font-medium  max-w-xl">
              Get instant taxi booking support for one way and intercity travel across Tamil Nadu and South India. 
              Contact Chennai - Pondi Taxi for fare details, route enquiry, and quick booking assistance.
            </p>

            <div className="pt-4">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
                Get in Touch
              </div>
              
              {/* CONTACT UTILITY CARDS GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Call Card */}
                <a 
                  href="tel:+918825555154" 
                  className="p-5 border border-gray-100 hover:bg-blue-50 rounded-2xl flex items-start gap-4 hover:border-blue-500 bg-white  transition-all group shadow-xs"
                >
                  <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase ">Call Support</h4>
                    <p className="text-base font-extrabold text-gray-900 mt-0.5 group-hover:text-blue-600 transition-colors">
                      +91 8825555154
                    </p>
                  </div>
                </a>

                {/* WhatsApp Card */}
                <a 
                  href="https://wa.me/918825555154" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-5 border border-gray-100 hover:bg-green-50 rounded-2xl flex items-start gap-4 hover:border-[#25d366] bg-white transition-all group shadow-xs"
                >
                  <div className="p-3 bg-emerald-50 rounded-xl text-[#25d366] group-hover:bg-[#25d366] group-hover:text-white transition-colors">
                    <MessageSquare className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase ">WhatsApp Booking</h4>
                    <p className="text-base font-extrabold text-gray-900 mt-0.5 group-hover:text-[#25d366] transition-colors">
                      Instant Response
                    </p>
                  </div>
                </a>

                {/* Email Card */}
                <a 
                  href="mailto:a.karthikmmv@gmail.com" 
                  className="p-5 border border-gray-100 hover:bg-orange-50 rounded-2xl flex items-start gap-4 hover:border-orange-500 bg-white transition-all group shadow-xs sm:col-span-2"
                >
                  <div className="p-3 bg-orange-50 rounded-xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase ">Email Support</h4>
                    <p className="text-sm md:text-base font-extrabold text-gray-900 mt-0.5 group-hover:text-orange-600 transition-colors truncate">
                      a.karthikmmv@gmail.com
                    </p>
                  </div>
                </a>

                {/* Service Area Card */}
                <div className="p-5 border border-gray-100 bg-gray-50/50 rounded-2xl flex items-start gap-4 sm:col-span-2 shadow-xs">
                  <div className="p-3 bg-violet-50 rounded-xl text-violet-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase ">Service Area</h4>
                    <p className="text-sm md:text-base font-extrabold text-gray-900 mt-0.5">
                      Tamil Nadu & South India
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT SIDE CTA REGISTRATION BLOCK */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-gray-100 w-full max-w-[520px] rounded-3xl p-6 md:p-8 flex flex-col shadow-xs relative overflow-hidden"
            >
              {/* Geometric clean background design factor */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none -z-10" />
              
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-900 ">
                  Book Taxi Instantly
                </h3>
                <p className="text-gray-500 text-xs md:text-sm font-medium mt-1.5 leading-relaxed">
                  Contact us now for one way taxi booking, fare details and quick confirmation. Our team is available to assist you anytime.
                </p>
              </div>

              {/* ACTION CALL DRIVERS INTERACTION */}
              <div className="space-y-3.5 w-full">
                <a
                  href="https://wa.me/918825555154"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 bg-green-600 hover:bg-[#20ba5a] text-white font-extrabold py-4 px-6 rounded-2xl text-sm uppercase  shadow-lg transition text-center"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  Get Fare on WhatsApp
                </a>

                <a
                  href="tel:+918825555154"
                  className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-4 px-6 rounded-2xl text-sm uppercase  shadow-lg transition text-center"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  Call Now
                </a>
              </div>

              {/* FOOT NOTE INDICATOR LABELS */}
              <div className="mt-8 pt-6 border-t border-gray-200/60 flex items-center justify-center gap-1.5 text-[11px] font-bold text-gray-400 uppercase  text-center flex-wrap">
                <span>Instant response</span>
                <span className="text-gray-200">•</span>
                <span>Transparent pricing</span>
                <span className="text-gray-200">•</span>
                <span className="text-emerald-600 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified drivers
                </span>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}