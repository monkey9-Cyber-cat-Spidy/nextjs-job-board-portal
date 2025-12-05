import { NextResponse } from 'next/server';

export async function GET() {
  const jobs = [
    {
      id: '1',
      title: 'Junior Full-Stack Developer',
      company: 'Valeff Labs',
      location: 'Gurugram, India (On-site)',
      type: 'Full-time',
      tags: ['Next.js', 'React.js', 'Node.js', 'Supabase', 'PostgreSQL', 'VPS Hosting'],
      salary: '₹6L - ₹10L',
      posted: '2 days ago'
    },
    {
      id: '2',
      title: 'Systems & Backend Engineer',
      company: 'Clientura',
      location: 'Remote',
      type: 'Full-time',
      tags: ['Node.js', 'PostgreSQL', 'Docker', 'Redis', 'Express'],
      salary: '₹8L - ₹14L',
      posted: '4 days ago'
    }
  ];

  return NextResponse.json(jobs);
}
