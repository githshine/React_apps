import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../../context';

const Navbar = () => {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  return (
    <nav className="flex items-center justify-between py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold">
        <NavLink
          to={'/'}
          className={({ isActive }) =>
            !isActive
              ? 'text-black hover:text-gray-700 duration-300  p-5 '
              : 'text-black hover:text-gray-700 duration-300  p-5 rounded-2xl'
          }
        >
          Food Recipe
        </NavLink>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          placeholder="Enter receipt here..."
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
          onChange={(event) => setSearchParam(event.target.value)}
        ></input>
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              !isActive
                ? 'text-black hover:text-gray-700 duration-300  p-5 '
                : 'text-black hover:text-gray-700 duration-300 bg-amber-100 p-5 rounded-2xl'
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/favorites'}
            className={({ isActive }) =>
              !isActive
                ? 'text-black hover:text-gray-700 duration-300  p-5 '
                : 'text-black hover:text-gray-700 duration-300 bg-amber-100 p-5 rounded-2xl'
            }
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
