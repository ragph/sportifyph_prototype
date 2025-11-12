import { useState } from 'react'
import { IoCash, IoTrendingUp, IoCalendar, IoDownload, IoCard } from 'react-icons/io5'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const CoachEarnings = () => {
  const [period, setPeriod] = useState('month')

  const summary = {
    total: 45000,
    thisMonth: 8500,
    pending: 1500,
    sessions: 85
  }

  const chartData = [
    { week: 'Week 1', earnings: 1800 },
    { week: 'Week 2', earnings: 2200 },
    { week: 'Week 3', earnings: 2100 },
    { week: 'Week 4', earnings: 2400 }
  ]

  const recentTransactions = [
    {
      id: 1,
      student: 'Juan Dela Cruz',
      amount: 500,
      date: 'Nov 9, 2024',
      status: 'completed',
      type: 'Individual Session'
    },
    {
      id: 2,
      student: 'Maria Santos',
      amount: 750,
      date: 'Nov 9, 2024',
      status: 'completed',
      type: 'Group Session'
    },
    {
      id: 3,
      student: 'Pedro Garcia',
      amount: 500,
      date: 'Nov 8, 2024',
      status: 'completed',
      type: 'Individual Session'
    },
    {
      id: 4,
      student: 'Ana Lopez',
      amount: 500,
      date: 'Nov 11, 2024',
      status: 'pending',
      type: 'Individual Session'
    }
  ]

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <div className="max-w-lg mx-auto p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-dark-text">Earnings</h1>
        <button className="bg-green-600 hover:bg-green-700 text-white rounded-lg px-4 py-2 font-semibold transition-colors flex items-center space-x-2">
          <IoDownload className="text-xl" />
          <span>Export</span>
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 text-white">
          <IoCash className="text-2xl mb-2" />
          <div className="text-2xl font-bold">₱{summary.total.toLocaleString()}</div>
          <div className="text-xs opacity-90">Total Earnings</div>
        </div>
        <div className="bg-dark-bg-tertiary rounded-xl p-4 border border-dark-border">
          <IoTrendingUp className="text-2xl text-brand-primary mb-2" />
          <div className="text-2xl font-bold text-dark-text">₱{summary.thisMonth.toLocaleString()}</div>
          <div className="text-xs text-dark-text-secondary">This Month</div>
        </div>
        <div className="bg-dark-bg-tertiary rounded-xl p-4 border border-dark-border">
          <IoCalendar className="text-2xl text-brand-primary mb-2" />
          <div className="text-2xl font-bold text-dark-text">{summary.sessions}</div>
          <div className="text-xs text-dark-text-secondary">Total Sessions</div>
        </div>
        <div className="bg-dark-bg-tertiary rounded-xl p-4 border border-dark-border">
          <IoCard className="text-2xl text-yellow-600 mb-2" />
          <div className="text-2xl font-bold text-dark-text">₱{summary.pending.toLocaleString()}</div>
          <div className="text-xs text-dark-text-secondary">Pending</div>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-dark-bg-tertiary rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-dark-text mb-4">Earnings Trend</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="week" stroke="#9ca3af" style={{ fontSize: '12px' }} />
            <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
            <Tooltip />
            <Line type="monotone" dataKey="earnings" stroke="#10b981" strokeWidth={3} dot={{ fill: '#10b981', r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Transactions */}
      <div className="bg-dark-bg-tertiary rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-dark-text mb-4">Recent Transactions</h3>
        <div className="space-y-3">
          {recentTransactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-3 bg-dark-bg rounded-lg">
              <div className="flex-1">
                <h4 className="font-semibold text-dark-text text-sm">{transaction.student}</h4>
                <p className="text-xs text-dark-text-secondary">{transaction.type} • {transaction.date}</p>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-brand-primary">₱{transaction.amount}</div>
                <span className={`text-xs px-2 py-1 rounded ${
                  transaction.status === 'completed'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {transaction.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payout Info */}
      <div className="bg-brand-primary/10 border border-blue-200 rounded-xl p-4">
        <h4 className="font-semibold text-blue-800 text-sm mb-2">Next Payout</h4>
        <p className="text-xs text-blue-700">
          Your next payout of ₱{summary.thisMonth.toLocaleString()} is scheduled for Nov 15, 2024
        </p>
        </div>
      </div>
    </div>
  )
}

export default CoachEarnings
