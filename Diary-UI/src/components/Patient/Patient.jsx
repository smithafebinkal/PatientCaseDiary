import { Link } from 'react-router-dom';
import './Patient.scss';

const patient = {
  name: 'Eleanor Vance',
  mrn: 'MRN-0042-2018',
  dob: 'DOB: Nov 14, 1976',
  location: 'Room 204',
  attending: 'Dr. Marcus Storring, DO',
  status: 'New Consultation',
  tags: ['Manual Note', 'OCR Scanner', 'Dictation'],
};

const intakeChecklist = [
  { label: 'Demographics & MRN', status: 'Verified' },
  { label: 'Chief Complaint & HPI', status: 'Entered' },
  { label: 'Review of Systems (ROS)', status: 'Flagged' },
  { label: 'Documented Vitals', status: 'Ready' },
  { label: 'Attending Co-Sign', status: 'Pending' },
];

const attachments = [
  { name: 'labs_results_metabolic_panel.pdf', meta: 'PDF • 2.4 MB • Auto Imported', status: 'Parsed' },
  { name: 'chest_xray_pilot_view.jpg', meta: 'JPEG • 1.8 MB • Radiology Portal', status: 'Attached' },
];

const vitals = [
  { label: 'Heart Rate', value: '82', unit: 'bpm', tone: '#4f46e5' },
  { label: 'O₂ Saturation', value: '98%', unit: 'SpO₂', tone: '#1d9bf0' },
  { label: 'Respiration', value: '16', unit: 'rpm', tone: '#0ea5a4' },
  { label: 'Temp', value: '98.4', unit: '°F', tone: '#ef4444' },
];

function SideNav() {
  const navItems = [
    { label: 'Intake Workspace', icon: '▣', to: '/patient-intake', active: true },
    { label: 'Patient Cases', icon: '◫', to: '/dashboard', active: false },
    { label: 'Clinical Insights', icon: '✦', to: '/cases', active: false },
    { label: 'Settings', icon: '⚙', to: '/cases/new', active: false },
  ];

  return (
    <aside className="patient-intake__sidebar">
      <div>
        <div className="patient-intake__brand">
          <div className="patient-intake__brand-mark">+</div>
          <div className="patient-intake__brand-copy">
            <span className="patient-intake__brand-title">Horizon</span>
            <span className="patient-intake__brand-subtitle">Medical</span>
          </div>
        </div>

        <nav className="patient-intake__nav" aria-label="Sidebar navigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={item.active ? 'patient-intake__nav-item patient-intake__nav-item--active' : 'patient-intake__nav-item'}
            >
              <span className="patient-intake__nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="patient-intake__status-box">
        <div className="patient-intake__status-header">
          <span className="patient-intake__status-pip" />
          <span>Attending Mode</span>
        </div>

        <div className="patient-intake__status-meta">
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
  );
}

function TopHeader() {
  return (
    <header className="patient-intake__topbar">
      <div className="patient-intake__crumbs">
        <span>Clinical</span>
        <span className="patient-intake__separator">›</span>
        <span>Diagnostics</span>
        <span className="patient-intake__separator">›</span>
        <strong>EHR Session</strong>
      </div>

      <div className="patient-intake__topbar-right">
        <div className="patient-intake__search-box">
          <span>⌕</span>
          <span>Search MRN, vitals, clinical records...</span>
        </div>
        <div className="patient-intake__live-sync">
          <span className="patient-intake__live-sync-dot" />
          Live Sync
        </div>
        <div className="patient-intake__profile">◉</div>
      </div>
    </header>
  );
}

function IntakeHeader() {
  return (
    <div className="patient-intake__header">
      <div>
        <div className="patient-intake__kicker">ENCOUNTER ID #NFC-2024-8902</div>
        <h2 className="patient-intake__title">New Patient Intake</h2>
        <p className="patient-intake__subtitle">Quick encounter record with multimodal capture &amp; digital attachments</p>
      </div>

      <button type="button" className="patient-intake__save-btn">Auto-save enabled</button>
    </div>
  );
}

function PatientSummaryCard() {
  return (
    <div className="patient-intake__patient-card">
      <div className="patient-intake__identity">
        <div className="patient-intake__avatar">E</div>
        <div>
          <div className="patient-intake__identity-name">
            <strong>{patient.name}</strong>
            <span className="patient-intake__doctor-tag">{patient.status}</span>
          </div>
          <div className="patient-intake__meta-row">
            <span>{patient.mrn}</span>
            <span>{patient.dob}</span>
            <span>{patient.location}</span>
          </div>
        </div>
      </div>

      <div className="patient-intake__meta-right">
        <div className="patient-intake__meta-stack">
          <span className="patient-intake__meta-label">Attending clinician</span>
          <strong>{patient.attending}</strong>
        </div>
        <div className="patient-intake__meta-stack">
          <span className="patient-intake__meta-label">Clinical bay</span>
          <strong>ED Bay 04 • West Wing</strong>
        </div>
      </div>
    </div>
  );
}

function SearchAndAddPatient() {
  return (
    <div className="patient-intake__toolbar">
      <div className="patient-intake__toolbar-search">
        <span className="patient-intake__toolbar-search-icon">⌕</span>
        <input type="text" value="Search patient by MRN or name" readOnly aria-label="Search patient" />
      </div>

      <button type="button" className="patient-intake__toolbar-button">+ Add New Patient</button>
    </div>
  );
}

function DetailCard({ title, subtitle, children }) {
  return (
    <section className="patient-intake__detail-card">
      <div className="patient-intake__detail-card-header">
        <div>
          <span className="patient-intake__detail-label">{title}</span>
          <strong>{subtitle}</strong>
        </div>
      </div>
      {children}
    </section>
  );
}

function PatientDetailsForm() {
  return (
    <DetailCard title="Patient Details" subtitle="Primary encounter profile">
      <div className="patient-intake__field-grid">
        <label className="patient-intake__field">
          <span>First Name</span>
          <input type="text" value="Eleanor" readOnly />
        </label>
        <label className="patient-intake__field">
          <span>Last Name</span>
          <input type="text" value="Vance" readOnly />
        </label>
        <label className="patient-intake__field">
          <span>MRN</span>
          <input type="text" value="MRN-0042-2018" readOnly />
        </label>
        <label className="patient-intake__field">
          <span>Date of Birth</span>
          <input type="text" value="Nov 14, 1976" readOnly />
        </label>
        <label className="patient-intake__field">
          <span>Gender</span>
          <input type="text" value="Female" readOnly />
        </label>
        <label className="patient-intake__field">
          <span>Room</span>
          <input type="text" value="Room 204" readOnly />
        </label>
        <label className="patient-intake__field patient-intake__field--wide">
          <span>Address</span>
          <input type="text" value="1087 Westbrook Ave, Boston, MA" readOnly />
        </label>
      </div>
    </DetailCard>
  );
}

function AttendingDoctorForm() {
  return (
    <DetailCard title="Attending Doctor Details" subtitle="Clinical lead">
      <div className="patient-intake__field-grid">
        <label className="patient-intake__field">
          <span>Doctor Name</span>
          <input type="text" value="Dr. Marcus Storring" readOnly />
        </label>
        <label className="patient-intake__field">
          <span>Specialty</span>
          <input type="text" value="Emergency Medicine" readOnly />
        </label>
        <label className="patient-intake__field">
          <span>Clinical Bay</span>
          <input type="text" value="ED Bay 04 • West Wing" readOnly />
        </label>
        <label className="patient-intake__field">
          <span>Assigned Time</span>
          <input type="text" value="08:30 AM" readOnly />
        </label>
      </div>
    </DetailCard>
  );
}

function AssistantDetailsForm() {
  return (
    <DetailCard title="Assistant Details" subtitle="Support clinical staff">
      <div className="patient-intake__field-grid">
        <label className="patient-intake__field">
          <span>Primary Assistant</span>
          <input type="text" value="Nurse Lauren Moss" readOnly />
        </label>
        <label className="patient-intake__field">
          <span>Role</span>
          <input type="text" value="ED RN" readOnly />
        </label>
        <label className="patient-intake__field">
          <span>Contact</span>
          <input type="text" value="(617) 555-0132" readOnly />
        </label>
        <label className="patient-intake__field">
          <span>Care Team</span>
          <input type="text" value="2 staff assigned" readOnly />
        </label>
      </div>
    </DetailCard>
  );
}

function TagList() {
  return (
    <div className="patient-intake__tags">
      {patient.tags.map((tag, index) => (
        <span
          key={tag}
          className={index === 0 ? 'patient-intake__tag patient-intake__tag--primary' : 'patient-intake__tag patient-intake__tag--secondary'}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function ChecklistSection() {
  return (
    <section className="patient-intake__section">
      <div className="patient-intake__section-header">
        <span className="patient-intake__section-title">Intake Checklist</span>
        <span className="patient-intake__progress-text">4 of 5 complete</span>
      </div>

      <div className="patient-intake__progress-track">
        <span className="patient-intake__progress-fill" />
      </div>

      <div className="patient-intake__checklist">
        {intakeChecklist.map((item) => (
          <div key={item.label} className="patient-intake__check-item">
            <span className="patient-intake__check-icon">{item.status === 'Verified' || item.status === 'Entered' ? '✓' : '•'}</span>
            <span className="patient-intake__check-text">{item.label}</span>
            <span className="patient-intake__check-status">{item.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function AttachmentSection() {
  return (
    <section className="patient-intake__section">
      <div className="patient-intake__section-header">
        <span className="patient-intake__section-title">Clinical Attachments &amp; Scans</span>
        <div className="patient-intake__icon-actions">
          <button type="button" className="patient-intake__icon-btn">Attach</button>
          <button type="button" className="patient-intake__icon-btn">Scan</button>
        </div>
      </div>

      <div className="patient-intake__attachments">
        {attachments.map((file) => (
          <div key={file.name} className="patient-intake__attachment">
            <div className="patient-intake__attachment-icon">📄</div>
            <div className="patient-intake__attachment-meta">
              <strong>{file.name}</strong>
              <small>{file.meta}</small>
            </div>
            <span className="patient-intake__attachment-status">{file.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function VitalStrip() {
  return (
    <aside className="patient-intake__vitals">
      <div className="patient-intake__section-header">
        <span className="patient-intake__section-title">Quick Vital Strip</span>
        <span className="patient-intake__tiny-icon">✎</span>
      </div>

      <div className="patient-intake__vitals-grid">
        {vitals.map((v) => (
          <div key={v.label} className="patient-intake__vital-item">
            <div className="patient-intake__vital-accent" style={{ background: v.tone }} />
            <div className="patient-intake__vital-content">
              <span className="patient-intake__vital-label">{v.label}</span>
              <div className="patient-intake__vital-value-wrap">
                <strong className="patient-intake__vital-value">{v.value}</strong>
                <span className="patient-intake__vital-unit">{v.unit}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

function ClinicalFlags() {
  return (
    <aside className="patient-intake__flags">
      <div className="patient-intake__section-header">
        <span className="patient-intake__section-title">Clinical Flags</span>
        <span className="patient-intake__tiny-icon">⚑</span>
      </div>

      <ul className="patient-intake__flags-list">
        <li>Penicillin Allergy</li>
        <li>Fall Risk: Low</li>
      </ul>
    </aside>
  );
}

export function PatientInTake() {
  return (
    <div className="patient-intake">
      <SideNav />

      <main className="patient-intake__main">
        <TopHeader />

        <div className="patient-intake__body">
          <IntakeHeader />
          <PatientSummaryCard />
          <TagList />
          <SearchAndAddPatient />

          <div className="patient-intake__detail-layout">
            <PatientDetailsForm />
            <AttendingDoctorForm />
            <AssistantDetailsForm />
          </div>

          <div className="patient-intake__content">
            <div className="patient-intake__column">
              <ChecklistSection />
              <AttachmentSection />
            </div>

            <div className="patient-intake__column">
              <VitalStrip />
              <ClinicalFlags />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PatientInTake;
