import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Footer from './Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';


export default function WebsiteContainer() {
    const [currentPage, setCurrentPage] = useState('About');
  
    const renderPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      // return <Contact />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div class="site">
        {/* We are passing the currentPage from state and the function to update it */}
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
        <Footer/>
      </div>
      
    );
  }