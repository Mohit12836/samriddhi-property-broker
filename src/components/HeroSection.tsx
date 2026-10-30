"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { agencyConfig } from "@/config/agency";
import { Search, MapPin, Home, IndianRupee, ShieldCheck, CheckCircle2, Sparkles, PhoneCall } from "lucide-react";

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
    <section className="relative pt-6 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* 🌌 Background Luxury Gradient Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-80 h-80 rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          {/* Trust Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border border-amber-400/40 text-xs sm:text-sm font-black text-amber-400 shadow-lg shadow-black/50">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{agencyConfig.city} का #1 लक्ज़री रियल एस्टेट ब्रोकर नेटवर्क</span>
          </div>

          {/* Cinematic H1 */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            आपके सपनों का घर,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-amber-200 underline decoration-amber-500/60">
              आपके बजट में
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {agencyConfig.serviceAreas.slice(0, 5).join(", ")} में 100% वेरिफाइड JDA पट्टा प्लॉट, लग्जरी विला और फ्लैट्स। <strong className="text-amber-400 font-bold">डायरेक्ट ओनर मीटिंग & 0% हिडन चार्ज।</strong>
          </p>
        </div>

        {/* 💥 Search Box with Running Gold Neon Border */}
        <div className="mt-8 sm:mt-10 max-w-4xl mx-auto luxury-glow-border shadow-2xl">
          <div className="p-4 sm:p-7 bg-[#0D1424] rounded-3xl border border-white/10">
            {/* Quick Filter Tabs */}
            <div className="flex items-center gap-2 border-b border-white/10 pb-4 mb-4 overflow-x-auto no-scrollbar">
              <button
                type="button"
                onClick={() => setTransactionType("all")}
                className={`px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all whitespace-nowrap ${
                  transactionType === "all"
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-navy-950 shadow-md shadow-amber-500/30"
                    : "text-slate-300 hover:bg-white/5"
                }`}
              >
                सभी प्रॉपर्टीज
              </button>
              <button
                type="button"
                onClick={() => setTransactionType("buy")}
                className={`px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all whitespace-nowrap ${
                  transactionType === "buy"
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-navy-950 shadow-md shadow-amber-500/30"
                    : "text-slate-300 hover:bg-white/5"
                }`}
              >
                विला & मकान खरीदें
              </button>
              <button
                type="button"
                onClick={() => setTransactionType("plot")}
                className={`px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all whitespace-nowrap ${
                  transactionType === "plot"
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-navy-950 shadow-md shadow-amber-500/30"
                    : "text-slate-300 hover:bg-white/5"
                }`}
              >
                JDA प्लॉट्स (Plots)
              </button>
              <button
                type="button"
                onClick={() => setTransactionType("rent")}
                className={`px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all whitespace-nowrap ${
                  transactionType === "rent"
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-navy-950 shadow-md shadow-amber-500/30"
                    : "text-slate-300 hover:bg-white/5"
                }`}
              >
                किराये पर (Rent)
              </button>
            </div>

            {/* Inputs Grid */}
            <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {/* Locality */}
              <div>
                <label className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block mb-1">
                  लोकेशन चुनें
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-amber-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <select
                    value={selectedLocality}
                    onChange={(e) => setSelectedLocality(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 sm:py-3 rounded-xl border border-white/10 bg-white/5 text-xs sm:text-sm font-bold text-white focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="" className="bg-navy-900 text-white">सभी इलाके ({agencyConfig.city})</option>
                    {agencyConfig.serviceAreas.map((loc) => (
                      <option key={loc} value={loc} className="bg-navy-900 text-white">
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block mb-1">
                  अपेक्षित बजट
                </label>
                <div className="relative">
                  <IndianRupee className="w-4 h-4 text-amber-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <select
                    value={selectedBudget}
                    onChange={(e) => setSelectedBudget(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 sm:py-3 rounded-xl border border-white/10 bg-white/5 text-xs sm:text-sm font-bold text-white focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="" className="bg-navy-900 text-white">कोई भी बजट</option>
                    {agencyConfig.budgetRanges.map((range) => (
                      <option key={range.id} value={range.id} className="bg-navy-900 text-white">
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Type */}
              <div>
                <label className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block mb-1">
                  प्रॉपर्टी श्रेणी
                </label>
                <div className="relative">
                  <Home className="w-4 h-4 text-amber-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <select
                    className="w-full pl-9 pr-4 py-2.5 sm:py-3 rounded-xl border border-white/10 bg-white/5 text-xs sm:text-sm font-bold text-white focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="" className="bg-navy-900 text-white">सभी श्रेणियां</option>
                    {agencyConfig.propertyCategories.map((cat) => (
                      <option key={cat.id} value={cat.id} className="bg-navy-900 text-white">
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
                  className="w-full py-3 sm:py-3.5 px-5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-navy-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/30 transition-all hover:scale-102"
                >
                  <Search className="w-4 h-4 stroke-[3]" />
                  <span>प्रॉपर्टी खोजें</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* 3 VIP Trust Badges */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 p-3.5 rounded-2xl glass-card border border-white/10">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-slate-200">100% वेरिफाइड पट्टा व रजिस्ट्री</span>
          </div>
          <div className="flex items-center gap-3 p-3.5 rounded-2xl glass-card border border-white/10">
            <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-slate-200">डायरेक्ट ओनर मीटिंग & मोलभाव</span>
          </div>
          <div className="flex items-center gap-3 p-3.5 rounded-2xl glass-card border border-white/10">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-slate-200">फ्री साइट विजिट & बैंक लोन सहायता</span>
          </div>
        </div>
      </div>
    </section>
  );
}
