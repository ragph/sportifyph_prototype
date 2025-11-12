import { IoCheckmark } from 'react-icons/io5'
import PropTypes from 'prop-types'

const ToggleSwitch = ({ isOn, onToggle, moduleColor = 'blue' }) => {
  return (
    <button
      onClick={onToggle}
      className={`relative inline-flex items-center h-6 rounded-full w-11 transition-all focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-dark-bg ${
        isOn ? 'bg-brand-primary shadow-lg shadow-brand-primary/30' : 'bg-gray-300'
      }`}
    >
      <span
        className={`inline-block w-4 h-4 transform rounded-full bg-dark-bg-tertiary transition-transform ${
          isOn ? 'translate-x-6' : 'translate-x-1'
        }`}
      >
        {isOn && (
          <IoCheckmark className="text-brand-primary text-xs" />
        )}
      </span>
    </button>
  )
}

ToggleSwitch.propTypes = {
  isOn: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  moduleColor: PropTypes.string
}

export default ToggleSwitch
