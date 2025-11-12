import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoMail, IoLockClosed, IoEye, IoEyeOff, IoArrowBack } from 'react-icons/io5'

const Login = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
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

      // Get the selected role from sessionStorage
      const roleRoute = sessionStorage.getItem('roleRoute')

      // Navigate to the appropriate dashboard based on selected role
      if (roleRoute) {
        navigate(roleRoute)
      } else {
        // Default to player dashboard if no role was selected
        navigate('/player/dashboard')
      }
    }, 1500)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      })
    }
  }

  return (
    <div className="min-h-screen bg-dark-bg flex flex-col">
      {/* Header */}
      <div className="bg-dark-bg-tertiary border-b border-dark-border">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center">
          <button onClick={() => navigate('/')} className="p-2 hover:bg-dark-bg-hover rounded-full">
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
        <div className="w-full max-w-md">
          <div className="bg-dark-bg-tertiary rounded-2xl shadow-sm p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-dark-text mb-2">Welcome Back!</h2>
              <p className="text-dark-text-secondary text-sm">Sign in to continue to Sportify PH</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
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
                    placeholder="Enter your password"
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

              {/* Forgot Password */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => navigate('/forgot-password')}
                  className="text-sm text-brand-primary hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-brand-primary hover:bg-brand-primary-light text-white font-semibold py-3 rounded-lg transition-colors ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>

            {/* Divider */}
            <div className="mt-6 mb-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-dark-border"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-dark-bg-tertiary text-dark-text-muted">Or continue with</span>
                </div>
              </div>
            </div>

            {/* Social Login */}
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

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-dark-text-secondary">
                Don't have an account?{' '}
                <button
                  onClick={() => navigate('/signup')}
                  className="text-brand-primary font-semibold hover:underline"
                >
                  Sign Up
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
