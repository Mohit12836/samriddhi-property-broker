"use client";

import React, { useState } from "react";
import Link from "next/link";
import { agencyConfig } from "@/config/agency";
import { getGeneralWhatsAppLink } from "@/data/properties";
import { Phone, MessageCircle, Menu, X, ShieldCheck, MapPin } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "होम", href: "/" },
    { label: "सभी प्रॉपर्टीज़", href: "/properties" },
    { label: "मकान / फ्लैट", href: "/properties?type=residential" },
    { label: "प्लॉट्स", href: "/properties?type=plot" },
    { label: "प्रॉपर्टी बेचें", href: "/sell" },
    { label: "हमारे बारे में", href: "/about" },
    { label: "संपर्क", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm">
      {/* Top micro-bar: perfectly aligned, no broken boxes */}
      <div className="bg-navy-900 text-slate-200 text-xs py-2 px-4 sm:px-8 border-b border-gold-500/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 text-center sm:text-left">
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-slate-200">
              {agencyConfig.city} के प्रमुख क्षेत्रों में 100% सत्यापित प्रॉपर्टी डील्स
            </span>
          </div>
          <div className="flex items-center justify-center gap-4 text-slate-300">
            <span className="hidden md:flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-gold-400" /> {agencyConfig.city}, {agencyConfig.state}
            </span>
            <a
              href={`tel:${agencyConfig.whatsappNumber}`}
              className="flex items-center gap-1 text-gold-400 hover:text-gold-300 font-bold"
            >
              <Phone className="w-3.5 h-3.5" /> {agencyConfig.displayPhone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Agency Name — Clean, Aligned, No Box Overflows */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-navy-900 via-navy-800 to-amber-600 flex items-center justify-center text-white shadow-lg shadow-navy-900/15 border-2 border-gold-400 group-hover:scale-105 transition-transform shrink-0">
              <span className="font-black text-2xl text-gold-300">स</span>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-black text-lg sm:text-xl md:text-2xl tracking-tight text-navy-900 leading-tight">
                  {agencyConfig.name}
                </span>
                <span className="hidden sm:inline-flex text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-300 shadow-2xs">
                  RERA Registered
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                {agencyConfig.brokerName}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-slate-700 hover:text-gold-600 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-gold-500 after:absolute after:bottom-0 after:left-0 after:transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={getGeneralWhatsAppLink(agencyConfig.whatsappNumber)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-emerald-600/30 transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>व्हाट्सएप पूछताछ</span>
            </a>
            <a
              href={`tel:${agencyConfig.whatsappNumber}`}
              className="btn-tactile p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-900 border border-slate-300 shadow-2xs"
              title="कॉल करें"
            >
              <Phone className="w-4 h-4 text-navy-900" />
            </a>
          </div>

          {/* Mobile Menu Action */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getGeneralWhatsAppLink(agencyConfig.whatsappNumber)}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-emerald-600 text-white shadow-sm"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation with Clean Alignment */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/98 px-5 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-1 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-amber-50 hover:text-gold-700 flex justify-between items-center transition-colors"
              >
                <span>{link.label}</span>
                <span className="text-slate-400">→</span>
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
            <a
              href={getGeneralWhatsAppLink(agencyConfig.whatsappNumber)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-600 text-white font-extrabold text-sm text-center shadow-lg shadow-emerald-600/30"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>सीधे व्हाट्सएप पर बात करें</span>
            </a>
            <a
              href={`tel:${agencyConfig.whatsappNumber}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-navy-900 text-white font-bold text-sm text-center"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>कॉल करें: {agencyConfig.displayPhone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
