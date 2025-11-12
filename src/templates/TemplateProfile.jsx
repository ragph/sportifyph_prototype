import { useNavigate } from 'react-router-dom'
import {
  IoCreate,
  IoShareSocial,
  IoTrophy,
  IoPeople,
  IoCalendar,
  IoStar,
  IoMail,
  IoCall,
  IoLocationSharp
} from 'react-icons/io5'
import { getModuleTheme } from '../config/theme'
import { StatCard, ActionButton } from '../components'

const TemplateProfile = () => {
  const navigate = useNavigate()

  // STEP 1: Set your module name
  const moduleName = 'player' // Change this: player, coach, organizer, clubgm, courtowner, sponsor
  const theme = getModuleTheme(moduleName)

  // STEP 2: Update profile data
  const profile = {
    name: 'John Doe',
    username: '@johndoe',
    bio: 'Professional athlete passionate about sports and competition.',
    rating: 4.8,
    memberSince: 'January 2023'
  }

  // STEP 3: Update stats
  const stats = [
    { icon: IoTrophy, value: '24', label: 'Achievements', moduleColor: theme.primary.split('-')[0] },
    { icon: IoPeople, value: '156', label: 'Connections', moduleColor: theme.primary.split('-')[0] },
    { icon: IoCalendar, value: '42', label: 'Events', moduleColor: theme.primary.split('-')[0] },
    { icon: IoStar, value: '4.8', label: 'Rating', moduleColor: theme.primary.split('-')[0] }
  ]

  // STEP 4: Update contact info
  const contactInfo = [
    { icon: IoMail, label: 'Email', value: 'john.doe@example.com' },
    { icon: IoCall, label: 'Phone', value: '+63 912 345 6789' },
    { icon: IoLocationSharp, label: 'Location', value: 'Metro Manila, Philippines' }
  ]

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bgGradient} pb-20`}>
      <div className="max-w-lg mx-auto p-4 space-y-6">
        {/* Profile Header */}
        <div className="bg-dark-bg-tertiary rounded-xl shadow-sm overflow-hidden">
          <div className={`h-24 bg-gradient-to-r from-${theme.primaryGradientFrom} to-${theme.primaryGradientTo}`}></div>
          <div className="relative px-4 pb-4">
            <div className={`w-24 h-24 rounded-full bg-gradient-to-r from-${theme.primaryGradientFrom} to-${theme.primaryGradientTo} border-4 border-white -mt-12 mb-3 flex items-center justify-center text-white text-3xl font-bold`}>
              {profile.name.charAt(0)}
            </div>

            <div className="mb-4">
              <h1 className="text-2xl font-bold text-dark-text">{profile.name}</h1>
              <p className={`text-sm text-${theme.primary}`}>{profile.username}</p>
              {profile.rating && (
                <div className="flex items-center space-x-1 mt-2">
                  <IoStar className={`text-${theme.primary}`} />
                  <span className="text-sm font-semibold text-dark-text">{profile.rating}</span>
                  <span className="text-xs text-dark-text-muted">(128 reviews)</span>
                </div>
              )}
            </div>

            <div className="flex space-x-3 mb-4">
              <ActionButton
                label="Edit Profile"
                icon={IoCreate}
                onClick={() => navigate(`/${moduleName}/edit-profile`)}
                moduleColor={theme.primary.split('-')[0]}
                fullWidth
              />
              <ActionButton
                label="Share"
                icon={IoShareSocial}
                onClick={() => {}}
                variant="secondary"
                fullWidth
              />
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
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              moduleColor={stat.moduleColor}
            />
          ))}
        </div>

        {/* STEP 5: Add module-specific sections (Achievements, Certifications, etc.) */}
        <div className="bg-dark-bg-tertiary rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-bold text-dark-text mb-4">Achievements</h2>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-dark-bg rounded-lg">
              <IoTrophy className={`text-2xl text-${theme.primary}`} />
              <div className="flex-1">
                <p className="text-sm font-semibold text-dark-text">Tournament Champion</p>
                <p className="text-xs text-dark-text-muted">Won 5 tournaments</p>
              </div>
            </div>
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

export default TemplateProfile
