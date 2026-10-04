"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/zainabanwer2152@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject || "New Portfolio Contact Message",
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.fullName}`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setIsSubmitted(false), 6000);
      } else {
        window.location.href = `mailto:zainabanwer2152@gmail.com?subject=${encodeURIComponent(
          formData.subject || "Portfolio Contact Message"
        )}&body=${encodeURIComponent(
          `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
        )}`;
      }
    } catch {
      window.location.href = `mailto:zainabanwer2152@gmail.com?subject=${encodeURIComponent(
        formData.subject || "Portfolio Contact Message"
      )}&body=${encodeURIComponent(
        `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
      )}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("zainabanwer2152@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-emerald-400 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Have a project in mind, a freelance inquiry, or want to discuss full-stack opportunities? Let&apos;s talk!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-3xl p-8 border border-teal-500/20 relative overflow-hidden bg-gradient-to-b from-slate-900/90 to-slate-950/90">
              <h3 className="text-2xl font-bold text-white mb-2">Let&apos;s Connect</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                I am eager to contribute to forward-thinking teams and deliver clean, scalable web & mobile solutions. Feel free to reach out via form or direct email.
              </p>

              <div className="space-y-6">
                {/* Email item */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-teal-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-slate-400 font-medium">Email Address</div>
                    <div className="text-sm font-semibold text-white truncate">
                      zainabanwer2152@gmail.com
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    title="Copy Email"
                    className="p-2 rounded-xl glass-panel text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-teal-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Location</div>
                    <div className="text-sm font-semibold text-white">Karachi, Pakistan</div>
                  </div>
                </div>

                {/* Phone / Availability */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-teal-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Availability</div>
                    <div className="text-sm font-semibold text-white">
                      Full-time / Internship / Freelance
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-teal-500/20 bg-gradient-to-b from-slate-900/90 to-slate-950/90 shadow-2xl">
              {isSubmitted ? (
                <div className="py-16 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Thank You!</h3>
                  <p className="text-slate-300 max-w-md mx-auto text-sm">
                    Your message has been received successfully. I will get back to you as soon as possible!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-teal-500/20 text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-teal-500/20 text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+92 300 1234567"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-teal-500/20 text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Inquiry / Job Opportunity"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-teal-500/20 text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Zainab, I would like to discuss a project..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-teal-500/20 text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-500 hover:from-teal-500 hover:to-emerald-400 shadow-lg shadow-teal-500/25 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
