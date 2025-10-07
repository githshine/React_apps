import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div>
        <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
          <NavLink to={'/'} className="ml-5">
            <h1 className="text-red-900 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
              React Redux Shopping Cart
            </h1>
          </NavLink>
          <ul className="list-none flex items-center space-x-6 text-gray-800 font-semibold">
            <NavLink
              to={'/'}
              className={({ isActive }) =>
                `${isActive ? 'bg-amber-200 p-4 rounded-lg' : 'p-4'} `
              }
            >
              <li>Home</li>
            </NavLink>

            <NavLink
              to={'/cart'}
              className={({ isActive }) =>
                `${isActive ? 'bg-amber-200 p-4 rounded-lg' : 'p-4'} `
              }
            >
              {' '}
              <li>Cart</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
