# Sportify PH - Design System Guide

## Theme Colors

### Module Colors
- **Player**: Blue (`blue-600` / `#2563eb`)
- **Coach**: Green (`green-600` / `#16a34a`)
- **Organizer**: Purple (`purple-600` / `#9333ea`)
- **Club GM**: Orange (`orange-600` / `#ea580c`)
- **Court Owner**: Red (`red-600` / `#dc2626`)
- **Sponsor**: Indigo (`indigo-600` / `#4f46e5`)

### Common Colors
- Background: `gray-50` / `#f9fafb`
- Card Background: `white` / `#ffffff`
- Text Primary: `gray-800` / `#1f2937`
- Text Secondary: `gray-600` / `#4b5563`
- Text Muted: `gray-500` / `#6b7280`
- Border: `gray-200` / `#e5e7eb`
- Divider: `gray-100` / `#f3f4f6`

---

## Typography

### Headings
- **Page Title**: `text-2xl font-bold text-gray-800`
- **Section Title**: `text-lg font-bold text-gray-800`
- **Card Title**: `font-semibold text-gray-800`
- **Subsection Title**: `text-sm font-semibold text-gray-700 uppercase tracking-wide`

### Body Text
- **Primary**: `text-sm font-medium text-gray-800`
- **Secondary**: `text-sm text-gray-600`
- **Muted**: `text-xs text-gray-500`

---

## Spacing

### Container
- Max Width: `max-w-md mx-auto`
- Padding: `p-4`
- Bottom Padding (for nav): `pb-20`

### Component Spacing
- Section Gap: `space-y-6`
- Card Gap: `space-y-3` or `space-y-4`
- Item Gap: `space-x-3` or `space-y-2`

---

## Components

### 1. Stat Cards
```jsx
<div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
  <IconComponent className="text-2xl text-{module-color}-600 mb-2" />
  <div className="text-2xl font-bold text-gray-800">{value}</div>
  <div className="text-xs text-gray-600">{label}</div>
</div>
```

### 2. Action Buttons
**Primary Button:**
```jsx
<button className="bg-{module-color}-600 hover:bg-{module-color}-700 text-white rounded-lg py-3 px-4 font-semibold transition-colors">
  {label}
</button>
```

**Secondary Button:**
```jsx
<button className="bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg py-3 px-4 font-semibold transition-colors">
  {label}
</button>
```

### 3. Toggle Switch
```jsx
<button
  className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${
    isOn ? 'bg-{module-color}-600' : 'bg-gray-300'
  }`}
>
  <span className={`inline-block w-4 h-4 transform rounded-full bg-white transition-transform ${
    isOn ? 'translate-x-6' : 'translate-x-1'
  }`}>
    {isOn && <IoCheckmark className="text-{module-color}-600 text-xs" />}
  </span>
</button>
```

### 4. Settings Item (Navigate)
```jsx
<button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
  <div className="flex items-center space-x-3 flex-1">
    <IconComponent className="text-xl text-gray-600" />
    <div className="flex-1 text-left">
      <p className="text-sm font-medium text-gray-800">{label}</p>
      <p className="text-xs text-gray-500 mt-0.5">{description}</p>
    </div>
  </div>
  <IoChevronForward className="text-gray-400" />
</button>
```

### 5. Settings Item (Toggle)
```jsx
<div className="flex items-center justify-between p-4 hover:bg-gray-50">
  <div className="flex items-center space-x-3 flex-1">
    <IconComponent className="text-xl text-gray-600" />
    <div className="flex-1">
      <p className="text-sm font-medium text-gray-800">{label}</p>
      <p className="text-xs text-gray-500 mt-0.5">{description}</p>
    </div>
  </div>
  {/* Toggle Switch Component Here */}
</div>
```

### 6. Settings Section
```jsx
<div className="bg-white rounded-xl shadow-sm overflow-hidden">
  <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
    <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
      {title}
    </h3>
  </div>
  <div className="divide-y divide-gray-100">
    {/* Items */}
  </div>
</div>
```

### 7. Dashboard Welcome Banner
```jsx
<div className="bg-gradient-to-r from-{module-color}-600 to-{secondary-color}-600 rounded-xl p-6 text-white">
  <h1 className="text-2xl font-bold mb-2">Welcome back, {userName}! 👋</h1>
  <p className="text-sm opacity-90">{description}</p>
</div>
```

### 8. Subscription Banner
```jsx
<div className={`rounded-xl p-4 cursor-pointer transition-all ${
  daysRemaining <= 7
    ? 'bg-gradient-to-r from-red-500 to-orange-600'
    : 'bg-gradient-to-r from-{module-color}-500 to-{secondary-color}-600'
} text-white shadow-lg`}>
  <div className="flex items-center justify-between">
    <div className="flex-1">
      <div className="flex items-center space-x-2 mb-1">
        <IoStar className="text-lg" />
        <span className="font-bold text-sm">
          {daysRemaining <= 7 ? 'Subscription Ending Soon!' : 'Pro Subscription Active'}
        </span>
      </div>
      <p className="text-xs opacity-90">{daysRemaining} days remaining • Tap to manage</p>
    </div>
    <div className="text-right">
      <div className="text-2xl font-bold">{daysRemaining}</div>
      <div className="text-xs opacity-90">days left</div>
    </div>
  </div>
</div>
```

### 9. Logout Button
```jsx
<div className="bg-white rounded-xl shadow-sm overflow-hidden">
  <button
    onClick={handleLogout}
    className="w-full flex items-center justify-between p-4 hover:bg-red-50 transition-colors"
  >
    <div className="flex items-center space-x-3">
      <IoLogOut className="text-xl text-red-600" />
      <span className="text-sm font-medium text-red-600">Logout</span>
    </div>
  </button>
</div>
```

### 10. Page Header (PageHeader Component)
```jsx
<PageHeader
  title="Page Title"
  backPath="/module/dashboard"
/>
```

### 11. Bottom Navigation
```jsx
<div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-20">
  <div className="max-w-md mx-auto px-2 py-2">
    <div className="flex items-center justify-around">
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`flex flex-col items-center justify-center px-3 py-2 rounded-lg transition-colors ${
            isActive ? 'text-{module-color}-600 bg-{module-color}-50' : 'text-gray-600 hover:text-{module-color}-600 hover:bg-gray-50'
          }`}
        >
          <Icon className="text-2xl mb-1" />
          <span className="text-xs font-medium">{item.name}</span>
        </button>
      ))}
    </div>
  </div>
</div>
```

---

## Layout Structure

### Dashboard Page
1. Welcome Banner (gradient with module color)
2. Subscription Banner (if trial active)
3. Stats Cards Grid (2x2 or 4 columns)
4. Quick Actions (3 columns)
5. Main Content Sections
6. Bottom spacing for navigation

### Profile Page
1. Profile Header Card
   - Avatar circle with module color gradient
   - Name and username
   - Badges/tags
   - Rating (if applicable)
   - Edit Profile & Share buttons
2. About/Bio Section
3. Stats Grid
4. Achievements/Certifications
5. Contact Information
6. Member Since footer

### Settings Page
1. PageHeader
2. Settings Sections (Account, Notifications, Privacy, Preferences, Support)
3. Logout Button
4. App Version Footer

### Notifications Page
1. PageHeader
2. Filter Chips
3. Notification List
4. Empty State (if no notifications)

---

## Icons (from react-icons/io5)

### Common Icons
- Dashboard: `IoGrid`
- Profile: `IoPersonCircle`
- Settings: `IoSettings`
- Notifications: `IoNotifications`
- Back: `IoArrowBack`
- Forward: `IoChevronForward`
- Edit: `IoCreate`
- Share: `IoShareSocial`
- Logout: `IoLogOut`
- Success: `IoCheckmarkCircle`
- Info: `IoInformationCircle`
- Star: `IoStar`
- Trophy: `IoTrophy`
- People: `IoPeople`
- Cash: `IoCash`
- Calendar: `IoCalendar`
- Location: `IoLocationSharp`
- Mail: `IoMail`
- Call: `IoCall`
- Time: `IoTime`
- Trending Up: `IoTrendingUp`

---

## Subscription Pricing

### Player
- Monthly: ₱99
- Yearly: ₱899 (save ₱289)

### Coach
- Monthly: ₱199
- Yearly: ₱1,899 (save ₱489)

### Organizer
- Monthly: ₱299
- Yearly: ₱2,899 (save ₱689)

### Club GM
- Monthly: ₱399
- Yearly: ₱3,899 (save ₱889)

### Trial Period
- Duration: 3 months (90 days)
- Display when: 30 days or less remaining
- Warning threshold: 7 days or less (red/orange banner)

---

## Best Practices

1. **Always use module-specific colors** for primary actions, highlights, and active states
2. **Use gray scale** for neutral elements (borders, backgrounds, secondary text)
3. **Maintain consistent spacing** using Tailwind's spacing scale
4. **Icons should be gray-600** in neutral states, module color when active
5. **All cards should have** `rounded-xl shadow-sm` with optional border
6. **Section headers** should be uppercase with tracking-wide
7. **Bottom padding** of `pb-20` on pages with bottom navigation
8. **Toggle switches** must include checkmark icon when active
9. **Hover states** should use lighter shades (e.g., `hover:bg-gray-50`)
10. **Transitions** should be smooth with `transition-colors` or `transition-all`

---

## File Naming Conventions

### Pages
- `{Module}{PageName}.jsx` (e.g., `PlayerDashboard.jsx`, `CoachSettings.jsx`)

### Components
- PascalCase (e.g., `StatCard.jsx`, `ToggleSwitch.jsx`)

### Folders
- lowercase (e.g., `player/`, `coach/`, `components/`)

---

## Responsive Design

All pages should:
- Use `max-w-md mx-auto` for mobile-first design
- Support screens from 375px to 768px width
- Use `overflow-x-auto` for horizontal scrolling elements
- Test on mobile viewport sizes

---

## Accessibility

- All buttons should have clear labels
- Icons should have descriptive aria-labels when standalone
- Color should not be the only indicator (use icons + text)
- Form inputs should have proper labels and error states
- Sufficient color contrast for text (WCAG AA minimum)

---

**Last Updated**: 2024-11-10
**Version**: 1.0.0
