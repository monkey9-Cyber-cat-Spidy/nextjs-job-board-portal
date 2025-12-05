'use client';

import React, { useState } from 'react';
import { Briefcase, MapPin, Building2, Search, Filter, CheckCircle2, ArrowRight } from 'lucide-react';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  tags: string[];
  salary: string;
  posted: string;
}

const JOBS: Job[] = [
  {
    id: '1',
    title: 'Junior Full-Stack Developer',
    company: 'Valeff Labs',
    location: 'Gurugram, India (On-site)',
    type: 'Full-time',
    tags: ['Next.js', 'React.js', 'Node.js', 'Supabase', 'PostgreSQL', 'VPS'],
    salary: '₹6,00,000 - ₹10,00,000',
    posted: 'Featured'
  },
  {
    id: '2',
    title: 'Full-Stack Developer Intern',
    company: 'Clientura Web Systems',
    location: 'Remote',
    type: 'Internship',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Docker', 'Tailwind'],
    salary: '₹30,000 / month',
    posted: '1 day ago'
  },
  {
    id: '3',
    title: 'Backend Systems Engineer',
    company: 'Distributed Core Practice',
    location: 'Hybrid',
    type: 'Full-time',
    tags: ['Node.js', 'Express', 'PostgreSQL CDC', 'Redis', 'PM2'],
    salary: '₹12,00,000 - ₹18,00,000',
    posted: '3 days ago'
  }
];

export default function JobBoardHomePage() {
  const [query, setQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [appliedId, setAppliedId] = useState<string | null>(null);

  const tags = ['All', 'Next.js', 'React.js', 'Node.js', 'PostgreSQL', 'Supabase', 'VPS'];

  const filteredJobs = JOBS.filter((job) => {
    const matchesQuery = job.title.toLowerCase().includes(query.toLowerCase()) || job.company.toLowerCase().includes(query.toLowerCase());
    const matchesTag = selectedTag === 'All' || job.tags.includes(selectedTag);
    return matchesQuery && matchesTag;
  });

  const handleApply = (id: string) => {
    setAppliedId(id);
    setTimeout(() => setAppliedId(null), 2500);
  };

  return (
    <div className="min-h-full flex flex-col bg-slate-950 text-slate-100">
      {/* Top Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 sticky top-0 z-50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-500 flex items-center justify-center font-bold text-slate-950 shadow-md">
              <Briefcase className="w-5 h-5 text-slate-950" />
            </div>
            <span className="font-bold text-lg text-white">NextJob Portal</span>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition shadow-md">
              Post a Role
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 flex-1 space-y-8">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering & Full-Stack Careers
          </h1>
          <p className="text-slate-400 text-sm">
            Curated opportunities for Next.js, Node.js, and PostgreSQL specialists.
          </p>
        </div>

        {/* Search Bar & Tag Filters */}
        <div className="p-4 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-4 shadow-xl">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by job title or company (e.g. Valeff Labs)..."
              className="w-full bg-slate-950 border border-slate-700/80 rounded-xl pl-12 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80">
            <span className="text-xs font-semibold text-slate-400 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filters:
            </span>
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTag(t)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                  selectedTag === t
                    ? 'bg-sky-500 text-slate-950'
                    : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Job Listings Feed */}
        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-slate-700 transition flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="font-bold text-lg text-white">{job.title}</h3>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    {job.type}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1 font-semibold text-slate-300">
                    <Building2 className="w-3.5 h-3.5 text-sky-400" /> {job.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" /> {job.location}
                  </span>
                  <span className="font-mono text-emerald-400 font-semibold">{job.salary}</span>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {job.tags.map((tg, i) => (
                    <span key={i} className="text-[11px] px-2.5 py-0.5 rounded bg-slate-800 text-slate-400 font-medium">
                      {tg}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                <button
                  onClick={() => handleApply(job.id)}
                  className={`w-full md:w-auto px-5 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition ${
                    appliedId === job.id
                      ? 'bg-emerald-500 text-slate-950'
                      : 'bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-md'
                  }`}
                >
                  {appliedId === job.id ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" /> Application Submitted
                    </>
                  ) : (
                    <>
                      Quick Apply <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} NextJob Portal. Built with Next.js 15, PostgreSQL, and Supabase RLS.
      </footer>
    </div>
  );
}
