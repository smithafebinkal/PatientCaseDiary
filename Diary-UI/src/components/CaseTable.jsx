import { Link } from 'react-router-dom';

const priorityMap = {
  Critical: 'critical',
  High: 'high',
  Medium: 'medium',
  Low: 'low',
};

export default function CaseTable({ cases }) {
  return (
    <div className="case-table-wrap">
      <table className="case-table">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Department</th>
            <th>Attending</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Updated</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cases.map((item) => (
            <tr key={item.id}>
              <td>
                <div className="patient-cell">
                  <div className="avatar">{item.patientName.charAt(0)}</div>
                  <div>
                    <strong>{item.patientName}</strong>
                    <small>
                      {item.age} yrs • {item.mrn}
                    </small>
                  </div>
                </div>
              </td>
              <td>{item.department}</td>
              <td>{item.attending}</td>
              <td>
                <span className="status-badge status-badge--soft">{item.status}</span>
              </td>
              <td>
                <span className={`priority-pill priority-pill--${priorityMap[item.priority]}`}>
                  {item.priority}
                </span>
              </td>
              <td>{item.lastUpdated}</td>
              <td>
                <Link to={`/cases/${item.id}`} className="table-action">
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
