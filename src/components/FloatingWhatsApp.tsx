"use client";

import React from "react";
import { agencyConfig } from "@/config/agency";
import { getGeneralWhatsAppLink } from "@/data/properties";
import { MessageCircle, Phone, Sparkles } from "lucide-react";

export default function FloatingWhatsApp() {
  const whatsappUrl = getGeneralWhatsAppLink(
    agencyConfig.whatsappNumber,
    "नमस्ते राजेश जी, मुझे आपकी वेबसाइट पर लिस्टेड प्रॉपर्टीज देखने के लिए फ्री साइट विजिट शेड्यूल करनी है।"
  );

  return (
    <aside aria-label="Quick Actions" className="fixed bottom-0 inset-x-0 z-40 md:bottom-6 md:right-6 md:left-auto md:w-auto p-2.5 sm:p-0">
      <div className="max-w-md mx-auto md:max-w-none glass-island md:bg-transparent rounded-2xl md:rounded-full p-2 md:p-0 border border-amber-500/30 md:border-none shadow-2xl shadow-black">
        <div className="flex items-center gap-2">
          {/* Mobile Call Button */}
          <a
            href={`tel:${agencyConfig.whatsappNumber}`}
            className="flex-1 md:hidden flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 text-white font-black text-xs border border-white/10"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>कॉल करें</span>
          </a>

          {/* Luxury WhatsApp Button with Pulsing Gold Badge */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 md:flex-initial flex items-center justify-center gap-2.5 py-3 px-5 rounded-xl md:rounded-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-500 hover:from-emerald-400 hover:to-emerald-500 text-white font-black text-xs sm:text-sm md:text-base shadow-xl shadow-emerald-600/40 transition-all hover:scale-105 active:scale-95 group"
          >
            <div className="relative">
              <MessageCircle className="w-5 h-5 fill-white" />
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
              </span>
            </div>
            <span>VIP साइट विजिट बुक करें</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
