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
  IoPeople,
  IoCheckmark
} from 'react-icons/io5'
import { BaseSettings } from '../../components'

const ClubGMSettings = () => {
  const navigate = useNavigate()

  // Initial settings state
  const initialSettings = {
    pushNotifications: true,
    emailNotifications: true,
    smsNotifications: false,
    memberRequests: true,
    eventReminders: true,
    paymentNotifications: true,
    messageNotifications: true,
    darkMode: false,
    autoApproveMembers: false,
    publicProfile: true
  }

  // Settings sections configuration
  const settingsSections = [
    {
      title: 'Account',
      items: [
        {
          icon: IoPersonCircle,
          label: 'Edit Profile',
          description: 'Update your club information',
          action: () => navigate('/clubgm/edit-profile'),
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
          description: 'info@metrobasketballclub.com',
          action: () => {},
          type: 'navigate'
        }
      ]
    },
    {
      title: 'Club Management',
      items: [
        {
          icon: IoPeople,
          label: 'Member Settings',
          description: 'Manage member configurations',
          action: () => {},
          type: 'navigate'
        },
        {
          icon: IoCalendar,
          label: 'Event Templates',
          description: 'Manage event templates',
          action: () => {},
          type: 'navigate'
        },
        {
          icon: IoCheckmark,
          label: 'Auto-Approve Members',
          description: 'Automatically approve new member requests',
          toggle: 'autoApproveMembers',
          type: 'toggle'
        },
        {
          icon: IoGlobe,
          label: 'Public Profile',
          description: 'Make club profile publicly visible',
          toggle: 'publicProfile',
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
          action: () => navigate('/clubgm/finances'),
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
          icon: IoPeople,
          label: 'Member Requests',
          description: 'Get notified of new member requests',
          toggle: 'memberRequests',
          type: 'toggle'
        },
        {
          icon: IoCalendar,
          label: 'Event Reminders',
          description: 'Get reminded about upcoming events',
          toggle: 'eventReminders',
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
          label: 'Member Data',
          description: 'Manage member information access',
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
          label: 'Club GM Guidelines',
          description: 'Best practices for club management',
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
      moduleName="clubgm"
      moduleColor="orange"
      backPath="/clubgm/dashboard"
      settingsSections={settingsSections}
      initialSettings={initialSettings}
    />
  )
}

export default ClubGMSettings
