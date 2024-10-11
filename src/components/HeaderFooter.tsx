import { HeaderFooterProps } from '@/types/Questions';
import Footer from './Footer';
import Header from './Header';
import React from 'react';

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
