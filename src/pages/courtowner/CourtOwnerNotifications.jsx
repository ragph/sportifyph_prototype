import { useState } from 'react'
import {
  IoCheckmarkCircle,
  IoCalendar,
  IoCash,
  IoStorefront,
  IoPerson,
  IoTime,
  IoCloseCircle
} from 'react-icons/io5'
import PageHeader from '../../components/PageHeader'

const CourtOwnerNotifications = () => {
  const [filter, setFilter] = useState('all')

  const notifications = [
    {
      id: 1,
      type: 'booking',
      icon: IoCalendar,
      title: 'New Booking Request',
      message: 'Sarah Chen requested Pickleball Court A for Nov 12, 9:00 AM',
      time: '5 min ago',
      read: false,
      color: 'blue'
    },
    {
      id: 2,
      type: 'payment',
      icon: IoCash,
      title: 'Payment Received',
      message: 'Received ₱1,000 payment for Pickleball Court B booking',
      time: '30 min ago',
      read: false,
      color: 'green'
    },
    {
      id: 3,
      type: 'booking',
      icon: IoCalendar,
      title: 'New Booking Request',
      message: 'Juan Dela Cruz requested Court A - Basketball for Nov 12, 2:00 PM',
      time: '1 hour ago',
      read: false,
      color: 'blue'
    },
    {
      id: 4,
      type: 'payment',
      icon: IoCash,
      title: 'Payment Received',
      message: 'Received ₱1,600 payment for Basketball Court booking',
      time: '2 hours ago',
      read: true,
      color: 'green'
    },
    {
      id: 5,
      type: 'booking',
      icon: IoCheckmarkCircle,
      title: 'Booking Confirmed',
      message: 'Mike Torres\'s booking for Pickleball Court A has been confirmed',
      time: '3 hours ago',
      read: true,
      color: 'green'
    },
    {
      id: 6,
      type: 'booking',
      icon: IoCheckmarkCircle,
      title: 'Booking Confirmed',
      message: 'Maria Santos\'s booking for Court B - Volleyball has been confirmed',
      time: '4 hours ago',
      read: true,
      color: 'green'
    },
    {
      id: 7,
      type: 'cancellation',
      icon: IoCloseCircle,
      title: 'Booking Cancelled',
      message: 'Pedro Reyes cancelled Court A - Basketball booking for Nov 13',
      time: '5 hours ago',
      read: true,
      color: 'red'
    },
    {
      id: 8,
      type: 'review',
      icon: IoPerson,
      title: 'New Review',
      message: 'Lisa Wong left a 5-star review for Pickleball Court B',
      time: '6 hours ago',
      read: true,
      color: 'yellow'
    },
    {
      id: 9,
      type: 'booking',
      icon: IoTime,
      title: 'Upcoming Booking',
      message: 'Reminder: Pickleball Court A booking starts in 1 hour',
      time: '7 hours ago',
      read: true,
      color: 'purple'
    },
    {
      id: 10,
      type: 'review',
      icon: IoPerson,
      title: 'New Review',
      message: 'Tommy Lee left a 4-star review for Pickleball Court A',
      time: '8 hours ago',
      read: true,
      color: 'yellow'
    }
  ]

  const filters = [
    { id: 'all', label: 'All', count: notifications.length },
    { id: 'unread', label: 'Unread', count: notifications.filter(n => !n.read).length },
    { id: 'booking', label: 'Bookings', count: notifications.filter(n => n.type === 'booking').length },
    { id: 'payment', label: 'Payments', count: notifications.filter(n => n.type === 'payment').length }
  ]

  const filteredNotifications = filter === 'all'
    ? notifications
    : filter === 'unread'
    ? notifications.filter(n => !n.read)
    : notifications.filter(n => n.type === filter)

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <PageHeader
        title="Notifications"
        backPath="/courtowner/dashboard"
      />

      <div className="max-w-lg mx-auto">
        <div className="p-4">
          {/* Filters */}
          <div className="flex space-x-2 overflow-x-auto pb-2 mb-4">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-colors ${
                filter === f.id
                  ? 'bg-red-600 text-white'
                  : 'bg-dark-bg-tertiary text-dark-text hover:bg-dark-bg'
              }`}
            >
              {f.label} ({f.count})
            </button>
          ))}
          </div>

          {/* Notifications List */}
          <div className="space-y-3">
          {filteredNotifications.map((notification) => {
            const IconComponent = notification.icon
            return (
              <div
                key={notification.id}
                className={`bg-dark-bg-tertiary rounded-xl p-4 shadow-sm transition-all ${
                  !notification.read ? 'border-l-4 border-red-600' : ''
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-10 h-10 rounded-full bg-${notification.color}-100 flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className={`text-${notification.color}-600 text-xl`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <h3 className={`text-sm font-semibold ${!notification.read ? 'text-dark-text' : 'text-dark-text-secondary'}`}>
                        {notification.title}
                      </h3>
                      {!notification.read && (
                        <div className="w-2 h-2 rounded-full bg-red-600 flex-shrink-0 ml-2 mt-1"></div>
                      )}
                    </div>
                    <p className="text-sm text-dark-text-secondary mt-1">{notification.message}</p>
                    <p className="text-xs text-dark-text-muted mt-2">{notification.time}</p>
                  </div>
                </div>
              </div>
            )
          })}
          </div>

          {filteredNotifications.length === 0 && (
            <div className="text-center py-12">
              <IoCheckmarkCircle className="text-6xl text-gray-300 mx-auto mb-4" />
              <p className="text-dark-text-muted">No notifications</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CourtOwnerNotifications
