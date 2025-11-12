import { IoLogOut } from 'react-icons/io5'
import PropTypes from 'prop-types'

const LogoutButton = ({ onLogout }) => {
  return (
    <div className="bg-dark-bg-tertiary rounded-xl shadow-sm overflow-hidden">
      <button
        onClick={onLogout}
        className="w-full flex items-center justify-between p-4 hover:bg-red-50 transition-colors"
      >
        <div className="flex items-center space-x-3">
          <IoLogOut className="text-xl text-red-600" />
          <span className="text-sm font-medium text-red-600">Logout</span>
        </div>
      </button>
    </div>
  )
}

LogoutButton.propTypes = {
  onLogout: PropTypes.func.isRequired
}

export default LogoutButton
