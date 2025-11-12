import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import {
  IoGrid,
  IoPeople,
  IoCalendar,
  IoTrophy,
  IoPersonCircle,
  IoNotifications,
  IoSettings
} from 'react-icons/io5'
import { getModuleTheme } from '../config/theme'

const TemplateLayout = () => {
  const navigate = useNavigate()
  const location = useLocation()

  // STEP 1: Set your module name
  const moduleName = 'player' // Change this: player, coach, organizer, clubgm, courtowner, sponsor
  const theme = getModuleTheme(moduleName)

  // STEP 2: Define navigation items (customize for your module)
  const navItems = [
    { id: 'dashboard', name: 'Home', icon: IoGrid, path: `/${moduleName}/dashboard` },
    { id: 'tournaments', name: 'Events', icon: IoTrophy, path: `/${moduleName}/tournaments` },
    { id: 'stats', name: 'Stats', icon: IoCalendar, path: `/${moduleName}/stats` },
    { id: 'clubs', name: 'Clubs', icon: IoPeople, path: `/${moduleName}/clubs` },
    { id: 'profile', name: 'Profile', icon: IoPersonCircle, path: `/${moduleName}/profile` }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Top Header */}
      <div className="fixed top-0 left-0 right-0 bg-dark-bg-tertiary border-b border-dark-border z-10">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center justify-between">
          <img
            src="/images/SPORTIFY-PH-LOGO.png"
            alt="Sportify PH Logo"
            className="h-8 w-auto"
          />
          <div className="flex items-center space-x-3">
            <button
              onClick={() => navigate(`/${moduleName}/notifications`)}
              className="p-2 hover:bg-dark-bg-secondary rounded-full transition-colors relative"
            >
              <IoNotifications className="text-2xl text-dark-text-secondary" />
              <span className={`absolute top-1 right-1 w-2 h-2 bg-${theme.primary} rounded-full`}></span>
            </button>
            <button
              onClick={() => navigate(`/${moduleName}/settings`)}
              className="p-2 hover:bg-dark-bg-secondary rounded-full transition-colors"
            >
              <IoSettings className="text-2xl text-dark-text-secondary" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-16">
        <Outlet />
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-dark-bg-tertiary border-t border-dark-border z-20">
        <div className="max-w-lg mx-auto px-2 py-2">
          <div className="flex items-center justify-around">
            {navItems.map((item) => {
              const IconComponent = item.icon
              const active = isActive(item.path)
              return (
                <button
                  key={item.id}
                  onClick={() => navigate(item.path)}
                  className={`flex flex-col items-center justify-center px-3 py-2 rounded-lg transition-colors ${
                    active
                      ? `text-${theme.primary} bg-${theme.primaryLight}`
                      : `text-dark-text-secondary hover:text-${theme.primary} hover:bg-dark-bg`
                  }`}
                >
                  <IconComponent className="text-2xl mb-1" />
                  <span className="text-xs font-medium">{item.name}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TemplateLayout
