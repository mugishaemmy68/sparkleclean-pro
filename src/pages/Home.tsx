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
    text: 'SparkleClean Pro has transformed our home. Their attention to detail is remarkable - they notice things I never would. Truly a luxury experience.',
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

export default function Home() {
  useScrollAnimation();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-emerald-deep overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-lighter/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-0 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-8">
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="text-white/80 text-sm">Edmonton's Premier Cleaning Service</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
                Pristine Spaces,{' '}
                <span className="text-gold italic">Elevated</span>{' '}
                Living
              </h1>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
                Experience the gold standard in residential and commercial cleaning.
                Meticulous care for spaces that deserve nothing less than perfection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-gold/25"
                >
                  Get Your Free Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
                >
                  Our Services
                </Link>
              </div>
            </div>

            {/* Hero visual */}
            <div className="hidden lg:flex justify-center">
              <div className="relative w-[420px] h-[420px]">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-emerald-lighter/20 rounded-3xl rotate-6" />
                <div className="absolute inset-0 bg-emerald-light/40 rounded-3xl border border-white/10 flex flex-col items-center justify-center p-10">
                  <Sparkles className="w-20 h-20 text-gold mb-6" />
                  <div className="text-center">
                    <p className="font-serif text-3xl text-white font-bold mb-2">10+ Years</p>
                    <p className="text-white/60">of Pristine Excellence</p>
                    <div className="flex gap-1 justify-center mt-4">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                      ))}
                    </div>
                    <p className="text-white/50 text-sm mt-2">2,500+ Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center fade-up">
                <p className="font-serif text-3xl md:text-4xl font-bold text-emerald-deep">
                  {stat.value}
                </p>
                <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            subtitle="Why Choose Us"
            title="The SparkleClean Difference"
            description="We bring precision, care, and luxury to every clean. Here's what sets us apart from the rest."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="fade-up bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow group border border-gray-100"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-deep/10 flex items-center justify-center mb-6 group-hover:bg-emerald-deep group-hover:scale-110 transition-all">
                  <feature.icon className="w-7 h-7 text-emerald-deep group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-serif text-xl font-bold text-emerald-deep mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 lg:py-28 bg-emerald-deep">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Services"
            title="Tailored Cleaning Solutions"
            description="From cozy homes to sprawling commercial spaces, we deliver spotless results every time."
            light
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Residential */}
            <div className="fade-up bg-white/5 border border-white/10 rounded-2xl p-10 hover:bg-white/10 transition-all group">
              <HomeIcon className="w-12 h-12 text-gold mb-6" />
              <h3 className="font-serif text-2xl font-bold text-white mb-4">
                Residential Cleaning
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  'Regular maintenance cleaning',
                  'Deep cleaning & sanitization',
                  'Move in / move out cleaning',
                  'Post-renovation cleanup',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/70 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-light text-sm font-semibold transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Commercial */}
            <div className="fade-up bg-white/5 border border-white/10 rounded-2xl p-10 hover:bg-white/10 transition-all group">
              <Building2 className="w-12 h-12 text-gold mb-6" />
              <h3 className="font-serif text-2xl font-bold text-white mb-4">
                Commercial Cleaning
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  'Office & workspace cleaning',
                  'Retail space maintenance',
                  'Medical facility sanitation',
                  'Post-construction cleanup',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/70 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-light text-sm font-semibold transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            subtitle="Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it - hear from Edmonton homeowners and businesses who trust SparkleClean Pro."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="fade-up bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
                <div>
                  <p className="font-serif font-bold text-emerald-deep">{t.name}</p>
                  <p className="text-gray-400 text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-cream-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="fade-up">
            <span className="inline-block text-gold font-semibold text-sm tracking-widest uppercase mb-3">
              Ready to Get Started?
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-deep leading-tight mb-6">
              Experience the Sparkle Today
            </h2>
            <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
              Join over 2,500 satisfied clients across Edmonton. Request your free,
              no-obligation quote and discover the SparkleClean difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quote"
                className="inline-flex items-center justify-center gap-2 bg-emerald-deep hover:bg-emerald-light text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg"
              >
                Request a Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+17805551234"
                className="inline-flex items-center justify-center gap-2 border-2 border-emerald-deep text-emerald-deep px-8 py-4 rounded-full font-semibold hover:bg-emerald-deep hover:text-white transition-all"
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
