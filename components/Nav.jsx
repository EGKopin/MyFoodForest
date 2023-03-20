import navStyles from '../styles/Nav.module.css'
import Link  from 'next/link';

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/perennials">Perennials</Link>
        </li>
        <li>
          <Link href="/annuals">Annuals</Link>
        </li>
        <li>
          <Link href="/addPlant">Add Plants</Link>
        </li>
        <li>
          <Link href="/timeline">Timeline</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;