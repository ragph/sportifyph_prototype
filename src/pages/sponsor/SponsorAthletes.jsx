import { useState } from 'react'
import { IoSearch, IoPerson, IoFootball, IoTrophy, IoStar, IoLocationSharp, IoMail, IoPeople } from 'react-icons/io5'
import Card from '../../components/Card'
import StatusBadge from '../../components/StatusBadge'

const SponsorAthletes = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filter, setFilter] = useState('all')

  const athletes = [
    {
      id: 1,
      name: 'Dink Masters',
      sport: 'Pickleball',
      members: 18,
      location: 'Manila',
      rating: 4.9,
      achievements: 14,
      followers: 2800,
      type: 'team',
      image: '🏓'
    },
    {
      id: 2,
      name: 'Coach Mike Santos',
      sport: 'Pickleball',
      position: 'Coach / Player',
      location: 'Quezon City',
      rating: 4.8,
      achievements: 16,
      followers: 3500,
      type: 'player',
      image: '🎾'
    },
    {
      id: 3,
      name: 'Smash Squad',
      sport: 'Pickleball',
      members: 12,
      location: 'Makati',
      rating: 4.7,
      achievements: 11,
      followers: 2200,
      type: 'team',
      image: '⚡'
    },
    {
      id: 4,
      name: 'Net Ninjas',
      sport: 'Pickleball',
      members: 15,
      location: 'Taguig',
      rating: 4.6,
      achievements: 9,
      followers: 1900,
      type: 'team',
      image: '🥷'
    },
    {
      id: 5,
      name: 'Manila Picklers',
      sport: 'Pickleball',
      members: 20,
      location: 'Manila',
      rating: 4.8,
      achievements: 12,
      followers: 2600,
      type: 'team',
      image: '🔥'
    },
    {
      id: 6,
      name: 'Juan Dela Cruz',
      sport: 'Basketball',
      position: 'Point Guard',
      location: 'Manila',
      rating: 4.8,
      achievements: 12,
      followers: 2400,
      type: 'player',
      image: '🏀'
    },
    {
      id: 7,
      name: 'Manila Spartans',
      sport: 'Basketball',
      members: 15,
      location: 'Manila',
      rating: 4.6,
      achievements: 8,
      followers: 1800,
      type: 'team',
      image: '🏀'
    },
    {
      id: 8,
      name: 'Maria Santos',
      sport: 'Volleyball',
      position: 'Libero',
      location: 'Quezon City',
      rating: 4.9,
      achievements: 15,
      followers: 3200,
      type: 'player',
      image: '🏐'
    },
    {
      id: 9,
      name: 'QC Volleyball Club',
      sport: 'Volleyball',
      members: 20,
      location: 'Quezon City',
      rating: 4.7,
      achievements: 10,
      followers: 2100,
      type: 'team',
      image: '🏐'
    },
    {
      id: 10,
      name: 'Pedro Reyes',
      sport: 'Badminton',
      position: 'Singles',
      location: 'Makati',
      rating: 4.5,
      achievements: 7,
      followers: 1500,
      type: 'player',
      image: '🏸'
    },
    {
      id: 11,
      name: 'Makati Badminton Academy',
      sport: 'Badminton',
      members: 12,
      location: 'Makati',
      rating: 4.8,
      achievements: 9,
      followers: 1900,
      type: 'team',
      image: '🏸'
    },
    {
      id: 12,
      name: 'Sofia Martinez',
      sport: 'Tennis',
      position: 'Singles',
      location: 'Pasig',
      rating: 4.7,
      achievements: 10,
      followers: 2000,
      type: 'player',
      image: '🎾'
    }
  ]

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'player', label: 'Players' },
    { id: 'team', label: 'Teams' }
  ]

  const filteredAthletes = athletes.filter(athlete => {
    const matchesSearch = athlete.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         athlete.sport.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = filter === 'all' || athlete.type === filter
    return matchesSearch && matchesFilter
  })

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <div className="max-w-lg mx-auto p-4 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-dark-text">Find Athletes & Teams</h1>
          <p className="text-sm text-dark-text-secondary mt-1">Discover talented athletes and teams to sponsor</p>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-text-muted text-xl" />
          <input
            type="text"
            placeholder="Search athletes, teams, or sports..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Filters */}
        <div className="flex space-x-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                filter === f.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-dark-bg-tertiary text-dark-text hover:bg-dark-bg'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Athletes List */}
        <div className="space-y-4">
          {filteredAthletes.map((athlete) => (
            <Card key={athlete.id} padding="p-4">
              <div className="flex items-start space-x-3 mb-3">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
                  {athlete.image}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-dark-text text-sm">{athlete.name}</h3>
                      <p className="text-xs text-dark-text-secondary">
                        {athlete.sport}
                        {athlete.type === 'player' && athlete.position && ` • ${athlete.position}`}
                        {athlete.type === 'team' && ` • ${athlete.members} members`}
                      </p>
                      <div className="flex items-center space-x-3 mt-1">
                        <div className="flex items-center space-x-1">
                          <IoStar className="text-brand-primary text-xs" />
                          <span className="text-xs font-semibold text-dark-text">{athlete.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <IoLocationSharp className="text-dark-text-muted text-xs" />
                          <span className="text-xs text-dark-text-muted">{athlete.location}</span>
                        </div>
                      </div>
                    </div>
                    <StatusBadge
                      variant={athlete.type === 'player' ? 'info' : 'purple'}
                      size="md"
                      rounded="full"
                    >
                      {athlete.type === 'player' ? <IoPerson className="inline mr-1" /> : <IoPeople className="inline mr-1" />}
                      {athlete.type === 'player' ? 'Player' : 'Team'}
                    </StatusBadge>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 py-3 border-t border-dark-border">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <IoTrophy className="text-brand-primary text-sm" />
                    <p className="text-sm font-bold text-dark-text">{athlete.achievements}</p>
                  </div>
                  <p className="text-xs text-dark-text-muted">Achievements</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <IoPeople className="text-brand-primary text-sm" />
                    <p className="text-sm font-bold text-dark-text">{athlete.followers.toLocaleString()}</p>
                  </div>
                  <p className="text-xs text-dark-text-muted">Followers</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <IoStar className="text-brand-primary text-sm" />
                    <p className="text-sm font-bold text-dark-text">{athlete.rating}</p>
                  </div>
                  <p className="text-xs text-dark-text-muted">Rating</p>
                </div>
              </div>

              <div className="flex space-x-2 mt-3 pt-3 border-t border-dark-border">
                <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg py-2 font-semibold transition-colors flex items-center justify-center space-x-1 text-sm">
                  <IoMail />
                  <span>Contact</span>
                </button>
                <button className="flex-1 bg-dark-bg-secondary hover:bg-dark-bg-hover text-dark-text rounded-lg py-2 font-semibold transition-colors flex items-center justify-center space-x-1 text-sm">
                  <IoPerson />
                  <span>View Profile</span>
                </button>
              </div>
            </Card>
          ))}
        </div>

        {filteredAthletes.length === 0 && (
          <div className="text-center py-12">
            <IoFootball className="text-6xl text-gray-300 mx-auto mb-4" />
            <p className="text-dark-text-muted">No athletes or teams found</p>
            <p className="text-sm text-dark-text-muted mt-1">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SponsorAthletes
