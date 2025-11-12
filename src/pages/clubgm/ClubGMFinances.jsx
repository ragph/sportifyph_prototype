import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import {
  IoCash,
  IoPeople,
  IoTrendingUp,
  IoCalendar,
  IoCheckmarkCircle,
  IoTime
} from 'react-icons/io5'

const ClubGMFinances = () => {
  const summary = {
    totalRevenue: 936000,
    monthlyRevenue: 78000,
    pendingPayments: 12000,
    activeMemberships: 142
  }

  const chartData = [
    { month: 'Jun', revenue: 65000 },
    { month: 'Jul', revenue: 72000 },
    { month: 'Aug', revenue: 68000 },
    { month: 'Sep', revenue: 75000 },
    { month: 'Oct', revenue: 82000 },
    { month: 'Nov', revenue: 78000 }
  ]

  const membershipRevenue = [
    {
      type: 'Premium Membership',
      members: 78,
      price: 300,
      total: 23400,
      percentage: 45
    },
    {
      type: 'Standard Membership',
      members: 64,
      price: 200,
      total: 12800,
      percentage: 25
    },
    {
      type: 'Pickleball Tournament Fees',
      members: 45,
      price: 650,
      total: 29250,
      percentage: 30
    }
  ]

  const recentTransactions = [
    {
      id: 1,
      member: 'Juan Dela Cruz',
      type: 'Club Pickleball Championship',
      amount: 650,
      date: 'Nov 10, 2024',
      status: 'completed'
    },
    {
      id: 2,
      member: 'Maria Santos',
      type: 'Weekly Pickleball Drills',
      amount: 500,
      date: 'Nov 09, 2024',
      status: 'completed'
    },
    {
      id: 3,
      member: 'Pedro Garcia',
      type: 'Premium Membership',
      amount: 300,
      date: 'Nov 08, 2024',
      status: 'pending'
    },
    {
      id: 4,
      member: 'Ana Reyes',
      type: 'Youth Pickleball Development Camp',
      amount: 800,
      date: 'Nov 07, 2024',
      status: 'completed'
    },
    {
      id: 5,
      member: 'Carlos Lopez',
      type: 'Advanced Training Sessions',
      amount: 600,
      date: 'Nov 06, 2024',
      status: 'completed'
    }
  ]

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <div className="max-w-lg mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold text-dark-text">Finances</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-4 text-white shadow-lg">
          <IoCash className="text-2xl mb-2 opacity-90" />
          <div className="text-2xl font-bold">₱{summary.totalRevenue.toLocaleString()}</div>
          <div className="text-xs opacity-90 mt-1">Total Revenue</div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 text-white shadow-lg">
          <IoTrendingUp className="text-2xl mb-2 opacity-90" />
          <div className="text-2xl font-bold">₱{summary.monthlyRevenue.toLocaleString()}</div>
          <div className="text-xs opacity-90 mt-1">This Month</div>
        </div>
        <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl p-4 text-white shadow-lg">
          <IoTime className="text-2xl mb-2 opacity-90" />
          <div className="text-2xl font-bold">₱{summary.pendingPayments.toLocaleString()}</div>
          <div className="text-xs opacity-90 mt-1">Pending</div>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white shadow-lg">
          <IoPeople className="text-2xl mb-2 opacity-90" />
          <div className="text-2xl font-bold">{summary.activeMemberships}</div>
          <div className="text-xs opacity-90 mt-1">Active Members</div>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="bg-dark-bg-tertiary rounded-xl shadow-sm p-6 border border-dark-border">
        <h3 className="font-bold text-dark-text mb-4">Revenue Trend (Last 6 Months)</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px'
              }}
            />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#ea580c"
              strokeWidth={3}
              dot={{ fill: '#ea580c', r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Membership Revenue Breakdown */}
      <div className="bg-dark-bg-tertiary rounded-xl shadow-sm p-6 border border-dark-border">
        <h3 className="font-bold text-dark-text mb-4">Membership Revenue</h3>
        <div className="space-y-4">
          {membershipRevenue.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h4 className="font-semibold text-dark-text text-sm">{item.type}</h4>
                  <p className="text-xs text-dark-text-secondary">
                    {item.members} members × ₱{item.price.toLocaleString()}
                  </p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-brand-primary">₱{item.total.toLocaleString()}</div>
                  <div className="text-xs text-dark-text-muted">{item.percentage}%</div>
                </div>
              </div>
              <div className="w-full bg-dark-bg-hover rounded-full h-2">
                <div
                  className="bg-orange-600 h-2 rounded-full"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-dark-bg-tertiary rounded-xl shadow-sm p-6 border border-dark-border">
        <h3 className="font-bold text-dark-text mb-4">Recent Transactions</h3>
        <div className="space-y-3">
          {recentTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between py-3 border-b border-dark-border last:border-0"
            >
              <div className="flex-1">
                <h4 className="font-semibold text-dark-text text-sm">{transaction.member}</h4>
                <p className="text-xs text-dark-text-secondary">{transaction.type}</p>
                <p className="text-xs text-dark-text-muted mt-1">{transaction.date}</p>
              </div>
              <div className="text-right">
                <div className="font-bold text-brand-primary">₱{transaction.amount.toLocaleString()}</div>
                <span className={`inline-block mt-1 px-2 py-1 rounded text-xs font-medium ${
                  transaction.status === 'completed'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {transaction.status === 'completed' ? (
                    <><IoCheckmarkCircle className="inline mr-1" />Paid</>
                  ) : (
                    <><IoTime className="inline mr-1" />Pending</>
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  )
}

export default ClubGMFinances
