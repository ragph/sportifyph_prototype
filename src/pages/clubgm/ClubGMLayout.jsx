import { Outlet } from 'react-router-dom'
import {
  IoGrid,
  IoPeople,
  IoCalendar,
  IoCash,
  IoPersonCircle
} from 'react-icons/io5'
import TopHeader from '../../components/TopHeader'
import BottomNavigation from '../../components/BottomNavigation'

const ClubGMLayout = () => {

  const navItems = [
    {
      path: '/clubgm/dashboard',
      icon: IoGrid,
      label: 'Home'
    },
    {
      path: '/clubgm/members',
      icon: IoPeople,
      label: 'Members'
    },
    {
      path: '/clubgm/events',
      icon: IoCalendar,
      label: 'Events'
    },
    {
      path: '/clubgm/finances',
      icon: IoCash,
      label: 'Finances'
    },
    {
      path: '/clubgm/profile',
      icon: IoPersonCircle,
      label: 'Profile'
    }
  ]

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Top Header */}
      <TopHeader module="clubgm" />

      {/* Main Content */}
      <div className="pt-16">
        <Outlet />
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation navItems={navItems} activeColor="orange" />
    </div>
  )
}

export default ClubGMLayout
