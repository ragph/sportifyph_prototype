import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { IoCash, IoTrendingUp, IoCalendar, IoStorefront } from 'react-icons/io5'

const CourtOwnerRevenue = () => {
  const chartData = [
    { month: 'Jun', revenue: 98000 },
    { month: 'Jul', revenue: 105000 },
    { month: 'Aug', revenue: 112000 },
    { month: 'Sep', revenue: 125000 },
    { month: 'Oct', revenue: 138000 },
    { month: 'Nov', revenue: 148000 }
  ]

  const stats = [
    { icon: IoCash, label: 'Total Revenue', value: '₱1,026,800', color: 'red' },
    { icon: IoTrendingUp, label: 'This Month', value: '₱148,000', change: '+18%', color: 'green' },
    { icon: IoCalendar, label: 'Today', value: '₱12,100', color: 'blue' },
    { icon: IoStorefront, label: 'Avg per Court', value: '₱171K', color: 'purple' }
  ]

  const courtRevenue = [
    { name: 'Pickleball Court A', revenue: 268000, bookings: 536, percentage: 26 },
    { name: 'Court A - Basketball', revenue: 245000, bookings: 312, percentage: 24 },
    { name: 'Pickleball Court B', revenue: 189000, bookings: 420, percentage: 18 },
    { name: 'Court B - Volleyball', revenue: 168000, bookings: 285, percentage: 16 },
    { name: 'Court C - Badminton', revenue: 98800, bookings: 247, percentage: 10 },
    { name: 'Court D - Tennis', revenue: 58000, bookings: 83, percentage: 6 }
  ]

  const transactions = [
    { id: 1, courtName: 'Pickleball Court A', customer: 'Sarah Chen', amount: 1000, date: '2024-11-10', time: '09:00 AM', status: 'completed' },
    { id: 2, courtName: 'Pickleball Court B', customer: 'Mike Torres', amount: 900, date: '2024-11-10', time: '11:00 AM', status: 'completed' },
    { id: 3, courtName: 'Court A - Basketball', customer: 'Juan Dela Cruz', amount: 1600, date: '2024-11-10', time: '02:00 PM', status: 'completed' },
    { id: 4, courtName: 'Court B - Volleyball', customer: 'Maria Santos', amount: 1200, date: '2024-11-10', time: '04:00 PM', status: 'completed' },
    { id: 5, courtName: 'Pickleball Court A', customer: 'Lisa Wong', amount: 1000, date: '2024-11-10', time: '06:00 PM', status: 'pending' }
  ]

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <div className="max-w-md mx-auto p-4 space-y-6">
        <h1 className="text-2xl font-bold text-dark-text">Revenue</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="bg-dark-bg-tertiary rounded-xl p-4 shadow-sm">
                <IconComponent className={`text-2xl text-${stat.color}-600 mb-2`} />
                <div className="text-xl font-bold text-dark-text">{stat.value}</div>
                <div className="text-xs text-dark-text-secondary">{stat.label}</div>
                {stat.change && (
                  <div className="text-xs text-brand-primary font-semibold mt-1">{stat.change}</div>
                )}
              </div>
            )
          })}
        </div>

        {/* Revenue Chart */}
        <div className="bg-dark-bg-tertiary rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-bold text-dark-text mb-4">Revenue Trend (6 Months)</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#dc2626" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Court Revenue Breakdown */}
        <div className="bg-dark-bg-tertiary rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-bold text-dark-text mb-4">Revenue by Court</h2>
          <div className="space-y-3">
            {courtRevenue.map((court, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-dark-text">{court.name}</span>
                  <span className="text-sm font-bold text-dark-text">₱{court.revenue.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-dark-bg-hover rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{ width: `${court.percentage}%` }}></div>
                  </div>
                  <span className="text-xs text-dark-text-muted">{court.percentage}%</span>
                </div>
                <p className="text-xs text-dark-text-muted">{court.bookings} bookings</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-dark-bg-tertiary rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-dark-text">Recent Transactions</h2>
            <button className="text-sm text-brand-primary font-semibold hover:underline">View All</button>
          </div>
          <div className="space-y-3">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-3 bg-dark-bg rounded-lg">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-dark-text">{transaction.courtName}</p>
                  <p className="text-xs text-dark-text-secondary">{transaction.customer}</p>
                  <p className="text-xs text-dark-text-muted">{transaction.date} • {transaction.time}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-dark-text">₱{transaction.amount}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    transaction.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {transaction.status}
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

export default CourtOwnerRevenue
