import { IoStar, IoStorefront, IoBriefcase } from 'react-icons/io5'
import PropTypes from 'prop-types'

const SubscriptionBanner = ({
  isActive,
  daysRemaining,
  module = 'player',
  plan = 'Pro',
  onNavigate,
  isTrial = false
}) => {
  // Don't show banner if not active or days remaining > 30
  if (!isActive || daysRemaining > 30) {
    return null
  }

  // Module-specific configurations
  const moduleConfig = {
    player: {
      icon: IoStar,
      normalGradient: 'from-green-500 to-emerald-600',
      alertGradient: 'from-orange-500 to-red-600',
      normalText: isTrial ? 'Free Trial Active' : `${plan} Subscription Active`,
      alertText: isTrial ? 'Trial Ending Soon!' : 'Subscription Ending Soon!',
      cta: isTrial ? 'Tap to subscribe' : 'Tap to manage'
    },
    coach: {
      icon: IoStar,
      normalGradient: 'from-green-500 to-emerald-600',
      alertGradient: 'from-orange-500 to-red-600',
      normalText: `${plan} Subscription Active`,
      alertText: 'Subscription Ending Soon!',
      cta: 'Tap to manage'
    },
    organizer: {
      icon: IoStar,
      normalGradient: 'from-purple-500 to-indigo-600',
      alertGradient: 'from-orange-500 to-red-600',
      normalText: `${plan} Subscription Active`,
      alertText: 'Subscription Ending Soon!',
      cta: 'Tap to manage'
    },
    clubgm: {
      icon: IoStar,
      normalGradient: 'from-orange-500 to-amber-600',
      alertGradient: 'from-red-500 to-orange-600',
      normalText: `${plan} Subscription Active`,
      alertText: 'Subscription Ending Soon!',
      cta: 'Tap to manage'
    },
    courtowner: {
      icon: IoStorefront,
      normalGradient: 'from-red-500 to-orange-600',
      alertGradient: 'from-red-500 to-orange-600',
      normalText: `${plan} Subscription Active`,
      alertText: 'Subscription Ending Soon!',
      cta: 'Tap to manage'
    },
    sponsor: {
      icon: IoBriefcase,
      normalGradient: 'from-indigo-500 to-purple-600',
      alertGradient: 'from-indigo-500 to-purple-600',
      normalText: `${plan} Subscription Active`,
      alertText: 'Subscription Ending Soon!',
      cta: 'Tap to manage'
    }
  }

  const config = moduleConfig[module] || moduleConfig.player
  const IconComponent = config.icon
  const isAlert = daysRemaining <= 7
  const gradient = isAlert ? config.alertGradient : config.normalGradient
  const displayText = isAlert ? config.alertText : config.normalText

  return (
    <div
      onClick={onNavigate}
      className={`rounded-xl p-4 cursor-pointer transition-all bg-gradient-to-r ${gradient} text-white shadow-sm`}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <IconComponent className="text-lg" />
            <span className="font-bold text-sm">
              {displayText}
            </span>
          </div>
          <p className="text-xs opacity-90">
            {daysRemaining} {daysRemaining === 1 ? 'day' : 'days'} remaining • {config.cta}
          </p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold">{daysRemaining}</div>
          <div className="text-xs opacity-90">days left</div>
        </div>
      </div>
    </div>
  )
}

SubscriptionBanner.propTypes = {
  isActive: PropTypes.bool.isRequired,
  daysRemaining: PropTypes.number.isRequired,
  module: PropTypes.oneOf(['player', 'coach', 'organizer', 'clubgm', 'courtowner', 'sponsor']).isRequired,
  plan: PropTypes.string,
  onNavigate: PropTypes.func.isRequired,
  isTrial: PropTypes.bool
}

export default SubscriptionBanner
