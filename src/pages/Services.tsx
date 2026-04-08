import { Link } from 'react-router-dom';
import {
  Home as HomeIcon,
  Building2,
  Sparkles,
  SprayCan,
  Truck,
  HardHat,
  Stethoscope,
  Store,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const residentialServices = [
  {
    icon: Sparkles,
    title: 'Regular Maintenance',
    description:
      'Consistent, thorough cleaning on your schedule. We keep your home spotless week after week with meticulous attention to every surface and corner.',
    features: ['Kitchen & bathroom deep sanitization', 'Dusting & vacuuming all rooms', 'Floor mopping & polishing', 'Surface disinfection'],
  },
  {
    icon: SprayCan,
    title: 'Deep Cleaning',
    description:
      'An intensive, top-to-bottom cleaning that reaches every hidden corner. Perfect for seasonal refreshes or preparing for special occasions.',
    features: ['Inside appliance cleaning', 'Baseboard & trim detailing', 'Light fixture cleaning', 'Grout & tile scrubbing'],
  },
  {
    icon: Truck,
    title: 'Move In / Move Out',
    description:
      'Make your transition seamless. We ensure your old home is spotless for the next occupant and your new home is pristine before you settle in.',
    features: ['Cabinet interior cleaning', 'Full wall washing', 'Window track detailing', 'Garage & storage sweep'],
  },
  {
    icon: HardHat,
    title: 'Post-Renovation',
    description:
      'Construction dust and debris are no match for our specialized post-renovation cleaning service. We restore your space to livable perfection.',
    features: ['Construction dust removal', 'Paint splatter cleanup', 'Debris & material removal', 'Air vent & duct cleaning'],
  },
];

const commercialServices = [
  {
    icon: Building2,
    title: 'Office Cleaning',
    description:
      'Create a productive, healthy work environment. Our commercial teams handle offices of all sizes with minimal disruption to your operations.',
    features: ['Workstation sanitization', 'Common area maintenance', 'Restroom deep cleaning', 'Trash & recycling management'],
  },
  {
    icon: Store,
    title: 'Retail Spaces',
    description:
      'First impressions matter. Keep your retail environment inviting and spotless for customers with our tailored retail cleaning programs.',
    features: ['Display & shelf dusting', 'Floor care & maintenance', 'Entrance & window cleaning', 'Fitting room sanitization'],
  },
  {
    icon: Stethoscope,
    title: 'Medical Facilities',
    description:
      'Hospital-grade sanitation protocols for clinics, dental offices, and wellness centers. We meet all health and safety compliance standards.',
    features: ['Medical-grade disinfection', 'Biohazard-safe protocols', 'Waiting area sanitation', 'Compliance documentation'],
  },
  {
    icon: HardHat,
    title: 'Post-Construction',
    description:
      'Specialized commercial post-construction cleanup for new builds, renovations, and tenant improvements. Ready for occupancy fast.',
    features: ['Heavy debris removal', 'Concrete dust cleaning', 'Window & glass polishing', 'Final detail inspection'],
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof residentialServices)[number];
  index: number;
}) {
  return (
    <div
      className="fade-up card-lift bg-white rounded-2xl p-8 shadow-sm border border-gray-100 group relative overflow-hidden"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Subtle corner gradient accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-deep/[0.03] to-transparent rounded-bl-full pointer-events-none" />

      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-deep/10 to-emerald-deep/5 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-emerald-deep group-hover:to-emerald-light group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-emerald-deep/20">
          <service.icon className="w-7 h-7 text-emerald-deep group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="font-serif text-xl font-bold text-emerald-deep mb-3">{service.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>
        <ul className="space-y-2 mb-6">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-gray-500">
              <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
              {f}
            </li>
          ))}
        </ul>
        <div className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-deep cursor-pointer">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  useScrollAnimation();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-emerald-deep pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden grain">
        {/* Atmospheric blur orbs */}
        <div className="absolute top-16 left-1/4 w-72 h-72 bg-emerald-light/20 rounded-full blur-3xl float pointer-events-none" />
        <div className="absolute bottom-8 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl float-delay pointer-events-none" />

        {/* Decorative ring */}
        <div className="absolute -top-20 -right-20 w-64 h-64 border border-white/[0.06] rounded-full pointer-events-none" />
        <div className="absolute -bottom-32 -left-16 w-80 h-80 border border-white/[0.04] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="fade-up inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-white/80 text-sm">Professional Cleaning Solutions</span>
          </span>
          <h1 className="fade-up font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight" style={{ transitionDelay: '100ms' }}>
            Our <span className="text-gold italic">Services</span>
          </h1>
          <p className="fade-up text-white/70 text-lg max-w-2xl mx-auto" style={{ transitionDelay: '200ms' }}>
            From meticulous residential care to large-scale commercial maintenance,
            we deliver pristine results tailored to your unique needs.
          </p>
        </div>
      </section>

      {/* Residential */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-1/2 -translate-y-1/2 -right-64 w-[500px] h-[500px] bg-gradient-to-br from-emerald-deep/[0.03] to-transparent rounded-full blur-2xl pointer-events-none" />
        <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-gold/30" />
        <div className="absolute bottom-32 right-20 w-1.5 h-1.5 rounded-full bg-emerald-deep/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="fade-up flex items-center gap-4 mb-4">
            <HomeIcon className="w-8 h-8 text-gold" />
            <span className="text-gold font-semibold text-sm tracking-widest uppercase">Residential</span>
          </div>
          <SectionHeading
            title="Home Cleaning Services"
            description="Your home deserves the very best. Our residential cleaning services are designed to keep every room immaculate."
            center={false}
          />
          <div className="grid md:grid-cols-2 gap-8">
            {residentialServices.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Commercial */}
      <section className="relative py-20 lg:py-28 bg-cream-dark overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-64 w-[500px] h-[500px] bg-gradient-to-tl from-emerald-deep/[0.03] to-transparent rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-20 right-16 w-2 h-2 rounded-full bg-gold/20" />
        <div className="absolute top-32 left-24 w-1.5 h-1.5 rounded-full bg-emerald-deep/15" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="fade-up flex items-center gap-4 mb-4">
            <Building2 className="w-8 h-8 text-gold" />
            <span className="text-gold font-semibold text-sm tracking-widest uppercase">Commercial</span>
          </div>
          <SectionHeading
            title="Commercial Cleaning Services"
            description="Keep your business environment professional and healthy. We serve offices, retail, medical facilities, and more across Edmonton."
            center={false}
          />
          <div className="grid md:grid-cols-2 gap-8">
            {commercialServices.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-28 bg-emerald-deep overflow-hidden grain">
        {/* Atmospheric blur orbs */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-emerald-light/15 rounded-full blur-3xl float pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gold/10 rounded-full blur-3xl float-delay pointer-events-none" />

        {/* Decorative rings */}
        <div className="absolute top-10 right-1/4 w-40 h-40 border border-white/[0.05] rounded-full pointer-events-none" />
        <div className="absolute bottom-16 left-1/3 w-24 h-24 border border-white/[0.04] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="scale-in">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              Need a Custom Solution?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Every space is unique. Contact us to create a customized cleaning plan that
              perfectly fits your requirements and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quote"
                className="group/link inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gold/25 pulse-glow"
              >
                Get Your Free Quote
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
