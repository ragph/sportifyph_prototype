import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  IoTrophy,
  IoCalendar,
  IoLocation,
  IoPeople,
  IoCash,
  IoCheckmarkCircle,
  IoCard,
  IoWallet,
  IoInformationCircle,
  IoChevronForward
} from 'react-icons/io5'
import PageHeader from '../../components/PageHeader'

const PlayerJoinTournament = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState(1) // 1: Details, 2: Team, 3: Payment, 4: Confirm
  const [isLoading, setIsLoading] = useState(false)

  // Tournament data (would come from props/route params in real app)
  const tournament = {
    id: 1,
    name: 'Davao Open Pickleball Championship',
    date: 'November 15-20, 2024',
    location: 'Davao Sports Complex',
    category: 'Doubles Pickleball',
    skill: 'Intermediate',
    slots: 32,
    slotsLeft: 8,
    fee: 800,
    prizePool: 75000,
    description: 'Join the premier pickleball tournament in Davao City. Compete with skilled doubles teams for cash prizes and championship glory!',
    image: '/images/tournaments/tournament (1).jpg'
  }

  const [formData, setFormData] = useState({
    teamType: 'solo', // solo or team
    teamName: '',
    teamMembers: [''],
    paymentMethod: 'gcash',
    gcashNumber: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
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

  const addTeamMember = () => {
    setFormData({
      ...formData,
      teamMembers: [...formData.teamMembers, '']
    })
  }

  const updateTeamMember = (index, value) => {
    const newMembers = [...formData.teamMembers]
    newMembers[index] = value
    setFormData({
      ...formData,
      teamMembers: newMembers
    })
  }

  const removeTeamMember = (index) => {
    setFormData({
      ...formData,
      teamMembers: formData.teamMembers.filter((_, i) => i !== index)
    })
  }

  const validateStep = () => {
    const newErrors = {}

    if (step === 2 && formData.teamType === 'team') {
      if (!formData.teamName.trim()) {
        newErrors.teamName = 'Team name is required'
      }
      if (formData.teamMembers.some(m => !m.trim())) {
        newErrors.teamMembers = 'All team member names are required'
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
    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false)
      // Navigate to success page or tournaments page
      navigate('/player/tournaments')
    }, 2000)
  }

  const handleBackClick = () => {
    if (step === 1) {
      navigate('/player/tournaments')
    } else {
      setStep(step - 1)
    }
  }

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <PageHeader title="Join Tournament" onBackClick={handleBackClick} />

      <div className="max-w-lg mx-auto p-4">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            {['Details', 'Team', 'Payment', 'Confirm'].map((label, index) => (
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

        {/* Step 1: Tournament Details */}
        {step === 1 && (
          <div className="space-y-4">
            <div className="bg-dark-bg-tertiary rounded-xl shadow-sm overflow-hidden">
              {/* Tournament Image */}
              <img
                src={tournament.image}
                alt={tournament.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <IoTrophy className="text-2xl text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-dark-text">{tournament.name}</h2>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                        {tournament.category}
                      </span>
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-medium">
                        {tournament.skill}
                      </span>
                    </div>
                  </div>
                </div>

              <div className="space-y-3">
                <div className="flex items-center text-sm text-dark-text-secondary">
                  <IoCalendar className="mr-3 text-dark-text-muted" />
                  <span>{tournament.date}</span>
                </div>
                <div className="flex items-center text-sm text-dark-text-secondary">
                  <IoLocation className="mr-3 text-dark-text-muted" />
                  <span>{tournament.location}</span>
                </div>
                <div className="flex items-center text-sm text-dark-text-secondary">
                  <IoPeople className="mr-3 text-dark-text-muted" />
                  <span>{tournament.slotsLeft} of {tournament.slots} slots available</span>
                </div>
                <div className="flex items-center text-sm text-dark-text-secondary">
                  <IoCash className="mr-3 text-dark-text-muted" />
                  <span className="font-semibold">₱{tournament.fee.toLocaleString()} registration fee</span>
                </div>
                <div className="flex items-center text-sm text-dark-text-secondary">
                  <IoTrophy className="mr-3 text-dark-text-muted" />
                  <span>Prize Pool: ₱{tournament.prizePool.toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-4 p-4 bg-brand-primary/10 rounded-lg">
                <p className="text-sm text-dark-text">{tournament.description}</p>
              </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start space-x-3">
              <IoInformationCircle className="text-2xl text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-yellow-800 text-sm mb-1">Important Information</h3>
                <ul className="text-xs text-yellow-700 space-y-1">
                  <li>• Registration fee is non-refundable</li>
                  <li>• All team members must be registered</li>
                  <li>• Payment must be completed within 24 hours</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Team Selection */}
        {step === 2 && (
          <div className="space-y-4">
            <div className="bg-dark-bg-tertiary rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-dark-text mb-4">Team Information</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-dark-text mb-3">
                    Registration Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, teamType: 'solo' })}
                      className={`p-4 border-2 rounded-lg font-medium text-sm transition-all ${
                        formData.teamType === 'solo'
                          ? 'border-blue-600 bg-brand-primary/10 text-brand-primary'
                          : 'border-dark-border bg-dark-bg-tertiary text-dark-text hover:border-gray-400'
                      }`}
                    >
                      Solo/Individual
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, teamType: 'team' })}
                      className={`p-4 border-2 rounded-lg font-medium text-sm transition-all ${
                        formData.teamType === 'team'
                          ? 'border-blue-600 bg-brand-primary/10 text-brand-primary'
                          : 'border-dark-border bg-dark-bg-tertiary text-dark-text hover:border-gray-400'
                      }`}
                    >
                      Team
                    </button>
                  </div>
                </div>

                {formData.teamType === 'team' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-dark-text mb-2">
                        Team Name
                      </label>
                      <input
                        type="text"
                        name="teamName"
                        value={formData.teamName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border ${
                          errors.teamName ? 'border-red-500' : 'border-dark-border'
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary`}
                        placeholder="Enter team name"
                      />
                      {errors.teamName && (
                        <p className="mt-1 text-sm text-red-500">{errors.teamName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark-text mb-2">
                        Team Members
                      </label>
                      {formData.teamMembers.map((member, index) => (
                        <div key={index} className="flex items-center space-x-2 mb-2">
                          <input
                            type="text"
                            value={member}
                            onChange={(e) => updateTeamMember(index, e.target.value)}
                            className="flex-1 px-4 py-3 border border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
                            placeholder={`Member ${index + 1} name`}
                          />
                          {formData.teamMembers.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeTeamMember(index)}
                              className="px-3 py-2 bg-red-100 text-brand-primary rounded-lg hover:bg-red-200"
                            >
                              Remove
                            </button>
                          )}
                        </div>
                      ))}
                      {errors.teamMembers && (
                        <p className="mt-1 text-sm text-red-500">{errors.teamMembers}</p>
                      )}
                      {formData.teamMembers.length < 5 && (
                        <button
                          type="button"
                          onClick={addTeamMember}
                          className="mt-2 w-full py-2 border-2 border-dashed border-dark-border rounded-lg text-dark-text-secondary hover:border-blue-500 hover:text-brand-primary transition-colors"
                        >
                          + Add Team Member
                        </button>
                      )}
                    </div>
                  </>
                )}
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
                          Expiry Date
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
                      I agree to the tournament{' '}
                      <button type="button" className="text-brand-primary hover:underline">
                        terms and conditions
                      </button>
                      {' '}and{' '}
                      <button type="button" className="text-brand-primary hover:underline">
                        refund policy
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
              <h2 className="text-lg font-semibold text-dark-text mb-4">Review & Confirm</h2>

              <div className="space-y-4">
                <div className="bg-dark-bg rounded-lg p-4">
                  <h3 className="font-semibold text-dark-text text-sm mb-2">Tournament</h3>
                  <p className="text-dark-text">{tournament.name}</p>
                  <p className="text-sm text-dark-text-secondary mt-1">{tournament.date}</p>
                </div>

                <div className="bg-dark-bg rounded-lg p-4">
                  <h3 className="font-semibold text-dark-text text-sm mb-2">Registration</h3>
                  {formData.teamType === 'solo' ? (
                    <p className="text-dark-text">Solo/Individual</p>
                  ) : (
                    <>
                      <p className="text-dark-text">{formData.teamName}</p>
                      <p className="text-sm text-dark-text-secondary mt-1">
                        {formData.teamMembers.length} members
                      </p>
                    </>
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
                    <span className="text-brand-primary">₱{tournament.fee.toLocaleString()}</span>
                  </div>
                </div>
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
                Complete Payment
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

export default PlayerJoinTournament
