"use client";

import React, { useState } from "react";
import Link from "next/link";
import { agencyConfig } from "@/config/agency";
import { getGeneralWhatsAppLink } from "@/data/properties";
import { Phone, MessageCircle, Menu, X, ShieldCheck, MapPin, Sparkles } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "होम", href: "/" },
    { label: "प्रॉपर्टीज", href: "/properties" },
    { label: "विला & मकान", href: "/properties?type=residential" },
    { label: "JDA प्लॉट्स", href: "/properties?type=plot" },
    { label: "प्रॉपर्टी बेचें", href: "/sell" },
    { label: "ब्रोकर प्रोफाइल", href: "/about" },
    { label: "ऑफिस संपर्क", href: "/contact" },
  ];

  return (
    <>
      {/* 👑 FLOATING ULTRA-LUXE ISLAND NAVBAR (Lodha & Apple Style) */}
      <header className="sticky top-0 z-50 px-3 sm:px-6 py-2.5">
        <div className="max-w-7xl mx-auto">
          <div className="glass-island rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between shadow-2xl shadow-black/80">
            {/* Brand Logo & Name */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 flex items-center justify-center text-navy-950 font-black text-2xl shadow-lg shadow-amber-500/30 group-hover:scale-105 transition-transform shrink-0 border border-amber-300">
                <span>स</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-black text-base sm:text-xl tracking-tight text-white group-hover:text-amber-400 transition-colors">
                    {agencyConfig.name}
                  </span>
                  <span className="hidden sm:inline-flex text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    RERA Certified
                  </span>
                </div>
                <span className="text-[11px] text-amber-400/90 font-medium tracking-wide flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-400" /> Luxury Realty Consultant
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs font-bold text-slate-300 hover:text-amber-400 transition-colors tracking-wide uppercase py-1"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href={getGeneralWhatsAppLink(agencyConfig.whatsappNumber)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-haptic inline-flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-black text-xs sm:text-sm shadow-lg shadow-emerald-600/30 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span className="hidden sm:inline">VIP साइट विजिट</span>
                <span className="sm:hidden">व्हाट्सएप</span>
              </a>

              <a
                href={`tel:${agencyConfig.whatsappNumber}`}
                className="btn-haptic hidden sm:flex items-center justify-center p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/10"
                title="कॉल करें"
              >
                <Phone className="w-4 h-4 text-amber-400" />
              </a>

              {/* Mobile Drawer Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 max-w-7xl mx-auto glass-island rounded-2xl p-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-bold text-slate-200 hover:bg-white/10 hover:text-amber-400 flex justify-between items-center transition-colors"
                >
                  <span>{link.label}</span>
                  <span className="text-amber-400/60">→</span>
                </Link>
              ))}
            </div>

            <div className="pt-3 mt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href={`tel:${agencyConfig.whatsappNumber}`}
                className="w-full py-3 rounded-xl bg-amber-500 text-navy-950 font-black text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>सीधे कॉल करें: {agencyConfig.displayPhone}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
