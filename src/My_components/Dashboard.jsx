/* AidResQ Dashboard (JSX) */
"use client"

import { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import './Dashboard.css'

export default function AidResQDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate()

  const handleBackToHome = () => {
    navigate('/')
  }

  const handleNavItemClick = (label) => {
    switch (label.toLowerCase()) {
      case 'requests':
        navigate('/requests')
        break
      case 'dashboard':
        navigate('/dashboard')
        break
      // Add other navigation cases as needed
      default:
        console.log(`Navigation to ${label} not implemented yet`)
    }
  }

  // Demo stats
  const stats = [
    { label: "Total Donations", value: "$12,340", sub: "120 Transactions" },
    { label: "Resources in Stock", value: "850", sub: "Units Available" },
    { label: "Active Requests", value: "42", sub: "Pending" },
    { label: "Delivered", value: "316", sub: "Successful Deliveries" },
  ]

  const chart = useMemo(
    () => ({
      labels: ["JAN", "FEB", "MAR", "APR"],
      data: [4, 12, 8, 20, 36, 48, 44], // example trend points
    }),
    [],
  )

  const donations = [
    { donor: "Rajiv Sharma", amount: "₹5,000", date: "25 Aug", status: "verified", hash: "0x912…" },
    { donor: "Anonymous", amount: "₹10,000", date: "24 Aug", status: "pending", hash: "0x1d8…" },
    { donor: "Helping Hands Org", amount: "₹2,300", date: "23 Aug", status: "verified", hash: "0xa41…" },
    { donor: "Arun Patel", amount: "₹800", date: "21 Aug", status: "pending", hash: "0x9af…" },
  ]

  return (
    <div className="arq-root">
      <button aria-label="Open sidebar" className="arq-nav-toggle" onClick={() => setSidebarOpen(true)}>
        <IconMenu />
      </button>

      <aside className={`arq-sidebar ${sidebarOpen ? "is-open" : ""}`} aria-label="Primary">
        <div className="arq-sidebar__header">
          <div className="arq-brand">
            
            <span className="arq-brand__name"><img src="/assets/logo.png" alt="logo" className='logo'/></span>
          </div>
          <button className="arq-sidebar__close" aria-label="Close sidebar" onClick={() => setSidebarOpen(false)}>
            <IconClose />
          </button>
        </div>

        <nav className="arq-nav">
          <NavItem active icon={<IconHome />} label="Dashboard" onClick={handleNavItemClick} />
          <NavItem icon={<IconGift />} label="Donations" onClick={handleNavItemClick} />
          <NavItem icon={<IconBox />} label="Inventory" onClick={handleNavItemClick} />
          <NavItem icon={<IconInbox />} label="Requests" onClick={handleNavItemClick} />
          <NavItem icon={<IconQr />} label="QR Verification" onClick={handleNavItemClick} />
          <NavItem icon={<IconList />} label="Ledger Logs" onClick={handleNavItemClick} />
          <NavItem icon={<IconSettings />} label="Settings" onClick={handleNavItemClick} />
          <NavItem icon={<IconLogout />} label="Logout" onClick={handleNavItemClick} />
        </nav>
      </aside>

      <div className={`arq-overlay ${sidebarOpen ? "is-visible" : ""}`} onClick={() => setSidebarOpen(false)} />

      <section className="arq-content">
        <header className="arq-topbar" aria-label="Top bar">
          <div className="arq-topbar__left">
            <button className="arq-back-btn" onClick={handleBackToHome}>
              ← Back to Home
            </button>
            <form className="arq-search" role="search" aria-label="Search">
              <IconSearch />
              <input type="search" placeholder="Search" aria-label="Search input" />
            </form>
          </div>
          <div className="arq-topbar__actions">
            <button className="arq-icon-btn" aria-label="Notifications">
              <IconBell />
            </button>
            <div className="arq-avatar" role="button" aria-label="Admin menu">
              <span className="arq-avatar__dot" />
              <span className="arq-avatar__label">Admin</span>
              <IconChevronDown />
            </div>
          </div>
        </header>

        <div className="arq-container">
          <h1 className="arq-title">Dashboard</h1>

          <section className="arq-cards" aria-label="Summary">
            {stats.map((s) => (
              <article key={s.label} className="arq-card">
                <p className="arq-card__label">{s.label}</p>
                <p className="arq-card__value">{s.value}</p>
                <p className="arq-card__sub">{s.sub}</p>
              </article>
            ))}
          </section>

          <section className="arq-panel" aria-label="Donations line chart">
            <h2 className="arq-panel__title">Donations</h2>
            <LineChart labels={chart.labels} data={chart.data} />
          </section>

          <section className="arq-panel" aria-label="Donations table">
            <div className="arq-panel__header">
              <h2 className="arq-panel__title">Donations</h2>
              <div className="arq-panel__tools">
                <button className="arq-btn arq-btn--ghost">Export CSV</button>
                <button className="btn-secondary">
                  All <IconChevronDown />
                </button>
              </div>
            </div>

            <div className="arq-table" role="region" aria-label="Donations">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Donor</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Blockchain Txn Hash</th>
                  </tr>
                </thead>
                <tbody>
                  {donations.map((d, idx) => (
                    <tr key={idx}>
                      <td>{d.donor}</td>
                      <td>{d.amount}</td>
                      <td>{d.date}</td>
                      <td>
                        <StatusBadge status={d.status} />
                      </td>
                      <td>
                        <span className="arq-code">{d.hash}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}

/* Subcomponents */

function NavItem({ icon, label, active, onClick }) {
  return (
    <button 
      className={`arq-nav__item ${active ? "is-active" : ""}`} 
      onClick={() => onClick(label)}
      aria-current={active ? "page" : undefined}
    >
      <span className="arq-nav__icon" aria-hidden="true">
        {icon}
      </span>
      <span>{label}</span>
    </button>
  )
}

function StatusBadge({ status }) {
  const isVerified = status === "verified"
  return (
    <span className={`arq-badge ${isVerified ? "is-success" : "is-pending"}`}>
      {isVerified ? <IconCheck /> : <IconDot />} {isVerified ? "Verified" : "Pending"}
    </span>
  )
}

function LineChart({ labels, data }) {
  const w = 900
  const h = 220
  const pad = 28
  const max = Math.max(...data) || 1
  const min = Math.min(...data) || 0
  const range = Math.max(1, max - min)
  const points = data.map((v, i) => {
    const x = pad + (i * (w - pad * 2)) / (data.length - 1)
    const y = h - pad - ((v - min) / range) * (h - pad * 2)
    return [x, y]
  })
  const d = points.map((p, i) => (i === 0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`)).join(" ")

  return (
    <div className="arq-chart">
      <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-label="Donations over time">
        <title>Donations over time</title>
        <desc>A simple line chart showing donations trend</desc>

        {[0, 1, 2, 3, 4].map((i) => {
          const y = pad + i * ((h - pad * 2) / 4)
          return <line key={i} x1={pad} y1={y} x2={w - pad} y2={y} className="arq-chart__grid" />
        })}

        <defs>
          <linearGradient id="arqBlueFade" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={`${d} L ${w - pad} ${h - pad} L ${pad} ${h - pad} Z`} fill="url(#arqBlueFade)" stroke="none" />
        <path d={d} className="arq-chart__line" />

        {labels.map((lab, i) => {
          const x = pad + (i * (w - pad * 2)) / (labels.length - 1)
          return (
            <text key={lab} x={x} y={h - 6} textAnchor="middle" className="arq-chart__label">
              {lab}
            </text>
          )
        })}
      </svg>
    </div>
  )
}

/* Icons */

function IconMenu() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
function IconClose() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
function IconHome() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 10.5l9-7 9 7V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  )
}
function IconGift() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 12H4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8zM2 7h20v5H2z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 2v20M8 2c0 2 4 3 4 3s4-1 4-3" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}
function IconBox() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 7l9 4 9-4M3 7l9-4 9 4M3 7v10l9 4 9-4V7" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}
function IconInbox() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 13l3-8h12l3 8v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3 13h6a3 3 0 0 0 6 0h6" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}
function IconQr() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h2v2h-2zM18 18h2v2h-2zM16 20v-2h-2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  )
}
function IconList() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 6h14M5 12h14M5 18h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}
function IconSettings() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M19 12a7 7 0 0 0-.1-1l2-1.6-2-3.4-2.4 1a7.2 7.2 0 0 0-1.7-1l-.3-2.6H11l-.3 2.5c-.6.2-1.2.6-1.7 1L6.6 6 4.6 9.4 6.5 11c0 .3-.1.7-.1 1s.1.7.1 1l-1.9 1.6 2 3.4 2.4-1a7.2 7.2 0 0 0 1.7 1l.3 2.6h3.5l.3-2.5c.6-.2 1.2-.6 1.7-1l2.4 1 2-3.4L18.9 13c.1-.3.1-.7.1-1z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  )
}
function IconLogout() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M15 17l5-5-5-5M20 12H9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M4 4h7v16H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}
function IconSearch() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.7" />
      <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}
function IconBell() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 8a6 6 0 1 1 12 0v6l2 3H4l2-3V8z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M10 19a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}
function IconChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}
function IconCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 7l-11 11-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
function IconDot() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
    </svg>
  )
}
