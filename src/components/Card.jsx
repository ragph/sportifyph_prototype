import PropTypes from 'prop-types'

const Card = ({
  children,
  className = '',
  title = null,
  titleClassName = '',
  padding = 'p-5',
  noPadding = false
}) => {
  return (
    <div className={`bg-dark-bg-tertiary rounded-xl shadow-sm border border-dark-border ${noPadding ? '' : padding} ${className}`}>
      {title && (
        <h3 className={`text-lg font-bold text-dark-text mb-4 ${titleClassName}`}>
          {title}
        </h3>
      )}
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
  titleClassName: PropTypes.string,
  padding: PropTypes.string,
  noPadding: PropTypes.bool
}

export default Card
