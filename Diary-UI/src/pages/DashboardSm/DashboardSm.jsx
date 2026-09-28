import Sidebar from "../../components/Layout/Sidebar";
import Topbar from "../../components/Layout/Topbar/Topbar";
import TopNavigation from "../../components/TopNavigation/TopNavigation";

function PatientIntakeMobile() {
  return (
    <section className="patient-intake-mobile" aria-label="Patient intake form">
      <header className="patient-intake-mobile__header">
        <div>
          <span className="patient-intake-mobile__eyebrow">Encounter ID #NFC-2024-8902</span>
          <h2>New Patient Intake</h2>
        </div>
        <button type="button" className="patient-intake-mobile__save">Auto-save</button>
      </header>

      <div className="patient-intake-mobile__card">
        <div className="patient-intake-mobile__identity">
          <div className="patient-intake-mobile__avatar">E</div>
          <div className="patient-intake-mobile__identity-copy">
            <div className="patient-intake-mobile__name-row">
              <h3>Eleanor Vance</h3>
              <span className="patient-intake-mobile__badge">New Consultation</span>
            </div>
            <div className="patient-intake-mobile__meta-row">
              <span>MRN-0042-2018</span>
              <span>DOB: Nov 14, 1976</span>
              <span>Room 204</span>
            </div>
          </div>
        </div>

        <div className="patient-intake-mobile__meta-columns">
          <div>
            <span className="patient-intake-mobile__meta-label">Attending clinician</span>
            <strong>Dr. Marcus Storring, DO</strong>
          </div>
          <div>
            <span className="patient-intake-mobile__meta-label">Clinical bay</span>
            <strong>ED Bay 04 • West Wing</strong>
          </div>
        </div>
      </div>

      <div className="patient-intake-mobile__toolbar">
        <label className="patient-intake-mobile__search">
          <span>⌕</span>
          <input type="text" value="Search patient by MRN or name" readOnly aria-label="Search patient" />
        </label>
        <button type="button" className="patient-intake-mobile__button">+ Add New Patient</button>
      </div>

      <div className="patient-intake-mobile__form-stack">
        <section className="patient-intake-mobile__panel">
          <span className="patient-intake-mobile__panel-label">Patient Details</span>
          <div className="patient-intake-mobile__field-grid">
            <label>
              <span>First Name</span>
              <input type="text" value="Eleanor" readOnly />
            </label>
            <label>
              <span>Last Name</span>
              <input type="text" value="Vance" readOnly />
            </label>
            <label>
              <span>MRN</span>
              <input type="text" value="MRN-0042-2018" readOnly />
            </label>
            <label>
              <span>DOB</span>
              <input type="text" value="Nov 14, 1976" readOnly />
            </label>
            <label>
              <span>Gender</span>
              <input type="text" value="Female" readOnly />
            </label>
            <label>
              <span>Room</span>
              <input type="text" value="Room 204" readOnly />
            </label>
            <label className="full-width">
              <span>Address</span>
              <input type="text" value="1087 Westbrook Ave, Boston, MA" readOnly />
            </label>
          </div>
        </section>

        <section className="patient-intake-mobile__panel">
          <span className="patient-intake-mobile__panel-label">Attending Doctor Details</span>
          <div className="patient-intake-mobile__field-grid">
            <label>
              <span>Doctor Name</span>
              <input type="text" value="Dr. Marcus Storring" readOnly />
            </label>
            <label>
              <span>Specialty</span>
              <input type="text" value="Emergency Medicine" readOnly />
            </label>
            <label>
              <span>Bay</span>
              <input type="text" value="ED Bay 04" readOnly />
            </label>
            <label>
              <span>Time</span>
              <input type="text" value="08:30 AM" readOnly />
            </label>
          </div>
        </section>

        <section className="patient-intake-mobile__panel">
          <span className="patient-intake-mobile__panel-label">Assistant Details</span>
          <div className="patient-intake-mobile__field-grid">
            <label>
              <span>Primary Assistant</span>
              <input type="text" value="Nurse Lauren Moss" readOnly />
            </label>
            <label>
              <span>Role</span>
              <input type="text" value="ED RN" readOnly />
            </label>
            <label>
              <span>Contact</span>
              <input type="text" value="(617) 555-0132" readOnly />
            </label>
            <label>
              <span>Care Team</span>
              <input type="text" value="2 staff assigned" readOnly />
            </label>
          </div>
        </section>
      </div>
    </section>
  );
}

const metrics = [
  { label: 'Active In-Patients', value: '18', delta: '+12%', tone: 'mint' },
  { label: 'Pending Review', value: '6', delta: '+4%', tone: 'blue' },
];

const patientCases = [
  {
    id: 1,
    name: 'Marcus Vance',
    mrn: 'MRN-94821',
    specialty: 'Acute Bronchitis & Respiratory',
    summary: 'Patient presented with dry cough for 5 days, bilateral opth... ',
    tags: ['Voice Transcribed', 'Database Synced'],
    doctor: 'Dr. Eliza Reid, MD',
    status: 'Critical',
    tone: 'blue',
    urgent: false,
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    mrn: 'MRN-B31390',
    specialty: 'Endocrinology',
    summary: 'Type 2 Diabetes Mellitus – Routine Review. HbA1c steady at 6.8%, fasting glucose 112 mg/dL...',
    tags: ['Image to Text (Lab)', 'OCR Scan'],
    doctor: 'Dr. Eliza Reid, MD',
    status: 'Normal Urgency',
    tone: 'neutral',
    urgent: false,
  },
  {
    id: 3,
    name: 'David Chen',
    mrn: 'MRN-77412',
    specialty: 'Orthopedic Follow-up',
    summary: 'Minimal surgical effusion, range of motion at 105 degrees, PT protocol Stage 2 approved...',
    tags: ['Manual Text Entry', 'Review Required'],
    doctor: 'Dr. Eliza Reid, MD',
    status: 'Waiting for doctor sign-off',
    tone: 'amber',
    urgent: false,
  },
  {
    id: 4,
    name: 'Elena Rostova',
    mrn: 'MRN-99304',
    specialty: 'Emergency Intake',
    summary: 'Severe occipital headache, BP 194/118, Nitroglycerin in ED bay 3. Awaiting emergent repeat...',
    tags: ['Emergency Voice Dictation', 'Critical / Priority'],
    doctor: 'Dr. Julian Hayes, MD',
    status: 'Urgent',
    tone: 'red',
    urgent: true,
  },
];

export default function Dashboard() {
  return (
    <div className="app-shell">
      <Sidebar />

      <main className="main-panel">
        <TopNavigation />
        <Topbar />

        <PatientIntakeMobile />

        <section className="metrics-grid" aria-label="Case summary metrics">
          {metrics.map((metric) => (
            <article key={metric.label} className={`metric-card metric-card--${metric.tone}`}>
              <div className="metric-card__content">
                <span className="metric-card__value">{metric.value}</span>
                <span className="metric-card__label">{metric.label}</span>
              </div>
              <span className="metric-card__delta">{metric.delta}</span>
            </article>
          ))}
        </section>

        <section className="case-toolbar" aria-label="Case search and filters">
          <label className="case-search-input">
            <span className="case-search-input__icon">⌕</span>
            <input type="text" placeholder="Search by patient name, MRN, diagnosis..." />
            <span className="search-shortcut">⌘K</span>
          </label>

          <div className="case-toolbar__actions">
            <button type="button" className="case-filter-pill is-active">All Cases (48)</button>
            <button type="button" className="case-filter-pill">Voice Transcribed</button>
            <button type="button" className="case-filter-pill">OCR Scan</button>
          </div>
        </section>

        <section className="patient-list" aria-label="Patient cases">
          {patientCases.map((patient) => (
            <article key={patient.id} className={`patient-case ${patient.urgent ? 'patient-case--urgent' : ''}`}>
              <div className="patient-case__header">
                <div className="patient-case__identity">
                  <div className="avatar">{patient.name.charAt(0)}</div>
                  <div>
                    <h3>{patient.name}</h3>
                    <p>{patient.doctor}</p>
                  </div>
                </div>

                <div className="patient-case__meta">
                  <span className="patient-case__mrn">{patient.mrn}</span>
                  <button type="button" className="case-menu" aria-label="More actions">⋮</button>
                </div>
              </div>

              <div className="patient-case__tags">
                <span className="tag tag--neutral">{patient.specialty}</span>
                {patient.tags.map((tag, index) => (
                  <span key={`${patient.id}-${tag}`} className={`tag tag--${index % 2 === 0 ? 'blue' : 'light'}`}>
                    {tag}
                  </span>
                ))}
              </div>

              <p className="patient-case__summary">{patient.summary}</p>

              <div className="patient-case__footer">
                <div className="patient-case__status-row">
                  <span className={`priority-pill priority-pill--${patient.tone}`}>{patient.status}</span>
                  <span className="database-status">● Database Synced</span>
                </div>

                <div className="patient-case__actions">
                  <button type="button" className="secondary-action">Edit Case</button>
                  <button type="button" className="primary-action">View EHR</button>
                </div>
              </div>
            </article>
          ))}
        </section>

        <nav className="bottom-nav" aria-label="App navigation">
          <button type="button" className="bottom-nav__item is-active">Intake</button>
          <button type="button" className="bottom-nav__item">Cases</button>
          <button type="button" className="bottom-nav__item">Insights</button>
          <button type="button" className="bottom-nav__item">Settings</button>
        </nav>
      </main>
    </div>
  );
}
