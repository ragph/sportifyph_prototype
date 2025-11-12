import { useState } from 'react'

const PlayerAchievements = () => {
  const achievements = {
    unlocked: [
      {
        id: 1,
        title: 'Triple Double Master',
        description: 'Achieve a triple-double in a single game',
        icon: '🏆',
        rarity: 'Legendary',
        unlockedDate: 'Oct 10, 2024',
        progress: 100,
        color: 'from-yellow-400 to-yellow-600'
      },
      {
        id: 2,
        title: 'Tournament Champion',
        description: 'Win your first tournament',
        icon: '🥇',
        rarity: 'Epic',
        unlockedDate: 'Oct 15, 2024',
        progress: 100,
        color: 'from-purple-400 to-purple-600'
      },
      {
        id: 3,
        title: 'Century Scorer',
        description: 'Score 100 total points',
        icon: '💯',
        rarity: 'Rare',
        unlockedDate: 'Sep 20, 2024',
        progress: 100,
        color: 'from-blue-400 to-blue-600'
      },
      {
        id: 4,
        title: 'Team Player',
        description: 'Join 3 different clubs',
        icon: '👥',
        rarity: 'Common',
        unlockedDate: 'Sep 15, 2024',
        progress: 100,
        color: 'from-green-400 to-green-600'
      },
      {
        id: 5,
        title: 'Early Bird',
        description: 'Complete your first game',
        icon: '🎯',
        rarity: 'Common',
        unlockedDate: 'Aug 5, 2024',
        progress: 100,
        color: 'from-gray-400 to-gray-600'
      }
    ],
    inProgress: [
      {
        id: 6,
        title: 'Win Streak Warrior',
        description: 'Win 10 games in a row',
        icon: '🔥',
        rarity: 'Epic',
        progress: 60,
        current: 6,
        target: 10,
        color: 'from-orange-400 to-red-600'
      },
      {
        id: 7,
        title: 'Marathon Player',
        description: 'Play 50 games',
        icon: '🏃',
        rarity: 'Rare',
        progress: 90,
        current: 45,
        target: 50,
        color: 'from-blue-400 to-blue-600'
      },
      {
        id: 8,
        title: 'Social Butterfly',
        description: 'Join 10 different clubs',
        icon: '🦋',
        rarity: 'Rare',
        progress: 30,
        current: 3,
        target: 10,
        color: 'from-pink-400 to-purple-600'
      }
    ],
    locked: [
      {
        id: 9,
        title: 'Hall of Fame',
        description: 'Win 50 tournaments',
        icon: '🏛️',
        rarity: 'Legendary',
        progress: 2,
        current: 1,
        target: 50,
        color: 'from-gray-400 to-gray-600'
      },
      {
        id: 10,
        title: 'Perfect Season',
        description: 'Win all games in a season',
        icon: '⭐',
        rarity: 'Legendary',
        progress: 0,
        current: 0,
        target: 1,
        color: 'from-gray-400 to-gray-600'
      }
    ]
  }

  const [activeTab, setActiveTab] = useState('unlocked')

  const tabs = [
    { id: 'unlocked', label: 'Unlocked', count: achievements.unlocked.length },
    { id: 'inProgress', label: 'In Progress', count: achievements.inProgress.length },
    { id: 'locked', label: 'Locked', count: achievements.locked.length }
  ]

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'Legendary': return 'bg-yellow-100 text-yellow-700'
      case 'Epic': return 'bg-purple-100 text-purple-700'
      case 'Rare': return 'bg-blue-100 text-blue-700'
      default: return 'bg-dark-bg-secondary text-dark-text'
    }
  }

  const renderAchievementCard = (achievement, isLocked = false) => {
    return (
      <div
        key={achievement.id}
        className={`bg-dark-bg-tertiary rounded-xl shadow-sm p-4 border border-dark-border ${
          isLocked ? 'opacity-60' : ''
        }`}
      >
        <div className="flex items-start space-x-4">
          <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center text-3xl flex-shrink-0 ${
            isLocked ? 'grayscale' : ''
          }`}>
            {isLocked ? '🔒' : achievement.icon}
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-semibold text-dark-text">{achievement.title}</h3>
                <p className="text-xs text-dark-text-secondary mt-1">{achievement.description}</p>
              </div>
              <span className={`px-2 py-1 rounded text-xs font-medium ${getRarityColor(achievement.rarity)}`}>
                {achievement.rarity}
              </span>
            </div>

            {achievement.unlockedDate && (
              <p className="text-xs text-dark-text-muted mb-2">
                Unlocked on {achievement.unlockedDate}
              </p>
            )}

            {achievement.progress < 100 && (
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs text-dark-text-secondary">
                  <span>Progress: {achievement.current}/{achievement.target}</span>
                  <span>{achievement.progress}%</span>
                </div>
                <div className="w-full bg-dark-bg-hover rounded-full h-2">
                  <div
                    className={`bg-gradient-to-r ${achievement.color} h-2 rounded-full transition-all`}
                    style={{ width: `${achievement.progress}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <div className="max-w-md mx-auto p-4 space-y-6">
        {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-dark-text">Achievements</h1>
        <div className="text-right">
          <p className="text-2xl font-bold text-brand-primary">{achievements.unlocked.length}</p>
          <p className="text-xs text-dark-text-muted">Unlocked</p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg p-6 text-white">
        <h3 className="text-lg font-semibold mb-4">Achievement Progress</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-3xl font-bold">{achievements.unlocked.length}</p>
            <p className="text-xs opacity-90 mt-1">Unlocked</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">{achievements.inProgress.length}</p>
            <p className="text-xs opacity-90 mt-1">In Progress</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">{achievements.locked.length}</p>
            <p className="text-xs opacity-90 mt-1">Locked</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-dark-bg-tertiary rounded-xl shadow-sm p-2">
        <div className="grid grid-cols-3 gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 rounded-lg font-medium text-xs transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-dark-bg text-dark-text-secondary hover:bg-dark-bg-secondary'
              }`}
            >
              <div>{tab.label}</div>
              <div className="text-xs mt-1 opacity-75">({tab.count})</div>
            </button>
          ))}
        </div>
      </div>

      {/* Achievement List */}
      <div className="space-y-3">
        {activeTab === 'unlocked' &&
          achievements.unlocked.map((achievement) => renderAchievementCard(achievement))}
        {activeTab === 'inProgress' &&
          achievements.inProgress.map((achievement) => renderAchievementCard(achievement))}
        {activeTab === 'locked' &&
          achievements.locked.map((achievement) => renderAchievementCard(achievement, true))}
      </div>

        {/* Info Card */}
        <div className="bg-gradient-to-r from-orange-500 to-pink-600 rounded-xl p-6 text-white">
          <h3 className="font-bold text-lg mb-2">🎯 Keep Playing!</h3>
          <p className="text-sm opacity-90">
            Complete more games, join tournaments, and connect with clubs to unlock amazing achievements!
          </p>
        </div>
      </div>
    </div>
  )
}

export default PlayerAchievements
