import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoStorefront, IoMail, IoCall, IoLocationSharp, IoTime, IoCamera, IoSave, IoText, IoPerson } from 'react-icons/io5'
import PageHeader from '../../components/PageHeader'

const CourtOwnerEditProfile = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [profileImage, setProfileImage] = useState(null)
  const [formData, setFormData] = useState({
    facilityName: 'Elite Sports Center',
    ownerName: 'Robert Chen',
    email: 'info@elitesportscenter.com',
    phone: '+63 912 345 6789',
    address: '123 Sports Avenue, Quezon City',
    openingHours: '6:00 AM - 11:00 PM',
    numberOfCourts: '6',
    bio: 'Premium multi-sport facility featuring pickleball, basketball, volleyball, badminton, and tennis courts. State-of-the-art equipment and amenities. Open 6 AM - 11 PM daily.'
  })
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}

    if (!formData.facilityName.trim()) {
      newErrors.facilityName = 'Facility name is required'
    }

    if (!formData.ownerName.trim()) {
      newErrors.ownerName = 'Owner name is required'
    }

    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (formData.phone && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid'
    }

    if (formData.numberOfCourts && !/^\d+$/.test(formData.numberOfCourts)) {
      newErrors.numberOfCourts = 'Number of courts must be a number'
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
      navigate('/courtowner/profile')
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
      <PageHeader title="Edit Profile" backPath="/courtowner/profile" />

      <div className="max-w-lg mx-auto p-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Picture */}
          <div className="bg-dark-bg-tertiary rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-dark-text mb-4">Facility Logo</h3>
            <div className="flex flex-col items-center">
              <div className="relative mb-4">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center overflow-hidden">
                  {profileImage ? (
                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <IoStorefront className="text-6xl text-white" />
                  )}
                </div>
                <label
                  htmlFor="profile-image"
                  className="absolute bottom-0 right-0 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full cursor-pointer shadow-lg"
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

          {/* Facility Information */}
          <div className="bg-dark-bg-tertiary rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-dark-text mb-4">Facility Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-dark-text mb-2">
                  Facility Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <IoStorefront className="text-dark-text-muted" />
                  </div>
                  <input
                    type="text"
                    name="facilityName"
                    value={formData.facilityName}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border ${
                      errors.facilityName ? 'border-red-500' : 'border-dark-border'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500`}
                    placeholder="Elite Sports Center"
                  />
                </div>
                {errors.facilityName && (
                  <p className="mt-1 text-sm text-red-500">{errors.facilityName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-text mb-2">
                  Owner Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <IoPerson className="text-dark-text-muted" />
                  </div>
                  <input
                    type="text"
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border ${
                      errors.ownerName ? 'border-red-500' : 'border-dark-border'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500`}
                    placeholder="Robert Chen"
                  />
                </div>
                {errors.ownerName && (
                  <p className="mt-1 text-sm text-red-500">{errors.ownerName}</p>
                )}
              </div>

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
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500`}
                    placeholder="info@facility.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

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
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500`}
                    placeholder="+63 912 345 6789"
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-text mb-2">
                  Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <IoLocationSharp className="text-dark-text-muted" />
                  </div>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="123 Sports Avenue, Quezon City"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Facility Details */}
          <div className="bg-dark-bg-tertiary rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-dark-text mb-4">Facility Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-dark-text mb-2">
                  Opening Hours
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <IoTime className="text-dark-text-muted" />
                  </div>
                  <input
                    type="text"
                    name="openingHours"
                    value={formData.openingHours}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="6:00 AM - 11:00 PM"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-text mb-2">
                  Number of Courts
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <IoStorefront className="text-dark-text-muted" />
                  </div>
                  <input
                    type="text"
                    name="numberOfCourts"
                    value={formData.numberOfCourts}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border ${
                      errors.numberOfCourts ? 'border-red-500' : 'border-dark-border'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500`}
                    placeholder="5"
                  />
                </div>
                {errors.numberOfCourts && (
                  <p className="mt-1 text-sm text-red-500">{errors.numberOfCourts}</p>
                )}
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="bg-dark-bg-tertiary rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-dark-text mb-4">About</h3>
            <div>
              <label className="block text-sm font-medium text-dark-text mb-2">
                Facility Description
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
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 resize-none`}
                  placeholder="Tell us about your facility..."
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
              className={`w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center ${
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

export default CourtOwnerEditProfile
