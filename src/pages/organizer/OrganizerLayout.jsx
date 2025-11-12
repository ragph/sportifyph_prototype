import { Outlet } from "react-router-dom";
import {
  IoGrid,
  IoTrophy,
  IoPeople,
  IoCash,
  IoPersonCircle,
} from "react-icons/io5";
import TopHeader from '../../components/TopHeader';
import BottomNavigation from '../../components/BottomNavigation';

const OrganizerLayout = () => {

  const navItems = [
    { path: "/organizer/dashboard", icon: IoGrid, label: "Home" },
    { path: "/organizer/tournaments", icon: IoTrophy, label: "Tournaments" },
    { path: "/organizer/participants", icon: IoPeople, label: "Participants" },
    { path: "/organizer/revenue", icon: IoCash, label: "Revenue" },
    { path: "/organizer/profile", icon: IoPersonCircle, label: "Profile" },
  ];

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      {/* Top Header */}
      <TopHeader module="organizer" />

      {/* Main Content */}
      <div className="pt-16">
        <Outlet />
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation navItems={navItems} activeColor="purple" />
    </div>
  );
};

export default OrganizerLayout;
