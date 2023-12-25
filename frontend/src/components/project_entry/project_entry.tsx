import { Fragment, useMemo } from 'react';
import styles from './project_entry.module.css'
import { MDXRemote } from 'next-mdx-remote/rsc';

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
  const localeDateString = (date: Date) => {
    return date.toLocaleDateString('de-CH', {
      month: '2-digit',
      year: 'numeric'
    })
  };

  const renderDate = useMemo(() => {
    if (date_to) {
      if (localeDateString(date_from) !== localeDateString(date_to))
        return <i>{localeDateString(date_from)} - {localeDateString(date_to)}</i>;
      else
        return <i>{localeDateString(date_from)}</i>;
    } else {
      return <i>{localeDateString(date_from)} - ...</i>;
    }
  }, [date_from, date_to]);

  const renderLinks = useMemo(() => {
    return project_links.data
    .map(data => ({
      ...data,
      attributes: {
        ...data.attributes,
        href: (new RegExp('^(?:[a-z+]+:)?//', 'i')).test(data.attributes.href) ?
          data.attributes.href :
          process.env.API_BASE_URL + data.attributes.href
      }
    }))
    .map(({id, attributes}, i) => <Fragment key={id}>
      <a href={attributes.href} target='_blank'>{attributes.title}</a>
      {i < project_links.data.length - 1 && '・'}
    </Fragment>)
  }, [project_links]);

  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      {renderDate}
      {description && <MDXRemote 
        source={description} />}
      {renderLinks}
    </div>
  );
}