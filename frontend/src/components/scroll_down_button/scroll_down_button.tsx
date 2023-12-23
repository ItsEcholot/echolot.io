'use client'

import { RefObject, useCallback } from 'react'
import styles from './scroll_down_button.module.css'

export default function ScrollDownButton({
  scrollToRef
}: {
  scrollToRef?: RefObject<Element>
}) {
  const scrollToTarget = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const scrollOptions: ScrollIntoViewOptions = {
      behavior: 'smooth'
    };

    if (scrollToRef?.current) {
      scrollToRef.current.scrollIntoView(scrollOptions);
    } else {
      event.currentTarget
        .closest('section')
        ?.nextElementSibling
        ?.scrollIntoView(scrollOptions);
    }
  }, [scrollToRef]);

  return (
    <div onClick={scrollToTarget} className={styles.container}>
      <span/>
      <span/>
      <span/>
    </div>
  )
}