import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  IoCalendar,
  IoTime,
  IoPeople,
  IoCash,
  IoStar,
  IoTrophy,
  IoCheckmarkCircle,
  IoCloseCircle,
  IoArrowForward,
  IoAdd,
  IoFlash,
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

const CoachDashboard = () => {
  const navigate = useNavigate()

  // Mock subscription data
  const subscriptionInfo = {
    isActive: true,
    plan: 'Pro Coach',
    daysRemaining: 25,
    expiryDate: '2024-12-05'
  }

  const todayStats = {
    sessions: 3,
    students: 12,
    earnings: 1500,
    rating: 4.8
  }

  const upcomingSessions = [
    {
      id: 1,
      student: 'Juan Dela Cruz',
      type: 'Individual',
      time: '2:00 PM',
      duration: '1 hour',
      status: 'confirmed',
      payment: 500
    },
    {
      id: 2,
      student: 'Maria Santos & 3 others',
      type: 'Group',
      time: '4:00 PM',
      duration: '1.5 hours',
      status: 'confirmed',
      payment: 750
    },
    {
      id: 3,
      student: 'Pedro Garcia',
      type: 'Individual',
      time: '6:00 PM',
      duration: '1 hour',
      status: 'pending',
      payment: 500
    }
  ]

  const recentStudents = [
    {
      id: 1,
      name: 'Juan Dela Cruz',
      sessions: 12,
      progress: 'Excellent',
      lastSession: '2 days ago',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      name: 'Maria Santos',
      sessions: 8,
      progress: 'Good',
      lastSession: '1 day ago',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
    {
      id: 3,
      name: 'Pedro Garcia',
      sessions: 5,
      progress: 'Improving',
      lastSession: 'Today',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
    }
  ]

  const weeklyEarnings = {
    total: 8500,
    sessions: 15,
    avgPerSession: 567
  }

  const quickActions = [
    {
      id: 1,
      title: 'New Session',
      icon: IoAdd,
      color: 'from-brand-primary to-brand-primary-dark',
      bgColor: 'bg-brand-primary/10',
      iconColor: 'text-brand-primary',
      action: () => navigate('/coach/sessions/create')
    },
    {
      id: 2,
      title: 'View Schedule',
      icon: IoCalendar,
      color: 'from-brand-primary to-brand-primary-dark',
      bgColor: 'bg-brand-primary/10',
      iconColor: 'text-brand-primary',
      action: () => navigate('/coach/schedule')
    },
    {
      id: 3,
      title: 'Students',
      icon: IoPeople,
      color: 'from-brand-primary to-brand-primary-dark',
      bgColor: 'bg-brand-primary/10',
      iconColor: 'text-brand-primary',
      action: () => navigate('/coach/students')
    }
  ]

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <div className="max-w-lg mx-auto p-4 space-y-6">
        {/* Welcome Section */}
        <DashboardWelcomeBanner
          userName="Coach Mike"
          module="coach"
          description={`You have ${upcomingSessions.length} sessions scheduled today`}
        />

      {/* Subscription Banner */}
      <SubscriptionBanner
        isActive={subscriptionInfo.isActive}
        daysRemaining={subscriptionInfo.daysRemaining}
        module="coach"
        plan={subscriptionInfo.plan}
        onNavigate={() => navigate('/coach/subscription')}
      />

      {/* Today's Stats */}
      <div className="grid grid-cols-2 gap-3">
        <Card padding="p-3" className="text-center border-l-4 border-l-brand-primary hover:shadow-lg hover:shadow-brand-primary/10 transition-all">
          <div className="text-2xl font-bold text-brand-primary">{todayStats.sessions}</div>
          <div className="text-xs text-dark-text-secondary mt-1">Sessions</div>
        </Card>
        <Card padding="p-3" className="text-center border-l-4 border-l-brand-primary hover:shadow-lg hover:shadow-brand-primary/10 transition-all">
          <div className="text-2xl font-bold text-brand-primary">{todayStats.students}</div>
          <div className="text-xs text-dark-text-secondary mt-1">Students</div>
        </Card>
        <Card padding="p-3" className="text-center border-l-4 border-l-brand-primary hover:shadow-lg hover:shadow-brand-primary/10 transition-all">
          <div className="text-xl font-bold text-brand-primary">₱{todayStats.earnings}</div>
          <div className="text-xs text-dark-text-secondary mt-1">Earnings</div>
        </Card>
        <Card padding="p-3" className="text-center border-l-4 border-l-brand-primary hover:shadow-lg hover:shadow-brand-primary/10 transition-all">
          <div className="text-2xl font-bold text-brand-primary flex items-center justify-center">
            <IoStar className="mr-1" />
            {todayStats.rating}
          </div>
          <div className="text-xs text-dark-text-secondary mt-1">Rating</div>
        </Card>
      </div>

      {/* Quick Actions */}
      <QuickActions actions={quickActions} />

      {/* Upcoming Sessions */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold text-dark-text">Today's Sessions</h2>
          <button
            onClick={() => navigate('/coach/sessions')}
            className="text-sm text-brand-primary hover:text-brand-primary-dark font-medium transition-colors"
          >
            View All
          </button>
        </div>
        <div className="space-y-3">
          {upcomingSessions.map((session) => (
            <Card key={session.id} padding="p-4" className="border-l-4 border-l-brand-primary hover:shadow-lg hover:shadow-brand-primary/10 transition-all">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <StatusBadge
                      variant={session.status === 'confirmed' ? 'primary' : 'warning'}
                      size="md"
                      rounded="default"
                      icon={session.status === 'confirmed' ? <IoCheckmarkCircle /> : <IoTime />}
                    >
                      {session.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                    </StatusBadge>
                    <StatusBadge variant="info-light" size="md" rounded="default">
                      {session.type}
                    </StatusBadge>
                  </div>
                  <h3 className="font-semibold text-dark-text">{session.student}</h3>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-brand-primary">₱{session.payment}</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm text-dark-text-secondary">
                <div className="flex items-center">
                  <IoTime className="mr-1" />
                  <span>{session.time}</span>
                </div>
                <div className="flex items-center">
                  <IoCalendar className="mr-1" />
                  <span>{session.duration}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Weekly Earnings */}
      <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">This Week</h3>
          <IoFlash className="text-2xl" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <div className="text-2xl font-bold">₱{weeklyEarnings.total.toLocaleString()}</div>
            <div className="text-xs opacity-90">Total Earnings</div>
          </div>
          <div>
            <div className="text-2xl font-bold">{weeklyEarnings.sessions}</div>
            <div className="text-xs opacity-90">Sessions</div>
          </div>
          <div>
            <div className="text-2xl font-bold">₱{weeklyEarnings.avgPerSession}</div>
            <div className="text-xs opacity-90">Avg/Session</div>
          </div>
        </div>
        <button
          onClick={() => navigate('/coach/earnings')}
          className="w-full mt-4 py-2 bg-dark-bg-tertiary/20 hover:bg-dark-bg-tertiary/30 rounded-lg font-medium text-sm transition-colors"
        >
          View Detailed Report
        </button>
      </div>

      {/* Recent Students */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold text-dark-text">Recent Students</h2>
          <button
            onClick={() => navigate('/coach/students')}
            className="text-sm text-brand-primary hover:text-brand-primary-dark font-medium transition-colors"
          >
            See All
          </button>
        </div>
        <div className="space-y-3">
          {recentStudents.map((student) => (
            <Card
              key={student.id}
              padding="p-4"
              className="flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <img
                  src={student.avatar}
                  alt={student.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-dark-text text-sm">{student.name}</h3>
                  <p className="text-xs text-dark-text-muted">{student.sessions} sessions • {student.lastSession}</p>
                </div>
              </div>
              <div className="text-right">
                <StatusBadge
                  variant={
                    student.progress === 'Excellent'
                      ? 'primary'
                      : student.progress === 'Good'
                      ? 'info-light'
                      : 'warning'
                  }
                  size="md"
                  rounded="default"
                >
                  {student.progress}
                </StatusBadge>
              </div>
            </Card>
          ))}
        </div>
        </div>

        {/* Surveys & Rewards */}
        <SurveySection surveys={surveys} module="coach" />
      </div>
    </div>
  )
}

export default CoachDashboard
