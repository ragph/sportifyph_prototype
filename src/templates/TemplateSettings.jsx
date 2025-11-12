import { useNavigate } from 'react-router-dom'
import {
  IoPersonCircle,
  IoLockClosed,
  IoMail,
  IoNotifications,
  IoPhonePortrait,
  IoShield,
  IoMoon,
  IoLanguage,
  IoGlobe,
  IoHelpCircle,
  IoInformationCircle
} from 'react-icons/io5'
import { getModuleTheme } from '../config/theme'
import { BaseSettings } from '../components'

const TemplateSettings = () => {
  const navigate = useNavigate()

  // STEP 1: Set your module name
  const moduleName = 'player' // Change this: player, coach, organizer, clubgm, courtowner, sponsor
  const theme = getModuleTheme(moduleName)

  // STEP 2: Define initial settings state
  const initialSettings = {
    pushNotifications: true,
    emailNotifications: true,
    smsNotifications: false,
    darkMode: false,
    publicProfile: true
  }

  // STEP 3: Define settings sections (customize for your module)
  const settingsSections = [
    {
      title: 'Account',
      items: [
        {
          icon: IoPersonCircle,
          label: 'Edit Profile',
          description: 'Update your profile information',
          action: () => navigate(`/${moduleName}/edit-profile`),
          type: 'navigate'
        },
        {
          icon: IoLockClosed,
          label: 'Change Password',
          description: 'Update your password',
          action: () => {},
          type: 'navigate'
        },
        {
          icon: IoMail,
          label: 'Email Address',
          description: 'user@example.com',
          action: () => {},
          type: 'navigate'
        }
      ]
    },
    {
      title: 'Notifications',
      items: [
        {
          icon: IoPhonePortrait,
          label: 'Push Notifications',
          description: 'Receive push notifications',
          toggle: 'pushNotifications',
          type: 'toggle'
        },
        {
          icon: IoMail,
          label: 'Email Notifications',
          description: 'Receive email notifications',
          toggle: 'emailNotifications',
          type: 'toggle'
        },
        {
          icon: IoPhonePortrait,
          label: 'SMS Notifications',
          description: 'Receive SMS notifications',
          toggle: 'smsNotifications',
          type: 'toggle'
        }
      ]
    },
    {
      title: 'Privacy',
      items: [
        {
          icon: IoShield,
          label: 'Profile Visibility',
          description: 'Public',
          action: () => {},
          type: 'navigate'
        },
        {
          icon: IoGlobe,
          label: 'Public Profile',
          description: 'Make profile publicly visible',
          toggle: 'publicProfile',
          type: 'toggle'
        },
        {
          icon: IoShield,
          label: 'Data Privacy',
          description: 'Manage your data',
          action: () => {},
          type: 'navigate'
        }
      ]
    },
    {
      title: 'Preferences',
      items: [
        {
          icon: IoMoon,
          label: 'Dark Mode',
          description: 'Use dark theme',
          toggle: 'darkMode',
          type: 'toggle'
        },
        {
          icon: IoLanguage,
          label: 'Language',
          description: 'English',
          action: () => {},
          type: 'navigate'
        },
        {
          icon: IoGlobe,
          label: 'Region',
          description: 'Philippines',
          action: () => {},
          type: 'navigate'
        }
      ]
    },
    {
      title: 'Support',
      items: [
        {
          icon: IoHelpCircle,
          label: 'Help Center',
          description: 'Get help and support',
          action: () => {},
          type: 'navigate'
        },
        {
          icon: IoInformationCircle,
          label: 'Terms of Service',
          description: 'Read our terms',
          action: () => {},
          type: 'navigate'
        },
        {
          icon: IoShield,
          label: 'Privacy Policy',
          description: 'Read our privacy policy',
          action: () => {},
          type: 'navigate'
        }
      ]
    }
  ]

  return (
    <BaseSettings
      moduleName={moduleName}
      moduleColor={theme.primary.split('-')[0]}
      backPath={`/${moduleName}/dashboard`}
      settingsSections={settingsSections}
      initialSettings={initialSettings}
    />
  )
}

export default TemplateSettings
