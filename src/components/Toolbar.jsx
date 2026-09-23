export default function Toolbar({ search, setSearch, statusFilter, setStatusFilter, industryFilter, setIndustryFilter, industries }) {
  return (
    <div className="toolbar">
      <input
        type="text"
        placeholder="Search business or contact..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="select-input">
        <option value="all">All statuses</option>
        <option value="verified">Verified only</option>
        <option value="pending">Pending only</option>
      </select>

      <select value={industryFilter} onChange={(e) => setIndustryFilter(e.target.value)} className="select-input">
        <option value="all">All industries</option>
        {industries.map((ind) => (
          <option key={ind} value={ind}>{ind}</option>
        ))}
      </select>
    </div>
  );
}
