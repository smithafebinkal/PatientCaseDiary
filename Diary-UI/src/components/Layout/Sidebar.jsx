const sidebarItems = [
  { label: 'Intake Workspace', icon: '▣', active: false },
  { label: 'Patient Cases', icon: '◫', active: true },
  { label: 'Clinical Insights', icon: '✦', active: false },
  { label: 'Settings', icon: '⚙', active: false },
];

export default function Sidebar() {
  return (
    <aside className="sidebar-shell">
      <div className="sidebar-header">
        <div className="brand-mark">+</div>
        <div className="brand-text">
          <span className="brand-name">TOTAL CASE DIARY BOOK</span>
          <span className="brand-subtitle">CLINICAL</span>
        </div>
      </div>

      <nav className="sidebar-nav" aria-label="Sidebar navigation">
        {sidebarItems.map((item) => (
          <button
            key={item.label}
            type="button"
            className={item.active ? 'sidebar-item active' : 'sidebar-item'}
          >
            <span className="sidebar-item__icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-footer__title">Attending Mode</div>
        <div className="sidebar-footer__row">
          <span className="status-dot status-dot--active" />
          <span>Active</span>
        </div>

        <div className="sidebar-footer__meta">
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
