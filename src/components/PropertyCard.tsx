import React from "react";
import Link from "next/link";
import { Property, getWhatsAppLeadLink } from "@/data/properties";
import { agencyConfig } from "@/config/agency";
import { MapPin, BedDouble, Bath, Move, Compass, MessageCircle, ArrowRight, Sparkles, CheckCircle2, Calculator } from "lucide-react";

interface PropertyCardProps {
  property: Property;
  hasRunningBorder?: boolean;
}

export default function PropertyCard({ property, hasRunningBorder = true }: PropertyCardProps) {
  const whatsappUrl = getWhatsAppLeadLink(property, agencyConfig.whatsappNumber);

  // Approximate Monthly EMI Calculation (8.5% interest for 20 years)
  const estimatedEMI = property.price > 50000 
    ? Math.round((property.price * 0.8 * 0.008678) / 1000) * 1000 
    : null;

  return (
    <div
      className={`group relative rounded-3xl overflow-hidden glass-card card-luxe-hover flex flex-col justify-between ${
        hasRunningBorder ? "luxury-glow-border" : "border border-amber-500/20"
      }`}
    >
      {/* 📸 FULL BLEED HIGH-RESOLUTION ARCHITECTURE IMAGE */}
      <div className="relative aspect-16/11 w-full overflow-hidden bg-slate-900">
        <img
          src={property.images[0] || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* 🎬 Dark Luxury Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#070B14]/30 to-black/50" />

        {/* Top Badges Over Image */}
        <div className="absolute top-3 inset-x-3 flex justify-between items-start z-10">
          <div className="flex flex-col gap-1.5 items-start">
            <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-black/75 text-amber-300 backdrop-blur-md border border-amber-400/40 shadow-lg">
              {property.transactionType === "buy" ? "बिक्री • FOR SALE" : property.transactionType === "rent" ? "किराया • TO LET" : "JDA पट्टा • PLOT"}
            </span>
            {property.highlightBadge && (
              <span className="px-3 py-0.5 rounded-full text-[10px] font-extrabold bg-gradient-to-r from-amber-500 to-amber-600 text-navy-950 shadow-md flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>{property.highlightBadge}</span>
              </span>
            )}
          </div>
          <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-white/10 text-white border border-white/20 backdrop-blur-md">
            ID: {property.id}
          </span>
        </div>

        {/* 💰 Price & Area Tag Pinned to Bottom of Photo */}
        <div className="absolute bottom-3 inset-x-3 flex justify-between items-end z-10">
          <div>
            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
              FINAL VERIFIED PRICE
            </span>
            <span className="text-2xl sm:text-3xl font-black text-white tracking-tight drop-shadow-md">
              {property.displayPrice}
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-black text-amber-300 bg-amber-950/80 border border-amber-400/30 px-3 py-1 rounded-full backdrop-blur-md block">
              {property.area} {property.areaUnit}
            </span>
          </div>
        </div>
      </div>

      {/* 📄 Card Body (Dark Obsidian Theme with Gold Highlights) */}
      <div className="p-5 flex flex-col flex-grow justify-between gap-4 bg-gradient-to-b from-[#0D1424] to-[#070B14]">
        <div>
          {/* Locality with Gold Pin */}
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 mb-1.5">
            <MapPin className="w-4 h-4 shrink-0" />
            <span>{property.locality}, {property.city}</span>
            <span className="w-1 h-1 rounded-full bg-amber-400 mx-1" />
            <span className="text-slate-400 text-[11px]">प्राइम लोकेशन</span>
          </div>

          {/* Hindi Title */}
          <Link href={`/properties/${property.slug}`}>
            <h3 className="font-black text-base sm:text-lg text-white group-hover:text-amber-400 transition-colors line-clamp-1 leading-snug">
              {property.hindiTitle || property.title}
            </h3>
          </Link>

          <p className="text-xs text-slate-300 mt-1.5 line-clamp-2 leading-relaxed">
            {property.description}
          </p>

          {/* Specification Pills Grid */}
          <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-xs font-bold text-slate-200">
            {property.bedrooms && (
              <div className="flex items-center gap-2 bg-white/5 p-2 rounded-xl border border-white/5">
                <BedDouble className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{property.bedrooms} BHK लग्जरी</span>
              </div>
            )}
            {property.bathrooms && (
              <div className="flex items-center gap-2 bg-white/5 p-2 rounded-xl border border-white/5">
                <Bath className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{property.bathrooms} बाथरूम</span>
              </div>
            )}
            {property.roadWidth && (
              <div className="flex items-center gap-2 bg-white/5 p-2 rounded-xl border border-white/5">
                <Move className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="truncate">{property.roadWidth}</span>
              </div>
            )}
            {property.facing && (
              <div className="flex items-center gap-2 bg-white/5 p-2 rounded-xl border border-white/5">
                <Compass className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="truncate">{property.facing}</span>
              </div>
            )}
          </div>

          {/* ⚡ Real-Time EMI Preview on Card */}
          {estimatedEMI && (
            <div className="mt-3 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
                <Calculator className="w-3.5 h-3.5 text-amber-400" /> अनुमानित बैंक EMI:
              </span>
              <span className="font-black text-amber-400">
                ₹{estimatedEMI.toLocaleString("en-IN")}/माह*
              </span>
            </div>
          )}
        </div>

        {/* 🚀 Dual CTAs: Details + Direct VIP WhatsApp */}
        <div className="pt-2 flex items-center gap-2.5">
          <Link
            href={`/properties/${property.slug}`}
            className="btn-haptic flex-1 py-3 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-black text-xs text-center flex items-center justify-center gap-1.5 transition-all border border-white/10"
          >
            <span>फुल फोटो व नक़्शा</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-haptic flex-1 py-3 px-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-black text-xs text-center flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>साइट विजिट बुक</span>
          </a>
        </div>
      </div>
    </div>
  );
}
