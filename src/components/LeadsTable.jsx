export default function LeadsTable({ leads }) {
  if (leads.length === 0) {
    return <div className="empty-state">No leads match your search/filter.</div>;
  }

  return (
    <div className="table-wrap">
      <table className="leads-table">
        <thead>
          <tr>
            <th>Business</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Industry</th>
            <th>Source</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td className="business-cell">{lead.business}</td>
              <td>{lead.contact}</td>
              <td>{lead.email}</td>
              <td>{lead.phone}</td>
              <td>{lead.industry}</td>
              <td>{lead.source}</td>
              <td>
                <span className={`badge ${lead.verified ? "badge-verified" : "badge-pending"}`}>
                  {lead.verified ? "Verified" : "Pending"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
