import { useNavigate } from 'react-router-dom'
import {
  IoCreate,
  IoShareSocial,
  IoStorefront,
  IoCalendar,
  IoCash,
  IoStar,
  IoMail,
  IoCall,
  IoLocationSharp,
  IoTime
} from 'react-icons/io5'

const CourtOwnerProfile = () => {
  const navigate = useNavigate()

  const profile = {
    name: 'Elite Sports Center',
    username: '@elitesportscenter',
    bio: 'Premium multi-sport facility featuring pickleball, basketball, volleyball, badminton, and tennis courts. State-of-the-art equipment and amenities. Open 6 AM - 11 PM daily.',
    rating: 4.8,
    reviewCount: 289,
    memberSince: 'January 2023',
    avatar: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=200&h=200&fit=crop'
  }

  const stats = [
    { icon: IoStorefront, value: '6', label: 'Courts', color: 'red' },
    { icon: IoCalendar, value: '1.9K', label: 'Bookings', color: 'red' },
    { icon: IoCash, value: '₱1.03M', label: 'Total Revenue', color: 'red' },
    { icon: IoStar, value: '4.8', label: 'Rating', color: 'red' }
  ]

  const facilities = [
    { name: 'Pickleball Courts', count: '2' },
    { name: 'Basketball Courts', count: '1' },
    { name: 'Volleyball Courts', count: '1' },
    { name: 'Badminton Courts', count: '1' },
    { name: 'Tennis Courts', count: '1' }
  ]

  const amenities = [
    'Locker Rooms',
    'Parking Space',
    'Rest Area',
    'Water Station',
    'Equipment Rental',
    'Wi-Fi'
  ]

  const contactInfo = [
    { icon: IoMail, label: 'Email', value: 'info@elitesportscenter.com' },
    { icon: IoCall, label: 'Phone', value: '+63 912 345 6789' },
    { icon: IoLocationSharp, label: 'Address', value: '123 Sports Avenue, Quezon City' },
    { icon: IoTime, label: 'Hours', value: '6:00 AM - 11:00 PM Daily' }
  ]

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <div className="max-w-md mx-auto p-4 space-y-6">
        {/* Profile Header */}
        <div className="bg-dark-bg-tertiary rounded-xl shadow-sm overflow-hidden">
          <div className="h-24 bg-gradient-to-r from-red-600 to-orange-600"></div>
          <div className="relative px-4 pb-4">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-24 h-24 rounded-full border-4 border-white -mt-12 mb-3 object-cover"
            />

            <div className="mb-4">
              <h1 className="text-2xl font-bold text-dark-text">{profile.name}</h1>
              <p className="text-sm text-brand-primary">{profile.username}</p>
              <div className="flex items-center space-x-1 mt-2">
                <IoStar className="text-brand-primary" />
                <span className="text-sm font-semibold text-dark-text">{profile.rating}</span>
                <span className="text-xs text-dark-text-muted">({profile.reviewCount} reviews)</span>
              </div>
            </div>

            <div className="flex space-x-3 mb-4">
              <button
                onClick={() => navigate('/courtowner/edit-profile')}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-lg py-3 px-4 font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <IoCreate />
                <span>Edit Profile</span>
              </button>
              <button
                onClick={() => {}}
                className="flex-1 bg-dark-bg-secondary hover:bg-dark-bg-hover text-dark-text rounded-lg py-3 px-4 font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <IoShareSocial />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="bg-dark-bg-tertiary rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-bold text-dark-text mb-3">About</h2>
          <p className="text-sm text-dark-text-secondary">{profile.bio}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="bg-dark-bg-tertiary rounded-xl p-4 shadow-sm border border-dark-border">
                <IconComponent className={`text-2xl text-${stat.color}-600 mb-2`} />
                <div className="text-2xl font-bold text-dark-text">{stat.value}</div>
                <div className="text-xs text-dark-text-secondary">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Facilities */}
        <div className="bg-dark-bg-tertiary rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-bold text-dark-text mb-4">Facilities</h2>
          <div className="space-y-3">
            {facilities.map((facility, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-dark-bg rounded-lg">
                <div className="flex items-center space-x-3">
                  <IoStorefront className="text-xl text-brand-primary" />
                  <span className="text-sm font-medium text-dark-text">{facility.name}</span>
                </div>
                <span className="text-sm font-bold text-brand-primary">{facility.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Amenities */}
        <div className="bg-dark-bg-tertiary rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-bold text-dark-text mb-4">Amenities</h2>
          <div className="grid grid-cols-2 gap-2">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-center space-x-2 p-2 bg-red-50 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-red-600"></div>
                <span className="text-sm text-dark-text">{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-dark-bg-tertiary rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-bold text-dark-text mb-4">Contact Information</h2>
          <div className="space-y-3">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <div key={index} className="flex items-center space-x-3">
                  <IconComponent className="text-xl text-dark-text-secondary" />
                  <div className="flex-1">
                    <p className="text-xs text-dark-text-muted">{info.label}</p>
                    <p className="text-sm font-medium text-dark-text">{info.value}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Member Since */}
        <div className="text-center py-4">
          <p className="text-xs text-dark-text-muted">Member since {profile.memberSince}</p>
        </div>
      </div>
    </div>
  )
}

export default CourtOwnerProfile
