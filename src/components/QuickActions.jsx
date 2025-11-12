import React from 'react'

/**
 * Reusable Quick Actions Component
 *
 * @param {Object} props
 * @param {Array} props.actions - Array of action objects with structure:
 *   {
 *     id: number,
 *     title: string,
 *     icon: IconComponent,
 *     bgColor: string (tailwind class) - for default/enhanced variants,
 *     iconColor: string (tailwind class) - for default/enhanced variants,
 *     color: string (gradient class) - for gradient variant,
 *     action: function (callback to execute on click)
 *   }
 * @param {string} props.title - Section title (default: "Quick Actions")
 * @param {string} props.variant - Style variant ("default" | "enhanced" | "gradient" | "solid")
 *   - default: Simple card style with hover effects
 *   - enhanced: With border and ring effects (used in CoachDashboard)
 *   - gradient: Icon wrapper with gradient background (used in OrganizerDashboard)
 *   - solid: Solid brand-primary background with white text (used in CourtOwnerDashboard)
 */
const QuickActions = ({
  actions = [],
  title = "Quick Actions",
  variant = "default"
}) => {
  const getButtonClasses = () => {
    if (variant === "solid") {
      return "bg-brand-primary hover:bg-brand-primary-light text-white rounded-xl p-4 text-center transition-all transform hover:scale-105 active:scale-95"
    }

    const baseClasses = "flex flex-col items-center p-4 bg-dark-bg-tertiary rounded-xl shadow-sm transition-all"

    if (variant === "enhanced") {
      return `${baseClasses} border-2 border-brand-primary/20 hover:border-brand-primary hover:shadow-lg hover:shadow-brand-primary/20`
    }

    if (variant === "gradient") {
      return `${baseClasses} border border-dark-border hover:shadow-md`
    }

    return baseClasses
  }

  const getIconWrapperClasses = (action) => {
    if (variant === "solid") {
      return null // No wrapper needed for solid variant
    }

    if (variant === "gradient") {
      return `w-12 h-12 rounded-full bg-gradient-to-br ${action.color} flex items-center justify-center mx-auto mb-2`
    }

    const baseClasses = `w-12 h-12 ${action.bgColor} rounded-full flex items-center justify-center mb-2`

    if (variant === "enhanced") {
      return `${baseClasses} ring-2 ring-brand-primary/20`
    }

    return baseClasses
  }

  const getIconClasses = (action) => {
    if (variant === "solid") {
      return "text-3xl mx-auto mb-2"
    }

    if (variant === "gradient") {
      return "text-2xl text-white"
    }

    return `text-2xl ${action.iconColor}`
  }

  if (!actions || actions.length === 0) {
    return null
  }

  return (
    <div>
      <h2 className="text-lg font-bold text-dark-text mb-3">
        {title}
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {actions.map((action) => {
          const IconComponent = action.icon
          const iconWrapperClasses = getIconWrapperClasses(action)

          return (
            <button
              key={action.id}
              onClick={action.action}
              className={getButtonClasses()}
            >
              {iconWrapperClasses ? (
                <div className={iconWrapperClasses}>
                  <IconComponent className={getIconClasses(action)} />
                </div>
              ) : (
                <IconComponent className={getIconClasses(action)} />
              )}
              <span className={`text-xs font-medium text-center ${variant === "solid" ? "text-white" : "text-dark-text"}`}>
                {action.title}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default QuickActions
