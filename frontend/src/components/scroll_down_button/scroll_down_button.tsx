'use client'

import { RefObject, useCallback } from 'react'
import styles from './scroll_down_button.module.css'

export default function ScrollDownButton({
  scrollToRef
}: {
  scrollToRef: RefObject<Element>
}) {
  const scrollToTarget = useCallback(() => {
    if (!scrollToRef.current)
      return;

    scrollToRef.current.scrollIntoView({
      behavior: 'smooth'
    });
  }, [scrollToRef]);

  return (
    <div onClick={scrollToTarget} className={styles.container}>
      <span/>
      <span/>
      <span/>
    </div>
  )
}