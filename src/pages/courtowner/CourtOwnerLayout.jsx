import { Outlet } from 'react-router-dom'
import {
  IoGrid,
  IoStorefront,
  IoCalendar,
  IoCash,
  IoPersonCircle
} from 'react-icons/io5'
import TopHeader from '../../components/TopHeader'
import BottomNavigation from '../../components/BottomNavigation'

const CourtOwnerLayout = () => {

  const navItems = [
    { path: '/courtowner/dashboard', icon: IoGrid, label: 'Home' },
    { path: '/courtowner/courts', icon: IoStorefront, label: 'Courts' },
    { path: '/courtowner/bookings', icon: IoCalendar, label: 'Bookings' },
    { path: '/courtowner/revenue', icon: IoCash, label: 'Revenue' },
    { path: '/courtowner/profile', icon: IoPersonCircle, label: 'Profile' }
  ]

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Top Header */}
      <TopHeader module="courtowner" />

      {/* Main Content */}
      <div className="pt-16">
        <Outlet />
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation navItems={navItems} activeColor="red" />
    </div>
  )
}

export default CourtOwnerLayout
