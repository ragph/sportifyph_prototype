import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import {
  IoPeople,
  IoCalendar,
  IoCash,
  IoCheckmarkCircle,
  IoTime,
  IoInformationCircle
} from 'react-icons/io5'

const ClubGMNotifications = () => {
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState('all')

  const notifications = [
    {
      id: 1,
      type: 'member',
      icon: IoPeople,
      iconColor: 'text-brand-primary',
      title: 'New Member Request',
      message: 'Pedro Garcia requested to join Dink Masters team',
      time: '2 hours ago',
      read: false
    },
    {
      id: 2,
      type: 'payment',
      icon: IoCash,
      iconColor: 'text-brand-primary',
      title: 'Payment Received',
      message: 'Juan Dela Cruz paid ₱650 for Club Pickleball Championship',
      time: '3 hours ago',
      read: false
    },
    {
      id: 3,
      type: 'event',
      icon: IoCalendar,
      iconColor: 'text-brand-primary',
      title: 'Event Registration Full',
      message: 'Club Pickleball Championship has reached maximum capacity',
      time: '5 hours ago',
      read: true
    },
    {
      id: 4,
      type: 'member',
      icon: IoPeople,
      iconColor: 'text-brand-primary',
      title: 'New Member Joined',
      message: 'Maria Santos joined Smash Squad team',
      time: '1 day ago',
      read: true
    },
    {
      id: 5,
      type: 'event',
      icon: IoCalendar,
      iconColor: 'text-brand-primary',
      title: 'Event Reminder',
      message: 'Weekly Pickleball Drills starts in 2 days',
      time: '1 day ago',
      read: true
    },
    {
      id: 6,
      type: 'payment',
      icon: IoCash,
      iconColor: 'text-brand-primary',
      title: 'Payment Pending',
      message: 'Ana Reyes has a pending payment of ₱200 for monthly membership',
      time: '2 days ago',
      read: true
    },
    {
      id: 7,
      type: 'event',
      icon: IoCalendar,
      iconColor: 'text-brand-primary',
      title: 'New Event Created',
      message: 'Youth Pickleball Development Camp scheduled for Nov 18-20',
      time: '3 days ago',
      read: true
    },
    {
      id: 8,
      type: 'info',
      icon: IoInformationCircle,
      iconColor: 'text-brand-primary',
      title: 'Certification Update',
      message: 'Club renewed USAPA and PPR certifications',
      time: '4 days ago',
      read: true
    }
  ]

  const filters = [
    { id: 'all', label: 'All', count: notifications.length },
    { id: 'unread', label: 'Unread', count: notifications.filter(n => !n.read).length },
    { id: 'member', label: 'Members', count: notifications.filter(n => n.type === 'member').length },
    { id: 'payment', label: 'Payments', count: notifications.filter(n => n.type === 'payment').length },
    { id: 'event', label: 'Events', count: notifications.filter(n => n.type === 'event').length }
  ]

  const filteredNotifications = notifications.filter(notification => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'unread') return !notification.read
    return notification.type === activeFilter
  })

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <PageHeader
        title="Notifications"
        showBack={true}
        backPath="/clubgm/dashboard"
      />

      <div className="max-w-md mx-auto">
        {/* Filters */}
        <div className="bg-dark-bg-tertiary border-b border-dark-border px-4 py-3 sticky top-14 z-10">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-orange-600 text-white'
                    : 'bg-dark-bg-secondary text-dark-text hover:bg-dark-bg-hover'
                }`}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>
        </div>

        {/* Notifications List */}
        <div className="p-4 space-y-3">
          {filteredNotifications.map((notification) => {
            const IconComponent = notification.icon
            return (
              <div
                key={notification.id}
                className={`bg-dark-bg-tertiary rounded-xl shadow-sm p-4 border ${
                  notification.read ? 'border-dark-border' : 'border-orange-200 bg-brand-primary/10/30'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-10 h-10 rounded-full bg-dark-bg-secondary flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className={`text-xl ${notification.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-semibold text-dark-text text-sm">{notification.title}</h3>
                      {!notification.read && (
                        <span className="w-2 h-2 bg-orange-600 rounded-full flex-shrink-0 mt-1"></span>
                      )}
                    </div>
                    <p className="text-sm text-dark-text-secondary mb-2">{notification.message}</p>
                    <div className="flex items-center text-xs text-dark-text-muted">
                      <IoTime className="mr-1" />
                      {notification.time}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}

          {filteredNotifications.length === 0 && (
            <div className="bg-dark-bg-tertiary rounded-xl shadow-sm p-8 text-center">
              <IoCheckmarkCircle className="text-5xl text-gray-300 mx-auto mb-3" />
              <p className="text-dark-text-muted">No notifications</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ClubGMNotifications
