import { Link } from 'react-router-dom';
import { Sparkles, MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-emerald-deep text-white/70">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-white leading-tight">
                  SparkleClean
                </span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-medium">
                  Pro
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Edmonton's premier cleaning service delivering pristine luxury to
              homes and businesses since 2015.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Social media"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-all"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-white text-lg mb-6">Quick Links</h4>
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
                    className="hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-white text-lg mb-6">Services</h4>
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
                    className="hover:text-gold transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-white text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span>10234 Jasper Avenue NW<br />Edmonton, AB T5J 3N6</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href="tel:+17805551234" className="hover:text-gold transition-colors">
                  (780) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:hello@sparklecleanpro.ca" className="hover:text-gold transition-colors">
                  hello@sparklecleanpro.ca
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span>Mon - Sat: 7:00 AM - 8:00 PM<br />Sunday: 9:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
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
