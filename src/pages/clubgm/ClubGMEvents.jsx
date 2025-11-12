import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  IoCalendar,
  IoSearch,
  IoAdd,
  IoTime,
  IoPeople,
  IoLocationSharp,
  IoCheckmarkCircle
} from 'react-icons/io5'
import Card from '../../components/Card'

const ClubGMEvents = () => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'ongoing', label: 'Ongoing' },
    { id: 'completed', label: 'Completed' }
  ]

  const events = [
    {
      id: 1,
      name: 'Weekly Pickleball Drills',
      type: 'Training',
      date: 'Nov 12, 2024',
      time: '6:00 PM - 8:00 PM',
      location: 'Main Court',
      participants: 24,
      maxParticipants: 30,
      status: 'upcoming',
      statusColor: 'bg-blue-100 text-blue-700'
    },
    {
      id: 2,
      name: 'Club Pickleball Championship',
      type: 'Tournament',
      date: 'Nov 15, 2024',
      time: '2:00 PM - 6:00 PM',
      location: 'Main Court',
      participants: 32,
      maxParticipants: 32,
      status: 'upcoming',
      statusColor: 'bg-blue-100 text-blue-700'
    },
    {
      id: 3,
      name: 'Youth Pickleball Development Camp',
      type: 'Camp',
      date: 'Nov 18-20, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'Training Facility',
      participants: 18,
      maxParticipants: 25,
      status: 'upcoming',
      statusColor: 'bg-blue-100 text-blue-700'
    },
    {
      id: 4,
      name: 'Advanced Training Sessions',
      type: 'Training',
      date: 'Nov 10, 2024',
      time: '4:00 PM - 7:00 PM',
      location: 'Court 1',
      participants: 15,
      maxParticipants: 20,
      status: 'ongoing',
      statusColor: 'bg-green-100 text-green-700'
    },
    {
      id: 5,
      name: 'Pickleball Socials',
      type: 'Social',
      date: 'Oct 28, 2024',
      time: '1:00 PM - 6:00 PM',
      location: 'Main Court',
      participants: 28,
      maxParticipants: 28,
      status: 'completed',
      statusColor: 'bg-dark-bg-secondary text-dark-text'
    }
  ]

  const filteredEvents = events.filter(event => {
    const matchesFilter = activeFilter === 'all' || event.status === activeFilter
    const matchesSearch = event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.type.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <div className="max-w-lg mx-auto p-4 space-y-4">
      {/* Header with Add Button */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-dark-text">Events</h1>
        <button
          onClick={() => navigate('/clubgm/events/create')}
          className="bg-orange-600 hover:bg-orange-700 text-white rounded-lg px-4 py-2 font-semibold transition-colors flex items-center space-x-2"
        >
          <IoAdd className="text-xl" />
          <span>Create Event</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-text-muted text-xl" />
        <input
          type="text"
          placeholder="Search events..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-colors ${
              activeFilter === filter.id
                ? 'bg-orange-600 text-white'
                : 'bg-dark-bg-tertiary text-dark-text border border-dark-border hover:border-orange-600'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Events List */}
      <div className="space-y-3">
        {filteredEvents.map((event) => (
          <Card key={event.id} padding="p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${event.statusColor}`}>
                    {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                  </span>
                  <span className="px-2 py-1 bg-dark-bg-secondary text-dark-text rounded text-xs font-medium">
                    {event.type}
                  </span>
                </div>
                <h3 className="font-semibold text-dark-text text-lg mb-2">{event.name}</h3>

                <div className="space-y-1 text-sm text-dark-text-secondary">
                  <div className="flex items-center">
                    <IoCalendar className="mr-2 text-brand-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <IoTime className="mr-2 text-brand-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <IoLocationSharp className="mr-2 text-brand-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-dark-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-dark-text-secondary">
                  <IoPeople className="mr-2 text-brand-primary" />
                  <span className="font-medium">
                    {event.participants} / {event.maxParticipants} participants
                  </span>
                </div>
                {event.participants === event.maxParticipants && (
                  <span className="text-xs font-medium text-brand-primary">FULL</span>
                )}
              </div>
              <div className="mt-2 w-full bg-dark-bg-hover rounded-full h-2">
                <div
                  className="bg-orange-600 h-2 rounded-full transition-all"
                  style={{ width: `${(event.participants / event.maxParticipants) * 100}%` }}
                ></div>
              </div>
            </div>
          </Card>
        ))}

        {filteredEvents.length === 0 && (
          <Card padding="p-8" className="text-center">
            <IoCalendar className="text-5xl text-gray-300 mx-auto mb-3" />
            <p className="text-dark-text-muted">No events found</p>
          </Card>
        )}
        </div>
      </div>
    </div>
  )
}

export default ClubGMEvents
