import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  IoCalendar,
  IoTime,
  IoPeople,
  IoCash,
  IoCheckmarkCircle,
  IoAdd,
  IoChevronBack,
  IoChevronForward,
  IoLocationOutline
} from 'react-icons/io5'

const CoachSchedule = () => {
  const navigate = useNavigate()
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  // Mock schedule data
  const scheduleData = [
    {
      id: 1,
      date: '2024-11-10',
      student: 'Juan Dela Cruz',
      type: 'Individual',
      time: '2:00 PM - 3:00 PM',
      duration: '1 hour',
      location: 'Court 1',
      status: 'confirmed',
      payment: 500,
      studentAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      date: '2024-11-10',
      student: 'Maria Santos',
      type: 'Group',
      time: '4:00 PM - 5:30 PM',
      duration: '1.5 hours',
      location: 'Court 2',
      status: 'confirmed',
      payment: 750,
      studentAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
    {
      id: 3,
      date: '2024-11-11',
      student: 'Pedro Garcia',
      type: 'Individual',
      time: '10:00 AM - 11:00 AM',
      duration: '1 hour',
      location: 'Court 1',
      status: 'pending',
      payment: 500,
      studentAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
    },
    {
      id: 4,
      date: '2024-11-12',
      student: 'Ana Lopez',
      type: 'Individual',
      time: '3:00 PM - 4:00 PM',
      duration: '1 hour',
      location: 'Court 3',
      status: 'confirmed',
      payment: 500,
      studentAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
    },
    {
      id: 5,
      date: '2024-11-13',
      student: 'Carlos Reyes & 2 others',
      type: 'Group',
      time: '9:00 AM - 10:30 AM',
      duration: '1.5 hours',
      location: 'Court 2',
      status: 'confirmed',
      payment: 750,
      studentAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    }
  ]

  // Get days in month
  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []

    // Add empty slots for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    // Add all days in month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i))
    }

    return days
  }

  const days = getDaysInMonth(currentDate)
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const changeMonth = (direction) => {
    const newDate = new Date(currentDate)
    newDate.setMonth(currentDate.getMonth() + direction)
    setCurrentDate(newDate)
  }

  const formatDateKey = (date) => {
    if (!date) return ''
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  const isToday = (date) => {
    if (!date) return false
    const today = new Date()
    return date.toDateString() === today.toDateString()
  }

  const isSelected = (date) => {
    if (!date) return false
    return date.toDateString() === selectedDate.toDateString()
  }

  const hasEvents = (date) => {
    if (!date) return false
    const dateKey = formatDateKey(date)
    return scheduleData.some(event => event.date === dateKey)
  }

  const getEventsForDate = (date) => {
    const dateKey = formatDateKey(date)
    return scheduleData.filter(event => event.date === dateKey)
  }

  const selectedDateEvents = getEventsForDate(selectedDate)

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <div className="max-w-lg mx-auto p-4 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-dark-text">Schedule</h1>
          <button
            onClick={() => navigate('/coach/sessions/create')}
            className="bg-green-600 hover:bg-green-700 text-white rounded-lg px-4 py-2 font-semibold transition-colors flex items-center space-x-2"
          >
            <IoAdd className="text-xl" />
            <span>Add</span>
          </button>
        </div>

        {/* Calendar */}
        <div className="bg-dark-bg-tertiary rounded-xl shadow-sm border border-dark-border p-4">
          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => changeMonth(-1)}
              className="p-2 hover:bg-dark-bg-secondary rounded-full transition-colors"
            >
              <IoChevronBack className="text-xl text-dark-text-secondary" />
            </button>
            <h2 className="text-lg font-bold text-dark-text">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>
            <button
              onClick={() => changeMonth(1)}
              className="p-2 hover:bg-dark-bg-secondary rounded-full transition-colors"
            >
              <IoChevronForward className="text-xl text-dark-text-secondary" />
            </button>
          </div>

          {/* Day Names */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {dayNames.map((day) => (
              <div key={day} className="text-center text-xs font-semibold text-dark-text-secondary py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-1">
            {days.map((date, index) => {
              if (!date) {
                return <div key={`empty-${index}`} className="aspect-square" />
              }

              const today = isToday(date)
              const selected = isSelected(date)
              const hasEvent = hasEvents(date)

              return (
                <button
                  key={index}
                  onClick={() => setSelectedDate(date)}
                  className={`aspect-square rounded-lg flex flex-col items-center justify-center text-sm transition-all relative ${
                    selected
                      ? 'bg-green-600 text-white font-bold'
                      : today
                      ? 'bg-brand-primary/10 text-brand-primary font-semibold border-2 border-green-600'
                      : 'hover:bg-dark-bg-secondary text-dark-text'
                  }`}
                >
                  <span>{date.getDate()}</span>
                  {hasEvent && (
                    <div className={`w-1 h-1 rounded-full mt-1 ${
                      selected ? 'bg-dark-bg-tertiary' : 'bg-green-600'
                    }`} />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Selected Date Sessions */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-dark-text">
              {selectedDate.toDateString() === new Date().toDateString()
                ? "Today's Sessions"
                : `Sessions on ${selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`}
            </h2>
            <span className="text-sm text-dark-text-secondary">
              {selectedDateEvents.length} {selectedDateEvents.length === 1 ? 'session' : 'sessions'}
            </span>
          </div>

          {selectedDateEvents.length > 0 ? (
            <div className="space-y-3">
              {selectedDateEvents.map((session) => (
                <div
                  key={session.id}
                  className="bg-dark-bg-tertiary rounded-xl shadow-sm p-4 border border-dark-border hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start space-x-3 flex-1">
                      <img
                        src={session.studentAvatar}
                        alt={session.student}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            session.status === 'confirmed'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {session.status === 'confirmed' ? (
                              <><IoCheckmarkCircle className="inline mr-1" />Confirmed</>
                            ) : (
                              'Pending'
                            )}
                          </span>
                          <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">
                            {session.type}
                          </span>
                        </div>
                        <h3 className="font-semibold text-dark-text">{session.student}</h3>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-brand-primary">₱{session.payment}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm text-dark-text-secondary">
                    <div className="flex items-center">
                      <IoTime className="mr-2 text-brand-primary" />
                      <span>{session.time}</span>
                    </div>
                    <div className="flex items-center">
                      <IoLocationOutline className="mr-2 text-brand-primary" />
                      <span>{session.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-dark-bg-tertiary rounded-xl shadow-sm p-8 border border-dark-border text-center">
              <IoCalendar className="text-5xl text-gray-300 mx-auto mb-3" />
              <p className="text-dark-text-muted mb-4">No sessions scheduled for this date</p>
              <button
                onClick={() => navigate('/coach/sessions/create')}
                className="bg-green-600 hover:bg-green-700 text-white rounded-lg px-6 py-2 font-semibold transition-colors inline-flex items-center space-x-2"
              >
                <IoAdd className="text-xl" />
                <span>Schedule a Session</span>
              </button>
            </div>
          )}
        </div>

        {/* Week Summary */}
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg p-6 text-white">
          <h3 className="text-lg font-semibold mb-4">This Week</h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-2xl font-bold">{scheduleData.length}</div>
              <div className="text-xs opacity-90">Total Sessions</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{scheduleData.filter(s => s.status === 'confirmed').length}</div>
              <div className="text-xs opacity-90">Confirmed</div>
            </div>
            <div>
              <div className="text-2xl font-bold">
                ₱{scheduleData.reduce((sum, s) => sum + s.payment, 0).toLocaleString()}
              </div>
              <div className="text-xs opacity-90">Expected</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoachSchedule
