import { useState } from 'react'
import { IoCash, IoTrendingUp, IoCalendar, IoDownload, IoCar, IoTrophy } from 'react-icons/io5'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'
import Card from '../../components/Card'
import StatusBadge from '../../components/StatusBadge'

const OrganizerRevenue = () => {
  const [period, setPeriod] = useState('month')

  const summary = {
    total: 285000,
    thisMonth: 145000,
    pending: 12500,
    tournaments: 85
  }

  const chartData = [
    { month: 'Jul', revenue: 42000 },
    { month: 'Aug', revenue: 58000 },
    { month: 'Sep', revenue: 65000 },
    { month: 'Oct', revenue: 75000 },
    { month: 'Nov', revenue: 145000 }
  ]

  const tournamentRevenue = [
    {
      name: 'Metro Manila Pickleball Open',
      revenue: 64000,
      participants: 128,
      percentage: 44
    },
    {
      name: 'Corporate Pickleball Championship',
      revenue: 28000,
      participants: 56,
      percentage: 19
    },
    {
      name: 'Summer Pickleball Doubles Cup',
      revenue: 32000,
      participants: 64,
      percentage: 22
    },
    {
      name: 'Manila Pickleball Masters',
      revenue: 21000,
      participants: 42,
      percentage: 15
    }
  ]

  const recentTransactions = [
    {
      id: 1,
      team: 'Dink Masters',
      tournament: 'Metro Manila Pickleball Open',
      amount: 500,
      date: 'Nov 10, 2024',
      status: 'completed',
      type: 'Registration Fee'
    },
    {
      id: 2,
      team: 'Smash Squad',
      tournament: 'Summer Pickleball Doubles Cup',
      amount: 500,
      date: 'Nov 10, 2024',
      status: 'completed',
      type: 'Registration Fee'
    },
    {
      id: 3,
      team: 'Net Ninjas',
      tournament: 'Corporate Pickleball Championship',
      amount: 500,
      date: 'Nov 9, 2024',
      status: 'completed',
      type: 'Registration Fee'
    },
    {
      id: 4,
      team: 'Manila Picklers',
      tournament: 'Metro Manila Pickleball Open',
      amount: 500,
      date: 'Nov 12, 2024',
      status: 'pending',
      type: 'Registration Fee'
    }
  ]

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <div className="max-w-lg mx-auto p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-dark-text">Revenue</h1>
        <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg px-4 py-2 font-semibold transition-colors flex items-center space-x-2">
          <IoDownload className="text-xl" />
          <span>Export</span>
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 text-white">
          <IoCash className="text-2xl mb-2" />
          <div className="text-2xl font-bold">₱{summary.total.toLocaleString()}</div>
          <div className="text-xs opacity-90">Total Revenue</div>
        </div>
        <Card padding="p-4">
          <IoTrendingUp className="text-2xl text-brand-primary mb-2" />
          <div className="text-2xl font-bold text-dark-text">₱{summary.thisMonth.toLocaleString()}</div>
          <div className="text-xs text-dark-text-secondary">This Month</div>
        </Card>
        <Card padding="p-4">
          <IoTrophy className="text-2xl text-brand-primary mb-2" />
          <div className="text-2xl font-bold text-dark-text">{summary.tournaments}</div>
          <div className="text-xs text-dark-text-secondary">Total Tournaments</div>
        </Card>
        <Card padding="p-4">
          <IoCash className="text-2xl text-yellow-600 mb-2" />
          <div className="text-2xl font-bold text-dark-text">₱{summary.pending.toLocaleString()}</div>
          <div className="text-xs text-dark-text-secondary">Pending</div>
        </Card>
      </div>

      {/* Revenue Trend Chart */}
      <Card title="Revenue Trend" padding="p-6">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" stroke="#9ca3af" style={{ fontSize: '12px' }} />
            <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" stroke="#9333ea" strokeWidth={3} dot={{ fill: '#9333ea', r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Tournament Revenue Breakdown */}
      <Card title="Revenue by Tournament" padding="p-6">
        <div className="space-y-4">
          {tournamentRevenue.map((tournament, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-dark-text">{tournament.name}</h4>
                  <p className="text-xs text-dark-text-secondary">{tournament.participants} participants</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-brand-primary">₱{tournament.revenue.toLocaleString()}</div>
                  <div className="text-xs text-dark-text-secondary">{tournament.percentage}%</div>
                </div>
              </div>
              <div className="w-full bg-dark-bg-hover rounded-full h-2">
                <div
                  className="bg-purple-600 h-2 rounded-full"
                  style={{ width: `${tournament.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Recent Transactions */}
      <Card title="Recent Transactions" padding="p-6">
        <div className="space-y-3">
          {recentTransactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-3 bg-dark-bg rounded-lg">
              <div className="flex-1">
                <h4 className="font-semibold text-dark-text text-sm">{transaction.team}</h4>
                <p className="text-xs text-dark-text-secondary">{transaction.tournament}</p>
                <p className="text-xs text-dark-text-muted mt-1">{transaction.date}</p>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-brand-primary">₱{transaction.amount}</div>
                <StatusBadge
                  variant={transaction.status === 'completed' ? 'success' : 'warning'}
                  size="md"
                  rounded="default"
                >
                  {transaction.status}
                </StatusBadge>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Payout Info */}
      <div className="bg-brand-primary/10 border border-purple-200 rounded-xl p-4">
        <h4 className="font-semibold text-purple-800 text-sm mb-2">Account Balance</h4>
        <div className="flex items-center justify-between">
          <p className="text-xs text-purple-700">
            Available for withdrawal
          </p>
          <div className="text-2xl font-bold text-brand-primary">₱{summary.thisMonth.toLocaleString()}</div>
        </div>
        <button className="w-full mt-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium">
          Withdraw Funds
        </button>
        </div>
      </div>
    </div>
  )
}

export default OrganizerRevenue
