import { useNavigate } from 'react-router-dom'
import { IoCheckmarkCircle, IoStorefront, IoFlash, IoPeople, IoStar } from 'react-icons/io5'

const CourtOwnerSubscriptionSuccess = () => {
  const navigate = useNavigate()

  const features = [
    {
      icon: IoStorefront,
      title: 'Court Management',
      description: 'Manage unlimited courts efficiently'
    },
    {
      icon: IoFlash,
      title: 'Real-time Updates',
      description: 'Instant booking notifications'
    },
    {
      icon: IoPeople,
      title: 'Customer Analytics',
      description: 'Track customer insights'
    },
    {
      icon: IoStar,
      title: 'Premium Tools',
      description: 'Advanced reporting and marketing'
    }
  ]

  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center p-4">
      <div className="max-w-lg w-full">
        <div className="bg-dark-bg-tertiary rounded-2xl shadow-xl p-8 text-center">
          {/* Success Icon */}
          <div className="mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
              <IoCheckmarkCircle className="text-5xl text-white" />
            </div>
            <h1 className="text-3xl font-bold text-dark-text mb-2">
              Welcome to Pro Plan!
            </h1>
            <p className="text-dark-text-secondary">
              Your subscription is now active
            </p>
          </div>

          {/* Confirmation Details */}
          <div className="bg-red-50 rounded-xl p-6 mb-6">
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
                <span className="font-semibold">info@elitesportscenter.com</span>
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
                  <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-3">
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
              onClick={() => navigate('/courtowner/dashboard')}
              className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors"
            >
              Go to Dashboard
            </button>
            <button
              onClick={() => navigate('/courtowner/settings')}
              className="w-full py-3 bg-dark-bg-secondary hover:bg-dark-bg-hover text-dark-text rounded-lg font-semibold transition-colors"
            >
              Manage Subscription
            </button>
          </div>

          {/* Thank You Message */}
          <div className="mt-6 pt-6 border-t border-dark-border">
            <p className="text-sm text-dark-text-secondary">
              Thank you for supporting Sportify PH! 🎉
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

export default CourtOwnerSubscriptionSuccess
