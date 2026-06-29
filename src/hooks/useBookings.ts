const STORAGE_KEY = 'sparkleclean_bookings';

export interface Booking {
  date: string;
  name: string;
  email: string;
  service: string;
  time: string;
  status: 'confirmed' | 'pending' | 'blocked';
}

function load(): Booking[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function save(bookings: Booking[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
}

export function getBookings(): Booking[] {
  return load();
}

export function getBookingsForDate(date: string): Booking[] {
  return load().filter((b) => b.date === date);
}

export function isDateFullyBooked(date: string): boolean {
  const bookings = getBookingsForDate(date);
  return bookings.some((b) => b.status === 'blocked') ||
    bookings.filter((b) => b.status === 'confirmed' || b.status === 'pending').length >= 3;
}

export function getBookedDates(): Set<string> {
  const bookings = load();
  const dates = new Set<string>();
  const dateGroups = new Map<string, Booking[]>();

  bookings.forEach((b) => {
    if (!dateGroups.has(b.date)) dateGroups.set(b.date, []);
    dateGroups.get(b.date)!.push(b);
  });

  dateGroups.forEach((group, date) => {
    if (group.some((b) => b.status === 'blocked') ||
        group.filter((b) => b.status === 'confirmed' || b.status === 'pending').length >= 3) {
      dates.add(date);
    }
  });

  return dates;
}

export function addBooking(booking: Booking): boolean {
  if (isDateFullyBooked(booking.date)) return false;
  const bookings = load();
  bookings.push(booking);
  save(bookings);
  return true;
}

export function blockDate(date: string) {
  const bookings = load();
  const existing = bookings.find((b) => b.date === date && b.status === 'blocked');
  if (existing) return;
  bookings.push({
    date,
    name: 'BLOCKED',
    email: '',
    service: '',
    time: '',
    status: 'blocked',
  });
  save(bookings);
}

export function unblockDate(date: string) {
  const bookings = load().filter((b) => !(b.date === date && b.status === 'blocked'));
  save(bookings);
}

export function removeBooking(date: string, email: string) {
  const bookings = load().filter((b) => !(b.date === date && b.email === email));
  save(bookings);
}

export function updateBookingStatus(date: string, email: string, status: Booking['status']) {
  const bookings = load();
  const booking = bookings.find((b) => b.date === date && b.email === email);
  if (booking) booking.status = status;
  save(bookings);
}

export function clearAllBookings() {
  save([]);
}

export function formatDate(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}
