import { useNavigate } from 'react-router-dom'
import { IoNotifications, IoSettings } from 'react-icons/io5'
import PropTypes from 'prop-types'

const TopHeader = ({ module }) => {
  const navigate = useNavigate()

  return (
    <div className="fixed top-0 left-0 right-0 bg-dark-bg-tertiary border-b border-dark-border z-10">
      <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
        <img
          src="/images/SPORTIFY-PH-LOGO.png"
          alt="Sportify PH Logo"
          className="h-8 w-auto"
        />
        <div className="flex items-center space-x-3">
          <button
            onClick={() => navigate(`/${module}/notifications`)}
            className="p-2 hover:bg-brand-primary/10 rounded-full transition-all relative group"
          >
            <IoNotifications className="text-2xl text-dark-text-secondary group-hover:text-brand-primary transition-colors" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-brand-accent rounded-full ring-2 ring-brand-accent/20"></span>
          </button>
          <button
            onClick={() => navigate(`/${module}/settings`)}
            className="p-2 hover:bg-brand-primary/10 rounded-full transition-all group"
          >
            <IoSettings className="text-2xl text-dark-text-secondary group-hover:text-brand-primary transition-colors" />
          </button>
        </div>
      </div>
    </div>
  )
}

TopHeader.propTypes = {
  module: PropTypes.string.isRequired
}

export default TopHeader
