export default function StatCard({ label, value, accent }) {
  return (
    <div className="stat-card">
      <span className="stat-value" style={{ color: accent }}>{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}
