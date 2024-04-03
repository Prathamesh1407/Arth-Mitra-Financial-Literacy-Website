import React from 'react'

const NavItem = ({title}) => {
    return (
        <div className="text-white">
          <a href="#" className="hover:text-gray-300">{title}</a>
        </div>
    );
}

export default NavItem