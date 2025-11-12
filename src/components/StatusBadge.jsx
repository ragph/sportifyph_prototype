import PropTypes from 'prop-types'

const StatusBadge = ({
  children,
  variant = 'default',
  size = 'md',
  rounded = 'default',
  icon = null,
  className = ''
}) => {
  // Variant colors
  const variants = {
    success: 'bg-green-600 text-white',
    error: 'bg-red-600 text-white',
    warning: 'bg-yellow-500 text-white',
    info: 'bg-blue-600 text-white',
    purple: 'bg-purple-600 text-white',
    orange: 'bg-orange-600 text-white',
    default: 'bg-gray-600 text-white',
    'success-light': 'bg-green-600 text-white',
    'info-light': 'bg-blue-600 text-white',
    primary: 'bg-brand-primary text-white',
    white: 'bg-white text-gray-900'
  }

  // Size options
  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2 py-1 text-xs',
    lg: 'px-3 py-1.5 text-xs'
  }

  // Rounded options
  const roundedOptions = {
    default: 'rounded',
    full: 'rounded-full',
    none: 'rounded-none'
  }

  const variantClass = variants[variant] || variants.default
  const sizeClass = sizes[size] || sizes.md
  const roundedClass = roundedOptions[rounded] || roundedOptions.default

  return (
    <span
      className={`${sizeClass} ${roundedClass} ${variantClass} font-medium capitalize whitespace-nowrap inline-flex items-center gap-1 shadow-sm ${className}`}
    >
      {icon && <span className="inline-flex">{icon}</span>}
      {children}
    </span>
  )
}

StatusBadge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'success',
    'error',
    'warning',
    'info',
    'purple',
    'orange',
    'default',
    'success-light',
    'info-light',
    'primary',
    'white'
  ]),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  rounded: PropTypes.oneOf(['default', 'full', 'none']),
  icon: PropTypes.node,
  className: PropTypes.string
}

export default StatusBadge
