import styles from './navbar.module.css'
import ActiveLink from './active_link';

export default function Navbar() {
  return <nav className={styles.container}>
    <ActiveLink href='/'>Who?</ActiveLink>
    <ActiveLink href='/projects'>What?</ActiveLink>
    <ActiveLink href='/kb'>How?</ActiveLink>
  </nav>;
}