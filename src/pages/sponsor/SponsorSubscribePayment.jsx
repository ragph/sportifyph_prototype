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

const SponsorSubscribePayment = () => {
  const navigate = useNavigate()
  const { planId } = useParams()
  const [isLoading, setIsLoading] = useState(false)

  const plans = {
    monthly: {
      name: 'Business Monthly',
      price: 699,
      period: 'month',
      billingCycle: 'Billed monthly'
    },
    yearly: {
      name: 'Business Yearly',
      price: 6990,
      period: 'year',
      billingCycle: 'Billed annually',
      savings: 1398
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
    setTimeout(() => {
      setIsLoading(false)
      navigate('/sponsor/subscription-success')
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
    <div className="min-h-screen bg-dark-bg pb-6">
      <PageHeader title="Complete Payment" backPath="/sponsor/subscription" />

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto px-4 py-6 space-y-6">
        {/* Plan Summary */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
          <h2 className="text-lg font-bold mb-4">{selectedPlan.name}</h2>
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-3xl font-bold">₱{selectedPlan.price.toLocaleString()}</span>
              <span className="text-sm opacity-90 ml-2">/ {selectedPlan.period}</span>
            </div>
            {selectedPlan.savings && (
              <div className="bg-dark-bg-tertiary/20 px-3 py-1 rounded-full text-sm font-semibold">
                Save ₱{selectedPlan.savings.toLocaleString()}
              </div>
            )}
          </div>
          <p className="text-sm opacity-90 mt-3">{selectedPlan.billingCycle}</p>
        </div>

        {/* Payment Method */}
        <Card title="Payment Method" titleClassName="font-bold" padding="p-6">

          <div className="space-y-3 mb-6">
            <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
              formData.paymentMethod === 'gcash' ? 'border-indigo-600 bg-indigo-50' : 'border-dark-border hover:border-dark-border'
            }`}>
              <input
                type="radio"
                name="paymentMethod"
                value="gcash"
                checked={formData.paymentMethod === 'gcash'}
                onChange={handleChange}
                className="w-4 h-4 text-brand-primary"
              />
              <IoWallet className="text-2xl ml-3 text-brand-primary" />
              <span className="ml-3 font-medium text-dark-text">GCash</span>
            </label>

            <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
              formData.paymentMethod === 'card' ? 'border-indigo-600 bg-indigo-50' : 'border-dark-border hover:border-dark-border'
            }`}>
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={formData.paymentMethod === 'card'}
                onChange={handleChange}
                className="w-4 h-4 text-brand-primary"
              />
              <IoCard className="text-2xl ml-3 text-dark-text-secondary" />
              <span className="ml-3 font-medium text-dark-text">Credit/Debit Card</span>
            </label>
          </div>

          {/* GCash Form */}
          {formData.paymentMethod === 'gcash' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-dark-text mb-2">
                  GCash Mobile Number
                </label>
                <input
                  type="tel"
                  name="gcashNumber"
                  value={formData.gcashNumber}
                  onChange={handleChange}
                  placeholder="09XXXXXXXXX"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.gcashNumber ? 'border-red-500' : 'border-dark-border'
                  }`}
                />
                {errors.gcashNumber && (
                  <p className="text-red-500 text-xs mt-1">{errors.gcashNumber}</p>
                )}
              </div>
            </div>
          )}

          {/* Card Form */}
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
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.cardName ? 'border-red-500' : 'border-dark-border'
                  }`}
                />
                {errors.cardName && (
                  <p className="text-red-500 text-xs mt-1">{errors.cardName}</p>
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
                  placeholder="1234 5678 9012 3456"
                  maxLength="19"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.cardNumber ? 'border-red-500' : 'border-dark-border'
                  }`}
                />
                {errors.cardNumber && (
                  <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-dark-text mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    name="cardExpiry"
                    value={formData.cardExpiry}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    maxLength="5"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      errors.cardExpiry ? 'border-red-500' : 'border-dark-border'
                    }`}
                  />
                  {errors.cardExpiry && (
                    <p className="text-red-500 text-xs mt-1">{errors.cardExpiry}</p>
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
                    placeholder="123"
                    maxLength="4"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      errors.cardCvv ? 'border-red-500' : 'border-dark-border'
                    }`}
                  />
                  {errors.cardCvv && (
                    <p className="text-red-500 text-xs mt-1">{errors.cardCvv}</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </Card>

        {/* Billing Information */}
        <Card title="Billing Information" titleClassName="font-bold" padding="p-6">
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-dark-text-secondary">Next billing date</span>
              <span className="font-medium text-dark-text">{nextBillingDate()}</span>
            </div>
            <div className="flex justify-between items-center pt-3 border-t border-dark-border">
              <span className="text-dark-text-secondary">Auto-renewal</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="autoRenew"
                  checked={formData.autoRenew}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-dark-bg-hover peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-dark-bg-tertiary after:border-dark-border after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
          </div>
        </Card>

        {/* Terms */}
        <Card padding="p-6">
          <label className="flex items-start space-x-3 cursor-pointer">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="w-5 h-5 text-brand-primary border-dark-border rounded focus:ring-indigo-500 mt-0.5"
            />
            <span className="text-sm text-dark-text">
              I agree to the <a href="#" className="text-brand-primary hover:underline">Terms & Conditions</a> and <a href="#" className="text-brand-primary hover:underline">Privacy Policy</a>
            </span>
          </label>
          {errors.agreeToTerms && (
            <p className="text-red-500 text-xs mt-2">{errors.agreeToTerms}</p>
          )}
        </Card>

        {/* Security Badge */}
        <div className="bg-brand-primary/10 border border-green-200 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <IoShield className="text-2xl text-brand-primary flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-green-800">Secure Payment</p>
              <p className="text-xs text-green-700">Your payment information is encrypted and secure</p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center space-x-2"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Processing...</span>
            </>
          ) : (
            <>
              <IoCash className="text-xl" />
              <span>Pay ₱{selectedPlan.price.toLocaleString()}</span>
            </>
          )}
        </button>
      </form>
    </div>
  )
}

export default SponsorSubscribePayment
