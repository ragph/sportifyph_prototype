import PropTypes from 'prop-types'
import { IoLogOut, IoClose } from 'react-icons/io5'

const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 animate-fade-in">
      <div className="bg-dark-bg-tertiary rounded-2xl shadow-2xl max-w-sm w-full animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-dark-border">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
              <IoLogOut className="text-xl text-red-600" />
            </div>
            <h3 className="text-lg font-bold text-dark-text">Confirm Logout</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-dark-bg-secondary rounded-full transition-colors"
          >
            <IoClose className="text-xl text-dark-text-muted" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-dark-text-secondary text-sm leading-relaxed">
            Are you sure you want to logout? You will need to sign in again to access your account.
          </p>
        </div>

        {/* Actions */}
        <div className="flex space-x-3 p-6 pt-0">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 bg-dark-bg-secondary hover:bg-dark-bg-hover text-dark-text rounded-lg font-semibold transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

LogoutModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired
}

export default LogoutModal
