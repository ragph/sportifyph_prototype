import { IoChevronForward } from 'react-icons/io5'
import PropTypes from 'prop-types'
import ToggleSwitch from './ToggleSwitch'

const SettingsItem = ({
  icon: Icon,
  label,
  description,
  type = 'navigate',
  onAction,
  toggleState,
  onToggle,
  moduleColor = 'blue'
}) => {
  if (type === 'toggle') {
    return (
      <div className="flex items-center justify-between p-4 hover:bg-dark-bg">
        <div className="flex items-center space-x-3 flex-1">
          <Icon className="text-xl text-dark-text-secondary" />
          <div className="flex-1">
            <p className="text-sm font-medium text-dark-text">{label}</p>
            <p className="text-xs text-dark-text-muted mt-0.5">{description}</p>
          </div>
        </div>
        <ToggleSwitch
          isOn={toggleState}
          onToggle={onToggle}
          moduleColor={moduleColor}
        />
      </div>
    )
  }

  return (
    <button
      onClick={onAction}
      className="w-full flex items-center justify-between p-4 hover:bg-dark-bg transition-colors"
    >
      <div className="flex items-center space-x-3 flex-1">
        <Icon className="text-xl text-dark-text-secondary" />
        <div className="flex-1 text-left">
          <p className="text-sm font-medium text-dark-text">{label}</p>
          <p className="text-xs text-dark-text-muted mt-0.5">{description}</p>
        </div>
      </div>
      <IoChevronForward className="text-dark-text-muted" />
    </button>
  )
}

SettingsItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['navigate', 'toggle']),
  onAction: PropTypes.func,
  toggleState: PropTypes.bool,
  onToggle: PropTypes.func,
  moduleColor: PropTypes.string
}

export default SettingsItem
