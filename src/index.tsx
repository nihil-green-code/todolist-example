import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '@/styles/tailwind.css';

import { QueryClientProvider, QueryClient } from 'react-query';
import { Home } from './pages/Home';
import { UserDetail } from './pages/user/UserDetail';
import { UserList } from './pages/user/UserList';

const queryClient = new QueryClient();

const QueryApp = (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<UserList />} />
        <Route path='/user/:id' element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

const root = createRoot(document.querySelector('#root'));
root.render(QueryApp);
