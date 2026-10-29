"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { agencyConfig } from "@/config/agency";
import { Search, MapPin, Home, IndianRupee, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";

export default function HeroSection() {
  const router = useRouter();
  const [transactionType, setTransactionType] = useState<"all" | "buy" | "rent" | "plot">("all");
  const [selectedLocality, setSelectedLocality] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (transactionType !== "all") params.append("transaction", transactionType);
    if (selectedLocality) params.append("locality", selectedLocality);
    if (selectedBudget) params.append("budget", selectedBudget);
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-amber-50/60 via-white to-[#FAF9F6]">
      {/* Dynamic Ambient Background Blobs */}
      <div className="absolute top-0 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-gold-300/30 to-rose-300/20 blur-3xl pointer-events-none anim-floating" />
      <div className="absolute top-1/3 left-5 w-80 h-80 rounded-full bg-gradient-to-tr from-emerald-200/30 to-blue-200/20 blur-3xl pointer-events-none anim-floating" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Entrance Fall Animation on Hero Headline */}
        <div className="text-center max-w-3xl mx-auto space-y-4 anim-fall">
          {/* Trust Pill with Gold Sparkle */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gold-300/60 shadow-md text-xs sm:text-sm font-bold text-slate-800">
            <Sparkles className="w-4 h-4 text-gold-500 animate-spin" style={{ animationDuration: "8s" }} />
            <span>{agencyConfig.city} के सबसे विश्वसनीय स्थानीय प्रॉपर्टी डीलर</span>
          </div>

          {/* Centered Large Headline with Vibrant Gold Gradient */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-navy-900 tracking-tight leading-tight">
            आपके बजट में{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-rose-500 to-amber-700">
              आपकी पसंद की
            </span>{" "}
            प्रॉपर्टी
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            {agencyConfig.serviceAreas.slice(0, 5).join(", ")} में 100% वेरिफाइड JDA पट्टा शुदा प्लॉट, स्वतंत्र मकान, और फ्लैट्स। सीधा सौदा, बिना किसी भ्रम के।
          </p>
        </div>

        {/* 💥 Search Box with Running Light Border & Left/Right Entrance */}
        <div className="mt-10 max-w-4xl mx-auto running-light-border shadow-2xl">
          <div className="p-5 sm:p-7 bg-white rounded-2xl">
            {/* Quick Filter Tabs (Buy / Rent / Plot) */}
            <div className="flex items-center gap-2 border-b border-slate-100 pb-4 mb-5 overflow-x-auto no-scrollbar">
              <button
                type="button"
                onClick={() => setTransactionType("all")}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all whitespace-nowrap ${
                  transactionType === "all"
                    ? "bg-navy-900 text-white shadow-md scale-102"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                सभी प्रॉपर्टीज (All)
              </button>
              <button
                type="button"
                onClick={() => setTransactionType("buy")}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all whitespace-nowrap ${
                  transactionType === "buy"
                    ? "bg-navy-900 text-white shadow-md scale-102"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                मकान / फ्लैट खरीदें
              </button>
              <button
                type="button"
                onClick={() => setTransactionType("plot")}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all whitespace-nowrap ${
                  transactionType === "plot"
                    ? "bg-navy-900 text-white shadow-md scale-102"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                आवासीय भूखंड (Plots)
              </button>
              <button
                type="button"
                onClick={() => setTransactionType("rent")}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all whitespace-nowrap ${
                  transactionType === "rent"
                    ? "bg-navy-900 text-white shadow-md scale-102"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                किराये पर (Rent)
              </button>
            </div>

            {/* Form Fields: Locality, Type, Budget + Search Submit */}
            <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
              {/* Locality Dropdown */}
              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  लोकेशन चुनें
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-gold-600 absolute left-3 top-1/2 -translate-y-1/2" />
                  <select
                    value={selectedLocality}
                    onChange={(e) => setSelectedLocality(e.target.value)}
                    className="w-full pl-9 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm font-bold text-slate-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-gold-500"
                  >
                    <option value="">सभी इलाके ({agencyConfig.city})</option>
                    {agencyConfig.serviceAreas.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Budget Range Dropdown */}
              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  अपेक्षित बजट
                </label>
                <div className="relative">
                  <IndianRupee className="w-4 h-4 text-gold-600 absolute left-3 top-1/2 -translate-y-1/2" />
                  <select
                    value={selectedBudget}
                    onChange={(e) => setSelectedBudget(e.target.value)}
                    className="w-full pl-9 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm font-bold text-slate-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-gold-500"
                  >
                    <option value="">कोई भी बजट</option>
                    {agencyConfig.budgetRanges.map((range) => (
                      <option key={range.id} value={range.id}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Property Category */}
              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  प्रॉपर्टी श्रेणी
                </label>
                <div className="relative">
                  <Home className="w-4 h-4 text-gold-600 absolute left-3 top-1/2 -translate-y-1/2" />
                  <select
                    className="w-full pl-9 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm font-bold text-slate-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-gold-500"
                  >
                    <option value="">सभी प्रकार</option>
                    {agencyConfig.propertyCategories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.hindiLabel}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="sm:col-span-3 lg:col-span-1 flex items-end">
                <button
                  type="submit"
                  className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-700 hover:to-amber-700 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-gold-600/30 transition-all hover:scale-102 active:scale-98"
                >
                  <Search className="w-4 h-4 stroke-[3]" />
                  <span>प्रॉपर्टी खोजें</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* 3 Genuine Local Dealer Guarantees with Left/Right Entrance */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-md card-3d-lift">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-slate-800">100% वेरिफाइड पट्टा व रजिस्ट्री</span>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-md card-3d-lift">
            <div className="p-2 rounded-xl bg-blue-50 text-blue-600 shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-slate-800">डायरेक्ट ओनर मीटिंग & मोलभाव</span>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-md card-3d-lift">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-600 shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-slate-800">फ्री साइट विजिट & बैंक लोन सहायता</span>
          </div>
        </div>
      </div>
    </section>
  );
}
