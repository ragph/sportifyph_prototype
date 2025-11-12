import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  IoCheckmarkCircle,
  IoStar,
  IoPeople,
  IoFlash,
  IoCash,
  IoCalendar,
  IoInformationCircle,
  IoClose
} from 'react-icons/io5'
import PageHeader from '../../components/PageHeader'
import Card from '../../components/Card'
import StatusBadge from '../../components/StatusBadge'

const ClubGMSubscription = () => {
  const navigate = useNavigate()
  const [selectedPlan, setSelectedPlan] = useState('yearly')

  const trialInfo = {
    isActive: true,
    startDate: '2024-08-10',
    endDate: '2024-12-05',
    daysRemaining: 25
  }

  const plans = [
    {
      id: 'monthly',
      name: 'Pro Monthly',
      price: 399,
      period: 'month',
      savings: null,
      features: [
        'Manage up to 100 members',
        'Unlimited events',
        'Member management',
        'Revenue tracking',
        'Payment processing',
        'Email support',
        'Cancel anytime'
      ],
      popular: false
    },
    {
      id: 'yearly',
      name: 'Pro Yearly',
      price: 3990,
      period: 'year',
      originalPrice: 4788,
      savings: 798,
      savingsPercent: 17,
      features: [
        'Everything in Monthly Plan',
        'Save ₱798 per year',
        'Unlimited members',
        'Advanced analytics',
        'Marketing tools',
        'Priority support',
        'API access',
        'Best value!'
      ],
      popular: true
    }
  ]

  const benefits = [
    {
      icon: IoPeople,
      title: 'Member Management',
      description: 'Manage unlimited members with powerful tracking tools'
    },
    {
      icon: IoFlash,
      title: 'Real-time Updates',
      description: 'Get instant notifications for member activity and payments'
    },
    {
      icon: IoCash,
      title: 'Revenue Tracking',
      description: 'Track payments, memberships, and financial performance'
    },
    {
      icon: IoStar,
      title: 'Premium Features',
      description: 'Access advanced reporting and marketing tools'
    }
  ]

  const handleSubscribe = (planId) => {
    navigate(`/clubgm/subscribe-payment/${planId}`)
  }

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <PageHeader title="Subscription Plans" backPath="/clubgm/dashboard" />

      <div className="max-w-lg mx-auto px-4 py-6 space-y-6">
        {/* Trial Banner */}
        {trialInfo.isActive && (
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl p-6 text-white">
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
        <Card noPadding className="p-1 flex">
          <button
            onClick={() => setSelectedPlan('monthly')}
            className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
              selectedPlan === 'monthly'
                ? 'bg-orange-600 text-white'
                : 'text-dark-text-secondary hover:text-dark-text'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setSelectedPlan('yearly')}
            className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all relative ${
              selectedPlan === 'yearly'
                ? 'bg-orange-600 text-white'
                : 'text-dark-text-secondary hover:text-dark-text'
            }`}
          >
            Yearly
            <span className="absolute -top-2 -right-2">
              <StatusBadge variant="orange" size="sm" rounded="full">
                Save 17%
              </StatusBadge>
            </span>
          </button>
        </Card>

        {/* Plans */}
        <div className="space-y-4">
          {plans
            .filter(plan => plan.id === selectedPlan)
            .map((plan) => (
              <Card
                key={plan.id}
                padding="p-6"
                className={plan.popular ? 'border-2 border-orange-600' : ''}
              >
                {plan.popular && (
                  <div className="mb-4">
                    <StatusBadge variant="orange" size="md" rounded="full">
                      MOST POPULAR
                    </StatusBadge>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-dark-text mb-2">{plan.name}</h3>

                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-dark-text">₱{plan.price.toLocaleString()}</span>
                  <span className="text-dark-text-muted ml-2">/ {plan.period}</span>
                </div>

                {plan.savings && (
                  <div className="bg-brand-primary/10 border border-green-200 rounded-lg p-3 mb-4">
                    <p className="text-green-700 text-sm font-semibold">
                      💰 Save ₱{plan.savings.toLocaleString()} compared to monthly billing
                    </p>
                  </div>
                )}

                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <IoCheckmarkCircle className="text-brand-primary text-xl flex-shrink-0 mt-0.5" />
                      <span className="text-dark-text text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleSubscribe(plan.id)}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl transition-colors"
                >
                  Subscribe Now
                </button>
              </Card>
            ))}
        </div>

        {/* Benefits */}
        <Card title="Why Subscribe?" padding="p-6">
          <div className="space-y-4">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="text-2xl text-brand-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-dark-text mb-1">{benefit.title}</h4>
                    <p className="text-sm text-dark-text-secondary">{benefit.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Card>

        {/* FAQ */}
        <Card title="Frequently Asked Questions" padding="p-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-dark-text mb-1">Can I cancel anytime?</h4>
              <p className="text-sm text-dark-text-secondary">Yes, you can cancel your subscription at any time with no cancellation fees.</p>
            </div>
            <div>
              <h4 className="font-semibold text-dark-text mb-1">What happens after my trial ends?</h4>
              <p className="text-sm text-dark-text-secondary">You'll need to subscribe to continue accessing premium features. Your club data will be preserved.</p>
            </div>
            <div>
              <h4 className="font-semibold text-dark-text mb-1">Can I upgrade or downgrade?</h4>
              <p className="text-sm text-dark-text-secondary">Yes, you can change your plan at any time. Adjustments will be prorated.</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default ClubGMSubscription
