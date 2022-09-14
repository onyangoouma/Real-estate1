import React from 'react';

// import link
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        
        <div className='flex items-center gap-6'>
          <Link className='hover:text-violet-900 transition' to='/'>
        
          </Link>
          
        </div>
      </div>
    </header>
  );
};

export default Header;