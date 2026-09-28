export default function PatientCard({ patient }) {
  return (
    <article className="patient-card">
      <div className="patient-card__header">
        <div>
          <p className="patient-card__name">{patient.name}</p>
          <small>
            {patient.age} yrs • {patient.room}
          </small>
        </div>
        <span className={`status-pill status-pill--${patient.risk.toLowerCase()}`}>
          {patient.risk}
        </span>
      </div>

      <dl className="patient-card__meta">
        <div>
          <dt>Condition</dt>
          <dd>{patient.condition}</dd>
        </div>
        <div>
          <dt>Doctor</dt>
          <dd>{patient.doctor}</dd>
        </div>
      </dl>

      <div className="patient-card__footer">
        <span>{patient.status}</span>
        <button type="button">Open chart</button>
      </div>
    </article>
  );
}
