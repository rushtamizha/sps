// 'use client';

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, EffectFade } from 'swiper/modules';
// import {
//   Phone,
//   MessageSquare,
//   Check,
//   MapPin,
//   User,
//   Mail,
//   Calendar,
//   Clock
// } from 'lucide-react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-fade';

// const BACKGROUND_IMAGES = [
//   '/bg-image.avif',
// ];

// const VEHICLES = [
//   { id: 'sedan', name: 'SEDAN', price: '₹14/KM', img: '/BookingCars/swift-dzire-taxi.avif' },
//   { id: 'etios', name: 'ETIOS', price: '₹14/KM', img: '/BookingCars/etios-taxi.avif' },
//   { id: 'suv', name: 'SUV', price: '₹19/KM', img: '/BookingCars/marazzo-taxi.avif' },
//   { id: 'innova', name: 'INNOVA', price: '₹20/KM', img: '/BookingCars/innova-taxi.avif' },
// ];

// export default function TaxiBookingHero() {
//   const [tripType, setTripType] = useState('one-way');
//   const [selectedVehicle, setSelectedVehicle] = useState('sedan');

//   return (
//     <section className="relative min-h-screen w-full flex items-center justify-center pt-32 pb-16 px-4 md:px-8 lg:px-16 overflow-hidden bg-white">

//       {/* Background Image Slider Layer using Swiper with subtle opacity */}
//       <div className="absolute inset-0 z-0">
//         <Swiper
//           modules={[Autoplay, EffectFade]}
//           effect={'fade'}
//           fadeEffect={{ crossFade: true }}
//           autoplay={{
//             delay: 6000,
//             disableOnInteraction: false,
//           }}
//           speed={1200}
//           loop={true}
//           className="w-full h-full"
//         >
//           {BACKGROUND_IMAGES.map((src, idx) => (
//             <SwiperSlide key={idx} className="w-full h-full">
//               <div
//                 className="w-full h-full bg-cover bg-center bg-no-repeat  scale-100"
//                 style={{ backgroundImage: `url('${src}')` }}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Light Gradient Overlay for crisp text readability */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-[#081a33]/70 to-black/90" />

//       <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

//         {/* LEFT COLUMN: Marketing Content */}
//         <div className="lg:col-span-6 flex flex-col justify-center space-y-3">
//           <h1 className="text-4xl md:text-5xl  font-bold  uppercase text-white ">
//             Chennai Pondicherry<br />
//             <span className="text-blue-500">One Way & Round Trip</span> <br />
//             Taxi Service
//           </h1>

//           <p className="text-white  md:text-lg max-w-xl ">
//             Book reliable one way, round trip and airport taxi services across{' '}
//             <span className="font-bold text-blue-500">Tamil Nadu, Kerala & Karnataka</span>{' '}
//             with professional drivers, transparent pricing and 24/7 booking support.
//           </p>

//           {/* Features Check Grid */}
//           <div className="grid grid-cols-2 gap-y-3 gap-x-2 max-w-md text-sm font-medium text-black">
//             <div className="flex items-center gap-2.5 bg-gray-50 border border-gray-100 p-2.5 rounded-xl">
//               <Check className="w-4 h-4 text-blue-600 shrink-0" />
//               <span>Verified Drivers</span>
//             </div>
//             <div className="flex items-center gap-2.5 bg-gray-50 border border-gray-100 p-2.5 rounded-xl">
//               <Check className="w-4 h-4 text-blue-600 shrink-0" />
//               <span>Transparent Pricing</span>
//             </div>
//             <div className="flex items-center gap-2.5 bg-gray-50 border border-gray-100 p-2.5 rounded-xl">
//               <Check className="w-4 h-4 text-blue-600 shrink-0" />
//               <span>24/7 Support</span>
//             </div>
//             <div className="flex items-center gap-2.5 bg-gray-50 border border-gray-100 p-2.5 rounded-xl">
//               <Check className="w-4 h-4 text-blue-600 shrink-0" />
//               <span>Clean Vehicles</span>
//             </div>
//           </div>

//           {/* Call-to-actions buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 pt-2">
//             <a
//               href="tel:+918825555154"
//               className="flex items-center justify-center gap-3 bg-blue-900 text-white font-bold px-6 py-4 rounded-2xl hover:bg-blue-800 transition shadow-xs text-sm  uppercase tracking-wide"
//             >
//               <Phone className="w-4 h-4 fill-current" />
//               Call +91 8825555154
//             </a>
//             <a
//               href="https://wa.me/918825555154"
//               target="_blank"
//               rel="noreferrer"
//               className="flex items-center justify-center gap-3 bg-green-700 text-white font-bold px-6 py-4 rounded-2xl hover:bg-green-600 transition shadow-xs text-sm uppercase tracking-wide"
//             >
//               <MessageSquare className="w-4 h-4 fill-current" />
//               Book via WhatsApp
//             </a>
//           </div>
//         </div>

//         {/* RIGHT COLUMN: Booking Form Widget Card */}
//         <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
//           <div className="bg-white text-gray-800 w-full max-w-full rounded-3xl p-6 shadow-2xl flex flex-col border border-gray-100/80">

//             <div className="text-center mb-5">
//               <h2 className="text-lg font-semibold  text-gray-900">Book Your Premium Taxi Ride</h2>
//               <p className="text-xs text-gray-500 font-medium  ">One Way • Round Trip • Airport Transfers Across Tamil Nadu</p>
//             </div>

//             {/* Trip Type Selector Tabs */}
//             <div className="mb-4">
//               <label className="block text-xs font-semibold text-gray-700 uppercase  mb-2">Trip Type</label>
//               <div className="grid grid-cols-2 gap-3">
//                 <button
//                   type="button"
//                   onClick={() => setTripType('one-way')}
//                   className={`p-3 rounded-xl border text-center transition flex flex-col items-center justify-center tracking-wide ${
//                     tripType === 'one-way'
//                       ? 'border-blue-500 bg-blue-50 text-blue-600 ring-1 ring-blue-500'
//                       : 'border-gray-200 text-black hover:bg-gray-50'
//                   }`}
//                 >
//                   <span className="text-xs font-bold">One Way</span>
//                   <span className="text-[10px] text-black mt-0.5">Min 130 KM</span>
//                   <span className="text-[10px] text-black">Driver Bata: ₹400</span>
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setTripType('round-trip')}
//                   className={`p-3 rounded-xl border text-center transition flex flex-col items-center justify-center tracking-wide ${
//                     tripType === 'round-trip'
//                       ? 'border-blue-500 bg-blue-50/50 text-blue-600 ring-1 ring-blue-500'
//                       : 'border-gray-200 text-black hover:bg-gray-50'
//                   }`}
//                 >
//                   <span className="text-xs font-bold">Round Trip</span>
//                   <span className="text-[10px] text-black mt-0.5">Min 250 KM / Day</span>
//                   <span className="text-[10px] text-black">Driver Bata: ₹500 / Day</span>
//                 </button>
//               </div>
//             </div>

//             {/* Inputs Container */}
//             <div className="space-y-3.5">

//               {/* Pickup Address */}
//               <div>
//                 <label className="block text-xs font-medium text-gray-700 mb-1">Pickup Address</label>
//                 <div className="relative">
//                   <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500" />
//                   <input
//                     type="text"
//                     placeholder="Pickup Location"
//                     className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
//                   />
//                 </div>
//               </div>

//               {/* Drop Address */}
//               <div>
//                 <label className="block text-xs font-medium text-gray-700 mb-1">Drop Address</label>
//                 <div className="relative">
//                   <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500" />
//                   <input
//                     type="text"
//                     placeholder="Drop Location"
//                     className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
//                   />
//                 </div>
//               </div>

//               {/* Contact Info (Row) */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 <div>
//                   <label className="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
//                   <div className="relative">
//                     <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500" />
//                     <input
//                       type="text"
//                       placeholder="Full Name"
//                       className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-xs font-medium text-gray-700 mb-1">Mobile Number</label>
//                   <div className="relative">
//                     <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500" />
//                     <input
//                       type="tel"
//                       placeholder="Mobile Number"
//                       className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Optional Email */}
//               <div>
//                 <label className="block text-xs font-medium text-gray-700 mb-1">Email Address <span className="text-gray-400 font-normal">(Optional)</span></label>
//                 <div className="relative">
//                   <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500" />
//                   <input
//                     type="email"
//                     placeholder="Email Address"
//                     className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500"
//                   />
//                 </div>
//               </div>

//               {/* Date & Time (Row) */}
//               <div className="grid grid-cols-2 gap-3">
//                 <div>
//                   <label className="block text-xs font-medium text-gray-700 mb-1">Pickup Date</label>
//                   <div className="relative">
//                     <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500 pointer-events-none" />
//                     <input
//                       type="date"
//                       defaultValue="2026-07-01"
//                       className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-xs font-medium text-gray-700 mb-1">Pickup Time</label>
//                   <div className="relative">
//                     <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500 pointer-events-none" />
//                     <input
//                       type="time"
//                       defaultValue="15:44"
//                       className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Conditional Return Date using Framer Motion */}
//               <AnimatePresence initial={false}>
//                 {tripType === 'round-trip' && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: 'auto', opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.25 }}
//                     className="overflow-hidden"
//                   >
//                     <label className="block text-xs font-medium text-gray-700 mb-1">Return Date</label>
//                     <div className="relative">
//                       <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500 pointer-events-none" />
//                       <input
//                         type="date"
//                         placeholder="dd/mm/yyyy"
//                         className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500"
//                       />
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//               {/* Select Vehicle Carousel using Swiper.js */}
//               <div>
//                 <label className="block text-xs font-medium text-gray-700 mb-1.5">Select Vehicle</label>
//                 <Swiper
//                   spaceBetween={8}
//                   slidesPerView={3.5}
//                   breakpoints={{
//                     0: { slidesPerView: 2.5 },
//                     400: { slidesPerView: 3.2 },
//                     500: { slidesPerView: 4 }
//                   }}
//                   className="w-full vehicle-swiper"
//                 >
//                   {VEHICLES.map((vehicle) => (
//                     <SwiperSlide key={vehicle.id}>
//                       <div
//                         onClick={() => setSelectedVehicle(vehicle.id)}
//                         className={`cursor-pointer p-2 rounded-xl border text-center transition flex flex-col items-center justify-between h-[84px] m-1 bg-white ${
//                           selectedVehicle === vehicle.id
//                             ? 'border-blue-500 bg-blue-50/20 ring-1 ring-blue-500'
//                             : 'border-gray-200 hover:border-gray-300'
//                         }`}
//                       >
//                         <div className="h-10 w-full flex items-center justify-center  mix-blend-multiply">
//                           <img
//                             src={vehicle.img}
//                             alt={vehicle.name}
//                             className="h-full object-contain max-w-full rounded"
//                           />
//                         </div>
//                         <div>
//                           <div className="text-[10px] font-medium text-gray-900 leading-none">{vehicle.price}</div>
//                           <div className="text-[8px] text-black  font-semibold mt-0.5 uppercase">{vehicle.name}</div>
//                         </div>
//                       </div>
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//               </div>

//             </div>

//             {/* Fare Button Action */}
//             <button
//               type="submit"
//               className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl text-sm transition tracking-wide text-center shadow-md"
//             >
//               Book Now
//             </button>
//             <span className="text-[10px] text-center text-gray-400 font-medium mt-2">
//               Instant Whatsapp Support • Transparent pricing
//             </span>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import {
  Phone,
  MessageSquare,
  Check,
  MapPin,
  User,
  Mail,
  Calendar,
  Clock,
} from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

const BACKGROUND_IMAGES = ["/bg-image.avif"];

const VEHICLES = [
  {
    id: "sedan",
    name: "SEDAN",
    price: "₹14/KM",
    img: "/BookingCars/swift-dzire-taxi.avif",
  },
  {
    id: "etios",
    name: "ETIOS",
    price: "₹14/KM",
    img: "/BookingCars/etios-taxi.avif",
  },
  {
    id: "suv",
    name: "SUV",
    price: "₹19/KM",
    img: "/BookingCars/marazzo-taxi.avif",
  },
  {
    id: "innova",
    name: "INNOVA",
    price: "₹20/KM",
    img: "/BookingCars/innova-taxi.avif",
  },
];

export default function TaxiBookingHero() {
  const [tripType, setTripType] = useState("one-way");
  const [selectedVehicle, setSelectedVehicle] = useState("sedan");

  const getCurrentTimeFormatted = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  // Helper to safely get current date formatted as YYYY-MM-DD
  const getCurrentDateFormatted = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Form State Values
  const [formData, setFormData] = useState({
    pickupAddress: "",
    dropAddress: "",
    fullName: "",
    mobileNumber: "",
    emailAddress: "",
    pickupDate: getCurrentDateFormatted(),
    pickupTime: getCurrentTimeFormatted(),
    returnDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    const targetVehicle = VEHICLES.find((v) => v.id === selectedVehicle);
    const whatsappBaseNumber = "918825555154";

    // Formatting highly organized WhatsApp message layout
    let message = `*🚕 NEW TAXI BOOKING REQUEST* \n\n`;
    message += `*Trip Type:* ${tripType === "one-way" ? "One Way Drop" : "Round Trip Journey"}\n`;
    message += `*Selected Vehicle:* ${targetVehicle ? targetVehicle.name : selectedVehicle.toUpperCase()}\n\n`;

    message += `*📍 Route Details:*\n`;
    message += `• *Pickup Address:* ${formData.pickupAddress || "Not Specified"}\n`;
    message += `• *Drop Address:* ${formData.dropAddress || "Not Specified"}\n\n`;

    message += `*📅 Schedule Details:*\n`;
    message += `• *Pickup Date:* ${formData.pickupDate}\n`;
    message += `• *Pickup Time:* ${formData.pickupTime}\n`;
    if (tripType === "round-trip" && formData.returnDate) {
      message += `• *Return Date:* ${formData.returnDate}\n`;
    }
    message += `\n`;

    message += `*👤 Customer Contact:*\n`;
    message += `• *Name:* ${formData.fullName || "Not Specified"}\n`;
    message += `• *Mobile:* ${formData.mobileNumber || "Not Specified"}\n`;
    if (formData.emailAddress) {
      message += `• *Email:* ${formData.emailAddress}\n`;
    }

    // Direct Browser Redirection to WhatsApp Api Layer
    const encryptedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappBaseNumber}&text=${encryptedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-32 pb-16 px-4 md:px-8 lg:px-16 overflow-hidden bg-white">
      {/* Background Image Slider Layer using Swiper with subtle opacity */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect={"fade"}
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          speed={1200}
          loop={true}
          className="w-full h-full"
        >
          {BACKGROUND_IMAGES.map((src, idx) => (
            <SwiperSlide key={idx} className="w-full h-full">
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat scale-100"
                style={{ backgroundImage: `url('${src}')` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Light Gradient Overlay for crisp text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-[#081a33]/70 to-black/90" />

      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* LEFT COLUMN: Marketing Content */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold uppercase text-white">
            Chennai Pondicherry
            <br />
            <span className="text-blue-500">One Way & Round Trip</span> <br />
            Taxi Service
          </h1>

          <p className="text-white md:text-lg max-w-xl">
            Book reliable one way, round trip and airport taxi services across{" "}
            <span className="font-bold text-blue-500">
              Tamil Nadu, Kerala & Karnataka
            </span>{" "}
            with professional drivers, transparent pricing and 24/7 booking
            support.
          </p>

          {/* Features Check Grid */}
          <div className="grid grid-cols-2 gap-y-3 gap-x-2 max-w-md text-sm font-medium text-black">
            <div className="flex items-center gap-2.5 bg-gray-50 border border-gray-100 p-2.5 rounded-xl">
              <Check className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Verified Drivers</span>
            </div>
            <div className="flex items-center gap-2.5 bg-gray-50 border border-gray-100 p-2.5 rounded-xl">
              <Check className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Transparent Pricing</span>
            </div>
            <div className="flex items-center gap-2.5 bg-gray-50 border border-gray-100 p-2.5 rounded-xl">
              <Check className="w-4 h-4 text-blue-600 shrink-0" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2.5 bg-gray-50 border border-gray-100 p-2.5 rounded-xl">
              <Check className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Clean Vehicles</span>
            </div>
          </div>

          {/* Call-to-actions buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="tel:+918825555154"
              className="flex items-center justify-center gap-3 bg-blue-900 text-white font-bold px-6 py-4 rounded-2xl hover:bg-blue-800 transition shadow-xs text-sm uppercase tracking-wide"
            >
              <Phone className="w-4 h-4 fill-current" />
              Call +91 8825555154
            </a>
            <a
              href="https://wa.me/918825555154"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 bg-green-700 text-white font-bold px-6 py-4 rounded-2xl hover:bg-green-600 transition shadow-xs text-sm uppercase tracking-wide"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              Book via WhatsApp
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Booking Form Widget Card */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
          <form
            onSubmit={handleBookingSubmit}
            className="bg-white text-gray-800 w-full max-w-full rounded-3xl p-6 shadow-2xl flex flex-col border border-gray-100/80"
          >
            <div className="text-center mb-5">
              <h2 className="text-lg font-semibold text-gray-900">
                Book Your Premium Taxi Ride
              </h2>
              <p className="text-xs text-gray-500 font-medium">
                One Way • Round Trip • Airport Transfers Across Tamil Nadu
              </p>
            </div>

            {/* Trip Type Selector Tabs */}
            <div className="mb-4">
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">
                Trip Type
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setTripType("one-way")}
                  className={`p-3 rounded-xl border text-center transition flex flex-col items-center justify-center tracking-wide ${
                    tripType === "one-way"
                      ? "border-blue-500 bg-blue-50 text-blue-600 ring-1 ring-blue-500"
                      : "border-gray-200 text-black hover:bg-gray-50"
                  }`}
                >
                  <span className="text-xs font-bold">One Way</span>
                  <span className="text-[10px] text-black mt-0.5">
                    Min 130 KM
                  </span>
                  <span className="text-[10px] text-black">
                    Driver Bata: ₹400
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setTripType("round-trip")}
                  className={`p-3 rounded-xl border text-center transition flex flex-col items-center justify-center tracking-wide ${
                    tripType === "round-trip"
                      ? "border-blue-500 bg-blue-50/50 text-blue-600 ring-1 ring-blue-500"
                      : "border-gray-200 text-black hover:bg-gray-50"
                  }`}
                >
                  <span className="text-xs font-bold">Round Trip</span>
                  <span className="text-[10px] text-black mt-0.5">
                    Min 250 KM / Day
                  </span>
                  <span className="text-[10px] text-black">
                    Driver Bata: ₹500 / Day
                  </span>
                </button>
              </div>
            </div>

            {/* Inputs Container */}
            <div className="space-y-3.5">
              {/* Pickup Address */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Pickup Address
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500" />
                  <input
                    type="text"
                    name="pickupAddress"
                    value={formData.pickupAddress}
                    onChange={handleInputChange}
                    required
                    placeholder="Pickup Location"
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Drop Address */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Drop Address
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500" />
                  <input
                    type="text"
                    name="dropAddress"
                    value={formData.dropAddress}
                    onChange={handleInputChange}
                    required
                    placeholder="Drop Location"
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Contact Info (Row) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      placeholder="Full Name"
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Mobile Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500" />
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      required
                      placeholder="Mobile Number"
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Optional Email */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Email Address{" "}
                  <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500" />
                  <input
                    type="email"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Date & Time (Row) */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Pickup Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500 pointer-events-none" />
                    <input
                      type="date"
                      name="pickupDate"
                      value={formData.pickupDate}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Pickup Time
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500 pointer-events-none" />
                    <input
                      type="time"
                      name="pickupTime"
                      value={formData.pickupTime}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Conditional Return Date using Framer Motion */}
              <AnimatePresence initial={false}>
                {tripType === "round-trip" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Return Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500 pointer-events-none" />
                      <input
                        type="date"
                        name="returnDate"
                        value={formData.returnDate}
                        onChange={handleInputChange}
                        required={tripType === "round-trip"}
                        placeholder="dd/mm/yyyy"
                        className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Select Vehicle Carousel using Swiper.js */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  Select Vehicle
                </label>
                <Swiper
                  spaceBetween={8}
                  slidesPerView={3.5}
                  breakpoints={{
                    0: { slidesPerView: 2.5 },
                    400: { slidesPerView: 3.2 },
                    500: { slidesPerView: 4 },
                  }}
                  className="w-full vehicle-swiper"
                >
                  {VEHICLES.map((vehicle) => (
                    <SwiperSlide key={vehicle.id}>
                      <div
                        onClick={() => setSelectedVehicle(vehicle.id)}
                        className={`cursor-pointer p-2 rounded-xl border text-center transition flex flex-col items-center justify-between h-[84px] m-1 bg-white ${
                          selectedVehicle === vehicle.id
                            ? "border-blue-500 bg-blue-50/20 ring-1 ring-blue-500"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="h-10 w-full flex items-center justify-center mix-blend-multiply">
                          <img
                            src={vehicle.img}
                            alt={vehicle.name}
                            className="h-full object-contain max-w-full rounded"
                          />
                        </div>
                        <div>
                          <div className="text-[10px] font-medium text-gray-900 leading-none">
                            {vehicle.price}
                          </div>
                          <div className="text-[8px] text-black font-semibold mt-0.5 uppercase">
                            {vehicle.name}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {/* Fare Button Action */}
            <button
              type="submit"
              className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl text-sm transition tracking-wide text-center shadow-md"
            >
              Book Now
            </button>
            <span className="text-[10px] text-center text-gray-400 font-medium mt-2">
              Instant Whatsapp Support • Transparent pricing
            </span>
          </form>
        </div>
      </div>
    </section>
  );
}
