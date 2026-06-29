import { useState, useMemo, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Lock,
  Unlock,
  Trash2,
  CheckCircle2,
  Clock,
  Ban,
  Shield,
  CalendarDays,
  Users,
  LogOut,
} from 'lucide-react';
import {
  getBookings,
  blockDate,
  unblockDate,
  removeBooking,
  updateBookingStatus,
  formatDate,
  type Booking,
} from '../hooks/useBookings';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const ADMIN_PIN = '1234';

export default function Admin() {
  const [authenticated, setAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState('');
  const [tab, setTab] = useState<'calendar' | 'bookings'>('calendar');

  const refresh = () => setRefreshKey((k) => k + 1);

  const allBookings = useMemo(() => {
    void refreshKey;
    return getBookings();
  }, [refreshKey]);

  const selectedDateBookings = useMemo(() => {
    return allBookings.filter((b) => b.date === selectedDate);
  }, [allBookings, selectedDate]);

  const upcomingBookings = useMemo(() => {
    const todayStr = formatDate(today);
    return allBookings
      .filter((b) => b.date >= todayStr && b.status !== 'blocked')
      .sort((a, b) => a.date.localeCompare(b.date));
  }, [allBookings]);

  const calendarDays = useMemo(() => {
    const firstDay = new Date(viewYear, viewMonth, 1).getDay();
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const prevMonthDays = new Date(viewYear, viewMonth, 0).getDate();
    const days: { date: Date; currentMonth: boolean }[] = [];

    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({ date: new Date(viewYear, viewMonth - 1, prevMonthDays - i), currentMonth: false });
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ date: new Date(viewYear, viewMonth, i), currentMonth: true });
    }
    const remaining = 42 - days.length;
    for (let i = 1; i <= remaining; i++) {
      days.push({ date: new Date(viewYear, viewMonth + 1, i), currentMonth: false });
    }
    return days;
  }, [viewMonth, viewYear]);

  const prevMonth = useCallback(() => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(viewYear - 1); }
    else setViewMonth(viewMonth - 1);
  }, [viewMonth, viewYear]);

  const nextMonth = useCallback(() => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(viewYear + 1); }
    else setViewMonth(viewMonth + 1);
  }, [viewMonth, viewYear]);

  const handleToggleBlock = (dateStr: string) => {
    const bookings = allBookings.filter((b) => b.date === dateStr);
    const isBlocked = bookings.some((b) => b.status === 'blocked');
    if (isBlocked) unblockDate(dateStr);
    else blockDate(dateStr);
    refresh();
  };

  const handleRemoveBooking = (date: string, email: string) => {
    removeBooking(date, email);
    refresh();
  };

  const handleStatusChange = (date: string, email: string, status: Booking['status']) => {
    updateBookingStatus(date, email, status);
    refresh();
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === ADMIN_PIN) {
      setAuthenticated(true);
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  // Login screen
  if (!authenticated) {
    return (
      <>
        <section className="bg-emerald-deep pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden grain">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[100px]" />
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-gold/20 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-gold" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Admin Panel
            </h1>
            <p className="text-white/60 text-lg">Manage your bookings and calendar availability</p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-sm mx-auto px-6">
            <form onSubmit={handleLogin} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h2 className="font-serif text-xl font-bold text-emerald-deep mb-2 text-center">Enter Admin PIN</h2>
              <p className="text-gray-400 text-xs text-center mb-6">Default: 1234</p>
              <input
                type="password"
                value={pin}
                onChange={(e) => { setPin(e.target.value); setPinError(false); }}
                placeholder="Enter PIN"
                className={`w-full px-4 py-3.5 rounded-xl border text-center text-2xl tracking-[0.5em] font-bold outline-none transition-all ${
                  pinError ? 'border-red-300 focus:border-red-400 focus:ring-red-100' : 'border-gray-200 focus:border-gold focus:ring-gold/20'
                } focus:ring-2`}
                maxLength={6}
                autoFocus
              />
              {pinError && <p className="text-red-500 text-xs text-center mt-2">Incorrect PIN</p>}
              <button
                type="submit"
                className="w-full mt-4 bg-emerald-deep hover:bg-emerald-light text-white py-3 rounded-full font-semibold text-sm transition-all"
              >
                Access Dashboard
              </button>
            </form>
          </div>
        </section>
      </>
    );
  }

  // Dashboard
  const stats = {
    total: upcomingBookings.length,
    confirmed: upcomingBookings.filter((b) => b.status === 'confirmed').length,
    pending: upcomingBookings.filter((b) => b.status === 'pending').length,
    blockedDays: allBookings.filter((b) => b.status === 'blocked').length,
  };

  return (
    <>
      {/* Header */}
      <section className="bg-emerald-deep pt-32 pb-8 lg:pt-40 lg:pb-10 relative overflow-hidden grain">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-white tracking-tight">
                Booking Dashboard
              </h1>
              <p className="text-white/50 text-sm mt-1">Manage your calendar and bookings</p>
            </div>
            <button
              onClick={() => setAuthenticated(false)}
              className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
            >
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-emerald-deep pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Upcoming Bookings', value: stats.total, icon: CalendarDays, color: 'text-white' },
              { label: 'Confirmed', value: stats.confirmed, icon: CheckCircle2, color: 'text-green-400' },
              { label: 'Pending', value: stats.pending, icon: Clock, color: 'text-yellow-400' },
              { label: 'Blocked Days', value: stats.blockedDays, icon: Ban, color: 'text-red-400' },
            ].map((s) => (
              <div key={s.label} className="bg-white/[0.06] border border-white/[0.08] rounded-xl p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <s.icon className={`w-4 h-4 ${s.color}`} />
                  <span className="text-white/40 text-xs">{s.label}</span>
                </div>
                <p className={`font-serif text-2xl font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex gap-2 mb-8">
            <button
              onClick={() => setTab('calendar')}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                tab === 'calendar'
                  ? 'bg-emerald-deep text-white'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              <CalendarDays className="w-4 h-4 inline-block mr-2 -mt-0.5" />
              Calendar
            </button>
            <button
              onClick={() => setTab('bookings')}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                tab === 'bookings'
                  ? 'bg-emerald-deep text-white'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              <Users className="w-4 h-4 inline-block mr-2 -mt-0.5" />
              All Bookings ({stats.total})
            </button>
          </div>

          {tab === 'calendar' && (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Admin Calendar */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                  {/* Month nav */}
                  <div className="flex items-center justify-between px-6 py-4 bg-emerald-deep">
                    <button onClick={prevMonth} className="w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:bg-white/10 transition-all">
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <h3 className="font-serif text-lg font-bold text-white">{MONTHS[viewMonth]} {viewYear}</h3>
                    <button onClick={nextMonth} className="w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:bg-white/10 transition-all">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Day headers */}
                  <div className="grid grid-cols-7 border-b border-gray-100">
                    {DAYS.map((d) => (
                      <div key={d} className="py-2.5 text-center text-xs font-semibold text-gray-400 uppercase tracking-wider">{d}</div>
                    ))}
                  </div>

                  {/* Grid */}
                  <div className="grid grid-cols-7">
                    {calendarDays.map(({ date, currentMonth }, i) => {
                      const dateStr = formatDate(date);
                      const isToday = date.getTime() === today.getTime();
                      const isPast = date < today;
                      const dayBookings = allBookings.filter((b) => b.date === dateStr);
                      const isBlocked = dayBookings.some((b) => b.status === 'blocked');
                      const activeBookings = dayBookings.filter((b) => b.status !== 'blocked');
                      const isSelected = dateStr === selectedDate;

                      return (
                        <button
                          key={i}
                          onClick={() => currentMonth && setSelectedDate(dateStr)}
                          className={`relative aspect-square flex flex-col items-center justify-center border-b border-r border-gray-50 transition-all ${
                            isSelected
                              ? 'bg-emerald-deep text-white ring-2 ring-emerald-deep ring-offset-1 z-10'
                              : isBlocked
                              ? 'bg-red-50'
                              : !currentMonth
                              ? 'opacity-20'
                              : isPast
                              ? 'opacity-40'
                              : 'hover:bg-gray-50 cursor-pointer'
                          }`}
                        >
                          <span className={`text-sm font-medium ${
                            isSelected ? 'text-white font-bold'
                            : isToday ? 'text-gold font-bold'
                            : isBlocked ? 'text-red-400 line-through'
                            : 'text-gray-700'
                          }`}>
                            {date.getDate()}
                          </span>
                          {currentMonth && !isPast && (
                            <div className="flex items-center gap-0.5 mt-0.5">
                              {isBlocked && <Lock className="w-2.5 h-2.5 text-red-400" />}
                              {activeBookings.length > 0 && (
                                <span className={`text-[9px] font-bold ${isSelected ? 'text-gold' : 'text-emerald-deep'}`}>
                                  {activeBookings.length}
                                </span>
                              )}
                            </div>
                          )}
                          {isToday && !isSelected && (
                            <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Day detail panel */}
              <div>
                {selectedDate ? (
                  <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm sticky top-24">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-serif text-lg font-bold text-emerald-deep">
                        {new Date(selectedDate + 'T12:00:00').toLocaleDateString('en-CA', { weekday: 'long', month: 'long', day: 'numeric' })}
                      </h3>
                    </div>

                    {/* Block/Unblock */}
                    <button
                      onClick={() => handleToggleBlock(selectedDate)}
                      className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all mb-6 ${
                        selectedDateBookings.some((b) => b.status === 'blocked')
                          ? 'bg-green-50 text-green-700 hover:bg-green-100 border border-green-200'
                          : 'bg-red-50 text-red-700 hover:bg-red-100 border border-red-200'
                      }`}
                    >
                      {selectedDateBookings.some((b) => b.status === 'blocked') ? (
                        <><Unlock className="w-4 h-4" /> Unblock This Day</>
                      ) : (
                        <><Lock className="w-4 h-4" /> Block This Day</>
                      )}
                    </button>

                    {/* Bookings on this day */}
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      Bookings ({selectedDateBookings.filter((b) => b.status !== 'blocked').length})
                    </h4>

                    {selectedDateBookings.filter((b) => b.status !== 'blocked').length === 0 ? (
                      <p className="text-gray-400 text-sm py-4 text-center">No bookings for this day</p>
                    ) : (
                      <div className="space-y-3">
                        {selectedDateBookings.filter((b) => b.status !== 'blocked').map((b, i) => (
                          <div key={i} className="bg-gray-50 rounded-xl p-4">
                            <div className="flex items-center justify-between mb-2">
                              <p className="font-semibold text-emerald-deep text-sm">{b.name}</p>
                              <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                                b.status === 'confirmed'
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-yellow-100 text-yellow-700'
                              }`}>
                                {b.status}
                              </span>
                            </div>
                            <p className="text-gray-400 text-xs">{b.email}</p>
                            <p className="text-gray-400 text-xs">{b.service} {b.time && `- ${b.time}`}</p>
                            <div className="flex gap-2 mt-3">
                              {b.status === 'pending' && (
                                <button
                                  onClick={() => handleStatusChange(b.date, b.email, 'confirmed')}
                                  className="flex-1 text-xs font-semibold py-1.5 rounded-lg bg-green-100 text-green-700 hover:bg-green-200 transition-colors"
                                >
                                  Confirm
                                </button>
                              )}
                              <button
                                onClick={() => handleRemoveBooking(b.date, b.email)}
                                className="flex items-center justify-center gap-1 text-xs font-semibold py-1.5 px-3 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                              >
                                <Trash2 className="w-3 h-3" /> Remove
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8 text-center">
                    <CalendarDays className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-400 text-sm">Select a date to view details and manage bookings</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {tab === 'bookings' && (
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              {upcomingBookings.length === 0 ? (
                <div className="p-12 text-center">
                  <Users className="w-12 h-12 text-gray-200 mx-auto mb-3" />
                  <p className="text-gray-400">No upcoming bookings yet</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-100">
                        <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase">Date</th>
                        <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase">Client</th>
                        <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase">Service</th>
                        <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase">Time</th>
                        <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase">Status</th>
                        <th className="text-right px-6 py-3 text-xs font-semibold text-gray-400 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {upcomingBookings.map((b, i) => (
                        <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50">
                          <td className="px-6 py-4 font-medium text-emerald-deep whitespace-nowrap">{b.date}</td>
                          <td className="px-6 py-4">
                            <p className="font-medium text-gray-700">{b.name}</p>
                            <p className="text-gray-400 text-xs">{b.email}</p>
                          </td>
                          <td className="px-6 py-4 text-gray-600">{b.service}</td>
                          <td className="px-6 py-4 text-gray-600">{b.time || '—'}</td>
                          <td className="px-6 py-4">
                            <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                              b.status === 'confirmed'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-yellow-100 text-yellow-700'
                            }`}>
                              {b.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              {b.status === 'pending' && (
                                <button
                                  onClick={() => handleStatusChange(b.date, b.email, 'confirmed')}
                                  className="text-xs font-semibold px-3 py-1 rounded-lg bg-green-100 text-green-700 hover:bg-green-200 transition-colors"
                                >
                                  Confirm
                                </button>
                              )}
                              <button
                                onClick={() => handleRemoveBooking(b.date, b.email)}
                                className="text-xs font-semibold px-3 py-1 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                              >
                                Remove
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
