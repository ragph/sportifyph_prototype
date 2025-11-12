import { useNavigate } from 'react-router-dom'
import { IoCheckmarkCircle, IoCash, IoPeople, IoCalendar, IoTrendingUp } from 'react-icons/io5'

const CoachSubscriptionSuccess = () => {
  const navigate = useNavigate()

  const features = [
    {
      icon: IoCash,
      title: 'Unlimited Bookings',
      description: 'Accept unlimited session bookings'
    },
    {
      icon: IoPeople,
      title: 'Student Management',
      description: 'Track all your students progress'
    },
    {
      icon: IoTrendingUp,
      title: 'Business Analytics',
      description: 'Get insights on revenue and growth'
    },
    {
      icon: IoCalendar,
      title: 'Smart Scheduling',
      description: 'Automated calendar management'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-4">
      <div className="max-w-lg w-full">
        <div className="bg-dark-bg-tertiary rounded-2xl shadow-xl p-8 text-center">
          {/* Success Icon */}
          <div className="mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
              <IoCheckmarkCircle className="text-5xl text-white" />
            </div>
            <h1 className="text-3xl font-bold text-dark-text mb-2">
              Welcome to Pro Coach!
            </h1>
            <p className="text-dark-text-secondary">
              Your subscription is now active
            </p>
          </div>

          {/* Confirmation Details */}
          <div className="bg-brand-primary/10 rounded-xl p-6 mb-6">
            <div className="text-sm text-dark-text space-y-2">
              <div className="flex justify-between">
                <span>Status:</span>
                <span className="font-semibold text-brand-primary">Active</span>
              </div>
              <div className="flex justify-between">
                <span>Started:</span>
                <span className="font-semibold">
                  {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Receipt sent to:</span>
                <span className="font-semibold">mike.santos@email.com</span>
              </div>
            </div>
          </div>

          {/* Features Unlocked */}
          <div className="mb-6">
            <h3 className="font-bold text-dark-text mb-4">Features Unlocked</h3>
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3">
                    <IconComponent className="text-2xl text-brand-primary mb-2 mx-auto" />
                    <p className="text-xs font-medium text-dark-text mb-1">{feature.title}</p>
                    <p className="text-xs text-dark-text-secondary">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={() => navigate('/coach/dashboard')}
              className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors"
            >
              Go to Dashboard
            </button>
            <button
              onClick={() => navigate('/coach/settings')}
              className="w-full py-3 bg-dark-bg-secondary hover:bg-dark-bg-hover text-dark-text rounded-lg font-semibold transition-colors"
            >
              Manage Subscription
            </button>
          </div>

          {/* Thank You Message */}
          <div className="mt-6 pt-6 border-t border-dark-border">
            <p className="text-sm text-dark-text-secondary">
              Thank you for supporting Sportify PH!
            </p>
            <p className="text-xs text-dark-text-muted mt-2">
              If you have any questions, contact us at support@sportifyph.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoachSubscriptionSuccess
