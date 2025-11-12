import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import RoleSelection from './pages/RoleSelection'
import Login from './pages/Login'
import Signup from './pages/Signup'
import PlayerLayout from './pages/player/PlayerLayout'
import PlayerDashboard from './pages/player/PlayerDashboard'
import PlayerProfile from './pages/player/PlayerProfile'
import PlayerStats from './pages/player/PlayerStats'
import PlayerTournaments from './pages/player/PlayerTournaments'
import PlayerClubs from './pages/player/PlayerClubs'
import PlayerHistory from './pages/player/PlayerHistory'
import PlayerAchievements from './pages/player/PlayerAchievements'
import PlayerEditProfile from './pages/player/PlayerEditProfile'
import PlayerSettings from './pages/player/PlayerSettings'
import PlayerNotifications from './pages/player/PlayerNotifications'
import PlayerJoinTournament from './pages/player/PlayerJoinTournament'
import PlayerBookCourt from './pages/player/PlayerBookCourt'
import PlayerBookTraining from './pages/player/PlayerBookTraining'
import PlayerSubscription from './pages/player/PlayerSubscription'
import PlayerSubscribePayment from './pages/player/PlayerSubscribePayment'
import PlayerSubscriptionSuccess from './pages/player/PlayerSubscriptionSuccess'
import PlayerSurvey from './pages/player/PlayerSurvey'
import PlayerTournamentDetails from './pages/player/PlayerTournamentDetails'

// Coach pages
import CoachSurvey from './pages/coach/CoachSurvey'
import CoachLayout from './pages/coach/CoachLayout'
import CoachDashboard from './pages/coach/CoachDashboard'
import CoachProfile from './pages/coach/CoachProfile'
import CoachEditProfile from './pages/coach/CoachEditProfile'
import CoachSessions from './pages/coach/CoachSessions'
import CoachCreateSession from './pages/coach/CoachCreateSession'
import CoachSchedule from './pages/coach/CoachSchedule'
import CoachStudents from './pages/coach/CoachStudents'
import CoachEarnings from './pages/coach/CoachEarnings'
import CoachSettings from './pages/coach/CoachSettings'
import CoachNotifications from './pages/coach/CoachNotifications'
import CoachSubscription from './pages/coach/CoachSubscription'
import CoachSubscribePayment from './pages/coach/CoachSubscribePayment'
import CoachSubscriptionSuccess from './pages/coach/CoachSubscriptionSuccess'

// Organizer pages
import OrganizerSurvey from './pages/organizer/OrganizerSurvey'
import OrganizerLayout from './pages/organizer/OrganizerLayout'
import OrganizerDashboard from './pages/organizer/OrganizerDashboard'
import OrganizerProfile from './pages/organizer/OrganizerProfile'
import OrganizerEditProfile from './pages/organizer/OrganizerEditProfile'
import OrganizerTournaments from './pages/organizer/OrganizerTournaments'
import OrganizerParticipants from './pages/organizer/OrganizerParticipants'
import OrganizerRevenue from './pages/organizer/OrganizerRevenue'
import OrganizerSettings from './pages/organizer/OrganizerSettings'
import OrganizerNotifications from './pages/organizer/OrganizerNotifications'
import OrganizerSubscription from './pages/organizer/OrganizerSubscription'
import OrganizerSubscribePayment from './pages/organizer/OrganizerSubscribePayment'
import OrganizerSubscriptionSuccess from './pages/organizer/OrganizerSubscriptionSuccess'

// Club GM pages
import ClubGMSurvey from './pages/clubgm/ClubGMSurvey'
import ClubGMLayout from './pages/clubgm/ClubGMLayout'
import ClubGMDashboard from './pages/clubgm/ClubGMDashboard'
import ClubGMProfile from './pages/clubgm/ClubGMProfile'
import ClubGMEditProfile from './pages/clubgm/ClubGMEditProfile'
import ClubGMMembers from './pages/clubgm/ClubGMMembers'
import ClubGMEvents from './pages/clubgm/ClubGMEvents'
import ClubGMFinances from './pages/clubgm/ClubGMFinances'
import ClubGMSettings from './pages/clubgm/ClubGMSettings'
import ClubGMNotifications from './pages/clubgm/ClubGMNotifications'
import ClubGMSubscription from './pages/clubgm/ClubGMSubscription'
import ClubGMSubscribePayment from './pages/clubgm/ClubGMSubscribePayment'
import ClubGMSubscriptionSuccess from './pages/clubgm/ClubGMSubscriptionSuccess'

// Court Owner pages
import CourtOwnerSurvey from './pages/courtowner/CourtOwnerSurvey'
import CourtOwnerLayout from './pages/courtowner/CourtOwnerLayout'
import CourtOwnerDashboard from './pages/courtowner/CourtOwnerDashboard'
import CourtOwnerProfile from './pages/courtowner/CourtOwnerProfile'
import CourtOwnerEditProfile from './pages/courtowner/CourtOwnerEditProfile'
import CourtOwnerCourts from './pages/courtowner/CourtOwnerCourts'
import CourtOwnerBookings from './pages/courtowner/CourtOwnerBookings'
import CourtOwnerRevenue from './pages/courtowner/CourtOwnerRevenue'
import CourtOwnerSettings from './pages/courtowner/CourtOwnerSettings'
import CourtOwnerNotifications from './pages/courtowner/CourtOwnerNotifications'
import CourtOwnerSubscription from './pages/courtowner/CourtOwnerSubscription'
import CourtOwnerSubscribePayment from './pages/courtowner/CourtOwnerSubscribePayment'
import CourtOwnerSubscriptionSuccess from './pages/courtowner/CourtOwnerSubscriptionSuccess'

// Sponsor pages
import SponsorSurvey from './pages/sponsor/SponsorSurvey'
import SponsorLayout from './pages/sponsor/SponsorLayout'
import SponsorDashboard from './pages/sponsor/SponsorDashboard'
import SponsorProfile from './pages/sponsor/SponsorProfile'
import SponsorEditProfile from './pages/sponsor/SponsorEditProfile'
import SponsorCampaigns from './pages/sponsor/SponsorCampaigns'
import SponsorAthletes from './pages/sponsor/SponsorAthletes'
import SponsorAnalytics from './pages/sponsor/SponsorAnalytics'
import SponsorSettings from './pages/sponsor/SponsorSettings'
import SponsorNotifications from './pages/sponsor/SponsorNotifications'
import SponsorSubscription from './pages/sponsor/SponsorSubscription'
import SponsorSubscribePayment from './pages/sponsor/SponsorSubscribePayment'
import SponsorSubscriptionSuccess from './pages/sponsor/SponsorSubscriptionSuccess'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RoleSelection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Player Routes */}
        <Route path="/player" element={<PlayerLayout />}>
          <Route index element={<Navigate to="/player/dashboard" replace />} />
          <Route path="dashboard" element={<PlayerDashboard />} />
          <Route path="profile" element={<PlayerProfile />} />
          <Route path="stats" element={<PlayerStats />} />
          <Route path="tournaments" element={<PlayerTournaments />} />
          <Route path="clubs" element={<PlayerClubs />} />
          <Route path="history" element={<PlayerHistory />} />
          <Route path="achievements" element={<PlayerAchievements />} />
        </Route>

        {/* Player Routes (without layout) */}
        <Route path="/player/edit-profile" element={<PlayerEditProfile />} />
        <Route path="/player/settings" element={<PlayerSettings />} />
        <Route path="/player/notifications" element={<PlayerNotifications />} />
        <Route path="/player/tournaments/:tournamentId" element={<PlayerTournamentDetails />} />
        <Route path="/player/join-tournament/:id?" element={<PlayerJoinTournament />} />
        <Route path="/player/book-court" element={<PlayerBookCourt />} />
        <Route path="/player/book-training" element={<PlayerBookTraining />} />
        <Route path="/player/survey/:surveyId" element={<PlayerSurvey />} />
        <Route path="/player/subscription" element={<PlayerSubscription />} />
        <Route path="/player/subscribe-payment/:planId" element={<PlayerSubscribePayment />} />
        <Route path="/player/subscription-success" element={<PlayerSubscriptionSuccess />} />

        {/* Coach Routes */}
        <Route path="/coach" element={<CoachLayout />}>
          <Route index element={<Navigate to="/coach/dashboard" replace />} />
          <Route path="dashboard" element={<CoachDashboard />} />
          <Route path="profile" element={<CoachProfile />} />
          <Route path="sessions" element={<CoachSessions />} />
          <Route path="schedule" element={<CoachSchedule />} />
          <Route path="students" element={<CoachStudents />} />
          <Route path="earnings" element={<CoachEarnings />} />
        </Route>

        {/* Coach Routes (without layout) */}
        <Route path="/coach/edit-profile" element={<CoachEditProfile />} />
        <Route path="/coach/sessions/create" element={<CoachCreateSession />} />
        <Route path="/coach/settings" element={<CoachSettings />} />
        <Route path="/coach/notifications" element={<CoachNotifications />} />
        <Route path="/coach/survey/:surveyId" element={<CoachSurvey />} />
        <Route path="/coach/subscription" element={<CoachSubscription />} />
        <Route path="/coach/subscribe-payment/:planId" element={<CoachSubscribePayment />} />
        <Route path="/coach/subscription-success" element={<CoachSubscriptionSuccess />} />

        {/* Organizer Routes */}
        <Route path="/organizer" element={<OrganizerLayout />}>
          <Route index element={<Navigate to="/organizer/dashboard" replace />} />
          <Route path="dashboard" element={<OrganizerDashboard />} />
          <Route path="profile" element={<OrganizerProfile />} />
          <Route path="tournaments" element={<OrganizerTournaments />} />
          <Route path="participants" element={<OrganizerParticipants />} />
          <Route path="revenue" element={<OrganizerRevenue />} />
        </Route>

        {/* Organizer Routes (without layout) */}
        <Route path="/organizer/edit-profile" element={<OrganizerEditProfile />} />
        <Route path="/organizer/settings" element={<OrganizerSettings />} />
        <Route path="/organizer/notifications" element={<OrganizerNotifications />} />
        <Route path="/organizer/survey/:surveyId" element={<OrganizerSurvey />} />
        <Route path="/organizer/subscription" element={<OrganizerSubscription />} />
        <Route path="/organizer/subscribe-payment/:planId" element={<OrganizerSubscribePayment />} />
        <Route path="/organizer/subscription-success" element={<OrganizerSubscriptionSuccess />} />

        {/* Club GM Routes */}
        <Route path="/clubgm" element={<ClubGMLayout />}>
          <Route index element={<Navigate to="/clubgm/dashboard" replace />} />
          <Route path="dashboard" element={<ClubGMDashboard />} />
          <Route path="profile" element={<ClubGMProfile />} />
          <Route path="members" element={<ClubGMMembers />} />
          <Route path="events" element={<ClubGMEvents />} />
          <Route path="finances" element={<ClubGMFinances />} />
        </Route>

        {/* Club GM Routes (without layout) */}
        <Route path="/clubgm/edit-profile" element={<ClubGMEditProfile />} />
        <Route path="/clubgm/settings" element={<ClubGMSettings />} />
        <Route path="/clubgm/notifications" element={<ClubGMNotifications />} />
        <Route path="/clubgm/survey/:surveyId" element={<ClubGMSurvey />} />
        <Route path="/clubgm/subscription" element={<ClubGMSubscription />} />
        <Route path="/clubgm/subscribe-payment/:planId" element={<ClubGMSubscribePayment />} />
        <Route path="/clubgm/subscription-success" element={<ClubGMSubscriptionSuccess />} />

        {/* Court Owner Routes */}
        <Route path="/courtowner" element={<CourtOwnerLayout />}>
          <Route index element={<Navigate to="/courtowner/dashboard" replace />} />
          <Route path="dashboard" element={<CourtOwnerDashboard />} />
          <Route path="profile" element={<CourtOwnerProfile />} />
          <Route path="courts" element={<CourtOwnerCourts />} />
          <Route path="bookings" element={<CourtOwnerBookings />} />
          <Route path="revenue" element={<CourtOwnerRevenue />} />
        </Route>

        {/* Court Owner Routes (without layout) */}
        <Route path="/courtowner/edit-profile" element={<CourtOwnerEditProfile />} />
        <Route path="/courtowner/settings" element={<CourtOwnerSettings />} />
        <Route path="/courtowner/notifications" element={<CourtOwnerNotifications />} />
        <Route path="/courtowner/survey/:surveyId" element={<CourtOwnerSurvey />} />
        <Route path="/courtowner/subscription" element={<CourtOwnerSubscription />} />
        <Route path="/courtowner/subscribe-payment/:planId" element={<CourtOwnerSubscribePayment />} />
        <Route path="/courtowner/subscription-success" element={<CourtOwnerSubscriptionSuccess />} />

        {/* Sponsor Routes */}
        <Route path="/sponsor" element={<SponsorLayout />}>
          <Route index element={<Navigate to="/sponsor/dashboard" replace />} />
          <Route path="dashboard" element={<SponsorDashboard />} />
          <Route path="profile" element={<SponsorProfile />} />
          <Route path="campaigns" element={<SponsorCampaigns />} />
          <Route path="athletes" element={<SponsorAthletes />} />
          <Route path="analytics" element={<SponsorAnalytics />} />
        </Route>

        {/* Sponsor Routes (without layout) */}
        <Route path="/sponsor/edit-profile" element={<SponsorEditProfile />} />
        <Route path="/sponsor/settings" element={<SponsorSettings />} />
        <Route path="/sponsor/notifications" element={<SponsorNotifications />} />
        <Route path="/sponsor/survey/:surveyId" element={<SponsorSurvey />} />
        <Route path="/sponsor/subscription" element={<SponsorSubscription />} />
        <Route path="/sponsor/subscribe-payment/:planId" element={<SponsorSubscribePayment />} />
        <Route path="/sponsor/subscription-success" element={<SponsorSubscriptionSuccess />} />
      </Routes>
    </Router>
  )
}

export default App
