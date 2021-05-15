import Link from 'next/link'
import Head from 'next/head'

export default function Layout({
  children,
  title = 'This is the default title',
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className='netar-l-header'>

        <div className='netar-l-header__logo'>
          <img alt='Logo'></img>
        </div>

        <nav className='netar-l-header__nav'>
          <Link href="/">
            <a className='netar-l-header__nav-a'>Home</a>
          </Link>{' '}

          <Link href="/about-us">
            <a className='netar-l-header__nav-a'>About</a>
          </Link>{' '}

          <Link href="/people">
            <a className='netar-l-header__nav-a'>People</a>
          </Link>
        </nav>
      </header>
      <div className='netar-l-body'>
        {children}
      </div>
      <footer className='netar-l-footer'>{'I`m here to stay'}</footer>
    </div>
  )
}