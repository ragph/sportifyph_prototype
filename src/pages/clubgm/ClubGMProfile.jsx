import { useNavigate } from 'react-router-dom'
import {
  IoCreate,
  IoShareSocial,
  IoPeople,
  IoStar,
  IoCash,
  IoTrophy,
  IoCalendar,
  IoMail,
  IoCall,
  IoLocationSharp,
  IoTime
} from 'react-icons/io5'

const ClubGMProfile = () => {
  const navigate = useNavigate()

  const profile = {
    name: 'Manila Pickleball Club',
    username: '@manilapickleball',
    bio: 'Premier pickleball club in Metro Manila. Offering training programs, tournaments, and community events for all skill levels. Building champions on and off the court since 2015. USAPA Certified Club.',
    rating: 4.7,
    reviewCount: 89,
    memberSince: 'June 2020',
    avatar: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=200&h=200&fit=crop'
  }

  const stats = [
    { icon: IoPeople, value: '156', label: 'Total Members', color: 'orange' },
    { icon: IoTrophy, value: '24', label: 'Championships Won', color: 'orange' },
    { icon: IoCash, value: '₱78K', label: 'Monthly Revenue', color: 'orange' },
    { icon: IoStar, value: '4.7', label: 'Rating', color: 'orange' }
  ]

  const programs = [
    { name: 'Weekly Pickleball Drills', members: '45' },
    { name: 'Advanced Training Sessions', members: '38' },
    { name: 'Youth Pickleball Development Camp', members: '32' },
    { name: 'Pickleball Socials', members: '41' }
  ]

  const achievements = [
    'USAPA Certified',
    'PPR Certified Club',
    '50+ Tournaments Hosted',
    'Regional Champions 2023'
  ]

  const contactInfo = [
    { icon: IoMail, label: 'Email', value: 'info@manilapickleballclub.com' },
    { icon: IoCall, label: 'Phone', value: '+63 912 345 6789' },
    { icon: IoLocationSharp, label: 'Location', value: 'Makati, Manila' },
    { icon: IoTime, label: 'Operating Hours', value: 'Mon-Sun, 6 AM - 10 PM' }
  ]

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <div className="max-w-lg mx-auto p-4 space-y-6">
        {/* Profile Header */}
        <div className="bg-dark-bg-tertiary rounded-xl shadow-sm overflow-hidden">
          <div className="h-24 bg-gradient-to-r from-orange-600 to-amber-600"></div>
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
                onClick={() => navigate('/clubgm/edit-profile')}
                className="flex-1 bg-orange-600 hover:bg-orange-700 text-white rounded-lg py-3 px-4 font-semibold transition-colors flex items-center justify-center space-x-2"
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

        {/* Programs */}
        <div className="bg-dark-bg-tertiary rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-bold text-dark-text mb-4">Programs</h2>
          <div className="space-y-3">
            {programs.map((program, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-dark-bg rounded-lg">
                <div className="flex items-center space-x-3">
                  <IoPeople className="text-xl text-brand-primary" />
                  <span className="text-sm font-medium text-dark-text">{program.name}</span>
                </div>
                <span className="text-sm font-bold text-brand-primary">{program.members}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-dark-bg-tertiary rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-bold text-dark-text mb-4">Achievements & Awards</h2>
          <div className="grid grid-cols-2 gap-2">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-2 p-2 bg-brand-primary/10 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-orange-600"></div>
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

export default ClubGMProfile
