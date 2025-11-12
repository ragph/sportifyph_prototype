import { useState } from 'react'
import { IoAddCircle, IoStorefront, IoTime, IoCash, IoEllipsisVertical, IoCreate, IoTrash, IoCheckmarkCircle, IoCloseCircle } from 'react-icons/io5'

const CourtOwnerCourts = () => {
  const [filter, setFilter] = useState('all')

  const courts = [
    {
      id: 1,
      name: 'Pickleball Court A',
      type: 'Pickleball',
      hourlyRate: 500,
      status: 'available',
      bookingsToday: 6,
      image: '🎾'
    },
    {
      id: 2,
      name: 'Pickleball Court B',
      type: 'Pickleball',
      hourlyRate: 450,
      status: 'occupied',
      bookingsToday: 7,
      image: '🎾'
    },
    {
      id: 3,
      name: 'Court A',
      type: 'Basketball',
      hourlyRate: 800,
      status: 'available',
      bookingsToday: 5,
      image: '🏀'
    },
    {
      id: 4,
      name: 'Court B',
      type: 'Volleyball',
      hourlyRate: 600,
      status: 'available',
      bookingsToday: 3,
      image: '🏐'
    },
    {
      id: 5,
      name: 'Court C',
      type: 'Badminton',
      hourlyRate: 400,
      status: 'available',
      bookingsToday: 4,
      image: '🏸'
    },
    {
      id: 6,
      name: 'Court D',
      type: 'Tennis',
      hourlyRate: 700,
      status: 'maintenance',
      bookingsToday: 0,
      image: '🎾'
    }
  ]

  const filters = [
    { id: 'all', label: 'All', count: courts.length },
    { id: 'available', label: 'Available', count: courts.filter(c => c.status === 'available').length },
    { id: 'occupied', label: 'Occupied', count: courts.filter(c => c.status === 'occupied').length },
    { id: 'maintenance', label: 'Maintenance', count: courts.filter(c => c.status === 'maintenance').length }
  ]

  const filteredCourts = filter === 'all' ? courts : courts.filter(c => c.status === filter)

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <div className="max-w-lg mx-auto p-4 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-dark-text">My Courts</h1>
          <button className="bg-red-600 hover:bg-red-700 text-white rounded-lg px-4 py-2 font-semibold transition-colors flex items-center space-x-2">
            <IoAddCircle className="text-xl" />
            <span>Add Court</span>
          </button>
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

        {/* Courts List */}
        <div className="space-y-4">
          {filteredCourts.map((court) => (
            <div key={court.id} className="bg-dark-bg-tertiary rounded-xl p-4 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg flex items-center justify-center text-3xl">
                    {court.image}
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-text">{court.name}</h3>
                    <p className="text-sm text-dark-text-secondary">{court.type}</p>
                    <span className={`inline-flex items-center space-x-1 text-xs px-2 py-1 rounded-full mt-1 ${
                      court.status === 'available'
                        ? 'bg-green-100 text-green-700'
                        : court.status === 'occupied'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-orange-100 text-orange-700'
                    }`}>
                      {court.status === 'available' && <IoCheckmarkCircle />}
                      {court.status === 'occupied' && <IoTime />}
                      {court.status === 'maintenance' && <IoCloseCircle />}
                      <span className="capitalize">{court.status}</span>
                    </span>
                  </div>
                </div>
                <button className="p-2 hover:bg-dark-bg-secondary rounded-lg transition-colors">
                  <IoEllipsisVertical className="text-dark-text-secondary" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-dark-border">
                <div className="flex items-center space-x-2">
                  <IoCash className="text-brand-primary" />
                  <div>
                    <p className="text-xs text-dark-text-muted">Hourly Rate</p>
                    <p className="text-sm font-semibold text-dark-text">₱{court.hourlyRate}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <IoTime className="text-brand-primary" />
                  <div>
                    <p className="text-xs text-dark-text-muted">Today's Bookings</p>
                    <p className="text-sm font-semibold text-dark-text">{court.bookingsToday}</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-2 mt-3">
                <button className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-lg py-2 font-semibold transition-colors flex items-center justify-center space-x-1">
                  <IoCreate />
                  <span>Edit</span>
                </button>
                <button className="flex-1 bg-dark-bg-secondary hover:bg-dark-bg-hover text-dark-text rounded-lg py-2 font-semibold transition-colors flex items-center justify-center space-x-1">
                  <IoStorefront />
                  <span>View Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CourtOwnerCourts
