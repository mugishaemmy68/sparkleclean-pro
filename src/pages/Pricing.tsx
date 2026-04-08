import { Link } from 'react-router-dom';
import { Sparkles, CheckCircle2, ArrowRight, Star } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const residentialPlans = [
  {
    name: 'Essential Clean',
    price: '149',
    frequency: 'per visit',
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
    price: '249',
    frequency: 'per visit',
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
    price: '399',
    frequency: 'per visit',
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
    price: '399',
    frequency: 'per month',
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
    price: '799',
    frequency: 'per month',
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
    price: 'Custom',
    frequency: 'quote',
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

export default function Pricing() {
  useScrollAnimation();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-emerald-deep pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden grain">
        {/* Atmospheric blur orbs */}
        <div className="absolute top-10 -left-32 w-[340px] h-[340px] rounded-full bg-gold/[0.07] blur-3xl float" />
        <div className="absolute -bottom-16 -right-24 w-[420px] h-[420px] rounded-full bg-emerald-lighter/[0.1] blur-3xl float-delay" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="fade-in inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-white/80 text-sm">Transparent Pricing</span>
          </span>
          <h1 className="fade-up font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Simple, <span className="text-gold italic">Honest</span> Pricing
          </h1>
          <p className="fade-up text-white/70 text-lg max-w-2xl mx-auto" style={{ transitionDelay: '100ms' }}>
            No hidden fees, no surprises. Choose the plan that fits your needs,
            or request a custom quote for your unique space.
          </p>
        </div>
      </section>

      {/* Residential Pricing */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            subtitle="Residential"
            title="Home Cleaning Plans"
            description="Pricing based on a standard 3-bedroom home. Actual pricing may vary based on home size and condition."
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
                      <div className="mb-2">
                        <span className="font-serif text-4xl font-bold text-gold">
                          ${plan.price}
                        </span>
                        <span className="text-sm ml-1 text-white/50">
                          {plan.frequency}
                        </span>
                      </div>
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
                        Get Started
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
                  <div className="mb-2">
                    <span className="font-serif text-4xl font-bold text-emerald-deep">
                      ${plan.price}
                    </span>
                    <span className="text-sm ml-1 text-gray-400">
                      {plan.frequency}
                    </span>
                  </div>
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
                    Get Started
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
                { freq: 'Weekly', discount: '20% off', desc: 'Best value for busy households' },
                { freq: 'Bi-Weekly', discount: '15% off', desc: 'Our most popular frequency' },
                { freq: 'Monthly', discount: '10% off', desc: 'Great for light maintenance' },
              ].map((item) => (
                <div
                  key={item.freq}
                  className="card-lift text-center p-6 rounded-xl bg-cream border border-transparent hover:border-gold/20 transition-all duration-300 cursor-default"
                >
                  <p className="font-serif text-lg font-bold text-emerald-deep tracking-tight">{item.freq}</p>
                  <p className="text-gold font-bold text-2xl my-2">{item.discount}</p>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Pricing */}
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
                <div className="mb-2">
                  {plan.price === 'Custom' ? (
                    <span className="font-serif text-3xl font-bold text-emerald-deep">Custom</span>
                  ) : (
                    <>
                      <span className="font-serif text-4xl font-bold text-emerald-deep">${plan.price}</span>
                      <span className="text-gray-400 text-sm ml-1">{plan.frequency}</span>
                    </>
                  )}
                </div>
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
                  {plan.price === 'Custom' ? 'Request Quote' : 'Get Started'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-28 bg-emerald-deep overflow-hidden grain">
        {/* Atmospheric blur orbs */}
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
