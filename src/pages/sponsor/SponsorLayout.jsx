import { Outlet } from 'react-router-dom'
import { IoGrid, IoBriefcase, IoPeople, IoStatsChart, IoPersonCircle } from 'react-icons/io5'
import TopHeader from '../../components/TopHeader'
import BottomNavigation from '../../components/BottomNavigation'

const SponsorLayout = () => {

  const navItems = [
    { path: '/sponsor/dashboard', icon: IoGrid, label: 'Home' },
    { path: '/sponsor/campaigns', icon: IoBriefcase, label: 'Campaigns' },
    { path: '/sponsor/athletes', icon: IoPeople, label: 'Athletes' },
    { path: '/sponsor/analytics', icon: IoStatsChart, label: 'Analytics' },
    { path: '/sponsor/profile', icon: IoPersonCircle, label: 'Profile' }
  ]

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Top Header */}
      <TopHeader module="sponsor" />

      {/* Main Content */}
      <div className="pt-16">
        <Outlet />
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation navItems={navItems} activeColor="indigo" />
    </div>
  )
}

export default SponsorLayout
