"use client";

import React, { useState } from "react";
import Link from "next/link";
import { agencyConfig } from "@/config/agency";
import { MapPin, Phone, MessageCircle, X, CheckCircle2, ArrowRight } from "lucide-react";

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  // Mohit P Jain WhatsApp Link
  const mohitWhatsAppMessage = "नमस्ते मोहित जी, मुझे अपनी रियल एस्टेट एजेंसी / प्रॉपर्टी बिज़नेस के लिए ऐसी ही शानदार वेबसाइट बनवानी है। कृपया आगे की प्रक्रिया बताएं।";
  const mohitWhatsAppUrl = `https://wa.me/916263879076?text=${encodeURIComponent(mohitWhatsAppMessage)}`;

  return (
    <footer className="bg-[#0A0F1D] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 🏢 MAIN AGENCY FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
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

        {/* 🏢 COPYRIGHT BAR */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {agencyConfig.name}. All rights reserved.</p>
          <p>Verified Property Dealer Portal Jaipur</p>
        </div>

        {/* 🟡 CHHOTA SA BOX PILE COLOUR KA ROUND (EXACT JITNA BOLA UTNA) */}
        <div className="pt-2 pb-4 flex justify-center">
          <div
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FACC15] hover:bg-[#EAB308] text-slate-950 font-black text-xs sm:text-sm border-2 border-[#CA8A04] shadow-md cursor-pointer transition-transform hover:scale-105 active:scale-95"
          >
            <span>Website design Mohit P Jain</span>
            <span className="underline decoration-slate-950 underline-offset-2">click here</span>
            <span>aaj hi apni esi website banvaye</span>
          </div>
        </div>

        {/* 🪟 POPUP MODAL */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="relative w-full max-w-md bg-[#090D1A] rounded-2xl border-2 border-amber-400 shadow-2xl p-6 text-white">
              
              {/* Close Button */}
              <button 
                onClick={() => setModalOpen(false)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white"
                aria-label="Close"
              >
                <X className="w-4 h-4 text-amber-400" />
              </button>

              {/* Title */}
              <div className="text-center pb-3 border-b border-slate-800">
                <h4 className="text-xl font-black text-white">
                  Mohit P Jain
                </h4>
                <p className="text-xs text-amber-300 font-bold mt-0.5">
                  फ़ोन / व्हाट्सएप: 6263879076
                </p>
              </div>

              {/* Details List */}
              <div className="my-4 p-3.5 rounded-xl bg-slate-900 border border-slate-700">
                <span className="text-xs font-black text-amber-300 uppercase block mb-2">
                  📋 वेबसाइट बनाने के लिए यह जानकारी भेजें:
                </span>
                <ul className="space-y-2 text-xs font-bold text-slate-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>1. एजेंसी / फर्म का नाम व लोगो</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>2. ओनर का नाम व व्हाट्सएप नंबर</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>3. शहर व प्रमुख सर्विस एरियाज</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>4. 4 से 6 प्रॉपर्टीज की तस्वीरें, साइज व रेट्स</span>
                  </li>
                </ul>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <a
                  href={mohitWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>व्हाट्सएप करें</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="tel:6263879076"
                  className="py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs flex items-center justify-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-950" />
                  <span>कॉल</span>
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </footer>
  );
}
