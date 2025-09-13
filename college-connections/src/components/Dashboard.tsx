'use client'

import { useState } from 'react'
import { signOut } from 'next-auth/react'
import { FiUsers, FiBriefcase, FiBookOpen, FiLogOut, FiSearch } from 'react-icons/fi'
import ExtracurricularsTab from './ExtracurricularsTab'
import OpportunitiesTab from './OpportunitiesTab'
import ContactsTab from './ContactsTab'

interface User {
  id: string
  name?: string | null
  email?: string | null
  college: string
  major: string
  track?: string | null
  location: string
}

interface DashboardProps {
  user: User
}

type TabType = 'extracurriculars' | 'opportunities' | 'contacts'

export default function Dashboard({ user }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<TabType>('extracurriculars')
  const [searchQuery, setSearchQuery] = useState('')

  const tabs = [
    { id: 'extracurriculars' as TabType, label: 'Extracurriculars', icon: FiBookOpen },
    { id: 'opportunities' as TabType, label: 'Opportunities', icon: FiBriefcase },
    { id: 'contacts' as TabType, label: 'Contacts', icon: FiUsers },
  ]

  const renderActiveTab = () => {
    const commonProps = {
      user,
      searchQuery,
    }

    switch (activeTab) {
      case 'extracurriculars':
        return <ExtracurricularsTab {...commonProps} />
      case 'opportunities':
        return <OpportunitiesTab {...commonProps} />
      case 'contacts':
        return <ContactsTab {...commonProps} />
      default:
        return <ExtracurricularsTab {...commonProps} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">College Connections</h1>
              <p className="text-sm text-gray-600">
                Welcome back, {user.name || user.email} • {user.college} • {user.major}
                {user.track && ` • ${user.track}`}
              </p>
            </div>
            <button
              onClick={() => signOut()}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FiLogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                )
              })}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-sm">
          {renderActiveTab()}
        </div>
      </div>
    </div>
  )
}
