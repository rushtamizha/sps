'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styling production layers
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { MessageCircle, User2 } from 'lucide-react';

const TAMILNADU_REVIEWS = [
  {
    id: 1,
    name: "Senthil Kumar",
    location: "Madurai",
    route: "Pondicherry to Chennai Airport",
    rating: 5,
    date: "June 2026",
    // Tanglish Translation: "Super service bro! Car came exactly on time. No hidden charges. Safe driving for family, tension free airport drop."
    comment: "Super service bro! Midnight timing-la correct ah vandhutanga. Car semma clean ah irundhuchu, hidden charges ethuvum ila. Family ah kootitu poga semma safe, tension eh illama airport poi serndhom."
  },
  {
    id: 2,
    name: "Aparna Sundaram",
    location: "Chennai",
    route: "Chennai to Pondicherry One Way",
    rating: 5,
    date: "May 2026",
    // Tanglish Translation: "Whenever we go for weekend trips from Chennai to Pondy, this is our fixed choice. Drivers are respectful, AC is perfect, and per-KM billing is fully honest."
    comment: "Chennai-la irundhu Pondy weekend trip polam-nu plan panna, engaloda fixed choice idhu thaan. Drivers ellam nalla mariyadhaiya pesuranga. AC perfect, per-KM rates full-ah honest ah pakka ah iruku."
  },
  {
    id: 3,
    name: "Vigneshwaran (Vicky)",
    location: "Coimbatore",
    route: "Pondicherry to Coimbatore Outstation",
    rating: 5,
    date: "July 2026",
    // Tanglish Translation: "Booked Innova Crysta for family tour. Long distance highway driving was elite. Driver bata and allowance was standard price. Very reliable drop taxi."
    comment: "Family tour kaga Innova Crysta book panni irundhom. Long distance highway driving semma smooth ah irundhuchu. Driver bata, allowance ellam standard rate thaan. Romba nambagamaan drop taxi chain!"
  },
  {
    id: 4,
    name: "Meenakshi Ammal",
    location: "Trichy",
    route: "Madurai to Trichy Drop Taxi",
    rating: 5,
    date: "April 2026",
    // Tanglish Translation: "WhatsApp booking is very easy. Booking was confirmed within 5 minutes. Driver was very helpful with senior citizens luggage."
    comment: "WhatsApp-laye easy ah book panniten. Next 5 mins-la driver details vandhuruchu. Enna madhiri senior citizens luggage thooka driver romba help pannaru. Safe and respectful trip pa."
  },
  {
    id: 5,
    name: "Karthick Raja",
    location: "Salem",
    route: "Salem to Chennai Airport One Way",
    rating: 5,
    date: "June 2026",
    // Tanglish Translation: "No extra hidden kilometers calculation. Transparent billing from pickup location to dropping point. Driving standards are highly professional."
    comment: "Matha travels madhiri extra km solli yemaathala. Pickup location-la irundhu correct billing. Speed-um correct limit-la irundhuchu, driving safety pakka standard. Elite travel option!"
  }
];

export default function Testimonials() {
  return (
    <section className="w-full bg-white py-10 px-4 md:px-8 lg:px-16 text-gray-800 relative overflow-hidden">
      
      {/* Decorative background branding shapes */}
      <div className="absolute top-1/4 -right-20 w-72 h-72 bg-emerald-50/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-20 w-72 h-72 bg-emerald-50/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER BLOCK */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-widest bg-emerald-50 px-3.5 py-1.5 rounded-full w-max">
             <MessageCircle className="w-3.5 h-3.5" />
              Makkal Feedback
            </div>
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 tracking-tight ">
              Trusted By Thousands <br />
              <span className="text-emerald-600">Of Tamilnadu Travelers</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base font-medium max-w-xl">
              Namma makkal oorgalukku payanam senju kudutha unmaiyana customer feedback. Experience transparency on every single route destination.
            </p>
          </div>

        </div>

        {/* SWIPER CAROUSEL SHELF */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            className="pb-16 w-full"
          >
            {TAMILNADU_REVIEWS.map((review) => (
              <SwiperSlide key={review.id} className="h-auto">
                <div className="bg-gray-50/60 border border-gray-100 rounded-[2rem] p-6 md:p-8 flex flex-col h-full justify-between transition-all duration-300 hover:bg-white hover:shadow-sm hover:border-white m-0.5 relative group">
                  
                  {/* Google Icon Decorative Quotation element */}
                  <span className="material-symbols-outlined absolute right-6 top-6 text-5xl text-emerald-500/10 pointer-events-none group-hover:text-emerald-500/20 transition-colors select-none">
                    format_quote
                  </span>

                  {/* Card Content Top Shelf */}
                  <div className="space-y-4">
                    {/* Google Icon Star Row */}
                    <div className="flex items-center gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-amber-400 select-none text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>
                          star
                        </span>
                      ))}
                    </div>

                    {/* Main Comment Quote Text */}
                    <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed  pr-4">
                      "{review.comment}"
                    </p>
                  </div>

                  {/* Card Footer Bio Block */}
                  <div className="pt-5 mt-6 border-t border-gray-100 flex flex-col gap-3">
                    
                    {/* Local SEO Segment Routing info with Google Icon */}
                    <div className="flex items-center gap-1.5 bg-emerald-50/70 border border-emerald-100/40 text-emerald-700 text-[11px] font-bold px-2.5 py-1 rounded-lg w-max">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>
                        distance
                      </span>
                      <span>Route: {review.route}</span>
                    </div>

                    {/* Profile metrics setup */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-600 to-orange-700 text-white font-extrabold flex items-center justify-center text-sm shadow-md shrink-0">
                        {review.name.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm font-black text-gray-900 truncate tracking-tight flex items-center gap-1">
                          {review.name}
                          <span className="material-symbols-outlined text-orange-500 text-base font-bold" style={{ fontVariationSettings: '"FILL" 1' }}>
                            verified_user
                          </span>
                        </h4>
                        <span className="block text-[11px] text-gray-400 font-bold uppercase tracking-wider">
                          {review.location} • {review.date}
                        </span>
                      </div>
                    </div>

                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      {/* Styles Injection layer overrides bullet specifications cleanly */}
      <style jsx global>{`
        .review-custom-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #cbd5e1;
          opacity: 1;
          border-radius: 9999px;
          transition: all 0.3s ease;
        }
        .review-custom-pagination .swiper-pagination-bullet-active {
          width: 28px;
          background: #2563eb;
        }
      `}</style>
    </section>
  );
}