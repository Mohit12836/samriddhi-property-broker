"use client";

import React, { useState } from "react";
import Link from "next/link";
import { agencyConfig } from "@/config/agency";
import { MapPin, Phone, MessageCircle, ExternalLink, Sparkles, X, CheckCircle2, ArrowRight, Code2 } from "lucide-react";

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  // Mohit P Jain WhatsApp Link
  const mohitWhatsAppMessage = "नमस्ते मोहित जी, मुझे अपनी रियल एस्टेट एजेंसी / प्रॉपर्टी बिज़नेस के लिए ऐसी ही शानदार वेबसाइट बनवानी है। कृपया आगे की प्रक्रिया बताएं।";
  const mohitWhatsAppUrl = `https://wa.me/916263879076?text=${encodeURIComponent(mohitWhatsAppMessage)}`;

  return (
    <footer className="bg-[#0A0F1D] text-slate-300 pt-16 pb-12 border-t-2 border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 🏢 1. MAIN AGENCY FOOTER DETAILS (OFFICE, SERVICES, CONTACTS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-slate-800">
          {/* Col 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 font-black text-xl shadow-md">
                स
              </div>
              <span className="font-extrabold text-xl text-white">
                {agencyConfig.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed font-medium">
              {agencyConfig.city} के प्रमुख क्षेत्रों में 12+ वर्षों का भरोसेमंद अनुभव। पारदर्शी सौदे, प्रत्यक्ष मालिक से बातचीत और कानूनी रजिस्ट्री में पूर्ण सहयोग।
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>प्रमुख सेवा क्षेत्र ({agencyConfig.city})</span>
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm font-semibold">
              {agencyConfig.serviceAreas.map((area) => (
                <li key={area}>
                  <Link
                    href={`/properties?locality=${encodeURIComponent(area)}`}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400/60" />
                    <span>{area}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">त्वरित लिंक</h4>
            <ul className="space-y-2 text-sm font-semibold">
              <li>
                <Link href="/properties?type=house" className="hover:text-amber-400 transition-colors">
                  विला व स्वतंत्र मकान
                </Link>
              </li>
              <li>
                <Link href="/properties?type=plot" className="hover:text-amber-400 transition-colors">
                  JDA अप्रूव्ड प्लॉट्स
                </Link>
              </li>
              <li>
                <Link href="/sell" className="hover:text-amber-400 transition-colors text-amber-400">
                  अपनी प्रॉपर्टी फ्री में लिस्ट करें →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base mb-4">कार्यालय संपर्क</h4>
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <span className="text-slate-300">{agencyConfig.officeAddress}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <a href={`tel:${agencyConfig.whatsappNumber}`} className="hover:text-amber-400 font-bold text-white">
                {agencyConfig.displayPhone}
              </a>
            </div>
          </div>
        </div>

        {/* 🏢 2. NORMAL COPYRIGHT BAR */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {agencyConfig.name}. All rights reserved.</p>
          <p>Verified Property Dealer Portal Jaipur</p>
        </div>

        {/* 🟡 3. SABSE NICHE: THE HIGH-CONTRAST PROFESSIONAL YELLOW GLASS BOX (ABSOLUTE BOTTOM) */}
        <div className="pt-4 pb-8">
          <div 
            onClick={() => setModalOpen(true)}
            className="w-full max-w-4xl mx-auto rounded-2xl p-5 sm:p-7 transition-all duration-300 cursor-pointer shadow-xl relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #FEF08A 0%, #FDE047 50%, #FACC15 100%)",
              border: "3px solid #CA8A04",
              boxShadow: "0 10px 30px -5px rgba(234, 179, 8, 0.4)"
            }}
          >
            {/* Top Micro Tag */}
            <div className="flex items-center justify-between mb-2">
              <span className="px-3 py-1 rounded-full bg-slate-950 text-amber-300 text-[11px] font-black uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 fill-amber-300" />
                <span>वेबसाइट डिज़ाइन & डेवलपमेंट</span>
              </span>
              <span className="text-[11px] font-black text-amber-950 bg-amber-200/80 px-2.5 py-0.5 rounded-md border border-amber-400">
                CLICK TO OPEN DETAILS 👆
              </span>
            </div>

            {/* Main Text: 100% Solid Dark Black/Navy for Crystal Clear Contrast on Yellow */}
            <div className="text-center my-2">
              <h3 className="text-lg sm:text-2xl md:text-3xl font-black text-slate-950 tracking-tight leading-snug">
                "ऐसी ही शानदार प्रीमियम वेबसाइट बनवाने के लिए संपर्क करें"
              </h3>
              <div className="mt-1 flex items-center justify-center gap-2">
                <span className="text-base sm:text-xl font-black text-slate-900 underline decoration-slate-950 underline-offset-4">
                  Mohit P Jain
                </span>
                <span className="text-xs sm:text-sm font-black bg-slate-950 text-white px-2.5 py-0.5 rounded-full">
                  6263879076
                </span>
              </div>
            </div>

            {/* Helper Text */}
            <p className="text-center text-xs sm:text-sm font-extrabold text-amber-950 mt-2">
              👉 क्लिक करें — सारी जानकारी, जरूरी डिटेल्स और डायरेक्ट व्हाट्सएप लिंक देखें
            </p>
          </div>
        </div>

        {/* 🪟 4. MODAL POPUP: PURE BLACK BACKGROUND + PURE WHITE/GOLD TEXT (ZERO BLURRY MUD) */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-xl bg-[#090D1A] rounded-3xl border-2 border-amber-400 shadow-2xl p-6 sm:p-8 text-white">
              
              {/* Close Button */}
              <button 
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-amber-400" />
              </button>

              {/* Title */}
              <div className="text-center pb-4 border-b border-slate-800">
                <span className="text-xs font-black text-amber-400 uppercase tracking-widest block mb-1">
                  वेबसाइट डेवलपर विवरण
                </span>
                <h4 className="text-2xl sm:text-3xl font-black text-white">
                  Mohit P Jain
                </h4>
                <div className="inline-block mt-1 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 font-bold text-xs border border-amber-400/30">
                  फ़ोन / व्हाट्सएप: 6263879076
                </div>
              </div>

              {/* Required Details List with 100% Crisp Contrast */}
              <div className="my-5 p-4 rounded-2xl bg-slate-900/90 border border-slate-700">
                <span className="text-xs font-black text-amber-300 uppercase tracking-wider block mb-3">
                  📋 वेबसाइट बनाने के लिए केवल ये जानकारी भेजें:
                </span>
                <ul className="space-y-2.5 text-xs sm:text-sm font-bold text-slate-100">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>1. आपकी एजेंसी / फर्म का नाम व लोगो</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>2. ओनर का नाम व व्हाट्सएप नंबर</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>3. शहर व प्रमुख सर्विस एरियाज (Locality)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>4. 4 से 6 प्रॉपर्टीज की तस्वीरें, साइज व कीमतें</span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={mohitWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>क्लिक करें और व्हाट्सएप करें</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="tel:6263879076"
                  className="py-3.5 px-5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <Phone className="w-4 h-4 text-slate-950" />
                  <span>कॉल करें</span>
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </footer>
  );
}
