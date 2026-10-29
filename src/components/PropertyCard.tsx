import React from "react";
import Link from "next/link";
import { Property, getWhatsAppLeadLink } from "@/data/properties";
import { agencyConfig } from "@/config/agency";
import { MapPin, BedDouble, Bath, Move, Compass, MessageCircle, ArrowRight, Sparkles } from "lucide-react";

interface PropertyCardProps {
  property: Property;
  hasRunningBorder?: boolean;
}

export default function PropertyCard({ property, hasRunningBorder = true }: PropertyCardProps) {
  const whatsappUrl = getWhatsAppLeadLink(property, agencyConfig.whatsappNumber);

  return (
    <div
      className={`group relative rounded-2xl bg-white flex flex-col card-3d-lift ${
        hasRunningBorder ? "running-light-border" : "border border-slate-200"
      }`}
    >
      {/* 📸 UNIFORM HIGH-QUALITY LARGE IMAGE (No Badi/Chhoti Mismatch) */}
      <div className="relative aspect-16/10 w-full overflow-hidden rounded-t-2xl bg-slate-100">
        <img
          src={property.images[0] || "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80"}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Cinematic Gradient Mask for High Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

        {/* Top Badges Floating Over Image */}
        <div className="absolute top-3 inset-x-3 flex justify-between items-start pointer-events-none z-10">
          <div className="flex flex-col gap-1.5 items-start">
            <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-navy-900/95 text-white backdrop-blur-md border border-white/20 shadow-md">
              {property.transactionType === "buy" ? "बिक्री (Sale)" : property.transactionType === "rent" ? "किराया (Rent)" : "प्लॉट (Plot)"}
            </span>
            {property.highlightBadge && (
              <span className="px-3 py-0.5 rounded-full text-[11px] font-extrabold bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>{property.highlightBadge}</span>
              </span>
            )}
          </div>
          <span className="px-2.5 py-1 rounded-full text-[11px] font-black bg-white/95 text-slate-800 shadow-md backdrop-blur-md">
            ID: {property.id}
          </span>
        </div>

        {/* Price & Area Pinned to Bottom of Image */}
        <div className="absolute bottom-3 inset-x-3 flex justify-between items-end z-10">
          <div>
            <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block drop-shadow-sm">
              अपेक्षित मूल्य / Price
            </span>
            <span className="text-2xl sm:text-3xl font-black text-white drop-shadow-lg tracking-tight">
              {property.displayPrice}
            </span>
          </div>
          <span className="text-xs font-bold text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 shadow-sm">
            {property.area} {property.areaUnit}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between gap-4 bg-white rounded-b-2xl">
        <div>
          {/* Locality Tag */}
          <div className="flex items-center gap-1.5 text-xs font-bold text-gold-600 mb-1.5">
            <MapPin className="w-4 h-4 shrink-0 text-gold-600" />
            <span>{property.locality}, {property.city}</span>
          </div>

          {/* Title */}
          <Link href={`/properties/${property.slug}`}>
            <h3 className="font-black text-base sm:text-lg text-navy-900 group-hover:text-gold-600 transition-colors line-clamp-1 leading-snug">
              {property.hindiTitle || property.title}
            </h3>
          </Link>

          <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
            {property.description}
          </p>

          {/* Quick Specifications Grid */}
          <div className="mt-4 pt-3.5 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
            {property.bedrooms && (
              <div className="flex items-center gap-1.5 bg-slate-50 p-1.5 rounded-lg">
                <BedDouble className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                <span>{property.bedrooms} BHK बेडरूम</span>
              </div>
            )}
            {property.bathrooms && (
              <div className="flex items-center gap-1.5 bg-slate-50 p-1.5 rounded-lg">
                <Bath className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>{property.bathrooms} बाथरूम</span>
              </div>
            )}
            {property.roadWidth && (
              <div className="flex items-center gap-1.5 bg-slate-50 p-1.5 rounded-lg">
                <Move className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">{property.roadWidth}</span>
              </div>
            )}
            {property.facing && (
              <div className="flex items-center gap-1.5 bg-slate-50 p-1.5 rounded-lg">
                <Compass className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                <span className="truncate">{property.facing}</span>
              </div>
            )}
          </div>
        </div>

        {/* Dual Actions with Tactile Bounce */}
        <div className="pt-2 flex items-center gap-2">
          <Link
            href={`/properties/${property.slug}`}
            className="flex-1 py-3 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-900 font-extrabold text-xs text-center flex items-center justify-center gap-1.5 transition-all"
          >
            <span>विवरण देखें</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs text-center flex items-center justify-center gap-2 shadow-md shadow-emerald-600/30 transition-all hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>व्हाट्सएप</span>
          </a>
        </div>
      </div>
    </div>
  );
}
