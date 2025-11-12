import { useNavigate, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

const BottomNavigation = ({ navItems, activeColor = 'blue' }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  // Color mapping for different modules - using brand primary blue for all active states
  const colorClasses = {
    blue: {
      active: 'text-brand-primary',
      activeText: 'text-brand-primary',
      activeBg: 'bg-brand-primary/10'
    },
    green: {
      active: 'text-brand-primary',
      activeText: 'text-brand-primary',
      activeBg: 'bg-brand-primary/10'
    },
    purple: {
      active: 'text-brand-primary',
      activeText: 'text-brand-primary',
      activeBg: 'bg-brand-primary/10'
    },
    orange: {
      active: 'text-brand-primary',
      activeText: 'text-brand-primary',
      activeBg: 'bg-brand-primary/10'
    },
    red: {
      active: 'text-brand-primary',
      activeText: 'text-brand-primary',
      activeBg: 'bg-brand-primary/10'
    },
    indigo: {
      active: 'text-brand-primary',
      activeText: 'text-brand-primary',
      activeBg: 'bg-brand-primary/10'
    }
  }

  const colors = colorClasses[activeColor] || colorClasses.blue

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-dark-bg-tertiary border-t border-dark-border shadow-lg z-50">
      <div className="max-w-lg mx-auto px-2 py-2">
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const IconComponent = item.icon
            const active = isActive(item.path)

            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center justify-center flex-1 py-2 rounded-lg transition-all ${
                  active ? `${colors.active}` : 'text-dark-text-secondary hover:bg-dark-bg-hover'
                }`}
              >
                <IconComponent className="text-2xl mb-1" />
                <span className={`text-xs font-medium ${
                  active ? colors.activeText : 'text-dark-text-secondary'
                }`}>
                  {item.label}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

BottomNavigation.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    })
  ).isRequired,
  activeColor: PropTypes.oneOf(['blue', 'green', 'purple', 'orange', 'red', 'indigo'])
}

export default BottomNavigation
