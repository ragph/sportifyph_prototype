import { useState } from 'react'
import { IoPerson, IoStar, IoCalendar, IoTrendingUp, IoSearch, IoArrowForward } from 'react-icons/io5'

const CoachStudents = () => {
  const students = [
    {
      id: 1,
      name: 'Juan Dela Cruz',
      sessions: 12,
      progress: 'Excellent',
      lastSession: '2 days ago',
      rating: 5.0,
      totalSpent: 6000,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      name: 'Maria Santos',
      sessions: 8,
      progress: 'Good',
      lastSession: '1 day ago',
      rating: 4.8,
      totalSpent: 4000,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
    {
      id: 3,
      name: 'Pedro Garcia',
      sessions: 5,
      progress: 'Improving',
      lastSession: 'Today',
      rating: 4.5,
      totalSpent: 2500,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
    },
    {
      id: 4,
      name: 'Ana Lopez',
      sessions: 15,
      progress: 'Excellent',
      lastSession: '3 days ago',
      rating: 5.0,
      totalSpent: 7500,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
    }
  ]

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <div className="max-w-lg mx-auto p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-dark-text">My Students</h1>
        <span className="text-sm text-dark-text-secondary">{students.length} Active</span>
      </div>

      {/* Search */}
      <div className="relative">
        <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-text-muted" />
        <input
          type="text"
          placeholder="Search students..."
          className="w-full pl-10 pr-4 py-3 border border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Students List */}
      <div className="space-y-3">
        {students.map((student) => (
          <div key={student.id} className="bg-dark-bg-tertiary rounded-xl shadow-sm p-4 border border-dark-border">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <img
                  src={student.avatar}
                  alt={student.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-dark-text">{student.name}</h3>
                  <div className="flex items-center text-xs text-dark-text-secondary mt-1">
                    <IoStar className="text-yellow-500 mr-1" />
                    <span>{student.rating} rating</span>
                  </div>
                </div>
              </div>
              <IoArrowForward className="text-dark-text-muted" />
            </div>
            <div className="grid grid-cols-3 gap-3 text-center pt-3 border-t border-dark-border">
              <div>
                <div className="text-lg font-bold text-brand-primary">{student.sessions}</div>
                <div className="text-xs text-dark-text-secondary">Sessions</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-dark-text">{student.progress}</div>
                <div className="text-xs text-dark-text-secondary">Progress</div>
              </div>
              <div>
                <div className="text-lg font-bold text-brand-primary">₱{student.totalSpent.toLocaleString()}</div>
                <div className="text-xs text-dark-text-secondary">Total</div>
              </div>
            </div>
            <div className="mt-3 text-xs text-dark-text-muted flex items-center">
              <IoCalendar className="mr-1" />
              Last session: {student.lastSession}
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default CoachStudents
