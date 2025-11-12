import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoBriefcase, IoMail, IoCall, IoLocationSharp, IoGlobe, IoCamera, IoSave, IoText, IoPerson } from 'react-icons/io5'
import PageHeader from '../../components/PageHeader'
import Card from '../../components/Card'

const SponsorEditProfile = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [profileImage, setProfileImage] = useState(null)
  const [formData, setFormData] = useState({
    companyName: 'Nike Philippines',
    contactPerson: 'John Smith',
    email: 'partnerships@nike.com.ph',
    phone: '+63 2 8888 9999',
    location: 'Bonifacio Global City, Taguig',
    website: 'www.nike.com.ph',
    industry: 'Athletic Footwear',
    bio: 'Leading sports brand providing innovative athletic footwear, apparel, and equipment. Passionate about supporting Filipino athletes across all sports, with a special focus on the rapidly growing pickleball community. Committed to sports development and empowering athletes nationwide.',
    sportsInterests: ['Pickleball', 'Basketball', 'Volleyball', 'Badminton', 'Tennis', 'Running']
  })
  const [errors, setErrors] = useState({})

  const industries = ['Athletic Footwear', 'Sports Apparel', 'Equipment', 'Technology', 'Food & Beverage', 'Financial Services', 'Healthcare', 'Other']

  const availableSports = ['Pickleball', 'Basketball', 'Volleyball', 'Badminton', 'Tennis', 'Running', 'Swimming', 'Boxing', 'Football', 'Baseball']

  const toggleSportInterest = (sport) => {
    setFormData(prev => ({
      ...prev,
      sportsInterests: prev.sportsInterests.includes(sport)
        ? prev.sportsInterests.filter(s => s !== sport)
        : [...prev.sportsInterests, sport]
    }))
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required'
    }

    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = 'Contact person is required'
    }

    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (formData.phone && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid'
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
      navigate('/sponsor/profile')
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
      <PageHeader title="Edit Profile" backPath="/sponsor/profile" />

      <div className="max-w-lg mx-auto p-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Picture */}
          <Card title="Company Logo" padding="p-6">
            <div className="flex flex-col items-center">
              <div className="relative mb-4">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center overflow-hidden">
                  {profileImage ? (
                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <IoBriefcase className="text-6xl text-white" />
                  )}
                </div>
                <label
                  htmlFor="profile-image"
                  className="absolute bottom-0 right-0 bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full cursor-pointer shadow-lg"
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
          </Card>

          {/* Company Information */}
          <Card title="Company Information" padding="p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-dark-text mb-2">
                  Company Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <IoBriefcase className="text-dark-text-muted" />
                  </div>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border ${
                      errors.companyName ? 'border-red-500' : 'border-dark-border'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    placeholder="Nike Philippines"
                  />
                </div>
                {errors.companyName && (
                  <p className="mt-1 text-sm text-red-500">{errors.companyName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-text mb-2">
                  Contact Person
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <IoPerson className="text-dark-text-muted" />
                  </div>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border ${
                      errors.contactPerson ? 'border-red-500' : 'border-dark-border'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    placeholder="John Smith"
                  />
                </div>
                {errors.contactPerson && (
                  <p className="mt-1 text-sm text-red-500">{errors.contactPerson}</p>
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
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    placeholder="partnerships@company.com"
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
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    placeholder="+63 2 8888 9999"
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                )}
              </div>

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
                    className="w-full pl-10 pr-4 py-3 border border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Bonifacio Global City, Taguig"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-text mb-2">
                  Website
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <IoGlobe className="text-dark-text-muted" />
                  </div>
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="www.company.com"
                  />
                </div>
              </div>
            </div>
          </Card>

          {/* Business Details */}
          <Card title="Business Details" padding="p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-dark-text mb-2">
                  Industry
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <IoBriefcase className="text-dark-text-muted" />
                  </div>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-dark-bg-tertiary"
                  >
                    {industries.map((ind) => (
                      <option key={ind} value={ind}>
                        {ind}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </Card>

          {/* Bio */}
          <Card title="About" padding="p-6">
            <div>
              <label className="block text-sm font-medium text-dark-text mb-2">
                Company Description
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
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none`}
                  placeholder="Tell us about your company..."
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
          </Card>

          {/* Sports Interests */}
          <Card title="Sports Interests" padding="p-6">
            <p className="text-sm text-dark-text-secondary mb-4">Select the sports you are interested in sponsoring</p>
            <div className="grid grid-cols-2 gap-3">
              {availableSports.map((sport) => (
                <button
                  key={sport}
                  type="button"
                  onClick={() => toggleSportInterest(sport)}
                  className={`p-3 rounded-lg border-2 transition-all text-sm font-medium ${
                    formData.sportsInterests.includes(sport)
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                      : 'border-dark-border bg-dark-bg-tertiary text-dark-text hover:border-indigo-300'
                  }`}
                >
                  {sport}
                </button>
              ))}
            </div>
          </Card>

          {/* Save Button */}
          <Card padding="p-4">
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center ${
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
          </Card>
        </form>
      </div>
    </div>
  )
}

export default SponsorEditProfile
