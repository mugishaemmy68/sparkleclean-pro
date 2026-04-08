import { Link } from 'react-router-dom';
import {
  Sparkles,
  Heart,
  Users,
  Award,
  Leaf,
  Target,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const values = [
  {
    icon: Heart,
    title: 'Care & Attention',
    description: 'We treat every space as if it were our own, with genuine care and meticulous attention to detail.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We hold ourselves to the highest standards. Good enough is never enough for SparkleClean Pro.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Eco-friendly products and practices that protect your health and the environment.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Proudly Edmonton-owned and operated, investing in our local community and people.',
  },
];

const milestones = [
  { year: '2015', title: 'Founded in Edmonton', description: 'Started with a small team of 3 passionate cleaners and a vision for premium service.' },
  { year: '2017', title: 'Commercial Division Launched', description: 'Expanded to serve Edmonton businesses, offices, and medical facilities.' },
  { year: '2019', title: 'Green Cleaning Certified', description: 'Transitioned to 100% eco-friendly, non-toxic cleaning products and practices.' },
  { year: '2021', title: '1,000th Client Milestone', description: 'Celebrated serving over 1,000 happy residential and commercial clients.' },
  { year: '2023', title: 'Team of 50+', description: 'Grew to a team of over 50 trained, bonded, and insured cleaning professionals.' },
  { year: '2025', title: '2,500+ Clients Strong', description: 'Continuing to set the standard for premium cleaning services across Edmonton.' },
];

const stats = [
  { value: '50+', label: 'Team Members', initials: 'TM' },
  { value: '10+', label: 'Years in Business', initials: 'YB' },
  { value: '2,500+', label: 'Happy Clients', initials: 'HC' },
  { value: '100%', label: 'Eco-Friendly', initials: 'EF' },
];

export default function About() {
  useScrollAnimation();

  return (
    <>
      {/* Hero */}
      <section className="grain relative overflow-hidden bg-emerald-deep pt-32 pb-20 lg:pt-40 lg:pb-28">
        {/* Atmospheric blur orbs */}
        <div className="float absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
        <div className="float-delay absolute -bottom-32 -right-20 w-80 h-80 rounded-full bg-emerald-lighter/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="fade-in inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-white/80 text-sm">Our Story</span>
          </span>
          <h1 className="fade-up font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            About <span className="text-gold italic">SparkleClean Pro</span>
          </h1>
          <p className="fade-up text-white/70 text-lg max-w-2xl mx-auto" style={{ transitionDelay: '100ms' }}>
            A decade of dedication to pristine spaces, happy clients, and
            raising the bar for cleaning services in Edmonton, Alberta.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        {/* Subtle orb */}
        <div className="float-delay absolute top-1/2 -right-40 w-80 h-80 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="slide-left">
              <span className="text-gold font-semibold text-sm tracking-widest uppercase">Our Story</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-emerald-deep mt-3 mb-6 tracking-tight">
                Born from a Passion for Perfection
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  SparkleClean Pro was founded in 2015 by Maria Santos, a lifelong Edmontonian
                  who saw a gap in the market for truly premium cleaning services. What started
                  in her garage with three dedicated team members has grown into Edmonton's most
                  trusted cleaning company.
                </p>
                <p>
                  Our philosophy is simple: every space deserves the same level of care and
                  attention that we'd give our own homes. This means using only the finest
                  eco-friendly products, employing rigorously trained professionals, and
                  never cutting corners.
                </p>
                <p>
                  Today, with a team of over 50 cleaning professionals, we proudly serve
                  thousands of homes and businesses across Edmonton and surrounding areas.
                  Our commitment to excellence hasn't changed — it's only grown stronger.
                </p>
              </div>
            </div>

            <div className="slide-right">
              <div className="grain relative overflow-hidden bg-emerald-deep rounded-3xl p-10 text-center">
                {/* Decorative orb inside card */}
                <div className="float absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gold/10 blur-2xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-4 tracking-tight">Our Mission</h3>
                  <p className="text-white/70 leading-relaxed">
                    To elevate the standard of cleanliness in Edmonton by delivering
                    meticulous, eco-conscious cleaning services that transform spaces and
                    exceed expectations — every single time.
                  </p>

                  <div className="grid grid-cols-2 gap-6 mt-8">
                    {stats.map((stat, i) => (
                      <div key={stat.label} className={`flex flex-col items-center ${i % 2 !== 0 ? 'border-l border-white/10' : ''} ${i >= 2 ? 'border-t border-white/10 pt-6' : ''}`}>
                        <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center mb-3 ring-1 ring-gold/20">
                          <span className="text-gold text-xs font-bold tracking-wide">{stat.initials}</span>
                        </div>
                        <p className="font-serif text-3xl font-bold text-gold">{stat.value}</p>
                        <p className="text-white/50 text-sm">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-cream-dark">
        {/* Atmospheric orb */}
        <div className="float absolute -bottom-32 left-1/4 w-72 h-72 rounded-full bg-emerald-deep/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Values"
            title="What Drives Us Every Day"
            description="Our core values guide every decision, every clean, and every interaction with our clients."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div
                key={value.title}
                className="fade-up card-lift group bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-deep to-emerald-light flex items-center justify-center mx-auto mb-6 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <value.icon className="w-7 h-7 text-white transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="font-serif text-lg font-bold text-emerald-deep mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        {/* Atmospheric blur orb */}
        <div className="float-delay absolute top-1/3 -left-32 w-64 h-64 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Journey"
            title="A Decade of Growth"
            description="From humble beginnings to Edmonton's leading cleaning service."
          />

          <div className="relative">
            {/* Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-emerald-deep/10 -translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`fade-up relative flex flex-col md:flex-row gap-8 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Dot with pulse-glow */}
                  <div className="pulse-glow absolute left-4 md:left-1/2 w-3 h-3 bg-gold rounded-full -translate-x-1/2 mt-2 z-10 ring-4 ring-cream" />

                  <div className={`md:w-1/2 pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <span className="gold-underline text-gold font-bold text-lg">{m.year}</span>
                    <h3 className="font-serif text-xl font-bold text-emerald-deep mt-1 mb-2 tracking-tight">
                      {m.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{m.description}</p>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="grain relative overflow-hidden py-20 lg:py-28 bg-emerald-deep">
        {/* Atmospheric orbs */}
        <div className="float absolute -top-20 right-1/4 w-64 h-64 rounded-full bg-gold/8 blur-3xl pointer-events-none" />
        <div className="float-delay absolute -bottom-20 left-1/3 w-56 h-56 rounded-full bg-emerald-lighter/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            subtitle="Why Trust Us"
            title="Our Commitment to You"
            light
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'Background Checked', desc: 'Every team member undergoes thorough background and reference checks.' },
              { title: 'Fully Insured', desc: '$5 million liability coverage protects your property and our team.' },
              { title: 'Satisfaction Guaranteed', desc: "Not satisfied? We'll re-clean within 24 hours at absolutely no cost." },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`fade-up group text-center ${i < 2 ? 'md:border-r md:border-white/10' : ''}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mx-auto mb-4 shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <CheckCircle2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2 tracking-tight">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        {/* Atmospheric orb */}
        <div className="float absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-emerald-deep/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="scale-in">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-deep mb-6 tracking-tight">
              Ready to Join the SparkleClean Family?
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              Experience the premium cleaning difference that 2,500+ Edmonton clients already enjoy.
            </p>
            <Link
              to="/quote"
              className="inline-flex items-center justify-center gap-2 bg-emerald-deep hover:bg-emerald-light text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Get Your Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
