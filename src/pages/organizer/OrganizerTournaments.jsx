import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  IoTrophy,
  IoPeople,
  IoCalendar,
  IoCash,
  IoAdd,
  IoFilter,
  IoSearch,
  IoLocationSharp,
  IoArrowForward
} from 'react-icons/io5'

const OrganizerTournaments = () => {
  const navigate = useNavigate()
  const [filter, setFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const tournaments = [
    {
      id: 1,
      name: 'Metro Manila Pickleball Open',
      sport: 'Pickleball',
      participants: 128,
      maxParticipants: 128,
      startDate: 'Nov 15, 2024',
      endDate: 'Dec 15, 2024',
      location: 'Makati Sports Complex',
      status: 'registration',
      statusColor: 'bg-green-100 text-green-700',
      statusLabel: 'Registration Open',
      entryFee: 500,
      prizePool: 50000,
      revenue: 64000
    },
    {
      id: 2,
      name: 'Summer Pickleball Doubles Cup',
      sport: 'Pickleball',
      participants: 64,
      maxParticipants: 96,
      startDate: 'Nov 20, 2024',
      endDate: 'Dec 10, 2024',
      location: 'Quezon City Sports Arena',
      status: 'upcoming',
      statusColor: 'bg-blue-100 text-blue-700',
      statusLabel: 'Upcoming',
      entryFee: 500,
      prizePool: 30000,
      revenue: 32000
    },
    {
      id: 3,
      name: 'Corporate Pickleball Championship',
      sport: 'Pickleball',
      participants: 56,
      maxParticipants: 64,
      startDate: 'Nov 12, 2024',
      endDate: 'Nov 30, 2024',
      location: 'BGC Sports Field',
      status: 'ongoing',
      statusColor: 'bg-purple-100 text-purple-700',
      statusLabel: 'Ongoing',
      entryFee: 500,
      prizePool: 25000,
      revenue: 28000
    },
    {
      id: 4,
      name: 'Manila Pickleball Masters',
      sport: 'Pickleball',
      participants: 96,
      maxParticipants: 96,
      startDate: 'Oct 20, 2024',
      endDate: 'Nov 10, 2024',
      location: 'Manila Sports Center',
      status: 'completed',
      statusColor: 'bg-dark-bg-secondary text-dark-text',
      statusLabel: 'Completed',
      entryFee: 500,
      prizePool: 40000,
      revenue: 48000
    }
  ]

  const filters = [
    { id: 'all', label: 'All', count: tournaments.length },
    { id: 'registration', label: 'Registration', count: tournaments.filter(t => t.status === 'registration').length },
    { id: 'upcoming', label: 'Upcoming', count: tournaments.filter(t => t.status === 'upcoming').length },
    { id: 'ongoing', label: 'Ongoing', count: tournaments.filter(t => t.status === 'ongoing').length },
    { id: 'completed', label: 'Completed', count: tournaments.filter(t => t.status === 'completed').length }
  ]

  const filteredTournaments = tournaments.filter(t => {
    const matchesFilter = filter === 'all' || t.status === filter
    const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         t.sport.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <div className="max-w-lg mx-auto p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-dark-text">Tournaments</h1>
        <button
          onClick={() => navigate('/organizer/tournaments/create')}
          className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg px-4 py-2 font-semibold transition-colors flex items-center space-x-2"
        >
          <IoAdd className="text-xl" />
          <span>Add Tournament</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-text-muted" />
        <input
          type="text"
          placeholder="Search tournaments..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-colors ${
              filter === f.id
                ? 'bg-purple-600 text-white'
                : 'bg-dark-bg-tertiary text-dark-text border border-dark-border hover:border-purple-600'
            }`}
          >
            {f.label} ({f.count})
          </button>
        ))}
      </div>

      {/* Tournaments List */}
      <div className="space-y-3">
        {filteredTournaments.length === 0 ? (
          <div className="bg-dark-bg-tertiary rounded-xl shadow-sm p-8 text-center">
            <IoTrophy className="text-5xl text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-dark-text mb-1">No tournaments found</h3>
            <p className="text-sm text-dark-text-secondary">Try adjusting your filters or create a new tournament</p>
          </div>
        ) : (
          filteredTournaments.map((tournament) => (
            <div key={tournament.id} className="bg-dark-bg-tertiary rounded-xl shadow-sm p-4 border border-dark-border">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${tournament.statusColor}`}>
                      {tournament.statusLabel}
                    </span>
                    <span className="px-2 py-1 bg-dark-bg-secondary text-dark-text rounded text-xs font-medium">
                      {tournament.sport}
                    </span>
                  </div>
                  <h3 className="font-semibold text-dark-text mb-2">{tournament.name}</h3>
                  <div className="space-y-1 text-xs text-dark-text-secondary">
                    <div className="flex items-center">
                      <IoPeople className="mr-1" />
                      <span>{tournament.participants}/{tournament.maxParticipants} participants</span>
                    </div>
                    <div className="flex items-center">
                      <IoCalendar className="mr-1" />
                      <span>{tournament.startDate} - {tournament.endDate}</span>
                    </div>
                    <div className="flex items-center">
                      <IoLocationSharp className="mr-1" />
                      <span>{tournament.location}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => navigate(`/organizer/tournaments/${tournament.id}`)}
                  className="text-brand-primary hover:bg-brand-primary/10 p-2 rounded-full"
                >
                  <IoArrowForward />
                </button>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-dark-border">
                <div className="text-center">
                  <div className="text-xs text-dark-text-secondary">Entry Fee</div>
                  <div className="text-sm font-bold text-brand-primary">₱{tournament.entryFee}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-dark-text-secondary">Prize Pool</div>
                  <div className="text-sm font-bold text-brand-primary">₱{tournament.prizePool.toLocaleString()}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-dark-text-secondary">Revenue</div>
                  <div className="text-sm font-bold text-brand-primary">₱{tournament.revenue.toLocaleString()}</div>
                </div>
              </div>
            </div>
          ))
        )}
        </div>
      </div>
    </div>
  )
}

export default OrganizerTournaments
