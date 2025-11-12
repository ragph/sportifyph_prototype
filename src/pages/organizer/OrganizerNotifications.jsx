import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  IoTrophy,
  IoCash,
  IoPeople,
  IoMail,
  IoCheckmarkCircle,
  IoAlertCircle,
  IoGift,
  IoTrash,
  IoTime,
  IoClose,
  IoStar,
  IoCalendar
} from 'react-icons/io5'
import PageHeader from '../../components/PageHeader'

const OrganizerNotifications = () => {
  const navigate = useNavigate()
  const [filter, setFilter] = useState('all')
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'registration',
      icon: IoPeople,
      iconBg: 'bg-brand-primary/100',
      title: 'New Registration',
      message: 'Dink Masters registered for Metro Manila Pickleball Open',
      time: '5 minutes ago',
      read: false,
      action: () => navigate('/organizer/participants')
    },
    {
      id: 2,
      type: 'payment',
      icon: IoCash,
      iconBg: 'bg-brand-primary/100',
      title: 'Payment Received',
      message: 'Smash Squad paid ₱500 registration fee for Summer Pickleball Doubles Cup',
      time: '1 hour ago',
      read: false,
      action: () => navigate('/organizer/revenue')
    },
    {
      id: 3,
      type: 'tournament',
      icon: IoTrophy,
      iconBg: 'bg-brand-primary/100',
      title: 'Tournament Starting Soon',
      message: 'Corporate Pickleball Championship starts in 2 days. Check participant list and schedule.',
      time: '2 hours ago',
      read: false,
      action: () => navigate('/organizer/tournaments')
    },
    {
      id: 4,
      type: 'review',
      icon: IoStar,
      iconBg: 'bg-yellow-500',
      title: 'New Review',
      message: 'Net Ninjas gave 5 stars: "Excellent tournament organization and court setup!"',
      time: '3 hours ago',
      read: true,
      action: () => navigate('/organizer/profile')
    },
    {
      id: 5,
      type: 'message',
      icon: IoMail,
      iconBg: 'bg-indigo-500',
      title: 'New Message',
      message: 'Manila Picklers sent a message about match schedule inquiry',
      time: '5 hours ago',
      read: true,
      action: () => {}
    },
    {
      id: 6,
      type: 'cancellation',
      icon: IoClose,
      iconBg: 'bg-red-500',
      title: 'Registration Cancelled',
      message: 'Volley Vipers cancelled their registration for Manila Pickleball Masters',
      time: '1 day ago',
      read: true,
      action: () => navigate('/organizer/participants')
    },
    {
      id: 7,
      type: 'milestone',
      icon: IoCheckmarkCircle,
      iconBg: 'bg-green-600',
      title: 'Tournament Full',
      message: 'Metro Manila Pickleball Open has reached maximum participants (128/128)',
      time: '1 day ago',
      read: true,
      action: () => navigate('/organizer/tournaments')
    },
    {
      id: 8,
      type: 'reminder',
      icon: IoTime,
      iconBg: 'bg-brand-primary/100',
      title: 'Schedule Reminder',
      message: 'Remember to finalize match schedules for Summer Pickleball Doubles Cup by Nov 18',
      time: '2 days ago',
      read: true,
      action: () => navigate('/organizer/tournaments')
    },
    {
      id: 9,
      type: 'system',
      icon: IoAlertCircle,
      iconBg: 'bg-purple-600',
      title: 'Payout Ready',
      message: 'Your revenue of ₱145,000 is ready for withdrawal',
      time: '2 days ago',
      read: true,
      action: () => navigate('/organizer/revenue')
    },
    {
      id: 10,
      type: 'promotion',
      icon: IoGift,
      iconBg: 'bg-pink-500',
      title: 'Platform Feature',
      message: 'New: Create custom tournament brackets with our bracket builder tool!',
      time: '3 days ago',
      read: true,
      action: () => {}
    }
  ])

  const filters = [
    { id: 'all', label: 'All', count: notifications.length },
    { id: 'unread', label: 'Unread', count: notifications.filter(n => !n.read).length },
    { id: 'registration', label: 'Registrations', count: notifications.filter(n => n.type === 'registration').length },
    { id: 'payment', label: 'Payments', count: notifications.filter(n => n.type === 'payment').length }
  ]

  const markAsRead = (id) => {
    setNotifications(notifications.map(n =>
      n.id === id ? { ...n, read: true } : n
    ))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })))
  }

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id))
  }

  const filteredNotifications = notifications.filter(n => {
    if (filter === 'all') return true
    if (filter === 'unread') return !n.read
    return n.type === filter
  })

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <PageHeader
        title="Notifications"
        backPath="/organizer/dashboard"
        showSettings
        settingsPath="/organizer/settings"
      />

      <div className="max-w-lg mx-auto">
        <div className="px-4 py-4">
          <div className="mb-4">
            {/* Filter Tabs */}
            <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
              {filters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-colors ${
                    filter === f.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-dark-bg-secondary text-dark-text hover:bg-dark-bg-hover'
                  }`}
                >
                  {f.label} {f.count > 0 && `(${f.count})`}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="px-4">
        {/* Actions Bar */}
        {notifications.some(n => !n.read) && (
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-dark-text-secondary">
              {notifications.filter(n => !n.read).length} unread notifications
            </p>
            <button
              onClick={markAllAsRead}
              className="text-sm text-brand-primary hover:underline font-medium"
            >
              Mark all as read
            </button>
          </div>
        )}

        {/* Notifications List */}
        {filteredNotifications.length === 0 ? (
          <div className="bg-dark-bg-tertiary rounded-xl shadow-sm p-8 text-center">
            <IoCheckmarkCircle className="text-5xl text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-dark-text mb-1">No notifications</h3>
            <p className="text-sm text-dark-text-secondary">You're all caught up!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredNotifications.map((notification) => {
              const IconComponent = notification.icon
              return (
                <div
                  key={notification.id}
                  className={`bg-dark-bg-tertiary rounded-xl shadow-sm overflow-hidden transition-all ${
                    !notification.read ? 'border-l-4 border-purple-600' : ''
                  }`}
                >
                  <div className="p-4">
                    <div className="flex items-start space-x-3">
                      {/* Icon */}
                      <div className={`${notification.iconBg} rounded-full p-2 flex-shrink-0`}>
                        <IconComponent className="text-lg text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-1">
                          <h3 className={`text-sm font-semibold ${
                            !notification.read ? 'text-gray-900' : 'text-dark-text'
                          }`}>
                            {notification.title}
                          </h3>
                          <button
                            onClick={() => deleteNotification(notification.id)}
                            className="text-dark-text-muted hover:text-brand-primary ml-2"
                          >
                            <IoTrash className="text-lg" />
                          </button>
                        </div>
                        <p className={`text-sm mb-2 ${
                          !notification.read ? 'text-dark-text' : 'text-dark-text-muted'
                        }`}>
                          {notification.message}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-dark-text-muted">{notification.time}</span>
                          <div className="flex items-center space-x-2">
                            {!notification.read && (
                              <button
                                onClick={() => markAsRead(notification.id)}
                                className="text-xs text-brand-primary hover:underline font-medium"
                              >
                                Mark as read
                              </button>
                            )}
                            <button
                              onClick={notification.action}
                              className="text-xs text-brand-primary hover:underline font-medium"
                            >
                              View
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Clear All Button */}
        {filteredNotifications.length > 0 && (
          <button
            onClick={() => setNotifications([])}
            className="w-full mt-6 py-3 bg-dark-bg-tertiary hover:bg-red-50 text-brand-primary rounded-xl shadow-sm font-medium text-sm transition-colors"
          >
            Clear All Notifications
          </button>
        )}
        </div>
      </div>
    </div>
  )
}

export default OrganizerNotifications
