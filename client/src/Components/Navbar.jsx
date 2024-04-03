import React from 'react'
import NavItem from './NavItem';

const Navbar = () => {
  return (
        <nav className="bg-blue-400 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white font-bold text-lg">Logo</div>
            <div className="flex space-x-4">
              <NavItem title="Home 🏡" />
              <NavItem title="Trends 📈" />
              <NavItem title="Tools 🔧" />
              <NavItem title="Blogs 📰" />
              <NavItem title="Quiz 🤔" />
            </div>
            <div>
              <button 
              className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">
                Login / Register
              </button>
            </div>
          </div>
        </nav>
  );
}

export default Navbar