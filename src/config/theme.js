// Theme configuration for Sportify PH
// Centralizes all color schemes and module-specific styling

export const moduleThemes = {
  player: {
    name: 'Player',
    primary: 'blue-600',
    primaryHover: 'blue-700',
    primaryLight: 'blue-50',
    primaryGradientFrom: 'blue-600',
    primaryGradientTo: 'purple-600',
    bgGradient: 'from-blue-50 to-purple-50',
  },
  coach: {
    name: 'Coach',
    primary: 'green-600',
    primaryHover: 'green-700',
    primaryLight: 'green-50',
    primaryGradientFrom: 'green-600',
    primaryGradientTo: 'emerald-600',
    bgGradient: 'from-green-50 to-emerald-50',
  },
  organizer: {
    name: 'Organizer',
    primary: 'purple-600',
    primaryHover: 'purple-700',
    primaryLight: 'purple-50',
    primaryGradientFrom: 'purple-600',
    primaryGradientTo: 'indigo-600',
    bgGradient: 'from-purple-50 to-indigo-50',
  },
  clubgm: {
    name: 'Club GM',
    primary: 'orange-600',
    primaryHover: 'orange-700',
    primaryLight: 'orange-50',
    primaryGradientFrom: 'orange-600',
    primaryGradientTo: 'amber-600',
    bgGradient: 'from-orange-50 to-amber-50',
  },
  courtowner: {
    name: 'Court Owner',
    primary: 'red-600',
    primaryHover: 'red-700',
    primaryLight: 'red-50',
    primaryGradientFrom: 'red-600',
    primaryGradientTo: 'orange-600',
    bgGradient: 'from-red-50 to-orange-50',
  },
  sponsor: {
    name: 'Sponsor',
    primary: 'indigo-600',
    primaryHover: 'indigo-700',
    primaryLight: 'indigo-50',
    primaryGradientFrom: 'indigo-600',
    primaryGradientTo: 'purple-600',
    bgGradient: 'from-indigo-50 to-purple-50',
  }
}

export const commonColors = {
  background: 'gray-50',
  cardBg: 'white',
  textPrimary: 'gray-800',
  textSecondary: 'gray-600',
  textMuted: 'gray-500',
  border: 'gray-200',
  divider: 'gray-100',
}

export const subscriptionPricing = {
  player: {
    monthly: 99,
    yearly: 899,
    savings: 289
  },
  coach: {
    monthly: 199,
    yearly: 1899,
    savings: 489
  },
  organizer: {
    monthly: 299,
    yearly: 2899,
    savings: 689
  },
  clubgm: {
    monthly: 399,
    yearly: 3899,
    savings: 889
  }
}

export const trialConfig = {
  duration: 90, // days
  displayThreshold: 30, // show banner when 30 days or less
  warningThreshold: 7 // red/orange banner when 7 days or less
}

// Helper function to get module theme
export const getModuleTheme = (moduleName) => {
  return moduleThemes[moduleName.toLowerCase()] || moduleThemes.player
}

// Helper function to get tailwind classes for module
export const getModuleClasses = (moduleName) => {
  const theme = getModuleTheme(moduleName)
  return {
    primaryText: `text-${theme.primary}`,
    primaryBg: `bg-${theme.primary}`,
    primaryBgHover: `hover:bg-${theme.primaryHover}`,
    primaryBorder: `border-${theme.primary}`,
    primaryRing: `ring-${theme.primary}`,
    lightBg: `bg-${theme.primaryLight}`,
    gradient: `bg-gradient-to-r from-${theme.primaryGradientFrom} to-${theme.primaryGradientTo}`,
    bgGradient: `bg-gradient-to-br ${theme.bgGradient}`
  }
}

export default moduleThemes
