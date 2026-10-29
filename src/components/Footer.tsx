import React from "react";
import Link from "next/link";
import { agencyConfig } from "@/config/agency";
import { getGeneralWhatsAppLink } from "@/data/properties";
import { MapPin, Phone, Mail, Clock, Shield, CheckCircle, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300 pt-16 pb-24 md:pb-12 border-t-2 border-gold-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: About Broker & Verification */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold-500 flex items-center justify-center text-navy-900 font-black text-xl shadow-md">
                स
              </div>
              <span className="font-extrabold text-xl text-white">
                {agencyConfig.name}
              </span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {agencyConfig.city} के प्रमुख क्षेत्रों में 12+ वर्षों का भरोसेमंद अनुभव। पारदर्शी सौदे, प्रत्यक्ष मालिक से बातचीत और कानूनी रजिस्ट्री में पूर्ण सहयोग।
            </p>
            {agencyConfig.reraNumber && (
              <div className="p-3 rounded-lg bg-navy-800 border border-slate-700/80 text-xs">
                <span className="text-gold-400 font-bold block mb-1">RERA पंजीकृत सलाहकार:</span>
                <span className="text-slate-300 font-mono">{agencyConfig.reraNumber}</span>
              </div>
            )}
          </div>

          {/* Col 2: Service Areas */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold-400" />
              <span>प्रमुख सेवा क्षेत्र ({agencyConfig.city})</span>
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {agencyConfig.serviceAreas.map((area) => (
                <li key={area}>
                  <Link
                    href={`/properties?locality=${encodeURIComponent(area)}`}
                    className="hover:text-gold-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500/60" />
                    <span>{area}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">त्वरित लिंक</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/properties?type=house" className="hover:text-gold-400 transition-colors">
                  विला व स्वतंत्र मकान
                </Link>
              </li>
              <li>
                <Link href="/properties?type=plot" className="hover:text-gold-400 transition-colors">
                  JDA अप्रूव्ड प्लॉट्स
                </Link>
              </li>
              <li>
                <Link href="/properties?type=flat" className="hover:text-gold-400 transition-colors">
                  लक्जरी एवं बजट फ्लैट्स
                </Link>
              </li>
              <li>
                <Link href="/properties?type=commercial" className="hover:text-gold-400 transition-colors">
                  कमर्शियल शॉप व शोरूम
                </Link>
              </li>
              <li>
                <Link href="/sell" className="hover:text-gold-400 transition-colors font-semibold text-gold-400">
                  अपनी प्रॉपर्टी फ्री में लिस्ट करें →
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-400 transition-colors">
                  ब्रोकर प्रोफाइल एवं अनुभव
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base mb-4">कार्यालय संपर्क</h4>
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
              <span>{agencyConfig.officeAddress}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-4 h-4 text-gold-400 shrink-0" />
              <a href={`tel:${agencyConfig.whatsappNumber}`} className="hover:text-gold-400 font-semibold">
                {agencyConfig.displayPhone}
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Clock className="w-4 h-4 text-gold-400 shrink-0" />
              <span>{agencyConfig.operatingHours}</span>
            </div>

            <div className="pt-2">
              <a
                href={agencyConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-gold-400 hover:text-gold-300 font-semibold underline"
              >
                <span>गूगल मैप्स पर ऑफिस की लोकेशन देखें</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Trust Policy */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-300 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} {agencyConfig.name}. सर्वाधिकार सुरक्षित। स्थानीय प्रॉपर्टी सलाहकार।</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-300">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> कोई छुपे हुए चार्ज नहीं
            </span>
            <span className="flex items-center gap-1 text-slate-300">
              <Shield className="w-3.5 h-3.5 text-gold-400" /> वास्तविक साइट विजिट
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
