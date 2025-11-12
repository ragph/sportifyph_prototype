import { Outlet } from 'react-router-dom'
import { IoGrid, IoPersonCircle, IoStatsChart, IoTrophy, IoPeople } from 'react-icons/io5'
import TopHeader from '../../components/TopHeader'
import BottomNavigation from '../../components/BottomNavigation'

const PlayerLayout = () => {
  const navItems = [
    {
      path: '/player/dashboard',
      icon: IoGrid,
      label: 'Home'
    },
    {
      path: '/player/tournaments',
      icon: IoTrophy,
      label: 'Tournaments'
    },
    {
      path: '/player/clubs',
      icon: IoPeople,
      label: 'Clubs'
    },
    {
      path: '/player/stats',
      icon: IoStatsChart,
      label: 'Stats'
    },
    {
      path: '/player/profile',
      icon: IoPersonCircle,
      label: 'Profile'
    }
  ]

  return (
    <div className="min-h-screen bg-dark-bg flex flex-col">
      {/* Top Header */}
      <TopHeader module="player" />

      {/* Main Content */}
      <div className="pt-16">
        <Outlet />
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation navItems={navItems} activeColor="blue" />
    </div>
  )
}

export default PlayerLayout
