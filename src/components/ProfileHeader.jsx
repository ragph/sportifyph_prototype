import { useNavigate } from 'react-router-dom'
import { IoSettings } from 'react-icons/io5'

const ProfileHeader = ({ settingsPath }) => {
  const navigate = useNavigate()

  return (
    <div className="flex justify-end">
      <button
        onClick={() => navigate(settingsPath)}
        className="p-2 bg-dark-bg-tertiary hover:bg-dark-bg-secondary rounded-full shadow-sm transition-colors"
      >
        <IoSettings className="text-2xl text-dark-text" />
      </button>
    </div>
  )
}

export default ProfileHeader
