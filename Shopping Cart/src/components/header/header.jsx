import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div>
        <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
          <Link to={'/'} className="ml-5">
            <h1 className="text-red-900 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
              React Redux Shopping Cart
            </h1>
          </Link>
          <ul className="list-none flex items-center space-x-6 text-gray-800 font-semibold">
            <Link to={'/'}>
              <li>Home</li>
            </Link>

            <Link to={'/cart'}>
              {' '}
              <li>Cart</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
