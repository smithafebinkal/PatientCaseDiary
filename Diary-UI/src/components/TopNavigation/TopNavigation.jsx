import './TopNavigation.scss';

export default function TopNavigation() {
  return (
    <>
      
      <nav className="top-navigation">

        {/* Breadcrumb */}
        <div className="breadcrumb">
          <span>Clinical</span>

          <span className="breadcrumb-arrow">›</span>

          <span>Diagnostics</span>

          <span className="breadcrumb-arrow">›</span>

          <strong>EHR Session</strong>
        </div>


        {/* Search */}
        <div className="global-search">
          <span className="global-search__icon">
            ⌕
          </span>

          <input
            type="text"
            placeholder="Search MRN, vitals, clinical records..."
          />
        </div>


        {/* Right actions */}
        <div className="navigation-actions">

          <div className="live-sync">
            <span className="live-sync__dot"></span>
            <span>Live Sync</span>
          </div>

          <button
            type="button"
            className="notification-btn"
            aria-label="Notifications"
          >
            🔔
          </button>

          <button
            type="button"
            className="profile-btn"
            aria-label="Profile"
          >
            <span className="profile-avatar">
              👤
            </span>
          </button>

        </div>

      </nav>
    </>
  );
}
