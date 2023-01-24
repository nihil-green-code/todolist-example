import React from 'react';
import { Link } from 'react-router-dom';
import { AppLayout } from '@/layouts/AppLayout';

export function Home() {
  return (
    <>
      <AppLayout>
        <h1>Home</h1>

        <div>
          <Link to='/users'>유저 목록</Link>
        </div>
      </AppLayout>
    </>
  );
}
