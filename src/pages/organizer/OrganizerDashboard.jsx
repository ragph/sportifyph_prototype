import { useNavigate } from 'react-router-dom'
import {
  IoTrophy,
  IoPeople,
  IoCash,
  IoCalendar,
  IoAdd,
  IoCheckmarkCircle,
  IoTime,
  IoArrowForward,
  IoLocationSharp,
  IoStar,
  IoNotifications,
  IoSettings
} from 'react-icons/io5'
import DashboardWelcomeBanner from '../../components/DashboardWelcomeBanner'
import SubscriptionBanner from '../../components/SubscriptionBanner'
import QuickActions from '../../components/QuickActions'
import SurveySection from '../../components/SurveySection'
import Card from '../../components/Card'
import StatusBadge from '../../components/StatusBadge'
import { surveys } from '../../data/surveyData'

const OrganizerDashboard = () => {
  const navigate = useNavigate()

  // Mock subscription data
  const subscriptionInfo = {
    isActive: true,
    plan: 'Pro Organizer',
    daysRemaining: 25,
    expiryDate: '2024-12-05'
  }

  const stats = {
    activeTournaments: 3,
    totalParticipants: 248,
    monthlyRevenue: 185600,
    upcomingEvents: 5
  }

  const activeTournaments = [
    {
      id: 1,
      name: 'Manila Open Pickleball Championship',
      type: 'Pickleball',
      participants: 128,
      startDate: 'Nov 15, 2024',
      status: 'Registration Open',
      statusColor: 'bg-brand-primary/20 text-brand-primary ring-1 ring-brand-primary/30',
      revenue: 102400
    },
    {
      id: 2,
      name: 'BGC Doubles Pickleball Tournament',
      type: 'Pickleball',
      participants: 64,
      startDate: 'Nov 20, 2024',
      status: 'Upcoming',
      statusColor: 'bg-blue-100 text-blue-700',
      revenue: 38400
    },
    {
      id: 3,
      name: 'Corporate Pickleball League',
      type: 'Pickleball',
      participants: 56,
      startDate: 'Nov 12, 2024',
      status: 'Ongoing',
      statusColor: 'bg-purple-100 text-purple-700',
      revenue: 44800
    }
  ]

  const recentRegistrations = [
    {
      id: 1,
      teamName: 'Dink Masters',
      tournament: 'Manila Open Pickleball Championship',
      registeredDate: '2 hours ago',
      amount: 800
    },
    {
      id: 2,
      teamName: 'Smash Squad',
      tournament: 'BGC Doubles Pickleball Tournament',
      registeredDate: '5 hours ago',
      amount: 600
    },
    {
      id: 3,
      teamName: 'Net Ninjas',
      tournament: 'Corporate Pickleball League',
      registeredDate: '1 day ago',
      amount: 800
    }
  ]

  const quickActions = [
    {
      id: 1,
      title: 'Create Tournament',
      icon: IoAdd,
      bgColor: 'bg-brand-primary/10',
      iconColor: 'text-brand-primary',
      action: () => navigate('/organizer/tournaments/create')
    },
    {
      id: 2,
      title: 'View Participants',
      icon: IoPeople,
      bgColor: 'bg-brand-primary/10',
      iconColor: 'text-brand-primary',
      action: () => navigate('/organizer/participants')
    },
    {
      id: 3,
      title: 'Check Revenue',
      icon: IoCash,
      bgColor: 'bg-brand-primary/10',
      iconColor: 'text-brand-primary',
      action: () => navigate('/organizer/revenue')
    }
  ]

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <div className="max-w-lg mx-auto p-4 space-y-6">
        {/* Welcome Section */}
        <DashboardWelcomeBanner
          userName="Organizer"
          module="organizer"
          emoji="🏆"
          description={`You have ${stats.activeTournaments} active tournaments`}
        />

      {/* Subscription Banner */}
      <SubscriptionBanner
        isActive={subscriptionInfo.isActive}
        daysRemaining={subscriptionInfo.daysRemaining}
        module="organizer"
        plan={subscriptionInfo.plan}
        onNavigate={() => navigate('/organizer/subscription')}
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-3">
        <Card padding="p-4">
          <IoTrophy className="text-2xl text-brand-primary mb-2" />
          <div className="text-2xl font-bold text-dark-text">{stats.activeTournaments}</div>
          <div className="text-xs text-dark-text-secondary">Active Tournaments</div>
        </Card>
        <Card padding="p-4">
          <IoPeople className="text-2xl text-brand-primary mb-2" />
          <div className="text-2xl font-bold text-dark-text">{stats.totalParticipants}</div>
          <div className="text-xs text-dark-text-secondary">Total Participants</div>
        </Card>
        <Card padding="p-4">
          <IoCash className="text-2xl text-brand-primary mb-2" />
          <div className="text-2xl font-bold text-dark-text">₱{stats.monthlyRevenue.toLocaleString()}</div>
          <div className="text-xs text-dark-text-secondary">This Month</div>
        </Card>
        <Card padding="p-4">
          <IoCalendar className="text-2xl text-brand-primary mb-2" />
          <div className="text-2xl font-bold text-dark-text">{stats.upcomingEvents}</div>
          <div className="text-xs text-dark-text-secondary">Upcoming Events</div>
        </Card>
      </div>

      {/* Quick Actions */}
      <QuickActions actions={quickActions} />

      {/* Active Tournaments */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-dark-text">Active Tournaments</h3>
          <button
            onClick={() => navigate('/organizer/tournaments')}
            className="text-sm text-brand-primary hover:underline font-medium"
          >
            View All
          </button>
        </div>
        <div className="space-y-3">
          {activeTournaments.map((tournament) => (
            <Card key={tournament.id} padding="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <StatusBadge
                      variant={
                        tournament.status === 'Registration Open' ? 'primary' :
                        tournament.status === 'Upcoming' ? 'info' :
                        tournament.status === 'Ongoing' ? 'purple' :
                        'default'
                      }
                      size="md"
                      rounded="default"
                    >
                      {tournament.status}
                    </StatusBadge>
                    <StatusBadge variant="default" size="md" rounded="default">
                      {tournament.type}
                    </StatusBadge>
                  </div>
                  <h4 className="font-semibold text-dark-text mb-1">{tournament.name}</h4>
                  <div className="flex items-center text-xs text-dark-text-secondary space-x-3">
                    <div className="flex items-center">
                      <IoPeople className="mr-1" />
                      <span>{tournament.participants} participants</span>
                    </div>
                    <div className="flex items-center">
                      <IoCalendar className="mr-1" />
                      <span>{tournament.startDate}</span>
                    </div>
                  </div>
                </div>
                <button className="text-brand-primary hover:bg-brand-primary/10 p-2 rounded-full">
                  <IoArrowForward />
                </button>
              </div>
              <div className="pt-3 border-t border-dark-border">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-dark-text-secondary">Revenue</span>
                  <span className="text-sm font-bold text-brand-primary">₱{tournament.revenue.toLocaleString()}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Registrations */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-dark-text">Recent Registrations</h3>
          <button
            onClick={() => navigate('/organizer/participants')}
            className="text-sm text-brand-primary hover:underline font-medium"
          >
            View All
          </button>
        </div>
        <Card noPadding className="overflow-hidden">
          {recentRegistrations.map((reg, index) => (
            <div
              key={reg.id}
              className={`p-4 flex items-center justify-between ${
                index !== recentRegistrations.length - 1 ? 'border-b border-dark-border' : ''
              }`}
            >
              <div className="flex-1">
                <h4 className="font-semibold text-dark-text text-sm">{reg.teamName}</h4>
                <p className="text-xs text-dark-text-secondary">{reg.tournament}</p>
                <p className="text-xs text-dark-text-muted mt-1">{reg.registeredDate}</p>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-brand-primary">₱{reg.amount}</div>
                <IoCheckmarkCircle className="text-brand-primary ml-auto mt-1" />
              </div>
            </div>
          ))}
        </Card>
      </div>

      {/* Surveys & Rewards */}
      <SurveySection surveys={surveys} module="organizer" />
      </div>
    </div>
  )
}

export default OrganizerDashboard
