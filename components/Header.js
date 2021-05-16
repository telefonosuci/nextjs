import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react';

export default function Header() {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      if(window.scrollY > ref.current.offsetHeight && window.scrollY < 1000)
        setSticky(true)
      else
        setSticky(false)
      console.log('Document scroll Top: ', window.scrollY);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => {
        document.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
      <header className='netar-l-header'>
        <div className='netar-l-header__top' ref={ref}>
          <div className='netar-l-header__logo'>
            <img alt='Logo'></img>
          </div>
        </div>
        <div className={`netar-l-header__sticky netar-l-header__sticky${isSticky ? '--fixed' : ''}`} >
          <nav className='netar-l-header__nav'>
            <Link href='/'>
              <a className='netar-l-header__nav-a'>Home</a>
            </Link>

            <Link href='/about-us'>
              <a className='netar-l-header__nav-a'>About</a>
            </Link>

            <Link href='/people'>
              <a className='netar-l-header__nav-a'>People</a>
            </Link>
          </nav>
        </div>
      </header>
  )
}