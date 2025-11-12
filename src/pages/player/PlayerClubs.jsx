import { useState } from 'react'
import { IoBasketball, IoFlash, IoFlame, IoPeople, IoLocation, IoCalendar, IoCash, IoSearch, IoAdd, IoSettings, IoChatbubbles, IoInformationCircle, IoBriefcase } from 'react-icons/io5'

const PlayerClubs = () => {
  const [activeTab, setActiveTab] = useState('myClubs')

  const myClubs = [
    {
      id: 1,
      name: 'Davao Pickleball Club',
      sport: 'Pickleball',
      role: 'GM',
      members: 24,
      nextSession: 'Nov 12, 7:00 PM',
      location: 'SM Lanang Premier',
      icon: IoBasketball,
      color: 'from-green-500 to-emerald-600',
      logo: '/images/clubs/club (1).jpg'
    },
    {
      id: 2,
      name: 'Weekend Dink Masters',
      sport: 'Pickleball',
      role: 'Member',
      members: 18,
      nextSession: 'Nov 14, 6:00 PM',
      location: 'Abreeza Mall',
      icon: IoFlash,
      color: 'from-blue-500 to-cyan-600',
      logo: '/images/clubs/club (2).jpg'
    },
    {
      id: 3,
      name: 'Pickleball Smashers Davao',
      sport: 'Pickleball',
      role: 'Co-GM',
      members: 32,
      nextSession: 'Nov 13, 8:00 PM',
      location: 'Davao Sports Complex',
      icon: IoFlame,
      color: 'from-orange-500 to-amber-600',
      logo: '/images/clubs/club (3).jpg'
    }
  ]

  const discoverClubs = [
    {
      id: 4,
      name: 'Elite Pickleball Academy',
      sport: 'Pickleball',
      members: 28,
      description: 'Competitive club for advanced pickleball players',
      location: 'NCCC Mall Buhangin',
      icon: IoFlash,
      fee: '₱99/month',
      openSlots: 5,
      logo: '/images/clubs/club (4).jpg'
    },
    {
      id: 5,
      name: 'Pickleball Socials Davao',
      sport: 'Pickleball',
      members: 15,
      description: 'Casual weekend games and training for all skill levels',
      location: 'J Centre Mall',
      icon: IoBasketball,
      fee: 'Free',
      openSlots: 10,
      logo: '/images/clubs/club (5).jpg'
    }
  ]

  const renderMyClubCard = (club) => {
    const IconComponent = club.icon
    return (
      <div key={club.id} className="bg-dark-bg-tertiary rounded-xl shadow-sm overflow-hidden border border-dark-border">
        <div className={`p-4 text-white`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-4">
              <img
                src={club.logo}
                alt={club.name}
                className="w-14 h-14 rounded-lg object-cover shadow-md"
              />
              <div>
                <h3 className="font-bold text-lg mb-1 leading-tight">{club.name}</h3>
                <p className="text-xs opacity-90">{club.sport}</p>
              </div>
            </div>
            <span className="px-3 py-1.5 bg-white text-gray-900 rounded-full text-xs font-bold whitespace-nowrap">
              {club.role}
            </span>
          </div>
        </div>

        <div className="p-4 space-y-3">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-dark-text-secondary">
              <IoPeople className="mr-2" />
              <span>{club.members} Members</span>
            </div>
            <div className="flex items-center text-dark-text-secondary">
              <IoLocation className="mr-2" />
              <span>{club.location}</span>
            </div>
          </div>

          <div className="rounded-lg p-3 border border-blue-200">
            <p className="text-xs font-medium mb-1 flex items-center gap-1">
              <IoCalendar />
              Next Session
            </p>
            <p className="text-sm text-green-400 font-semibold">{club.nextSession}</p>
          </div>

          <div className="flex space-x-2">
            {club.role === 'GM' || club.role === 'Co-GM' ? (
              <>
                <button className="flex-1 bg-brand-primary hover:bg-brand-primary-light text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-1">
                  
                  Visit Club
                </button>
                <button className="flex-1 bg-brand-primary hover:bg-brand-primary-light text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-1">
                  Games Schedule
                </button>
              </>
            ) : (
              <>
                <button className="flex-1 bg-brand-primary hover:bg-brand-primary-light text-white py-2 rounded-lg text-sm font-medium">
                  View Details
                </button>
                <button className="px-4 bg-dark-bg-secondary hover:bg-dark-bg-hover text-dark-text py-2 rounded-lg text-sm font-medium">
                  <IoChatbubbles />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }

  const renderDiscoverCard = (club) => {
    const IconComponent = club.icon
    return (
      <div key={club.id} className="bg-dark-bg-tertiary rounded-xl shadow-sm p-4 border border-dark-border">
        <div className="flex items-start space-x-4">
          <img
            src={club.logo}
            alt={club.name}
            className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
          />
          <div className="flex-1">
            {/* Header with slots badge */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-dark-text-muted">{club.sport}</span>
              <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium flex items-center gap-1 whitespace-nowrap">
                <IoPeople />
                {club.openSlots} slots
              </span>
            </div>

            {/* Club name */}
            <h3 className="font-semibold text-dark-text mb-3 leading-snug">{club.name}</h3>

            {/* Description */}
            <p className="text-sm text-dark-text-secondary mb-4">{club.description}</p>

            {/* Club details */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-dark-text-secondary">
                <IoPeople className="mr-2 flex-shrink-0" />
                <span>{club.members} Members</span>
              </div>
              <div className="flex items-center text-sm text-dark-text-secondary">
                <IoLocation className="mr-2 flex-shrink-0" />
                <span>{club.location}</span>
              </div>
              <div className="flex items-center text-sm font-semibold text-dark-text">
                <IoCash className="mr-2 flex-shrink-0" />
                <span>{club.fee}</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex space-x-2">
              <button className="flex-1 bg-brand-primary hover:bg-brand-primary-light text-white py-2 px-4 rounded-lg text-sm font-medium">
                Join Club
              </button>
              <button className="px-4 bg-dark-bg-secondary hover:bg-dark-bg-hover text-dark-text py-2 rounded-lg text-sm font-medium">
                <IoInformationCircle className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <div className="max-w-md mx-auto p-4 space-y-6">
        {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-dark-text">Clubs</h1>
        <button className="bg-brand-primary hover:bg-brand-primary-light text-white rounded-lg px-4 py-2 font-semibold transition-colors flex items-center space-x-2">
          <IoAdd className="text-xl" />
          <span>Create Club</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-dark-bg-tertiary rounded-xl shadow-sm p-2 flex space-x-2">
        <button
          onClick={() => setActiveTab('myClubs')}
          className={`flex-1 py-2 rounded-lg font-medium text-sm transition-colors ${
            activeTab === 'myClubs'
              ? 'bg-blue-600 text-white'
              : 'bg-dark-bg-secondary text-dark-text-secondary hover:bg-dark-bg-hover'
          }`}
        >
          My Clubs ({myClubs.length})
        </button>
        <button
          onClick={() => setActiveTab('discover')}
          className={`flex-1 py-2 rounded-lg font-medium text-sm transition-colors ${
            activeTab === 'discover'
              ? 'bg-blue-600 text-white'
              : 'bg-dark-bg-secondary text-dark-text-secondary hover:bg-dark-bg-hover'
          }`}
        >
          Discover
        </button>
      </div>

      {/* Content */}
      {activeTab === 'myClubs' ? (
        <div className="space-y-4">
          {myClubs.map((club) => renderMyClubCard(club))}
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-brand-primary/10 rounded-xl p-4 border border-blue-200">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="font-semibold text-dark-text">Find Your Club</h3>
                <p className="text-xs text-dark-text-secondary mt-1">Join clubs in your area</p>
              </div>
              <IoSearch className="text-2xl text-brand-primary" />
            </div>
            <input
              type="text"
              placeholder="Search clubs, sports, location..."
              className="w-full px-4 py-2 rounded-lg border border-dark-border focus:outline-none focus:ring-2 focus:ring-brand-primary text-sm"
            />
          </div>

          {discoverClubs.map((club) => renderDiscoverCard(club))}

          <button className="w-full py-3 bg-dark-bg-secondary hover:bg-dark-bg-hover text-dark-text rounded-lg font-medium text-sm transition-colors">
            Load More Clubs
          </button>
        </div>
      )}

        {/* Info Card */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl p-6 text-white">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 bg-dark-bg-tertiary/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <IoAdd className="text-2xl" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2">Start Your Own Club!</h3>
              <p className="text-sm opacity-90 mb-4">
                Create a club and become the GM. Manage members, schedule sessions, and build your community.
              </p>
              <button className="bg-dark-bg-tertiary text-brand-primary px-6 py-2 rounded-lg font-semibold text-sm hover:bg-dark-bg-secondary">
                Create Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerClubs
