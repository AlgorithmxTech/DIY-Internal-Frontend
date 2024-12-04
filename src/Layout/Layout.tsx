import React, { ReactNode } from 'react';
import NavBar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='w-full mx-auto'>
    <div className='w-full'>
    <NavBar/>
    </div>
    
      <main className='min-h-screen'>
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;

