"use client";

import React, { useState } from "react";
import { SITE_DATA, getWhatsAppUrl } from "@/data/site";
import { SERVICES_DATA } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import confetti from "canvas-confetti";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Sparkles,
  Send,
  CheckCircle,
  ExternalLink,
  ShieldCheck,
  User,
  Wrench,
  FileText
} from "lucide-react";

export default function Contact() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: SERVICES_DATA[0].title[language],
    description: "",
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [submittedWhatsApp, setSubmittedWhatsApp] = useState(false);

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      errors.name = language === "ta" ? "உங்கள் பெயரை உள்ளிடவும்" : "Please enter your name";
    }
    if (!formData.phone.trim()) {
      errors.phone = language === "ta" ? "மொபைல் எண் அவசியம்" : "Please enter your phone number";
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});

    const formattedMessage = language === "ta" ? [
      `*புதிய வேலை விசாரணை*`,
      `---------------------------------`,
      `*பெயர்:* ${formData.name}`,
      `*மொபைல்:* ${formData.phone}`,
      `*தேவையான வேலை:* ${formData.service}`,
      formData.description ? `*விவரம்:* ${formData.description}` : "",
      `---------------------------------`,
      `_புஜண்டமகான் Plumbing, Steel & Fabrication தளம் வழியாக அனுப்பப்பட்டது_`
    ].filter(Boolean).join("\n") : [
      `*NEW INQUIRY*`,
      `---------------------------------`,
      `*Customer Name:* ${formData.name}`,
      `*Phone:* ${formData.phone}`,
      `*Service Required:* ${formData.service}`,
      formData.description ? `*Details:* ${formData.description}` : "",
      `---------------------------------`,
      `_Sent via Bujandamahan Plumbing, Steel & Fabrication Website_`
    ].filter(Boolean).join("\n");

    const whatsappUrl = getWhatsAppUrl(formattedMessage);
    window.open(whatsappUrl, "_blank");

    try {
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.8 },
        colors: ["#FF7628", "#FFB86C", "#FFFFFF"]
      });
    } catch {
      // safe fallback
    }

    setSubmittedWhatsApp(true);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-[#080B0F] border-t border-[#29333D]/60 overflow-hidden">
      <div className="absolute bottom-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-[#FF7628]/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#29333D] bg-[#161E27] px-3.5 py-1 text-xs font-semibold tracking-wider text-[#FF7628] uppercase">
            <Sparkles className="h-3 w-3" />
            <span>{t.contact.badge}</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
            {t.contact.title}
          </h2>

          <p className="text-sm sm:text-base text-[#A8B0B9] leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Phone numbers & Location details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-[#29333D] bg-[#111820] p-6 space-y-5">
              <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
                <Phone className="h-5 w-5 text-[#FF7628]" />
                <span>{t.contact.directCallTitle}</span>
              </h3>

              <div className="space-y-3">
                {SITE_DATA.phones.map((phone, idx) => (
                  <a
                    key={phone.primary}
                    href={`tel:${phone.primary}`}
                    className="flex items-center justify-between rounded-xl border border-[#29333D] bg-[#161E27] p-3.5 hover:border-[#FF7628] hover:bg-[#1E293B] transition-all group"
                  >
                    <div>
                      <span className="text-xs text-[#A8B0B9] block font-medium">
                        {language === "ta" ? phone.labelTa : phone.label}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#FF8F3D] transition-colors">
                        {phone.display}
                      </span>
                    </div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF7628]/15 text-[#FF7628] group-hover:bg-[#FF7628] group-hover:text-white transition-colors">
                      <Phone className="h-4 w-4" />
                    </span>
                  </a>
                ))}
              </div>

              {/* Location Card */}
              <div className="pt-4 border-t border-[#29333D]/70 space-y-2">
                <div className="flex items-start gap-2.5">
                  <MapPin className="h-5 w-5 text-[#FF7628] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">{t.contact.locationTitle}</h4>
                    <p className="text-xs text-[#A8B0B9] mt-0.5">
                      {language === "ta"
                        ? "துறையூர் மெயின் ரோடு, துறையூர், திருச்சிராப்பள்ளி மாவட்டம், தமிழ்நாடு - 621010."
                        : "Thuraiyur Main Road, Thuraiyur, Tiruchirappalli District, Tamil Nadu - 621010."}
                    </p>
                    <a
                      href={SITE_DATA.location.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#FF7628] hover:text-[#FF8F3D] mt-2 transition-colors"
                    >
                      <span>Google Maps-ல் பார்க்க</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="pt-4 border-t border-[#29333D]/70 flex items-start gap-2.5">
                <Clock className="h-5 w-5 text-[#FF7628] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">{t.contact.hoursTitle}</h4>
                  <p className="text-xs text-[#A8B0B9] mt-0.5">
                    {language === "ta" ? SITE_DATA.workingHoursTa : SITE_DATA.workingHours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick WhatsApp Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#29333D] bg-[#111820] p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#29333D]">
                <div>
                  <h3 className="font-display text-lg font-bold text-white">
                    {t.contact.quickMsgTitle}
                  </h3>
                  <p className="text-xs text-[#A8B0B9] mt-0.5">
                    {language === "ta"
                      ? "விவரங்களை நிரப்பினால் உடனே வாட்ஸ்அப்பில் மெசேஜ் செல்லும்"
                      : "Fill in your requirements to generate an instant WhatsApp inquiry"}
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30">
                  <MessageCircle className="h-5 w-5" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-semibold text-[#C5CCD3] mb-1.5">
                      {t.contact.formName} *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={language === "ta" ? "எ.கா. குமார்" : "e.g. Ramesh Kumar"}
                      className="w-full rounded-xl border border-[#29333D] bg-[#161E27] px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-[#7A889B] focus:border-[#FF7628] focus:outline-none transition-colors"
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-[11px] text-[#FF4D00]">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-xs font-semibold text-[#C5CCD3] mb-1.5">
                      {t.contact.formPhone} *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={language === "ta" ? "எ.கா. 9876543210" : "e.g. 9876543210"}
                      className="w-full rounded-xl border border-[#29333D] bg-[#161E27] px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-[#7A889B] focus:border-[#FF7628] focus:outline-none transition-colors"
                    />
                    {formErrors.phone && (
                      <p className="mt-1 text-[11px] text-[#FF4D00]">{formErrors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Service Selector */}
                <div>
                  <label className="block text-xs font-semibold text-[#C5CCD3] mb-1.5">
                    {t.contact.formService}
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full rounded-xl border border-[#29333D] bg-[#161E27] px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-[#FF7628] focus:outline-none transition-colors"
                  >
                    {SERVICES_DATA.map((srv) => (
                      <option key={srv.id} value={srv.title[language]}>
                        {srv.title[language]} ({srv.recommendedGrade})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message / Details */}
                <div>
                  <label className="block text-xs font-semibold text-[#C5CCD3] mb-1.5">
                    {t.contact.formMessage}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder={
                      language === "ta"
                        ? "தோராயமான அளவு அல்லது உங்களின் தேவையை குறிப்பிடவும்..."
                        : "Approximate dimensions, site location, or any specific requirements..."
                    }
                    className="w-full rounded-xl border border-[#29333D] bg-[#161E27] px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-[#7A889B] focus:border-[#FF7628] focus:outline-none transition-colors"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FF7628] to-[#FF8F3D] py-3 px-6 text-sm font-bold text-white shadow-xl shadow-[#FF7628]/25 hover:shadow-[#FF7628]/40 hover:scale-[1.01] active:scale-[0.99] transition-all"
                >
                  <Send className="h-4 w-4" />
                  <span>{t.contact.sendWhatsAppBtn}</span>
                </button>
              </form>

              {submittedWhatsApp && (
                <div className="rounded-xl border border-[#25D366]/40 bg-[#25D366]/10 p-3 text-center text-xs text-[#25D366] font-semibold">
                  ✓ {language === "ta" ? "வாட்ஸ்அப் திறக்கப்பட்டது! நன்றி." : "WhatsApp opened! Thank you."}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
