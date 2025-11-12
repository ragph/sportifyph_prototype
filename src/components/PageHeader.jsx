import { useNavigate } from 'react-router-dom'
import { IoArrowBack, IoSettings, IoNotifications } from 'react-icons/io5'
import PropTypes from 'prop-types'

const PageHeader = ({
  title,
  showBack = true,
  backPath,
  onBackClick,
  showSettings = false,
  settingsPath,
  showNotifications = false,
  notificationsPath,
  hasUnreadNotifications = false
}) => {
  const navigate = useNavigate()

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick()
    } else if (backPath) {
      navigate(backPath)
    } else {
      navigate(-1)
    }
  }

  return (
    <div className="bg-dark-bg-tertiary border-b border-dark-border sticky top-0 z-50">
      <div className="max-w-lg mx-auto px-4 py-4 flex items-center justify-between">
        {showBack ? (
          <button
            onClick={handleBackClick}
            className="p-2 hover:bg-dark-bg-hover rounded-full"
          >
            <IoArrowBack className="text-xl text-dark-text" />
          </button>
        ) : (
          <div className="w-10"></div>
        )}

        {title && <h1 className="text-lg font-bold text-dark-text">{title}</h1>}

        <div className="flex items-center space-x-2">
          {showNotifications && (
            <button
              onClick={() => navigate(notificationsPath)}
              className="relative p-2 hover:bg-dark-bg-hover rounded-full"
            >
              <IoNotifications className="text-xl text-dark-text-secondary" />
              {hasUnreadNotifications && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </button>
          )}

          {showSettings && (
            <button
              onClick={() => navigate(settingsPath)}
              className="p-2 hover:bg-dark-bg-hover rounded-full"
            >
              <IoSettings className="text-xl text-dark-text-secondary" />
            </button>
          )}

          {!showSettings && !showNotifications && <div className="w-10"></div>}
        </div>
      </div>
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  showBack: PropTypes.bool,
  backPath: PropTypes.string,
  onBackClick: PropTypes.func,
  showSettings: PropTypes.bool,
  settingsPath: PropTypes.string,
  showNotifications: PropTypes.bool,
  notificationsPath: PropTypes.string,
  hasUnreadNotifications: PropTypes.bool
}

export default PageHeader
