import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import PageHeader from './PageHeader'
import SettingsSection from './SettingsSection'
import SettingsItem from './SettingsItem'
import LogoutButton from './LogoutButton'
import LogoutModal from './LogoutModal'

const BaseSettings = ({
  moduleColor,
  backPath,
  settingsSections,
  initialSettings = {}
}) => {
  const navigate = useNavigate()
  const [settings, setSettings] = useState(initialSettings)
  const [showLogoutModal, setShowLogoutModal] = useState(false)

  const toggleSetting = (key) => {
    setSettings({
      ...settings,
      [key]: !settings[key]
    })
  }

  const handleLogout = () => {
    setShowLogoutModal(true)
  }

  const confirmLogout = () => {
    setShowLogoutModal(false)
    navigate('/')
  }

  const cancelLogout = () => {
    setShowLogoutModal(false)
  }

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <PageHeader
        title="Settings"
        backPath={backPath}
      />

      <div className="max-w-lg mx-auto p-4 space-y-6">
        {/* Settings Sections */}
        {settingsSections.map((section, sectionIndex) => (
          <SettingsSection key={sectionIndex} title={section.title}>
            {section.items.map((item, itemIndex) => (
              <SettingsItem
                key={itemIndex}
                icon={item.icon}
                label={item.label}
                description={item.description}
                type={item.type}
                onAction={item.action}
                toggleState={item.toggle ? settings[item.toggle] : false}
                onToggle={item.toggle ? () => toggleSetting(item.toggle) : undefined}
                moduleColor={moduleColor}
              />
            ))}
          </SettingsSection>
        ))}

        {/* Logout Button */}
        <LogoutButton onLogout={handleLogout} />

        {/* App Version */}
        <div className="text-center py-4">
          <p className="text-xs text-dark-text-muted">Sportify PH v1.0.0</p>
          <p className="text-xs text-dark-text-muted mt-1">© 2024 All rights reserved</p>
        </div>
      </div>

      {/* Logout Modal */}
      <LogoutModal
        isOpen={showLogoutModal}
        onClose={cancelLogout}
        onConfirm={confirmLogout}
      />
    </div>
  )
}

BaseSettings.propTypes = {
  moduleName: PropTypes.string.isRequired,
  moduleColor: PropTypes.string.isRequired,
  backPath: PropTypes.string.isRequired,
  settingsSections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          icon: PropTypes.elementType.isRequired,
          label: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          type: PropTypes.oneOf(['navigate', 'toggle']).isRequired,
          action: PropTypes.func,
          toggle: PropTypes.string
        })
      ).isRequired
    })
  ).isRequired,
  initialSettings: PropTypes.object
}

export default BaseSettings
