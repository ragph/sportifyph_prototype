import { useNavigate } from 'react-router-dom'
import { IoClose, IoAlertCircle, IoStar, IoCheckmarkCircle } from 'react-icons/io5'

const TrialExpirationModal = ({ isOpen, onClose, daysRemaining = 0 }) => {
  const navigate = useNavigate()

  if (!isOpen) return null

  const isExpired = daysRemaining <= 0
  const isExpiringSoon = daysRemaining > 0 && daysRemaining <= 7

  const handleSubscribe = () => {
    navigate('/player/subscription')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-dark-bg-tertiary rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className={`relative p-6 pb-4 ${
          isExpired
            ? 'bg-gradient-to-r from-red-500 to-pink-600'
            : 'bg-gradient-to-r from-orange-500 to-red-600'
        } text-white rounded-t-2xl`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-dark-bg-tertiary/20 rounded-full transition-colors"
          >
            <IoClose className="text-xl" />
          </button>

          <div className="flex items-center space-x-3 mb-2">
            <IoAlertCircle className="text-4xl" />
            <h2 className="text-2xl font-bold">
              {isExpired ? 'Trial Expired' : 'Trial Ending Soon'}
            </h2>
          </div>

          {!isExpired && (
            <p className="text-sm opacity-90">
              {daysRemaining} {daysRemaining === 1 ? 'day' : 'days'} remaining
            </p>
          )}
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Message */}
          <div className="text-center">
            {isExpired ? (
              <>
                <p className="text-dark-text mb-2">
                  Your free trial has ended. Subscribe now to continue enjoying all premium features.
                </p>
                <p className="text-sm text-dark-text-secondary">
                  Without a subscription, you won't be able to:
                </p>
              </>
            ) : (
              <>
                <p className="text-dark-text mb-2">
                  Your free trial is ending soon! Don't miss out on premium features.
                </p>
                <p className="text-sm text-dark-text-secondary">
                  Subscribe now to keep enjoying unlimited access.
                </p>
              </>
            )}
          </div>

          {/* Limited Features */}
          {isExpired && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <ul className="text-sm text-red-800 space-y-2">
                <li className="flex items-start">
                  <IoClose className="text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Join tournaments</span>
                </li>
                <li className="flex items-start">
                  <IoClose className="text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Book courts and training sessions</span>
                </li>
                <li className="flex items-start">
                  <IoClose className="text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Access advanced statistics</span>
                </li>
                <li className="flex items-start">
                  <IoClose className="text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Connect with clubs and coaches</span>
                </li>
              </ul>
            </div>
          )}

          {/* Subscription Plans */}
          <div className="space-y-3">
            <h3 className="font-bold text-dark-text text-center mb-3">Choose Your Plan</h3>

            {/* Yearly Plan */}
            <div className="border-3 border-blue-600 rounded-xl p-4 bg-blue-50">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
                    BEST VALUE
                  </span>
                  <h4 className="font-bold text-dark-text mt-2">Yearly Plan</h4>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">₱899</div>
                  <div className="text-xs text-dark-text-secondary">per year</div>
                </div>
              </div>
              <p className="text-xs text-dark-text-secondary mb-3">
                Save ₱289 (24% off) • Only ₱75/month
              </p>
              <div className="space-y-1 mb-3">
                <div className="flex items-center text-xs text-dark-text">
                  <IoCheckmarkCircle className="text-green-600 mr-2" />
                  <span>All premium features</span>
                </div>
                <div className="flex items-center text-xs text-dark-text">
                  <IoCheckmarkCircle className="text-green-600 mr-2" />
                  <span>Priority support</span>
                </div>
                <div className="flex items-center text-xs text-dark-text">
                  <IoCheckmarkCircle className="text-green-600 mr-2" />
                  <span>Exclusive tournaments</span>
                </div>
              </div>
            </div>

            {/* Monthly Plan */}
            <div className="border-2 border-dark-border rounded-xl p-4 bg-dark-bg-tertiary">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h4 className="font-bold text-dark-text">Monthly Plan</h4>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-dark-text">₱99</div>
                  <div className="text-xs text-dark-text-secondary">per month</div>
                </div>
              </div>
              <p className="text-xs text-dark-text-secondary mb-3">
                Cancel anytime • Flexible billing
              </p>
              <div className="space-y-1 mb-3">
                <div className="flex items-center text-xs text-dark-text">
                  <IoCheckmarkCircle className="text-green-600 mr-2" />
                  <span>All premium features</span>
                </div>
                <div className="flex items-center text-xs text-dark-text">
                  <IoCheckmarkCircle className="text-green-600 mr-2" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleSubscribe}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors flex items-center justify-center"
            >
              <IoStar className="mr-2" />
              Subscribe Now
            </button>

            {!isExpired && (
              <button
                onClick={onClose}
                className="w-full py-3 bg-dark-bg-secondary hover:bg-dark-bg-hover text-dark-text rounded-xl font-semibold transition-colors"
              >
                Remind Me Later
              </button>
            )}
          </div>

          {/* Money-back guarantee */}
          <div className="text-center">
            <p className="text-xs text-dark-text-muted">
              <span className="font-semibold">7-day money-back guarantee</span>
              <br />
              Cancel anytime • No hidden fees
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrialExpirationModal
