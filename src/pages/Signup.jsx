import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoMail, IoLockClosed, IoEye, IoEyeOff, IoArrowBack, IoPerson, IoCall, IoBasketball, IoCheckmarkCircle } from 'react-icons/io5'

const Signup = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    sport: '',
    skillLevel: '',
    agreeToTerms: false
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const sports = ['Pickleball', 'Basketball', 'Volleyball', 'Badminton', 'Football', 'Tennis', 'Table Tennis', 'Sepak Takraw', 'Other']
  const skillLevels = ['Beginner', 'Intermediate', 'Advanced', 'Professional']

  const validateForm = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters'
    }

    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (formData.phone && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    if (!formData.sport) {
      newErrors.sport = 'Please select your primary sport'
    }

    if (!formData.skillLevel) {
      newErrors.skillLevel = 'Please select your skill level'
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // For now, navigate to login after successful signup
      navigate('/login')
    }, 1500)
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  return (
    <div className="min-h-screen bg-dark-bg flex flex-col">
      {/* Header */}
      <div className="bg-dark-bg-tertiary shadow-sm">
        <div className="max-w-lg mx-auto px-4 py-4 flex items-center">
          <button onClick={() => navigate('/login')} className="p-2 hover:bg-dark-bg-hover rounded-full">
            <IoArrowBack className="text-xl text-dark-text" />
          </button>
          <img
            src="/images/SPORTIFY-PH-LOGO.png"
            alt="Sportify PH Logo"
            className="h-8 w-auto"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-lg">
          <div className="bg-dark-bg-tertiary rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-dark-text mb-2">Create Account</h2>
              <p className="text-dark-text-secondary text-sm">Join the Filipino sports community</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name Field */}
              <div>
                <label className="block text-sm font-medium text-dark-text mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <IoPerson className="text-dark-text-muted" />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 bg-dark-bg-secondary border ${
                      errors.fullName ? 'border-red-500' : 'border-dark-border'
                    } rounded-lg text-dark-text focus:outline-none focus:ring-2 focus:ring-brand-primary`}
                    placeholder="Juan Dela Cruz"
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-dark-text mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <IoMail className="text-dark-text-muted" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 bg-dark-bg-secondary border ${
                      errors.email ? 'border-red-500' : 'border-dark-border'
                    } rounded-lg text-dark-text focus:outline-none focus:ring-2 focus:ring-brand-primary`}
                    placeholder="juan@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Phone Field (Optional) */}
              <div>
                <label className="block text-sm font-medium text-dark-text mb-2">
                  Phone Number <span className="text-dark-text-muted text-xs">(Optional)</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <IoCall className="text-dark-text-muted" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 bg-dark-bg-secondary border ${
                      errors.phone ? 'border-red-500' : 'border-dark-border'
                    } rounded-lg text-dark-text focus:outline-none focus:ring-2 focus:ring-brand-primary`}
                    placeholder="+63 912 345 6789"
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                )}
              </div>

              {/* Sport Selection */}
              <div>
                <label className="block text-sm font-medium text-dark-text mb-2">
                  Primary Sport
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <IoBasketball className="text-dark-text-muted" />
                  </div>
                  <select
                    name="sport"
                    value={formData.sport}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 bg-dark-bg-secondary border ${
                      errors.sport ? 'border-red-500' : 'border-dark-border'
                    } rounded-lg text-dark-text focus:outline-none focus:ring-2 focus:ring-brand-primary`}
                  >
                    <option value="">Select your sport</option>
                    {sports.map((sport) => (
                      <option key={sport} value={sport}>
                        {sport}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.sport && (
                  <p className="mt-1 text-sm text-red-500">{errors.sport}</p>
                )}
              </div>

              {/* Skill Level Selection */}
              <div>
                <label className="block text-sm font-medium text-dark-text mb-2">
                  Skill Level
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {skillLevels.map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, skillLevel: level })
                        if (errors.skillLevel) {
                          setErrors({ ...errors, skillLevel: '' })
                        }
                      }}
                      className={`py-2 px-4 rounded-lg border-2 font-medium text-sm transition-all ${
                        formData.skillLevel === level
                          ? 'border-brand-primary bg-brand-primary/10 text-brand-primary'
                          : 'border-dark-border bg-dark-bg-secondary text-dark-text hover:border-dark-text-secondary'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
                {errors.skillLevel && (
                  <p className="mt-1 text-sm text-red-500">{errors.skillLevel}</p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-dark-text mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <IoLockClosed className="text-dark-text-muted" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-12 py-3 bg-dark-bg-secondary border ${
                      errors.password ? 'border-red-500' : 'border-dark-border'
                    } rounded-lg text-dark-text focus:outline-none focus:ring-2 focus:ring-brand-primary`}
                    placeholder="Create a password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <IoEyeOff className="text-dark-text-muted hover:text-dark-text-secondary" />
                    ) : (
                      <IoEye className="text-dark-text-muted hover:text-dark-text-secondary" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password Field */}
              <div>
                <label className="block text-sm font-medium text-dark-text mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <IoLockClosed className="text-dark-text-muted" />
                  </div>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-12 py-3 bg-dark-bg-secondary border ${
                      errors.confirmPassword ? 'border-red-500' : 'border-dark-border'
                    } rounded-lg text-dark-text focus:outline-none focus:ring-2 focus:ring-brand-primary`}
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showConfirmPassword ? (
                      <IoEyeOff className="text-dark-text-muted hover:text-dark-text-secondary" />
                    ) : (
                      <IoEye className="text-dark-text-muted hover:text-dark-text-secondary" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>
                )}
              </div>

              {/* Terms & Conditions */}
              <div>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-brand-primary border-dark-border rounded focus:ring-brand-primary"
                  />
                  <span className="text-sm text-dark-text">
                    I agree to the{' '}
                    <button type="button" className="text-brand-primary hover:underline font-medium">
                      Terms & Conditions
                    </button>{' '}
                    and{' '}
                    <button type="button" className="text-brand-primary hover:underline font-medium">
                      Privacy Policy
                    </button>
                  </span>
                </label>
                {errors.agreeToTerms && (
                  <p className="mt-1 text-sm text-red-500">{errors.agreeToTerms}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-brand-primary hover:bg-brand-primary-light text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? (
                  'Creating Account...'
                ) : (
                  <>
                    <IoCheckmarkCircle className="mr-2" />
                    Create Account
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="mt-6 mb-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-dark-border"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-dark-bg-tertiary text-dark-text-muted">Or sign up with</span>
                </div>
              </div>
            </div>

            {/* Social Signup */}
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center px-4 py-3 border border-dark-border rounded-lg hover:bg-dark-bg-hover transition-colors">
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium text-dark-text">Google</span>
              </button>
              <button className="flex items-center justify-center px-4 py-3 border border-dark-border rounded-lg hover:bg-dark-bg-hover transition-colors">
                <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium text-dark-text">Facebook</span>
              </button>
            </div>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-dark-text-secondary">
                Already have an account?{' '}
                <button
                  onClick={() => navigate('/login')}
                  className="text-brand-primary font-semibold hover:underline"
                >
                  Sign In
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
