import PropTypes from 'prop-types'

const WelcomeBanner = ({ userName, description, gradientFrom = 'blue', gradientTo = 'purple' }) => {
  return (
    <div className={`bg-gradient-to-r from-${gradientFrom}-600 to-${gradientTo}-600 rounded-xl p-6 text-white`}>
      <h1 className="text-2xl font-bold mb-2">Welcome back, {userName}! 👋</h1>
      <p className="text-sm opacity-90">{description}</p>
    </div>
  )
}

WelcomeBanner.propTypes = {
  userName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  gradientFrom: PropTypes.string,
  gradientTo: PropTypes.string
}

export default WelcomeBanner
