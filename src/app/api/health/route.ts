import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    service: 'nextjs-job-board-portal',
    timestamp: new Date().toISOString()
  });
}
