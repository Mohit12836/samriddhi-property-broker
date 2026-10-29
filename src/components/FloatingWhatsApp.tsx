"use client";

import React from "react";
import { agencyConfig } from "@/config/agency";
import { getGeneralWhatsAppLink } from "@/data/properties";
import { MessageCircle, Phone } from "lucide-react";

export default function FloatingWhatsApp() {
  const whatsappUrl = getGeneralWhatsAppLink(
    agencyConfig.whatsappNumber,
    "नमस्ते राजेश जी, मुझे प्रॉपर्टी के बारे में तुरंत जानकारी चाहिए।"
  );

  return (
    <aside aria-label="Quick Actions" className="fixed bottom-0 inset-x-0 z-40 md:bottom-6 md:right-6 md:left-auto md:w-auto p-3 bg-white/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-t border-slate-200 md:border-none shadow-2xl md:shadow-none">
      <div className="flex items-center gap-2 max-w-md mx-auto md:max-w-none">
        {/* Call Button for Mobile */}
        <a
          href={`tel:${agencyConfig.whatsappNumber}`}
          className="flex-1 md:hidden flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 text-white font-bold text-sm shadow-md"
        >
          <Phone className="w-4 h-4 text-gold-400" />
          <span>कॉल करें</span>
        </a>

        {/* WhatsApp Button with Running Pulse & Tactile Bounce */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 md:flex-initial flex items-center justify-center gap-2.5 py-3 px-5 rounded-xl md:rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm md:text-base shadow-lg shadow-emerald-600/30 transition-all hover:scale-105 active:scale-95 group"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 fill-white" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
            </span>
          </div>
          <span>व्हाट्सएप पर तुरंत संपर्क करें</span>
        </a>
      </div>
    </aside>
  );
}
