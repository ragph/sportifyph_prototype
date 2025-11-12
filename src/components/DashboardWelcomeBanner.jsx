import PropTypes from 'prop-types'

const DashboardWelcomeBanner = ({
  userName,
  emoji = '👋',
  description,
  module = 'player'
}) => {
  // Module-specific gradient colors
  const moduleColors = {
    player: 'from-blue-600 to-blue-400',      // Green for Player (Pickleball theme)
    coach: 'from-green-500 to-emerald-400',        // Green for Coach
    organizer: 'from-purple-500 to-indigo-500',    // Purple for Organizer
    clubgm: 'from-orange-500 to-amber-400',        // Orange for Club GM
    courtowner: 'from-red-500 to-orange-400',      // Red for Court Owner
    sponsor: 'from-indigo-500 to-purple-500'       // Indigo for Sponsor
  }

  const gradientColor = moduleColors[module] || moduleColors.player

  return (
    <div className={`relative bg-gradient-to-r ${gradientColor} rounded-2xl overflow-hidden shadow-sm h-[180px]`}>
      <div className="flex items-center justify-between relative">
        {/* Left side - Text content */}
        <div className="flex-1 p-6 pr-4">
          <h1 className="text-xl font-black text-white mb-1 leading-tight">
            Welcome back,<br />
            <span className="text-2xl">{userName}!</span>
          </h1>
          <p className="w-52 h-10 text-sm text-white/90 font-normal mt-3">
            {description}
          </p>
        </div>

        {/* Right side - Model image */}
        <img
          src="/images/models/model-1.png"
          alt="Welcome"
          className="absolute top-4 bottom-0 right-2 h-full w-auto object-contain z-[1]"
        />
      </div>

      {/* Decorative circles in background with accent */}
      <div className="absolute top-0 right-0 -z-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
      <div className="absolute bottom-0 left-0 -z-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
    </div>
  )
}

DashboardWelcomeBanner.propTypes = {
  userName: PropTypes.string.isRequired,
  emoji: PropTypes.string,
  description: PropTypes.string.isRequired,
  module: PropTypes.oneOf(['player', 'coach', 'organizer', 'clubgm', 'courtowner', 'sponsor']).isRequired
}

export default DashboardWelcomeBanner
