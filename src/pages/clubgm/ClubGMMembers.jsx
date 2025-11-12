import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  IoPeople,
  IoSearch,
  IoCheckmarkCircle,
  IoTime,
  IoMail,
  IoCall,
  IoAdd,
  IoFunnel
} from 'react-icons/io5'
import Card from '../../components/Card'

const ClubGMMembers = () => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')

  const summary = {
    total: 156,
    active: 142,
    pending: 8,
    inactive: 6
  }

  const filters = [
    { id: 'all', label: 'All', count: summary.total },
    { id: 'active', label: 'Active', count: summary.active },
    { id: 'pending', label: 'Pending', count: summary.pending },
    { id: 'inactive', label: 'Inactive', count: summary.inactive }
  ]

  const members = [
    {
      id: 1,
      name: 'Juan Dela Cruz',
      email: 'juan@email.com',
      phone: '+63 912 345 6789',
      membershipType: 'Premium - Dink Masters',
      status: 'active',
      joinedDate: 'Jan 15, 2024',
      expiryDate: 'Jan 15, 2025',
      amountPaid: 300,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      name: 'Maria Santos',
      email: 'maria@email.com',
      phone: '+63 923 456 7890',
      membershipType: 'Standard - Smash Squad',
      status: 'active',
      joinedDate: 'Feb 20, 2024',
      expiryDate: 'Feb 20, 2025',
      amountPaid: 250,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
    {
      id: 3,
      name: 'Pedro Garcia',
      email: 'pedro@email.com',
      phone: '+63 934 567 8901',
      membershipType: 'Premium - Net Ninjas',
      status: 'pending',
      joinedDate: 'Nov 08, 2024',
      expiryDate: '-',
      amountPaid: 0,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
    },
    {
      id: 4,
      name: 'Ana Reyes',
      email: 'ana@email.com',
      phone: '+63 945 678 9012',
      membershipType: 'Standard - Manila Picklers',
      status: 'active',
      joinedDate: 'Mar 10, 2024',
      expiryDate: 'Mar 10, 2025',
      amountPaid: 200,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
    },
    {
      id: 5,
      name: 'Carlos Lopez',
      email: 'carlos@email.com',
      phone: '+63 956 789 0123',
      membershipType: 'Premium - Dink Masters',
      status: 'inactive',
      joinedDate: 'Dec 05, 2023',
      expiryDate: 'Dec 05, 2024',
      amountPaid: 300,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    }
  ]

  const filteredMembers = members.filter(member => {
    const matchesFilter = activeFilter === 'all' || member.status === activeFilter
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <div className="max-w-lg mx-auto p-4 space-y-4">
      {/* Header with Add Button */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-dark-text">Members</h1>
        <button
          onClick={() => navigate('/clubgm/members/add')}
          className="bg-orange-600 hover:bg-orange-700 text-white rounded-lg px-4 py-2 font-semibold transition-colors flex items-center space-x-2"
        >
          <IoAdd className="text-xl" />
          <span>Add Member</span>
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-2">
        <div className="bg-dark-bg-tertiary rounded-lg p-3 shadow-sm border border-dark-border text-center">
          <div className="text-2xl font-bold text-brand-primary">{summary.total}</div>
          <div className="text-xs text-dark-text-secondary mt-1">Total</div>
        </div>
        <div className="bg-dark-bg-tertiary rounded-lg p-3 shadow-sm border border-dark-border text-center">
          <div className="text-2xl font-bold text-brand-primary">{summary.active}</div>
          <div className="text-xs text-dark-text-secondary mt-1">Active</div>
        </div>
        <div className="bg-dark-bg-tertiary rounded-lg p-3 shadow-sm border border-dark-border text-center">
          <div className="text-2xl font-bold text-yellow-600">{summary.pending}</div>
          <div className="text-xs text-dark-text-secondary mt-1">Pending</div>
        </div>
        <div className="bg-dark-bg-tertiary rounded-lg p-3 shadow-sm border border-dark-border text-center">
          <div className="text-2xl font-bold text-dark-text-secondary">{summary.inactive}</div>
          <div className="text-xs text-dark-text-secondary mt-1">Inactive</div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-text-muted text-xl" />
        <input
          type="text"
          placeholder="Search members by name or email..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-colors ${
              activeFilter === filter.id
                ? 'bg-orange-600 text-white'
                : 'bg-dark-bg-tertiary text-dark-text border border-dark-border hover:border-orange-600'
            }`}
          >
            {filter.label} ({filter.count})
          </button>
        ))}
      </div>

      {/* Members List */}
      <div className="space-y-3">
        {filteredMembers.map((member) => (
          <Card key={member.id} padding="p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start space-x-3">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-dark-text">{member.name}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      member.status === 'active'
                        ? 'bg-green-100 text-green-700'
                        : member.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-dark-bg-secondary text-dark-text'
                    }`}>
                      {member.status === 'active' && <IoCheckmarkCircle className="inline mr-1" />}
                      {member.status === 'pending' && <IoTime className="inline mr-1" />}
                      {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
                    </span>
                    <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs font-medium">
                      {member.membershipType}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-brand-primary">₱{member.amountPaid.toLocaleString()}</div>
                <div className="text-xs text-dark-text-muted">Paid</div>
              </div>
            </div>

            <div className="space-y-2 text-sm text-dark-text-secondary">
              <div className="flex items-center">
                <IoMail className="mr-2 text-brand-primary" />
                <span>{member.email}</span>
              </div>
              <div className="flex items-center">
                <IoCall className="mr-2 text-brand-primary" />
                <span>{member.phone}</span>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-dark-border flex justify-between text-xs text-dark-text-secondary">
              <div>
                <span className="text-dark-text-muted">Joined:</span> {member.joinedDate}
              </div>
              <div>
                <span className="text-dark-text-muted">Expires:</span> {member.expiryDate}
              </div>
            </div>
          </Card>
        ))}

        {filteredMembers.length === 0 && (
          <Card padding="p-8" className="text-center">
            <IoPeople className="text-5xl text-gray-300 mx-auto mb-3" />
            <p className="text-dark-text-muted">No members found</p>
          </Card>
        )}
        </div>
      </div>
    </div>
  )
}

export default ClubGMMembers
