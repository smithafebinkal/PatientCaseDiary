import { Link } from 'react-router-dom';
import CaseTable from '../components/CaseTable';
import { cases } from '../data/cases';

export default function CaseList() {
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

      <main className="main-panel">
        <header className="page-header">
          <div>
            <p className="eyebrow">Patient caseboard</p>
            <h1>Case list</h1>
          </div>

          <div className="header-actions">
            <button type="button" className="ghost-btn">Filter</button>
            <Link to="/cases/new" className="primary-btn">New case</Link>
          </div>
        </header>

        <section className="toolbar-panel">
          <div className="toolbar-search">
            <span>Search patient</span>
            <input type="text" placeholder="MRN, name or attending..." />
          </div>
          <div className="toolbar-chips">
            <button type="button" className="chip active">All</button>
            <button type="button" className="chip">Critical</button>
            <button type="button" className="chip">High</button>
            <button type="button" className="chip">Monitoring</button>
          </div>
        </section>

        <section className="panel">
          <div className="list-summary">
            <h2>Open cases</h2>
            <span>{cases.length} active records</span>
          </div>
          <CaseTable cases={cases} />
        </section>
      </main>
    </div>
  );
}
