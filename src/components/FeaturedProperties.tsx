import React from "react";
import Link from "next/link";
import { sampleProperties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import { Sparkles, ArrowRight } from "lucide-react";

export default function FeaturedProperties() {
  const featured = sampleProperties.filter((p) => p.featured).slice(0, 6);

  return (
    <section className="py-16 sm:py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-black mb-2.5 shadow-2xs">
              <Sparkles className="w-4 h-4 text-amber-600 animate-bounce" />
              <span>हॉट प्रॉपर्टी डील्स • प्रीमियम लिस्टिंग्स</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy-900 tracking-tight">
              खास चुनिंदा प्रॉपर्टीज (Featured Properties)
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-2 font-medium">
              वेरिफाइड टाइटल, चौड़ी सड़कें, और डायरेक्ट ओनर डील्स के साथ उपलब्ध
            </p>
          </div>

          <Link
            href="/properties"
            className="mt-5 sm:mt-0 px-5 py-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-extrabold text-xs sm:text-sm inline-flex items-center gap-2 shadow-lg shadow-navy-900/20 transition-all hover:scale-105"
          >
            <span>सभी लिस्टिंग्स देखें</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Property Grid — EVERY CARD WITH FLOWING RUNNING BORDER & 3D LIFT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {featured.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              hasRunningBorder={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
