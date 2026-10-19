import React, { useState } from 'react'
import {
  X,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  FileSpreadsheet,
  Calculator,
  TrendingUp,
  Cpu,
  Layers,
  ChevronRight,
  Globe,
  BarChart2,
  GraduationCap
} from 'lucide-react'
import { GithubIcon } from './SocialIcons'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts'
import type { Project } from '../types/portfolio'


interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'charts' | 'interactive' | 'findings'>('overview')

  // Interactive Mini Simulators State - ManiLoan
  const [loanAmount, setLoanAmount] = useState(1000000)
  const [tenureYears, setTenureYears] = useState(5)
  const [interestRate, setInterestRate] = useState(9.5)

  // Risk Calculator State - Loan Default Prediction
  const [creditScore, setCreditScore] = useState(710)
  const [dtiRatio, setDtiRatio] = useState(28)

  // Web Portfolio Performance & Traffic Simulator State
  const [monthlyVisitors, setMonthlyVisitors] = useState(5000)
  const [cacheHitRate, setCacheHitRate] = useState(94)

  // Sales Profitability Simulator State
  const [salesVolume, setSalesVolume] = useState(1200)
  const [avgOrderValue, setAvgOrderValue] = useState(3500)
  const [discountRate, setDiscountRate] = useState(12)

  // CurricuLab Cohort Simulator State
  const [studentCohort, setStudentCohort] = useState(450)
  const [modulesCount, setModulesCount] = useState(6)

  if (!project) return null

  // ManiLoan EMI Calculator
  const calculateEMI = () => {
    const p = loanAmount
    const r = interestRate / (12 * 100)
    const n = tenureYears * 12
    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    const totalAmount = emi * n
    const totalInterest = totalAmount - p
    return {
      monthlyEMI: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalPayment: Math.round(totalAmount),
    }
  }

  // Risk Score Calculator for Loan Default Prediction
  const calculateRiskTier = () => {
    let score = 0
    if (creditScore < 600) score += 40
    else if (creditScore < 700) score += 20
    else score += 5

    if (dtiRatio > 40) score += 45
    else if (dtiRatio > 25) score += 20
    else score += 5

    if (score >= 60) return { tier: 'High Risk', color: '#EF4444', prob: '38.4%' }
    if (score >= 35) return { tier: 'Moderate Risk', color: '#F59E0B', prob: '14.2%' }
    return { tier: 'Low Risk', color: '#10B981', prob: '3.8%' }
  }

  // Web Portfolio Performance Simulator
  const calculateWebMetrics = () => {
    const rawBandwidthGB = (monthlyVisitors * 1.8) / 1024
    const savedBandwidthGB = rawBandwidthGB * (cacheHitRate / 100)
    const avgLatencyMs = Math.round(180 - (cacheHitRate * 0.95))
    const satisfactionRate = Math.min(99.6, 88 + (cacheHitRate * 0.12)).toFixed(1)
    return {
      totalBandwidthGB: rawBandwidthGB.toFixed(2),
      savedBandwidthGB: savedBandwidthGB.toFixed(2),
      avgLatencyMs: Math.max(35, avgLatencyMs),
      satisfactionRate,
    }
  }

  // Sales Profitability Simulator
  const calculateSalesMetrics = () => {
    const grossRevenue = salesVolume * avgOrderValue
    const discountLoss = grossRevenue * (discountRate / 100)
    const netRevenue = grossRevenue - discountLoss
    const netProfit = (grossRevenue * 0.32) - discountLoss
    const profitMargin = ((netProfit / (netRevenue || 1)) * 100).toFixed(1)
    return {
      grossRevenue,
      discountLoss,
      netRevenue,
      netProfit: Math.round(netProfit),
      profitMargin: Number(profitMargin),
    }
  }

  // CurricuLab Academic Resource Simulator
  const calculateAcademicMetrics = () => {
    const weeklyQueries = studentCohort * modulesCount * 3
    const facultyHoursSaved = Math.round((weeklyQueries * 4) / 60)
    const engagementScore = Math.min(98, 70 + Math.round((modulesCount / 10) * 25))
    return {
      weeklyQueries,
      facultyHoursSaved,
      engagementScore,
    }
  }

  const emiResults = calculateEMI()
  const riskResults = calculateRiskTier()
  const webResults = calculateWebMetrics()
  const salesResults = calculateSalesMetrics()
  const academicResults = calculateAcademicMetrics()

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#092830] border border-[#164652] rounded-3xl shadow-2xl overflow-hidden my-auto flex flex-col max-h-[92vh]">
        
        {/* Modal Top Header */}
        <div className="px-6 py-5 bg-[#071F27] border-b border-[#164652] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#0D3038] text-[#42E6B0] border border-[#42E6B0]/30">
              {project.badgeText}
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">|</span>
            <span className="text-xs text-slate-300 hidden sm:inline">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#42E6B0]/15 hover:bg-[#42E6B0]/25 text-[#42E6B0] border border-[#42E6B0]/30 text-xs font-semibold transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-[#0D3038] transition-colors"
                title="View Code on GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-[#0D3038] transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Title Banner */}
        <div className="px-6 pt-6 pb-4 bg-[#092830] border-b border-[#164652] shrink-0">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            {project.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 sm:gap-4 mt-6 border-b border-[#164652] -mb-4 overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className={`pb-3 text-xs sm:text-sm font-semibold transition-colors border-b-2 whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'border-[#42E6B0] text-[#42E6B0]'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              Overview & Methodology
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('charts')}
              className={`pb-3 text-xs sm:text-sm font-semibold transition-colors border-b-2 whitespace-nowrap ${
                activeTab === 'charts'
                  ? 'border-[#42E6B0] text-[#42E6B0]'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              Data Visualizations
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('interactive')}
              className={`pb-3 text-xs sm:text-sm font-semibold transition-colors border-b-2 whitespace-nowrap ${
                activeTab === 'interactive'
                  ? 'border-[#42E6B0] text-[#42E6B0]'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              Interactive Simulator
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('findings')}
              className={`pb-3 text-xs sm:text-sm font-semibold transition-colors border-b-2 whitespace-nowrap ${
                activeTab === 'findings'
                  ? 'border-[#42E6B0] text-[#42E6B0]'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              Insights & Recommendations
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-200 text-sm leading-relaxed">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* Business Problem */}
              <div className="p-5 rounded-2xl bg-[#0D3038] border border-[#164652]">
                <h3 className="text-base font-bold text-white flex items-center gap-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-[#27C5E8]" />
                  <span>The Business Challenge</span>
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {project.businessProblem}
                </p>
              </div>

              {/* Objectives List */}
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-[#42E6B0]" />
                  <span>Project Objectives</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.objectives.map((obj, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#071F27]/70 border border-[#164652]">
                      <ChevronRight className="w-4 h-4 text-[#42E6B0] shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-300">{obj}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dataset & Tools */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#071F27]/60 border border-[#164652]">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-2">
                    <FileSpreadsheet className="w-4 h-4 text-[#42E6B0]" />
                    Dataset Description
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.dataset}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#071F27]/60 border border-[#164652]">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-2">
                    <Cpu className="w-4 h-4 text-[#27C5E8]" />
                    Tools & Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs font-semibold px-2.5 py-1 rounded bg-[#0D3038] text-cyan-200 border border-[#164652]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Methodology Workflow */}
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2 mb-3">
                  <Layers className="w-4 h-4 text-[#42E6B0]" />
                  <span>Implementation Workflow & Methodology</span>
                </h3>
                <div className="space-y-2.5">
                  {project.methodology.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#071F27] border border-[#164652] flex items-start gap-3"
                    >
                      <span className="w-6 h-6 rounded-full bg-[#0D3038] text-[#42E6B0] font-bold text-xs flex items-center justify-center shrink-0 border border-[#42E6B0]/30">
                        {idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-300">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: DATA VISUALIZATIONS */}
          {activeTab === 'charts' && (
            <div className="space-y-8 animate-in fade-in duration-200">
              {project.keyVisualizations.map((viz, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#071F27] border border-[#164652]"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-[#42E6B0]" />
                      <span>{viz.title}</span>
                    </h4>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-[#0D3038] text-[#27C5E8]">
                      {viz.type.toUpperCase()} CHART
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mb-6">{viz.description}</p>

                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      {viz.type === 'bar' ? (
                        <BarChart data={viz.data} margin={{ top: 10, right: 20, left: -10, bottom: 20 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#164652" />
                          <XAxis
                            dataKey={viz.data[0]?.bracket ? 'bracket' : (viz.data[0]?.feature ? 'feature' : (viz.data[0]?.department ? 'department' : 'quarter'))}
                            stroke="#61758A"
                            fontSize={11}
                          />
                          <YAxis stroke="#61758A" fontSize={11} />
                          <Tooltip
                            contentStyle={{ backgroundColor: '#092830', borderColor: '#42E6B0', borderRadius: '8px' }}
                            itemStyle={{ color: '#F5FAFC', fontSize: '12px' }}
                          />
                          <Bar
                            dataKey={viz.data[0]?.defaultRate !== undefined ? 'defaultRate' : (viz.data[0]?.importance !== undefined ? 'importance' : (viz.data[0]?.usageHours !== undefined ? 'usageHours' : (viz.data[0]?.score !== undefined ? 'score' : 'revenue')))}
                            fill="#42E6B0"
                            radius={[6, 6, 0, 0]}
                          />
                        </BarChart>
                      ) : viz.type === 'pie' ? (
                        <PieChart>
                          <Pie
                            data={viz.data}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            label={({ name, percent }: { name?: string; percent?: number }) => `${name ?? ''} ${percent !== undefined ? (percent * 100).toFixed(0) : 0}%`}
                          >
                            {viz.data.map((entry: any, index: number) => (
                              <Cell key={`cell-${index}`} fill={entry.color || '#42E6B0'} />
                            ))}
                          </Pie>
                          <Tooltip
                            contentStyle={{ backgroundColor: '#092830', borderColor: '#42E6B0', borderRadius: '8px' }}
                            itemStyle={{ color: '#F5FAFC', fontSize: '12px' }}
                          />
                        </PieChart>
                      ) : (
                        <LineChart data={viz.data} margin={{ top: 10, right: 20, left: -10, bottom: 20 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#164652" />
                          <XAxis dataKey="tenure" stroke="#61758A" fontSize={11} />
                          <YAxis stroke="#61758A" fontSize={11} />
                          <Tooltip
                            contentStyle={{ backgroundColor: '#092830', borderColor: '#42E6B0', borderRadius: '8px' }}
                            itemStyle={{ color: '#F5FAFC', fontSize: '12px' }}
                          />
                          <Line type="monotone" dataKey="emi" stroke="#42E6B0" strokeWidth={3} dot={{ fill: '#27C5E8' }} />
                        </LineChart>
                      )}
                    </ResponsiveContainer>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: INTERACTIVE SIMULATOR */}
          {activeTab === 'interactive' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {project.id === 'portfolio-platform' ? (
                /* Portfolio Platform / Web Performance Simulator */
                <div className="p-6 rounded-2xl bg-[#071F27] border border-[#164652] space-y-6">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <Globe className="w-5 h-5 text-[#42E6B0]" />
                      <h3 className="text-base font-bold text-white">
                        Live Web Performance & Global Traffic Telemetry Explorer
                      </h3>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#42E6B0]/10 border border-[#42E6B0]/30 text-[#42E6B0] text-xs font-semibold">
                      <span className="w-2 h-2 rounded-full bg-[#42E6B0] animate-pulse" />
                      Live on Render
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Simulate real-world traffic load, edge cache optimization, and sub-100ms response benchmarks for this deployed production platform.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    {/* Controls */}
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-1">
                          <span className="text-slate-300">Monthly Unique Visitors</span>
                          <span className="text-[#42E6B0] font-bold">{monthlyVisitors.toLocaleString()}</span>
                        </div>
                        <input
                          type="range"
                          min="500"
                          max="50000"
                          step="500"
                          value={monthlyVisitors}
                          onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                          className="w-full accent-[#42E6B0] cursor-pointer"
                        />
                        <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                          <span>500 (Early Sprints)</span>
                          <span>10,000 (Active Reach)</span>
                          <span>50,000 (Enterprise)</span>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-1">
                          <span className="text-slate-300">Edge Cache & Asset Hit Ratio</span>
                          <span className="text-[#27C5E8] font-bold">{cacheHitRate}%</span>
                        </div>
                        <input
                          type="range"
                          min="50"
                          max="99"
                          step="1"
                          value={cacheHitRate}
                          onChange={(e) => setCacheHitRate(Number(e.target.value))}
                          className="w-full accent-[#27C5E8] cursor-pointer"
                        />
                        <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                          <span>50% (Uncached)</span>
                          <span>85% (Optimized)</span>
                          <span>99% (Vite Static Pre-cache)</span>
                        </div>
                      </div>
                    </div>

                    {/* Results Box */}
                    <div className="p-5 rounded-xl bg-[#0D3038] border border-[#164652] flex flex-col justify-between space-y-4">
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="p-2.5 rounded-lg bg-[#071F27]/70 border border-[#164652]">
                          <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-0.5">
                            Avg Response Time
                          </span>
                          <span className="text-lg font-bold text-[#42E6B0]">
                            {webResults.avgLatencyMs} ms
                          </span>
                          <span className="text-[10px] text-slate-400 block">Sub-second TTI</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#071F27]/70 border border-[#164652]">
                          <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-0.5">
                            CDN Data Saved
                          </span>
                          <span className="text-lg font-bold text-[#27C5E8]">
                            {webResults.savedBandwidthGB} GB
                          </span>
                          <span className="text-[10px] text-slate-400 block">Bandwidth saved</span>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-[#164652] flex items-center justify-between text-xs">
                        <span className="text-slate-300">Satisfaction Score:</span>
                        <span className="font-bold text-[#42E6B0]">{webResults.satisfactionRate}%</span>
                      </div>

                      {/* Direct Live Link Action */}
                      <a
                        href={project.liveDemoUrl || "https://manishankar-portfolio.onrender.com"}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-[#42E6B0] to-[#27C5E8] text-[#071F27] font-bold text-xs hover:shadow-lg hover:shadow-[#42E6B0]/20 transition-all hover:scale-[1.02]"
                      >
                        <span>Open Live Web Application</span>
                        <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                      </a>
                    </div>
                  </div>
                </div>
              ) : project.id === 'sales-dashboard' ? (
                /* Sales Margin Simulator */
                <div className="p-6 rounded-2xl bg-[#071F27] border border-[#164652] space-y-6">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart2 className="w-5 h-5 text-[#F2C811]" />
                    <h3 className="text-base font-bold text-white">
                      Executive Sales Margin & Discount Sensitivity Simulator
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300">
                    Evaluate how variations in average discounting policy impact overall bottom-line net profit across retail sales orders.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-1">
                          <span className="text-slate-300">Quarterly Order Volume</span>
                          <span className="text-[#42E6B0] font-bold">{salesVolume.toLocaleString()} orders</span>
                        </div>
                        <input
                          type="range"
                          min="200"
                          max="5000"
                          step="100"
                          value={salesVolume}
                          onChange={(e) => setSalesVolume(Number(e.target.value))}
                          className="w-full accent-[#42E6B0] cursor-pointer"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-1">
                          <span className="text-slate-300">Average Order Value (AOV)</span>
                          <span className="text-[#27C5E8] font-bold">₹{avgOrderValue.toLocaleString('en-IN')}</span>
                        </div>
                        <input
                          type="range"
                          min="1000"
                          max="10000"
                          step="250"
                          value={avgOrderValue}
                          onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                          className="w-full accent-[#27C5E8] cursor-pointer"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-1">
                          <span className="text-slate-300">Discount Policy (%)</span>
                          <span className="text-[#F2C811] font-bold">{discountRate}%</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="25"
                          step="1"
                          value={discountRate}
                          onChange={(e) => setDiscountRate(Number(e.target.value))}
                          className="w-full accent-[#F2C811] cursor-pointer"
                        />
                      </div>
                    </div>

                    <div className="p-5 rounded-xl bg-[#0D3038] border border-[#164652] flex flex-col justify-center space-y-3">
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-slate-400 block">
                          Projected Gross Revenue
                        </span>
                        <div className="text-2xl font-extrabold text-white">
                          ₹{salesResults.grossRevenue.toLocaleString('en-IN')}
                        </div>
                      </div>
                      <div className="pt-2 border-t border-[#164652] grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="text-slate-400 block text-[10px]">Net Operating Profit</span>
                          <span className={`font-semibold ${salesResults.netProfit > 0 ? 'text-[#42E6B0]' : 'text-rose-400'}`}>
                            ₹{salesResults.netProfit.toLocaleString('en-IN')}
                          </span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px]">Effective Net Margin</span>
                          <span className="font-semibold text-slate-200">
                            {salesResults.profitMargin}%
                          </span>
                        </div>
                      </div>
                      <div className="text-[11px] text-slate-400 pt-1">
                        Discount erosions above 18% severely compress operating margins on furniture lines.
                      </div>
                    </div>
                  </div>
                </div>
              ) : project.id === 'curriculab-platform' ? (
                /* CurricuLab Academic Resource Simulator */
                <div className="p-6 rounded-2xl bg-[#071F27] border border-[#164652] space-y-6">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="w-5 h-5 text-[#C084FC]" />
                    <h3 className="text-base font-bold text-white">
                      CurricuLab Academic Resource & Time Saved Estimator
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300">
                    Estimate administrative office hours preserved and student engagement gains via centralized Supabase resource indexing.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-1">
                          <span className="text-slate-300">Active Student Cohort</span>
                          <span className="text-[#C084FC] font-bold">{studentCohort} Students</span>
                        </div>
                        <input
                          type="range"
                          min="50"
                          max="1500"
                          step="50"
                          value={studentCohort}
                          onChange={(e) => setStudentCohort(Number(e.target.value))}
                          className="w-full accent-[#C084FC] cursor-pointer"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-1">
                          <span className="text-slate-300">Academic Modules Active</span>
                          <span className="text-[#27C5E8] font-bold">{modulesCount} Modules</span>
                        </div>
                        <input
                          type="range"
                          min="2"
                          max="12"
                          step="1"
                          value={modulesCount}
                          onChange={(e) => setModulesCount(Number(e.target.value))}
                          className="w-full accent-[#27C5E8] cursor-pointer"
                        />
                      </div>
                    </div>

                    <div className="p-5 rounded-xl bg-[#0D3038] border border-[#164652] flex flex-col justify-center space-y-3">
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-slate-400 block">
                          Weekly AI Resource Queries
                        </span>
                        <div className="text-2xl font-extrabold text-[#C084FC]">
                          {academicResults.weeklyQueries.toLocaleString()}
                        </div>
                      </div>
                      <div className="pt-2 border-t border-[#164652] grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="text-slate-400 block text-[10px]">Faculty Hours Saved / Wk</span>
                          <span className="font-semibold text-[#42E6B0]">
                            ~{academicResults.facultyHoursSaved} hrs
                          </span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px]">Cohort Engagement Score</span>
                          <span className="font-semibold text-slate-200">
                            {academicResults.engagementScore}%
                          </span>
                        </div>
                      </div>
                      <div className="text-[11px] text-slate-400 pt-1">
                        Automated AI indexing eliminates duplicate syllabus search inquiries across courses.
                      </div>
                    </div>
                  </div>
                </div>
              ) : project.id === 'loan-default-prediction' ? (
                /* Loan Default Risk Simulator */
                <div className="p-6 rounded-2xl bg-[#071F27] border border-[#164652] space-y-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Calculator className="w-5 h-5 text-[#42E6B0]" />
                    <h3 className="text-base font-bold text-white">
                      Live Applicant Risk Scoring Engine
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300">
                    Adjust the borrower parameters below to observe real-time classification probability according to the developed scoring pipeline.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    {/* Controls */}
                    <div className="space-y-5">
                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-1">
                          <span className="text-slate-300">Applicant Credit Score (CIBIL/FICO)</span>
                          <span className="text-[#42E6B0] font-bold">{creditScore}</span>
                        </div>
                        <input
                          type="range"
                          min="300"
                          max="850"
                          step="10"
                          value={creditScore}
                          onChange={(e) => setCreditScore(Number(e.target.value))}
                          className="w-full accent-[#42E6B0] cursor-pointer"
                        />
                        <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                          <span>300 (Poor)</span>
                          <span>650 (Fair)</span>
                          <span>850 (Exceptional)</span>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-1">
                          <span className="text-slate-300">Debt-to-Income (DTI) Ratio</span>
                          <span className="text-[#27C5E8] font-bold">{dtiRatio}%</span>
                        </div>
                        <input
                          type="range"
                          min="5"
                          max="65"
                          step="1"
                          value={dtiRatio}
                          onChange={(e) => setDtiRatio(Number(e.target.value))}
                          className="w-full accent-[#27C5E8] cursor-pointer"
                        />
                        <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                          <span>5% (Low Debt)</span>
                          <span>35% (Caution)</span>
                          <span>65% (Overburdened)</span>
                        </div>
                      </div>
                    </div>

                    {/* Results Box */}
                    <div className="p-5 rounded-xl bg-[#0D3038] border border-[#164652] flex flex-col justify-center items-center text-center">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Predicted Risk Category
                      </span>
                      <div
                        className="text-2xl font-extrabold mb-1"
                        style={{ color: riskResults.color }}
                      >
                        {riskResults.tier}
                      </div>
                      <div className="text-xs text-slate-300 mb-4">
                        Estimated Default Likelihood:{' '}
                        <span className="font-bold text-white">{riskResults.prob}</span>
                      </div>
                      <div className="text-[11px] text-slate-400 max-w-xs">
                        {riskResults.tier === 'Low Risk' && 'Standard underwriting path. Recommended for prime interest discount.'}
                        {riskResults.tier === 'Moderate Risk' && 'Additional income documentation and secondary review recommended.'}
                        {riskResults.tier === 'High Risk' && 'High delinquency probability. Requires mandatory co-borrower or collateral.'}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* ManiLoan / Financial Simulator */
                <div className="p-6 rounded-2xl bg-[#071F27] border border-[#164652] space-y-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Calculator className="w-5 h-5 text-[#42E6B0]" />
                    <h3 className="text-base font-bold text-white">
                      ManiLoan Real-Time EMI & Repayment Calculator
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300">
                    Calculates exact monthly repayments based on reducing balance amortization.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    {/* Controls */}
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-1">
                          <span className="text-slate-300">Loan Principal</span>
                          <span className="text-[#42E6B0] font-bold">₹{loanAmount.toLocaleString('en-IN')}</span>
                        </div>
                        <input
                          type="range"
                          min="100000"
                          max="5000000"
                          step="50000"
                          value={loanAmount}
                          onChange={(e) => setLoanAmount(Number(e.target.value))}
                          className="w-full accent-[#42E6B0] cursor-pointer"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-1">
                          <span className="text-slate-300">Tenure (Years)</span>
                          <span className="text-[#27C5E8] font-bold">{tenureYears} Years</span>
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="20"
                          step="1"
                          value={tenureYears}
                          onChange={(e) => setTenureYears(Number(e.target.value))}
                          className="w-full accent-[#27C5E8] cursor-pointer"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-1">
                          <span className="text-slate-300">Annual Interest Rate</span>
                          <span className="text-[#F2C811] font-bold">{interestRate}%</span>
                        </div>
                        <input
                          type="range"
                          min="7.0"
                          max="18.0"
                          step="0.25"
                          value={interestRate}
                          onChange={(e) => setInterestRate(Number(e.target.value))}
                          className="w-full accent-[#F2C811] cursor-pointer"
                        />
                      </div>
                    </div>

                    {/* Results Box */}
                    <div className="p-5 rounded-xl bg-[#0D3038] border border-[#164652] flex flex-col justify-center space-y-3">
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-slate-400 block">
                          Monthly EMI
                        </span>
                        <div className="text-2xl font-extrabold text-[#42E6B0]">
                          ₹{emiResults.monthlyEMI.toLocaleString('en-IN')}
                        </div>
                      </div>

                      <div className="pt-2 border-t border-[#164652] grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="text-slate-400 block text-[10px]">Total Interest</span>
                          <span className="font-semibold text-slate-200">
                            ₹{emiResults.totalInterest.toLocaleString('en-IN')}
                          </span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px]">Total Payable</span>
                          <span className="font-semibold text-slate-200">
                            ₹{emiResults.totalPayment.toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>

                      <div className="text-[11px] text-slate-400 pt-1">
                        Suitable minimum monthly income: ~₹{Math.round(emiResults.monthlyEMI * 2).toLocaleString('en-IN')} (assuming 50% FOIR cap).
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: FINDINGS & RECOMMENDATIONS */}
          {activeTab === 'findings' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* Findings */}
              <div className="p-5 rounded-2xl bg-[#0D3038] border border-[#164652]">
                <h3 className="text-base font-bold text-white flex items-center gap-2 mb-3">
                  <Lightbulb className="w-4 h-4 text-[#F2C811]" />
                  <span>Key Analytical Findings</span>
                </h3>
                <ul className="space-y-2.5">
                  {project.findings.map((finding, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#42E6B0] mt-2 shrink-0" />
                      <span>{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommendations */}
              <div className="p-5 rounded-2xl bg-[#071F27] border border-[#164652]">
                <h3 className="text-base font-bold text-white flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-[#42E6B0]" />
                  <span>Actionable Business Recommendations</span>
                </h3>
                <ul className="space-y-2.5">
                  {project.recommendations.map((rec, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#27C5E8] mt-2 shrink-0" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              {project.challenges && (
                <div className="p-4 rounded-xl bg-[#071F27]/50 border border-[#164652]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Challenges & Key Learnings
                  </h4>
                  <ul className="space-y-1.5">
                    {project.challenges.map((c, idx) => (
                      <li key={idx} className="text-xs text-slate-400 list-disc list-inside">
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#071F27] border-t border-[#164652] flex items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-400 truncate max-w-[45%] sm:max-w-none">
            {project.tools.join(' • ')}
          </div>
          <div className="flex items-center gap-2">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#42E6B0] to-[#27C5E8] text-[#071F27] font-bold text-xs hover:shadow-lg hover:shadow-[#42E6B0]/20 transition-all hover:scale-105"
              >
                <span>Launch Live App</span>
                <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-[#0D3038] hover:bg-[#164652] text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Close Details
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
