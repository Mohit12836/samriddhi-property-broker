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
    <section className="relative pt-4 pb-14 md:pt-8 md:pb-20 overflow-hidden bg-gradient-to-b from-amber-50/70 via-white to-[#F8FAFC]">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 right-10 w-96 h-96 rounded-full bg-amber-200/30 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-5 w-80 h-80 rounded-full bg-emerald-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-4">
                    {/* 🌟 OWNER PROFILE & BRAND PORTFOLIO (COMPACT OPTION B) */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-2.5 sm:gap-4 p-2 sm:py-2 sm:px-5 rounded-2xl sm:rounded-full bg-white border border-amber-300 shadow-md mx-auto text-left transition-all hover:border-amber-400">
            {/* Owner Photo with Golden Border & Online status */}
            <div className="flex items-center gap-2.5 shrink-0">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80"
                  alt={agencyConfig.brokerName}
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-amber-500 shadow-xs"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" title="ऑनलाइन उपलब्ध"></span>
              </div>
              <div className="sm:hidden text-left">
                <div className="text-xs font-black text-slate-900 leading-tight">{agencyConfig.brokerName}</div>
                <div className="text-[10px] font-bold text-amber-700">{agencyConfig.name}</div>
              </div>
            </div>

            {/* Owner & Brand Details + Portfolio Stats */}
            <div className="flex flex-col gap-1 text-center sm:text-left">
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-xs sm:text-sm font-black text-slate-900">{agencyConfig.brokerName}</span>
                <span className="text-[10px] font-bold text-slate-400">•</span>
                <span className="text-xs font-bold text-amber-700">{agencyConfig.name}</span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-extrabold border border-emerald-200">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" /> प्रमाणित सलाहकार
                </span>
              </div>

              {/* Portfolio Stats Badges */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 text-[10px] sm:text-[11px] font-extrabold text-slate-700">
                <span className="bg-amber-100/90 text-amber-900 px-2 py-0.5 rounded-md">⭐ 12+ वर्ष अनुभव</span>
                <span className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded-md">🏆 500+ डील्स</span>
                <span className="bg-emerald-100/90 text-emerald-900 px-2 py-0.5 rounded-md">✓ 100% वेरिफाइड</span>
              </div>
            </div>
          </div>

          {/* High-Contrast Bold Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#0F172A] tracking-tight leading-tight">
            आपके बजट में{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-rose-600 to-amber-700 underline decoration-amber-400">
              आपकी पसंद की
            </span>{" "}
            प्रॉपर्टी
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-semibold">
            {agencyConfig.serviceAreas.slice(0, 5).join(", ")} में 100% वेरिफाइड JDA पट्टा प्लॉट, स्वतंत्र मकान, और फ्लैट्स। सीधा सौदा, बिना किसी भ्रम के।
          </p>
        </div>

        {/* 💥 Search Box with Bright Laser Running Border */}
        <div className="mt-8 sm:mt-10 max-w-4xl mx-auto laser-running-card shadow-2xl">
          <div className="p-4 sm:p-7 bg-white rounded-2xl">
            {/* Quick Filter Tabs */}
            <div className="flex items-center gap-2 border-b border-slate-200 pb-4 mb-4 overflow-x-auto no-scrollbar">
              <button
                type="button"
                onClick={() => setTransactionType("all")}
                className={`px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all whitespace-nowrap ${
                  transactionType === "all"
                    ? "bg-[#0F172A] text-white shadow-md"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                सभी प्रॉपर्टीज
              </button>
              <button
                type="button"
                onClick={() => setTransactionType("buy")}
                className={`px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all whitespace-nowrap ${
                  transactionType === "buy"
                    ? "bg-[#0F172A] text-white shadow-md"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                मकान / विला खरीदें
              </button>
              <button
                type="button"
                onClick={() => setTransactionType("plot")}
                className={`px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all whitespace-nowrap ${
                  transactionType === "plot"
                    ? "bg-[#0F172A] text-white shadow-md"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                JDA प्लॉट्स (Plots)
              </button>
              <button
                type="button"
                onClick={() => setTransactionType("rent")}
                className={`px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all whitespace-nowrap ${
                  transactionType === "rent"
                    ? "bg-[#0F172A] text-white shadow-md"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                किराये पर (Rent)
              </button>
            </div>

            {/* Inputs Grid */}
            <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {/* Locality */}
              <div>
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">
                  लोकेशन चुनें
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-amber-600 absolute left-3 top-1/2 -translate-y-1/2" />
                  <select
                    value={selectedLocality}
                    onChange={(e) => setSelectedLocality(e.target.value)}
                    className="w-full pl-9 pr-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-xs sm:text-sm font-bold text-slate-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-500"
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

              {/* Budget */}
              <div>
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">
                  अपेक्षित बजट
                </label>
                <div className="relative">
                  <IndianRupee className="w-4 h-4 text-amber-600 absolute left-3 top-1/2 -translate-y-1/2" />
                  <select
                    value={selectedBudget}
                    onChange={(e) => setSelectedBudget(e.target.value)}
                    className="w-full pl-9 pr-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-xs sm:text-sm font-bold text-slate-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-500"
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

              {/* Category */}
              <div>
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">
                  प्रॉपर्टी प्रकार
                </label>
                <div className="relative">
                  <Home className="w-4 h-4 text-amber-600 absolute left-3 top-1/2 -translate-y-1/2" />
                  <select
                    className="w-full pl-9 pr-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-xs sm:text-sm font-bold text-slate-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="">सभी श्रेणियां</option>
                    {agencyConfig.propertyCategories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.hindiLabel}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Search Submit */}
              <div className="sm:col-span-3 lg:col-span-1 flex items-end">
                <button
                  type="submit"
                  className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-700 hover:to-amber-700 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/30 transition-all hover:scale-102"
                >
                  <Search className="w-4 h-4 stroke-[3]" />
                  <span>प्रॉपर्टी खोजें</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* 3 Clear Trust Pillars */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span className="text-xs sm:text-sm font-black text-slate-800">100% वेरिफाइड पट्टा व रजिस्ट्री</span>
          </div>
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
            <span className="text-xs sm:text-sm font-black text-slate-800">डायरेक्ट ओनर मीटिंग & मोलभाव</span>
          </div>
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
            <span className="text-xs sm:text-sm font-black text-slate-800">फ्री साइट विजिट & बैंक लोन सहायता</span>
          </div>
        </div>
      </div>
    </section>
  );
}
