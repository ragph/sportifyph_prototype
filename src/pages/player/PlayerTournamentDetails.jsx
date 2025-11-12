import { useNavigate, useParams } from 'react-router-dom'
import { IoCalendar, IoLocation, IoPeople, IoCheckmarkCircle, IoCash, IoInformationCircle, IoShareSocial } from 'react-icons/io5'
import PageHeader from '../../components/PageHeader'
import StatusBadge from '../../components/StatusBadge'

const PlayerTournamentDetails = () => {
  const navigate = useNavigate()
  const { tournamentId } = useParams()

  // Mock tournament data - in a real app, this would come from an API or state management
  const tournaments = {
    1: {
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
    2: {
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
  }

  const tournament = tournaments[tournamentId]

  if (!tournament) {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold text-dark-text mb-4">Tournament Not Found</h2>
          <button
            onClick={() => navigate('/player/tournaments')}
            className="px-6 py-3 bg-brand-primary hover:bg-brand-primary-light text-white rounded-lg font-medium transition-all"
          >
            Back to Tournaments
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <PageHeader
        title="Tournament Details"
        backPath="/player/tournaments"
      />

      <div className="max-w-lg mx-auto">
        {/* Tournament Image */}
        {tournament.image && (
          <div className="relative">
            <img
              src={tournament.image}
              alt={tournament.name}
              className="w-full h-64 object-cover"
            />
            {/* Status Badge on Image */}
            <div className="absolute top-4 left-4">
              <StatusBadge
                variant="primary"
                size="lg"
                rounded="full"
                icon={<IoCheckmarkCircle />}
                className="font-bold shadow-lg bg-brand-primary/90"
              >
                {tournament.status}
              </StatusBadge>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Tournament Name & Sport */}
          <div>
            <span className="text-xs font-semibold text-brand-primary uppercase tracking-wide">
              {tournament.sport}
            </span>
            <h2 className="text-2xl font-bold text-dark-text mt-1 leading-tight">
              {tournament.name}
            </h2>
          </div>

          {/* Key Details Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-dark-bg-tertiary rounded-lg p-4 border border-dark-border">
              <div className="flex items-center text-brand-primary mb-2">
                <IoCalendar className="text-xl" />
              </div>
              <p className="text-xs text-dark-text-secondary mb-1">Date</p>
              <p className="text-sm font-bold text-dark-text">{tournament.date}</p>
            </div>

            <div className="bg-dark-bg-tertiary rounded-lg p-4 border border-dark-border">
              <div className="flex items-center text-brand-primary mb-2">
                <IoPeople className="text-xl" />
              </div>
              <p className="text-xs text-dark-text-secondary mb-1">Participants</p>
              <p className="text-sm font-bold text-dark-text">{tournament.participants}</p>
            </div>

            <div className="bg-dark-bg-tertiary rounded-lg p-4 border border-dark-border col-span-2">
              <div className="flex items-center text-brand-primary mb-2">
                <IoLocation className="text-xl" />
              </div>
              <p className="text-xs text-dark-text-secondary mb-1">Location</p>
              <p className="text-sm font-bold text-dark-text">{tournament.location}</p>
            </div>

            <div className="bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 rounded-lg p-4 border border-brand-primary/30 col-span-2">
              <div className="flex items-center text-brand-primary mb-2">
                <IoCash className="text-xl" />
              </div>
              <p className="text-xs text-dark-text-secondary mb-1">Entry Fee</p>
              <p className="text-2xl font-black text-brand-primary">{tournament.fee}</p>
            </div>
          </div>

          {/* Tournament Info */}
          <div className="bg-dark-bg-tertiary rounded-lg p-5 border border-dark-border">
            <div className="flex items-center gap-2 mb-4">
              <IoInformationCircle className="text-xl text-brand-primary" />
              <h3 className="text-sm font-bold text-dark-text">Tournament Information</h3>
            </div>
            <div className="space-y-3 text-sm text-dark-text-secondary">
              <div className="flex items-start">
                <span className="text-brand-primary mr-2">•</span>
                <span>Format: Singles & Doubles</span>
              </div>
              <div className="flex items-start">
                <span className="text-brand-primary mr-2">•</span>
                <span>Skill Level: All levels welcome</span>
              </div>
              <div className="flex items-start">
                <span className="text-brand-primary mr-2">•</span>
                <span>Registration closes 2 days before event</span>
              </div>
              <div className="flex items-start">
                <span className="text-brand-primary mr-2">•</span>
                <span>Check-in starts 30 minutes before</span>
              </div>
            </div>
          </div>

          {/* Additional Details */}
          <div className="bg-dark-bg-tertiary rounded-lg p-5 border border-dark-border">
            <h3 className="text-sm font-bold text-dark-text mb-4">About This Tournament</h3>
            <p className="text-sm text-dark-text-secondary leading-relaxed mb-4">
              Join us for an exciting day of competitive pickleball! This tournament welcomes players of all skill levels.
              Whether you're a seasoned pro or just starting out, you'll find competition suited to your level.
            </p>
            <p className="text-sm text-dark-text-secondary leading-relaxed">
              The tournament will feature both singles and doubles matches. All equipment will be provided, but players
              are welcome to bring their own paddles. Refreshments will be available throughout the day.
            </p>
          </div>

          {/* Rules & Regulations */}
          <div className="bg-dark-bg-tertiary rounded-lg p-5 border border-dark-border">
            <h3 className="text-sm font-bold text-dark-text mb-4">Rules & Regulations</h3>
            <div className="space-y-3 text-sm text-dark-text-secondary">
              <div className="flex items-start">
                <span className="text-brand-primary mr-2 font-bold">1.</span>
                <span>Players must arrive 30 minutes before their scheduled match time</span>
              </div>
              <div className="flex items-start">
                <span className="text-brand-primary mr-2 font-bold">2.</span>
                <span>Proper sports attire and non-marking shoes are required</span>
              </div>
              <div className="flex items-start">
                <span className="text-brand-primary mr-2 font-bold">3.</span>
                <span>All matches will follow official pickleball rules and regulations</span>
              </div>
              <div className="flex items-start">
                <span className="text-brand-primary mr-2 font-bold">4.</span>
                <span>Referees' decisions are final</span>
              </div>
              <div className="flex items-start">
                <span className="text-brand-primary mr-2 font-bold">5.</span>
                <span>No refunds will be issued after registration deadline</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-dark-bg-tertiary rounded-lg p-5 border border-dark-border">
            <h3 className="text-sm font-bold text-dark-text mb-4">Contact Information</h3>
            <div className="space-y-2 text-sm text-dark-text-secondary">
              <p><span className="font-semibold text-dark-text">Organizer:</span> Davao Sports Association</p>
              <p><span className="font-semibold text-dark-text">Email:</span> info@davaosports.com</p>
              <p><span className="font-semibold text-dark-text">Phone:</span> +63 912 345 6789</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="sticky bottom-0 left-0 right-0 bg-dark-bg/95 backdrop-blur-sm p-4 -mx-6 -mb-6">
            <div className="flex gap-3">
              <button className="flex-1 py-3 bg-brand-primary hover:bg-brand-primary-light text-white rounded-lg font-semibold shadow-sm transition-all flex items-center justify-center gap-2">
                <IoShareSocial className="text-lg" />
                Share Tournament
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerTournamentDetails
