import { Link } from 'react-router-dom';
import { Sparkles, CheckCircle2, ArrowRight, Star, Snowflake } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const residentialPlans = [
  {
    name: 'Essential Clean',
    description: 'Perfect for regular upkeep of a tidy home.',
    features: [
      'Kitchen & bathroom cleaning',
      'Vacuuming & mopping all floors',
      'Dusting accessible surfaces',
      'Trash removal',
      'Bed making',
    ],
    popular: false,
  },
  {
    name: 'Premium Clean',
    description: 'Our most popular plan for a thorough, detailed clean.',
    features: [
      'Everything in Essential',
      'Inside appliance wipe-down',
      'Baseboard & trim dusting',
      'Light fixture cleaning',
      'Interior window sills',
      'Cabinet exterior cleaning',
    ],
    popular: true,
  },
  {
    name: 'Luxury Deep Clean',
    description: 'The ultimate top-to-bottom deep clean experience.',
    features: [
      'Everything in Premium',
      'Inside oven & fridge cleaning',
      'Wall spot cleaning',
      'Grout & tile scrubbing',
      'Ceiling fan cleaning',
      'Inside cabinet cleaning',
      'Garage sweep',
    ],
    popular: false,
  },
];

const commercialPlans = [
  {
    name: 'Office Basic',
    description: 'Regular maintenance for small offices up to 2,000 sq ft.',
    features: [
      'Weekly scheduled cleaning',
      'Workstation sanitization',
      'Restroom cleaning',
      'Trash & recycling',
      'Floor vacuuming & mopping',
    ],
  },
  {
    name: 'Office Pro',
    description: 'Comprehensive cleaning for offices up to 5,000 sq ft.',
    features: [
      'Twice-weekly cleaning',
      'Everything in Office Basic',
      'Kitchen/break room deep clean',
      'Window & glass cleaning',
      'Carpet spot treatment',
      'Supply restocking',
    ],
  },
  {
    name: 'Enterprise',
    description: 'Tailored solutions for large facilities and specialized needs.',
    features: [
      'Custom cleaning schedule',
      'Dedicated cleaning team',
      'Medical-grade protocols available',
      'After-hours service',
      'Monthly quality reports',
      'Priority response guarantee',
    ],
  },
];

const snowPlans = [
  {
    name: 'Per Visit',
    description: 'On-demand snow clearing for driveways and walkways.',
    features: [
      'Driveway snow clearing',
      'Walkway & steps shoveling',
      'Salt / sand application',
      'Same-day booking available',
    ],
  },
  {
    name: 'Seasonal Residential',
    description: 'Worry-free all-winter coverage for your home. Nov–Apr.',
    features: [
      'Unlimited snowfall events',
      'Driveway + all walkways',
      'Priority morning service',
      'Salt & sand included',
      'Guaranteed response time',
    ],
    popular: true,
  },
  {
    name: 'Seasonal Commercial',
    description: 'Tailored snow management for parking lots and commercial properties.',
    features: [
      'Parking lot plowing',
      'Sidewalk & entrance clearing',
      '24/7 emergency response',
      'Ice management program',
      'Liability documentation',
    ],
  },
];

export default function Pricing() {
  useScrollAnimation();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-emerald-deep pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden grain">
        <div className="absolute top-10 -left-32 w-[340px] h-[340px] rounded-full bg-gold/[0.07] blur-3xl float" />
        <div className="absolute -bottom-16 -right-24 w-[420px] h-[420px] rounded-full bg-emerald-lighter/[0.1] blur-3xl float-delay" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="fade-in inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-white/80 text-sm">Our Plans</span>
          </span>
          <h1 className="fade-up font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Cleaning <span className="text-gold italic">Plans</span> for Every Need
          </h1>
          <p className="fade-up text-white/70 text-lg max-w-2xl mx-auto" style={{ transitionDelay: '100ms' }}>
            Choose the plan that fits your needs and request a free, personalized
            quote — no obligation, no hidden fees.
          </p>
        </div>
      </section>

      {/* Residential */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            subtitle="Residential"
            title="Home Cleaning Plans"
            description="Select the level of clean that's right for your home. We'll provide a custom quote based on your space."
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
            {residentialPlans.map((plan, i) => {
              if (plan.popular) {
                return (
                  <div
                    key={plan.name}
                    className="fade-up bg-gradient-to-b from-gold via-gold-light to-gold-dark p-[2px] rounded-2xl shadow-2xl scale-105"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="bg-emerald-deep rounded-[14px] p-8 relative">
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                        <span className="inline-flex items-center gap-1 bg-gradient-to-r from-gold to-gold-dark text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-gold/25 pulse-glow">
                          <Star className="w-3 h-3 fill-white" /> Most Popular
                        </span>
                      </div>
                      <h3 className="font-serif text-xl font-bold mb-2 text-white tracking-tight">
                        {plan.name}
                      </h3>
                      <p className="text-sm mb-6 text-white/60">
                        {plan.description}
                      </p>
                      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-white/80">
                            <CheckCircle2 className="w-4 h-4 shrink-0 text-gold" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to="/quote"
                        className="block text-center py-3 rounded-full font-semibold text-sm transition-all duration-300 bg-gradient-to-r from-gold to-gold-dark hover:from-gold-dark hover:to-gold text-white hover:shadow-lg hover:shadow-gold/25 hover:scale-[1.02] active:scale-[0.98]"
                      >
                        Request a Quote
                      </Link>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={plan.name}
                  className="fade-up card-lift rounded-2xl p-8 relative bg-white shadow-sm border border-gray-100"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <h3 className="font-serif text-xl font-bold mb-2 text-emerald-deep tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="text-sm mb-6 text-gray-500">
                    {plan.description}
                  </p>
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6" />
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 shrink-0 text-gold" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/quote"
                    className="block text-center py-3 rounded-full font-semibold text-sm transition-all duration-300 bg-gradient-to-r from-emerald-deep to-emerald-light hover:from-emerald-light hover:to-emerald-deep text-white hover:shadow-lg hover:shadow-emerald-deep/20 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Request a Quote
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Frequency Discounts */}
      <section className="py-16 bg-cream-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="fade-up bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
            <h3 className="font-serif text-2xl font-bold text-emerald-deep mb-2 text-center tracking-tight">
              Save More with Regular Service
            </h3>
            <div className="h-[2px] w-16 mx-auto bg-gradient-to-r from-gold to-gold-light rounded-full mb-8" />
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { freq: 'Weekly', benefit: 'Best Savings', desc: 'Maximum discount for busy households' },
                { freq: 'Bi-Weekly', benefit: 'Great Value', desc: 'Our most popular frequency' },
                { freq: 'Monthly', benefit: 'Convenient', desc: 'Great for light maintenance' },
              ].map((item) => (
                <div
                  key={item.freq}
                  className="card-lift text-center p-6 rounded-xl bg-cream border border-transparent hover:border-gold/20 transition-all duration-300 cursor-default"
                >
                  <p className="font-serif text-lg font-bold text-emerald-deep tracking-tight">{item.freq}</p>
                  <p className="text-gold font-bold text-lg my-2">{item.benefit}</p>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commercial */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            subtitle="Commercial"
            title="Business Cleaning Plans"
            description="Professional cleaning solutions designed to keep your business environment pristine and productive."
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {commercialPlans.map((plan, i) => (
              <div
                key={plan.name}
                className="fade-up card-lift bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <h3 className="font-serif text-xl font-bold text-emerald-deep mb-2 tracking-tight">{plan.name}</h3>
                <p className="text-gray-500 text-sm mb-6">{plan.description}</p>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6" />
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/quote"
                  className="block text-center py-3 rounded-full font-semibold text-sm transition-all duration-300 bg-gradient-to-r from-emerald-deep to-emerald-light hover:from-emerald-light hover:to-emerald-deep text-white hover:shadow-lg hover:shadow-emerald-deep/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Request a Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Snow Removal */}
      <section className="py-20 lg:py-28 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Snowflake className="w-6 h-6 text-gold" />
            <span className="text-gold font-semibold text-xs tracking-[0.2em] uppercase">Seasonal</span>
          </div>
          <SectionHeading
            subtitle=""
            title="Snow Removal Plans"
            description="Keep your property safe and accessible all winter long. Contact us for a personalized quote."
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {snowPlans.map((plan, i) => (
              <div
                key={plan.name}
                className={`fade-up rounded-2xl p-8 relative ${
                  plan.popular
                    ? 'bg-emerald-deep text-white shadow-2xl scale-105 border-2 border-gold'
                    : 'card-lift bg-white shadow-sm border border-gray-100'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="inline-flex items-center gap-1 bg-gradient-to-r from-gold to-gold-dark text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-gold/25">
                      <Snowflake className="w-3 h-3" /> Best Value
                    </span>
                  </div>
                )}
                <h3 className={`font-serif text-xl font-bold mb-2 tracking-tight ${plan.popular ? 'text-white' : 'text-emerald-deep'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.popular ? 'text-white/60' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
                <div className={`h-px w-full bg-gradient-to-r from-transparent ${plan.popular ? 'via-white/10' : 'via-gray-200'} to-transparent mb-6`} />
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2 text-sm ${plan.popular ? 'text-white/80' : 'text-gray-600'}`}>
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-gold" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/quote"
                  className={`block text-center py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                    plan.popular
                      ? 'bg-gradient-to-r from-gold to-gold-dark hover:from-gold-dark hover:to-gold text-white hover:shadow-lg hover:shadow-gold/25'
                      : 'bg-gradient-to-r from-emerald-deep to-emerald-light hover:from-emerald-light hover:to-emerald-deep text-white hover:shadow-lg hover:shadow-emerald-deep/20'
                  }`}
                >
                  Request a Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-28 bg-emerald-deep overflow-hidden grain">
        <div className="absolute top-1/2 -left-40 w-[350px] h-[350px] rounded-full bg-gold/[0.06] blur-3xl float-delay" />
        <div className="absolute -bottom-20 right-10 w-[300px] h-[300px] rounded-full bg-emerald-lighter/[0.08] blur-3xl float" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="scale-in">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              Not Sure Which Plan Is Right?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Request a free, no-obligation quote and we'll recommend the perfect plan
              based on your space, needs, and budget.
            </p>
            <Link
              to="/quote"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-gold-dark hover:from-gold-dark hover:to-gold text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-gold/25 hover:scale-[1.02] active:scale-[0.98]"
            >
              Get Your Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
