import { useState } from 'react'
import { IoAddCircle, IoBriefcase, IoCash, IoPeople, IoEllipsisVertical, IoCreate, IoTrash, IoCheckmarkCircle, IoTime, IoPause } from 'react-icons/io5'
import Card from '../../components/Card'
import StatusBadge from '../../components/StatusBadge'

const SponsorCampaigns = () => {
  const [filter, setFilter] = useState('all')

  const campaigns = [
    {
      id: 1,
      name: 'Manila Open Pickleball Championship Sponsorship',
      type: 'Tournament Sponsorship',
      budget: 65000,
      spent: 42000,
      reach: 2100,
      impressions: 9500,
      status: 'active',
      startDate: '2024-11-01',
      endDate: '2024-12-31'
    },
    {
      id: 2,
      name: 'Pickleball Team Sponsorship - Dink Masters',
      type: 'Team Sponsorship',
      budget: 50000,
      spent: 28000,
      reach: 1850,
      impressions: 7200,
      status: 'active',
      startDate: '2024-10-15',
      endDate: '2024-12-15'
    },
    {
      id: 3,
      name: 'Pickleball Equipment Partnership',
      type: 'Product Sponsorship',
      budget: 40000,
      spent: 15000,
      reach: 1200,
      impressions: 4800,
      status: 'active',
      startDate: '2024-11-10',
      endDate: '2024-12-25'
    },
    {
      id: 4,
      name: 'Youth Pickleball Development Program',
      type: 'Community Sponsorship',
      budget: 45000,
      spent: 0,
      reach: 0,
      impressions: 0,
      status: 'draft',
      startDate: '2024-12-15',
      endDate: '2025-02-15'
    },
    {
      id: 5,
      name: 'Summer Basketball League 2024',
      type: 'Tournament Sponsorship',
      budget: 50000,
      spent: 35000,
      reach: 1250,
      impressions: 5800,
      status: 'active',
      startDate: '2024-11-01',
      endDate: '2024-12-31'
    },
    {
      id: 6,
      name: 'Youth Volleyball Development',
      type: 'Team Sponsorship',
      budget: 30000,
      spent: 18000,
      reach: 850,
      impressions: 3200,
      status: 'active',
      startDate: '2024-10-15',
      endDate: '2024-12-15'
    },
    {
      id: 7,
      name: 'Regional Badminton Cup',
      type: 'Event Sponsorship',
      budget: 25000,
      spent: 12500,
      reach: 650,
      impressions: 2400,
      status: 'paused',
      startDate: '2024-12-01',
      endDate: '2024-12-20'
    },
    {
      id: 8,
      name: 'Elite Athlete Partnership Program',
      type: 'Athlete Sponsorship',
      budget: 80000,
      spent: 80000,
      reach: 2100,
      impressions: 8500,
      status: 'completed',
      startDate: '2024-08-01',
      endDate: '2024-10-31'
    },
    {
      id: 9,
      name: 'Community Tennis Clinic',
      type: 'Event Sponsorship',
      budget: 20000,
      spent: 8000,
      reach: 450,
      impressions: 1800,
      status: 'paused',
      startDate: '2024-11-05',
      endDate: '2024-12-10'
    }
  ]

  const filters = [
    { id: 'all', label: 'All', count: campaigns.length },
    { id: 'active', label: 'Active', count: campaigns.filter(c => c.status === 'active').length },
    { id: 'paused', label: 'Paused', count: campaigns.filter(c => c.status === 'paused').length },
    { id: 'completed', label: 'Completed', count: campaigns.filter(c => c.status === 'completed').length },
    { id: 'draft', label: 'Draft', count: campaigns.filter(c => c.status === 'draft').length }
  ]

  const filteredCampaigns = filter === 'all' ? campaigns : campaigns.filter(c => c.status === filter)

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <div className="max-w-lg mx-auto p-4 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-dark-text">Campaigns</h1>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-4 py-2 font-semibold transition-colors flex items-center space-x-2">
            <IoAddCircle className="text-xl" />
            <span>New Campaign</span>
          </button>
        </div>

        {/* Filters */}
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-colors ${
                filter === f.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-dark-bg-tertiary text-dark-text hover:bg-dark-bg'
              }`}
            >
              {f.label} ({f.count})
            </button>
          ))}
        </div>

        {/* Campaigns List */}
        <div className="space-y-4">
          {filteredCampaigns.map((campaign) => {
            const progress = campaign.budget > 0 ? (campaign.spent / campaign.budget) * 100 : 0
            return (
              <Card key={campaign.id} padding="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl">
                      <IoBriefcase />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark-text text-sm">{campaign.name}</h3>
                      <p className="text-xs text-dark-text-secondary">{campaign.type}</p>
                      <StatusBadge
                        variant={
                          campaign.status === 'active' ? 'success' :
                          campaign.status === 'paused' ? 'warning' :
                          campaign.status === 'completed' ? 'info' : 'default'
                        }
                        size="md"
                        rounded="full"
                        className="inline-flex items-center space-x-1 mt-1"
                      >
                        {campaign.status === 'active' && <IoCheckmarkCircle />}
                        {campaign.status === 'paused' && <IoPause />}
                        {campaign.status === 'completed' && <IoCheckmarkCircle />}
                        {campaign.status === 'draft' && <IoTime />}
                        <span className="capitalize">{campaign.status}</span>
                      </StatusBadge>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-dark-bg-secondary rounded-lg transition-colors">
                    <IoEllipsisVertical className="text-dark-text-secondary" />
                  </button>
                </div>

                {campaign.budget > 0 && (
                  <div className="mb-3">
                    <div className="flex items-center justify-between text-xs text-dark-text-secondary mb-1">
                      <span>Budget Progress</span>
                      <span className="font-semibold">₱{campaign.spent.toLocaleString()} / ₱{campaign.budget.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-dark-bg-hover rounded-full h-2">
                      <div
                        className="bg-indigo-600 h-2 rounded-full transition-all"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-3 gap-3 pt-3 border-t border-dark-border">
                  <div className="flex items-center space-x-2">
                    <IoCash className="text-brand-primary text-sm" />
                    <div>
                      <p className="text-xs text-dark-text-muted">Budget</p>
                      <p className="text-xs font-semibold text-dark-text">₱{campaign.budget.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <IoPeople className="text-brand-primary text-sm" />
                    <div>
                      <p className="text-xs text-dark-text-muted">Reach</p>
                      <p className="text-xs font-semibold text-dark-text">{campaign.reach}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <IoCheckmarkCircle className="text-brand-primary text-sm" />
                    <div>
                      <p className="text-xs text-dark-text-muted">Impressions</p>
                      <p className="text-xs font-semibold text-dark-text">{campaign.impressions.toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2 mt-3">
                  <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg py-2 font-semibold transition-colors flex items-center justify-center space-x-1 text-sm">
                    <IoCreate />
                    <span>Edit</span>
                  </button>
                  <button className="flex-1 bg-dark-bg-secondary hover:bg-dark-bg-hover text-dark-text rounded-lg py-2 font-semibold transition-colors flex items-center justify-center space-x-1 text-sm">
                    <IoBriefcase />
                    <span>View Details</span>
                  </button>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SponsorCampaigns
