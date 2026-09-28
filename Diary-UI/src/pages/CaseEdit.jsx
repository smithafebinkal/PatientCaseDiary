import { useParams, Link } from 'react-router-dom';
import { cases } from '../data/cases';

export default function CaseEdit() {
  const { id } = useParams();
  const caseData = cases.find((item) => item.id === Number(id)) || cases[0];

  return (
    <div className="page-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand__mark">SP</div>
          <div>
            <strong>Casebook</strong>
            <small>Clinical records</small>
          </div>
        </div>

        <nav className="sidebar__nav" aria-label="Sidebar navigation">
          {['Dashboard', 'Patients', 'Case List', 'Reports', 'Settings'].map((item, index) => (
            <button
              key={item}
              type="button"
              className={index === 2 ? 'sidebar__item active' : 'sidebar__item'}
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>

      <main className="main-panel case-edit-panel">
        <header className="page-header page-header--stacked">
          <div>
            <p className="eyebrow">Edit case record</p>
            <h1>{caseData.patientName}</h1>
          </div>

          <div className="header-actions">
            <Link to="/cases" className="ghost-btn">Back to list</Link>
            <button type="button" className="primary-btn">Save changes</button>
          </div>
        </header>

        <section className="panel patient-overview">
          <div className="patient-overview__top">
            <div>
              <span className="label">Patient</span>
              <h2>{caseData.patientName}</h2>
            </div>
            <span className={`priority-pill priority-pill--${caseData.priority.toLowerCase()}`}>
              {caseData.priority}
            </span>
          </div>

          <div className="patient-meta-grid">
            <div>
              <span className="label">MRN</span>
              <strong>{caseData.mrn}</strong>
            </div>
            <div>
              <span className="label">Age</span>
              <strong>{caseData.age}</strong>
            </div>
            <div>
              <span className="label">Room</span>
              <strong>{caseData.room}</strong>
            </div>
            <div>
              <span className="label">Department</span>
              <strong>{caseData.department}</strong>
            </div>
          </div>
        </section>

        <section className="form-grid">
          <div className="panel form-panel">
            <h3>Clinical summary</h3>
            <div className="field-group">
              <label>Chief complaint</label>
              <textarea defaultValue={caseData.chiefComplaint} rows="4" />
            </div>
            <div className="field-group">
              <label>Current assessment</label>
              <textarea defaultValue="Patient reports persistent symptoms with moderate response to current treatment. Continued observation and reassessment recommended within the next 2 hours." rows="4" />
            </div>
          </div>

          <div className="panel form-panel">
            <h3>Vitals</h3>
            <div className="vitals-grid">
              <div className="field-group">
                <label>Heart rate</label>
                <input defaultValue={caseData.vitals.heartRate} />
              </div>
              <div className="field-group">
                <label>Blood pressure</label>
                <input defaultValue={caseData.vitals.bloodPressure} />
              </div>
              <div className="field-group">
                <label>Oxygen</label>
                <input defaultValue={caseData.vitals.oxygen} />
              </div>
              <div className="field-group">
                <label>Temperature</label>
                <input defaultValue={caseData.vitals.temp} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
