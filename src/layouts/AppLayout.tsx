import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import {
  Footer, Header, Main, Nav
} from '@/components/Layout';

interface ILayout {
  children: React.ReactNode;
}

export function AppLayout({ children, }: ILayout) {
  return (
    <>
      <Header />
      <Nav />

      <Main>
        {children}
      </Main>

      <Footer />

      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </>
  );
}
