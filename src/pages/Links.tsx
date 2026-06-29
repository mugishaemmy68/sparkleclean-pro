import {
  Sparkles,
  Globe,
  ClipboardList,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Star,
  Snowflake,
  CalendarDays,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const links = [
  {
    icon: ClipboardList,
    label: 'Get a Free Quote',
    description: 'Request your personalized cleaning or snow removal quote',
    to: '/quote',
    featured: true,
  },
  {
    icon: Globe,
    label: 'Visit Our Website',
    description: 'Explore our full range of services',
    to: '/',
  },
  {
    icon: CalendarDays,
    label: 'Our Services',
    description: 'Residential, commercial cleaning & snow removal',
    to: '/services',
  },
  {
    icon: Star,
    label: 'View Our Plans',
    description: 'Find the right cleaning plan for your needs',
    to: '/pricing',
  },
  {
    icon: Snowflake,
    label: 'Snow Removal',
    description: 'Seasonal & on-demand snow clearing services',
    to: '/services',
  },
  {
    icon: MapPin,
    label: 'Contact Us',
    description: '11912 175 Ave NW, Edmonton, AB',
    to: '/contact',
  },
];

export default function Links() {
  return (
    <div className="min-h-screen bg-emerald-deep relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-10 w-[300px] h-[300px] bg-emerald-lighter/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-md mx-auto px-6 py-16">
        {/* Profile */}
        <div className="text-center mb-10">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center mx-auto mb-5 shadow-xl shadow-gold/20 ring-4 ring-white/10">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-serif text-2xl font-bold text-white tracking-tight">
            SparkleClean Pro
          </h1>
          <p className="text-white/50 text-sm mt-1">Premium Cleaning & Snow Removal</p>
          <p className="text-white/35 text-xs mt-0.5">Edmonton, Alberta</p>

          {/* Quick contact */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <a
              href="tel:+17808847305"
              className="flex items-center gap-1.5 text-gold/80 hover:text-gold text-xs transition-colors"
            >
              <Phone className="w-3 h-3" /> (780) 884-7305
            </a>
            <a
              href="mailto:hello@sparklecleanpro.ca"
              className="flex items-center gap-1.5 text-gold/80 hover:text-gold text-xs transition-colors"
            >
              <Mail className="w-3 h-3" /> Email Us
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-3">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`group flex items-center gap-4 w-full p-4 rounded-2xl transition-all duration-300 ${
                link.featured
                  ? 'bg-gradient-to-r from-gold to-gold-dark text-white shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/30 hover:scale-[1.02]'
                  : 'bg-white/[0.06] border border-white/[0.08] text-white hover:bg-white/[0.1] hover:border-white/[0.15]'
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                link.featured ? 'bg-white/20' : 'bg-white/[0.06]'
              }`}>
                <link.icon className={`w-5 h-5 ${link.featured ? 'text-white' : 'text-gold'}`} />
              </div>
              <div className="flex-1 text-left">
                <p className={`font-semibold text-sm ${link.featured ? 'text-white' : 'text-white/90'}`}>
                  {link.label}
                </p>
                <p className={`text-xs mt-0.5 ${link.featured ? 'text-white/70' : 'text-white/40'}`}>
                  {link.description}
                </p>
              </div>
              <ArrowRight className={`w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 ${
                link.featured ? 'text-white/70' : 'text-white/30'
              }`} />
            </Link>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {['Bonded & Insured', 'Eco-Friendly', '10+ Years'].map((badge) => (
            <span key={badge} className="text-white/25 text-[10px] font-medium flex items-center gap-1">
              <span className="w-1 h-1 bg-gold/40 rounded-full" />
              {badge}
            </span>
          ))}
        </div>

        {/* Footer */}
        <p className="text-center text-white/20 text-[10px] mt-8">
          &copy; {new Date().getFullYear()} SparkleClean Pro. Edmonton, AB.
        </p>
      </div>
    </div>
  );
}
