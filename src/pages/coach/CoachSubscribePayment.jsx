import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  IoCheckmarkCircle,
  IoCard,
  IoWallet,
  IoInformationCircle,
  IoShield,
  IoCalendar,
  IoCash
} from 'react-icons/io5'
import PageHeader from '../../components/PageHeader'
import Card from '../../components/Card'

const CoachSubscribePayment = () => {
  const navigate = useNavigate()
  const { planId } = useParams()
  const [isLoading, setIsLoading] = useState(false)

  const plans = {
    monthly: {
      name: 'Pro Monthly',
      price: 199,
      period: 'month',
      billingCycle: 'Billed monthly'
    },
    yearly: {
      name: 'Pro Yearly',
      price: 1899,
      period: 'year',
      billingCycle: 'Billed annually',
      savings: 489
    }
  }

  const selectedPlan = plans[planId] || plans.monthly

  const [formData, setFormData] = useState({
    paymentMethod: 'gcash',
    gcashNumber: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
    cardName: '',
    autoRenew: true,
    agreeToTerms: false
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (formData.paymentMethod === 'gcash') {
      if (!formData.gcashNumber) {
        newErrors.gcashNumber = 'GCash number is required'
      } else if (!/^09\d{9}$/.test(formData.gcashNumber)) {
        newErrors.gcashNumber = 'Invalid GCash number format'
      }
    } else if (formData.paymentMethod === 'card') {
      if (!formData.cardName) {
        newErrors.cardName = 'Cardholder name is required'
      }
      if (!formData.cardNumber) {
        newErrors.cardNumber = 'Card number is required'
      } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
        newErrors.cardNumber = 'Invalid card number'
      }
      if (!formData.cardExpiry) {
        newErrors.cardExpiry = 'Expiry date is required'
      }
      if (!formData.cardCvv) {
        newErrors.cardCvv = 'CVV is required'
      } else if (!/^\d{3,4}$/.test(formData.cardCvv)) {
        newErrors.cardCvv = 'Invalid CVV'
      }
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)
    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false)
      // Navigate to success page or dashboard
      navigate('/coach/subscription-success')
    }, 2000)
  }

  const nextBillingDate = () => {
    const today = new Date()
    if (planId === 'yearly') {
      today.setFullYear(today.getFullYear() + 1)
    } else {
      today.setMonth(today.getMonth() + 1)
    }
    return today.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  }

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <PageHeader title="Subscribe" backPath="/coach/subscription" />

      <div className="max-w-lg mx-auto p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Plan Summary */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-6 text-white shadow-lg">
            <h2 className="text-xl font-bold mb-2">{selectedPlan.name}</h2>
            <div className="flex items-baseline space-x-2 mb-2">
              <span className="text-4xl font-bold">₱{selectedPlan.price}</span>
              <span className="text-sm opacity-90">/ {selectedPlan.period}</span>
            </div>
            <p className="text-sm opacity-90">{selectedPlan.billingCycle}</p>
            {selectedPlan.savings && (
              <div className="mt-3 bg-dark-bg-tertiary/20 rounded-lg px-3 py-2 inline-block">
                <span className="text-sm font-semibold">You save ₱{selectedPlan.savings}!</span>
              </div>
            )}
          </div>

          {/* Payment Method */}
          <Card title="Payment Method" padding="p-6">
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, paymentMethod: 'gcash' })}
                className={`p-4 border-2 rounded-lg font-medium text-sm transition-all ${
                  formData.paymentMethod === 'gcash'
                    ? 'border-green-600 bg-brand-primary/10 text-brand-primary'
                    : 'border-dark-border bg-dark-bg-tertiary text-dark-text'
                }`}
              >
                <IoWallet className="text-2xl mx-auto mb-2" />
                GCash
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                className={`p-4 border-2 rounded-lg font-medium text-sm transition-all ${
                  formData.paymentMethod === 'card'
                    ? 'border-green-600 bg-brand-primary/10 text-brand-primary'
                    : 'border-dark-border bg-dark-bg-tertiary text-dark-text'
                }`}
              >
                <IoCard className="text-2xl mx-auto mb-2" />
                Card
              </button>
            </div>

            {/* GCash Payment */}
            {formData.paymentMethod === 'gcash' && (
              <div>
                <label className="block text-sm font-medium text-dark-text mb-2">
                  GCash Number
                </label>
                <input
                  type="tel"
                  name="gcashNumber"
                  value={formData.gcashNumber}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${
                    errors.gcashNumber ? 'border-red-500' : 'border-dark-border'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
                  placeholder="09XX XXX XXXX"
                />
                {errors.gcashNumber && (
                  <p className="mt-1 text-sm text-red-500">{errors.gcashNumber}</p>
                )}
              </div>
            )}

            {/* Card Payment */}
            {formData.paymentMethod === 'card' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-dark-text mb-2">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${
                      errors.cardName ? 'border-red-500' : 'border-dark-border'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
                    placeholder="Juan Dela Cruz"
                  />
                  {errors.cardName && (
                    <p className="mt-1 text-sm text-red-500">{errors.cardName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-text mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${
                      errors.cardNumber ? 'border-red-500' : 'border-dark-border'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                  />
                  {errors.cardNumber && (
                    <p className="mt-1 text-sm text-red-500">{errors.cardNumber}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-dark-text mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      name="cardExpiry"
                      value={formData.cardExpiry}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${
                        errors.cardExpiry ? 'border-red-500' : 'border-dark-border'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
                      placeholder="MM/YY"
                      maxLength="5"
                    />
                    {errors.cardExpiry && (
                      <p className="mt-1 text-sm text-red-500">{errors.cardExpiry}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-text mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      name="cardCvv"
                      value={formData.cardCvv}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${
                        errors.cardCvv ? 'border-red-500' : 'border-dark-border'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
                      placeholder="123"
                      maxLength="4"
                    />
                    {errors.cardCvv && (
                      <p className="mt-1 text-sm text-red-500">{errors.cardCvv}</p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </Card>

          {/* Billing Details */}
          <Card title="Billing Summary" padding="p-6">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-dark-text-secondary">Subscription</span>
                <span className="font-medium text-dark-text">{selectedPlan.name}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-dark-text-secondary">Billing Cycle</span>
                <span className="font-medium text-dark-text">{selectedPlan.billingCycle}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-dark-text-secondary">Next Billing Date</span>
                <span className="font-medium text-dark-text">{nextBillingDate()}</span>
              </div>

              <div className="border-t border-dark-border pt-3 mt-3">
                <div className="flex justify-between items-center">
                  <span className="text-dark-text font-semibold">Total</span>
                  <span className="text-2xl font-bold text-brand-primary">₱{selectedPlan.price}</span>
                </div>
              </div>
            </div>

            {/* Auto-Renew Option */}
            <div className="mt-4 p-4 bg-brand-primary/10 rounded-lg">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="autoRenew"
                  checked={formData.autoRenew}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 text-brand-primary border-dark-border rounded focus:ring-green-500"
                />
                <div>
                  <span className="text-sm font-medium text-dark-text block">
                    Enable Auto-Renewal
                  </span>
                  <span className="text-xs text-dark-text-secondary">
                    Your subscription will automatically renew. Cancel anytime from settings.
                  </span>
                </div>
              </label>
            </div>
          </Card>

          {/* Security Badge */}
          <div className="bg-brand-primary/10 border border-green-200 rounded-xl p-4 flex items-center space-x-3">
            <IoShield className="text-2xl text-brand-primary flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-green-800">Secure Payment</p>
              <p className="text-xs text-green-700">Your payment information is encrypted and secure</p>
            </div>
          </div>

          {/* Terms Agreement */}
          <Card padding="p-6">
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="mt-1 w-4 h-4 text-brand-primary border-dark-border rounded focus:ring-green-500"
              />
              <span className="text-sm text-dark-text">
                I agree to the{' '}
                <button type="button" className="text-brand-primary hover:underline">
                  Terms of Service
                </button>
                {' '}and{' '}
                <button type="button" className="text-brand-primary hover:underline">
                  Privacy Policy
                </button>
                . I understand that my subscription will renew automatically unless cancelled.
              </span>
            </label>
            {errors.agreeToTerms && (
              <p className="mt-2 text-sm text-red-500">{errors.agreeToTerms}</p>
            )}
          </Card>

          {/* Important Info */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start space-x-3">
            <IoInformationCircle className="text-2xl text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-yellow-800 text-sm mb-1">Money-Back Guarantee</h4>
              <p className="text-xs text-yellow-700">
                Not satisfied? Get a full refund within 30 days of your subscription start date. No questions asked.
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold text-lg transition-colors flex items-center justify-center shadow-lg ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? (
              'Processing...'
            ) : (
              <>
                <IoCheckmarkCircle className="mr-2 text-xl" />
                Subscribe Now
              </>
            )}
          </button>

          <p className="text-center text-xs text-dark-text-muted">
            You will be charged ₱{selectedPlan.price} today
          </p>
        </form>
      </div>
    </div>
  )
}

export default CoachSubscribePayment
