import styles from './title.module.css'
import stars_styles from './stars.module.css'
import ScrollDownButton from '../../components/scroll_down_button/scroll_down_button'
import { backendGet } from '@/service/backend'

export default async function Title() {
  const attributes = (await backendGet('/homepage'))?.data?.attributes;

  return (
    <section className={styles.container}>
      <hgroup>
        <h1>{attributes.title}</h1>
        <h3>{attributes.subtitle}</h3>
        <h3>Currently: {attributes.currently_doing}</h3>
      </hgroup>
    
      <div id={stars_styles.stars1}></div>
      <div id={stars_styles.stars2}></div>
      <div id={stars_styles.stars3}></div>

      <ScrollDownButton/>
    </section>
  )
}