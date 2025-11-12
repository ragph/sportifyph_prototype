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
  IoTime,
  IoCheckmark
} from 'react-icons/io5'
import { BaseSettings } from '../../components'

const CoachSettings = () => {
  const navigate = useNavigate()

  // Initial settings state
  const initialSettings = {
    pushNotifications: true,
    emailNotifications: true,
    smsNotifications: false,
    sessionReminders: true,
    bookingNotifications: true,
    paymentNotifications: true,
    messageNotifications: true,
    darkMode: false,
    autoAcceptBookings: false,
    showAvailability: true
  }

  // Settings sections configuration
  const settingsSections = [
    {
      title: 'Account',
      items: [
        {
          icon: IoPersonCircle,
          label: 'Edit Profile',
          description: 'Update your profile information',
          action: () => navigate('/coach/edit-profile'),
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
          description: 'mike.santos@email.com',
          action: () => {},
          type: 'navigate'
        }
      ]
    },
    {
      title: 'Session Management',
      items: [
        {
          icon: IoCalendar,
          label: 'Availability Schedule',
          description: 'Set your available hours',
          action: () => {},
          type: 'navigate'
        },
        {
          icon: IoCash,
          label: 'Session Rates',
          description: 'Manage your pricing',
          action: () => {},
          type: 'navigate'
        },
        {
          icon: IoCheckmark,
          label: 'Auto-Accept Bookings',
          description: 'Automatically accept booking requests',
          toggle: 'autoAcceptBookings',
          type: 'toggle'
        },
        {
          icon: IoTime,
          label: 'Show Availability',
          description: 'Display your available time slots',
          toggle: 'showAvailability',
          type: 'toggle'
        }
      ]
    },
    {
      title: 'Payment Settings',
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
          description: 'Configure payment options',
          action: () => {},
          type: 'navigate'
        },
        {
          icon: IoCash,
          label: 'Transaction History',
          description: 'View all earnings',
          action: () => navigate('/coach/earnings'),
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
          icon: IoCalendar,
          label: 'Session Reminders',
          description: 'Get reminded before sessions',
          toggle: 'sessionReminders',
          type: 'toggle'
        },
        {
          icon: IoNotifications,
          label: 'Booking Notifications',
          description: 'Get notified of new bookings',
          toggle: 'bookingNotifications',
          type: 'toggle'
        },
        {
          icon: IoCash,
          label: 'Payment Updates',
          description: 'Payment and earnings notifications',
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
          label: 'Student Data',
          description: 'Manage student information access',
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
          label: 'Coach Guidelines',
          description: 'Best practices for coaching',
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
      moduleName="coach"
      moduleColor="green"
      backPath="/coach/dashboard"
      settingsSections={settingsSections}
      initialSettings={initialSettings}
    />
  )
}

export default CoachSettings
