'use client'

import Title from '@/components/title/title'
import styles from './page.module.css'
import { useRef } from 'react'

export default function Home() {
  const afterTitleRef = useRef(null);

  return (
    <main className={styles.main}>
      <Title afterTitleRef={afterTitleRef}/>
      <div ref={afterTitleRef}>

      </div>
      {[...Array(50).keys()].map(i => <p key={i}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>)}
    </main>
  )
}
