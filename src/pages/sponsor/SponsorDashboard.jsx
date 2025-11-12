import { useNavigate } from 'react-router-dom'
import {
  IoBriefcase,
  IoPeople,
  IoEye,
  IoStatsChart,
  IoAddCircle,
  IoTrendingUp,
  IoCheckmarkCircle,
  IoTime,
  IoNotifications,
  IoSettings
} from 'react-icons/io5'
import DashboardWelcomeBanner from '../../components/DashboardWelcomeBanner'
import SubscriptionBanner from '../../components/SubscriptionBanner'
import QuickActions from '../../components/QuickActions'

const SponsorDashboard = () => {
  const navigate = useNavigate()

  // Mock data
  const subscriptionInfo = {
    isActive: true,
    plan: 'Business',
    daysRemaining: 20,
    expiryDate: '2024-11-30'
  }

  const stats = [
    { icon: IoBriefcase, value: '8', label: 'Campaigns', color: 'indigo' },
    { icon: IoPeople, value: '245', label: 'Athletes Reached', color: 'indigo' },
    { icon: IoEye, value: '12.5K', label: 'Impressions', color: 'indigo' },
    { icon: IoStatsChart, value: '₱250K', label: 'Total Spend', color: 'indigo' }
  ]

  const quickActions = [
    {
      id: 1,
      title: 'New Campaign',
      icon: IoAddCircle,
      bgColor: 'bg-brand-primary/10',
      iconColor: 'text-brand-primary',
      action: () => navigate('/sponsor/campaigns')
    },
    {
      id: 2,
      title: 'Find Athletes',
      icon: IoPeople,
      bgColor: 'bg-brand-primary/10',
      iconColor: 'text-brand-primary',
      action: () => navigate('/sponsor/athletes')
    },
    {
      id: 3,
      title: 'View Analytics',
      icon: IoStatsChart,
      bgColor: 'bg-brand-primary/10',
      iconColor: 'text-brand-primary',
      action: () => navigate('/sponsor/analytics')
    }
  ]

  const activeCampaigns = [
    {
      id: 1,
      name: 'Manila Open Pickleball Championship Sponsorship',
      type: 'Tournament Sponsorship',
      budget: 65000,
      spent: 42000,
      reach: 2100,
      status: 'active',
      startDate: '2024-11-01',
      endDate: '2024-12-31'
    },
    {
      id: 2,
      name: 'Pickleball Team Sponsorship - Dink Masters',
      type: 'Team Sponsorship',
      budget: 50000,
      spent: 28000,
      reach: 1850,
      status: 'active',
      startDate: '2024-10-15',
      endDate: '2024-12-15'
    },
    {
      id: 3,
      name: 'Summer Basketball League 2024',
      type: 'Tournament Sponsorship',
      budget: 50000,
      spent: 35000,
      reach: 1250,
      status: 'active',
      startDate: '2024-11-01',
      endDate: '2024-12-31'
    },
    {
      id: 4,
      name: 'Youth Volleyball Development',
      type: 'Team Sponsorship',
      budget: 30000,
      spent: 18000,
      reach: 850,
      status: 'active',
      startDate: '2024-10-15',
      endDate: '2024-12-15'
    },
    {
      id: 5,
      name: 'Regional Badminton Cup',
      type: 'Event Sponsorship',
      budget: 25000,
      spent: 12500,
      reach: 650,
      status: 'pending',
      startDate: '2024-12-01',
      endDate: '2024-12-20'
    }
  ]

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <div className="max-w-md mx-auto p-4 space-y-6">
        {/* Welcome Banner */}
        <DashboardWelcomeBanner
          userName="Nike Philippines"
          module="sponsor"
          description="Manage your sponsorships and reach athletes"
        />

        {/* Subscription Banner */}
        <SubscriptionBanner
          isActive={subscriptionInfo.isActive}
          daysRemaining={subscriptionInfo.daysRemaining}
          module="sponsor"
          plan={subscriptionInfo.plan}
          onNavigate={() => navigate('/sponsor/subscription')}
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="bg-dark-bg-tertiary rounded-xl p-4 shadow-sm border border-dark-border">
                <IconComponent className={`text-2xl text-${stat.color}-600 mb-2`} />
                <div className="text-2xl font-bold text-dark-text">{stat.value}</div>
                <div className="text-xs text-dark-text-secondary">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Quick Actions */}
        <QuickActions actions={quickActions} />

        {/* Active Campaigns */}
        <div className="bg-dark-bg-tertiary rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-dark-text">Active Campaigns</h2>
            <button
              onClick={() => navigate('/sponsor/campaigns')}
              className="text-sm text-brand-primary font-semibold hover:underline"
            >
              View All
            </button>
          </div>
          <div className="space-y-3">
            {activeCampaigns.map((campaign) => {
              const progress = (campaign.spent / campaign.budget) * 100
              return (
                <div key={campaign.id} className="p-3 bg-dark-bg rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-dark-text text-sm">{campaign.name}</h3>
                      <p className="text-xs text-dark-text-secondary mt-0.5">{campaign.type}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      campaign.status === 'active'
                        ? 'bg-brand-primary/20 text-brand-primary ring-1 ring-brand-primary/30'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {campaign.status === 'active' ? <IoCheckmarkCircle className="inline mr-1" /> : <IoTime className="inline mr-1" />}
                      {campaign.status}
                    </span>
                  </div>
                  <div className="mb-2">
                    <div className="flex items-center justify-between text-xs text-dark-text-secondary mb-1">
                      <span>Budget Progress</span>
                      <span className="font-semibold">₱{campaign.spent.toLocaleString()} / ₱{campaign.budget.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-dark-bg-hover rounded-full h-2">
                      <div
                        className="bg-indigo-600 h-2 rounded-full transition-all"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-dark-text-muted">
                    <div className="flex items-center space-x-1">
                      <IoPeople className="text-brand-primary" />
                      <span>{campaign.reach} reached</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <IoTrendingUp className="text-brand-primary" />
                      <span>{Math.round(progress)}% spent</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SponsorDashboard
