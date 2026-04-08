import { Link } from 'react-router-dom';
import {
  Sparkles,
  Shield,
  Clock,
  Leaf,
  Star,
  ArrowRight,
  CheckCircle2,
  Home as HomeIcon,
  Building2,
  Quote,
  Phone,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const stats = [
  { value: '2,500+', label: 'Happy Clients' },
  { value: '10+', label: 'Years Experience' },
  { value: '15,000+', label: 'Cleans Completed' },
  { value: '4.9/5', label: 'Client Rating' },
];

const features = [
  {
    icon: Shield,
    title: 'Bonded & Insured',
    description:
      'Full liability coverage and bonded employees for your complete peace of mind.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Products',
    description:
      'Premium, non-toxic cleaning solutions safe for children, pets, and the planet.',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description:
      'Book weekly, bi-weekly, monthly, or one-time cleans that fit your schedule.',
  },
  {
    icon: Star,
    title: 'Satisfaction Guaranteed',
    description:
      'Not happy? We\'ll return within 24 hours to re-clean at no additional cost.',
  },
];

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Homeowner, Windermere',
    text: 'SparkleClean Pro has transformed our home. Their attention to detail is remarkable — they notice things I never would. Truly a luxury experience.',
    rating: 5,
  },
  {
    name: 'James Chen',
    role: 'Property Manager',
    text: 'We use SparkleClean Pro for all our commercial properties. Reliable, professional, and their teams always go above and beyond expectations.',
    rating: 5,
  },
  {
    name: 'Lisa Olson',
    role: 'Homeowner, Glenora',
    text: 'The eco-friendly approach sealed the deal for us. Great for our kids, great for the environment, and our house has never looked better.',
    rating: 5,
  },
];

const trustBadges = [
  'Bonded & Insured', '100% Eco-Friendly', 'Background Checked', 'Satisfaction Guaranteed',
  '24hr Re-Clean Promise', 'Edmonton Local', 'WCB Covered', '10+ Years',
];

export default function Home() {
  useScrollAnimation();

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex items-center bg-emerald-deep overflow-hidden grain">
        {/* Atmospheric background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-gold/8 rounded-full blur-[100px] float" />
          <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-emerald-lighter/15 rounded-full blur-[120px] float-delay" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/[0.03] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/[0.02] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-white/[0.01] rounded-full" />
          {/* Diagonal gold accent */}
          <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-gradient-to-tl from-gold/10 to-transparent rotate-12 blur-2xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-0 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] rounded-full px-5 py-2.5 mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 bg-gold rounded-full pulse-glow" />
                <span className="text-white/70 text-sm font-medium">Edmonton's Premier Cleaning Service</span>
              </div>

              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-white leading-[1.05] mb-8 tracking-tight">
                Pristine Spaces,{' '}
                <span className="relative inline-block">
                  <span className="text-gold italic">Elevated</span>
                  <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-gold to-gold-light/40 rounded-full" />
                </span>
                <br />
                Living
              </h1>

              <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-12 max-w-xl">
                Experience the gold standard in residential and commercial cleaning.
                Meticulous care for spaces that deserve nothing less than perfection.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/quote"
                  className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold to-gold-dark hover:from-gold-dark hover:to-gold text-white px-9 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-gold/25 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Get Your Free Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+17805551234"
                  className="inline-flex items-center justify-center gap-3 border border-white/20 text-white px-9 py-4 rounded-full font-semibold hover:bg-white/5 hover:border-white/30 transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  (780) 555-1234
                </a>
              </div>

              {/* Mini trust badges */}
              <div className="flex items-center gap-6 text-white/40 text-xs font-medium">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-gold/70" /> Bonded & Insured</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-gold/70" /> Eco-Friendly</span>
                <span className="hidden sm:flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-gold/70" /> Free Estimates</span>
              </div>
            </div>

            {/* Hero card */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="relative">
                {/* Floating decorative card behind */}
                <div className="absolute -top-6 -left-6 w-full h-full bg-gold/10 rounded-3xl rotate-3 border border-gold/10" />

                <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/[0.08] p-10 shadow-2xl shadow-black/20">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-gold/20 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">SparkleClean Pro</p>
                      <p className="text-white/40 text-xs">Est. 2015 — Edmonton, AB</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-6xl font-bold text-gold">4.9</span>
                      <div>
                        <div className="flex gap-0.5">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                          ))}
                        </div>
                        <p className="text-white/40 text-xs mt-1">from 2,500+ reviews</p>
                      </div>
                    </div>

                    <div className="h-px bg-white/[0.06]" />

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/[0.04] rounded-2xl p-4 text-center">
                        <p className="font-serif text-2xl font-bold text-white">15K+</p>
                        <p className="text-white/40 text-xs mt-1">Cleans Done</p>
                      </div>
                      <div className="bg-white/[0.04] rounded-2xl p-4 text-center">
                        <p className="font-serif text-2xl font-bold text-white">50+</p>
                        <p className="text-white/40 text-xs mt-1">Team Members</p>
                      </div>
                    </div>

                    <div className="bg-gold/10 border border-gold/20 rounded-xl p-4">
                      <p className="text-gold font-semibold text-sm">Limited Time Offer</p>
                      <p className="text-white/60 text-xs mt-1">Free appliance cleaning with any package booking</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Trust Marquee ─── */}
      <div className="bg-emerald-deep border-t border-b border-white/5 overflow-hidden py-4">
        <div className="marquee flex items-center gap-8 whitespace-nowrap">
          {[...trustBadges, ...trustBadges].map((badge, i) => (
            <span key={i} className="flex items-center gap-2 text-white/30 text-sm font-medium shrink-0">
              <span className="w-1.5 h-1.5 bg-gold/40 rounded-full" />
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* ─── Stats ─── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, i) => (
              <div key={stat.label} className="fade-up text-center relative" style={{ transitionDelay: `${i * 80}ms` }}>
                <p className="font-serif text-4xl md:text-5xl font-bold text-emerald-deep tracking-tight">
                  {stat.value}
                </p>
                <p className="text-gray-400 text-sm mt-2 font-medium">{stat.label}</p>
                {i < stats.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gray-100" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Choose Us ─── */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-deep/[0.02] rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <SectionHeading
            subtitle="Why Choose Us"
            title="The SparkleClean Difference"
            description="We bring precision, care, and luxury to every clean. Here's what sets us apart."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="fade-up card-lift bg-white rounded-2xl p-8 border border-gray-100/80 group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-deep/10 to-emerald-deep/5 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-emerald-deep group-hover:to-emerald-light group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-emerald-deep group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-xl font-bold text-emerald-deep mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services Preview ─── */}
      <section className="py-24 lg:py-32 bg-emerald-deep relative overflow-hidden grain">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-20 w-[300px] h-[300px] bg-emerald-lighter/10 rounded-full blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <SectionHeading
            subtitle="Our Services"
            title="Tailored Cleaning Solutions"
            description="From cozy homes to sprawling commercial spaces, we deliver spotless results every time."
            light
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Residential */}
            <div className="fade-up group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-white/[0.04] border border-white/[0.08] rounded-3xl p-10 hover:bg-white/[0.07] transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-gold/15 flex items-center justify-center mb-6">
                  <HomeIcon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-2">
                  Residential Cleaning
                </h3>
                <p className="text-white/40 text-sm mb-6">For homes that deserve the best</p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Regular maintenance cleaning',
                    'Deep cleaning & sanitization',
                    'Move in / move out cleaning',
                    'Post-renovation cleanup',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/60 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-gold/70 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="group/link inline-flex items-center gap-2 text-gold hover:text-gold-light text-sm font-semibold transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Commercial */}
            <div className="fade-up group relative" style={{ transitionDelay: '150ms' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-white/[0.04] border border-white/[0.08] rounded-3xl p-10 hover:bg-white/[0.07] transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-gold/15 flex items-center justify-center mb-6">
                  <Building2 className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-2">
                  Commercial Cleaning
                </h3>
                <p className="text-white/40 text-sm mb-6">Professional spaces, pristine standards</p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Office & workspace cleaning',
                    'Retail space maintenance',
                    'Medical facility sanitation',
                    'Post-construction cleanup',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/60 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-gold/70 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="group/link inline-flex items-center gap-2 text-gold hover:text-gold-light text-sm font-semibold transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gold/[0.03] rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <SectionHeading
            subtitle="Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it — hear from Edmonton homeowners and businesses who trust SparkleClean Pro."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="fade-up card-lift bg-white rounded-2xl p-8 border border-gray-100/80 relative"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-emerald-deep/[0.06]" />
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 text-[15px]">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 pt-5 border-t border-gray-50">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-deep to-emerald-light flex items-center justify-center text-white font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-serif font-bold text-emerald-deep text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream-dark to-cream" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-deep/[0.03] rounded-full blur-[100px]" />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="scale-in">
            <span className="inline-flex items-center gap-2 bg-emerald-deep/5 border border-emerald-deep/10 rounded-full px-5 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-emerald-deep/70 text-sm font-medium">Ready to Get Started?</span>
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-deep leading-tight mb-6 tracking-tight">
              Experience the{' '}
              <span className="gold-underline text-gold italic">Sparkle</span>{' '}
              Today
            </h2>
            <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Join over 2,500 satisfied clients across Edmonton. Request your free,
              no-obligation quote and discover the SparkleClean difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quote"
                className="group inline-flex items-center justify-center gap-2 bg-emerald-deep hover:bg-emerald-light text-white px-9 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-emerald-deep/20 hover:scale-[1.02]"
              >
                Request a Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+17805551234"
                className="inline-flex items-center justify-center gap-2 border-2 border-emerald-deep/20 text-emerald-deep px-9 py-4 rounded-full font-semibold hover:bg-emerald-deep hover:text-white hover:border-emerald-deep transition-all duration-300"
              >
                Call (780) 555-1234
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
