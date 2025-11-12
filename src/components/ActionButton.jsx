import PropTypes from 'prop-types'

const ActionButton = ({
  label,
  onClick,
  icon: Icon,
  variant = 'primary',
  moduleColor = 'blue',
  fullWidth = false,
  disabled = false
}) => {
  const baseClasses = "rounded-lg py-3 px-4 font-semibold transition-all flex items-center justify-center space-x-2"

  const variantClasses = {
    primary: `bg-brand-primary hover:bg-brand-primary-light text-dark-bg hover:shadow-lg hover:shadow-brand-primary/30`,
    secondary: 'bg-dark-bg-secondary hover:bg-dark-bg-hover text-dark-text border-2 border-brand-primary/20 hover:border-brand-primary/40',
    danger: 'bg-red-600 hover:bg-red-700 text-white'
  }

  const widthClass = fullWidth ? 'w-full' : ''
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : ''

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${disabledClass}`}
    >
      {Icon && <Icon className="text-lg" />}
      <span>{label}</span>
    </button>
  )
}

ActionButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.elementType,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  moduleColor: PropTypes.string,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool
}

export default ActionButton
