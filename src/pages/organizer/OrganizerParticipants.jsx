import { useState } from 'react'
import {
  IoPeople,
  IoSearch,
  IoFilter,
  IoCheckmarkCircle,
  IoTime,
  IoTrophy,
  IoArrowForward,
  IoMail,
  IoCall
} from 'react-icons/io5'

const OrganizerParticipants = () => {
  const [filter, setFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const participants = [
    {
      id: 1,
      teamName: 'Dink Masters',
      captain: 'Juan Dela Cruz',
      email: 'juan@dinkmasters.com',
      phone: '+63 912 345 6789',
      tournament: 'Metro Manila Pickleball Open',
      registeredDate: '2 hours ago',
      status: 'confirmed',
      statusColor: 'bg-green-100 text-green-700',
      members: 2,
      amountPaid: 500
    },
    {
      id: 2,
      teamName: 'Smash Squad',
      captain: 'Maria Santos',
      email: 'maria@smashsquad.com',
      phone: '+63 912 345 6780',
      tournament: 'Summer Pickleball Doubles Cup',
      registeredDate: '5 hours ago',
      status: 'confirmed',
      statusColor: 'bg-green-100 text-green-700',
      members: 2,
      amountPaid: 500
    },
    {
      id: 3,
      teamName: 'Net Ninjas',
      captain: 'Pedro Garcia',
      email: 'pedro@netninjas.com',
      phone: '+63 912 345 6781',
      tournament: 'Corporate Pickleball Championship',
      registeredDate: '1 day ago',
      status: 'confirmed',
      statusColor: 'bg-green-100 text-green-700',
      members: 2,
      amountPaid: 500
    },
    {
      id: 4,
      teamName: 'Manila Picklers',
      captain: 'Ana Lopez',
      email: 'ana@manilapicklers.com',
      phone: '+63 912 345 6782',
      tournament: 'Metro Manila Pickleball Open',
      registeredDate: '2 days ago',
      status: 'pending',
      statusColor: 'bg-yellow-100 text-yellow-700',
      members: 2,
      amountPaid: 0
    },
    {
      id: 5,
      teamName: 'Volley Vipers',
      captain: 'Carlos Reyes',
      email: 'carlos@volleyvipers.com',
      phone: '+63 912 345 6783',
      tournament: 'Summer Pickleball Doubles Cup',
      registeredDate: '3 days ago',
      status: 'confirmed',
      statusColor: 'bg-green-100 text-green-700',
      members: 2,
      amountPaid: 500
    }
  ]

  const filters = [
    { id: 'all', label: 'All', count: participants.length },
    { id: 'confirmed', label: 'Confirmed', count: participants.filter(p => p.status === 'confirmed').length },
    { id: 'pending', label: 'Pending', count: participants.filter(p => p.status === 'pending').length }
  ]

  const filteredParticipants = participants.filter(p => {
    const matchesFilter = filter === 'all' || p.status === filter
    const matchesSearch = p.teamName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.captain.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.tournament.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <div className="max-w-md mx-auto p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-dark-text">Participants</h1>
        <span className="text-sm text-dark-text-secondary">{participants.length} Total</span>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-dark-bg-tertiary rounded-xl p-4 shadow-sm border border-dark-border text-center">
          <div className="text-2xl font-bold text-brand-primary">
            {participants.filter(p => p.status === 'confirmed').length}
          </div>
          <div className="text-xs text-dark-text-secondary mt-1">Confirmed</div>
        </div>
        <div className="bg-dark-bg-tertiary rounded-xl p-4 shadow-sm border border-dark-border text-center">
          <div className="text-2xl font-bold text-yellow-600">
            {participants.filter(p => p.status === 'pending').length}
          </div>
          <div className="text-xs text-dark-text-secondary mt-1">Pending</div>
        </div>
        <div className="bg-dark-bg-tertiary rounded-xl p-4 shadow-sm border border-dark-border text-center">
          <div className="text-2xl font-bold text-brand-primary">
            {participants.reduce((sum, p) => sum + p.members, 0)}
          </div>
          <div className="text-xs text-dark-text-secondary mt-1">Total Players</div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-text-muted" />
        <input
          type="text"
          placeholder="Search by team, captain, or tournament..."
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

      {/* Participants List */}
      <div className="space-y-3">
        {filteredParticipants.length === 0 ? (
          <div className="bg-dark-bg-tertiary rounded-xl shadow-sm p-8 text-center">
            <IoPeople className="text-5xl text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-dark-text mb-1">No participants found</h3>
            <p className="text-sm text-dark-text-secondary">Try adjusting your filters or search query</p>
          </div>
        ) : (
          filteredParticipants.map((participant) => (
            <div key={participant.id} className="bg-dark-bg-tertiary rounded-xl shadow-sm p-4 border border-dark-border">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${participant.statusColor}`}>
                      {participant.status.charAt(0).toUpperCase() + participant.status.slice(1)}
                    </span>
                    <span className="px-2 py-1 bg-dark-bg-secondary text-dark-text rounded text-xs font-medium">
                      {participant.members} members
                    </span>
                  </div>
                  <h3 className="font-semibold text-dark-text text-lg">{participant.teamName}</h3>
                  <p className="text-sm text-dark-text-secondary mt-1">Captain: {participant.captain}</p>

                  <div className="mt-2 space-y-1">
                    <div className="flex items-center text-xs text-dark-text-secondary">
                      <IoTrophy className="mr-1 text-brand-primary" />
                      <span>{participant.tournament}</span>
                    </div>
                    <div className="flex items-center text-xs text-dark-text-secondary">
                      <IoMail className="mr-1 text-brand-primary" />
                      <span>{participant.email}</span>
                    </div>
                    <div className="flex items-center text-xs text-dark-text-secondary">
                      <IoCall className="mr-1 text-brand-primary" />
                      <span>{participant.phone}</span>
                    </div>
                  </div>
                </div>
                <button className="text-brand-primary hover:bg-brand-primary/10 p-2 rounded-full">
                  <IoArrowForward />
                </button>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-dark-border">
                <div className="flex items-center text-xs text-dark-text-muted">
                  <IoTime className="mr-1" />
                  <span>Registered {participant.registeredDate}</span>
                </div>
                <div className="flex items-center space-x-2">
                  {participant.status === 'confirmed' ? (
                    <>
                      <IoCheckmarkCircle className="text-brand-primary" />
                      <span className="text-sm font-bold text-brand-primary">₱{participant.amountPaid}</span>
                    </>
                  ) : (
                    <span className="text-sm font-bold text-yellow-600">Payment Pending</span>
                  )}
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

export default OrganizerParticipants
