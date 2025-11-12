import { useState } from 'react'

const PlayerHistory = () => {
  const [filter, setFilter] = useState('all')

  const history = [
    {
      id: 1,
      type: 'tournament',
      title: 'Summer Hoops Festival',
      date: 'Oct 28, 2024',
      result: '2nd Place',
      icon: '🥈',
      color: 'from-gray-400 to-gray-500'
    },
    {
      id: 2,
      type: 'game',
      title: 'vs Thunder Squad',
      date: 'Oct 25, 2024',
      result: 'Win 78-65',
      icon: '✅',
      color: 'from-green-400 to-green-500'
    },
    {
      id: 3,
      type: 'training',
      title: 'Training Session with Coach Mike',
      date: 'Oct 22, 2024',
      result: 'Completed',
      icon: '🎯',
      color: 'from-blue-400 to-blue-500'
    },
    {
      id: 4,
      type: 'game',
      title: 'vs Flash Five',
      date: 'Oct 20, 2024',
      result: 'Loss 82-88',
      icon: '❌',
      color: 'from-red-400 to-red-500'
    },
    {
      id: 5,
      type: 'club',
      title: 'Joined Davao Hoops Squad',
      date: 'Oct 15, 2024',
      result: 'Club Joined',
      icon: '👥',
      color: 'from-purple-400 to-purple-500'
    },
    {
      id: 6,
      type: 'tournament',
      title: 'Street Ball Challenge',
      date: 'Oct 15, 2024',
      result: '1st Place',
      icon: '🥇',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      id: 7,
      type: 'achievement',
      title: 'Unlocked "Triple Double Master"',
      date: 'Oct 10, 2024',
      result: 'Achievement Earned',
      icon: '🏆',
      color: 'from-orange-400 to-orange-500'
    },
    {
      id: 8,
      type: 'game',
      title: 'vs Phoenix Rising',
      date: 'Oct 8, 2024',
      result: 'Win 91-76',
      icon: '✅',
      color: 'from-green-400 to-green-500'
    }
  ]

  const filters = [
    { id: 'all', label: 'All', icon: '📋' },
    { id: 'tournament', label: 'Tournaments', icon: '🏆' },
    { id: 'game', label: 'Games', icon: '🏀' },
    { id: 'training', label: 'Training', icon: '🎯' },
    { id: 'club', label: 'Clubs', icon: '👥' }
  ]

  const filteredHistory = filter === 'all'
    ? history
    : history.filter(item => item.type === filter)

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <div className="max-w-md mx-auto p-4 space-y-6">
        {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-dark-text">History</h1>
        <button className="text-sm text-brand-primary font-medium hover:underline">
          Export
        </button>
      </div>

      {/* Filters */}
      <div className="bg-dark-bg-tertiary rounded-xl shadow-sm p-3">
        <div className="flex space-x-2 overflow-x-auto">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-colors ${
                filter === f.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-dark-bg-secondary text-dark-text-secondary hover:bg-dark-bg-hover'
              }`}
            >
              <span className="mr-1">{f.icon}</span>
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-4">
        {filteredHistory.map((item, index) => (
          <div key={item.id} className="relative">
            {/* Timeline Line */}
            {index !== filteredHistory.length - 1 && (
              <div className="absolute left-7 top-16 bottom-0 w-0.5 bg-dark-bg-hover -mb-4"></div>
            )}

            {/* History Card */}
            <div className="bg-dark-bg-tertiary rounded-xl shadow-sm p-4 border border-dark-border">
              <div className="flex items-start space-x-4">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl flex-shrink-0`}>
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-dark-text">{item.title}</h3>
                      <p className="text-xs text-dark-text-muted mt-1">{item.date}</p>
                    </div>
                    <span className="px-2 py-1 bg-dark-bg-secondary text-dark-text rounded text-xs font-medium">
                      {item.result}
                    </span>
                  </div>
                  <button className="text-sm text-brand-primary hover:underline">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredHistory.length === 0 && (
        <div className="bg-dark-bg-tertiary rounded-xl shadow-sm p-12 text-center">
          <div className="text-6xl mb-4">📋</div>
          <h3 className="text-lg font-semibold text-dark-text mb-2">No History</h3>
          <p className="text-dark-text-secondary text-sm">
            No activity found for this filter
          </p>
        </div>
      )}

        {/* Load More */}
        {filteredHistory.length > 0 && (
          <button className="w-full py-3 bg-dark-bg-secondary hover:bg-dark-bg-hover text-dark-text rounded-lg font-medium text-sm transition-colors">
            Load More History
          </button>
        )}
      </div>
    </div>
  )
}

export default PlayerHistory
