import Link from 'next/link'
import ToggleTheme from './ToggleTheme'
import { useRouter } from 'next/router'
import Image from 'next/image'
import avatar from 'public/avatar.png'
import styles from '../styles/header.module.scss'

const links = [
  { name: 'Home', path: '/' },
  { name: 'Blog', path: '/blog' },
  { name: 'Projects', path: '/projects' },
]

const NavBar = (): JSX.Element => {
  const router = useRouter()
  const pathname = router.pathname.split('/[')[0] // active paths on dynamic subpages
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/">
            <a className={styles.logo}>
              <Image src={avatar} alt="Sai Shanmukh" layout="fixed" width="35" height="50" priority placeholder="blur" />
            </a>
          </Link>
          <nav className={styles.nav}>
            <ol className={styles.links}>
              {links.map(({ name, path }) => (
                <li key={path} className={pathname === path ? styles.linkActive : styles.link}>
                  <Link href={path}>
                    <a>{name}</a>
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
          <ToggleTheme />
        </div>
      </header>
      <div className={styles.spacer} />
    </>
  )
}

export default NavBar
