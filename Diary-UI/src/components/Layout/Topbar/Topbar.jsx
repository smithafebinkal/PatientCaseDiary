export default function Topbar() {
  return (
    <> 
      <header className="topbar">

        {/* =========================
            LEFT
            ========================= */}

        <div className="topbar-left">

          <div className="status-row">

            <span className="status-badge">
              <span className="status-dot"></span>
              CLINICAL NODE 04
              <span>•</span>
              ACTIVE SHIFT
            </span>

            <span className="status-separator">•</span>

            <span className="updated-text">
              Updated 2m ago
            </span>

          </div>


          <h1 className="topbar-title">
            Patient Case Directory
          </h1>


          <p className="topbar-description">
            Continuous multimodal clinical feeds, verified intake logs &amp;
            <br />
            active physician triage
          </p>

        </div>


        {/* =========================
            RIGHT
            ========================= */}

        <div className="topbar-right">

          <div className="topbar-actions">

            {/* Search */}

            <label className="search-box">

              <span className="search-icon">
                ⌕
              </span>

              <input
                type="text"
                placeholder="Search by patient name, MRN, diagnosis..."
              />

              <span className="search-shortcut">
                ⌘K
              </span>

            </label>


            {/* Filter */}

            <button
              type="button"
              className="filter-button"
            >

              <span className="filter-icon">
                ☷
              </span>

              <span>
                Filter Cases
              </span>

              <span className="filter-dot"></span>

            </button>

          </div>


          {/* New Patient */}

          <button
            type="button"
            className="new-patient-button"
          >

            <span className="new-patient-plus">
              +
            </span>

            <span>
              New Patient Intake
            </span>

            <span className="new-patient-arrow">
              ⌄
            </span>

          </button>

        </div>

      </header>
    </>
  );
}