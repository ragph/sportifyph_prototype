import { useNavigate } from 'react-router-dom'
import {
  IoPersonCircle,
  IoLockClosed,
  IoNotifications,
  IoShield,
  IoLanguage,
  IoMoon,
  IoHelpCircle,
  IoInformationCircle,
  IoGlobe,
  IoMail,
  IoPhonePortrait,
  IoStar
} from 'react-icons/io5'
import { BaseSettings } from '../../components'

const PlayerSettings = () => {
  const navigate = useNavigate()

  // Initial settings state
  const initialSettings = {
    pushNotifications: true,
    emailNotifications: true,
    smsNotifications: false,
    matchReminders: true,
    tournamentUpdates: true,
    messageNotifications: true,
    darkMode: false
  }

  // Mock subscription data - would come from user context/API
  const subscriptionInfo = {
    isActive: true,
    plan: 'Free Trial',
    expiryDate: '2024-11-10',
    daysRemaining: 30
  }

  // Settings sections configuration
  const settingsSections = [
    {
      title: 'Subscription',
      items: [
        {
          icon: IoStar,
          label: 'Subscription Plan',
          description: subscriptionInfo.isActive ? `${subscriptionInfo.plan} - ${subscriptionInfo.daysRemaining} days left` : 'No active subscription',
          action: () => navigate('/player/subscription'),
          type: 'navigate'
        }
      ]
    },
    {
      title: 'Account',
      items: [
        {
          icon: IoPersonCircle,
          label: 'Edit Profile',
          description: 'Update your profile information',
          action: () => navigate('/player/edit-profile'),
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
          description: 'juan.delacruz@gmail.com',
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
        },
        {
          icon: IoNotifications,
          label: 'Match Reminders',
          description: 'Get reminded before matches',
          toggle: 'matchReminders',
          type: 'toggle'
        },
        {
          icon: IoNotifications,
          label: 'Tournament Updates',
          description: 'Get tournament notifications',
          toggle: 'tournamentUpdates',
          type: 'toggle'
        },
        {
          icon: IoNotifications,
          label: 'Messages',
          description: 'Get notified of new messages',
          toggle: 'messageNotifications',
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
          label: 'About',
          description: 'Learn about Sportify PH',
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
      moduleName="player"
      moduleColor="blue"
      backPath="/player/dashboard"
      settingsSections={settingsSections}
      initialSettings={initialSettings}
    />
  )
}

export default PlayerSettings
