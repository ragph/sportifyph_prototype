import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoPerson, IoMail, IoCall, IoLocationSharp, IoFitness, IoCamera, IoSave, IoCash, IoText, IoBriefcase } from 'react-icons/io5'
import PageHeader from '../../components/PageHeader'

const CoachEditProfile = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [profileImage, setProfileImage] = useState(null)
  const [formData, setFormData] = useState({
    fullName: 'Coach Mike Santos',
    email: 'mike.santos@gmail.com',
    phone: '+63 912 345 6789',
    location: 'Quezon City, Philippines',
    specialization: 'Pickleball',
    experience: '8',
    certification: 'USAPA Certified Pickleball Coach',
    hourlyRate: '1500',
    bio: 'Experienced pickleball coach with 8 years of professional coaching experience. Specializing in youth development, skill enhancement, and competitive tournament preparation.'
  })
  const [errors, setErrors] = useState({})

  const sports = ['Pickleball', 'Basketball', 'Volleyball', 'Badminton', 'Football', 'Tennis', 'Table Tennis', 'Boxing', 'Other']

  const validateForm = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (formData.phone && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid'
    }

    if (formData.experience && !/^\d+$/.test(formData.experience)) {
      newErrors.experience = 'Experience must be a number'
    }

    if (formData.hourlyRate && !/^\d+$/.test(formData.hourlyRate)) {
      newErrors.hourlyRate = 'Hourly rate must be a number'
    }

    if (formData.bio && formData.bio.length > 500) {
      newErrors.bio = 'Bio must be less than 500 characters'
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
      // Navigate back to profile
      navigate('/coach/profile')
    }, 1500)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfileImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <PageHeader title="Edit Profile" backPath="/coach/profile" />

      <div className="max-w-md mx-auto p-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Picture */}
          <div className="bg-dark-bg-tertiary rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-dark-text mb-4">Profile Picture</h3>
            <div className="flex flex-col items-center">
              <div className="relative mb-4">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center overflow-hidden">
                  {profileImage ? (
                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <IoPerson className="text-6xl text-white" />
                  )}
                </div>
                <label
                  htmlFor="profile-image"
                  className="absolute bottom-0 right-0 bg-green-600 hover:bg-green-700 text-white p-2 rounded-full cursor-pointer shadow-lg"
                >
                  <IoCamera className="text-xl" />
                  <input
                    id="profile-image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              </div>
              <p className="text-sm text-dark-text-secondary text-center">
                Click the camera icon to upload a new photo
              </p>
            </div>
          </div>

          {/* Personal Information */}
          <div className="bg-dark-bg-tertiary rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-dark-text mb-4">Personal Information</h3>
            <div className="space-y-4">
              {/* Full Name */}
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
                    className={`w-full pl-10 pr-4 py-3 border ${
                      errors.fullName ? 'border-red-500' : 'border-dark-border'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
                    placeholder="Coach Mike Santos"
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
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
                    className={`w-full pl-10 pr-4 py-3 border ${
                      errors.email ? 'border-red-500' : 'border-dark-border'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
                    placeholder="coach@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-dark-text mb-2">
                  Phone Number
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
                    className={`w-full pl-10 pr-4 py-3 border ${
                      errors.phone ? 'border-red-500' : 'border-dark-border'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
                    placeholder="+63 912 345 6789"
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                )}
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-dark-text mb-2">
                  Location
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <IoLocationSharp className="text-dark-text-muted" />
                  </div>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Quezon City, Philippines"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Professional Information */}
          <div className="bg-dark-bg-tertiary rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-dark-text mb-4">Professional Information</h3>
            <div className="space-y-4">
              {/* Specialization */}
              <div>
                <label className="block text-sm font-medium text-dark-text mb-2">
                  Specialization
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <IoFitness className="text-dark-text-muted" />
                  </div>
                  <select
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-dark-bg-tertiary"
                  >
                    {sports.map((sport) => (
                      <option key={sport} value={sport}>
                        {sport}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Experience */}
              <div>
                <label className="block text-sm font-medium text-dark-text mb-2">
                  Years of Experience
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <IoBriefcase className="text-dark-text-muted" />
                  </div>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border ${
                      errors.experience ? 'border-red-500' : 'border-dark-border'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
                    placeholder="8"
                  />
                </div>
                {errors.experience && (
                  <p className="mt-1 text-sm text-red-500">{errors.experience}</p>
                )}
              </div>

              {/* Certification */}
              <div>
                <label className="block text-sm font-medium text-dark-text mb-2">
                  Certification
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <IoFitness className="text-dark-text-muted" />
                  </div>
                  <input
                    type="text"
                    name="certification"
                    value={formData.certification}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="USAPA Certified Pickleball Coach"
                  />
                </div>
              </div>

              {/* Hourly Rate */}
              <div>
                <label className="block text-sm font-medium text-dark-text mb-2">
                  Hourly Rate (₱)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <IoCash className="text-dark-text-muted" />
                  </div>
                  <input
                    type="text"
                    name="hourlyRate"
                    value={formData.hourlyRate}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border ${
                      errors.hourlyRate ? 'border-red-500' : 'border-dark-border'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
                    placeholder="1500"
                  />
                </div>
                {errors.hourlyRate && (
                  <p className="mt-1 text-sm text-red-500">{errors.hourlyRate}</p>
                )}
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="bg-dark-bg-tertiary rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-dark-text mb-4">About</h3>
            <div>
              <label className="block text-sm font-medium text-dark-text mb-2">
                Bio
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3 pointer-events-none">
                  <IoText className="text-dark-text-muted" />
                </div>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full pl-10 pr-4 py-3 border ${
                    errors.bio ? 'border-red-500' : 'border-dark-border'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none`}
                  placeholder="Tell us about your coaching experience..."
                />
              </div>
              <div className="flex justify-between items-center mt-1">
                {errors.bio && (
                  <p className="text-sm text-red-500">{errors.bio}</p>
                )}
                <p className="text-xs text-dark-text-muted ml-auto">
                  {formData.bio.length}/500
                </p>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="bg-dark-bg-tertiary rounded-xl shadow-sm p-4">
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? (
                'Saving...'
              ) : (
                <>
                  <IoSave className="mr-2" />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CoachEditProfile
