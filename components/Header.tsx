import Link from 'next/link';

const Header = () => (
  <header className="text-center sm:flex bg-green-900 py-3 px-3 sm:px-16 md:px-30 lg:px-40 xl:px-60 sm:justify-between">
    <div className="mb-1 space-y-1 sm:text-left">
      <h1 className="text-2xl">🦠 Poly Plague</h1>
      <p className="font-light">COVID @ Cal Poly</p>
    </div>
    <nav className="sm:text-right space-y-1">
      <div>
        <a
          href="https://coronavirus.calpoly.edu/dashboard"
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          Cal Poly Coronavirus Campus Dashboard&nbsp;🔗
        </a>
      </div>
      <div className="space-x-6">
        <Link href="/">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>
            <span className="sm:hidden hover:underline">📺 dashboard</span>
            <span className="hidden sm:inline-block hover:underline">dashboard 📺</span>
          </a>
        </Link>
        <Link href="/daily">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>
            <span className="sm:hidden hover:underline">🗄 daily data</span>
            <span className="hidden sm:inline-block hover:underline">daily data 🗄</span>
          </a>
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;
