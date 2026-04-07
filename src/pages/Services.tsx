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
      className="fade-up bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-14 h-14 rounded-2xl bg-emerald-deep/10 flex items-center justify-center mb-6 group-hover:bg-emerald-deep group-hover:scale-110 transition-all">
        <service.icon className="w-7 h-7 text-emerald-deep group-hover:text-white transition-colors" />
      </div>
      <h3 className="font-serif text-xl font-bold text-emerald-deep mb-3">{service.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>
      <ul className="space-y-2">
        {service.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-gray-500">
            <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Services() {
  useScrollAnimation();

  return (
    <>
      {/* Hero */}
      <section className="bg-emerald-deep pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-white/80 text-sm">Professional Cleaning Solutions</span>
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="text-gold italic">Services</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            From meticulous residential care to large-scale commercial maintenance,
            we deliver pristine results tailored to your unique needs.
          </p>
        </div>
      </section>

      {/* Residential */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
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
      <section className="py-20 lg:py-28 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
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
      <section className="py-20 lg:py-28 bg-emerald-deep">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="fade-up">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Every space is unique. Contact us to create a customized cleaning plan that
              perfectly fits your requirements and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quote"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-gold/25"
              >
                Get Your Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
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
