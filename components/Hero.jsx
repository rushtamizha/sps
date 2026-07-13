

// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade } from "swiper/modules";
// import { LoadScript } from "@react-google-maps/api";
// import {
//   Phone,
//   MessageSquare,
//   Check,
//   MapPin,
//   User,
//   Mail,
//   Calendar,
//   Clock,
// } from "lucide-react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-fade";

// const BACKGROUND_IMAGES = ["/download.avif"];

// // Organized Fleet Registry mapped cleanly to respective Trip Rules
// const VEHICLES_DATABASE = {
//   "one-way": [
//     { id: "sedan", name: "SEDAN", price: "₹15/KM", bata: "₹400", img: "/BookingCars/swift-dzire-taxi.avif" },
//     { id: "innova", name: "INNOVA", price: "₹20/KM", bata: "₹500", img: "/BookingCars/marazzo-taxi.avif" },
//     { id: "crysta", name: "CRYSTA", price: "₹23/KM", bata: "₹500", img: "/BookingCars/innova-taxi.avif" },
//   ],
//   "round-trip": [
//     { id: "sedan", name: "SEDAN", price: "₹14/KM", bata: "₹400/Day", img: "/BookingCars/swift-dzire-taxi.avif" },
//     { id: "innova", name: "INNOVA", price: "₹19/KM", bata: "₹500/Day", img: "/BookingCars/marazzo-taxi.avif" },
//     { id: "crysta", name: "CRYSTA", price: "₹22/KM", bata: "₹600/Day", img: "/BookingCars/innova-taxi.avif" },
//     { id: "hyscross", name: "HYSCROSS", price: "₹37/KM", bata: "₹600/Day", img: "/BookingCars/innova-taxi.avif" }, // Update with real path if needed
//     { id: "urbania-12", name: "URBANIA 12", price: "₹35/KM", bata: "₹1000/Day", img: "/BookingCars/urbania.avif" },
//     { id: "urbania-16", name: "URBANIA 16", price: "₹38/KM", bata: "₹1000/Day", img: "/BookingCars/urbania.avif" },
//     { id: "tempo-12", name: "TEMPO 12", price: "₹24/KM", bata: "₹1000/Day", img: "/BookingCars/tempo.avif" },
//     { id: "tempo-18", name: "TEMPO 18", price: "₹28/KM", bata: "₹1000/Day", img: "/BookingCars/tempo.avif" },
//   ]
// };

// export default function TaxiBookingHero() {
//   const [tripType, setTripType] = useState("one-way");
//   const [selectedVehicle, setSelectedVehicle] = useState("sedan");

//   // Keep selected vehicle safe or fall back to first index on tab changes
//   useEffect(() => {
//     const available = VEHICLES_DATABASE[tripType];
//     const matchExists = available.some(v => v.id === selectedVehicle);
//     if (!matchExists && available.length > 0) {
//       setSelectedVehicle(available[0].id);
//     }
//   }, [tripType]);

//   const getCurrentTimeFormatted = () => {
//     const now = new Date();
//     return `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
//   };

//   const getCurrentDateFormatted = () => {
//     const now = new Date();
//     return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
//   };

//   const [formData, setFormData] = useState({
//     pickupAddress: "",
//     dropAddress: "",
//     fullName: "",
//     mobileNumber: "",
//     emailAddress: "",
//     pickupDate: getCurrentDateFormatted(),
//     pickupTime: getCurrentTimeFormatted(),
//     returnDate: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleBookingSubmit = (e) => {
//     e.preventDefault();

//     const activeFleet = VEHICLES_DATABASE[tripType];
//     const targetVehicle = activeFleet.find((v) => v.id === selectedVehicle);
//     const whatsappBaseNumber = "919677792455";

//     let message = `*🚕 NEW TAXI BOOKING REQUEST* \n\n`;
//     message += `*Trip Type:* ${tripType === "one-way" ? "One Way Drop" : "Round Trip Journey"}\n`;
//     message += `*Selected Vehicle:* ${targetVehicle ? targetVehicle.name : selectedVehicle.toUpperCase()}\n`;
//     message += `*Estimated Fare Rate:* ${targetVehicle ? targetVehicle.price : "N/A"}\n`;
//     message += `*Driver Bata:* ${targetVehicle ? targetVehicle.bata : "N/A"}\n\n`;

//     message += `*📍 Route Details:*\n`;
//     message += `• *Pickup Address:* ${formData.pickupAddress || "Not Specified"}\n`;
//     message += `• *Drop Address:* ${formData.dropAddress || "Not Specified"}\n\n`;

//     message += `*📅 Schedule Details:*\n`;
//     message += `• *Pickup Date:* ${formData.pickupDate}\n`;
//     message += `• *Pickup Time:* ${formData.pickupTime}\n`;
//     if (tripType === "round-trip" && formData.returnDate) {
//       message += `• *Return Date:* ${formData.returnDate}\n`;
//     }
//     message += `\n`;

//     message += `*👤 Customer Contact:*\n`;
//     message += `• *Name:* ${formData.fullName || "Not Specified"}\n`;
//     message += `• *Mobile:* ${formData.mobileNumber || "Not Specified"}\n`;
//     if (formData.emailAddress) {
//       message += `• *Email:* ${formData.emailAddress}\n`;
//     }

//     const encryptedMessage = encodeURIComponent(message);
//     const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappBaseNumber}&text=${encryptedMessage}`;

//     window.open(whatsappUrl, "_blank");
//   };

//   // Extract currently valid fleet subset
//   const currentFleet = VEHICLES_DATABASE[tripType];
//   const activeVehicleObject = currentFleet.find(v => v.id === selectedVehicle) || currentFleet[0];

//   return (
//     <section className="relative min-h-screen w-full flex items-center justify-center pt-32 pb-16 px-4 md:px-8 lg:px-16 overflow-hidden bg-white">
//       <div className="absolute inset-0 z-0">
//         <Swiper
//           modules={[Autoplay, EffectFade]}
//           effect={"fade"}
//           fadeEffect={{ crossFade: true }}
//           autoplay={{ delay: 6000, disableOnInteraction: false }}
//           speed={1200}
//           loop={true}
//           className="w-full h-full"
//         >
//           {BACKGROUND_IMAGES.map((src, idx) => (
//             <SwiperSlide key={idx} className="w-full h-full">
//               <div
//                 className="w-full h-full bg-cover bg-center bg-no-repeat scale-100"
//                 style={{ backgroundImage: `url('${src}')` }}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-[#073376]/70 to-black/90" />

//       <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
//         {/* LEFT COLUMN */}
//         <div className="lg:col-span-6 flex flex-col justify-center space-y-3">
//           <h1 className="text-4xl md:text-5xl font-bold uppercase text-white">
//             Chennai Pondicherry
//             <br />
//             <span className="text-blue-500">One Way & Round Trip</span> <br />
//             Taxi Service
//           </h1>

//           <p className="text-white md:text-lg max-w-xl">
//             Book reliable one way, round trip and airport taxi services across{" "}
//             <span className="font-bold text-blue-500">Tamil Nadu & Pondicherry</span>{" "}
//             with professional drivers, transparent pricing and 24/7 booking support.
//           </p>

//           <div className="grid grid-cols-2 gap-y-3 gap-x-2 max-w-md text-sm font-medium text-black">
//             {["Verified Drivers", "Transparent Pricing", "24/7 Support", "Clean Vehicles"].map((f, i) => (
//               <div key={i} className="flex items-center gap-2.5 bg-gray-50 border border-gray-100 p-2.5 rounded-xl">
//                 <Check className="w-4 h-4 text-blue-700 shrink-0" />
//                 <span>{f}</span>
//               </div>
//             ))}
//           </div>

//           <div className="flex flex-col sm:flex-row gap-4 pt-2">
//             <a href="tel:+919677792455" className="flex items-center justify-center gap-3 bg-green-500 text-white font-bold px-6 py-4 rounded-2xl hover:bg-green-600 transition shadow-xs text-sm uppercase tracking-wide">
//               <Phone className="w-4 h-4 fill-current" />
//               Call +91 9677792455
//             </a>
//             <a href="https://wa.me/919677792455" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-blue-700 text-white font-bold px-6 py-4 rounded-2xl hover:bg-blue-700 transition shadow-xs text-sm uppercase tracking-wide">
//               <MessageSquare className="w-4 h-4 fill-current" />
//               Book via WhatsApp
//             </a>
//           </div>
//         </div>

//         {/* RIGHT COLUMN: Form */}
//         <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
//           <form onSubmit={handleBookingSubmit} className="bg-white text-gray-800 w-full max-w-full rounded-3xl p-6 shadow-2xl flex flex-col border border-gray-100/80">
//             <div className="text-center mb-5">
//               <h2 className="text-lg font-semibold text-gray-900">Book Your Premium Taxi Ride</h2>
//               <p className="text-xs text-gray-500 font-medium">One Way • Round Trip • Airport Transfers Across Tamil Nadu</p>
//             </div>

//             {/* Trip Type Selector */}
//             <div className="mb-4">
//               <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">Trip Type</label>
//               <div className="grid grid-cols-2 gap-3">
//                 <button
//                   type="button"
//                   onClick={() => setTripType("one-way")}
//                   className={`p-3 rounded-xl border text-center transition flex flex-col items-center justify-center tracking-wide ${
//                     tripType === "one-way"
//                       ? "border-blue-500 bg-blue-50 text-blue-700 ring-1 ring-blue-500"
//                       : "border-gray-200 text-black hover:bg-gray-50"
//                   }`}
//                 >
//                   <span className="text-xs font-bold">One Way Drop</span>
//                   <span className="text-[10px] text-gray-500 mt-0.5">Min 130 KM</span>
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setTripType("round-trip")}
//                   className={`p-3 rounded-xl border text-center transition flex flex-col items-center justify-center tracking-wide ${
//                     tripType === "round-trip"
//                       ? "border-blue-500 bg-blue-50/50 text-blue-700 ring-1 ring-blue-500"
//                       : "border-gray-200 text-black hover:bg-gray-50"
//                   }`}
//                 >
//                   <span className="text-xs font-bold">Round Trip</span>
//                   <span className="text-[10px] text-gray-500 mt-0.5">Min 250 KM / Day</span>
//                 </button>
//               </div>
//             </div>

//             {/* Address fields */}
//             <div className="space-y-3.5">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 <div>
//                   <label className="block text-xs font-medium text-gray-700 mb-1">Pickup Address</label>
//                   <div className="relative">
//                     <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500" />
//                     <input type="text" name="pickupAddress" value={formData.pickupAddress} onChange={handleInputChange} required placeholder="Pickup Location" className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500" />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-xs font-medium text-gray-700 mb-1">Drop Address</label>
//                   <div className="relative">
//                     <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500" />
//                     <input type="text" name="dropAddress" value={formData.dropAddress} onChange={handleInputChange} required placeholder="Drop Location" className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500" />
//                   </div>
//                 </div>
//               </div>

//               {/* Personal Info */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 <div>
//                   <label className="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
//                   <div className="relative">
//                     <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500" />
//                     <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required placeholder="Full Name" className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500" />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-xs font-medium text-gray-700 mb-1">Mobile Number</label>
//                   <div className="relative">
//                     <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500" />
//                     <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} required placeholder="Mobile Number" className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500" />
//                   </div>
//                 </div>
//               </div>

//               {/* Date & Time */}
//               <div className="grid grid-cols-2 gap-3">
//                 <div>
//                   <label className="block text-xs font-medium text-gray-700 mb-1">Pickup Date</label>
//                   <div className="relative">
//                     <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500 pointer-events-none" />
//                     <input type="date" name="pickupDate" value={formData.pickupDate} onChange={handleInputChange} required className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500" />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-xs font-medium text-gray-700 mb-1">Pickup Time</label>
//                   <div className="relative">
//                     <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500 pointer-events-none" />
//                     <input type="time" name="pickupTime" value={formData.pickupTime} onChange={handleInputChange} required className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500" />
//                   </div>
//                 </div>
//               </div>

//               {/* Dynamic Return field */}
//               <AnimatePresence initial={false}>
//                 {tripType === "round-trip" && (
//                   <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
//                     <label className="block text-xs font-medium text-gray-700 mb-1">Return Date</label>
//                     <div className="relative">
//                       <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500 pointer-events-none" />
//                       <input type="date" name="returnDate" value={formData.returnDate} onChange={handleInputChange} required={tripType === "round-trip"} className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500" />
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//               {/* Dynamic Select Vehicle List with Custom Bata Sub-label */}
//               <div>
//                 <div className="flex justify-between items-center mb-1.5">
//                   <label className="block text-xs font-semibold text-gray-700 uppercase">Select Vehicle</label>
//                   <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">
//                     Driver Bata: {activeVehicleObject?.bata}
//                   </span>
//                 </div>
//                 <Swiper
//                   spaceBetween={8}
//                   slidesPerView={3.5}
//                   modules={[Autoplay]} 
//     autoplay={{
//       delay: 1000, 
//       disableOnInteraction: false, 
//       pauseOnMouseEnter: true, 
//     }}
//                   breakpoints={{
//                     0: { slidesPerView: 2.5 },
//                     400: { slidesPerView: 3.2 },
//                     500: { slidesPerView: 4 },
//                   }}
//                   className="w-full vehicle-swiper"
//                 >
//                   {currentFleet.map((vehicle) => (
//                     <SwiperSlide key={vehicle.id}>
//                       <div
//                         onClick={() => setSelectedVehicle(vehicle.id)}
//                         className={`cursor-pointer p-2 rounded-xl border text-center transition flex flex-col items-center justify-between h-[84px] m-1 bg-white ${
//                           selectedVehicle === vehicle.id
//                             ? "border-blue-500 bg-blue-50/20 ring-1 ring-blue-500"
//                             : "border-gray-200 hover:border-gray-300"
//                         }`}
//                       >
//                         <div className="h-10 w-full flex items-center justify-center mix-blend-multiply">
//                           <img src={vehicle.img} alt={vehicle.name} className="h-full object-contain max-w-full rounded" />
//                         </div>
//                         <div>
//                           <div className="text-[10px] font-bold text-blue-700 leading-none">{vehicle.price}</div>
//                           <div className="text-[8px] text-gray-900 font-black mt-0.5 uppercase tracking-wide">{vehicle.name}</div>
//                         </div>
//                       </div>
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//               </div>
//             </div>

//             <button type="submit" className="w-full mt-5 bg-blue-700 hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl text-sm transition tracking-wide text-center shadow-md">
//               Book Now
//             </button>
//             <span className="text-xs text-center text-gray-700 font-medium mt-2">Toll Gate, State Permit, Hill Station, Parking - Charges Extra.</span>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
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

const BACKGROUND_IMAGES = ["/download.avif"];

const VEHICLES_DATABASE = {
  "one-way": [
    { id: "sedan", name: "SEDAN", price: "₹15/KM", bata: "₹400", img: "/BookingCars/swift-dzire-taxi.avif" },
    { id: "innova", name: "INNOVA", price: "₹20/KM", bata: "₹500", img: "/BookingCars/marazzo-taxi.avif" },
    { id: "crysta", name: "CRYSTA", price: "₹23/KM", bata: "₹500", img: "/BookingCars/innova-taxi.avif" },
  ],
  "round-trip": [
    { id: "sedan", name: "SEDAN", price: "₹14/KM", bata: "₹400/Day", img: "/BookingCars/swift-dzire-taxi.avif" },
    { id: "innova", name: "INNOVA", price: "₹19/KM", bata: "₹500/Day", img: "/BookingCars/marazzo-taxi.avif" },
    { id: "crysta", name: "CRYSTA", price: "₹22/KM", bata: "₹600/Day", img: "/BookingCars/innova-taxi.avif" },
    { id: "hyscross", name: "HYSCROSS", price: "₹37/KM", bata: "₹600/Day", img: "/BookingCars/innova-taxi.avif" },
    { id: "urbania-12", name: "URBANIA 12", price: "₹35/KM", bata: "₹1000/Day", img: "/BookingCars/urbania.avif" },
    { id: "urbania-16", name: "URBANIA 16", price: "₹38/KM", bata: "₹1000/Day", img: "/BookingCars/urbania.avif" },
    { id: "tempo-12", name: "TEMPO 12", price: "₹24/KM", bata: "₹1000/Day", img: "/BookingCars/tempo.avif" },
    { id: "tempo-18", name: "TEMPO 18", price: "₹28/KM", bata: "₹1000/Day", img: "/BookingCars/tempo.avif" },
  ]
};

// Request only the 'places' library to optimize loading speed
const GOOGLE_MAPS_LIBRARIES = ["places"];

export default function TaxiBookingHero() {
  const [tripType, setTripType] = useState("one-way");
  const [selectedVehicle, setSelectedVehicle] = useState("sedan");

  // Autocomplete instance reference anchors
  const pickupAutocompleteRef = useRef(null);
  const dropAutocompleteRef = useRef(null);

  // High-performance API script loader hook instance
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries: GOOGLE_MAPS_LIBRARIES,
    region: "IN", // Focus suggestions inside India geofence parameters
  });

  useEffect(() => {
    const available = VEHICLES_DATABASE[tripType];
    const matchExists = available.some(v => v.id === selectedVehicle);
    if (!matchExists && available.length > 0) {
      setSelectedVehicle(available[0].id);
    }
  }, [tripType]);

  const getCurrentTimeFormatted = () => {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  };

  const getCurrentDateFormatted = () => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  };

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

  // Capture selection updates from pickup suggest overlay
  const onPickupPlaceChanged = () => {
    if (pickupAutocompleteRef.current !== null) {
      const place = pickupAutocompleteRef.current.getPlace();
      if (place.formatted_address) {
        setFormData((prev) => ({ ...prev, pickupAddress: place.formatted_address }));
      }
    }
  };

  // Capture selection updates from drop suggest overlay
  const onDropPlaceChanged = () => {
    if (dropAutocompleteRef.current !== null) {
      const place = dropAutocompleteRef.current.getPlace();
      if (place.formatted_address) {
        setFormData((prev) => ({ ...prev, dropAddress: place.formatted_address }));
      }
    }
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const activeFleet = VEHICLES_DATABASE[tripType];
    const targetVehicle = activeFleet.find((v) => v.id === selectedVehicle);
    const whatsappBaseNumber = "919677792455";

    let message = `*🚕 NEW TAXI BOOKING REQUEST* \n\n`;
    message += `*Trip Type:* ${tripType === "one-way" ? "One Way Drop" : "Round Trip Journey"}\n`;
    message += `*Selected Vehicle:* ${targetVehicle ? targetVehicle.name : selectedVehicle.toUpperCase()}\n`;
    message += `*Estimated Fare Rate:* ${targetVehicle ? targetVehicle.price : "N/A"}\n`;
    message += `*Driver Bata:* ${targetVehicle ? targetVehicle.bata : "N/A"}\n\n`;
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

    const encryptedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappBaseNumber}&text=${encryptedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const currentFleet = VEHICLES_DATABASE[tripType];
  const activeVehicleObject = currentFleet.find(v => v.id === selectedVehicle) || currentFleet[0];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-32 pb-16 px-4 md:px-8 lg:px-16 overflow-hidden bg-white">
      {/* Background Image Slider Layer */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect={"fade"}
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-[#073376]/70 to-black/90" />
      
      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold uppercase text-white">
            Chennai Pondicherry
            <br />
            <span className="text-blue-500">One Way & Round Trip</span> <br />
            Taxi Service
          </h1>
          <p className="text-white md:text-lg max-w-xl">
            Book reliable one way, round trip and airport taxi services across{" "}
            <span className="font-bold text-blue-500">Tamil Nadu & Pondicherry</span>{" "}
            with professional drivers, transparent pricing and 24/7 booking support.
          </p>
          <div className="grid grid-cols-2 gap-y-3 gap-x-2 max-w-md text-sm font-medium text-black">
            {["Verified Drivers", "Transparent Pricing", "24/7 Support", "Clean Vehicles"].map((f, i) => (
              <div key={i} className="flex items-center gap-2.5 bg-gray-50 border border-gray-100 p-2.5 rounded-xl">
                <Check className="w-4 h-4 text-blue-700 shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a href="tel:+919677792455" className="flex items-center justify-center gap-3 bg-green-500 text-white font-bold px-6 py-4 rounded-2xl hover:bg-green-600 transition shadow-xs text-sm uppercase tracking-wide">
              <Phone className="w-4 h-4 fill-current" />
              Call +91 9677792455
            </a>
            <a href="https://wa.me/919677792455" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-blue-700 text-white font-bold px-6 py-4 rounded-2xl hover:bg-blue-700 transition shadow-xs text-sm uppercase tracking-wide">
              <MessageSquare className="w-4 h-4 fill-current" />
              Book via WhatsApp
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Form */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
          <form onSubmit={handleBookingSubmit} className="bg-white text-gray-800 w-full max-w-full rounded-3xl p-6 shadow-2xl flex flex-col border border-gray-100/80">
            <div className="text-center mb-5">
              <h2 className="text-lg font-semibold text-gray-900">Book Your Premium Taxi Ride</h2>
              <p className="text-xs text-gray-500 font-medium">One Way • Round Trip • Airport Transfers Across Tamil Nadu</p>
            </div>
            
            {/* Trip Type Selector */}
            <div className="mb-4">
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">Trip Type</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setTripType("one-way")}
                  className={`p-3 rounded-xl border text-center transition flex flex-col items-center justify-center tracking-wide ${
                    tripType === "one-way"
                      ? "border-blue-500 bg-blue-50 text-blue-700 ring-1 ring-blue-500"
                      : "border-gray-200 text-black hover:bg-gray-50"
                  }`}
                >
                  <span className="text-xs font-bold">One Way Drop</span>
                  <span className="text-[10px] text-gray-500 mt-0.5">Min 130 KM</span>
                </button>
                <button
                  type="button"
                  onClick={() => setTripType("round-trip")}
                  className={`p-3 rounded-xl border text-center transition flex flex-col items-center justify-center tracking-wide ${
                    tripType === "round-trip"
                      ? "border-blue-500 bg-blue-50/50 text-blue-700 ring-1 ring-blue-500"
                      : "border-gray-200 text-black hover:bg-gray-50"
                  }`}
                >
                  <span className="text-xs font-bold">Round Trip</span>
                  <span className="text-[10px] text-gray-500 mt-0.5">Min 250 KM / Day</span>
                </button>
              </div>
            </div>

            {/* Address fields with Google Autocomplete Suggestions */}
            <div className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Pickup Address</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500 z-10" />
                    {isLoaded ? (
                      <Autocomplete
                        onLoad={(autocomplete) => (pickupAutocompleteRef.current = autocomplete)}
                        onPlaceChanged={onPickupPlaceChanged}
                      >
                        <input type="text" name="pickupAddress" value={formData.pickupAddress} onChange={handleInputChange} required placeholder={loadError ? "Enter Pickup Location" : "Typing shows options..."} className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500" />
                      </Autocomplete>
                    ) : (
                      <input type="text" name="pickupAddress" value={formData.pickupAddress} onChange={handleInputChange} required placeholder="Loading map engine..." className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm opacity-60 cursor-not-allowed" disabled />
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Drop Address</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500 z-10" />
                    {isLoaded ? (
                      <Autocomplete
                        onLoad={(autocomplete) => (dropAutocompleteRef.current = autocomplete)}
                        onPlaceChanged={onDropPlaceChanged}
                      >
                        <input type="text" name="dropAddress" value={formData.dropAddress} onChange={handleInputChange} required placeholder={loadError ? "Enter Drop Location" : "Typing shows options..."} className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500" />
                      </Autocomplete>
                    ) : (
                      <input type="text" name="dropAddress" value={formData.dropAddress} onChange={handleInputChange} required placeholder="Loading map engine..." className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm opacity-60 cursor-not-allowed" disabled />
                    )}
                  </div>
                </div>
              </div>

              {/* Personal Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500" />
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required placeholder="Full Name" className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Mobile Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500" />
                    <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} required placeholder="Mobile Number" className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500" />
                  </div>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Pickup Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500 pointer-events-none" />
                    <input type="date" name="pickupDate" value={formData.pickupDate} onChange={handleInputChange} required className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Pickup Time</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500 pointer-events-none" />
                    <input type="time" name="pickupTime" value={formData.pickupTime} onChange={handleInputChange} required className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500" />
                  </div>
                </div>
              </div>

              {/* Dynamic Return field */}
              <AnimatePresence initial={false}>
                {tripType === "round-trip" && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                    <label className="block text-xs font-medium text-gray-700 mb-1">Return Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500 pointer-events-none" />
                      <input type="date" name="returnDate" value={formData.returnDate} onChange={handleInputChange} required={tripType === "round-trip"} className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Dynamic Select Vehicle List */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="block text-xs font-semibold text-gray-700 uppercase">Select Vehicle</label>
                  <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">
                    Driver Bata: {activeVehicleObject?.bata}
                  </span>
                </div>
                <Swiper
                  spaceBetween={8}
                  slidesPerView={3.5}
                  modules={[Autoplay]} 
                  autoplay={{
                    delay: 2000, 
                    disableOnInteraction: false, 
                    pauseOnMouseEnter: true, 
                  }}
                  breakpoints={{
                    0: { slidesPerView: 2.5 },
                    400: { slidesPerView: 3.2 },
                    500: { slidesPerView: 4 },
                  }}
                  className="w-full vehicle-swiper"
                >
                  {currentFleet.map((vehicle) => (
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
                          <img src={vehicle.img} alt={vehicle.name} className="h-full object-contain max-w-full rounded" />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-700 leading-none">{vehicle.price}</div>
                          <div className="text-[8px] text-gray-900 font-black mt-0.5 uppercase tracking-wide">{vehicle.name}</div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            <button type="submit" className="w-full mt-5 bg-blue-700 hover:bg-blue-800 text-white font-bold py-3.5 px-4 rounded-xl text-sm transition tracking-wide text-center shadow-md">
              Book Now
            </button>
            <span className="text-xs text-center text-gray-700 font-medium mt-2">Toll Gate, State Permit, Hill Station, Parking - Charges Extra.</span>
          </form>
        </div>
      </div>
    </section>
  );
}