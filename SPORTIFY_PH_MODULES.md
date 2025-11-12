# SPORTIFY PH — Modules & Routes (Clean List)

## 0. Authentication

**Routes:**
- `/login`
- `/register`
- `/forgot-password`
- `/reset-password`
- `/verify-email`

**Functions:**
- User registration with email verification
- Login with email/password
- Password reset flow
- OAuth integration (Google/Facebook)
- Session management & token refresh
- Multi-role account creation
- Terms & conditions acceptance

---

## 1. Universal Dashboard (shared)

**Routes:**
- `/dashboard`

**Functions:**
- Display upcoming matches & training sessions (role-aware)
- Show joined tournaments list
- Recommend coaches & clubs based on user activity
- Live standings snapshot widget
- News feed with sponsor banner slots
- Quick Actions: Join Tournament, Book Court, Train Now
- Role-based content filtering
- Personalized notifications panel

---

## 2. Player Module

**Routes:**
- `/player/profile`
- `/player/stats`
- `/player/history`
- `/player/achievements`
- `/player/clubs`
- `/player/tournaments`

**Functions:**
- View/edit player profile (bio, sports, skill level, photo)
- Display personal statistics (games, wins, losses, points)
- Tournament history & match records
- Achievements & badges collection
- List clubs joined & clubs created
- View/manage tournament registrations
- Export personal stats (PDF/CSV)
- Privacy settings (profile visibility)

---

## 3. Club Module

**Routes:**
- `/clubs`
- `/clubs/create`
- `/clubs/:id`
- `/clubs/:id/manage`
- `/clubs/:id/queue`
- `/clubs/:id/members`
- `/clubs/:id/announcements`
- `/clubs/:id/settings`

**Functions:**
- Browse & search clubs
- Create new club (creator becomes GM)
- Assign/reassign GM & Co-GM roles
- Manage member roster (invite, approve, remove)
- Daily queuing system (papawis): create sessions, manage queue
- Track attendance per session
- Set optional session fees
- Payment tracking for session fees
- Club announcements & chat
- Club-level statistics
- Club settings (name, logo, privacy, subscription ₱99/month)

---

## 4. Organizer Module

**Routes:**
- `/organizer/events`
- `/organizer/events/create`
- `/organizer/events/:id`
- `/organizer/events/:id/registrations`
- `/organizer/events/:id/brackets`
- `/organizer/events/:id/schedule`
- `/organizer/events/:id/live`
- `/organizer/events/:id/results`
- `/organizer/events/:id/sponsors`
- `/organizer/earnings`

**Functions:**
- Create tournament (₱500 post fee)
- Manage event details (sport, format, venue, dates, rules)
- Player/team registration management (₱100 per player deducted from organizer)
- Auto-generate brackets (single/double elimination, round-robin)
- Schedule matches with dates/times/courts
- Live score posting & updates
- Real-time standings & leaderboards
- Event-level sponsor management
- Results publication
- Earnings dashboard & analytics
- Email confirmations to registered players

---

## 5. Coach Module

**Routes:**
- `/coaches`
- `/coach/profile`
- `/coach/sessions`
- `/coach/sessions/create`
- `/coach/bookings`
- `/coach/earnings`
- `/coach/reviews`

**Functions:**
- Browse & filter coaches (sport, location, rating, price)
- Create/publish training sessions (₱99/post/month subscription)
- Set session details (schedule, venue, fee, capacity)
- Manage session bookings & participant lists
- Accept/decline booking requests
- Track payments for sessions
- View ratings & reviews from players
- Earnings dashboard
- Session history & analytics

---

## 6. Court Module

**Routes:**
- `/courts`
- `/courts/:id`
- `/courts/:id/book`
- `/courts/owner/listings`
- `/courts/owner/bookings`
- `/courts/owner/earnings`

**Functions:**
- Browse court directory with filters (sport, location, price, amenities)
- Map view of available courts
- View court details (photos, amenities, pricing, availability)
- Real-time booking calendar
- Process booking payments (GCash/PayMaya/cards)
- Email booking confirmations
- Court owner: manage listings (₱99/month for featured)
- Court owner: view/manage bookings
- Court owner: earnings & analytics
- Court owner: upload photos & set rates

---

## 7. Stats & Leaderboards

**Routes:**
- `/stats/players`
- `/stats/teams`
- `/stats/standings`
- `/stats/export`

**Functions:**
- Display player rankings & statistics
- Team/club standings
- Filter by sport, organizer, tournament, season
- Sort by multiple metrics (wins, points, win rate)
- Historical performance tracking
- Export leaderboards (CSV/PDF)
- Comparative analytics
- Season-based archives

---

## 8. News & Updates

**Routes:**
- `/news`
- `/news/:id`
- `/announcements`

**Functions:**
- News feed with latest updates
- Tournament highlights & recaps
- Platform announcements
- Filter by category (tournaments, clubs, coaches, courts)
- Sponsor banner slots integration
- Share news to social media
- Push notifications for breaking news
- Search & archive

---

## 9. Payments & Subscriptions

**Routes:**
- `/payments/methods`
- `/payments/subscriptions`
- `/payments/history`
- `/payments/receipts/:id`

**Functions:**
- Add/manage payment methods (GCash/PayMaya/cards)
- Subscription management by role:
  - Organizer: ₱500 per tournament + ₱100 per player
  - Coach: ₱99/month per post
  - Club GM: ₱99/month
  - Court Owner: ₱99/month
- View transaction history
- Download receipts & invoices
- Auto-renewal settings
- Payment reminders & notifications
- Refund requests (if applicable)

---

## 10. Ads & Sponsors

**Routes:**
- `/sponsors/register`
- `/sponsors/campaigns`
- `/sponsors/campaigns/create`
- `/sponsors/campaigns/:id`
- `/sponsors/analytics`

**Functions:**
- Sponsor registration & verification
- Create ad campaigns (₱499–₱1,999 based on placement/duration)
- Select placement targets:
  - Dashboard hero banner
  - Tournament "Presented by"
  - Stats branded footer
  - News inline card
  - Featured Court/Coach
- Upload creative assets (banners, logos, videos)
- Campaign analytics (impressions, clicks, CTR, conversions)
- Budget & duration management
- Admin approval workflow
- Performance reports

---

## 11. Settings & Role Management

**Routes:**
- `/settings/account`
- `/settings/security`
- `/settings/roles`
- `/settings/privacy`
- `/settings/notifications`

**Functions:**
- Account details (name, email, phone, photo)
- Password & security settings
- Role toggles (enable/disable Player, Coach, Organizer, Club GM, Court Owner, Sponsor)
- Club GM assignment/transfer
- Privacy controls (profile visibility, stats sharing)
- Notification preferences (email, push, SMS)
- Language & timezone
- Two-factor authentication

---

## 12. Admin Panel

**Routes:**
- `/admin/dashboard`
- `/admin/approvals`
- `/admin/users`
- `/admin/clubs`
- `/admin/events`
- `/admin/payments`
- `/admin/ads`
- `/admin/analytics`

**Functions:**
- Approve/reject Organizers, Coaches, Court Owners
- User management (view, suspend, delete accounts)
- Club moderation (approve, archive, feature)
- Event oversight (monitor, flag, cancel)
- Payment & revenue tracking
- Subscription analytics by role
- Ad placement & campaign moderation
- Global platform analytics (users, revenue, engagement)
- System settings & configuration
- Reports generation
