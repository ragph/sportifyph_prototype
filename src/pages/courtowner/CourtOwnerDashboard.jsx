import { useNavigate } from 'react-router-dom'
import {
  IoStorefront,
  IoCalendar,
  IoCash,
  IoPeople,
  IoAddCircle,
  IoStatsChart,
  IoTime,
  IoCheckmarkCircle,
  IoCloseCircle
} from 'react-icons/io5'
import DashboardWelcomeBanner from '../../components/DashboardWelcomeBanner'
import SubscriptionBanner from '../../components/SubscriptionBanner'
import QuickActions from '../../components/QuickActions'
import SurveySection from '../../components/SurveySection'
import { surveys } from '../../data/surveyData'

const CourtOwnerDashboard = () => {
  const navigate = useNavigate()

  // Mock data
  const subscriptionInfo = {
    isActive: true,
    plan: 'Pro',
    daysRemaining: 25,
    expiryDate: '2024-12-05'
  }

  const stats = [
    { icon: IoStorefront, value: '6', label: 'Courts', color: 'red' },
    { icon: IoCalendar, value: '62', label: 'Bookings', color: 'red' },
    { icon: IoCash, value: '₱148K', label: 'Revenue', color: 'red' },
    { icon: IoPeople, value: '289', label: 'Customers', color: 'red' }
  ]

  const quickActions = [
    {
      id: 1,
      title: 'Add Court',
      icon: IoAddCircle,
      bgColor: 'bg-brand-primary/10',
      iconColor: 'text-brand-primary',
      action: () => navigate('/courtowner/courts')
    },
    {
      id: 2,
      title: 'Bookings',
      icon: IoCalendar,
      bgColor: 'bg-brand-primary/10',
      iconColor: 'text-brand-primary',
      action: () => navigate('/courtowner/bookings')
    },
    {
      id: 3,
      title: 'Revenue',
      icon: IoStatsChart,
      bgColor: 'bg-brand-primary/10',
      iconColor: 'text-brand-primary',
      action: () => navigate('/courtowner/revenue')
    }
  ]

  const upcomingBookings = [
    {
      id: 1,
      courtName: 'Pickleball Court A',
      customerName: 'Sarah Chen',
      date: '2024-11-11',
      time: '09:00 AM - 11:00 AM',
      amount: 500,
      status: 'confirmed'
    },
    {
      id: 2,
      courtName: 'Court B - Basketball',
      customerName: 'Juan Dela Cruz',
      date: '2024-11-11',
      time: '11:00 AM - 01:00 PM',
      amount: 800,
      status: 'confirmed'
    },
    {
      id: 3,
      courtName: 'Pickleball Court B',
      customerName: 'Mike Torres',
      date: '2024-11-11',
      time: '02:00 PM - 04:00 PM',
      amount: 450,
      status: 'confirmed'
    },
    {
      id: 4,
      courtName: 'Court C - Volleyball',
      customerName: 'Maria Santos',
      date: '2024-11-11',
      time: '04:00 PM - 06:00 PM',
      amount: 600,
      status: 'pending'
    },
    {
      id: 5,
      courtName: 'Court A - Basketball',
      customerName: 'Pedro Reyes',
      date: '2024-11-11',
      time: '06:00 PM - 08:00 PM',
      amount: 800,
      status: 'pending'
    }
  ]

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <div className="max-w-lg mx-auto p-4 space-y-6">
        {/* Welcome Banner */}
        <DashboardWelcomeBanner
          userName="Elite Sports Center"
          module="courtowner"
          description="Manage your courts and bookings efficiently"
        />

        {/* Subscription Banner */}
        <SubscriptionBanner
          isActive={subscriptionInfo.isActive}
          daysRemaining={subscriptionInfo.daysRemaining}
          module="courtowner"
          plan={subscriptionInfo.plan}
          onNavigate={() => navigate('/courtowner/subscription')}
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="bg-dark-bg-tertiary rounded-xl p-4 shadow-sm border border-dark-border">
                <IconComponent className={`text-2xl text-${stat.color}-600 mb-2`} />
                <div className="text-2xl font-bold text-dark-text">{stat.value}</div>
                <div className="text-xs text-dark-text-secondary">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Quick Actions */}
        <QuickActions actions={quickActions} />

        {/* Today's Bookings */}
        <div className="bg-dark-bg-tertiary rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-dark-text">Today's Bookings</h2>
            <button
              onClick={() => navigate('/courtowner/bookings')}
              className="text-sm text-brand-primary font-semibold hover:underline"
            >
              View All
            </button>
          </div>
          <div className="space-y-3">
            {upcomingBookings.map((booking) => (
              <div key={booking.id} className="p-3 bg-dark-bg rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="font-semibold text-dark-text text-sm">{booking.courtName}</h3>
                    <p className="text-xs text-dark-text-secondary mt-0.5">{booking.customerName}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    booking.status === 'confirmed'
                      ? 'bg-brand-primary/20 text-brand-primary ring-1 ring-brand-primary/30'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {booking.status === 'confirmed' ? <IoCheckmarkCircle className="inline mr-1" /> : <IoTime className="inline mr-1" />}
                    {booking.status}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-dark-text-muted">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center">
                      <IoCalendar className="mr-1" />
                      {booking.date}
                    </span>
                    <span className="flex items-center">
                      <IoTime className="mr-1" />
                      {booking.time}
                    </span>
                  </div>
                  <span className="font-semibold text-dark-text">₱{booking.amount}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Surveys & Rewards */}
        <SurveySection surveys={surveys} module="courtowner" />
      </div>
    </div>
  )
}

export default CourtOwnerDashboard
