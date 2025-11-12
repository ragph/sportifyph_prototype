import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  IoCheckmarkCircle,
  IoStar,
  IoTrophy,
  IoFlash,
  IoPeople,
  IoCalendar,
  IoInformationCircle,
  IoClose
} from 'react-icons/io5'
import PageHeader from '../../components/PageHeader'

const PlayerSubscription = () => {
  const navigate = useNavigate()
  const [selectedPlan, setSelectedPlan] = useState('yearly')

  const trialInfo = {
    isActive: true,
    startDate: '2024-08-10',
    endDate: '2024-11-10',
    daysRemaining: 30
  }

  const plans = [
    {
      id: 'monthly',
      name: 'Premium Monthly',
      price: 99,
      period: 'month',
      savings: null,
      features: [
        'Join unlimited tournaments',
        'Book courts anytime',
        'Access to all coaches',
        'Track your statistics',
        'Connect with clubs',
        'Email support',
        'Cancel anytime'
      ],
      popular: false
    },
    {
      id: 'yearly',
      name: 'Premium Yearly',
      price: 899,
      period: 'year',
      originalPrice: 1188,
      savings: 289,
      savingsPercent: 24,
      features: [
        'Everything in Monthly Plan',
        'Save ₱289 per year',
        'Exclusive yearly tournaments',
        'Premium coach access',
        'Advanced analytics',
        'Priority support',
        'Early access to new features',
        'Best value!'
      ],
      popular: true
    }
  ]

  const benefits = [
    {
      icon: IoTrophy,
      title: 'Unlimited Tournaments',
      description: 'Join as many tournaments as you want with no restrictions'
    },
    {
      icon: IoFlash,
      title: 'Priority Booking',
      description: 'Get first access to courts and training sessions'
    },
    {
      icon: IoPeople,
      title: 'Exclusive Community',
      description: 'Connect with premium players and clubs'
    },
    {
      icon: IoStar,
      title: 'Premium Features',
      description: 'Access advanced stats, analytics, and insights'
    }
  ]

  const handleSubscribe = (planId) => {
    navigate(`/player/subscribe-payment/${planId}`)
  }

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <PageHeader title="Subscription Plans" backPath="/player/dashboard" />

      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Trial Banner */}
        {trialInfo.isActive && (
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <IoInformationCircle className="text-2xl" />
                  <h3 className="font-bold text-lg">Trial Active</h3>
                </div>
                <p className="text-sm opacity-90 mb-1">
                  Your free trial ends in <span className="font-bold">{trialInfo.daysRemaining} days</span>
                </p>
                <p className="text-xs opacity-75">Subscribe now to continue using premium features</p>
              </div>
            </div>
            <div className="bg-dark-bg-tertiary/20 rounded-lg p-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="opacity-90">Trial Period</span>
                <span className="font-semibold">{trialInfo.startDate} - {trialInfo.endDate}</span>
              </div>
            </div>
          </div>
        )}

        {/* Plan Toggle */}
        <div className="bg-dark-bg-tertiary rounded-xl p-1 shadow-sm flex">
          <button
            onClick={() => setSelectedPlan('monthly')}
            className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
              selectedPlan === 'monthly'
                ? 'bg-blue-600 text-white'
                : 'text-dark-text-secondary hover:text-dark-text'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setSelectedPlan('yearly')}
            className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all relative ${
              selectedPlan === 'yearly'
                ? 'bg-blue-600 text-white'
                : 'text-dark-text-secondary hover:text-dark-text'
            }`}
          >
            Yearly
            <span className="absolute -top-2 -right-2 bg-brand-accent/100 text-white text-xs px-2 py-0.5 rounded-full">
              Save 24%
            </span>
          </button>
        </div>

        {/* Plans */}
        <div className="space-y-4">
          {plans
            .filter(plan => plan.id === selectedPlan)
            .map((plan) => (
              <div
                key={plan.id}
                className={`bg-dark-bg-tertiary rounded-xl p-6 shadow-lg ${
                  plan.popular ? 'border-2 border-blue-600' : 'border border-dark-border'
                }`}
              >
                {plan.popular && (
                  <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-2xl font-bold text-dark-text mb-2">{plan.name}</h3>

                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-dark-text">₱{plan.price.toLocaleString()}</span>
                  <span className="text-dark-text-muted ml-2">/ {plan.period}</span>
                </div>

                {plan.savings && (
                  <div className="bg-brand-accent/10 border border-green-200 rounded-lg p-3 mb-4">
                    <p className="text-green-700 text-sm font-semibold">
                      💰 Save ₱{plan.savings.toLocaleString()} compared to monthly billing
                    </p>
                  </div>
                )}

                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <IoCheckmarkCircle className="text-brand-accent text-xl flex-shrink-0 mt-0.5" />
                      <span className="text-dark-text text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleSubscribe(plan.id)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors"
                >
                  Subscribe Now
                </button>
              </div>
            ))}
        </div>

        {/* Benefits */}
        <div className="bg-dark-bg-tertiary rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-dark-text mb-4">Why Subscribe?</h3>
          <div className="space-y-4">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="text-2xl text-brand-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-dark-text mb-1">{benefit.title}</h4>
                    <p className="text-sm text-dark-text-secondary">{benefit.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-dark-bg-tertiary rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-dark-text mb-4">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-dark-text mb-1">Can I cancel anytime?</h4>
              <p className="text-sm text-dark-text-secondary">Yes, you can cancel your subscription at any time with no cancellation fees.</p>
            </div>
            <div>
              <h4 className="font-semibold text-dark-text mb-1">What happens after my trial ends?</h4>
              <p className="text-sm text-dark-text-secondary">You'll need to subscribe to continue accessing premium features. Your data will be preserved.</p>
            </div>
            <div>
              <h4 className="font-semibold text-dark-text mb-1">Can I upgrade or downgrade?</h4>
              <p className="text-sm text-dark-text-secondary">Yes, you can change your plan at any time. Adjustments will be prorated.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerSubscription
