import { HeaderFooterProps } from '@/types/Questions';
import Footer from './Footer';
import React from 'react';
import { Header } from './Header/Header';

function HeaderFooter({ children }: HeaderFooterProps) {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default HeaderFooter;
