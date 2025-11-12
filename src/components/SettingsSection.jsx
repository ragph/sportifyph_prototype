import PropTypes from 'prop-types'

const SettingsSection = ({ title, children }) => {
  return (
    <div className="bg-dark-bg-tertiary rounded-xl border-b border-dark-border overflow-hidden">
      <div className="px-4 py-3">
        <h3 className="text-sm font-semibold text-dark-text uppercase tracking-wide">
          {title}
        </h3>
      </div>
      <div className="divide-y divide-gray-100">
        {children}
      </div>
    </div>
  )
}

SettingsSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default SettingsSection
