import { useState } from 'react';
import {
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
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
      <section className="bg-emerald-deep pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-white/80 text-sm">Get in Touch</span>
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Contact <span className="text-gold italic">Us</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Have a question or ready to book? We're here to help.
            Reach out to us and we'll respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, i) => (
              <div
                key={info.title}
                className="fade-up bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-xl transition-shadow"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-deep/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-emerald-deep" />
                </div>
                <h3 className="font-serif text-lg font-bold text-emerald-deep mb-3">
                  {info.title}
                </h3>
                {info.lines.map((line) => (
                  <p key={line} className="text-gray-600 text-sm">
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

          {/* Contact Form + Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="fade-up">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-6 h-6 text-gold" />
                <h2 className="font-serif text-2xl font-bold text-emerald-deep">Send Us a Message</h2>
              </div>

              {submitted ? (
                <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100 text-center">
                  <CheckCircle2 className="w-16 h-16 text-gold mx-auto mb-6" />
                  <h3 className="font-serif text-xl font-bold text-emerald-deep mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm"
                      placeholder="(780) 555-1234"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm bg-white"
                    >
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-emerald-deep hover:bg-emerald-light text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:shadow-lg text-sm"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map placeholder + service area */}
            <div className="fade-up">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-gold" />
                <h2 className="font-serif text-2xl font-bold text-emerald-deep">Service Area</h2>
              </div>

              <div className="bg-emerald-deep rounded-2xl p-8 mb-8">
                <div className="aspect-video rounded-xl bg-emerald-light/30 flex items-center justify-center mb-6 border border-white/10">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gold mx-auto mb-3" />
                    <p className="font-serif text-xl font-bold text-white">Edmonton, Alberta</p>
                    <p className="text-white/50 text-sm mt-1">& Surrounding Areas</p>
                  </div>
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-4">
                  Areas We Serve
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Downtown Edmonton',
                    'Old Strathcona',
                    'Windermere',
                    'Glenora',
                    'Riverbend',
                    'Terwillegar',
                    'Sherwood Park',
                    'St. Albert',
                    'Spruce Grove',
                    'Leduc',
                    'Beaumont',
                    'Fort Saskatchewan',
                  ].map((area) => (
                    <p key={area} className="text-white/60 text-sm flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-gold shrink-0" />
                      {area}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-cream-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHeading
            subtitle="FAQ"
            title="Frequently Asked Questions"
          />

          <div className="space-y-4">
            {[
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
            ].map((faq, i) => (
              <div
                key={i}
                className="fade-up bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <h3 className="font-serif text-lg font-bold text-emerald-deep mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
