import { useState } from 'react';
import { Sparkles, Send, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const serviceOptions = [
  'Regular Maintenance Cleaning',
  'Deep Cleaning',
  'Move In / Move Out Cleaning',
  'Post-Renovation Cleanup',
  'Office Cleaning',
  'Retail Space Cleaning',
  'Medical Facility Cleaning',
  'Post-Construction Cleanup',
  'Other',
];

const frequencyOptions = [
  'One-Time',
  'Weekly',
  'Bi-Weekly',
  'Monthly',
  'Custom Schedule',
];

const propertyTypes = [
  'House',
  'Apartment / Condo',
  'Townhouse',
  'Office',
  'Retail Space',
  'Medical Facility',
  'Other Commercial',
];

export default function Quote() {
  useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <section className="bg-emerald-deep pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Thank You!
            </h1>
          </div>
        </section>
        <section className="py-20 lg:py-28">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100">
              <CheckCircle2 className="w-16 h-16 text-gold mx-auto mb-6" />
              <h2 className="font-serif text-2xl font-bold text-emerald-deep mb-4">
                Quote Request Received
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Thank you for your interest in SparkleClean Pro! Our team will review
                your request and get back to you within 24 hours with a personalized
                quote tailored to your needs.
              </p>
              <p className="text-gray-500 text-sm">
                Need immediate assistance? Call us at{' '}
                <a href="tel:+17805551234" className="text-gold font-semibold hover:underline">
                  (780) 555-1234
                </a>
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-emerald-deep pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-white/80 text-sm">Free Estimate</span>
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Request a <span className="text-gold italic">Free Quote</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Tell us about your space and needs. We'll provide a detailed,
            no-obligation quote within 24 hours.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="fade-up bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
            <SectionHeading
              title="Tell Us About Your Space"
              description="Fill out the form below and our team will prepare a customized quote for you."
            />

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Info */}
              <div>
                <h3 className="font-serif text-lg font-bold text-emerald-deep mb-4 pb-2 border-b border-gray-100">
                  Contact Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm"
                      placeholder="Your last name"
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
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm"
                      placeholder="(780) 555-1234"
                    />
                  </div>
                </div>
              </div>

              {/* Property Details */}
              <div>
                <h3 className="font-serif text-lg font-bold text-emerald-deep mb-4 pb-2 border-b border-gray-100">
                  Property Details
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Property Type *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm bg-white"
                    >
                      <option value="">Select property type</option>
                      {propertyTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Approximate Size (sq ft)
                    </label>
                    <input
                      type="number"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm"
                      placeholder="e.g. 1500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Bedrooms
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm bg-white">
                      <option value="">Select</option>
                      {['1', '2', '3', '4', '5', '6+'].map((n) => (
                        <option key={n} value={n}>{n}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Bathrooms
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm bg-white">
                      <option value="">Select</option>
                      {['1', '2', '3', '4', '5+'].map((n) => (
                        <option key={n} value={n}>{n}</option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Property Address
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm"
                      placeholder="Street address, Edmonton, AB"
                    />
                  </div>
                </div>
              </div>

              {/* Service Details */}
              <div>
                <h3 className="font-serif text-lg font-bold text-emerald-deep mb-4 pb-2 border-b border-gray-100">
                  Service Details
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Service Needed *
                    </label>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {serviceOptions.map((service) => (
                        <label
                          key={service}
                          className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            className="w-4 h-4 rounded border-gray-300 text-gold focus:ring-gold/20"
                          />
                          {service}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Frequency *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm bg-white"
                    >
                      <option value="">Select frequency</option>
                      {frequencyOptions.map((freq) => (
                        <option key={freq} value={freq}>{freq}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Start Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Details
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm resize-none"
                      placeholder="Tell us about any special requirements, pets, access instructions, or anything else we should know..."
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-emerald-deep hover:bg-emerald-light text-white px-10 py-4 rounded-full font-semibold transition-all hover:shadow-lg text-sm"
              >
                <Send className="w-4 h-4" />
                Submit Quote Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
