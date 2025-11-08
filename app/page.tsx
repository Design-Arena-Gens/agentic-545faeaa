"use client";

import { useState } from 'react';
import { Bot, TrendingUp, Users, Zap, Activity, DollarSign, Clock, CheckCircle, AlertCircle, PlayCircle, Calendar, BarChart3, Settings } from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Active Automations', value: '24', change: '+12%', icon: Zap, color: 'text-blue-600' },
    { label: 'Total Clients', value: '142', change: '+8%', icon: Users, color: 'text-green-600' },
    { label: 'Monthly Revenue', value: '$48,592', change: '+23%', icon: DollarSign, color: 'text-purple-600' },
    { label: 'Tasks Completed', value: '1,847', change: '+18%', icon: CheckCircle, color: 'text-emerald-600' },
  ];

  const automations = [
    { id: 1, name: 'Lead Generation Bot', client: 'Acme Corp', status: 'running', uptime: '99.8%', tasksToday: 156 },
    { id: 2, name: 'Email Marketing Flow', client: 'TechStart Inc', status: 'running', uptime: '100%', tasksToday: 284 },
    { id: 3, name: 'Data Extraction Pipeline', client: 'DataFlow LLC', status: 'paused', uptime: '98.2%', tasksToday: 0 },
    { id: 4, name: 'Social Media Scheduler', client: 'Brand Co', status: 'running', uptime: '99.5%', tasksToday: 89 },
    { id: 5, name: 'Customer Support AI', client: 'ServicePro', status: 'running', uptime: '99.9%', tasksToday: 412 },
    { id: 6, name: 'Invoice Processing', client: 'FinanceHub', status: 'error', uptime: '95.1%', tasksToday: 23 },
  ];

  const recentActivity = [
    { time: '2 min ago', action: 'Automation deployed', details: 'Lead Generation Bot v2.1', type: 'success' },
    { time: '15 min ago', action: 'Client added', details: 'New client: Innovation Labs', type: 'info' },
    { time: '1 hour ago', action: 'Error detected', details: 'Invoice Processing - API timeout', type: 'error' },
    { time: '2 hours ago', action: 'Task completed', details: 'Data Extraction completed 1000 records', type: 'success' },
    { time: '3 hours ago', action: 'Automation paused', details: 'Data Extraction Pipeline', type: 'warning' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-slate-950/50 backdrop-blur-xl border-r border-slate-700/50 p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">AI Agency</h1>
            <p className="text-xs text-slate-400">Dashboard</p>
          </div>
        </div>

        <nav className="space-y-2">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'automations', label: 'Automations', icon: Zap },
            { id: 'clients', label: 'Clients', icon: Users },
            { id: 'analytics', label: 'Analytics', icon: TrendingUp },
            { id: 'settings', label: 'Settings', icon: Settings },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === item.id
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h2>
          <p className="text-slate-400">Monitor your AI automation performance in real-time</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-slate-600 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg bg-slate-900/50 flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <span className="text-emerald-400 text-sm font-semibold">{stat.change}</span>
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Automations List */}
          <div className="lg:col-span-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Active Automations</h3>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-all flex items-center gap-2">
                <PlayCircle className="w-4 h-4" />
                New Automation
              </button>
            </div>
            <div className="space-y-3">
              {automations.map((automation) => (
                <div key={automation.id} className="bg-slate-900/50 border border-slate-700/30 rounded-lg p-4 hover:border-slate-600 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${
                        automation.status === 'running' ? 'bg-emerald-400 animate-pulse' :
                        automation.status === 'paused' ? 'bg-yellow-400' : 'bg-red-400'
                      }`}></div>
                      <div>
                        <h4 className="text-white font-semibold">{automation.name}</h4>
                        <p className="text-slate-400 text-sm">{automation.client}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      automation.status === 'running' ? 'bg-emerald-500/20 text-emerald-400' :
                      automation.status === 'paused' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {automation.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Activity className="w-4 h-4" />
                      <span>Uptime: {automation.uptime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <CheckCircle className="w-4 h-4" />
                      <span>{automation.tasksToday} tasks today</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    activity.type === 'success' ? 'bg-emerald-500/20 text-emerald-400' :
                    activity.type === 'error' ? 'bg-red-500/20 text-red-400' :
                    activity.type === 'warning' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {activity.type === 'success' ? <CheckCircle className="w-4 h-4" /> :
                     activity.type === 'error' ? <AlertCircle className="w-4 h-4" /> :
                     activity.type === 'warning' ? <Clock className="w-4 h-4" /> :
                     <Calendar className="w-4 h-4" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-medium">{activity.action}</p>
                    <p className="text-slate-400 text-xs">{activity.details}</p>
                    <p className="text-slate-500 text-xs mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
