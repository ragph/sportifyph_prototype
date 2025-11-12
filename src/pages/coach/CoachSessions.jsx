import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoCalendar, IoTime, IoPeople, IoCash, IoCheckmarkCircle, IoClose, IoAdd, IoFilter } from 'react-icons/io5'

const CoachSessions = () => {
  const navigate = useNavigate()
  const [filter, setFilter] = useState('all')

  const sessions = [
    {
      id: 1,
      student: 'Juan Dela Cruz',
      type: 'Individual',
      date: 'Nov 10, 2024',
      time: '2:00 PM',
      duration: '1 hour',
      status: 'upcoming',
      payment: 500,
      paid: true
    },
    {
      id: 2,
      student: 'Maria Santos & 3 others',
      type: 'Group',
      date: 'Nov 10, 2024',
      time: '4:00 PM',
      duration: '1.5 hours',
      status: 'upcoming',
      payment: 750,
      paid: true
    },
    {
      id: 3,
      student: 'Pedro Garcia',
      type: 'Individual',
      date: 'Nov 9, 2024',
      time: '6:00 PM',
      duration: '1 hour',
      status: 'completed',
      payment: 500,
      paid: true
    },
    {
      id: 4,
      student: 'Ana Lopez',
      type: 'Individual',
      date: 'Nov 9, 2024',
      time: '4:00 PM',
      duration: '1 hour',
      status: 'completed',
      payment: 500,
      paid: true
    },
    {
      id: 5,
      student: 'Carlos Reyes',
      type: 'Individual',
      date: 'Nov 11, 2024',
      time: '10:00 AM',
      duration: '1 hour',
      status: 'pending',
      payment: 500,
      paid: false
    }
  ]

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'completed', label: 'Completed' },
    { id: 'pending', label: 'Pending' }
  ]

  const filteredSessions = filter === 'all' ? sessions : sessions.filter(s => s.status === filter)

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <div className="max-w-lg mx-auto p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-dark-text">Training Sessions</h1>
        <button
          onClick={() => navigate('/coach/sessions/create')}
          className="bg-green-600 hover:bg-green-700 text-white rounded-lg px-4 py-2 font-semibold transition-colors flex items-center space-x-2"
        >
          <IoAdd className="text-xl" />
          <span>Add</span>
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
                ? 'bg-green-600 text-white'
                : 'bg-dark-bg-tertiary text-dark-text border border-dark-border hover:border-green-600'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Sessions List */}
      <div className="space-y-3">
        {filteredSessions.map((session) => (
          <div key={session.id} className="bg-dark-bg-tertiary rounded-xl shadow-sm p-4 border border-dark-border">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    session.status === 'upcoming'
                      ? 'bg-brand-primary text-white'
                      : session.status === 'completed'
                      ? 'bg-green-500 text-white'
                      : 'bg-yellow-400 text-slate-950'
                  }`}>
                    {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
                  </span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">
                    {session.type}
                  </span>
                  {session.paid && (
                    <IoCheckmarkCircle className="text-brand-primary" />
                  )}
                </div>
                <h3 className="font-semibold text-dark-text">{session.student}</h3>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-brand-primary">₱{session.payment}</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 text-sm text-dark-text-secondary">
              <div className="flex items-center">
                <IoCalendar className="mr-1" />
                <span>{session.date}</span>
              </div>
              <div className="flex items-center">
                <IoTime className="mr-1" />
                <span>{session.time}</span>
              </div>
              <div className="flex items-center">
                <IoCash className="mr-1" />
                <span>{session.duration}</span>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default CoachSessions
