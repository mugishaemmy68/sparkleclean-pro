import { useState, useMemo, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Lock, Check } from 'lucide-react';
import { getBookedDates, getBookingsForDate, formatDate } from '../hooks/useBookings';

interface BookingCalendarProps {
  selectedDate: string;
  onSelectDate: (date: string) => void;
  refreshKey?: number;
}

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export default function BookingCalendar({ selectedDate, onSelectDate, refreshKey = 0 }: BookingCalendarProps) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [viewYear, setViewYear] = useState(today.getFullYear());

  const bookedDates = useMemo(() => {
    void refreshKey;
    return getBookedDates();
  }, [refreshKey, viewMonth, viewYear]);

  const calendarDays = useMemo(() => {
    const firstDay = new Date(viewYear, viewMonth, 1).getDay();
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const prevMonthDays = new Date(viewYear, viewMonth, 0).getDate();

    const days: { date: Date; currentMonth: boolean }[] = [];

    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        date: new Date(viewYear, viewMonth - 1, prevMonthDays - i),
        currentMonth: false,
      });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: new Date(viewYear, viewMonth, i),
        currentMonth: true,
      });
    }

    const remaining = 42 - days.length;
    for (let i = 1; i <= remaining; i++) {
      days.push({
        date: new Date(viewYear, viewMonth + 1, i),
        currentMonth: false,
      });
    }

    return days;
  }, [viewMonth, viewYear]);

  const prevMonth = useCallback(() => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  }, [viewMonth, viewYear]);

  const nextMonth = useCallback(() => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  }, [viewMonth, viewYear]);

  const canGoPrev = viewYear > today.getFullYear() || (viewYear === today.getFullYear() && viewMonth > today.getMonth());

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-emerald-deep">
        <button
          onClick={prevMonth}
          disabled={!canGoPrev}
          className="w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h3 className="font-serif text-lg font-bold text-white tracking-tight">
          {MONTHS[viewMonth]} {viewYear}
        </h3>
        <button
          onClick={nextMonth}
          className="w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:bg-white/10 transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Day names */}
      <div className="grid grid-cols-7 border-b border-gray-100">
        {DAYS.map((day) => (
          <div key={day} className="py-2.5 text-center text-xs font-semibold text-gray-400 uppercase tracking-wider">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7">
        {calendarDays.map(({ date, currentMonth }, i) => {
          const dateStr = formatDate(date);
          const isToday = date.getTime() === today.getTime();
          const isPast = date < today;
          const isBooked = bookedDates.has(dateStr);
          const isSelected = dateStr === selectedDate;
          const isSunday = date.getDay() === 0;
          const isDisabled = !currentMonth || isPast || isBooked || isSunday;

          const bookingsOnDay = currentMonth && !isPast ? getBookingsForDate(dateStr) : [];
          const confirmedCount = bookingsOnDay.filter((b) => b.status === 'confirmed' || b.status === 'pending').length;
          const isBlocked = bookingsOnDay.some((b) => b.status === 'blocked');

          return (
            <button
              key={i}
              disabled={isDisabled}
              onClick={() => onSelectDate(dateStr)}
              className={`relative aspect-square flex flex-col items-center justify-center border-b border-r border-gray-50 transition-all duration-200 group ${
                isSelected
                  ? 'bg-emerald-deep text-white z-10 shadow-lg shadow-emerald-deep/20'
                  : isDisabled
                  ? 'cursor-not-allowed'
                  : 'hover:bg-emerald-deep/5 cursor-pointer'
              } ${!currentMonth ? 'opacity-25' : ''}`}
            >
              <span
                className={`text-sm font-medium ${
                  isSelected
                    ? 'text-white font-bold'
                    : isToday
                    ? 'text-gold font-bold'
                    : isPast || !currentMonth
                    ? 'text-gray-300'
                    : isSunday
                    ? 'text-gray-300'
                    : isBooked
                    ? 'text-red-300 line-through'
                    : 'text-gray-700'
                }`}
              >
                {date.getDate()}
              </span>

              {/* Status indicators */}
              {currentMonth && !isPast && (
                <>
                  {isBlocked && (
                    <Lock className="w-3 h-3 text-red-400 mt-0.5" />
                  )}
                  {!isBlocked && confirmedCount > 0 && confirmedCount < 3 && (
                    <div className="flex gap-0.5 mt-0.5">
                      {Array.from({ length: confirmedCount }).map((_, j) => (
                        <span key={j} className="w-1 h-1 rounded-full bg-gold" />
                      ))}
                    </div>
                  )}
                  {!isBlocked && confirmedCount >= 3 && (
                    <Check className="w-3 h-3 text-red-400 mt-0.5" />
                  )}
                </>
              )}

              {isToday && !isSelected && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold" />
              )}
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="px-6 py-3 bg-gray-50/50 flex flex-wrap items-center gap-4 text-xs text-gray-400">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-gold" /> Today
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-deep" /> Selected
        </span>
        <span className="flex items-center gap-1.5">
          <Lock className="w-3 h-3 text-red-400" /> Unavailable
        </span>
        <span className="flex items-center gap-1.5">
          <span className="flex gap-0.5">
            <span className="w-1 h-1 rounded-full bg-gold" />
            <span className="w-1 h-1 rounded-full bg-gold" />
          </span>
          Partially booked
        </span>
      </div>
    </div>
  );
}
