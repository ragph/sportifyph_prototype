import { useState } from 'react'
import { IoCalendar, IoTime, IoStorefront, IoCash, IoPerson, IoCheckmarkCircle, IoCloseCircle, IoTime as IoTimePending } from 'react-icons/io5'

const CourtOwnerBookings = () => {
  const [filter, setFilter] = useState('all')

  const bookings = [
    {
      id: 1,
      courtName: 'Pickleball Court A',
      customerName: 'Sarah Chen',
      customerPhone: '+63 912 345 6789',
      date: '2024-11-11',
      time: '09:00 AM - 11:00 AM',
      duration: 2,
      amount: 1000,
      status: 'confirmed',
      paymentStatus: 'paid'
    },
    {
      id: 2,
      courtName: 'Pickleball Court B',
      customerName: 'Mike Torres',
      customerPhone: '+63 923 456 7890',
      date: '2024-11-11',
      time: '11:00 AM - 01:00 PM',
      duration: 2,
      amount: 900,
      status: 'confirmed',
      paymentStatus: 'paid'
    },
    {
      id: 3,
      courtName: 'Court A - Basketball',
      customerName: 'Juan Dela Cruz',
      customerPhone: '+63 934 567 8901',
      date: '2024-11-11',
      time: '02:00 PM - 04:00 PM',
      duration: 2,
      amount: 1600,
      status: 'confirmed',
      paymentStatus: 'paid'
    },
    {
      id: 4,
      courtName: 'Pickleball Court A',
      customerName: 'Lisa Wong',
      customerPhone: '+63 945 678 9012',
      date: '2024-11-11',
      time: '04:00 PM - 06:00 PM',
      duration: 2,
      amount: 1000,
      status: 'pending',
      paymentStatus: 'pending'
    },
    {
      id: 5,
      courtName: 'Court B - Volleyball',
      customerName: 'Maria Santos',
      customerPhone: '+63 956 789 0123',
      date: '2024-11-11',
      time: '06:00 PM - 08:00 PM',
      duration: 2,
      amount: 1200,
      status: 'confirmed',
      paymentStatus: 'paid'
    },
    {
      id: 6,
      courtName: 'Court A - Basketball',
      customerName: 'Pedro Reyes',
      customerPhone: '+63 967 890 1234',
      date: '2024-11-12',
      time: '09:00 AM - 11:00 AM',
      duration: 2,
      amount: 1600,
      status: 'pending',
      paymentStatus: 'pending'
    },
    {
      id: 7,
      courtName: 'Pickleball Court B',
      customerName: 'Tommy Lee',
      customerPhone: '+63 978 901 2345',
      date: '2024-11-12',
      time: '10:00 AM - 12:00 PM',
      duration: 2,
      amount: 900,
      status: 'confirmed',
      paymentStatus: 'paid'
    },
    {
      id: 8,
      courtName: 'Court C - Badminton',
      customerName: 'Ana Lopez',
      customerPhone: '+63 989 012 3456',
      date: '2024-11-12',
      time: '02:00 PM - 04:00 PM',
      duration: 2,
      amount: 800,
      status: 'confirmed',
      paymentStatus: 'paid'
    },
    {
      id: 9,
      courtName: 'Court B - Volleyball',
      customerName: 'Carlos Tan',
      customerPhone: '+63 990 123 4567',
      date: '2024-11-12',
      time: '03:00 PM - 05:00 PM',
      duration: 2,
      amount: 1200,
      status: 'cancelled',
      paymentStatus: 'refunded'
    },
    {
      id: 10,
      courtName: 'Pickleball Court A',
      customerName: 'James Park',
      customerPhone: '+63 901 234 5678',
      date: '2024-11-12',
      time: '05:00 PM - 07:00 PM',
      duration: 2,
      amount: 1000,
      status: 'confirmed',
      paymentStatus: 'paid'
    }
  ]

  const filters = [
    { id: 'all', label: 'All', count: bookings.length },
    { id: 'confirmed', label: 'Confirmed', count: bookings.filter(b => b.status === 'confirmed').length },
    { id: 'pending', label: 'Pending', count: bookings.filter(b => b.status === 'pending').length },
    { id: 'cancelled', label: 'Cancelled', count: bookings.filter(b => b.status === 'cancelled').length }
  ]

  const filteredBookings = filter === 'all' ? bookings : bookings.filter(b => b.status === filter)

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <div className="max-w-md mx-auto p-4 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-dark-text">Bookings</h1>
          <p className="text-sm text-dark-text-secondary mt-1">Manage all court reservations</p>
        </div>

        {/* Filters */}
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-colors ${
                filter === f.id
                  ? 'bg-red-600 text-white'
                  : 'bg-dark-bg-tertiary text-dark-text hover:bg-dark-bg'
              }`}
            >
              {f.label} ({f.count})
            </button>
          ))}
        </div>

        {/* Bookings List */}
        <div className="space-y-4">
          {filteredBookings.map((booking) => (
            <div key={booking.id} className="bg-dark-bg-tertiary rounded-xl p-4 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-bold text-dark-text">{booking.courtName}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      booking.status === 'confirmed'
                        ? 'bg-green-100 text-green-700'
                        : booking.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {booking.status === 'confirmed' && <IoCheckmarkCircle className="inline mr-1" />}
                      {booking.status === 'pending' && <IoTimePending className="inline mr-1" />}
                      {booking.status === 'cancelled' && <IoCloseCircle className="inline mr-1" />}
                      {booking.status}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      booking.paymentStatus === 'paid'
                        ? 'bg-green-100 text-green-700'
                        : booking.paymentStatus === 'pending'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-dark-bg-secondary text-dark-text'
                    }`}>
                      {booking.paymentStatus}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-dark-text">₱{booking.amount}</p>
                  <p className="text-xs text-dark-text-muted">{booking.duration} hours</p>
                </div>
              </div>

              <div className="space-y-2 py-3 border-t border-dark-border">
                <div className="flex items-center space-x-2 text-sm text-dark-text-secondary">
                  <IoPerson className="text-dark-text-muted" />
                  <span>{booking.customerName}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-dark-text-secondary">
                  <IoCalendar className="text-dark-text-muted" />
                  <span>{booking.date}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-dark-text-secondary">
                  <IoTime className="text-dark-text-muted" />
                  <span>{booking.time}</span>
                </div>
              </div>

              {booking.status === 'pending' && (
                <div className="flex space-x-2 mt-3 pt-3 border-t border-dark-border">
                  <button className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-lg py-2 font-semibold transition-colors flex items-center justify-center space-x-1">
                    <IoCheckmarkCircle />
                    <span>Approve</span>
                  </button>
                  <button className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-lg py-2 font-semibold transition-colors flex items-center justify-center space-x-1">
                    <IoCloseCircle />
                    <span>Decline</span>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CourtOwnerBookings
