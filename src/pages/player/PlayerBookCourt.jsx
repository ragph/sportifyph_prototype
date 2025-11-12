import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  IoStorefront,
  IoCalendar,
  IoTime,
  IoLocation,
  IoCash,
  IoCheckmarkCircle,
  IoCard,
  IoWallet,
  IoInformationCircle,
  IoBasketball,
  IoStar,
  IoChevronForward
} from 'react-icons/io5'
import PageHeader from '../../components/PageHeader'

const PlayerBookCourt = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState(1) // 1: Select Court, 2: Date & Time, 3: Payment, 4: Confirm
  const [isLoading, setIsLoading] = useState(false)

  const courts = [
    {
      id: 1,
      name: 'Davao Sports Complex',
      location: 'Matina Town Square',
      rating: 4.8,
      reviews: 156,
      pricePerHour: 500,
      sports: ['Basketball', 'Volleyball'],
      facilities: ['Shower', 'Parking', 'Locker Room', 'Water Station'],
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=200&h=200&fit=crop'
    },
    {
      id: 2,
      name: 'SM Lanang Premier Sports Center',
      location: 'SM Lanang Premier',
      rating: 4.9,
      reviews: 203,
      pricePerHour: 800,
      sports: ['Basketball', 'Badminton', 'Tennis'],
      facilities: ['AC Room', 'Shower', 'Parking', 'Cafe'],
      image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?w=200&h=200&fit=crop'
    },
    {
      id: 3,
      name: 'Abreeza Sports Hub',
      location: 'Abreeza Mall',
      rating: 4.6,
      reviews: 98,
      pricePerHour: 400,
      sports: ['Basketball'],
      facilities: ['Parking', 'Water Station'],
      image: 'https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?w=200&h=200&fit=crop'
    }
  ]

  const timeSlots = [
    { time: '06:00 AM', available: true },
    { time: '07:00 AM', available: true },
    { time: '08:00 AM', available: false },
    { time: '09:00 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '12:00 PM', available: false },
    { time: '01:00 PM', available: true },
    { time: '02:00 PM', available: true },
    { time: '03:00 PM', available: true },
    { time: '04:00 PM', available: false },
    { time: '05:00 PM', available: true },
    { time: '06:00 PM', available: true },
    { time: '07:00 PM', available: true },
    { time: '08:00 PM', available: false },
    { time: '09:00 PM', available: true }
  ]

  const [formData, setFormData] = useState({
    selectedCourt: null,
    selectedDate: '',
    selectedTime: '',
    duration: 1,
    paymentMethod: 'gcash',
    gcashNumber: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
    agreeToTerms: false
  })

  const [errors, setErrors] = useState({})

  const handleCourtSelect = (court) => {
    setFormData({ ...formData, selectedCourt: court })
  }

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

  const validateStep = () => {
    const newErrors = {}

    if (step === 1 && !formData.selectedCourt) {
      newErrors.selectedCourt = 'Please select a court'
    }

    if (step === 2) {
      if (!formData.selectedDate) {
        newErrors.selectedDate = 'Please select a date'
      }
      if (!formData.selectedTime) {
        newErrors.selectedTime = 'Please select a time slot'
      }
    }

    if (step === 3) {
      if (formData.paymentMethod === 'gcash') {
        if (!formData.gcashNumber) {
          newErrors.gcashNumber = 'GCash number is required'
        } else if (!/^09\d{9}$/.test(formData.gcashNumber)) {
          newErrors.gcashNumber = 'Invalid GCash number format'
        }
      } else if (formData.paymentMethod === 'card') {
        if (!formData.cardNumber) {
          newErrors.cardNumber = 'Card number is required'
        }
        if (!formData.cardExpiry) {
          newErrors.cardExpiry = 'Expiry date is required'
        }
        if (!formData.cardCvv) {
          newErrors.cardCvv = 'CVV is required'
        }
      }
      if (!formData.agreeToTerms) {
        newErrors.agreeToTerms = 'You must agree to the terms'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep()) {
      if (step < 4) {
        setStep(step + 1)
      } else {
        handleSubmit()
      }
    }
  }

  const handleSubmit = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      navigate('/player/dashboard')
    }, 2000)
  }

  const totalPrice = formData.selectedCourt
    ? formData.selectedCourt.pricePerHour * formData.duration
    : 0

  const getTomorrowDate = () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split('T')[0]
  }

  const handleBackClick = () => {
    if (step === 1) {
      navigate('/player/dashboard')
    } else {
      setStep(step - 1)
    }
  }

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <PageHeader title="Book Court" onBackClick={handleBackClick} />

      <div className="max-w-md mx-auto p-4">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            {['Court', 'Date & Time', 'Payment', 'Confirm'].map((label, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${
                    step > index + 1
                      ? 'bg-green-600 text-white'
                      : step === index + 1
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-300 text-dark-text-secondary'
                  }`}
                >
                  {step > index + 1 ? <IoCheckmarkCircle /> : index + 1}
                </div>
                <span className="text-xs mt-1 text-dark-text-secondary">{label}</span>
              </div>
            ))}
          </div>
          <div className="w-full bg-dark-bg-hover rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{ width: `${(step / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step 1: Select Court */}
        {step === 1 && (
          <div className="space-y-4">
            <div className="bg-brand-primary/10 border border-blue-200 rounded-xl p-4 flex items-start space-x-3">
              <IoInformationCircle className="text-2xl text-brand-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-800 text-sm mb-1">Find Your Perfect Court</h3>
                <p className="text-xs text-blue-700">Browse available sports facilities and select the one that fits your needs.</p>
              </div>
            </div>

            {errors.selectedCourt && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
                {errors.selectedCourt}
              </div>
            )}

            {courts.map((court) => (
              <div
                key={court.id}
                onClick={() => handleCourtSelect(court)}
                className={`bg-dark-bg-tertiary rounded-xl shadow-sm p-4 cursor-pointer transition-all ${
                  formData.selectedCourt?.id === court.id
                    ? 'border-2 border-blue-600 ring-2 ring-blue-100'
                    : 'border-2 border-transparent hover:border-dark-border'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={court.image}
                    alt={court.name}
                    className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-dark-text">{court.name}</h3>
                        <div className="flex items-center text-sm text-dark-text-secondary mt-1">
                          <IoLocation className="mr-1 text-xs" />
                          <span>{court.location}</span>
                        </div>
                      </div>
                      <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                        {formData.selectedCourt?.id === court.id && (
                          <IoCheckmarkCircle className="text-2xl text-brand-primary" />
                        )}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex items-center text-sm">
                        <IoStar className="text-yellow-500 mr-1" />
                        <span className="font-medium">{court.rating}</span>
                        <span className="text-dark-text-muted ml-1">({court.reviews})</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-2">
                      {court.sports.map((sport, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                          {sport}
                        </span>
                      ))}
                    </div>

                    <div className="mt-3 pt-3 border-t border-dark-border space-y-2">
                      <div className="flex items-center text-sm text-dark-text-secondary">
                        <IoCash className="mr-1 text-brand-primary" />
                        <span className="font-semibold text-dark-text">₱{court.pricePerHour}/hour</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {court.facilities.slice(0, 3).map((facility, index) => (
                          <span key={index} className="text-xs text-dark-text-muted bg-dark-bg-secondary px-2 py-1 rounded">
                            {facility}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Step 2: Date & Time */}
        {step === 2 && (
          <div className="space-y-4">
            <div className="bg-dark-bg-tertiary rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-dark-text mb-4">Select Date & Time</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-dark-text mb-2">
                    <IoCalendar className="inline mr-2" />
                    Date
                  </label>
                  <input
                    type="date"
                    name="selectedDate"
                    value={formData.selectedDate}
                    onChange={handleChange}
                    min={getTomorrowDate()}
                    className={`w-full px-4 py-3 border ${
                      errors.selectedDate ? 'border-red-500' : 'border-dark-border'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary`}
                  />
                  {errors.selectedDate && (
                    <p className="mt-1 text-sm text-red-500">{errors.selectedDate}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-text mb-2">
                    <IoTime className="inline mr-2" />
                    Duration (hours)
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4].map((hours) => (
                      <button
                        key={hours}
                        type="button"
                        onClick={() => setFormData({ ...formData, duration: hours })}
                        className={`py-2 border-2 rounded-lg font-medium text-sm transition-all ${
                          formData.duration === hours
                            ? 'border-blue-600 bg-brand-primary/10 text-brand-primary'
                            : 'border-dark-border bg-dark-bg-tertiary text-dark-text hover:border-gray-400'
                        }`}
                      >
                        {hours}h
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-text mb-2">
                    Time Slot
                  </label>
                  <div className="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto">
                    {timeSlots.map((slot, index) => (
                      <button
                        key={index}
                        type="button"
                        disabled={!slot.available}
                        onClick={() => setFormData({ ...formData, selectedTime: slot.time })}
                        className={`py-2 px-3 border-2 rounded-lg font-medium text-sm transition-all ${
                          !slot.available
                            ? 'border-dark-border bg-dark-bg-secondary text-dark-text-muted cursor-not-allowed'
                            : formData.selectedTime === slot.time
                            ? 'border-blue-600 bg-brand-primary/10 text-brand-primary'
                            : 'border-dark-border bg-dark-bg-tertiary text-dark-text hover:border-gray-400'
                        }`}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>
                  {errors.selectedTime && (
                    <p className="mt-2 text-sm text-red-500">{errors.selectedTime}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-brand-primary/10 border border-blue-200 rounded-xl p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-blue-800 font-medium">Estimated Cost</p>
                  <p className="text-xs text-brand-primary mt-0.5">
                    {formData.selectedCourt?.pricePerHour}/hr × {formData.duration}hr
                  </p>
                </div>
                <p className="text-2xl font-bold text-brand-primary">₱{totalPrice.toLocaleString()}</p>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Payment */}
        {step === 3 && (
          <div className="space-y-4">
            <div className="bg-dark-bg-tertiary rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-dark-text mb-4">Payment Method</h2>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'gcash' })}
                    className={`p-4 border-2 rounded-lg font-medium text-sm transition-all ${
                      formData.paymentMethod === 'gcash'
                        ? 'border-blue-600 bg-brand-primary/10 text-brand-primary'
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
                        ? 'border-blue-600 bg-brand-primary/10 text-brand-primary'
                        : 'border-dark-border bg-dark-bg-tertiary text-dark-text'
                    }`}
                  >
                    <IoCard className="text-2xl mx-auto mb-2" />
                    Card
                  </button>
                </div>

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
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary`}
                      placeholder="09XX XXX XXXX"
                    />
                    {errors.gcashNumber && (
                      <p className="mt-1 text-sm text-red-500">{errors.gcashNumber}</p>
                    )}
                  </div>
                )}

                {formData.paymentMethod === 'card' && (
                  <>
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
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary`}
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
                          Expiry
                        </label>
                        <input
                          type="text"
                          name="cardExpiry"
                          value={formData.cardExpiry}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border ${
                            errors.cardExpiry ? 'border-red-500' : 'border-dark-border'
                          } rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary`}
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
                          } rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary`}
                          placeholder="123"
                          maxLength="4"
                        />
                        {errors.cardCvv && (
                          <p className="mt-1 text-sm text-red-500">{errors.cardCvv}</p>
                        )}
                      </div>
                    </div>
                  </>
                )}

                <div className="mt-4">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 text-brand-primary border-dark-border rounded focus:ring-brand-primary"
                    />
                    <span className="text-sm text-dark-text">
                      I agree to the booking{' '}
                      <button type="button" className="text-brand-primary hover:underline">
                        terms and conditions
                      </button>
                    </span>
                  </label>
                  {errors.agreeToTerms && (
                    <p className="mt-1 text-sm text-red-500">{errors.agreeToTerms}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Confirmation */}
        {step === 4 && (
          <div className="space-y-4">
            <div className="bg-dark-bg-tertiary rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-dark-text mb-4">Review Booking</h2>

              <div className="space-y-4">
                <div className="bg-dark-bg rounded-lg p-4">
                  <h3 className="font-semibold text-dark-text text-sm mb-2">Court</h3>
                  <p className="text-dark-text font-medium">{formData.selectedCourt?.name}</p>
                  <div className="flex items-center text-sm text-dark-text-secondary mt-1">
                    <IoLocation className="mr-1" />
                    <span>{formData.selectedCourt?.location}</span>
                  </div>
                </div>

                <div className="bg-dark-bg rounded-lg p-4">
                  <h3 className="font-semibold text-dark-text text-sm mb-2">Date & Time</h3>
                  <div className="flex items-center text-dark-text mb-1">
                    <IoCalendar className="mr-2 text-brand-primary" />
                    <span>{new Date(formData.selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center text-dark-text">
                    <IoTime className="mr-2 text-brand-primary" />
                    <span>{formData.selectedTime} ({formData.duration} hour{formData.duration > 1 ? 's' : ''})</span>
                  </div>
                </div>

                <div className="bg-dark-bg rounded-lg p-4">
                  <h3 className="font-semibold text-dark-text text-sm mb-2">Payment</h3>
                  <p className="text-dark-text capitalize">{formData.paymentMethod}</p>
                  <p className="text-sm text-dark-text-secondary mt-1">
                    {formData.paymentMethod === 'gcash'
                      ? formData.gcashNumber
                      : `**** **** **** ${formData.cardNumber.slice(-4)}`}
                  </p>
                </div>

                <div className="border-t border-dark-border pt-4">
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total Amount</span>
                    <span className="text-brand-primary">₱{totalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start space-x-3">
              <IoInformationCircle className="text-2xl text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-yellow-800 text-sm mb-1">Cancellation Policy</h3>
                <p className="text-xs text-yellow-700">Free cancellation up to 24 hours before booking. After that, a 50% cancellation fee applies.</p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex space-x-3 mt-6">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              disabled={isLoading}
              className="flex-1 py-3 bg-dark-bg-hover hover:bg-gray-300 text-dark-text rounded-lg font-semibold transition-colors"
            >
              Back
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={isLoading}
            className={`flex-1 py-3 bg-brand-primary hover:bg-brand-primary-light text-white rounded-lg font-semibold transition-colors flex items-center justify-center ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? (
              'Processing...'
            ) : step === 4 ? (
              <>
                <IoCheckmarkCircle className="mr-2" />
                Confirm Booking
              </>
            ) : (
              <>
                Continue
                <IoChevronForward className="ml-2" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlayerBookCourt
