import { useNavigate } from 'react-router-dom'
import {
  IoTrophy,
  IoCalendar,
  IoPeople,
  IoCash,
  IoAddCircle,
  IoStatsChart,
  IoSettings
} from 'react-icons/io5'
import { getModuleTheme } from '../config/theme'
import {
  WelcomeBanner,
  SubscriptionBanner,
  StatCard,
  ActionButton
} from '../components'

const TemplateDashboard = () => {
  const navigate = useNavigate()

  // STEP 1: Set your module name
  const moduleName = 'player' // Change this: player, coach, organizer, clubgm, courtowner, sponsor
  const theme = getModuleTheme(moduleName)

  // STEP 2: Update subscription info
  const subscriptionInfo = {
    isActive: true,
    plan: 'Pro',
    daysRemaining: 25,
    expiryDate: '2024-12-05'
  }

  // STEP 3: Update stats data
  const stats = [
    { icon: IoTrophy, value: '12', label: 'Tournaments', moduleColor: theme.primary.split('-')[0] },
    { icon: IoCalendar, value: '45', label: 'Events', moduleColor: theme.primary.split('-')[0] },
    { icon: IoPeople, value: '156', label: 'Members', moduleColor: theme.primary.split('-')[0] },
    { icon: IoCash, value: '₱78K', label: 'Revenue', moduleColor: theme.primary.split('-')[0] }
  ]

  // STEP 4: Update quick actions
  const quickActions = [
    {
      icon: IoAddCircle,
      label: 'Create New',
      action: () => {}
    },
    {
      icon: IoStatsChart,
      label: 'View Stats',
      action: () => {}
    },
    {
      icon: IoSettings,
      label: 'Settings',
      action: () => navigate(`/${moduleName}/settings`)
    }
  ]

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bgGradient} pb-20`}>
      <div className="max-w-lg mx-auto p-4 space-y-6">
        {/* STEP 5: Update welcome banner */}
        <WelcomeBanner
          userName="John Doe"
          description="Ready to achieve your goals today?"
          gradientFrom={theme.primaryGradientFrom.split('-')[0]}
          gradientTo={theme.primaryGradientTo.split('-')[0]}
        />

        {/* Subscription Banner */}
        {subscriptionInfo.isActive && subscriptionInfo.daysRemaining <= 30 && (
          <SubscriptionBanner
            daysRemaining={subscriptionInfo.daysRemaining}
            onClickManage={() => navigate(`/${moduleName}/subscription`)}
            gradientFrom={theme.primaryGradientFrom.split('-')[0]}
            gradientTo={theme.primaryGradientTo.split('-')[0]}
          />
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              moduleColor={stat.moduleColor}
            />
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-dark-bg-tertiary rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-bold text-dark-text mb-4">Quick Actions</h2>
          <div className="grid grid-cols-3 gap-3">
            {quickActions.map((action, index) => {
              const IconComponent = action.icon
              return (
                <button
                  key={index}
                  onClick={action.action}
                  className={`bg-${theme.primary} hover:bg-${theme.primaryHover} text-white rounded-xl p-4 text-center transition-all transform hover:scale-105 active:scale-95`}
                >
                  <IconComponent className="text-3xl mx-auto mb-2" />
                  <p className="text-xs font-medium">{action.label}</p>
                </button>
              )
            })}
          </div>
        </div>

        {/* STEP 6: Add your custom content sections here */}
        <div className="bg-dark-bg-tertiary rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-bold text-dark-text mb-4">Your Content Section</h2>
          <p className="text-sm text-dark-text-secondary">Add your module-specific content here</p>
        </div>
      </div>
    </div>
  )
}

export default TemplateDashboard
