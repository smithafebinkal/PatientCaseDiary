export default function MetricCard({ label, value, delta, accent = 'blue' }) {
  return (
    <article className={`metric-card metric-card--${accent}`}>
      <div>
        <p>{label}</p>
        <h3>{value}</h3>
      </div>
      <span>{delta}</span>
    </article>
  );
}
