import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: ['10234 Jasper Avenue NW', 'Edmonton, AB T5J 3N6'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['(780) 555-1234', 'Mon-Sat: 7am - 8pm'],
    href: 'tel:+17805551234',
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['hello@sparklecleanpro.ca', 'We reply within 24 hours'],
    href: 'mailto:hello@sparklecleanpro.ca',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    lines: ['Mon - Sat: 7:00 AM - 8:00 PM', 'Sunday: 9:00 AM - 5:00 PM'],
  },
];

const faqs = [
  {
    q: 'What areas do you service in Edmonton?',
    a: 'We serve all of Edmonton and surrounding communities including Sherwood Park, St. Albert, Spruce Grove, Leduc, Beaumont, and Fort Saskatchewan.',
  },
  {
    q: 'Do I need to be home during the cleaning?',
    a: "No, many of our clients provide us with a key or access code. All our team members are background-checked, bonded, and insured for your peace of mind.",
  },
  {
    q: 'What cleaning products do you use?',
    a: 'We use 100% eco-friendly, non-toxic cleaning products that are safe for children, pets, and the environment while still delivering exceptional cleaning results.',
  },
  {
    q: 'How do I pay for the service?',
    a: 'We accept all major credit cards, e-transfer, and can set up automatic billing for recurring services. Payment is collected after each completed clean.',
  },
  {
    q: "What if I'm not satisfied with the cleaning?",
    a: "Your satisfaction is guaranteed. If you're not completely happy, contact us within 24 hours and we'll re-clean the areas of concern at no additional charge.",
  },
];

const areas = [
  'Downtown Edmonton', 'Old Strathcona', 'Windermere', 'Glenora',
  'Riverbend', 'Terwillegar', 'Sherwood Park', 'St. Albert',
  'Spruce Grove', 'Leduc', 'Beaumont', 'Fort Saskatchewan',
];

const inputClass =
  'w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm placeholder:text-gray-300';

export default function Contact() {
  useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-emerald-deep pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden grain">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-emerald-lighter/10 rounded-full blur-[80px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] rounded-full px-5 py-2.5 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 bg-gold rounded-full pulse-glow" />
            <span className="text-white/70 text-sm font-medium">Get in Touch</span>
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Contact <span className="text-gold italic">Us</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Have a question or ready to book? We're here to help.
            Reach out and we'll respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {contactInfo.map((info, i) => (
              <div
                key={info.title}
                className="fade-up card-lift bg-white rounded-2xl p-8 text-center border border-gray-100/80 group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-deep/10 to-emerald-deep/5 flex items-center justify-center mx-auto mb-5 group-hover:from-emerald-deep group-hover:to-emerald-light group-hover:scale-110 transition-all duration-300">
                  <info.icon className="w-7 h-7 text-emerald-deep group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-lg font-bold text-emerald-deep mb-3">
                  {info.title}
                </h3>
                {info.lines.map((line) => (
                  <p key={line} className="text-gray-500 text-sm leading-relaxed">
                    {info.href ? (
                      <a href={info.href} className="hover:text-gold transition-colors">
                        {line}
                      </a>
                    ) : (
                      line
                    )}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Contact Form + Service Area */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="slide-left">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-gold" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-emerald-deep tracking-tight">Send Us a Message</h2>
              </div>

              {submitted ? (
                <div className="bg-white rounded-2xl p-12 border border-gray-100/80 text-center">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-emerald-deep mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100/80 space-y-6">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input type="text" required className={inputClass} placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input type="email" required className={inputClass} placeholder="you@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" className={inputClass} placeholder="(780) 555-1234" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <select required className={`${inputClass} appearance-none`}>
                      <option value="">Select a subject</option>
                      <option>General Inquiry</option>
                      <option>Service Question</option>
                      <option>Pricing Information</option>
                      <option>Feedback</option>
                      <option>Career Opportunities</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea required rows={5} className={`${inputClass} resize-none`} placeholder="How can we help you?" />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-deep to-emerald-light hover:from-emerald-light hover:to-emerald-deep text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-deep/20 text-sm"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>

            {/* Service area */}
            <div className="slide-right">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-emerald-deep tracking-tight">Service Area</h2>
              </div>

              <div className="bg-emerald-deep rounded-2xl p-8 relative overflow-hidden grain">
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gold/5 rounded-full blur-[60px]" />

                <div className="relative z-10">
                  <div className="aspect-[16/10] rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-8 backdrop-blur-sm">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-4">
                        <MapPin className="w-8 h-8 text-gold" />
                      </div>
                      <p className="font-serif text-2xl font-bold text-white tracking-tight">Edmonton, Alberta</p>
                      <p className="text-white/40 text-sm mt-1">& Surrounding Areas</p>
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-white mb-5">
                    Areas We Serve
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {areas.map((area) => (
                      <p key={area} className="text-white/55 text-sm flex items-center gap-2.5 hover:text-gold/80 transition-colors cursor-default">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold/60 shrink-0" />
                        {area}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-28 bg-cream-dark relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-deep/[0.02] rounded-full blur-[100px]" />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
          <SectionHeading
            subtitle="FAQ"
            title="Frequently Asked Questions"
          />

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="fade-up card-lift bg-white rounded-2xl p-7 border border-gray-100/80"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <h3 className="font-serif text-lg font-bold text-emerald-deep mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
