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
  IoCash,
  IoCalendar,
  IoTrophy,
  IoCheckmark
} from 'react-icons/io5'
import { BaseSettings } from '../../components'

const OrganizerSettings = () => {
  const navigate = useNavigate()

  // Initial settings state
  const initialSettings = {
    pushNotifications: true,
    emailNotifications: true,
    smsNotifications: false,
    registrationAlerts: true,
    tournamentUpdates: true,
    paymentNotifications: true,
    messageNotifications: true,
    darkMode: false,
    autoApproveRegistrations: false,
    publicTournaments: true
  }

  // Settings sections configuration
  const settingsSections = [
    {
      title: 'Account',
      items: [
        {
          icon: IoPersonCircle,
          label: 'Edit Profile',
          description: 'Update your organization information',
          action: () => navigate('/organizer/edit-profile'),
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
          description: 'info@metrosports.com',
          action: () => {},
          type: 'navigate'
        }
      ]
    },
    {
      title: 'Tournament Management',
      items: [
        {
          icon: IoTrophy,
          label: 'Default Tournament Settings',
          description: 'Set default tournament configurations',
          action: () => {},
          type: 'navigate'
        },
        {
          icon: IoCalendar,
          label: 'Event Templates',
          description: 'Manage tournament templates',
          action: () => {},
          type: 'navigate'
        },
        {
          icon: IoCheckmark,
          label: 'Auto-Approve Registrations',
          description: 'Automatically approve participant registrations',
          toggle: 'autoApproveRegistrations',
          type: 'toggle'
        },
        {
          icon: IoGlobe,
          label: 'Public Tournaments',
          description: 'Make tournaments publicly visible',
          toggle: 'publicTournaments',
          type: 'toggle'
        }
      ]
    },
    {
      title: 'Payment & Revenue',
      items: [
        {
          icon: IoCash,
          label: 'Bank Account',
          description: 'Manage payout details',
          action: () => {},
          type: 'navigate'
        },
        {
          icon: IoCash,
          label: 'Payment Methods',
          description: 'Configure accepted payment options',
          action: () => {},
          type: 'navigate'
        },
        {
          icon: IoCash,
          label: 'Transaction History',
          description: 'View all revenue transactions',
          action: () => navigate('/organizer/revenue'),
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
          label: 'Registration Alerts',
          description: 'Get notified of new registrations',
          toggle: 'registrationAlerts',
          type: 'toggle'
        },
        {
          icon: IoTrophy,
          label: 'Tournament Updates',
          description: 'Get tournament status notifications',
          toggle: 'tournamentUpdates',
          type: 'toggle'
        },
        {
          icon: IoCash,
          label: 'Payment Updates',
          description: 'Payment and revenue notifications',
          toggle: 'paymentNotifications',
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
        },
        {
          icon: IoShield,
          label: 'Participant Data',
          description: 'Manage participant information access',
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
          label: 'Organizer Guidelines',
          description: 'Best practices for tournament management',
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
      moduleName="organizer"
      moduleColor="purple"
      backPath="/organizer/dashboard"
      settingsSections={settingsSections}
      initialSettings={initialSettings}
    />
  )
}

export default OrganizerSettings
