import ProjectEntry from "@/components/project_entry/project_entry";
import { backendGet } from "@/service/backend";

const requestQueryString = [
  'populate[0]=project_links',
  'sort[0]=date_from:desc',
  'sort[1]=date_to:desc',
  'filters[importance][$eq]=high'
].join('&');

export default async function Projects() {
  const data = (await backendGet(`/projects?${requestQueryString}`, 3600)).data;

  return (
    <section>
      <h2>Projects</h2>
      {data.map(({id, attributes}: {id: number, attributes: any}) => <ProjectEntry
        key={id}
        title={attributes.title}
        date_from={new Date(Date.parse(attributes.date_from))}
        date_to={attributes.date_to ? new Date(Date.parse(attributes.date_to)) : undefined}
        description={attributes.description}
        project_links={attributes.project_links}/>)}
    </section>
  );
}