import { Outlet } from 'react-router-dom'
import { IoGrid, IoPersonCircle, IoCalendar, IoPeople, IoCash } from 'react-icons/io5'
import TopHeader from '../../components/TopHeader'
import BottomNavigation from '../../components/BottomNavigation'

const CoachLayout = () => {

  const navItems = [
    {
      path: '/coach/dashboard',
      icon: IoGrid,
      label: 'Home'
    },
    {
      path: '/coach/sessions',
      icon: IoCalendar,
      label: 'Sessions'
    },
    {
      path: '/coach/students',
      icon: IoPeople,
      label: 'Students'
    },
    {
      path: '/coach/earnings',
      icon: IoCash,
      label: 'Earnings'
    },
    {
      path: '/coach/profile',
      icon: IoPersonCircle,
      label: 'Profile'
    }
  ]

  return (
    <div className="min-h-screen bg-dark-bg flex flex-col">
      {/* Top Header */}
      <TopHeader module="coach" />

      {/* Main Content */}
      <div className="pt-16">
        <Outlet />
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation navItems={navItems} activeColor="green" />
    </div>
  )
}

export default CoachLayout
