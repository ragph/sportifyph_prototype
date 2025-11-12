import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { IoCash, IoPeople, IoEye, IoTrendingUp, IoBriefcase, IoStatsChart } from 'react-icons/io5'

const SponsorAnalytics = () => {
  const reachData = [
    { month: 'Jun', reach: 1200 },
    { month: 'Jul', reach: 1450 },
    { month: 'Aug', reach: 1800 },
    { month: 'Sep', reach: 2100 },
    { month: 'Oct', reach: 2400 },
    { month: 'Nov', reach: 2850 }
  ]

  const spendData = [
    { month: 'Jun', spend: 35000 },
    { month: 'Jul', spend: 42000 },
    { month: 'Aug', spend: 38000 },
    { month: 'Sep', spend: 48000 },
    { month: 'Oct', spend: 52000 },
    { month: 'Nov', spend: 58000 }
  ]

  const stats = [
    { icon: IoCash, label: 'Total Spend', value: '₱273K', change: '+12%', color: 'indigo', trend: 'up' },
    { icon: IoPeople, label: 'Total Reach', value: '12,800', change: '+18%', color: 'green', trend: 'up' },
    { icon: IoEye, label: 'Impressions', value: '45.2K', change: '+15%', color: 'blue', trend: 'up' },
    { icon: IoBriefcase, label: 'Active Campaigns', value: '8', change: '+2', color: 'purple', trend: 'up' }
  ]

  const campaignPerformance = [
    { name: 'Manila Open Pickleball', reach: 2100, impressions: 9500, roi: 145, spent: 42000 },
    { name: 'Pickleball Team - Dink Masters', reach: 1850, impressions: 7200, roi: 138, spent: 28000 },
    { name: 'Pickleball Equipment', reach: 1200, impressions: 4800, roi: 128, spent: 15000 },
    { name: 'Summer Basketball League', reach: 1250, impressions: 5800, roi: 125, spent: 35000 },
    { name: 'Youth Volleyball Dev', reach: 850, impressions: 3200, roi: 98, spent: 18000 },
    { name: 'Regional Badminton Cup', reach: 650, impressions: 2400, roi: 115, spent: 12500 },
    { name: 'Elite Athlete Program', reach: 2100, impressions: 8500, roi: 142, spent: 80000 }
  ]

  const topAthletes = [
    { name: 'Coach Mike Santos', sport: 'Pickleball', engagement: 3500, roi: 148 },
    { name: 'Dink Masters', sport: 'Pickleball', engagement: 2800, roi: 142 },
    { name: 'Maria Santos', sport: 'Volleyball', engagement: 3200, roi: 145 },
    { name: 'Manila Picklers', sport: 'Pickleball', engagement: 2600, roi: 136 },
    { name: 'Juan Dela Cruz', sport: 'Basketball', engagement: 2400, roi: 135 }
  ]

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <div className="max-w-lg mx-auto p-4 space-y-6">
        <h1 className="text-2xl font-bold text-dark-text">Analytics</h1>

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
                  <div className={`text-xs font-semibold mt-1 ${stat.trend === 'up' ? 'text-brand-primary' : 'text-brand-primary'}`}>
                    {stat.trend === 'up' && <IoTrendingUp className="inline mr-1" />}
                    {stat.change}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Reach Trend Chart */}
        <div className="bg-dark-bg-tertiary rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-bold text-dark-text mb-4">Reach Trend (6 Months)</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={reachData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="reach" stroke="#4f46e5" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Spend Analysis Chart */}
        <div className="bg-dark-bg-tertiary rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-bold text-dark-text mb-4">Monthly Spend Analysis</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={spendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="spend" fill="#4f46e5" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Campaign Performance */}
        <div className="bg-dark-bg-tertiary rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-bold text-dark-text mb-4">Campaign Performance</h2>
          <div className="space-y-3">
            {campaignPerformance.map((campaign, index) => (
              <div key={index} className="p-3 bg-dark-bg rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-dark-text">{campaign.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    campaign.roi >= 120 ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    ROI: {campaign.roi}%
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <p className="text-dark-text-muted">Reach</p>
                    <p className="font-semibold text-dark-text">{campaign.reach.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-dark-text-muted">Impressions</p>
                    <p className="font-semibold text-dark-text">{campaign.impressions.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-dark-text-muted">Spent</p>
                    <p className="font-semibold text-dark-text">₱{campaign.spent.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Athletes */}
        <div className="bg-dark-bg-tertiary rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-bold text-dark-text mb-4">Top Performing Athletes</h2>
          <div className="space-y-3">
            {topAthletes.map((athlete, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-dark-bg rounded-lg">
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-dark-text">{athlete.name}</h3>
                  <p className="text-xs text-dark-text-secondary">{athlete.sport}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2">
                    <div>
                      <p className="text-xs text-dark-text-muted">Engagement</p>
                      <p className="text-sm font-bold text-dark-text">{athlete.engagement.toLocaleString()}</p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-indigo-100 text-indigo-700">
                      ROI: {athlete.roi}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SponsorAnalytics
