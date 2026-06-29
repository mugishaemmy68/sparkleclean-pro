import { useState, useCallback } from 'react';
import {
  Send,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  User,
  Home,
  ClipboardList,
  Plus,
  CreditCard,
  Phone,
  Gift,
  Tag,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { addBooking } from '../hooks/useBookings';
import BookingCalendar from '../components/BookingCalendar';

/* ───────────── data ───────────── */

const provinces = [
  'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick',
  'Newfoundland and Labrador', 'Northwest Territories', 'Nova Scotia',
  'Nunavut', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Yukon',
];

const serviceTypes = [
  { id: 'standard', label: 'Standard Cleaning Package' },
  { id: 'onetime', label: 'One Time or Occasional Cleaning' },
  { id: 'moveinout', label: 'Move-in / Move-out Cleaning' },
  { id: 'carpet', label: 'Carpet Cleaning' },
  { id: 'snow', label: 'Snow Removal' },
  { id: 'snow-seasonal', label: 'Snow Removal — Seasonal Contract' },
];

const cleaningExtras = [
  { id: 'basement', label: 'Basement Cleaning' },
  { id: 'cabinets', label: 'Inside Cabinets & Drawers' },
  { id: 'refrigerator', label: 'Refrigerator' },
  { id: 'oven', label: 'Oven' },
  { id: 'closets', label: 'Closets' },
  { id: 'walls', label: 'Wall Washing' },
  { id: 'windows', label: 'Window Washing' },
  { id: 'carpetExtra', label: 'Carpet Cleaning (add-on)' },
  { id: 'stairs', label: 'Stair Cleaning' },
  { id: 'extraRoom', label: 'Additional Room' },
  { id: 'pets', label: 'Pets (extra fur & dander)' },
  { id: 'mattress', label: 'Mattress Steam Cleaning' },
];

const snowExtras = [
  { id: 'backyard-path', label: 'Backyard Pathway' },
  { id: 'extra-walkway', label: 'Additional Walkway' },
  { id: 'garage-front', label: 'Garage Entrance' },
  { id: 'deck-patio', label: 'Deck / Patio Clearing' },
  { id: 'roof-snow', label: 'Roof Snow Removal' },
  { id: 'ice-chipping', label: 'Ice Chipping & Removal' },
  { id: 'salting-extra', label: 'Extra Salting / Sanding' },
  { id: 'mailbox-path', label: 'Mailbox & Side Path' },
];

const snowServiceIds = ['snow', 'snow-seasonal'];

const drivewayOptions = ['Single Car', 'Double Car', 'Triple Car', 'Extra Long', 'Circular / Custom'];
const snowPropertyTypes = ['House', 'Townhouse', 'Condo Complex', 'Office Building', 'Retail / Storefront', 'Parking Lot', 'Other Commercial'];

const frequencies = [
  { id: 'weekly', label: 'Weekly', tag: 'Best Value' },
  { id: 'biweekly', label: 'Bi-Weekly', tag: 'Popular' },
  { id: 'triweekly', label: 'Tri-Weekly', tag: '' },
  { id: 'monthly', label: 'Monthly', tag: '' },
  { id: 'onetime', label: 'One Time', tag: '' },
];

const homeTypes = ['Apartment', 'Condo', 'Townhouse', 'Single Family Home'];
const referralSources = [
  'Google Search', 'Social Media', 'Friend or Family', 'Flyer / Door Hanger',
  'Kijiji', 'HomeStars', 'Yelp', 'Other',
];

const steps = [
  { num: 1, label: 'Who You Are', icon: User },
  { num: 2, label: 'Your Home', icon: Home },
  { num: 3, label: 'Your Service', icon: ClipboardList },
  { num: 4, label: 'Select Extras', icon: Plus },
  { num: 5, label: 'Frequency & Pay', icon: CreditCard },
];

/* ───────────── component ───────────── */

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm';
const selectClass = `${inputClass} appearance-none`;
const labelClass = 'block text-sm font-medium text-gray-700 mb-2';

export default function Quote() {
  useScrollAnimation();

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Step 1
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [textReminders, setTextReminders] = useState(false);

  // Step 2
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [postalCode, setPostalCode] = useState('');

  // Step 3
  const [serviceType, setServiceType] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [fullBathrooms, setFullBathrooms] = useState('');
  const [halfBathrooms, setHalfBathrooms] = useState('');
  const [drivewaySize, setDrivewaySize] = useState('');
  const [snowPropertyType, setSnowPropertyType] = useState('');
  const [lotSize, setLotSize] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [discountCode, setDiscountCode] = useState('');

  const isSnow = snowServiceIds.includes(serviceType);
  const currentExtras = isSnow ? snowExtras : cleaningExtras;

  // Step 4
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [sqft, setSqft] = useState('');
  const [homeType, setHomeType] = useState('');
  const [referral, setReferral] = useState('');

  // Step 5
  const [frequency, setFrequency] = useState('');

  const toggleExtra = useCallback((id: string) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }, []);

  const canProceed = (): boolean => {
    switch (step) {
      case 1: return !!(firstName && lastName && email && phone);
      case 2: return !!(address && city && province && postalCode);
      case 3: {
        if (!serviceType || !preferredDate) return false;
        if (isSnow) return !!(drivewaySize && snowPropertyType);
        return !!(bedrooms && fullBathrooms);
      }
      case 4: return true;
      case 5: return !!frequency;
      default: return false;
    }
  };

  const next = () => { if (canProceed() && step < 5) setStep(step + 1); };
  const prev = () => { if (step > 1) setStep(step - 1); };
  const handleSubmit = () => {
    if (!canProceed()) return;
    const serviceName = serviceTypes.find((s) => s.id === serviceType)?.label ?? '';
    addBooking({
      date: preferredDate,
      name: `${firstName} ${lastName}`,
      email,
      service: serviceName,
      time: preferredTime,
      status: 'pending',
    });
    setSubmitted(true);
  };

  /* ── success ── */
  if (submitted) {
    return (
      <>
        <section className="bg-emerald-deep pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Thank You, {firstName}!
            </h1>
          </div>
        </section>
        <section className="py-20 lg:py-28">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100">
              <CheckCircle2 className="w-16 h-16 text-gold mx-auto mb-6" />
              <h2 className="font-serif text-2xl font-bold text-emerald-deep mb-4">
                Your Quote Request Is In!
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We've received your details and will prepare a personalized quote.
                Expect to hear from us within <span className="font-semibold text-emerald-deep">24 hours</span>.
              </p>
              <div className="bg-cream rounded-xl p-6 mb-6 text-left text-sm space-y-1 text-gray-600">
                <p><span className="font-medium text-emerald-deep">Service:</span> {serviceTypes.find(s => s.id === serviceType)?.label}</p>
                <p><span className="font-medium text-emerald-deep">Frequency:</span> {frequencies.find(f => f.id === frequency)?.label}</p>
                <p><span className="font-medium text-emerald-deep">Extras:</span> {selectedExtras.length > 0 ? `${selectedExtras.length} add-on(s) selected` : 'None'}</p>
              </div>
              <p className="text-gray-500 text-sm">
                Need immediate help? Call{' '}
                <a href="tel:+17808847305" className="text-gold font-semibold hover:underline">
                  (780) 884-7305
                </a>
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }

  /* ── main render ── */
  return (
    <>
      {/* Hero */}
      <section className="bg-emerald-deep pt-32 pb-12 lg:pt-40 lg:pb-16 relative overflow-hidden grain">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-[350px] h-[350px] bg-gold/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-10 w-[250px] h-[250px] bg-emerald-lighter/10 rounded-full blur-[80px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] rounded-full px-5 py-2.5 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 bg-gold rounded-full pulse-glow" />
            <span className="text-white/70 text-sm font-medium">Free Estimate — No Obligation</span>
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Get Your <span className="text-gold italic">Free Quote</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
            Complete 5 quick steps and receive a personalized cleaning quote within 24 hours.
          </p>

          {/* Promo Banner */}
          <div className="max-w-xl mx-auto bg-gradient-to-r from-gold-dark to-gold rounded-2xl px-6 py-4 flex items-center gap-4 shadow-xl shadow-gold/15 border border-gold-light/20">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <Gift className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-sm">Limited-Time Offer!</p>
              <p className="text-white/85 text-xs">
                FREE appliance cleaning with your package, or a <span className="font-bold">special discount</span> on your deep clean.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step Indicator */}
      <section className="bg-emerald-deep pb-10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {steps.map((s, i) => {
              const StepIcon = s.icon;
              const isActive = step === s.num;
              const isDone = step > s.num;
              return (
                <div key={s.num} className="flex items-center flex-1 last:flex-none">
                  <button
                    type="button"
                    onClick={() => { if (isDone) setStep(s.num); }}
                    className={`flex flex-col items-center gap-1.5 transition-all ${isDone ? 'cursor-pointer' : 'cursor-default'}`}
                  >
                    <div
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 ${
                        isActive
                          ? 'bg-gold border-gold text-white scale-110'
                          : isDone
                          ? 'bg-white/20 border-white/40 text-white'
                          : 'bg-white/5 border-white/10 text-white/30'
                      }`}
                    >
                      {isDone ? <CheckCircle2 className="w-5 h-5" /> : <StepIcon className="w-5 h-5" />}
                    </div>
                    <span className={`text-[10px] md:text-xs font-medium hidden sm:block ${
                      isActive ? 'text-gold' : isDone ? 'text-white/70' : 'text-white/30'
                    }`}>
                      {s.label}
                    </span>
                  </button>
                  {i < steps.length - 1 && (
                    <div className={`flex-1 h-0.5 mx-2 rounded transition-all ${
                      step > s.num ? 'bg-gold/60' : 'bg-white/10'
                    }`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form Body */}
      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
            {/* Step title */}
            <div className="mb-8">
              <p className="text-gold font-semibold text-xs tracking-widest uppercase mb-1">
                Step {step} of 5
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-emerald-deep">
                {steps[step - 1].label}
              </h2>
            </div>

            {/* ─── STEP 1: Who You Are ─── */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass}>First Name *</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required className={inputClass} placeholder="First name" />
                  </div>
                  <div>
                    <label className={labelClass}>Last Name *</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required className={inputClass} placeholder="Last name" />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Email Address *</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className={inputClass} placeholder="you@example.com" />
                </div>
                <div>
                  <label className={labelClass}>Phone Number *</label>
                  <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required className={inputClass} placeholder="(780) 884-7305" />
                </div>
                <label className="flex items-center gap-3 cursor-pointer p-4 rounded-xl border border-gray-100 hover:border-gold/30 transition-colors">
                  <input
                    type="checkbox"
                    checked={textReminders}
                    onChange={(e) => setTextReminders(e.target.checked)}
                    className="w-5 h-5 rounded border-gray-300 text-gold focus:ring-gold/20"
                  />
                  <div>
                    <span className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gold" /> Send me text message reminders
                    </span>
                    <span className="text-xs text-gray-400 block mt-0.5">Receive appointment confirmations and reminders via SMS</span>
                  </div>
                </label>
              </div>
            )}

            {/* ─── STEP 2: Your Home ─── */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className={labelClass}>Street Address *</label>
                  <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required className={inputClass} placeholder="123 Main Street NW" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass}>City *</label>
                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required className={inputClass} placeholder="Edmonton" />
                  </div>
                  <div>
                    <label className={labelClass}>Province *</label>
                    <select value={province} onChange={(e) => setProvince(e.target.value)} required className={selectClass}>
                      <option value="">Select province</option>
                      {provinces.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <label className={labelClass}>Postal Code *</label>
                  <input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required className={inputClass} placeholder="T5X 0A5" />
                </div>
              </div>
            )}

            {/* ─── STEP 3: Choose Your Service ─── */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <label className={labelClass}>Type of Service *</label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {serviceTypes.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setServiceType(s.id)}
                        className={`text-left p-4 rounded-xl border-2 transition-all ${
                          serviceType === s.id
                            ? 'border-gold bg-gold/5 shadow-sm'
                            : 'border-gray-100 hover:border-gray-200'
                        }`}
                      >
                        <span className="text-sm font-medium text-emerald-deep block">{s.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Conditional fields based on service type */}
                {serviceType && !isSnow && (
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className={labelClass}>Bedrooms *</label>
                      <select value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} required className={selectClass}>
                        <option value="">Select</option>
                        {['1', '2', '3', '4', '5', '6+'].map((n) => <option key={n} value={n}>{n}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Full Baths *</label>
                      <select value={fullBathrooms} onChange={(e) => setFullBathrooms(e.target.value)} required className={selectClass}>
                        <option value="">Select</option>
                        {['1', '2', '3', '4', '5+'].map((n) => <option key={n} value={n}>{n}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Half Baths</label>
                      <select value={halfBathrooms} onChange={(e) => setHalfBathrooms(e.target.value)} className={selectClass}>
                        <option value="">0</option>
                        {['1', '2', '3'].map((n) => <option key={n} value={n}>{n}</option>)}
                      </select>
                    </div>
                  </div>
                )}

                {serviceType && isSnow && (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Property Type *</label>
                        <select value={snowPropertyType} onChange={(e) => setSnowPropertyType(e.target.value)} required className={selectClass}>
                          <option value="">Select property type</option>
                          {snowPropertyTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>Driveway Size *</label>
                        <select value={drivewaySize} onChange={(e) => setDrivewaySize(e.target.value)} required className={selectClass}>
                          <option value="">Select size</option>
                          {drivewayOptions.map((d) => <option key={d} value={d}>{d}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <label className={labelClass}>Approximate Lot Size (sq ft)</label>
                      <input type="number" value={lotSize} onChange={(e) => setLotSize(e.target.value)} className={inputClass} placeholder="e.g. 5000" />
                    </div>
                  </div>
                )}

                <div>
                  <label className={labelClass}>Preferred Date *</label>
                  <p className="text-xs text-gray-400 mb-3">Select an available date from the calendar. Greyed-out dates are unavailable.</p>
                  <BookingCalendar
                    selectedDate={preferredDate}
                    onSelectDate={setPreferredDate}
                  />
                </div>
                <div>
                  <label className={labelClass}>Preferred Time</label>
                  <select value={preferredTime} onChange={(e) => setPreferredTime(e.target.value)} className={selectClass}>
                    <option value="">Select time</option>
                    <option>Morning (8am - 12pm)</option>
                    <option>Afternoon (12pm - 4pm)</option>
                    <option>Evening (4pm - 8pm)</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>
                    <span className="flex items-center gap-2"><Tag className="w-4 h-4 text-gold" /> Discount Code</span>
                  </label>
                  <input type="text" value={discountCode} onChange={(e) => setDiscountCode(e.target.value)} className={inputClass} placeholder="Enter code (optional)" />
                </div>
              </div>
            )}

            {/* ─── STEP 4: Select Extras ─── */}
            {step === 4 && (
              <div className="space-y-8">
                <div>
                  <p className="text-sm text-gray-500 mb-4">
                    {isSnow
                      ? 'Select any additional areas or services for your snow removal.'
                      : 'Select any additional services to add to your cleaning package.'}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {currentExtras.map((e) => {
                      const selected = selectedExtras.includes(e.id);
                      return (
                        <button
                          key={e.id}
                          type="button"
                          onClick={() => toggleExtra(e.id)}
                          className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all text-left ${
                            selected
                              ? 'border-gold bg-gold/5 shadow-sm'
                              : 'border-gray-100 hover:border-gray-200'
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            <span className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                              selected ? 'bg-gold border-gold' : 'border-gray-300'
                            }`}>
                              {selected && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                            </span>
                            <span className="text-sm text-gray-700">{e.label}</span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <h3 className="font-serif text-lg font-bold text-emerald-deep mb-4">
                    {isSnow ? 'About Your Property' : 'About Your Home'}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>Approximate Square Footage</label>
                      <input type="number" value={sqft} onChange={(e) => setSqft(e.target.value)} className={inputClass} placeholder="e.g. 1500" />
                    </div>
                    <div>
                      <label className={labelClass}>Home Type</label>
                      <select value={homeType} onChange={(e) => setHomeType(e.target.value)} className={selectClass}>
                        <option value="">Select type</option>
                        {homeTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="mt-6">
                    <label className={labelClass}>How Did You Hear About Us?</label>
                    <select value={referral} onChange={(e) => setReferral(e.target.value)} className={selectClass}>
                      <option value="">Select</option>
                      {referralSources.map((r) => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* ─── STEP 5: Frequency & Payment ─── */}
            {step === 5 && (
              <div className="space-y-8">
                <div>
                  <p className="text-sm text-gray-500 mb-4">Choose how often you'd like us to clean. Save more with recurring service!</p>
                  <div className="space-y-3">
                    {frequencies.map((f) => {
                      const isSelected = frequency === f.id;
                      return (
                        <button
                          key={f.id}
                          type="button"
                          onClick={() => setFrequency(f.id)}
                          className={`w-full flex items-center justify-between p-5 rounded-xl border-2 transition-all text-left ${
                            isSelected
                              ? 'border-gold bg-gold/5 shadow-sm'
                              : 'border-gray-100 hover:border-gray-200'
                          }`}
                        >
                          <span className="flex items-center gap-4">
                            <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              isSelected ? 'border-gold' : 'border-gray-300'
                            }`}>
                              {isSelected && <span className="w-2.5 h-2.5 bg-gold rounded-full" />}
                            </span>
                            <span>
                              <span className="text-sm font-semibold text-emerald-deep">{f.label}</span>
                            </span>
                          </span>
                          {f.tag && (
                            <span className="text-xs font-bold text-gold bg-gold/10 px-3 py-1 rounded-full">
                              {f.tag}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Request Summary */}
                <div className="bg-emerald-deep rounded-2xl p-6 md:p-8">
                  <h3 className="font-serif text-lg font-bold text-white mb-5">Your Request Summary</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between text-white/70">
                      <span>Service</span>
                      <span className="text-white/90 font-medium">{serviceTypes.find(s => s.id === serviceType)?.label ?? '—'}</span>
                    </div>
                    {selectedExtras.length > 0 && (
                      <div className="flex justify-between text-white/70">
                        <span>Add-ons</span>
                        <span className="text-white/90 font-medium">{selectedExtras.length} selected</span>
                      </div>
                    )}
                    <div className="flex justify-between text-white/70">
                      <span>Frequency</span>
                      <span className="text-white/90 font-medium">{frequencies.find(f => f.id === frequency)?.label ?? '—'}</span>
                    </div>
                    <div className="border-t border-white/10 pt-3">
                      <p className="text-gold font-semibold text-center">We'll prepare a custom quote for you</p>
                    </div>
                  </div>
                  <p className="text-white/40 text-xs mt-4 text-center">
                    Our team will review your request and provide a personalized quote within 24 hours.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-100">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prev}
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-emerald-deep transition-colors px-4 py-2.5 rounded-full hover:bg-gray-50"
                >
                  <ChevronLeft className="w-4 h-4" /> Back
                </button>
              ) : (
                <span />
              )}

              {step < 5 ? (
                <button
                  type="button"
                  onClick={next}
                  disabled={!canProceed()}
                  className="inline-flex items-center gap-2 bg-emerald-deep hover:bg-emerald-light disabled:opacity-40 disabled:cursor-not-allowed text-white px-8 py-3 rounded-full font-semibold text-sm transition-all hover:shadow-lg"
                >
                  Continue <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!canProceed()}
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark disabled:opacity-40 disabled:cursor-not-allowed text-white px-8 py-3 rounded-full font-semibold text-sm transition-all hover:shadow-lg hover:shadow-gold/25"
                >
                  <Send className="w-4 h-4" /> Submit Quote Request
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
