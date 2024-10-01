import Footer from './Footer';
import Header from './Header';

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
