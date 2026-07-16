

// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade } from "swiper/modules";
// import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
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

// const VEHICLES_DATABASE = {
//   "one-way": [
//    { id: "sedan", name: "SEDAN", price: 15, bata: 400, img: "/BookingCars/swift-dzire-taxi.avif" },
//    { id: "etios", name: "ETIOS", price: 15, bata: 400, img: "/BookingCars/swift-dzire-taxi.avif" },
//    { id: "ciaz", name: "CIAZ", price: 16, bata: 400, img: "/BookingCars/swift-dzire-taxi.avif" },
//    { id: "ertiga", name: "ERTIGA", price: 15, bata: 400, img: "/BookingCars/swift-dzire-taxi.avif" },
//    { id: "carens", name: "KIA CARENS", price: 14, bata: 400, img: "/BookingCars/carren.avif" },
//     { id: "innova", name: "INNOVA", price: 19, bata: 500, img: "/BookingCars/marazzo-taxi.avif" },
//     { id: "crysta", name: "CRYSTA", price: 22, bata: 600, img: "/BookingCars/innova-taxi.avif" },
//     { id: "tempo-12", name: "TEMPO 12", price: 24, bata: 1000, img: "/BookingCars/tempo.avif" },
//   ],
//   "round-trip": [
//    { id: "sedan", name: "SEDAN", price: 14, bata: 400, img: "/BookingCars/swift-dzire-taxi.avif" },
//    { id: "ciaz", name: "CIAZ", price: 14, bata: 400, img: "/BookingCars/swift-dzire-taxi.avif" },
//    { id: "ertiga", name: "ERTIGA", price: 14, bata: 400, img: "/BookingCars/swift-dzire-taxi.avif" },
//    { id: "carens", name: "KIA CARENS", price: 14, bata: 400, img: "/BookingCars/carren.avif" },
//     { id: "innova", name: "INNOVA", price: 19, bata: 500, img: "/BookingCars/marazzo-taxi.avif" },
//     { id: "crysta", name: "CRYSTA", price: 22, bata: 600, img: "/BookingCars/innova-taxi.avif" },
//     { id: "tempo-12", name: "TEMPO 12", price: 24, bata: 1000, img: "/BookingCars/tempo.avif" },
//   ]
// };

// // Request only the 'places' library to optimize loading speed
// const GOOGLE_MAPS_LIBRARIES = ["places"];

// export default function TaxiBookingHero() {
//   const [tripType, setTripType] = useState("one-way");
//   const [selectedVehicle, setSelectedVehicle] = useState("sedan");

//   // Autocomplete instance reference anchors
//   const pickupAutocompleteRef = useRef(null);
//   const dropAutocompleteRef = useRef(null);

//   // High-performance API script loader hook instance
//   const { isLoaded, loadError } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
//     libraries: GOOGLE_MAPS_LIBRARIES,
//     region: "IN", // Focus suggestions inside India geofence parameters
//   });

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

//   // Capture selection updates from pickup suggest overlay
//   const onPickupPlaceChanged = () => {
//     if (pickupAutocompleteRef.current !== null) {
//       const place = pickupAutocompleteRef.current.getPlace();
//       if (place.formatted_address) {
//         setFormData((prev) => ({ ...prev, pickupAddress: place.formatted_address }));
//       }
//     }
//   };

//   // Capture selection updates from drop suggest overlay
//   const onDropPlaceChanged = () => {
//     if (dropAutocompleteRef.current !== null) {
//       const place = dropAutocompleteRef.current.getPlace();
//       if (place.formatted_address) {
//         setFormData((prev) => ({ ...prev, dropAddress: place.formatted_address }));
//       }
//     }
//   };

//   const handleBookingSubmit = (e) => {
//     e.preventDefault();
//     const activeFleet = VEHICLES_DATABASE[tripType];
//     const targetVehicle = activeFleet.find((v) => v.id === selectedVehicle);
//     const whatsappBaseNumber = "919626850192";

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

//   const currentFleet = VEHICLES_DATABASE[tripType];
//   const activeVehicleObject = currentFleet.find(v => v.id === selectedVehicle) || currentFleet[0];

//   return (
//     <section className="relative min-h-screen w-full flex items-center justify-center pt-32 pb-16 px-4 md:px-8 lg:px-16 overflow-hidden bg-white">
//       {/* Background Image Slider Layer */}
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
//             <span className="font-bold text-blue-500">Chennai & Pondicherry</span>{" "}
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
//             <a href="tel:+919626850192" className="flex items-center justify-center gap-3 bg-green-500 text-white font-bold px-6 py-4 rounded-2xl hover:bg-green-600 transition shadow-xs text-sm uppercase tracking-wide">
//               <Phone className="w-4 h-4 fill-current" />
//               Call +91 9626850192
//             </a>
//             <a href="https://wa.me/919626850192" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-blue-700 text-white font-bold px-6 py-4 rounded-2xl hover:bg-blue-700 transition shadow-xs text-sm uppercase tracking-wide">
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

//             {/* Address fields with Google Autocomplete Suggestions */}
//             <div className="space-y-3.5">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 <div>
//                   <label className="block text-xs font-medium text-gray-700 mb-1">Pickup Address</label>
//                   <div className="relative">
//                     <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500 z-10" />
//                     {isLoaded ? (
//                       <Autocomplete
//                         onLoad={(autocomplete) => (pickupAutocompleteRef.current = autocomplete)}
//                         onPlaceChanged={onPickupPlaceChanged}
//                       >
//                         <input type="text" name="pickupAddress" value={formData.pickupAddress} onChange={handleInputChange} required placeholder={loadError ? "Enter Pickup Location" : "Typing shows options..."} className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500" />
//                       </Autocomplete>
//                     ) : (
//                       <input type="text" name="pickupAddress" value={formData.pickupAddress} onChange={handleInputChange} required placeholder="Loading map engine..." className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm opacity-60 cursor-not-allowed" disabled />
//                     )}
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-xs font-medium text-gray-700 mb-1">Drop Address</label>
//                   <div className="relative">
//                     <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500 z-10" />
//                     {isLoaded ? (
//                       <Autocomplete
//                         onLoad={(autocomplete) => (dropAutocompleteRef.current = autocomplete)}
//                         onPlaceChanged={onDropPlaceChanged}
//                       >
//                         <input type="text" name="dropAddress" value={formData.dropAddress} onChange={handleInputChange} required placeholder={loadError ? "Enter Drop Location" : "Typing shows options..."} className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500" />
//                       </Autocomplete>
//                     ) : (
//                       <input type="text" name="dropAddress" value={formData.dropAddress} onChange={handleInputChange} required placeholder="Loading map engine..." className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm opacity-60 cursor-not-allowed" disabled />
//                     )}
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

//               {/* Dynamic Select Vehicle List */}
//               <div>
//                 <div className="flex justify-between items-center mb-1.5 ">
//                   <label className="block text-xs font-semibold text-gray-700 uppercase">Select Vehicle</label>
//                   <span className="text-[11px] font-medium uppercase text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">
//                     Driver Bata: {activeVehicleObject?.bata}
//                   </span>
//                 </div>
//                 <Swiper
//                   spaceBetween={8}
//                   slidesPerView={3.5}
//                   modules={[Autoplay]} 
//                   autoplay={{
//                     delay: 2000, 
//                     disableOnInteraction: false, 
//                     pauseOnMouseEnter: true, 
//                   }}
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

//             <button type="submit" className="w-full mt-5 bg-blue-700 hover:bg-blue-800 text-white font-bold py-3.5 px-4 rounded-xl text-sm transition tracking-wide text-center shadow-md">
//               Book Now
//             </button>
//             <span className="text-xs text-center text-gray-700 font-medium mt-2 hidden">Toll Gate, State Permit, Hill Station, Parking - Charges Extra.</span>
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
  Calendar,
  Clock,
  Users,
} from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";

const BACKGROUND_IMAGES = ["/download.avif"];

const VEHICLES_DATABASE = {
  "one-way": [
    { id: "sedan", name: "SEDAN", price: 15, bata: 400, maxPax: 4, img: "/BookingCars/swift-dzire-taxi.avif" },
    { id: "etios", name: "ETIOS", price: 15, bata: 400, maxPax: 4, img: "/BookingCars/etios-taxi.avif" },
    { id: "ciaz", name: "CIAZ", price: 16, bata: 400, maxPax: 4, img: "/BookingCars/etios-taxi.avif" },
    { id: "ertiga", name: "ERTIGA", price: 15, bata: 400, maxPax: 6, img: "/BookingCars/marazzo-taxi.avif" },
    { id: "carens", name: "KIA CARENS", price: 14, bata: 400, maxPax: 6, img: "/BookingCars/carren.avif" },
    { id: "innova", name: "INNOVA", price: 19, bata: 500, maxPax: 7, img: "/BookingCars/innova-taxi.avif" },
    { id: "crysta", name: "CRYSTA", price: 22, bata: 600, maxPax: 7, img: "/BookingCars/innova-taxi.avif" },
    { id: "tempo-12", name: "TEMPO 12", price: 24, bata: 1000, maxPax: 12, img: "/BookingCars/tempo.avif" },
  ],
  "round-trip": [
    { id: "sedan", name: "SEDAN", price: 14, bata: 400, maxPax: 4, img: "/BookingCars/swift-dzire-taxi.avif" },
    { id: "ciaz", name: "CIAZ", price: 14, bata: 400, maxPax: 4, img: "/BookingCars/swift-dzire-taxi.avif" },
     { id: "etios", name: "ETIOS", price: 15, bata: 400, maxPax: 4, img: "/BookingCars/etios-taxi.avif" },
    { id: "ertiga", name: "ERTIGA", price: 14, bata: 400, maxPax: 6, img: "/BookingCars/marazzo-taxi.avif" },
    { id: "carens", name: "KIA CARENS", price: 14, bata: 400, maxPax: 6, img: "/BookingCars/carren.avif" },
    { id: "innova", name: "INNOVA", price: 19, bata: 500, maxPax: 7, img: "/BookingCars/innova-taxi.avif" },
    { id: "crysta", name: "CRYSTA", price: 22, bata: 600, maxPax: 7, img: "/BookingCars/innova-taxi.avif" },
    { id: "tempo-12", name: "TEMPO 12", price: 24, bata: 1000, maxPax: 12, img: "/BookingCars/tempo.avif" },
  ]
};

const GOOGLE_MAPS_LIBRARIES = ["places"];

export default function TaxiBookingHero() {
  const [tripType, setTripType] = useState("one-way");
  const [selectedVehicle, setSelectedVehicle] = useState("sedan");
  const [passengerCount, setPassengerCount] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const swiperRef = useRef(null);
  const pickupAutocompleteRef = useRef(null);
  const dropAutocompleteRef = useRef(null);

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries: GOOGLE_MAPS_LIBRARIES,
    region: "IN",
  });

  const currentFleet = VEHICLES_DATABASE[tripType];

  // Rule 1: Changing passenger counts updates chosen vehicle selection index matching capacity bounds
  const handlePassengerChange = (count) => {
    const parsedCount = parseInt(count) || 1;
    setPassengerCount(parsedCount);

    const validOption = currentFleet.find((v) => parsedCount <= v.maxPax);
    if (validOption && validOption.id !== selectedVehicle) {
      setSelectedVehicle(validOption.id);
    }
  };

  // Rule 2: Swapping tabs filters matching vehicles safely
  useEffect(() => {
    const matchExists = currentFleet.some((v) => v.id === selectedVehicle);
    if (!matchExists && currentFleet.length > 0) {
      setSelectedVehicle(currentFleet[0].id);
    }
  }, [tripType, currentFleet, selectedVehicle]);

  // Rule 3: Selecting a car card shifts passenger capacity view back safely inside constraints
  const handleVehicleSelection = (vehicleId) => {
    setSelectedVehicle(vehicleId);
    const selectedUnit = currentFleet.find((v) => v.id === vehicleId);
    if (selectedUnit && passengerCount > selectedUnit.maxPax) {
      setPassengerCount(selectedUnit.maxPax);
    }
  };

  // Auto-scroll Swiper pointer correction whenever active vehicle index shifts
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const activeIdx = currentFleet.findIndex((v) => v.id === selectedVehicle);
      if (activeIdx !== -1) {
        swiperRef.current.swiper.slideTo(activeIdx);
      }
    }
  }, [selectedVehicle, currentFleet]);

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
    pickupDate: getCurrentDateFormatted(),
    pickupTime: getCurrentTimeFormatted(),
    returnDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onPickupPlaceChanged = () => {
    if (pickupAutocompleteRef.current !== null) {
      const place = pickupAutocompleteRef.current.getPlace();
      if (place.formatted_address) {
        setFormData((prev) => ({ ...prev, pickupAddress: place.formatted_address }));
      }
    }
  };

  const onDropPlaceChanged = () => {
    if (dropAutocompleteRef.current !== null) {
      const place = dropAutocompleteRef.current.getPlace();
      if (place.formatted_address) {
        setFormData((prev) => ({ ...prev, dropAddress: place.formatted_address }));
      }
    }
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const targetVehicle = currentFleet.find((v) => v.id === selectedVehicle) || currentFleet[0];
    const whatsappBaseNumber = "919626850192";

    const payloadData = {
      ...formData,
      tripType: tripType === "one-way" ? "One Way Drop" : "Round Trip",
      vehicleName: targetVehicle.name,
      ratePerKm: `₹${targetVehicle.price}/KM`,
      driverBata: `₹${targetVehicle.bata}`,
      passengers: passengerCount,
    };

    // 1. Asynchronous Email Dispatch Vector
    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payloadData),
      });
    } catch (err) {
      console.error("Email backup dispatch failed:", err);
    }

    // 2. Immediate WhatsApp Communication Generation Loop
    let message = `*🚕 NEW TAXI BOOKING REQUEST* \n\n`;
    message += `*Trip Type:* ${payloadData.tripType}\n`;
    message += `*Vehicle:* ${payloadData.vehicleName}\n`;
    message += `*Rate:* ${payloadData.ratePerKm}\n`;
    message += `*Driver Bata:* ${payloadData.driverBata}\n`;
    message += `*Passengers:* ${payloadData.passengers} Person(s)\n\n`;
    message += `*📍 Route Details:*\n`;
    message += `• *Pickup:* ${payloadData.pickupAddress || "Not Specified"}\n`;
    message += `• *Drop:* ${payloadData.dropAddress || "Not Specified"}\n\n`;
    message += `*📅 Schedule:*\n`;
    message += `• *Date:* ${payloadData.pickupDate}\n`;
    message += `• *Time:* ${payloadData.pickupTime}\n`;
    if (tripType === "round-trip" && payloadData.returnDate) {
      message += `• *Return Date:* ${payloadData.returnDate}\n`;
    }
    message += `\n`;
    message += `*👤 Contact Details:*\n`;
    message += `• *Name:* ${payloadData.fullName || "Not Specified"}\n`;
    message += `• *Mobile:* ${payloadData.mobileNumber || "Not Specified"}\n`;

    const encryptedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappBaseNumber}&text=${encryptedMessage}`;
    
    setIsSubmitting(false);
    window.open(whatsappUrl, "_blank");
  };

  const activeVehicleObject = currentFleet.find((v) => v.id === selectedVehicle) || currentFleet[0];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-32 pb-16 px-4 md:px-8 lg:px-16 overflow-hidden bg-white">
      {/* Slider Engine Background */}
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
        {/* Left Informational Pitch Column */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
            Chennai Pondicherry
            <br />
            <span className="text-blue-400">Premium Cabs</span>
          </h1>
          <p className="text-gray-200 md:text-lg max-w-xl">
            Reliable one way drops, airport transfers, and outstation trips across{" "}
            <span className="font-semibold text-blue-400">Chennai & Pondicherry</span> with 24/7 client dispatch.
          </p>
          <div className="space-y-2 max-w-md text-sm font-medium text-white">
            {["Verified Highway Fleets", "Fixed Dynamic Pricing Models", "Zero Hidden Allowances"].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-xl backdrop-blur-xs">
                <Check className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Ultra-Fast Optimized Booking Form */}
        <div className="lg:col-span-7 flex justify-center lg:justify-end w-full">
          <form onSubmit={handleBookingSubmit} className="bg-white text-gray-800 w-full max-w-2xl rounded-3xl p-6 shadow-2xl flex flex-col border border-gray-100">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-900 tracking-tight">Quick Cab Reservation</h2>
             
            </div>

            <div className="space-y-4">
              {/* Row 1: Trip Type Selection */}
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">1. Choose Trip Path</span>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setTripType("one-way")}
                    className={`p-3 rounded-xl border font-semibold text-sm transition-all flex flex-col items-center justify-center ${
                      tripType === "one-way"
                        ? "border-blue-600 bg-blue-50 text-blue-700 ring-2 ring-blue-600/20"
                        : "border-gray-200 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span>One Way Drop</span>
                    <span className="text-[10px] opacity-70 font-normal mt-0.5">Min 130 KM base limits</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setTripType("round-trip")}
                    className={`p-3 rounded-xl border font-semibold text-sm transition-all flex flex-col items-center justify-center ${
                      tripType === "round-trip"
                        ? "border-blue-600 bg-blue-50 text-blue-700 ring-2 ring-blue-600/20"
                        : "border-gray-200 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span>Round Trip</span>
                    <span className="text-[10px] opacity-70 font-normal mt-0.5">Min 250 KM / Day rules</span>
                  </button>
                </div>
              </div>

              {/* Row 2: Location Auto-complete Nodes */}
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">2. Route Architecture</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-600 z-10" />
                    {isLoaded ? (
                      <Autocomplete
                        onLoad={(autocomplete) => (pickupAutocompleteRef.current = autocomplete)}
                        onPlaceChanged={onPickupPlaceChanged}
                      >
                        <input type="text" name="pickupAddress" value={formData.pickupAddress} onChange={handleInputChange} required placeholder={loadError ? "Enter Pickup Point" : "Type Pickup Address..."} className="w-full pl-10 pr-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-colors" />
                      </Autocomplete>
                    ) : (
                      <input type="text" placeholder="Loading geo-engine..." className="w-full pl-10 pr-4 py-2.5 bg-gray-100 border border-gray-200 rounded-xl text-sm opacity-50 cursor-not-allowed" disabled />
                    )}
                  </div>

                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-600 z-10" />
                    {isLoaded ? (
                      <Autocomplete
                        onLoad={(autocomplete) => (dropAutocompleteRef.current = autocomplete)}
                        onPlaceChanged={onDropPlaceChanged}
                      >
                        <input type="text" name="dropAddress" value={formData.dropAddress} onChange={handleInputChange} required placeholder={loadError ? "Enter Drop Destination" : "Type Drop Destination..."} className="w-full pl-10 pr-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-colors" />
                      </Autocomplete>
                    ) : (
                      <input type="text" placeholder="Loading geo-engine..." className="w-full pl-10 pr-4 py-2.5 bg-gray-100 border border-gray-200 rounded-xl text-sm opacity-50 cursor-not-allowed" disabled />
                    )}
                  </div>
                </div>
              </div>

              {/* Row 3: Dispatch Time Matrix & Headcount Sync */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">Pickup Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    <input type="date" name="pickupDate" value={formData.pickupDate} onChange={handleInputChange} required className="w-full pl-10 pr-3 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:bg-white" />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">Pickup Time</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    <input type="time" name="pickupTime" value={formData.pickupTime} onChange={handleInputChange} required className="w-full pl-10 pr-3 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:bg-white" />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">Passengers</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    <select
                      value={passengerCount}
                      onChange={(e) => handlePassengerChange(e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:bg-white appearance-none cursor-pointer font-medium text-gray-800"
                    >
                      {[...Array(12)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} Passenger{i > 0 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Conditional Return Block for Round Trips */}
              <AnimatePresence initial={false}>
                {tripType === "round-trip" && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">Return Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      <input type="date" name="returnDate" value={formData.returnDate} onChange={handleInputChange} required={tripType === "round-trip"} className="w-full pl-10 pr-3 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:bg-white" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Row 4: Client Identification Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required placeholder="Your Name" className="w-full pl-10 pr-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:bg-white" />
                </div>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} required placeholder="WhatsApp Mobile Number" className="w-full pl-10 pr-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:bg-white" />
                </div>
              </div>

              {/* Row 5: Dynamic Vehicle Choice Carousel */}
              <div>
                <div className="flex justify-between items-center mb-2 ">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 ">3. Allocated Fleet Matrix</span>
                  <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md tracking-tight hidden">
                    Estimated Bata: ₹{activeVehicleObject?.bata}
                  </span>
                </div>
                <Swiper
                  ref={swiperRef}
                  spaceBetween={8}
                  slidesPerView={3.5}
                  modules={[Autoplay]}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: true,
                    pauseOnMouseEnter: true,
                  }}
                  breakpoints={{
                    0: { slidesPerView: 2.4 },
                    480: { slidesPerView: 3.2 },
                    640: { slidesPerView: 4.2 },
                  }}
                  className="w-full vehicle-swiper"
                >
                  {currentFleet.map((vehicle) => (
                    <SwiperSlide key={vehicle.id}>
                      <div
                        onClick={() => handleVehicleSelection(vehicle.id)}
                        className={`cursor-pointer p-2.5 rounded-xl border text-center transition-all flex flex-col items-center justify-between h-[90px] m-0.5 bg-white select-none ${
                          selectedVehicle === vehicle.id
                            ? "border-blue-600 bg-blue-50/30 ring-2 ring-blue-600/20 shadow-xs"
                            : "border-gray-100 hover:border-gray-200"
                        }`}
                      >
                        <div className="h-9 w-full flex items-center justify-center mix-blend-multiply">
                          <img src={vehicle.img} alt={vehicle.name} className="h-full object-contain pointer-events-none" />
                        </div>
                        <div className="w-full mt-1">
                          <div className="text-[11px] font-bold text-blue-600 leading-none hidden">₹{vehicle.price}/KM</div>
                          <div className="text-[8px] text-gray-900 font-extrabold mt-0.5 uppercase tracking-wide truncate">{vehicle.name}</div>
                          <div className="text-[7px] text-gray-400 font-medium mt-0.5">Max: {vehicle.maxPax} Pax</div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-5 bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-bold py-3.5 px-4 rounded-xl text-sm transition-all text-center shadow-lg flex items-center justify-center gap-2.5"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              {isSubmitting ? "Processing Fleet Matrix..." : "Book Instantly via WhatsApp"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}