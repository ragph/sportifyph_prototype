import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { IoBasketball, IoHandRight, IoArrowUp, IoEye, IoShield, IoFlash, IoDownload } from 'react-icons/io5'

const PlayerStats = () => {
  const [selectedSport, setSelectedSport] = useState('Pickleball')

  const sports = ['Pickleball', 'Basketball', 'Volleyball', 'Badminton']

  const stats = {
    Pickleball: {
      overall: {
        gamesPlayed: 38,
        wins: 25,
        losses: 13,
        winRate: 65.8,
        points: 532,
        avgPoints: 14.0
      },
      performance: [
        { label: 'Aces Per Game', value: '3.2', icon: IoFlash },
        { label: 'Winners', value: '186', icon: IoBasketball },
        { label: 'Dinks', value: '212', icon: IoHandRight },
        { label: 'Volleys', value: '145', icon: IoArrowUp },
        { label: 'Serves', value: '198', icon: IoEye },
        { label: 'Blocks', value: '67', icon: IoShield }
      ],
      recentGames: [
        { opponent: 'Paddle Warriors', result: 'Win', score: '11-7, 11-9', points: 16, date: 'Nov 9' },
        { opponent: 'Dink Masters', result: 'Win', score: '11-8, 9-11, 11-6', points: 14, date: 'Nov 6' },
        { opponent: 'Court Crushers', result: 'Loss', score: '9-11, 10-12', points: 12, date: 'Nov 3' }
      ],
      chartData: [
        { game: 'G1', points: 13 },
        { game: 'G2', points: 16 },
        { game: 'G3', points: 14 },
        { game: 'G4', points: 15 },
        { game: 'G5', points: 18 },
        { game: 'G6', points: 14 },
        { game: 'G7', points: 12 },
        { game: 'G8', points: 16 }
      ]
    },
    Basketball: {
      overall: {
        gamesPlayed: 45,
        wins: 28,
        losses: 17,
        winRate: 62.2,
        points: 567,
        avgPoints: 12.6
      },
      performance: [
        { label: 'Points Per Game', value: '12.6', icon: IoBasketball },
        { label: 'Assists', value: '156', icon: IoHandRight },
        { label: 'Rebounds', value: '234', icon: IoArrowUp },
        { label: 'Steals', value: '89', icon: IoEye },
        { label: 'Blocks', value: '45', icon: IoShield },
        { label: 'Three Pointers', value: '78', icon: IoFlash }
      ],
      recentGames: [
        { opponent: 'Thunder Squad', result: 'Win', score: '78-65', points: 15, date: 'Nov 8' },
        { opponent: 'Flash Five', result: 'Loss', score: '82-88', points: 18, date: 'Nov 5' },
        { opponent: 'Phoenix Rising', result: 'Win', score: '91-76', points: 22, date: 'Nov 2' }
      ],
      chartData: [
        { game: 'G1', points: 10 },
        { game: 'G2', points: 14 },
        { game: 'G3', points: 12 },
        { game: 'G4', points: 18 },
        { game: 'G5', points: 22 },
        { game: 'G6', points: 15 },
        { game: 'G7', points: 18 },
        { game: 'G8', points: 20 }
      ]
    },
    Volleyball: {
      overall: {
        gamesPlayed: 32,
        wins: 20,
        losses: 12,
        winRate: 62.5,
        points: 448,
        avgPoints: 14.0
      },
      performance: [
        { label: 'Spikes Per Game', value: '8.2', icon: IoFlash },
        { label: 'Blocks', value: '124', icon: IoShield },
        { label: 'Serves', value: '198', icon: IoBasketball },
        { label: 'Digs', value: '156', icon: IoArrowUp },
        { label: 'Aces', value: '34', icon: IoEye },
        { label: 'Assists', value: '89', icon: IoHandRight }
      ],
      recentGames: [
        { opponent: 'Spike Masters', result: 'Win', score: '3-1', points: 16, date: 'Nov 7' },
        { opponent: 'Net Warriors', result: 'Win', score: '3-2', points: 14, date: 'Nov 4' },
        { opponent: 'Block Party', result: 'Loss', score: '1-3', points: 12, date: 'Nov 1' }
      ],
      chartData: [
        { game: 'G1', points: 12 },
        { game: 'G2', points: 14 },
        { game: 'G3', points: 16 },
        { game: 'G4', points: 15 },
        { game: 'G5', points: 18 },
        { game: 'G6', points: 14 },
        { game: 'G7', points: 16 },
        { game: 'G8', points: 14 }
      ]
    },
    Badminton: {
      overall: {
        gamesPlayed: 28,
        wins: 18,
        losses: 10,
        winRate: 64.3,
        points: 392,
        avgPoints: 14.0
      },
      performance: [
        { label: 'Smashes Per Game', value: '11.2', icon: IoFlash },
        { label: 'Drop Shots', value: '168', icon: IoArrowUp },
        { label: 'Clear Shots', value: '245', icon: IoBasketball },
        { label: 'Net Plays', value: '134', icon: IoHandRight },
        { label: 'Aces', value: '56', icon: IoEye },
        { label: 'Rallies Won', value: '223', icon: IoShield }
      ],
      recentGames: [
        { opponent: 'Shuttle Stars', result: 'Win', score: '21-15', points: 16, date: 'Nov 6' },
        { opponent: 'Smash Team', result: 'Loss', score: '18-21', points: 12, date: 'Nov 3' },
        { opponent: 'Court Kings', result: 'Win', score: '21-18', points: 15, date: 'Oct 31' }
      ],
      chartData: [
        { game: 'G1', points: 13 },
        { game: 'G2', points: 15 },
        { game: 'G3', points: 14 },
        { game: 'G4', points: 16 },
        { game: 'G5', points: 18 },
        { game: 'G6', points: 15 },
        { game: 'G7', points: 12 },
        { game: 'G8', points: 16 }
      ]
    }
  }

  const currentStats = stats[selectedSport]

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <div className="max-w-md mx-auto p-4 space-y-6">
        {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-dark-text">Statistics</h1>
        <button className="bg-brand-primary hover:bg-brand-primary-light text-white rounded-lg px-4 py-2 font-semibold transition-colors flex items-center space-x-2 shadow-md">
          <IoDownload className="text-xl" />
          <span>Export</span>
        </button>
      </div>

      {/* Sport Selector */}
      <div className="bg-dark-bg-tertiary rounded-xl shadow-sm p-2 flex space-x-2 border border-dark-border">
        {sports.map((sport) => (
          <button
            key={sport}
            onClick={() => setSelectedSport(sport)}
            className={`flex-1 py-2.5 rounded-lg font-medium text-sm transition-all ${
              selectedSport === sport
                ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20'
                : 'bg-dark-bg text-dark-text hover:bg-dark-bg-hover'
            }`}
          >
            {sport}
          </button>
        ))}
      </div>

      {/* Overall Stats */}
      <div className="bg-gradient-to-br from-brand-primary to-blue-700 rounded-xl shadow-lg p-6 text-white border border-brand-primary/30">
        <h3 className="text-lg font-bold mb-5 flex items-center">
          <span>Overall Performance</span>
        </h3>
        <div className="grid grid-cols-2 gap-5">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <p className="text-3xl font-black mb-1">{currentStats.overall.gamesPlayed}</p>
            <p className="text-xs font-medium text-white/90">Games Played</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <p className="text-3xl font-black mb-1">{currentStats.overall.winRate}%</p>
            <p className="text-xs font-medium text-white/90">Win Rate</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <p className="text-3xl font-black mb-1 text-green-300">{currentStats.overall.wins}</p>
            <p className="text-xs font-medium text-white/90">Wins</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <p className="text-3xl font-black mb-1 text-red-300">{currentStats.overall.losses}</p>
            <p className="text-xs font-medium text-white/90">Losses</p>
          </div>
        </div>
      </div>

      {/* Performance Stats */}
      <div className="bg-dark-bg-tertiary rounded-xl shadow-sm p-5 border border-dark-border">
        <h3 className="text-lg font-bold text-dark-text mb-4">Performance Breakdown</h3>
        <div className="grid grid-cols-2 gap-3">
          {currentStats.performance.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-brand-primary/5 to-brand-primary/10 rounded-lg p-4 border border-brand-primary/20 hover:border-brand-primary/40 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                    <IconComponent className="text-xl text-brand-primary" />
                  </div>
                  <span className="text-2xl font-black text-dark-text">{stat.value}</span>
                </div>
                <p className="text-xs font-medium text-dark-text-secondary leading-tight">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-dark-bg-tertiary rounded-xl shadow-sm p-5 border border-dark-border">
        <h3 className="text-lg font-bold text-dark-text mb-4">Performance Trend</h3>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={currentStats.chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" opacity={0.3} />
            <XAxis
              dataKey="game"
              stroke="#9ca3af"
              style={{ fontSize: '12px', fontWeight: '500' }}
            />
            <YAxis
              stroke="#9ca3af"
              style={{ fontSize: '12px', fontWeight: '500' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1a202c',
                border: '1px solid #0079FF',
                borderRadius: '8px',
                fontSize: '12px',
                color: '#fff',
                fontWeight: '600'
              }}
              itemStyle={{ color: '#0079FF' }}
            />
            <Line
              type="monotone"
              dataKey="points"
              stroke="#0079FF"
              strokeWidth={3}
              dot={{ fill: '#0079FF', r: 5, strokeWidth: 2, stroke: '#fff' }}
              activeDot={{ r: 7, fill: '#0079FF', stroke: '#fff', strokeWidth: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Games */}
      <div className="bg-dark-bg-tertiary rounded-xl shadow-sm p-5 border border-dark-border">
        <h3 className="text-lg font-bold text-dark-text mb-4">Recent Games</h3>
        <div className="space-y-3">
          {currentStats.recentGames.map((game, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-dark-bg rounded-lg border-2 border-dark-border hover:border-brand-primary/40 transition-all"
            >
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold shadow-sm ${
                      game.result === 'Win'
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                    }`}
                  >
                    {game.result}
                  </span>
                  <span className="text-xs font-medium text-dark-text-muted">{game.date}</span>
                </div>
                <p className="font-bold text-dark-text text-sm mb-1">{game.opponent}</p>
                <p className="text-xs font-medium text-dark-text-secondary">Score: {game.score}</p>
              </div>
              <div className="text-right pl-4">
                <p className="text-3xl font-black text-brand-primary">{game.points}</p>
                <p className="text-xs font-semibold text-dark-text-muted">points</p>
              </div>
            </div>
          ))}
        </div>
          <button className="w-full mt-4 py-3 bg-brand-primary/10 hover:bg-brand-primary/20 text-brand-primary border border-brand-primary/30 hover:border-brand-primary/50 rounded-lg font-bold text-sm transition-all">
            View All Games
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlayerStats
