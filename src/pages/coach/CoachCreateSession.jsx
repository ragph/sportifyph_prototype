import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  IoCalendar,
  IoTime,
  IoPeople,
  IoCash,
  IoLocation,
  IoInformationCircle,
  IoCheckmarkCircle,
  IoArrowBack
} from 'react-icons/io5'
import PageHeader from '../../components/PageHeader'

const CoachCreateSession = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const [formData, setFormData] = useState({
    sessionType: 'individual',
    date: '',
    timeSlot: '',
    duration: '1',
    location: '',
    maxStudents: '1',
    price: '',
    notes: '',
    skill: 'all'
  })

  const [errors, setErrors] = useState({})

  const sessionTypes = [
    { id: 'individual', label: 'Individual', icon: IoPeople, defaultStudents: '1' },
    { id: 'group', label: 'Group (2-5)', icon: IoPeople, defaultStudents: '5' },
    { id: 'intensive', label: 'Intensive', icon: IoPeople, defaultStudents: '1' }
  ]

  const durations = [
    { value: '1', label: '1 hour' },
    { value: '1.5', label: '1.5 hours' },
    { value: '2', label: '2 hours' },
    { value: '2.5', label: '2.5 hours' },
    { value: '3', label: '3 hours' }
  ]

  const skillLevels = [
    { value: 'all', label: 'All Levels' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' }
  ]

  const timeSlots = [
    '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
    '06:00 PM', '07:00 PM', '08:00 PM'
  ]

  const handleSessionTypeChange = (type) => {
    const selectedType = sessionTypes.find(t => t.id === type)
    setFormData({
      ...formData,
      sessionType: type,
      maxStudents: selectedType.defaultStudents
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.date) newErrors.date = 'Please select a date'
    if (!formData.timeSlot) newErrors.timeSlot = 'Please select a time slot'
    if (!formData.location) newErrors.location = 'Please enter a location'
    if (!formData.price || formData.price <= 0) newErrors.price = 'Please enter a valid price'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Navigate back to sessions page
      navigate('/coach/sessions')
    }, 1500)
  }

  // Get minimum date (today)
  const getMinDate = () => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <div className="max-w-md mx-auto">
        <PageHeader title="Create Session" module="coach" />

        <div className="p-4 space-y-6">
          {/* Info Banner */}
          <div className="bg-brand-primary/10 border border-green-200 rounded-xl p-4 flex items-start space-x-3">
            <IoInformationCircle className="text-brand-primary text-xl flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-green-900 text-sm">Create a New Session</h3>
              <p className="text-xs text-green-700 mt-1">
                Set up your availability and students can book sessions with you directly.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Session Type */}
            <div>
              <label className="block text-sm font-semibold text-dark-text mb-3">
                Session Type
              </label>
              <div className="grid grid-cols-3 gap-3">
                {sessionTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => handleSessionTypeChange(type.id)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      formData.sessionType === type.id
                        ? 'border-green-600 bg-brand-primary/10'
                        : 'border-dark-border bg-dark-bg-tertiary hover:border-green-300'
                    }`}
                  >
                    <type.icon className={`text-2xl mx-auto mb-2 ${
                      formData.sessionType === type.id ? 'text-brand-primary' : 'text-dark-text-muted'
                    }`} />
                    <p className={`text-xs font-medium ${
                      formData.sessionType === type.id ? 'text-green-900' : 'text-dark-text'
                    }`}>
                      {type.label}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-dark-text mb-2">
                  <IoCalendar className="inline mr-1" />
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={getMinDate()}
                  className={`w-full px-4 py-3 border ${
                    errors.date ? 'border-red-500' : 'border-dark-border'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
                />
                {errors.date && (
                  <p className="mt-1 text-xs text-red-500">{errors.date}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-dark-text mb-2">
                  Duration
                </label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  {durations.map((duration) => (
                    <option key={duration.value} value={duration.value}>
                      {duration.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Time Slot */}
            <div>
              <label className="block text-sm font-semibold text-dark-text mb-2">
                <IoTime className="inline mr-1" />
                Time Slot
              </label>
              <select
                name="timeSlot"
                value={formData.timeSlot}
                onChange={handleChange}
                className={`w-full px-4 py-3 border ${
                  errors.timeSlot ? 'border-red-500' : 'border-dark-border'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
              >
                <option value="">Select time</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
              {errors.timeSlot && (
                <p className="mt-1 text-xs text-red-500">{errors.timeSlot}</p>
              )}
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-semibold text-dark-text mb-2">
                <IoLocation className="inline mr-1" />
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g., Elite Sports Center, Makati"
                className={`w-full px-4 py-3 border ${
                  errors.location ? 'border-red-500' : 'border-dark-border'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
              />
              {errors.location && (
                <p className="mt-1 text-xs text-red-500">{errors.location}</p>
              )}
            </div>

            {/* Max Students and Price */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-dark-text mb-2">
                  <IoPeople className="inline mr-1" />
                  Max Students
                </label>
                <input
                  type="number"
                  name="maxStudents"
                  value={formData.maxStudents}
                  onChange={handleChange}
                  min="1"
                  max={formData.sessionType === 'group' ? '5' : '10'}
                  className="w-full px-4 py-3 border border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-dark-text mb-2">
                  <IoCash className="inline mr-1" />
                  Price (₱)
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="500"
                  min="0"
                  step="50"
                  className={`w-full px-4 py-3 border ${
                    errors.price ? 'border-red-500' : 'border-dark-border'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
                />
                {errors.price && (
                  <p className="mt-1 text-xs text-red-500">{errors.price}</p>
                )}
              </div>
            </div>

            {/* Skill Level */}
            <div>
              <label className="block text-sm font-semibold text-dark-text mb-2">
                Skill Level
              </label>
              <select
                name="skill"
                value={formData.skill}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {skillLevels.map((level) => (
                  <option key={level.value} value={level.value}>
                    {level.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-semibold text-dark-text mb-2">
                Additional Notes (Optional)
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows="4"
                placeholder="Add any special instructions or requirements for this session..."
                className="w-full px-4 py-3 border border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3 pt-4">
              <button
                type="button"
                onClick={() => navigate('/coach/sessions')}
                className="flex-1 px-6 py-3 border-2 border-dark-border text-dark-text font-semibold rounded-lg hover:bg-dark-bg transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className={`flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center space-x-2 ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Creating...</span>
                  </>
                ) : (
                  <>
                    <IoCheckmarkCircle className="text-xl" />
                    <span>Create Session</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CoachCreateSession
