module.exports = { filterJobs: (jobs, tag) => jobs.filter(j => j.tags.includes(tag)) };
