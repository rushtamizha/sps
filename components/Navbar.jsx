

"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { ChevronDown, Menu, X, MessageCircle, MapPin } from "lucide-react";
import Link from "next/link";
// Ensure these paths match your folder structure
import { navData, companyConfig } from "@/data";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-5 capitalize w-full flex flex-col items-center px-4 z-[999]">
      {/* HEADER BAR */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`w-full max-w-7xl rounded-full p-3 flex items-center justify-between shadow-sm transition-all duration-500 bg-white border border-gray-100 ${
          scrolled ? "shadow-xs border-gray-200/80 backdrop-blur-md" : ""
        }`}
      >
        {/* LOGO SECTION */}
        <Link
          href="/"
          className="flex items-center gap-3 pr-4 cursor-pointer group"
        >
          <div className="relative flex-shrink-0 transition-transform duration-300 h-13 w-13 group-hover:scale-110">
            <img
              src="/logo.png"
              alt="Logo"
              className="object-cover w-full h-full  rounded-full border-blue-50"
            />
          </div>
          <div className="flex flex-col justify-center leading-tight">
            <p className="text-md font-bold  uppercase text-gray-900">
              Chennai - Pondi
              <span className="ml-1 text-blue-600">Taxi</span>
            </p>
            <p className="text-xs font-medium  text-blue-600  tracking-wide">
              Premium Ride Experience
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="items-center hidden px-4 space-x-1 lg:flex">
          {navData.map((menu) => (
  <div
    key={menu.name} // Prefer a unique string like name/id over index
    className="relative px-3 py-2 transition-all rounded-full cursor-pointer group hover:bg-blue-600/5"
    onMouseEnter={() => setActiveMenu(menu.name)}
    onMouseLeave={() => setActiveMenu(null)}
  >
    <Link href={menu.link || "#"}>
      <span className="flex items-center gap-2 text-sm font-semibold text-gray-700 group-hover:text-blue-600">
        {/* Changed 'hidden' to 'hidden group-hover:block' to show on hover */}
        <span className="hidden transition-colors opacity-70 group-hover:block group-hover:text-blue-500">
          {menu.icon}
        </span>
        {menu.name}
        {menu.items}
      </span>
    </Link>
  </div>
))}
        </div>

        {/* RIGHT CTA */}
        <div className="items-center hidden gap-3 rounded-full lg:flex">
          <button
            onClick={() => router.push("/contact")}
            className="flex items-center gap-2 py-3 text-xs font-bold  text-white trcaking-wide uppercase transition-all rounded-full shadow-md bg-blue-600 px-7 hover:bg-blue-700"
          >
           <MessageCircle size={14} /> Book Now
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="flex items-center justify-center w-10 h-10 transition-colors rounded-full lg:hidden bg-gray-50 text-gray-900 hover:bg-gray-100"
        >
          {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="lg:hidden absolute top-[80px] left-4 right-4 max-w-7xl bg-white rounded-[2rem] shadow-2xl border border-gray-100 p-6 z-50 origin-top"
          >
            <div className="flex flex-col gap-5">
              {navData.map((menu, idx) => (
                <div key={idx} className=" border-gray-50  pb- last:pb-0">
                  <Link 
                    href={menu.link || "#"} 
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center gap-3 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors group"
                  >
                    <span className="text-gray-400 group-hover:text-blue-600 group">{menu.icon}</span>
                    <span>{menu.name}</span>
                  </Link>
                </div>
              ))}

              <div className="pt-2">
                <button
                  onClick={() => {
                    router.push("/contact");
                    setIsMobileOpen(false);
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-full text-sm font-bold flex items-center justify-center gap-2 shadow-lg  transition-colors"
                >
                  <MessageCircle size={18} /> BOOK NOW 
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;