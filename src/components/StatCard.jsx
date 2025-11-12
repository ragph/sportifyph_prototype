import PropTypes from 'prop-types'

const StatCard = ({ icon: Icon, value, label, moduleColor = 'blue' }) => {
  return (
    <div className="bg-dark-bg-tertiary rounded-xl p-4 shadow-sm border-l-4 border-l-brand-primary border-r border-r-dark-border border-t border-t-dark-border border-b border-b-dark-border hover:shadow-lg hover:shadow-brand-primary/10 transition-all">
      <Icon className={`text-2xl text-brand-primary mb-2`} />
      <div className="text-2xl font-bold text-dark-text">{value}</div>
      <div className="text-xs text-dark-text-secondary">{label}</div>
    </div>
  )
}

StatCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
  moduleColor: PropTypes.string
}

export default StatCard
