import {useState} from 'react'
import {close, logo, menu} from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return(
    <nav className='flex items-center justify-between'>
      <img src={logo} alt="logo"
        className='w-[100px] cursor-pointer'
      />

      <ul className='hidden text-white space-x-12 md:flex'>
        {navLinks.map((nav) => (
          <li key={nav.id}
            className='flex items-center hover:text-gray-500'
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="md:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} alt="menu"
          className='w-[28px] h-[28px] cursor-pointer object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />

        <div className={`${toggle ? 'flex' : 'hidden'} bg-black-gradient absolute top-20 right-0 p-16 mx-6 my-2 min-w-[180px] rounded-xl z-10 sidebar`}>
          <ul className='text-white flex flex-col flex-1 justify-center space-y-6 md:flex'>
            {navLinks.map((nav) => (
              <li key={nav.id}
                className='flex justify-center hover:text-gray-500'
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>


    </nav>
)};

export default Navbar;
