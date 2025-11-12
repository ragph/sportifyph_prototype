import { useNavigate } from 'react-router-dom'
import {
  IoCreate,
  IoShareSocial,
  IoTrophy,
  IoPeople,
  IoRibbon,
  IoStar,
  IoMail,
  IoCall,
  IoLocationSharp,
  IoCalendar,
  IoBaseball,
  IoBasketball,
  IoTennisball,
  IoAmericanFootball
} from 'react-icons/io5'

const PlayerProfile = () => {
  const navigate = useNavigate()

  const profile = {
    name: 'Juan Dela Cruz',
    username: '@juandc',
    bio: 'Passionate pickleball player with 5+ years of experience. Love competing in tournaments and playing with friends. Always looking to improve my game and master new strategies!',
    rating: 4.6,
    reviewCount: 28,
    memberSince: 'January 2024',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop'
  }

  const stats = [
    { icon: IoTrophy, value: '15', label: 'Tournaments', color: 'yellow' },
    { icon: IoPeople, value: '3', label: 'Clubs', color: 'yellow' },
    { icon: IoRibbon, value: '8', label: 'Achievements', color: 'yellow' },
    { icon: IoStar, value: '4.6', label: 'Rating', color: 'yellow' }
  ]

  const sports = [
    { name: 'Pickleball', level: 'Advanced', icon: IoTennisball },
    { name: 'Basketball', level: 'Advanced', icon: IoBasketball },
    { name: 'Volleyball', level: 'Intermediate', icon: IoAmericanFootball },
    { name: 'Badminton', level: 'Beginner', icon: IoBaseball }
  ]

  const achievements = [
    'Summer Pickleball League Champion 2024',
    'MVP - Regional Pickleball Tournament',
    'Most Improved Player 2023',
    'Singles Tournament Winner'
  ]

  const contactInfo = [
    { icon: IoMail, label: 'Email', value: 'juan.delacruz@email.com' },
    { icon: IoCall, label: 'Phone', value: '+63 912 345 6789' },
    { icon: IoLocationSharp, label: 'Location', value: 'Davao City, Philippines' },
    { icon: IoCalendar, label: 'Availability', value: 'Weekends & Evenings' }
  ]

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <div className="max-w-md mx-auto p-4 space-y-6">
        {/* Profile Header */}
        <div className="bg-dark-bg-tertiary rounded-xl shadow-sm overflow-hidden">
          <div className="h-24 bg-gradient-to-r from-brand-primary to-blue-700"></div>
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
                onClick={() => navigate('/player/edit-profile')}
                className="flex-1 bg-brand-primary hover:bg-brand-primary-light text-white rounded-lg py-3 px-4 font-semibold transition-colors flex items-center justify-center space-x-2 shadow-md"
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
                <IconComponent className={`text-2xl text-${stat.color}-500 mb-2`} />
                <div className="text-2xl font-bold text-dark-text">{stat.value}</div>
                <div className="text-xs text-dark-text-secondary">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Sports & Skill Levels */}
        <div className="bg-dark-bg-tertiary rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-bold text-dark-text mb-4">Sports & Skill Levels</h2>
          <div className="space-y-3">
            {sports.map((sport, index) => {
              // Define skill level colors
              const skillLevelColors = {
                'Beginner': 'bg-green-500 text-white',
                'Intermediate': 'bg-blue-500 text-white',
                'Advanced': 'bg-purple-600 text-white',
                'Expert': 'bg-orange-500 text-white',
                'Professional': 'bg-red-600 text-white'
              }

              const levelColor = skillLevelColors[sport.level] || 'bg-gray-500 text-white'
              const SportIcon = sport.icon

              return (
                <div key={index} className="flex items-center justify-between p-3 bg-dark-bg rounded-lg border border-dark-border">
                  <div className="flex items-center space-x-3">
                    <SportIcon className="text-xl text-brand-primary" />
                    <span className="text-sm font-medium text-dark-text">{sport.name}</span>
                  </div>
                  <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${levelColor} shadow-sm whitespace-nowrap`}>
                    {sport.level}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-dark-bg-tertiary rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-bold text-dark-text mb-4">Top Achievements</h2>
          <div className="grid grid-cols-1 gap-2">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-2 p-2 bg-brand-primary/10 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                <span className="text-sm text-dark-text">{achievement}</span>
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

export default PlayerProfile
