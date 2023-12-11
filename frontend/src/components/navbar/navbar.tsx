'use client'

import styles from './navbar.module.css'
import ActiveLink from './active_link';
import { useCallback, useEffect, useRef, useState } from 'react';

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  const containerRef = useRef(null);
  const intersectionObserverCallback: IntersectionObserverCallback = useCallback(([el]) => {
    setIsSticky(el.intersectionRatio < 1);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionObserverCallback, {threshold: [1]});
    if (containerRef.current)
      observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [containerRef, intersectionObserverCallback]);

  return <nav ref={containerRef} className={`${styles.container} ${isSticky ? styles.sticky : ''}`}>
    <ActiveLink href='/'>Who?</ActiveLink>
    <ActiveLink href='/projects'>What?</ActiveLink>
    <ActiveLink href='/kb'>How?</ActiveLink>
  </nav>;
}