import { Fragment, useMemo } from 'react';
import styles from './project_entry.module.css'

export default function ProjectEntry({
  title,
  date_from,
  date_to,
  description,
  project_links
}: {
  title: string,
  date_from: Date,
  date_to?: Date,
  description?: string,
  project_links: { 
    data: [{
      id: number,
      attributes: {
        title: string,
        href: string
      }
    }]
  }
}) {
  const renderDate = useMemo(() => {
    if (date_to) {
      if (date_to.getMonth() !== date_from.getMonth() && date_to.getFullYear() !== date_from.getFullYear())
        return <i>{date_from.getMonth()}.{date_from.getFullYear()} - {date_to.getMonth()}.{date_to.getFullYear()}</i>;
      else
        return <i>{date_from.getMonth()}.{date_from.getFullYear()}</i>;
    } else {
      return <i>{date_from.getMonth()}.{date_from.getFullYear()} - ...</i>;
    }
  }, [date_to, date_from]);

  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      {renderDate}
      <br/>
      {description}
      <br/>
      {project_links.data.map(({id, attributes}, i) => <Fragment key={id}>
        <a href={attributes.href}>{attributes.title}</a>
        {i < project_links.data.length - 1 && '・'}
      </Fragment>)}
    </div>
  );
}