import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoTennisball, IoCalendar, IoLocation, IoPeople, IoSearch, IoTime, IoCheckmarkCircle, IoAlertCircle, IoTrophy, IoInformationCircle } from 'react-icons/io5'
import Card from '../../components/Card'
import StatusBadge from '../../components/StatusBadge'

const PlayerTournaments = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('upcoming')

  const handleViewDetails = (tournamentId) => {
    navigate(`/player/tournaments/${tournamentId}`)
  }

  const tournaments = {
    upcoming: [
      {
        id: 1,
        name: 'Davao Pickleball Open Championship',
        sport: 'Pickleball',
        date: 'Nov 15, 2024',
        location: 'Davao Sports Complex',
        status: 'Registered',
        fee: '₱800',
        participants: 64,
        image: '/images/tournaments/tournament (1).jpg'
      },
      {
        id: 2,
        name: 'Matina Pickleball Doubles Cup',
        sport: 'Pickleball',
        date: 'Nov 20, 2024',
        location: 'Matina Sports Center',
        status: 'Paid Tournament',
        fee: '₱600',
        participants: 32,
        image: '/images/tournaments/tournament (1).jpg'
      }
    ],
    ongoing: [
      {
        id: 3,
        name: 'Davao City Pickleball League',
        sport: 'Pickleball',
        date: 'Nov 10, 2024',
        location: 'SM Lanang Premier Courts',
        status: 'In Progress',
        round: 'Semi Finals',
        participants: 48,
        image: '/images/tournaments/tournament (1).jpg'
      }
    ],
    completed: [
      {
        id: 4,
        name: 'Kadayawan Pickleball Festival',
        sport: 'Pickleball',
        date: 'Oct 28, 2024',
        location: 'Davao Convention Center',
        status: 'Completed',
        placement: '2nd Place',
        prize: '₱8,000',
        image: '/images/tournaments/tournament (1).jpg'
      },
      {
        id: 5,
        name: 'Mindanao Pickleball Championship',
        sport: 'Pickleball',
        date: 'Oct 15, 2024',
        location: 'Abreeza Sports Hub',
        status: 'Completed',
        placement: '1st Place',
        prize: '₱15,000',
        image: '/images/tournaments/tournament (1).jpg'
      }
    ],
    available: [
      {
        id: 6,
        name: 'Christmas Pickleball Classic Davao',
        sport: 'Pickleball',
        date: 'Dec 20, 2024',
        location: 'NCCC Mall Buhangin Courts',
        fee: '₱900',
        slots: '28/64',
        deadline: 'Dec 10',
        image: '/images/tournaments/tournament (1).jpg'
      },
      {
        id: 7,
        name: 'New Year Pickleball Smash Davao',
        sport: 'Pickleball',
        date: 'Jan 5, 2025',
        location: 'Ecoland Sports Complex',
        fee: '₱750',
        slots: '12/48',
        deadline: 'Dec 25',
        image: '/images/tournaments/tournament (1).jpg'
      }
    ]
  }

  const tabs = [
    { id: 'upcoming', label: 'Upcoming', count: tournaments.upcoming.length },
    { id: 'ongoing', label: 'Ongoing', count: tournaments.ongoing.length },
    { id: 'completed', label: 'Completed', count: tournaments.completed.length },
    { id: 'available', label: 'Available', count: tournaments.available.length }
  ]

  const renderTournamentCard = (tournament, type) => {
    return (
      <div key={tournament.id} className="bg-dark-bg-tertiary rounded-xl shadow-sm overflow-hidden border-2 border-dark-border hover:border-brand-primary/40 hover:shadow-lg hover:shadow-brand-primary/10 transition-all">
        {/* Tournament Image */}
        {tournament.image && (
          <img
            src={tournament.image}
            alt={tournament.name}
            className="w-full h-60 object-cover"
          />
        )}

        <div className="p-4">
          {/* Status Badge - Moved to top */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-semibold text-dark-text-muted">{tournament.sport}</span>
            </div>
            {type === 'upcoming' && (
              <StatusBadge
                variant={tournament.status === 'Registered' ? 'info' : 'warning'}
                icon={tournament.status === 'Registered' ? <IoCheckmarkCircle /> : <IoAlertCircle />}
              >
                {tournament.status}
              </StatusBadge>
            )}
            {type === 'ongoing' && (
              <StatusBadge variant="success" icon={<IoTime />}>
                {tournament.status}
              </StatusBadge>
            )}
          </div>

          {/* Tournament Name */}
          <h3 className="font-semibold text-dark-text mb-3 leading-snug">{tournament.name}</h3>

          <div className="space-y-2 mb-3">
              <div className="flex items-center text-sm text-dark-text-secondary">
                <IoCalendar className="mr-2" />
                <span>{tournament.date}</span>
              </div>
              <div className="flex items-center text-sm text-dark-text-secondary">
                <IoLocation className="mr-2" />
                <span>{tournament.location}</span>
              </div>
              {tournament.round && (
                <div className="flex items-center text-sm text-dark-text-secondary">
                  <IoTrophy className="mr-2" />
                  <span>{tournament.round}</span>
                </div>
              )}
              {tournament.placement && (
                <div className="flex items-center text-sm font-semibold text-dark-text">
                  <IoTrophy className="mr-2 text-yellow-500" />
                  <span>{tournament.placement} • {tournament.prize}</span>
                </div>
              )}
              {tournament.slots && (
                <div className="flex items-center text-sm text-dark-text-secondary">
                  <IoPeople className="mr-2" />
                  <span>{tournament.slots} slots filled</span>
                </div>
              )}
          </div>

          <div className="flex space-x-2">
            {type === 'upcoming' && tournament.status === 'Payment Pending' && (
              <button className="flex-1 bg-brand-primary hover:bg-brand-primary-light text-white py-2 px-4 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-brand-primary/20 transition-all">
                Register Now
              </button>
            )}
            {type === 'upcoming' && tournament.status === 'Registered' && (
              <button
                onClick={() => handleViewDetails(tournament.id)}
                className="flex-1 bg-dark-bg-secondary hover:bg-dark-bg-hover text-dark-text py-2 px-4 rounded-lg text-sm font-medium border border-brand-primary/30 hover:border-brand-primary/50 transition-all"
              >
                View Details
              </button>
            )}
            {type === 'ongoing' && (
              <>
                <button className="flex-1 bg-brand-primary hover:bg-brand-primary-light text-white py-2 px-4 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-brand-primary/20 transition-all">
                  View Bracket
                </button>
                <button className="flex-1 bg-dark-bg-secondary hover:bg-dark-bg-hover text-brand-primary py-2 px-4 rounded-lg text-sm font-medium border border-brand-primary/30 hover:border-brand-primary/50 transition-all">
                  Live Scores
                </button>
              </>
            )}
            {type === 'completed' && (
              <button className="flex-1 bg-dark-bg-secondary hover:bg-dark-bg-hover text-dark-text py-2 px-4 rounded-lg text-sm font-medium border border-brand-primary/30 hover:border-brand-primary/50 transition-all">
                View Results
              </button>
            )}
            {type === 'available' && (
              <>
                <button className="flex-1 bg-brand-primary hover:bg-brand-primary-light text-white py-2 px-4 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-brand-primary/20 transition-all">
                  Register • {tournament.fee}
                </button>
                <button className="px-4 bg-dark-bg-secondary hover:bg-dark-bg-hover text-brand-primary py-2 rounded-lg text-sm font-medium border border-brand-primary/30 hover:border-brand-primary/50 transition-all">
                  <IoInformationCircle className="text-lg" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <div className="max-w-lg mx-auto p-4 space-y-6">
        {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-dark-text">Tournaments</h1>
        <button className="p-2 hover:bg-dark-bg-secondary rounded-lg">
          <IoSearch className="text-xl text-dark-text-secondary" />
        </button>
      </div>

      {/* Tabs */}
      <Card padding="p-2">
        <div className="grid grid-cols-4 gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 rounded-lg font-medium text-xs transition-all ${
                activeTab === tab.id
                  ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20'
                  : 'bg-dark-bg text-dark-text-secondary hover:bg-dark-bg-secondary'
              }`}
            >
              <div>{tab.label}</div>
              <div className="text-xs mt-1 opacity-75">({tab.count})</div>
            </button>
          ))}
        </div>
      </Card>

      {/* Tournament List */}
      <div className="space-y-3">
        {tournaments[activeTab].map((tournament) =>
          renderTournamentCard(tournament, activeTab)
        )}
      </div>

        {/* Empty State */}
        {tournaments[activeTab].length === 0 && (
          <Card padding="p-12" className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-dark-bg-secondary rounded-full flex items-center justify-center">
                <IoTrophy className="text-5xl text-dark-text-muted" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-dark-text mb-2">No Tournaments</h3>
            <p className="text-dark-text-secondary text-sm">
              {activeTab === 'available'
                ? 'No tournaments available right now'
                : `You don't have any ${activeTab} tournaments`}
            </p>
          </Card>
        )}
      </div>
    </div>
  )
}

export default PlayerTournaments
