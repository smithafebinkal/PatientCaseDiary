import { Link } from 'react-router-dom';
import './DashboardLarg.scss';

const sidebarItems = [
    { label: 'Intake Workspace', icon: '▣', active: false, to: '/patient-intake' },
    { label: 'Patient Cases', icon: '◫', active: true, to: '/dashboard' },
    { label: 'Clinical Insights', icon: '✦', active: false, to: '/cases' },
    { label: 'Settings', icon: '⚙', active: false, to: '/cases/new' },
];

const metricCards = [
    { label: 'Active In-Patients', value: '18', delta: '+12%', accent: 'green', trend: 'vs last shift', stat: '1' },
    { label: 'Pending Physician Review', value: '6', delta: 'Needs Action', accent: 'blue', trend: '2 high urgency', stat: '2' },
    { label: 'Multimodal Intakes', value: '24', delta: 'Today', accent: 'cyan', trend: '14 voice + 4 OCR', stat: '3' },
    { label: 'Database Sync', value: '99.8%', delta: 'synced', accent: 'teal', trend: '0 latency', stat: '4' },
];

const patientCases = [
    {
        name: 'Marcus Vance',
        mrn: 'MRN-94821',
        age: '42 yrs',
        room: 'Room 302',
        attending: 'Dr. Eliza Reid, MD',
        specialty: 'Acute Bronchitis & Respiratory',
        description: 'Patient reported persistent dry cough for 5 days, bilateral expiratory wheeze... ',
        tags: ['Voice Transcribed', 'Database Synced'],
        vitals: ['HR 82', 'BP 118/72', 'RR 14'],
        status: 'Critical',
        tone: 'blue',
        urgent: false,
    },
    {
        name: 'Sarah Jenkins',
        mrn: 'MRN-B31390',
        age: '52 yrs',
        room: 'Room 114',
        attending: 'Dr. Eliza Reid, MD',
        specialty: 'Type 2 Diabetes Mellitus – Routine Review',
        description: 'Document scan of endocrine lab panel confirms stable A1C and fasting glucose readings...',
        tags: ['Image to Text (OCR)', 'Verified'],
        vitals: ['Fasting Glucose 112 mg/dL', 'A1C 6.8%', 'BMI 31'],
        status: 'Normal Urgency',
        tone: 'mint',
        urgent: false,
    },
    {
        name: 'David Chen',
        mrn: 'MRN-77412',
        age: '35 yrs',
        room: 'Room 205',
        attending: 'Dr. Eliza Reid, MD',
        specialty: 'Post-op Knee Arthroscopy Follow-up',
        description: 'Minimal surgical effusion, range of motion at 105 degrees, PT protocol stage 2 approved...',
        tags: ['Manual Text Entry', 'Review Required'],
        vitals: ['ROM 105°', 'PT progress OK', 'ICU none'],
        status: 'Waiting for doctor sign-off',
        tone: 'amber',
        urgent: false,
    },
    {
        name: 'Elena Rostova',
        mrn: 'MRN-99304',
        age: '61 yrs',
        room: 'ED bay 3',
        attending: 'Dr. Julian Hayes, MD',
        specialty: 'Hypertensive Crisis Evaluation',
        description: 'Severe occipital headache, BP 194/118, nitroglycerin in ED bay 3. Awaiting emergent repeat...',
        tags: ['Emergency Voice Dictation', 'Critical / Priority'],
        vitals: ['BP 194/118', 'Critical', 'Triage status: 2'],
        status: 'Urgent',
        tone: 'red',
        urgent: true,
    },
];

export default function DashboardLarge() {
    return (
        <div className="dashboard-large">
            <aside className="dashboard-sidebar">
                <div className="dashboard-sidebar__header">
                    <div className="dashboard-sidebar__brand-mark">+</div>
                    <div className="dashboard-sidebar__brand-copy">
                        <span className="brand-title">Horizon</span>
                        <span className="brand-subtitle">Medical</span>
                    </div>
                </div>

                <nav className="dashboard-sidebar__nav" aria-label="Sidebar navigation">
                    {sidebarItems.map((item) => (
                        <Link
                            key={item.label}
                            to={item.to}
                            className={item.active ? 'dashboard-sidebar__item dashboard-sidebar__item--active' : 'dashboard-sidebar__item'}
                        >
                            <span className="dashboard-sidebar__icon">{item.icon}</span>
                            <span>{item.label}</span>
                        </Link>
                    ))}
                </nav>

                <div className="dashboard-sidebar__footer">
                    <div className="dashboard-sidebar__footer-header">
                        <span className="status-pill status-pill--active" />
                        <span>Attending Mode</span>
                    </div>

                    <div className="dashboard-sidebar__meta">
                        <div>
                            <small>Duty Shift</small>
                            <strong>Night</strong>
                        </div>
                        <div>
                            <small>On Call</small>
                            <strong>Swatch</strong>
                        </div>
                    </div>
                </div>
            </aside>

            <main className="dashboard-main">
                <header className="top-header">
                    <div className="top-header__crumbs">
                        <span>Clinical</span>
                        <span className="crumb-separator">›</span>
                        <span>Diagnostics</span>
                        <span className="crumb-separator">›</span>
                        <strong>EHR Session</strong>
                    </div>

                    <div className="top-header__search-wrap">
                        <span className="top-header__search-icon">⌕</span>
                        <input type="text" placeholder="Search MRN, vitals, clinical records..." />
                    </div>

                    <div className="top-header__actions">
                        <div className="sync-pill">
                            <span className="sync-pill__dot" />
                            Live Sync
                        </div>
                        <button type="button" className="header-icon-button" aria-label="Notifications">🔔</button>
                        <button type="button" className="header-profile" aria-label="Profile">◉</button>
                    </div>
                </header>

                <section className="dashboard-content">
                    <div className="dashboard-intro">
                        <div className="dashboard-intro__left">
                            <div className="status-row">
                                <span className="status-badge"><span className="status-dot" /> CLINICAL NODE 04</span>
                                <span className="status-separator">•</span>
                                <span className="status-label">ACTIVE SHIFT</span>
                                <span className="status-separator">•</span>
                                <span className="updated-text">Updated 2m ago</span>
                            </div>

                            <h1>Patient Case Diary</h1>

                            <span class="dashboard-multimodal-intro">
                                <p>
                                Continuous multimodal clinical feeds &amp; verified intake logs
                                <br />
                                active physician triage
                                </p>
                          </span>
                        </div>

                        <div className="dashboard-intro__right">
                            <div className="search-inline">
                                <span className="search-inline__icon">⌕</span>
                                <input type="text" placeholder="Search by patient name, MRN, diagnosis..." />
                                <span className="search-whisk">⌘K</span>
                            </div>

                            <Link to="/patient-intake" className="new-intake-btn">
                                <span style={{ cursor:"pointer", textDecoration: "none" }}>＋</span>                                
                                New Patient Intake
                            </Link>
                        </div>
                    </div>

                    {/* <div className="case-summary-container">
                        <section className="metrics-row" aria-label="Case summary metrics">
                            {metricCards.map((metric) => (
                                <article key={metric.label} className={`metric-card metric-card--${metric.accent}`}>
                                    <div className="metric-card__top-row">
                                        <span className="metric-card__label">{metric.label}</span>
                                        <span className="metric-card__badge">{metric.delta}</span>
                                    </div>

                                    <div className="metric-card__bottom-row">
                                        <strong>{metric.value}</strong>
                                        <span>{metric.trend}</span>
                                    </div>
                                </article>
                            ))}
                        </section>

                        <section className="case-toolbar" aria-label="Filters and view options">
                            <div className="chip-row">
                                <button type="button" className="chip chip--active">All Cases <span>48</span></button>
                                <button type="button" className="chip">Voice Transcribed <span>22</span></button>
                                <button type="button" className="chip">OCR Scan <span>16</span></button>
                            </div>

                            <div className="toolbar-actions">
                                <button type="button" className="ghost-action">Dept: All Units</button>
                                <button type="button" className="ghost-action">Sort: Most Recent</button>
                            </div>
                        </section>
                    </div> */}
                    <section className="patient-list" aria-label="Patient case list">
                        {patientCases.map((patient) => (
                            <article key={patient.name} className={`patient-card ${patient.urgent ? 'patient-card--urgent' : ''}`}>
                                <div className="patient-card__left">
                                    <div className="patient-avatar">{patient.name.charAt(0)}</div>

                                    <div className="patient-card__identity">
                                        <div className="patient-card__header-row">
                                            <h3>{patient.name}</h3>
                                            <span className="patient-card__mrn">{patient.mrn}</span>
                                        </div>
                                        <div className="patient-card__detail-row">
                                            <span>{patient.age}</span>
                                            <span>{patient.room}</span>
                                            <span>{patient.attending}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="patient-card__right">
                                    <div className="patient-card__tags">
                                        {patient.tags.map((tag, index) => (
                                            <span key={`${patient.name}-${tag}`} className={`mini-tag mini-tag--${index % 2 === 0 ? 'light' : 'green'}`}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="patient-card__content-row">
                                        <div className="patient-card__summary-block">
                                            <h4>{patient.specialty}</h4>
                                            <p>{patient.description}</p>
                                        </div>

                                        <div className="patient-card__vitals-box">
                                            {patient.vitals.map((vital) => (
                                                <span key={`${patient.name}-${vital}`} className="vital-tag">{vital}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="patient-card__footer-row">
                                        <div className="patient-card__flags">
                                            <span className={`status-pill status-pill--${patient.tone}`}>{patient.status}</span>
                                            <span className="database-status">• Database Synced</span>
                                        </div>

                                        <div className="patient-card__actions">
                                            <button type="button" className="edit-btn">Edit Case</button>
                                            <button type="button" className="view-btn">View EHR</button>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </section>

                    <div className="pagination-row">
                        <span>Showing 1-4 of 48 active patient cases</span>
                        <div className="pagination-controls">
                            <button type="button" className="page-btn">‹</button>
                            <button type="button" className="page-btn page-btn--active">1</button>
                            <button type="button" className="page-btn">2</button>
                            <button type="button" className="page-btn">3</button>
                            <button type="button" className="page-btn">…</button>
                            <button type="button" className="page-btn">›</button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
