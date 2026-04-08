import { Link } from 'react-router-dom';
import { Sparkles, MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-emerald-deep text-white/60 relative overflow-hidden">
      {/* Atmospheric background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/[0.03] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-lighter/[0.05] rounded-full blur-[100px]" />

      {/* Newsletter / CTA strip */}
      <div className="border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-14">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
                Ready for a spotless space?
              </h3>
              <p className="text-white/40 text-sm mt-1">Get your free, no-obligation quote today.</p>
            </div>
            <Link
              to="/quote"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-gold to-gold-dark hover:from-gold-dark hover:to-gold text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 shrink-0"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-gold/20">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-white leading-tight tracking-tight">
                  SparkleClean
                </span>
                <span className="text-[10px] tracking-[0.35em] uppercase text-gold/80 font-semibold">
                  Pro
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-white/45">
              Edmonton's premier cleaning service delivering pristine luxury to
              homes and businesses since 2015.
            </p>
            <div className="flex items-center gap-2 text-xs text-white/30">
              <span className="w-1.5 h-1.5 bg-gold/50 rounded-full" />
              Bonded & Insured
              <span className="w-1.5 h-1.5 bg-gold/50 rounded-full ml-2" />
              Eco-Friendly
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-white text-lg mb-6 tracking-tight">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                { to: '/services', label: 'Our Services' },
                { to: '/about', label: 'About Us' },
                { to: '/pricing', label: 'Pricing' },
                { to: '/quote', label: 'Request a Quote' },
                { to: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="hover:text-gold transition-colors duration-200 inline-flex items-center gap-1.5 group/link"
                  >
                    <span className="w-0 group-hover/link:w-2 h-px bg-gold transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-white text-lg mb-6 tracking-tight">Services</h4>
            <ul className="space-y-3 text-sm">
              {[
                'Residential Cleaning',
                'Deep Cleaning',
                'Move In/Out Cleaning',
                'Commercial Cleaning',
                'Office Maintenance',
                'Post-Construction',
              ].map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="hover:text-gold transition-colors duration-200 inline-flex items-center gap-1.5 group/link"
                  >
                    <span className="w-0 group-hover/link:w-2 h-px bg-gold transition-all duration-200" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-white text-lg mb-6 tracking-tight">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold/70 mt-0.5 shrink-0" />
                <span>10234 Jasper Avenue NW<br />Edmonton, AB T5J 3N6</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold/70 shrink-0" />
                <a href="tel:+17805551234" className="hover:text-gold transition-colors">
                  (780) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold/70 shrink-0" />
                <a href="mailto:hello@sparklecleanpro.ca" className="hover:text-gold transition-colors">
                  hello@sparklecleanpro.ca
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold/70 mt-0.5 shrink-0" />
                <span>Mon - Sat: 7:00 AM - 8:00 PM<br />Sunday: 9:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} SparkleClean Pro. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
