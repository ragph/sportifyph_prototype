import { useNavigate } from 'react-router-dom'
import { IoNotifications } from 'react-icons/io5'

const DashboardHeader = ({
  notificationPath,
  hasUnreadNotifications = true
}) => {
  const navigate = useNavigate()

  return (
    <div className="flex justify-end -mt-2 -mr-2">
      <button
        onClick={() => navigate(notificationPath)}
        className="relative p-2 hover:bg-dark-bg-secondary rounded-full transition-colors"
      >
        <IoNotifications className="text-2xl text-dark-text" />
        {hasUnreadNotifications && (
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        )}
      </button>
    </div>
  )
}

export default DashboardHeader
