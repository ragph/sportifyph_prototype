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
  IoBriefcase,
  IoStatsChart,
  IoCheckmark
} from 'react-icons/io5'
import { BaseSettings } from '../../components'

const SponsorSettings = () => {
  const navigate = useNavigate()

  const initialSettings = {
    pushNotifications: true,
    emailNotifications: true,
    smsNotifications: false,
    campaignNotifications: true,
    partnershipNotifications: true,
    messageNotifications: true,
    darkMode: false,
    autoApproveApplications: false,
    showCompanyProfile: true
  }

  const settingsSections = [
    {
      title: 'Account',
      items: [
        {
          icon: IoPersonCircle,
          label: 'Edit Company Profile',
          description: 'Update your brand information',
          action: () => navigate('/sponsor/edit-profile'),
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
          description: 'partnerships@nike.com.ph',
          action: () => {},
          type: 'navigate'
        }
      ]
    },
    {
      title: 'Sponsorship Management',
      items: [
        {
          icon: IoBriefcase,
          label: 'Campaign Settings',
          description: 'Manage campaign preferences',
          action: () => {},
          type: 'navigate'
        },
        {
          icon: IoStatsChart,
          label: 'Analytics Preferences',
          description: 'Configure analytics and reporting',
          action: () => {},
          type: 'navigate'
        },
        {
          icon: IoCheckmark,
          label: 'Auto-Approve Applications',
          description: 'Automatically approve partnership requests',
          toggle: 'autoApproveApplications',
          type: 'toggle'
        },
        {
          icon: IoCheckmark,
          label: 'Public Company Profile',
          description: 'Make your profile visible to athletes',
          toggle: 'showCompanyProfile',
          type: 'toggle'
        }
      ]
    },
    {
      title: 'Payment Settings',
      items: [
        {
          icon: IoCash,
          label: 'Payment Methods',
          description: 'Manage payment options',
          action: () => {},
          type: 'navigate'
        },
        {
          icon: IoCash,
          label: 'Billing Information',
          description: 'Update billing details',
          action: () => {},
          type: 'navigate'
        },
        {
          icon: IoCash,
          label: 'Transaction History',
          description: 'View all sponsorship transactions',
          action: () => navigate('/sponsor/analytics'),
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
          icon: IoBriefcase,
          label: 'Campaign Updates',
          description: 'Get notified of campaign performance',
          toggle: 'campaignNotifications',
          type: 'toggle'
        },
        {
          icon: IoNotifications,
          label: 'Partnership Requests',
          description: 'New partnership applications',
          toggle: 'partnershipNotifications',
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
          label: 'Athlete Data Access',
          description: 'Manage athlete information access',
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
          label: 'Sponsor Guidelines',
          description: 'Best practices for sponsorships',
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
      moduleName="sponsor"
      moduleColor="indigo"
      backPath="/sponsor/dashboard"
      settingsSections={settingsSections}
      initialSettings={initialSettings}
    />
  )
}

export default SponsorSettings
