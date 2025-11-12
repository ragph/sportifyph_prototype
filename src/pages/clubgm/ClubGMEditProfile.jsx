import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoPerson, IoMail, IoCall, IoLocationSharp, IoPeople, IoCamera, IoSave, IoText, IoBasketball, IoCalendar } from 'react-icons/io5'
import PageHeader from '../../components/PageHeader'

const ClubGMEditProfile = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [profileImage, setProfileImage] = useState(null)
  const [formData, setFormData] = useState({
    clubName: 'Manila Picklers',
    gmName: 'Carlos Reyes',
    email: 'carlos.reyes@gmail.com',
    phone: '+63 912 345 6789',
    location: 'Manila, Philippines',
    founded: '2020',
    sport: 'Pickleball',
    memberCapacity: '50',
    bio: 'Competitive pickleball club focused on developing young talent and competing in local tournaments. We welcome players of all skill levels. USAPA Certified Club offering professional coaching and state-of-the-art facilities.'
  })
  const [errors, setErrors] = useState({})

  const sports = ['Pickleball', 'Basketball', 'Volleyball', 'Badminton', 'Football', 'Tennis', 'Table Tennis', 'Sepak Takraw', 'Other']

  const validateForm = () => {
    const newErrors = {}

    if (!formData.clubName.trim()) {
      newErrors.clubName = 'Club name is required'
    }

    if (!formData.gmName.trim()) {
      newErrors.gmName = 'GM name is required'
    }

    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (formData.phone && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid'
    }

    if (formData.founded && !/^\d{4}$/.test(formData.founded)) {
      newErrors.founded = 'Year must be 4 digits'
    }

    if (formData.memberCapacity && !/^\d+$/.test(formData.memberCapacity)) {
      newErrors.memberCapacity = 'Capacity must be a number'
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
      navigate('/clubgm/profile')
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
      <PageHeader title="Edit Profile" backPath="/clubgm/profile" />

      <div className="max-w-md mx-auto p-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Picture */}
          <div className="bg-dark-bg-tertiary rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-dark-text mb-4">Club Logo</h3>
            <div className="flex flex-col items-center">
              <div className="relative mb-4">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center overflow-hidden">
                  {profileImage ? (
                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <IoPeople className="text-6xl text-white" />
                  )}
                </div>
                <label
                  htmlFor="profile-image"
                  className="absolute bottom-0 right-0 bg-orange-600 hover:bg-orange-700 text-white p-2 rounded-full cursor-pointer shadow-lg"
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
                Click the camera icon to upload a new logo
              </p>
            </div>
          </div>

          {/* Club Information */}
          <div className="bg-dark-bg-tertiary rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-dark-text mb-4">Club Information</h3>
            <div className="space-y-4">
              {/* Club Name */}
              <div>
                <label className="block text-sm font-medium text-dark-text mb-2">
                  Club Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <IoPeople className="text-dark-text-muted" />
                  </div>
                  <input
                    type="text"
                    name="clubName"
                    value={formData.clubName}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border ${
                      errors.clubName ? 'border-red-500' : 'border-dark-border'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500`}
                    placeholder="Manila Picklers"
                  />
                </div>
                {errors.clubName && (
                  <p className="mt-1 text-sm text-red-500">{errors.clubName}</p>
                )}
              </div>

              {/* GM Name */}
              <div>
                <label className="block text-sm font-medium text-dark-text mb-2">
                  General Manager Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <IoPerson className="text-dark-text-muted" />
                  </div>
                  <input
                    type="text"
                    name="gmName"
                    value={formData.gmName}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border ${
                      errors.gmName ? 'border-red-500' : 'border-dark-border'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500`}
                    placeholder="Carlos Reyes"
                  />
                </div>
                {errors.gmName && (
                  <p className="mt-1 text-sm text-red-500">{errors.gmName}</p>
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
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500`}
                    placeholder="club@example.com"
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
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500`}
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
                    className="w-full pl-10 pr-4 py-3 border border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Manila, Philippines"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Club Details */}
          <div className="bg-dark-bg-tertiary rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-dark-text mb-4">Club Details</h3>
            <div className="space-y-4">
              {/* Sport */}
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
                    className="w-full pl-10 pr-4 py-3 border border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-dark-bg-tertiary"
                  >
                    {sports.map((sport) => (
                      <option key={sport} value={sport}>
                        {sport}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Founded Year */}
              <div>
                <label className="block text-sm font-medium text-dark-text mb-2">
                  Founded Year
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <IoCalendar className="text-dark-text-muted" />
                  </div>
                  <input
                    type="text"
                    name="founded"
                    value={formData.founded}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border ${
                      errors.founded ? 'border-red-500' : 'border-dark-border'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500`}
                    placeholder="2020"
                  />
                </div>
                {errors.founded && (
                  <p className="mt-1 text-sm text-red-500">{errors.founded}</p>
                )}
              </div>

              {/* Member Capacity */}
              <div>
                <label className="block text-sm font-medium text-dark-text mb-2">
                  Member Capacity
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <IoPeople className="text-dark-text-muted" />
                  </div>
                  <input
                    type="text"
                    name="memberCapacity"
                    value={formData.memberCapacity}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border ${
                      errors.memberCapacity ? 'border-red-500' : 'border-dark-border'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500`}
                    placeholder="50"
                  />
                </div>
                {errors.memberCapacity && (
                  <p className="mt-1 text-sm text-red-500">{errors.memberCapacity}</p>
                )}
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="bg-dark-bg-tertiary rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-dark-text mb-4">About the Club</h3>
            <div>
              <label className="block text-sm font-medium text-dark-text mb-2">
                Club Description
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
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none`}
                  placeholder="Tell us about your club..."
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
              className={`w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center ${
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

export default ClubGMEditProfile
