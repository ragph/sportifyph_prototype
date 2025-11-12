import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  IoPeople,
  IoCalendar,
  IoCash,
  IoTrophy,
  IoAdd,
  IoCheckmarkCircle,
  IoTime,
  IoArrowForward,
  IoStar,
  IoTrendingUp,
  IoNotifications,
  IoSettings
} from 'react-icons/io5'
import DashboardWelcomeBanner from '../../components/DashboardWelcomeBanner'
import SubscriptionBanner from '../../components/SubscriptionBanner'
import QuickActions from '../../components/QuickActions'
import SurveySection from '../../components/SurveySection'
import { surveys } from '../../data/surveyData'

const ClubGMDashboard = () => {
  const navigate = useNavigate()

  // Mock subscription data
  const subscriptionInfo = {
    isActive: true,
    plan: 'Pro Club',
    daysRemaining: 25,
    expiryDate: '2024-12-05'
  }

  const stats = {
    totalMembers: 156,
    activeMembers: 142,
    upcomingEvents: 8,
    monthlyRevenue: 78000
  }

  const upcomingEvents = [
    {
      id: 1,
      name: 'Weekly Pickleball Drills & Practice',
      type: 'Training',
      date: 'Nov 12, 2024',
      time: '6:00 PM',
      participants: 24,
      status: 'Confirmed',
      statusColor: 'bg-brand-primary/20 text-brand-primary ring-1 ring-brand-primary/30'
    },
    {
      id: 2,
      name: 'Club Pickleball Championship',
      type: 'Tournament',
      date: 'Nov 15, 2024',
      time: '2:00 PM',
      participants: 32,
      status: 'Upcoming',
      statusColor: 'bg-blue-100 text-blue-700'
    },
    {
      id: 3,
      name: 'Youth Pickleball Development Camp',
      type: 'Camp',
      date: 'Nov 18, 2024',
      time: '9:00 AM',
      participants: 18,
      status: 'Registration Open',
      statusColor: 'bg-orange-100 text-orange-700'
    }
  ]

  const recentMembers = [
    {
      id: 1,
      name: 'Juan Dela Cruz',
      membershipType: 'Premium',
      joinedDate: '2 days ago',
      status: 'Active',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      name: 'Maria Santos',
      membershipType: 'Standard',
      joinedDate: '5 days ago',
      status: 'Active',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
    {
      id: 3,
      name: 'Pedro Garcia',
      membershipType: 'Premium',
      joinedDate: '1 week ago',
      status: 'Pending',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
    }
  ]

  const quickActions = [
    {
      id: 1,
      title: 'Add Member',
      icon: IoAdd,
      bgColor: 'bg-brand-primary/10',
      iconColor: 'text-brand-primary',
      action: () => navigate('/clubgm/members/add')
    },
    {
      id: 2,
      title: 'Create Event',
      icon: IoCalendar,
      bgColor: 'bg-brand-primary/10',
      iconColor: 'text-brand-primary',
      action: () => navigate('/clubgm/events/create')
    },
    {
      id: 3,
      title: 'View Finances',
      icon: IoCash,
      bgColor: 'bg-brand-primary/10',
      iconColor: 'text-brand-primary',
      action: () => navigate('/clubgm/finances')
    }
  ]

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <div className="max-w-lg mx-auto p-4 space-y-6">
        {/* Welcome Section */}
        <DashboardWelcomeBanner
          userName="Club Manager"
          module="clubgm"
          emoji="🏆"
          description={`You have ${stats.totalMembers} total members`}
        />

      {/* Subscription Banner */}
      <SubscriptionBanner
        isActive={subscriptionInfo.isActive}
        daysRemaining={subscriptionInfo.daysRemaining}
        module="clubgm"
        plan={subscriptionInfo.plan}
        onNavigate={() => navigate('/clubgm/subscription')}
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-dark-bg-tertiary rounded-xl p-4 shadow-sm border border-dark-border">
          <IoPeople className="text-2xl text-brand-primary mb-2" />
          <div className="text-2xl font-bold text-dark-text">{stats.totalMembers}</div>
          <div className="text-xs text-dark-text-secondary">Total Members</div>
        </div>
        <div className="bg-dark-bg-tertiary rounded-xl p-4 shadow-sm border border-dark-border">
          <IoCheckmarkCircle className="text-2xl text-brand-primary mb-2" />
          <div className="text-2xl font-bold text-dark-text">{stats.activeMembers}</div>
          <div className="text-xs text-dark-text-secondary">Active Members</div>
        </div>
        <div className="bg-dark-bg-tertiary rounded-xl p-4 shadow-sm border border-dark-border">
          <IoCalendar className="text-2xl text-brand-primary mb-2" />
          <div className="text-2xl font-bold text-dark-text">{stats.upcomingEvents}</div>
          <div className="text-xs text-dark-text-secondary">Upcoming Events</div>
        </div>
        <div className="bg-dark-bg-tertiary rounded-xl p-4 shadow-sm border border-dark-border">
          <IoCash className="text-2xl text-brand-primary mb-2" />
          <div className="text-2xl font-bold text-dark-text">₱{stats.monthlyRevenue.toLocaleString()}</div>
          <div className="text-xs text-dark-text-secondary">This Month</div>
        </div>
      </div>

      {/* Quick Actions */}
      <QuickActions actions={quickActions} />

      {/* Upcoming Events */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-dark-text">Upcoming Events</h3>
          <button
            onClick={() => navigate('/clubgm/events')}
            className="text-sm text-brand-primary hover:underline font-medium"
          >
            View All
          </button>
        </div>
        <div className="space-y-3">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="bg-dark-bg-tertiary rounded-xl shadow-sm p-4 border border-dark-border">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${event.statusColor}`}>
                      {event.status}
                    </span>
                    <span className="px-2 py-1 bg-dark-bg-secondary text-dark-text rounded text-xs font-medium">
                      {event.type}
                    </span>
                  </div>
                  <h4 className="font-semibold text-dark-text mb-1">{event.name}</h4>
                  <div className="flex items-center text-xs text-dark-text-secondary space-x-3">
                    <div className="flex items-center">
                      <IoCalendar className="mr-1" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <IoTime className="mr-1" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>
                <button className="text-brand-primary hover:bg-brand-primary/10 p-2 rounded-full">
                  <IoArrowForward />
                </button>
              </div>
              <div className="pt-3 border-t border-dark-border flex justify-between items-center">
                <span className="text-xs text-dark-text-secondary">Participants</span>
                <span className="text-sm font-bold text-brand-primary">{event.participants} registered</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Members */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-dark-text">Recent Members</h3>
          <button
            onClick={() => navigate('/clubgm/members')}
            className="text-sm text-brand-primary hover:underline font-medium"
          >
            View All
          </button>
        </div>
        <div className="bg-dark-bg-tertiary rounded-xl shadow-sm overflow-hidden border border-dark-border">
          {recentMembers.map((member, index) => (
            <div
              key={member.id}
              className={`p-4 flex items-center justify-between ${
                index !== recentMembers.length - 1 ? 'border-b border-dark-border' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-dark-text text-sm">{member.name}</h4>
                  <p className="text-xs text-dark-text-secondary">{member.membershipType} • {member.joinedDate}</p>
                </div>
              </div>
              <div className="text-right">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  member.status === 'Active'
                    ? 'bg-brand-primary/20 text-brand-primary ring-1 ring-brand-primary/30'
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {member.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Monthly Overview */}
      <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl shadow-lg p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">This Month's Performance</h3>
          <IoTrendingUp className="text-2xl" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-2xl font-bold">₱{stats.monthlyRevenue.toLocaleString()}</div>
            <div className="text-xs opacity-90">Revenue</div>
          </div>
          <div>
            <div className="text-2xl font-bold">+{stats.activeMembers - 120}</div>
            <div className="text-xs opacity-90">New Members</div>
          </div>
        </div>
        </div>

        {/* Surveys & Rewards */}
        <SurveySection surveys={surveys} module="clubgm" />
      </div>
    </div>
  )
}

export default ClubGMDashboard
