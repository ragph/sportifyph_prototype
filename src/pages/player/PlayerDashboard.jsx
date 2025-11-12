import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  IoTrophy,
  IoCalendar,
  IoLocation,
  IoTime,
  IoFitness,
  IoStorefront,
  IoPeople,
  IoFlash,
  IoArrowForward,
  IoNewspaper,
  IoStar,
  IoNotifications,
  IoSettings,
} from "react-icons/io5";
import TrialExpirationModal from "../../components/TrialExpirationModal";
import DashboardWelcomeBanner from "../../components/DashboardWelcomeBanner";
import SubscriptionBanner from "../../components/SubscriptionBanner";
import Carousel from "../../components/Carousel";
import QuickActions from "../../components/QuickActions";

const PlayerDashboard = () => {
  const navigate = useNavigate();
  const [showTrialModal, setShowTrialModal] = useState(false);

  // Mock trial data - would come from user context/API
  const trialInfo = {
    isActive: true,
    daysRemaining: 30,
    expiryDate: "2024-11-10",
  };

  // Show modal on first visit if trial is expiring soon or expired
  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem("hasSeenTrialModal");
    if (!hasSeenModal && trialInfo.daysRemaining <= 3) {
      setShowTrialModal(true);
      sessionStorage.setItem("hasSeenTrialModal", "true");
    }
  }, []);

  const upcomingMatches = [
    {
      id: 1,
      type: "Tournament Match",
      name: "Davao Open Pickleball Championship",
      date: "Nov 12, 2024",
      time: "7:00 PM",
      location: "Davao Sports Complex",
      opponent: "Dink Masters",
    },
    {
      id: 2,
      type: "Training Session",
      name: "Advanced Pickleball Training",
      date: "Nov 14, 2024",
      time: "6:00 PM",
      location: "SM Lanang Premier Courts",
      coach: "Coach Mike Santos",
    },
  ];

  const joinedTournaments = [
    {
      id: 1,
      name: "Davao Open Pickleball Championship",
      nextMatch: "Nov 15, 2024",
      status: "Quarter Finals",
    },
    {
      id: 2,
      name: "Abreeza Doubles Tournament",
      nextMatch: "Nov 20, 2024",
      status: "Group Stage",
    },
  ];

  const recommendedCoaches = [
    {
      id: 1,
      name: "Coach Mike Santos",
      sport: "Pickleball",
      rating: 4.9,
      rate: "₱600/session",
      students: 52,
      avatar: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      name: "Coach Ana Lopez",
      sport: "Pickleball",
      rating: 4.8,
      rate: "₱550/session",
      students: 45,
      avatar: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=100&h=100&fit=crop'
    },
  ];

  const recommendedClubs = [
    {
      id: 1,
      name: "Davao Pickleball Club",
      sport: "Pickleball",
      members: 28,
      location: "Matina Town Square",
      logo: '/images/clubs/club (1).jpg'
    },
    {
      id: 2,
      name: "Weekend Dink Masters",
      sport: "Pickleball",
      members: 18,
      location: "Ecoland",
      logo: '/images/clubs/club (2).jpg'
    },
  ];

  const liveStandings = [
    { rank: 1, team: "Dink Dynasty", wins: 12, losses: 2, points: 36 },
    { rank: 2, team: "Smash Squad", wins: 10, losses: 4, points: 30 },
    { rank: 3, team: "Davao Picklers (You)", wins: 9, losses: 5, points: 27 },
    { rank: 4, team: "Net Ninjas", wins: 8, losses: 6, points: 24 },
  ];

  const news = [
    {
      id: 1,
      title: "New Pickleball Courts Open at Abreeza Mall",
      date: "Nov 10, 2024",
      category: "Facilities",
      image: '/images/news/news (1).jpg'
    },
    {
      id: 2,
      title: "Christmas Pickleball Classic Davao Registration Now Open",
      date: "Nov 9, 2024",
      category: "Tournaments",
      image: '/images/news/news (2).jpg'
    },
  ];

  const quickActions = [
    {
      id: 1,
      title: "Join Tournament",
      icon: IoTrophy,
      color: "from-brand-primary to-brand-primary-dark",
      bgColor: "bg-brand-primary/10",
      iconColor: "text-brand-primary",
      action: () => navigate("/player/join-tournament")
    },
    {
      id: 2,
      title: "Book Court",
      icon: IoStorefront,
      color: "from-brand-primary to-brand-primary-dark",
      bgColor: "bg-brand-primary/10",
      iconColor: "text-brand-primary",
      action: () => navigate("/player/book-court")
    },
    {
      id: 3,
      title: "Train Now",
      icon: IoFitness,
      color: "from-brand-primary to-brand-primary-dark",
      bgColor: "bg-brand-primary/10",
      iconColor: "text-brand-primary",
      action: () => navigate("/player/book-training")
    },
  ];

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <div className="max-w-md mx-auto p-4 space-y-6">
        {/* Welcome Section */}
        <DashboardWelcomeBanner
          userName="Juan"
          module="player"
          description="Ready to dink and drive on the pickleball court today?"
        />

        {/* Trial Banner */}
        {/* <SubscriptionBanner
          isActive={trialInfo.isActive}
          daysRemaining={trialInfo.daysRemaining}
          module="player"
          onNavigate={() => navigate('/player/subscription')}
          isTrial={true}
        /> */}

        {/* Quick Actions */}
        <QuickActions actions={quickActions} />

        {/* Upcoming Matches & Training */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-dark-text">Upcoming</h2>
            <button className="text-sm text-brand-primary hover:text-brand-primary-dark font-medium transition-colors">
              View All
            </button>
          </div>
          <div className="space-y-3">
            {upcomingMatches.map((match) => (
              <div
                key={match.id}
                className="bg-dark-bg-tertiary rounded-xl shadow-sm p-4 border-l-4 border-l-brand-primary border-r border-r-dark-border border-t border-t-dark-border border-b border-b-dark-border transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="px-2 py-1 bg-yellow-400 text-slate-950 rounded text-xs font-medium">
                      {match.type}
                    </span>
                    <h3 className="font-semibold text-dark-text mt-2">
                      {match.name}
                    </h3>
                  </div>
                </div>
                <div className="space-y-2 mt-3">
                  <div className="flex items-center text-sm text-dark-text-secondary">
                    <IoCalendar className="mr-2 text-dark-text-muted" />
                    <span>
                      {match.date} at {match.time}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-dark-text-secondary">
                    <IoLocation className="mr-2 text-dark-text-muted" />
                    <span>{match.location}</span>
                  </div>
                  {match.opponent && (
                    <div className="flex items-center text-sm text-dark-text-secondary">
                      <IoPeople className="mr-2 text-dark-text-muted" />
                      <span>vs {match.opponent}</span>
                    </div>
                  )}
                  {match.coach && (
                    <div className="flex items-center text-sm text-dark-text-secondary">
                      <IoFitness className="mr-2 text-dark-text-muted" />
                      <span>{match.coach}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Joined Tournaments */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-dark-text">My Tournaments</h2>
            <button className="text-sm text-brand-primary hover:text-brand-primary-dark font-medium transition-colors">
              View All
            </button>
          </div>
          <div className="space-y-3">
            {joinedTournaments.map((tournament) => (
              <div
                key={tournament.id}
                className="bg-dark-bg-tertiary rounded-xl shadow-sm p-4 border border-dark-border flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <IoTrophy className="text-xl text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-text text-sm">
                      {tournament.name}
                    </h3>
                    <p className="text-xs text-dark-text-muted mt-1">
                      {tournament.status}
                    </p>
                  </div>
                </div>
                <IoArrowForward className="text-dark-text-muted" />
              </div>
            ))}
          </div>
        </div>

        {/* Live Standings */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-dark-text">Live Standings</h2>
            <button className="text-sm text-brand-primary hover:text-brand-primary-dark font-medium transition-colors">
              Full Table
            </button>
          </div>
          <div className="bg-dark-bg-tertiary rounded-xl shadow-sm overflow-hidden border border-dark-border">
            <table className="w-full">
              <thead className="bg-dark-bg-secondary">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-dark-text-muted">
                    #
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-dark-text-muted">
                    Team
                  </th>
                  <th className="px-4 py-2 text-center text-xs font-medium text-dark-text-muted">
                    W
                  </th>
                  <th className="px-4 py-2 text-center text-xs font-medium text-dark-text-muted">
                    L
                  </th>
                  <th className="px-4 py-2 text-center text-xs font-medium text-dark-text-muted">
                    Pts
                  </th>
                </tr>
              </thead>
              <tbody>
                {liveStandings.map((team) => (
                  <tr
                    key={team.rank}
                    className={`border-t border-dark-border ${
                      team.team.includes("You") ? "bg-brand-primary/10 border-l-4 border-l-brand-primary" : ""
                    }`}
                  >
                    <td className="px-4 py-3 text-sm font-medium text-dark-text-secondary">
                      {team.rank}
                    </td>
                    <td className="px-4 py-3 text-sm text-dark-text">
                      {team.team}
                      {team.team.includes("You") && (
                        <IoFlash className="inline ml-1 text-brand-primary" />
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm text-center text-dark-text-secondary">
                      {team.wins}
                    </td>
                    <td className="px-4 py-3 text-sm text-center text-dark-text-secondary">
                      {team.losses}
                    </td>
                    <td className="px-4 py-3 text-sm text-center font-semibold text-dark-text">
                      {team.points}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recommended Coaches */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-dark-text">
              Recommended Coaches
            </h2>
            <button className="text-sm text-brand-primary hover:text-brand-primary-dark font-medium transition-colors">
              See All
            </button>
          </div>
          <div className="space-y-3">
            {recommendedCoaches.map((coach) => (
              <div
                key={coach.id}
                className="bg-dark-bg-tertiary rounded-xl shadow-sm p-4 border border-dark-border flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={coach.avatar}
                    alt={coach.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-dark-text text-sm">
                      {coach.name}
                    </h3>
                    <p className="text-xs text-dark-text-muted">
                      {coach.sport} • {coach.students} students
                    </p>
                    <div className="flex items-center mt-1">
                      <IoStar className="text-yellow-500 text-xs mr-1" />
                      <span className="text-xs font-medium text-dark-text-secondary">
                        {coach.rating}
                      </span>
                      <span className="text-xs text-dark-text-muted ml-2">
                        {coach.rate}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="px-4 py-2 bg-brand-accent hover:bg-brand-accent-light text-white rounded-lg text-xs font-medium transition-all">
                  Book
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Clubs */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-dark-text">
              Recommended Clubs
            </h2>
            <button className="text-sm text-brand-primary hover:text-brand-primary-dark font-medium transition-colors">
              Discover
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {recommendedClubs.map((club) => (
              <div
                key={club.id}
                className="bg-dark-bg-tertiary rounded-xl shadow-sm p-4 border border-dark-border"
              >
                <img
                  src={club.logo}
                  alt={club.name}
                  className="w-10 h-10 rounded-lg object-cover mb-3"
                />
                <h3 className="font-semibold text-dark-text text-sm mb-1">
                  {club.name}
                </h3>
                <p className="text-xs text-dark-text-muted mb-2">
                  {club.members} members
                </p>
                <p className="text-xs text-dark-text-secondary flex items-center">
                  <IoLocation className="mr-1 text-xs" />
                  {club.location}
                </p>
                <button className="w-full mt-3 py-2 bg-dark-bg-hover hover:bg-dark-border text-dark-text rounded-lg text-xs font-medium">
                  View Club
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsor Carousel */}
        <Carousel
          images={[
            {
              src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=400&fit=crop',
              alt: 'Sports Energy Drink',
              overlay: {
                title: '⚡ PowerSport Energy Drink',
                description: 'Fuel your game. Dominate the court.'
              }
            },
            {
              src: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?w=800&h=400&fit=crop',
              alt: 'Sports Gear',
              overlay: {
                title: '🏆 Premium Sports Equipment',
                description: 'Gear up with the best equipment for champions.'
              }
            },
            {
              src: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=400&fit=crop',
              alt: 'Fitness Training',
              overlay: {
                title: '💪 Elite Training Programs',
                description: 'Join our expert-led training sessions today.'
              }
            }
          ]}
          autoPlay={true}
          autoPlayInterval={5000}
          showControls={true}
          showIndicators={true}
          height="h-48"
        />

        {/* News & Updates */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-dark-text">News & Updates</h2>
            <button className="text-sm text-brand-primary hover:text-brand-primary-dark font-medium transition-colors">
              All News
            </button>
          </div>
          <div className="space-y-3">
            {news.map((item) => (
              <div
                key={item.id}
                className="bg-dark-bg-tertiary rounded-xl shadow-sm p-4 border border-dark-border flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-dark-text text-sm">
                      {item.title}
                    </h3>
                    <p className="text-xs text-dark-text-muted mt-1">
                      {item.category} • {item.date}
                    </p>
                  </div>
                </div>
                <IoArrowForward className="text-dark-text-muted" />
              </div>
            ))}
          </div>
        </div>

        {/* Trial Expiration Modal */}
        <TrialExpirationModal
          isOpen={showTrialModal}
          onClose={() => setShowTrialModal(false)}
          daysRemaining={trialInfo.daysRemaining}
        />
      </div>
    </div>
  );
};

export default PlayerDashboard;
