'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { 
  Users, 
  Briefcase, 
  Receipt, 
  Phone, 
  MessageSquare, 
  ChevronLeft, 
  ChevronRight, 
  PlaneTakeoff,
  ShieldCheck
} from 'lucide-react';

// Import Swiper production styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TRANSFER_VEHICLES = [
  {
    id: 'sedan',
    name: 'Swift Dzire / Sedan',
    tag: 'MOST BOOKED',
    tagColor: 'bg-amber-500 text-white',
    capacity: '4+1',
    one: '14/KM',
    round: '15/KM',
    toll: 'Optional',
    luggage: 'Standard',
    img: '/CardCars/swift-dzire-one-way-taxi-pondicherry-to-chennai.webp',
    alt: 'Maruti Swift Dzire sedan taxi for Pondicherry to Chennai airport drop transfers'
  },
  {
    id: 'etios',
    name: 'Toyota Etios ',
    tag: null,
    capacity: '4+1',
    fare: '2,499.00',
    toll: 'Optional',
    luggage: 'Standard',
    img: '/CardCars/toyota-etios-airport-taxi-pondicherry-to-chennai.webp',
    alt: 'Toyota Etios airport taxi from Pondicherry to Chennai airport drop service'
  },
  {
    id: 'ciaz',
    name: 'Maruti Ciaz ',
    tag: null,
    capacity: '4+1',
    fare: '2,699.00',
    toll: 'Optional',
    luggage: 'Standard',
    img: '/CardCars/maruti-ciaz-premium-one-way-taxi-chennai-to-pondicherry.webp',
    alt: 'Premium Maruti Ciaz airport taxi service from travel between Chennai and Pondicherry'
  },
  {
    id: 'ertiga',
    name: 'Maruti Ertiga ',
    tag: 'FAMILY PICK',
    tagColor: 'bg-emerald-600 text-white',
    capacity: '6+1',
    fare: '3,499.00',
    toll: 'Optional',
    luggage: 'Standard',
    img: '/CardCars/maruti-ertiga-6-plus-1-family-taxi-pondicherry-to-chennai.webp',
    alt: 'Maruti Ertiga 6+1 family airport taxi booking from Pondicherry to Chennai'
  },
  {
    id: 'innova',
    name: 'Toyota Innova ',
    tag: null,
    capacity: '7+1',
    fare: '3,799.00',
    toll: 'Optional',
    luggage: 'Large',
    img: '/CardCars/toyota-innova-7-seater-taxi-pondicherry-to-chennai.webp',
    alt: 'Toyota Innova 7 seater outstation airport taxi from Chennai to Pondicherry'
  },
  {
    id: 'crysta',
    name: 'Toyota Innova Crysta ',
    tag: 'PREMIUM',
    tagColor: 'bg-blue-600 text-white',
    capacity: '7+1',
    fare: '4,499.00',
    toll: 'Optional',
    luggage: 'Large',
    img: '/CardCars/toyota-innova-crysta-airport-taxi-pondicherry-to-chennai.webp',
    alt: 'Toyota Innova Crysta premium airport taxi for luxury family travel from Pondicherry to Chennai'
  },
  {
    id: 'tempo',
    name: 'Tempo Traveller ',
    tag: 'GROUP',
    tagColor: 'bg-purple-600 text-white',
    capacity: '12+1',
    fare: '7,499.00',
    toll: 'Optional',
    luggage: 'XL Space',
    img: '/CardCars/tempo-traveller-12-seater-pondicherry-to-chennai-taxi.webp',
    alt: '12 Seater Tempo Traveller group commercial van booking for Chennai and Pondicherry airport routes'
  }
];

export default function AirportTransfers() {
  return (
    <section id='fleets' className="w-full bg-white py-10 px-4 md:px-8 lg:px-16 text-gray-800 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER BLOCK WITH UX FUNCTIONAL NAVIGATION PLATFORMS */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 bg-blue-50 text-blue-600 font-bold text-xs uppercase px-3 py-1.5 rounded-full w-max  tracking-wider">
              <PlaneTakeoff className="w-3.5 h-3.5" />
              Fleets 
            </div>
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 tracking-tight ">
              Pondicherry to Chennai <br />
              <span className="text-blue-600"> Taxi</span>
            </h2>
            <p className="text-gray-500 text-xs   md:text-sm font-medium">
              Pondy to Chennai & Chennai to Pondy mostly Recommended trip
            </p>
          </div>

        </div>

        {/* SWIPER CONTAINER LAYOUT */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3 },
            }}
            className="pb-16 w-full"
          >
            {TRANSFER_VEHICLES.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div className="bg-white rounded-[2rem] border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 flex flex-col h-full overflow-hidden relative group m-0.5 m-2">
                  
                  {/* Badge Tag Component */}
                  {item.tag && (
                    <span className={`absolute top-4 left-4 z-10 text-[10px] font-semibold tracking-widest px-2.5 py-1 rounded-lg uppercase shadow-sm ${item.tagColor}`}>
                      {item.tag}
                    </span>
                  )}

                  {/* Anti-CLS Fixed Aspect Image Engine */}
                  <div className="w-full h-44 bg-gray-50 flex items-center justify-center relative overflow-hidden  border-b border-gray-50">
                    <div className="w-full h-full relative transition-transform duration-500 group-hover:scale-105">
                      <Image 
                        src={item.img} 
                        alt={item.alt} 
                        fill
                        className="object-cover w-full"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Card Main Body */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3 className="text-md font-semibold text-gray-900  group-hover:text-blue-600 transition-colors line-clamp-1">
                        {item.name}
                      </h3>
                      <span className="flex items-center gap-1 bg-gray-100 text-gray-700 text-[11px] font-semibold px-2.5 py-1 rounded-md shrink-0">
                        <Users className="w-3.5 h-3.5 text-gray-500" />
                        {item.capacity}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] font-medium text-blue-600 mb-4">
                      <ShieldCheck className="w-3.5 h-3.5 fill-current " />
                      <span>Verified Active Route Fleet</span>
                    </div>

                    <hr className="border-gray-100 mb-4" />

                    {/* Fare Details Grid */}
                    <div className="space-y-3 text-sm flex-grow mb-6">
                      <div className="flex justify-between items-center bg-blue-50 p-2 rounded-xl border border-gray-100/50">
                        <span className="text-blue-800 font-semibold pl-1">One Way</span>
                        <span className="text-xl font-semibold text-blue-600 pr-1">₹{item.one}</span>
                      </div>

                      <div className="flex justify-between items-center bg-amber-50 p-2 rounded-xl border border-gray-100/50">
                        <span className="text-amber-800 font-semibold pl-1">Round Trip</span>
                        <span className="text-xl font-semibold text-amber-600 pr-1">₹{item.round}</span>
                      </div>
                      
                      <div className="flex justify-between items-center px-1">
                        <span className="text-gray-400 font-medium flex items-center gap-1.5">
                          <Receipt className="w-4 h-4 text-gray-400" /> Toll Charges
                        </span>
                        <span className="text-gray-500 font-medium text-xs bg-gray-100/10 border border-gray-100 px-2 py-0.5 rounded">
                          {item.toll}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center px-1">
                        <span className="text-gray-400 font-medium flex items-center gap-1.5">
                          <Briefcase className="w-4 h-4 text-gray-400" /> Luggage Space
                        </span>
                        <span className="text-gray-700 font-medium text-xs">
                          {item.luggage}
                        </span>
                      </div>
                    </div>

                    {/* Action Execution Layer */}
                    <div className="space-y-2.5 mt-auto">
                      <a
                        href={`https://wa.me/918825555154?text=Hi,%20I%20want%20to%20book%20an%20Vehicle%20${encodeURIComponent(item.name)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-3.5 px-4 rounded-xl text-xs  uppercase shadow-md transition-all text-center"
                      >
                        Book Ride Instantly
                      </a>
                    </div>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
  
        </div>

      </div>

      {/* Embedded Style Segment overriding Pagination Attributes cleanly */}
      <style jsx global>{`
        .airport-custom-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #cbd5e1;
          opacity: 1;
          border-radius: 9999px;
          transition: all 0.3s ease;
        }
        .airport-custom-pagination .swiper-pagination-bullet-active {
          width: 28px;
          background: #2563eb;
        }
      `}</style>
    </section>
  );
}