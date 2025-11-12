import { useNavigate } from 'react-router-dom'
import {
  IoCreate,
  IoShareSocial,
  IoBriefcase,
  IoPeople,
  IoStatsChart,
  IoStar,
  IoMail,
  IoCall,
  IoGlobe,
  IoLocationSharp
} from 'react-icons/io5'

const SponsorProfile = () => {
  const navigate = useNavigate()

  const profile = {
    name: 'Nike Philippines',
    username: '@nikeph',
    bio: 'Leading sports brand providing innovative athletic footwear, apparel, and equipment. Passionate about supporting Filipino athletes across all sports, with a special focus on the rapidly growing pickleball community. Committed to sports development and empowering athletes nationwide.',
    rating: 4.9,
    reviewCount: 89,
    memberSince: 'March 2022',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop'
  }

  const stats = [
    { icon: IoBriefcase, value: '32', label: 'Campaigns', color: 'indigo' },
    { icon: IoPeople, value: '2.4K', label: 'Athletes Partnered', color: 'indigo' },
    { icon: IoStatsChart, value: '₱2.5M', label: 'Total Investment', color: 'indigo' },
    { icon: IoStar, value: '4.9', label: 'Rating', color: 'indigo' }
  ]

  const sponsorshipTypes = [
    { name: 'Tournament Sponsorship', count: '12' },
    { name: 'Team Sponsorship', count: '8' },
    { name: 'Athlete Sponsorship', count: '7' },
    { name: 'Event Sponsorship', count: '5' }
  ]

  const industries = [
    'Athletic Footwear',
    'Sports Apparel',
    'Equipment',
    'Training Gear',
    'Accessories',
    'Technology'
  ]

  const contactInfo = [
    { icon: IoMail, label: 'Email', value: 'partnerships@nike.com.ph' },
    { icon: IoCall, label: 'Phone', value: '+63 2 8888 9999' },
    { icon: IoGlobe, label: 'Website', value: 'www.nike.com.ph' },
    { icon: IoLocationSharp, label: 'Location', value: 'Bonifacio Global City, Taguig' }
  ]

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <div className="max-w-lg mx-auto p-4 space-y-6">
        {/* Profile Header */}
        <div className="bg-dark-bg-tertiary rounded-xl shadow-sm overflow-hidden">
          <div className="h-24 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
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
                onClick={() => navigate('/sponsor/edit-profile')}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg py-3 px-4 font-semibold transition-colors flex items-center justify-center space-x-2"
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

        {/* Sponsorship Types */}
        <div className="bg-dark-bg-tertiary rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-bold text-dark-text mb-4">Sponsorship Types</h2>
          <div className="space-y-3">
            {sponsorshipTypes.map((type, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-dark-bg rounded-lg">
                <div className="flex items-center space-x-3">
                  <IoBriefcase className="text-xl text-brand-primary" />
                  <span className="text-sm font-medium text-dark-text">{type.name}</span>
                </div>
                <span className="text-sm font-bold text-brand-primary">{type.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Industries */}
        <div className="bg-dark-bg-tertiary rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-bold text-dark-text mb-4">Industries</h2>
          <div className="grid grid-cols-2 gap-2">
            {industries.map((industry, index) => (
              <div key={index} className="flex items-center space-x-2 p-2 bg-indigo-50 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                <span className="text-sm text-dark-text">{industry}</span>
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

export default SponsorProfile
