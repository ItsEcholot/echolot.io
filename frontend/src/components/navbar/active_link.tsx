import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './navbar.module.css'

export default function ActiveLink({
  children,
  ...linkProps
 }: { children: React.ReactNode } & LinkProps) {
  const pathName = usePathname();
  const { href } = linkProps;
  
  const isActive = pathName === href;

  return <Link {...linkProps} className={isActive ? `${styles.linkActive} ${styles.link}` : styles.link}> 
    {children}
  </Link>;
};