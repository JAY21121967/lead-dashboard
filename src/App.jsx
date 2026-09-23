import { useMemo, useState } from "react";
import StatCard from "./components/StatCard.jsx";
import Toolbar from "./components/Toolbar.jsx";
import LeadsTable from "./components/LeadsTable.jsx";
import leadsData from "./data/leads.json";

export default function App() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [industryFilter, setIndustryFilter] = useState("all");

  const industries = useMemo(
    () => [...new Set(leadsData.map((l) => l.industry))].sort(),
    []
  );

  const filteredLeads = useMemo(() => {
    return leadsData.filter((lead) => {
      const matchesSearch =
        lead.business.toLowerCase().includes(search.toLowerCase()) ||
        lead.contact.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "all" ||
        (statusFilter === "verified" && lead.verified) ||
        (statusFilter === "pending" && !lead.verified);

      const matchesIndustry =
        industryFilter === "all" || lead.industry === industryFilter;

      return matchesSearch && matchesStatus && matchesIndustry;
    });
  }, [search, statusFilter, industryFilter]);

  const totalLeads = leadsData.length;
  const verifiedCount = leadsData.filter((l) => l.verified).length;
  const verifiedRate = Math.round((verifiedCount / totalLeads) * 100);
  const uniqueIndustries = industries.length;

  return (
    <div className="app">
      <header className="header">
        <div>
          <h1>Lead Generation Dashboard</h1>
          <p className="subtitle">
            Frontend demo for visualizing verified leads produced by an n8n automation
            pipeline (Google Maps search &rarr; Outscraper &rarr; NeverBounce verification).
          </p>
        </div>
        <span className="brand">VarahiAI</span>
      </header>

      <section className="stats-row">
        <StatCard label="Total Leads" value={totalLeads} accent="#1F3864" />
        <StatCard label="Verified" value={verifiedCount} accent="#2DD4BF" />
        <StatCard label="Verification Rate" value={`${verifiedRate}%`} accent="#7C3AED" />
        <StatCard label="Industries Covered" value={uniqueIndustries} accent="#F59E0B" />
      </section>

      <Toolbar
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        industryFilter={industryFilter}
        setIndustryFilter={setIndustryFilter}
        industries={industries}
      />

      <LeadsTable leads={filteredLeads} />

      <footer className="footer">
        Sample data only &mdash; built to demonstrate the frontend layer of an automated
        lead-generation workflow.
      </footer>
    </div>
  );
}
