import { useState } from 'react'
import {
  IoCheckmarkCircle,
  IoBriefcase,
  IoPeople,
  IoStatsChart,
  IoMail,
  IoTrendingUp,
  IoCloseCircle
} from 'react-icons/io5'
import PageHeader from '../../components/PageHeader'

const SponsorNotifications = () => {
  const [filter, setFilter] = useState('all')

  const notifications = [
    {
      id: 1,
      type: 'partnership',
      icon: IoPeople,
      title: 'New Partnership Request',
      message: 'Dink Masters team sent you a pickleball sponsorship proposal',
      time: '5 min ago',
      read: false,
      color: 'blue'
    },
    {
      id: 2,
      type: 'campaign',
      icon: IoTrendingUp,
      title: 'Campaign Performance Update',
      message: 'Manila Open Pickleball Championship reached 2,100 athletes',
      time: '30 min ago',
      read: false,
      color: 'green'
    },
    {
      id: 3,
      type: 'partnership',
      icon: IoPeople,
      title: 'New Partnership Opportunity',
      message: 'Net Ninjas pickleball team interested in equipment sponsorship',
      time: '1 hour ago',
      read: false,
      color: 'blue'
    },
    {
      id: 4,
      type: 'campaign',
      icon: IoCheckmarkCircle,
      title: 'Pickleball Campaign Milestone',
      message: 'Pickleball Team Sponsorship - Dink Masters reached 1,850 athletes',
      time: '2 hours ago',
      read: true,
      color: 'green'
    },
    {
      id: 5,
      type: 'message',
      icon: IoMail,
      title: 'New Message',
      message: 'Coach Mike Santos sent you a message about pickleball clinic',
      time: '3 hours ago',
      read: true,
      color: 'indigo'
    },
    {
      id: 6,
      type: 'campaign',
      icon: IoTrendingUp,
      title: 'Campaign Performance Update',
      message: 'Summer Basketball League reached 1,250 athletes',
      time: '4 hours ago',
      read: true,
      color: 'green'
    },
    {
      id: 7,
      type: 'analytics',
      icon: IoStatsChart,
      title: 'Weekly Report Available',
      message: 'Your weekly analytics report is ready to view',
      time: '5 hours ago',
      read: true,
      color: 'purple'
    },
    {
      id: 8,
      type: 'campaign',
      icon: IoCloseCircle,
      title: 'Campaign Budget Alert',
      message: 'Youth Volleyball Development is at 90% of budget',
      time: '6 hours ago',
      read: true,
      color: 'red'
    },
    {
      id: 9,
      type: 'partnership',
      icon: IoPeople,
      title: 'Partnership Interest',
      message: 'Manila Picklers interested in long-term pickleball sponsorship',
      time: '8 hours ago',
      read: true,
      color: 'blue'
    }
  ]

  const filters = [
    { id: 'all', label: 'All', count: notifications.length },
    { id: 'unread', label: 'Unread', count: notifications.filter(n => !n.read).length },
    { id: 'campaign', label: 'Campaigns', count: notifications.filter(n => n.type === 'campaign').length },
    { id: 'partnership', label: 'Partnerships', count: notifications.filter(n => n.type === 'partnership').length }
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
        backPath="/sponsor/dashboard"
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
                  ? 'bg-indigo-600 text-white'
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
                  !notification.read ? 'border-l-4 border-indigo-600' : ''
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
                        <div className="w-2 h-2 rounded-full bg-indigo-600 flex-shrink-0 ml-2 mt-1"></div>
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

export default SponsorNotifications
