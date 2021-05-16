import Head from 'next/head'
import Header from './Header'
import React, { Fragment, useEffect, useRef, useState } from 'react';

export default function Layout({
  children,
  title = 'This is the default title',
}) {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 100);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className='netar-l-body'>
        {children}
      </div>
      <footer className='netar-l-footer'>{'I`m here to stay'}</footer>
    </div>
  )
}