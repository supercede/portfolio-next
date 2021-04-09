import { useState } from 'react';

export default function Nav() {
  const [active, setActive] = useState(false);
  const handleClick = (e) => {
    if (!active) {
      e.target.classList.add('open');
    } else {
      e.target.classList.remove('open');
    }
    console.log(e.target.classList);
    setActive(!active);
  };

  return (
    <nav className='fixed top-0 left-0 w-full h-20 font-mono text-white bg-blackish z-50'>
      <div className='flex justify-between items-center max-w-7xl m-auto px-4 h-inherit'>
        <p className='brand_logo'>
          <a href='./'>Supercede</a>
        </p>
        <div className='menu-btn top-8 z-50 sm:hidden h-4 w-7 cursor-pointer ease-in-out transition-all duration-500'>
          <span
            className='menu-btn__burger absolute right-8 top-10 w-7 h-1 bg-white ease-in-out transition-all duration-500'
            onClick={handleClick}
          ></span>
        </div>
        <ul
          className={`items-center list-none sm:flex fixed right-0 overflow-hidden pr-4 justify-center ${
            active
              ? 'top-0 flex h-screen flex-col flex-wrap bg-nav translate-y-0 ease-in-out transition-all duration-500'
              : 'hidden translate-y-full'
          }`}
        >
          <li
            className={`nav-link m-8 ${
              active
                ? 'inline-block text-2xl uppercase translate-x-0 font-light'
                : ''
            }`}
          >
            <a
              href='#about'
              className='text-opacity-70 text-white hover:text-opacity-100'
            >
              About
            </a>
          </li>
          <li
            className={`nav-link m-8 ${
              active
                ? 'inline-block text-2xl uppercase translate-x-0 font-light'
                : ''
            }`}
          >
            <a
              href='#projects'
              className='text-opacity-70 text-white hover:text-opacity-100'
            >
              Projects
            </a>
          </li>
          <li
            className={`nav-link m-8 ${
              active
                ? 'inline-block text-2xl uppercase translate-x-0 font-light'
                : ''
            }`}
          >
            <a
              className='text-opacity-70 text-white hover:text-opacity-100'
              href='https://medium.com/@mahyor.sam'
              target='_blank'
              rel='noopener noreferrer'
            >
              Blog
            </a>
          </li>
          <li
            className={`nav-link m-8 ${
              active
                ? 'inline-block text-2xl uppercase translate-x-0 font-light'
                : ''
            }`}
          >
            <a
              href='#contact'
              className='text-opacity-70 text-secondary hover:text-opacity-100'
            >
              <button
                className='py-3 font-sans px-0 outline-none min-w-btn text-base border-secondary border hover:text-white hover:transition-all hover:ease-linear hover:duration-300'
                id='contact-btn'
              >
                Contact
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
