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
  IoStorefront,
  IoTime,
  IoCheckmark
} from 'react-icons/io5'
import { BaseSettings } from '../../components'

const CourtOwnerSettings = () => {
  const navigate = useNavigate()

  const initialSettings = {
    pushNotifications: true,
    emailNotifications: true,
    smsNotifications: false,
    bookingNotifications: true,
    paymentNotifications: true,
    messageNotifications: true,
    darkMode: false,
    autoApproveBookings: false,
    instantBooking: true
  }

  const settingsSections = [
    {
      title: 'Account',
      items: [
        {
          icon: IoPersonCircle,
          label: 'Edit Profile',
          description: 'Update your facility information',
          action: () => navigate('/courtowner/edit-profile'),
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
          description: 'info@elitesportscenter.com',
          action: () => {},
          type: 'navigate'
        }
      ]
    },
    {
      title: 'Court Management',
      items: [
        {
          icon: IoStorefront,
          label: 'Court Settings',
          description: 'Manage court configurations',
          action: () => {},
          type: 'navigate'
        },
        {
          icon: IoTime,
          label: 'Operating Hours',
          description: 'Set your business hours',
          action: () => {},
          type: 'navigate'
        },
        {
          icon: IoCheckmark,
          label: 'Auto-Approve Bookings',
          description: 'Automatically approve booking requests',
          toggle: 'autoApproveBookings',
          type: 'toggle'
        },
        {
          icon: IoCheckmark,
          label: 'Instant Booking',
          description: 'Allow customers to book instantly',
          toggle: 'instantBooking',
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
          description: 'Configure accepted payment options',
          action: () => {},
          type: 'navigate'
        },
        {
          icon: IoCash,
          label: 'Transaction History',
          description: 'View all revenue transactions',
          action: () => navigate('/courtowner/revenue'),
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
          label: 'Booking Notifications',
          description: 'Get notified of new bookings',
          toggle: 'bookingNotifications',
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
          label: 'Customer Data',
          description: 'Manage customer information access',
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
          label: 'Court Owner Guidelines',
          description: 'Best practices for facility management',
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
      moduleName="courtowner"
      moduleColor="red"
      backPath="/courtowner/dashboard"
      settingsSections={settingsSections}
      initialSettings={initialSettings}
    />
  )
}

export default CourtOwnerSettings
