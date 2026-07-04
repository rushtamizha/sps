import {
  Home,
  Info,
  ShieldCheck,
  Car,
  CircleDollarSign
} from "lucide-react";

export const navData = [
  { 
    name: "Home", 
    link: "/", 
    icon: <Home size={16} /> 
  },
  {
    name: "About",
    slug: "about",
    link: "/about",
    icon: <Info size={16} />, // Swapped to Info to represent company profile/information
  },
  {
    name: "Services",
    slug: "services",
    link: "/services",
    icon: <ShieldCheck size={16} />, // Swapped to ShieldCheck to highlight features, safety, and why-choose benefits
  },
  {
    name: "Fleets",
    slug: "fleets",
    link: "/#fleets",
    icon: <Car size={16} />, // Keeps the clean automotive vector framework
  },
  {
    name: "Pricing",
    slug: "pricing",
    link: "/pricing",
    icon: <CircleDollarSign size={16} />, // Swapped from generic layout icons to a crisp currency/pricing indicator
  }
];