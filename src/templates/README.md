# Module Templates

This folder contains template files for creating new modules in Sportify PH. Using these templates ensures complete design consistency across all modules.

## Quick Start

1. **Copy the template files** to your new module folder (e.g., `src/pages/newmodule/`)
2. **Rename the files** to match your module name (e.g., `NewModuleDashboard.jsx`)
3. **Update the module configuration**:
   - Import theme from `src/config/theme.js`
   - Set your module name (player, coach, organizer, clubgm, courtowner, sponsor)
4. **Customize the content** while keeping the structure intact

## Available Templates

### 1. `TemplateDashboard.jsx`
Complete dashboard template with:
- Welcome banner
- Subscription banner
- Stats cards grid
- Quick actions
- Content sections

**Usage:**
```javascript
import { getModuleTheme } from '../../config/theme'
const theme = getModuleTheme('yourmodule')
```

### 2. `TemplateSettings.jsx`
Complete settings page using BaseSettings component.

**Usage:**
- Define your settings sections array
- Pass module name and color
- Component handles all the UI logic

### 3. `TemplateProfile.jsx`
Profile page template with:
- Profile header with avatar
- Stats grid
- Information sections
- Action buttons

### 4. `TemplateLayout.jsx`
Bottom navigation layout with:
- Navigation tabs
- Header with notifications/settings
- Outlet for nested routes

## Module Configuration

### Theme Setup
```javascript
import { getModuleTheme, getModuleClasses } from '../../config/theme'

const moduleName = 'yourmodule' // player, coach, organizer, clubgm, courtowner, sponsor
const theme = getModuleTheme(moduleName)
const classes = getModuleClasses(moduleName)
```

### Shared Components
```javascript
import {
  StatCard,
  WelcomeBanner,
  SubscriptionBanner,
  ActionButton,
  BaseSettings,
  PageHeader
} from '../../components'
```

## Module Colors

| Module | Primary Color | Gradient To |
|--------|--------------|-------------|
| Player | blue-600 | purple-600 |
| Coach | green-600 | emerald-600 |
| Organizer | purple-600 | indigo-600 |
| Club GM | orange-600 | amber-600 |
| Court Owner | red-600 | orange-600 |
| Sponsor | indigo-600 | purple-600 |

## Best Practices

1. **Always import theme configuration** - Never hardcode colors
2. **Use shared components** - Don't create custom versions
3. **Follow naming conventions** - `{Module}{PageName}.jsx`
4. **Keep consistent spacing** - Use `space-y-6` for sections, `space-y-3` for cards
5. **Mobile-first** - All layouts use `max-w-md mx-auto`
6. **Bottom padding** - Pages with nav need `pb-20`

## Step-by-Step: Creating a New Module

### Step 1: Create folder structure
```
src/pages/newmodule/
  ├── NewModuleLayout.jsx
  ├── NewModuleDashboard.jsx
  ├── NewModuleProfile.jsx
  ├── NewModuleSettings.jsx
  └── NewModuleNotifications.jsx
```

### Step 2: Copy templates
- Copy `TemplateLayout.jsx` → `NewModuleLayout.jsx`
- Copy `TemplateDashboard.jsx` → `NewModuleDashboard.jsx`
- Copy `TemplateProfile.jsx` → `NewModuleProfile.jsx`
- Copy `TemplateSettings.jsx` → `NewModuleSettings.jsx`

### Step 3: Update theme
In each file:
```javascript
const moduleName = 'newmodule'
const theme = getModuleTheme(moduleName)
```

### Step 4: Customize content
- Update welcome message
- Update stats data
- Update action buttons
- Update settings sections

### Step 5: Add routes
In `App.jsx`:
```javascript
import NewModuleLayout from './pages/newmodule/NewModuleLayout'
// ... other imports

<Route path="/newmodule" element={<NewModuleLayout />}>
  <Route index element={<Navigate to="/newmodule/dashboard" replace />} />
  <Route path="dashboard" element={<NewModuleDashboard />} />
  <Route path="profile" element={<NewModuleProfile />} />
</Route>

<Route path="/newmodule/settings" element={<NewModuleSettings />} />
```

### Step 6: Update RoleSelection
In `RoleSelection.jsx`:
```javascript
{
  id: 'newmodule',
  name: 'New Module',
  icon: IoYourIcon,
  description: 'Your module description',
  route: '/newmodule/dashboard',
  color: 'bg-yourcolor-500 hover:bg-yourcolor-600'
}
```

## Need Help?

Refer to:
- `DESIGN_GUIDE.md` - Complete design system documentation
- `src/config/theme.js` - Theme configuration
- `src/components/` - Shared component library
- Existing modules (Player, Coach, Organizer, Club GM) - Reference implementations
