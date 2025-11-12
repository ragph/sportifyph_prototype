import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  IoFitness,
  IoCalendar,
  IoTime,
  IoLocation,
  IoCash,
  IoCheckmarkCircle,
  IoCard,
  IoWallet,
  IoInformationCircle,
  IoStar,
  IoPeople,
  IoTrophy,
  IoChevronForward
} from 'react-icons/io5'
import PageHeader from '../../components/PageHeader'

const PlayerBookTraining = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState(1) // 1: Select Coach, 2: Select Session, 3: Payment, 4: Confirm
  const [isLoading, setIsLoading] = useState(false)

  const coaches = [
    {
      id: 1,
      name: 'Coach Mike Santos',
      specialization: 'Pickleball',
      rating: 4.9,
      reviews: 127,
      experience: '10+ years',
      students: 45,
      pricePerSession: 500,
      location: 'Matina, Davao City',
      bio: 'Professional pickleball coach with extensive tournament experience. Specializes in advanced shot techniques and strategic gameplay.',
      achievements: ['USAPA Certified Pro', 'PPR Certified Coach'],
      image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'Coach Ana Lopez',
      specialization: 'Pickleball',
      rating: 4.8,
      reviews: 89,
      experience: '8+ years',
      students: 38,
      pricePerSession: 450,
      location: 'Ecoland, Davao City',
      bio: 'Former national athlete with passion for developing young talent. Focus on fundamentals and tournament preparation.',
      achievements: ['Level 4.5+ Player', 'Youth Development Specialist'],
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'Coach Rico Fernandez',
      specialization: 'Pickleball',
      rating: 4.7,
      reviews: 65,
      experience: '6+ years',
      students: 32,
      pricePerSession: 400,
      location: 'Damosa, Davao City',
      bio: 'Specialized in youth development and skill enhancement. Known for personalized training programs and patient teaching style.',
      achievements: ['Certified Instructor', 'Skills Training Certified'],
      image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&h=400&fit=crop'
    }
  ]

  const sessionTypes = [
    { id: 'individual', name: 'Individual Session', duration: '1 hour', multiplier: 1 },
    { id: 'group', name: 'Group Session (2-5)', duration: '1.5 hours', multiplier: 1.5 },
    { id: 'intensive', name: 'Intensive Training', duration: '2 hours', multiplier: 2 }
  ]

  const timeSlots = [
    { time: '06:00 AM', available: true },
    { time: '07:00 AM', available: true },
    { time: '08:00 AM', available: false },
    { time: '09:00 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '02:00 PM', available: true },
    { time: '03:00 PM', available: true },
    { time: '04:00 PM', available: false },
    { time: '05:00 PM', available: true },
    { time: '06:00 PM', available: true },
    { time: '07:00 PM', available: true },
    { time: '08:00 PM', available: false }
  ]

  const [formData, setFormData] = useState({
    selectedCoach: null,
    sessionType: 'individual',
    selectedDate: '',
    selectedTime: '',
    notes: '',
    paymentMethod: 'gcash',
    gcashNumber: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
    agreeToTerms: false
  })

  const [errors, setErrors] = useState({})

  const handleCoachSelect = (coach) => {
    setFormData({ ...formData, selectedCoach: coach })
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

    if (step === 1 && !formData.selectedCoach) {
      newErrors.selectedCoach = 'Please select a coach'
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

  const getTotalPrice = () => {
    if (!formData.selectedCoach) return 0
    const session = sessionTypes.find(s => s.id === formData.sessionType)
    return formData.selectedCoach.pricePerSession * session.multiplier
  }

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
      <PageHeader title="Book Training" onBackClick={handleBackClick} />

      <div className="max-w-lg mx-auto p-4">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            {['Coach', 'Session', 'Payment', 'Confirm'].map((label, index) => (
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

        {/* Step 1: Select Coach */}
        {step === 1 && (
          <div className="space-y-4">
            <div className="bg-brand-primary/10 border border-green-200 rounded-xl p-4 flex items-start space-x-3">
              <IoInformationCircle className="text-2xl text-brand-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-green-800 text-sm mb-1">Find Your Perfect Coach</h3>
                <p className="text-xs text-green-700">Browse certified coaches and select one that matches your goals and skill level.</p>
              </div>
            </div>

            {errors.selectedCoach && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
                {errors.selectedCoach}
              </div>
            )}

            {coaches.map((coach) => (
              <div
                key={coach.id}
                onClick={() => handleCoachSelect(coach)}
                className={`bg-dark-bg-tertiary rounded-xl shadow-sm p-4 cursor-pointer transition-all ${
                  formData.selectedCoach?.id === coach.id
                    ? 'border-2 border-blue-600 ring-2 ring-blue-100'
                    : 'border-2 border-transparent hover:border-dark-border'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-dark-text">{coach.name}</h3>
                        <p className="text-sm text-brand-primary font-medium">{coach.specialization}</p>
                        <div className="flex items-center text-sm text-dark-text-secondary mt-1">
                          <IoLocation className="mr-1 text-xs" />
                          <span>{coach.location}</span>
                        </div>
                      </div>
                      <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                        {formData.selectedCoach?.id === coach.id && (
                          <IoCheckmarkCircle className="text-2xl text-brand-primary" />
                        )}
                      </div>
                    </div>

                    <p className="text-xs text-dark-text-secondary mb-2">{coach.bio}</p>

                    <div className="flex items-center space-x-3 mb-2 text-sm">
                      <div className="flex items-center">
                        <IoStar className="text-yellow-500 mr-1" />
                        <span className="font-medium">{coach.rating}</span>
                        <span className="text-dark-text-muted ml-1">({coach.reviews})</span>
                      </div>
                      <div className="flex items-center text-dark-text-secondary">
                        <IoPeople className="mr-1" />
                        <span>{coach.students} students</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {coach.achievements.map((achievement, index) => (
                        <span key={index} className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs flex items-center">
                          <IoTrophy className="mr-1 text-xs" />
                          {achievement}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-dark-border">
                      <div className="text-sm text-dark-text-secondary">
                        <span className="font-medium">{coach.experience}</span> experience
                      </div>
                      <div className="flex items-center text-sm">
                        <IoCash className="mr-1 text-brand-primary" />
                        <span className="font-semibold text-dark-text">₱{coach.pricePerSession}/session</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Step 2: Select Session */}
        {step === 2 && (
          <div className="space-y-4">
            <div className="bg-dark-bg-tertiary rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-dark-text mb-4">Session Details</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-dark-text mb-2">
                    Session Type
                  </label>
                  <div className="space-y-2">
                    {sessionTypes.map((session) => (
                      <button
                        key={session.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, sessionType: session.id })}
                        className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                          formData.sessionType === session.id
                            ? 'border-blue-600 bg-brand-primary/10'
                            : 'border-dark-border bg-dark-bg-tertiary hover:border-gray-400'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <p className={`font-medium ${
                              formData.sessionType === session.id ? 'text-brand-primary' : 'text-dark-text'
                            }`}>
                              {session.name}
                            </p>
                            <p className="text-sm text-dark-text-secondary">{session.duration}</p>
                          </div>
                          <div className="text-right">
                            <p className={`font-semibold ${
                              formData.sessionType === session.id ? 'text-brand-primary' : 'text-dark-text'
                            }`}>
                              ₱{formData.selectedCoach ? (formData.selectedCoach.pricePerSession * session.multiplier).toLocaleString() : 0}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-text mb-2">
                    <IoCalendar className="inline mr-2" />
                    Preferred Date
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

                <div>
                  <label className="block text-sm font-medium text-dark-text mb-2">
                    Special Notes (Optional)
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary resize-none"
                    placeholder="Any specific areas you want to focus on or questions for the coach..."
                  />
                </div>
              </div>
            </div>

            <div className="bg-brand-primary/10 border border-blue-200 rounded-xl p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-blue-800 font-medium">Total Cost</p>
                  <p className="text-xs text-brand-primary mt-0.5">
                    {sessionTypes.find(s => s.id === formData.sessionType)?.name}
                  </p>
                </div>
                <p className="text-2xl font-bold text-brand-primary">₱{getTotalPrice().toLocaleString()}</p>
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
                      I agree to the training session{' '}
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
                  <h3 className="font-semibold text-dark-text text-sm mb-2">Coach</h3>
                  <p className="text-dark-text font-medium">{formData.selectedCoach?.name}</p>
                  <p className="text-sm text-brand-primary">{formData.selectedCoach?.specialization}</p>
                  <div className="flex items-center text-sm text-dark-text-secondary mt-1">
                    <IoLocation className="mr-1" />
                    <span>{formData.selectedCoach?.location}</span>
                  </div>
                </div>

                <div className="bg-dark-bg rounded-lg p-4">
                  <h3 className="font-semibold text-dark-text text-sm mb-2">Session Details</h3>
                  <p className="text-dark-text mb-2">
                    {sessionTypes.find(s => s.id === formData.sessionType)?.name}
                  </p>
                  <div className="flex items-center text-dark-text mb-1">
                    <IoCalendar className="mr-2 text-brand-primary" />
                    <span>{new Date(formData.selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center text-dark-text mb-2">
                    <IoTime className="mr-2 text-brand-primary" />
                    <span>{formData.selectedTime}</span>
                  </div>
                  {formData.notes && (
                    <div className="mt-2 pt-2 border-t border-dark-border">
                      <p className="text-xs text-dark-text-secondary mb-1">Special Notes:</p>
                      <p className="text-sm text-dark-text">{formData.notes}</p>
                    </div>
                  )}
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
                    <span className="text-brand-primary">₱{getTotalPrice().toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start space-x-3">
              <IoInformationCircle className="text-2xl text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-yellow-800 text-sm mb-1">Cancellation Policy</h3>
                <p className="text-xs text-yellow-700">Free cancellation up to 48 hours before the session. Late cancellations may incur a fee.</p>
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

export default PlayerBookTraining
