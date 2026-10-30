"use client";

import React, { useState } from "react";
import Link from "next/link";
import { agencyConfig } from "@/config/agency";
import { MapPin, Phone, MessageCircle, ExternalLink, Sparkles, X, CheckCircle2, ArrowRight } from "lucide-react";

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  // Mohit P Jain WhatsApp Link
  const mohitWhatsAppMessage = "नमस्ते मोहित जी, मुझे अपनी रियल एस्टेट एजेंसी / प्रॉपर्टी बिज़नेस के लिए ऐसी ही शानदार वेबसाइट बनवानी है। कृपया आगे की प्रक्रिया बताएं।";
  const mohitWhatsAppUrl = `https://wa.me/916263879076?text=${encodeURIComponent(mohitWhatsAppMessage)}`;

  return (
    <footer className="bg-[#0F172A] text-slate-300 pt-16 pb-24 md:pb-12 border-t-2 border-amber-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 🟡 1. YELLOW GLASS LOOK BOX WITH RUNNING LIGHT BORDER (CLICKABLE FOR POPUP) */}
        <div 
          onClick={() => setModalOpen(true)}
          className="yellow-glass-box mb-16 p-6 sm:p-10 max-w-4xl mx-auto text-center flex flex-col items-center justify-center cursor-pointer group"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 text-xs sm:text-sm font-black uppercase tracking-wider mb-3 shadow-md">
            <Sparkles className="w-4 h-4 fill-slate-950" />
            <span>वेबसाइट डेवलपमेंट सेवा • CLICK FOR DETAILS</span>
          </div>

          <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight leading-snug">
            "ऐसी ही शानदार प्रीमियम वेबसाइट बनवाने के लिए संपर्क करें"
          </h3>

          <div className="mt-2 text-base sm:text-2xl font-black text-amber-900 tracking-wide flex items-center justify-center gap-2">
            <span>Mohit P Jain</span>
            <span className="text-xs bg-slate-950 text-amber-300 px-3 py-1 rounded-full font-bold">
              क्लिक करें जानकारी के लिए 👆
            </span>
          </div>
        </div>

        {/* 🪟 2. POPUP MODAL (DARK/BLACK BACKGROUND + LIGHT HIGH-CONTRAST TEXT) */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl bg-[#090D1A] rounded-3xl border-2 border-amber-400/80 shadow-2xl p-6 sm:p-8 text-white overflow-hidden">
              
              {/* Close Button */}
              <button 
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-amber-400" />
              </button>

              {/* Popup Title */}
              <div className="text-center pb-4 border-b border-white/10">
                <span className="text-xs font-black text-amber-400 uppercase tracking-widest block mb-1">
                  डेवलपर संपर्क & विवरण
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white">
                  Mohit P Jain • 6263879076
                </h4>
                <p className="text-xs text-slate-300 mt-1 font-semibold">
                  ऐसी ही 100% मोबाइल रिस्पॉन्सिव, फास्ट और प्रीमियम रियल एस्टेट वेबसाइट 24-48 घंटे में लाइव करवाएं।
                </p>
              </div>

              {/* What Details are Required Box */}
              <div className="my-5 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs font-black text-amber-400 uppercase tracking-wider block mb-3">
                  📝 वेबसाइट शुरू करने के लिए केवल यह सामान्य जानकारी भेजें:
                </span>
                <ul className="space-y-2.5 text-xs sm:text-sm font-bold text-slate-200">
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
                    <span>3. शहर व प्रमुख सर्विस एरियाज (लोकेशन्स)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>4. 4 से 6 प्रॉपर्टीज की तस्वीरें, साइज व कीमतें</span>
                  </li>
                </ul>
              </div>

              {/* Direct Click & WhatsApp Actions */}
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
                  <span>कॉल: 6263879076</span>
                </a>
              </div>

            </div>
          </div>
        )}

        {/* 🏢 Main Footer Agency Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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
            <p className="text-sm text-slate-400 leading-relaxed">
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

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-xs text-slate-400 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p>© {new Date().getFullYear()} {agencyConfig.name}. सर्वाधिकार सुरक्षित।</p>
          <div className="flex items-center gap-4 text-xs font-bold text-amber-400">
            <span>वेबसाइट डिज़ाइन पार्टनर: Mohit P Jain (6263879076)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
