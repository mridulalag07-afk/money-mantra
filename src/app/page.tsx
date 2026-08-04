"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Menu,
  X,
  Phone,
  ArrowRight,
  ShieldCheck,
  HeartPulse,
  GraduationCap,
  PiggyBank,
  Briefcase,
  Car,
  CheckCircle2,
  Calculator as CalcIcon,
  Calendar,
  Clock,
  User,
  Mail,
  ArrowLeft,
} from "lucide-react";

// --- DATA ---
const CONTENT = {
  hero: {
    title: "Money Mantra",
    subtitle: "by Amit Alag",
    tagline: "Secure Today. Prosper Tomorrow.",
    description:
      "Helping Families and Businesses Build Financial Security Through Smart Insurance & Investment Solutions.",
    ctaPrimary: "Get Free Consultation",
    ctaSecondary: "Explore Insurance Plans",
    stats: [
      { value: "15+", label: "Years Experience" },
      { value: "5,000+", label: "Families Protected" },
      { value: "99.2%", label: "Claim Settlement Support" },
      { value: "₹500Cr+", label: "Assets Advised" },
    ],
  },
  products: [
    {
      id: "term-life",
      title: "Term Life Insurance",
      icon: ShieldCheck,
      description:
        "Comprehensive financial protection for your family's future at affordable premiums.",
      benefits: ["High coverage ratio", "Critical illness rider option", "Tax benefits under 80C"],
    },
    {
      id: "health-insurance",
      title: "Health Insurance",
      icon: HeartPulse,
      description:
        "Cashless hospitalization, pre/post care, and critical illness safeguards for your family.",
      benefits: ["Cashless at 10,000+ hospitals", "No-claim bonus rewards", "Restoration benefit"],
    },
    {
      id: "child-education",
      title: "Child Education Plans",
      icon: GraduationCap,
      description:
        "Guaranteed funds for higher education and milestone expenses even in your absence.",
      benefits: ["Waiver of premium option", "Flexible payout schedules", "Inflation-adjusted growth"],
    },
    {
      id: "retirement",
      title: "Retirement & Pension",
      icon: PiggyBank,
      description:
        "Build a stress-free recurring income stream for a comfortable post-retirement life.",
      benefits: ["Guaranteed lifetime annuity", "Capital protection", "Flexible accumulation options"],
    },
    {
      id: "business-insurance",
      title: "Business & Keyman Insurance",
      icon: Briefcase,
      description:
        "Protect key executives, business assets, and liability exposures seamlessly.",
      benefits: ["Keyman protection", "Group health plans", "Tax savings for enterprise"],
    },
    {
      id: "motor-travel",
      title: "Motor & Travel Insurance",
      icon: Car,
      description:
        "Instant protection for private vehicles, commercial fleets, and international travel.",
      benefits: ["Zero-depreciation add-on", "24/7 roadside help", "Global medical emergency cover"],
    },
  ],
  contact: {
    phone: "+91 98765 43210",
    whatsapp: "+919876543210",
    email: "consult@moneymantra.com",
    address: "Financial Hub Suite 402, Business Park, New Delhi, India",
  },
};

const SERVICES_LIST = [
  { id: "term-life", name: "Term Life Insurance", icon: ShieldCheck },
  { id: "health", name: "Health & Critical Illness", icon: HeartPulse },
  { id: "child-education", name: "Child Future & Education", icon: GraduationCap },
  { id: "retirement", name: "Retirement & Pension Plan", icon: PiggyBank },
  { id: "business", name: "Business & Keyman Cover", icon: Briefcase },
];

const TIME_SLOTS = [
  "10:00 AM - 11:00 AM",
  "11:30 AM - 12:30 PM",
  "02:00 PM - 03:00 PM",
  "04:00 PM - 05:00 PM",
  "06:00 PM - 07:00 PM",
];

// --- MAIN PAGE COMPONENT ---
export default function Home() {
  const [navOpen, setNavOpen] = useState(false);

  // Calculator state
  const [age, setAge] = useState<number>(30);
  const [coverage, setCoverage] = useState<number>(10000000);
  const [isSmoker, setIsSmoker] = useState<boolean>(false);

  const calculateEstimatedPremium = () => {
    let base = (coverage / 1000000) * 800;
    if (age > 35) base += (age - 35) * 350;
    if (isSmoker) base *= 1.5;
    return Math.round(base);
  };

  // Booking state
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    service: SERVICES_LIST[0].name,
    date: new Date().toISOString().split("T")[0],
    timeSlot: TIME_SLOTS[0],
    name: "",
    phone: "",
    email: "",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const updateFormData = (fields: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  };

  const handleNext = () => {
    if (step === 2 && (!formData.name || !formData.phone)) {
      alert("Please enter your name and phone number.");
      return;
    }
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    const waMessage = encodeURIComponent(
      `*New Consultation Booking*\n\n` +
        `*Name:* ${formData.name}\n` +
        `*Service:* ${formData.service}\n` +
        `*Date:* ${formData.date}\n` +
        `*Time Slot:* ${formData.timeSlot}\n` +
        `*Phone:* ${formData.phone}\n` +
        `*Email:* ${formData.email || "N/A"}`
    );
    setTimeout(() => {
      window.open(`https://wa.me/919876543210?text=${waMessage}`, "_blank");
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-gray-100 font-sans">
      {/* --- HEADER --- */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-emerald-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl shadow-lg shadow-emerald-500/20">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white block leading-none">
                  Money Mantra
                </span>
                <span className="text-xs text-amber-400 font-medium">by Amit Alag</span>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-300">
              <a href="#home" className="hover:text-emerald-400 transition-colors">Home</a>
              <a href="#booking" className="hover:text-emerald-400 transition-colors">Book Advisory</a>
              <a href="#products" className="hover:text-emerald-400 transition-colors">Products</a>
              <a href="#calculator" className="hover:text-emerald-400 transition-colors">Calculator</a>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <a
                href="#booking"
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-medium text-sm hover:shadow-lg hover:shadow-emerald-500/25 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4" /> Book Call
              </a>
            </div>

            <button onClick={() => setNavOpen(!navOpen)} className="md:hidden p-2 text-gray-300">
              {navOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {navOpen && (
          <div className="md:hidden bg-slate-900 border-b border-emerald-900/40 px-4 pt-2 pb-6 space-y-3">
            <a href="#home" onClick={() => setNavOpen(false)} className="block py-2 text-gray-300">Home</a>
            <a href="#booking" onClick={() => setNavOpen(false)} className="block py-2 text-gray-300">Book Advisory</a>
            <a href="#products" onClick={() => setNavOpen(false)} className="block py-2 text-gray-300">Products</a>
            <a href="#calculator" onClick={() => setNavOpen(false)} className="block py-2 text-gray-300">Calculator</a>
          </div>
        )}
      </header>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative min-h-[85vh] flex items-center justify-center bg-slate-950 text-white overflow-hidden py-16">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-900/40 border border-emerald-500/30 text-emerald-400 text-sm font-semibold mb-6">
              {CONTENT.hero.tagline}
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4">
              {CONTENT.hero.title}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">
                {CONTENT.hero.subtitle}
              </span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-gray-300 mb-10 leading-relaxed">
              {CONTENT.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a
                href="#booking"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-lg transition-all shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2"
              >
                {CONTENT.hero.ctaPrimary} <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#products"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 border border-gray-800 text-gray-200 font-semibold text-lg hover:border-emerald-500/50 transition-all"
              >
                {CONTENT.hero.ctaSecondary}
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-gray-800">
            {CONTENT.hero.stats.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-900/50 border border-emerald-900/20 backdrop-blur-sm">
                <div className="text-3xl font-extrabold text-amber-400 mb-1">{stat.value}</div>
                <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BOOKING WIDGET --- */}
      <section id="booking" className="py-16 bg-slate-950 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              1-on-1 Consultation
            </span>
            <h2 className="text-3xl font-bold mt-4 mb-2">
              Book Your <span className="text-emerald-400">Free Advisory Session</span>
            </h2>
            <p className="text-gray-400 text-sm">Schedule a direct strategy session with Amit Alag.</p>
          </div>

          <div className="bg-slate-900 border border-emerald-900/30 rounded-3xl p-6 sm:p-10 shadow-2xl">
            {!isSubmitted && (
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-800">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                        step >= s ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30" : "bg-slate-800 text-gray-500"
                      }`}
                    >
                      {s}
                    </div>
                    <span className={`text-xs font-medium hidden sm:inline ${step >= s ? "text-gray-200" : "text-gray-600"}`}>
                      {s === 1 ? "Select Plan" : s === 2 ? "Your Details" : "Confirm"}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10">
                  <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Consultation Scheduled!</h3>
                  <p className="text-gray-300 text-sm mb-6">
                    Thank you, <span className="text-emerald-400 font-semibold">{formData.name}</span>. Redirecting you to WhatsApp to confirm details...
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleBookingSubmit}>
                  {step === 1 && (
                    <div className="space-y-6">
                      <label className="block text-sm font-medium text-gray-300 mb-2">Select Consulting Topic</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {SERVICES_LIST.map((srv) => (
                          <button
                            key={srv.id}
                            type="button"
                            onClick={() => updateFormData({ service: srv.name })}
                            className={`p-3.5 rounded-xl text-left border transition-all text-xs flex items-center gap-3 ${
                              formData.service === srv.name
                                ? "bg-emerald-950/60 border-emerald-500 text-white"
                                : "bg-slate-950 border-gray-800 text-gray-400 hover:border-gray-700"
                            }`}
                          >
                            <srv.icon className={`w-4 h-4 ${formData.service === srv.name ? "text-emerald-400" : "text-gray-500"}`} />
                            <span>{srv.name}</span>
                          </button>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs text-gray-300 mb-1">Preferred Date</label>
                          <input
                            type="date"
                            value={formData.date}
                            min={new Date().toISOString().split("T")[0]}
                            onChange={(e) => updateFormData({ date: e.target.value })}
                            className="w-full bg-slate-950 border border-gray-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-300 mb-1">Preferred Time Slot</label>
                          <select
                            value={formData.timeSlot}
                            onChange={(e) => updateFormData({ timeSlot: e.target.value })}
                            className="w-full bg-slate-950 border border-gray-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                          >
                            {TIME_SLOTS.map((slot) => (
                              <option key={slot} value={slot}>{slot}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs text-gray-300 mb-1">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          placeholder="Your Name"
                          onChange={(e) => updateFormData({ name: e.target.value })}
                          className="w-full bg-slate-950 border border-gray-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs text-gray-300 mb-1">Phone Number *</label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            placeholder="+91 98765 43210"
                            onChange={(e) => updateFormData({ phone: e.target.value })}
                            className="w-full bg-slate-950 border border-gray-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-300 mb-1">Email Address</label>
                          <input
                            type="email"
                            value={formData.email}
                            placeholder="you@example.com"
                            onChange={(e) => updateFormData({ email: e.target.value })}
                            className="w-full bg-slate-950 border border-gray-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="bg-slate-950 border border-gray-800 rounded-2xl p-5 space-y-3 text-xs">
                      <h4 className="text-sm font-bold text-emerald-400 mb-2 border-b border-gray-800 pb-2">Appointment Summary</h4>
                      <div className="flex justify-between"><span className="text-gray-500">Service:</span><span>{formData.service}</span></div>
                      <div className="flex justify-between"><span className="text-gray-500">Date & Time:</span><span>{formData.date} at {formData.timeSlot}</span></div>
                      <div className="flex justify-between"><span className="text-gray-500">Name:</span><span>{formData.name}</span></div>
                      <div className="flex justify-between"><span className="text-gray-500">Contact:</span><span>{formData.phone}</span></div>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-800">
                    {step > 1 ? (
                      <button type="button" onClick={handleBack} className="px-5 py-2.5 rounded-xl bg-slate-800 text-xs flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4" /> Back
                      </button>
                    ) : <div />}

                    {step < 3 ? (
                      <button type="button" onClick={handleNext} className="px-6 py-2.5 rounded-xl bg-emerald-500 text-white text-xs font-bold flex items-center gap-2">
                        Next Step <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button type="submit" className="px-8 py-3 rounded-xl bg-emerald-500 text-white text-xs font-bold flex items-center gap-2">
                        Confirm Booking <CheckCircle2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* --- PRODUCTS --- */}
      <section id="products" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Insurance & Financial <span className="text-emerald-400">Products</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Comprehensive coverages crafted to protect every aspect of your family's dynamic future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONTENT.products.map((prod) => (
            <div key={prod.id} className="bg-slate-900 border border-gray-800 hover:border-emerald-500/40 rounded-2xl p-6 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                <prod.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{prod.title}</h3>
              <p className="text-xs text-gray-400 mb-4 leading-relaxed">{prod.description}</p>
              <ul className="space-y-2 mb-6">
                {prod.benefits.map((b, idx) => (
                  <li key={idx} className="text-xs text-gray-300 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" /> {b}
                  </li>
                ))}
              </ul>
              <a href="#booking" className="block py-2 bg-slate-800 hover:bg-emerald-600 hover:text-white text-emerald-400 font-medium text-xs text-center rounded-lg transition-all">
                Inquire Now
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* --- CALCULATOR --- */}
      <section id="calculator" className="py-16 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">
              Term Insurance <span className="text-emerald-400">Calculator</span>
            </h2>
            <p className="text-gray-400 text-sm">Quick estimate tailored to your age and life stage.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-950 border border-emerald-900/30 rounded-3xl p-6 sm:p-8">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex justify-between text-xs font-medium mb-2">
                  <span>Age</span><span className="text-emerald-400 font-bold">{age} Years</span>
                </div>
                <input
                  type="range"
                  min="18"
                  max="65"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full accent-emerald-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium mb-2">
                  <span>Desired Cover</span><span className="text-emerald-400 font-bold">₹{(coverage / 100000).toFixed(0)} Lakhs</span>
                </div>
                <input
                  type="range"
                  min="2500000"
                  max="50000000"
                  step="2500000"
                  value={coverage}
                  onChange={(e) => setCoverage(Number(e.target.value))}
                  className="w-full accent-emerald-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-900 rounded-xl border border-gray-800">
                <span className="text-xs font-medium">Tobacco/Smoker?</span>
                <button
                  type="button"
                  onClick={() => setIsSmoker(!isSmoker)}
                  className={`px-3 py-1 rounded-full text-xs font-bold ${isSmoker ? "bg-red-500/20 text-red-400 border border-red-500/50" : "bg-slate-800 text-gray-400"}`}
                >
                  {isSmoker ? "Yes" : "No"}
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-emerald-950 to-slate-900 border border-emerald-500/30 rounded-2xl p-6 flex flex-col justify-between text-center">
              <div>
                <CalcIcon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <p className="text-xs uppercase text-gray-400 font-semibold mb-1">Estimated Premium</p>
                <div className="text-4xl font-extrabold text-amber-400 mb-2">
                  ₹{calculateEstimatedPremium().toLocaleString("en-IN")}
                  <span className="text-xs text-gray-400 font-normal"> / year</span>
                </div>
              </div>
              <a href="#booking" className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs transition-all">
                Get Personalized Plan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 border-t border-gray-800 py-12 text-gray-400 text-xs text-center">
        <p className="mb-2"><strong>Money Mantra by Amit Alag</strong> — Insurance Advisor & Financial Consultant</p>
        <p>Contact: {CONTENT.contact.phone} | {CONTENT.contact.email}</p>
        <p className="mt-6 text-gray-600">© {new Date().getFullYear()} Money Mantra. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
