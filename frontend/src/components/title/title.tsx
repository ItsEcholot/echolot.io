import styles from './title.module.css'
import stars_styles from './stars.module.css'
import ScrollDownButton from '../scroll_down_button/scroll_down_button'
import { RefObject } from 'react'

export default function Title({
  afterTitleRef
} : {
  afterTitleRef: RefObject<Element>
}) {
  return (
    <section className={styles.container}>
      <h1>Hello world</h1>
      
      <div id={stars_styles.stars1}></div>
      <div id={stars_styles.stars2}></div>
      <div id={stars_styles.stars3}></div>

      <ScrollDownButton scrollToRef={afterTitleRef}/>
    </section>
  )
}