import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { IoFootball, IoFitness, IoTrophy, IoPeople, IoStorefront, IoBriefcase, IoChevronForward } from 'react-icons/io5'

const RoleSelection = () => {
  const navigate = useNavigate()
  const [selectedRole, setSelectedRole] = useState(null)

  const roles = [
    {
      id: 'player',
      name: 'Player',
      icon: IoFootball,
      description: 'Join tournaments, track stats, connect with clubs',
      route: '/player',
      gradient: 'from-brand-primary to-blue-600'
    },
    {
      id: 'coach',
      name: 'Coach',
      icon: IoFitness,
      description: 'Offer training sessions, manage bookings',
      route: '/coach/dashboard',
      gradient: 'from-green-500 to-emerald-400'
    },
    {
      id: 'organizer',
      name: 'Organizer',
      icon: IoTrophy,
      description: 'Host tournaments, manage events',
      route: '/organizer/dashboard',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'club-gm',
      name: 'Club GM',
      icon: IoPeople,
      description: 'Manage club members, events, and finances',
      route: '/clubgm/dashboard',
      gradient: 'from-orange-500 to-amber-400'
    },
    {
      id: 'court-owner',
      name: 'Court Owner',
      icon: IoStorefront,
      description: 'Manage courts, bookings, and revenue',
      route: '/courtowner/dashboard',
      gradient: 'from-red-500 to-orange-400'
    },
    {
      id: 'sponsor',
      name: 'Sponsor',
      icon: IoBriefcase,
      description: 'Create campaigns, reach athletes',
      route: '/sponsor/dashboard',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ]

  const handleRoleSelect = (role) => {
    setSelectedRole(role.id)
    // Store selected role in sessionStorage for login redirect
    sessionStorage.setItem('selectedRole', role.id)
    sessionStorage.setItem('roleRoute', role.route)
    setTimeout(() => {
      // Navigate to login page
      navigate('/login')
    }, 200)
  }

  return (
    <div className="min-h-screen bg-dark-bg flex flex-col">
      {/* Header */}
      <div className="bg-dark-bg-tertiary shadow-sm">
        <div className="max-w-md mx-auto px-4 py-6">
          <div className="flex justify-center mb-2">
            <img
              src="/images/SPORTIFY-PH-LOGO.png"
              alt="Sportify PH Logo"
              className="h-20 w-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-dark-bg flex-1 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-dark-text">
              Select Your Role
            </h3>
            <p className="text-dark-text-secondary text-sm">
              Choose how you want to use Sportify PH
            </p>
          </div>

          {/* Role Cards */}
          <div className="grid grid-cols-2 gap-4">
            {roles.map((role) => {
              const IconComponent = role.icon
              return (
                <button
                  key={role.id}
                  onClick={() => handleRoleSelect(role)}
                  className={`relative bg-gradient-to-r ${role.gradient} text-white rounded-2xl shadow-lg overflow-hidden p-6 transition-all duration-200 transform ${
                    selectedRole === role.id ? 'scale-95' : 'hover:scale-105'
                  } active:scale-95 flex flex-col items-center text-center h-full`}
                >
                  {/* Decorative circles in background */}
                  <div className="absolute top-0 right-0 -z-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                  <div className="absolute bottom-0 left-0 -z-0 w-16 h-16 bg-white/10 rounded-full -ml-8 -mb-8"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <IconComponent className="text-5xl mb-3 mx-auto" />
                    <h3 className="text-base font-bold mb-2">{role.name}</h3>
                    <p className="text-xs text-white/90 leading-snug">{role.description}</p>
                  </div>
                </button>
              )
            })}
          </div>

          <div className="mt-8 text-center">
            <p className="text-dark-text-secondary text-sm mb-3">
              Don't have an account?
            </p>
            <button
              onClick={() => navigate('/signup')}
              className="text-brand-primary font-semibold hover:underline"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-brand-primary border-t border-dark-border py-8">
        <div className="max-w-md mx-auto px-4">
          <p className="text-center text-white text-xs mb-0">
            © 2024 Sportify PH. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default RoleSelection
