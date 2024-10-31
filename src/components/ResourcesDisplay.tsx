import { fetchResources } from "@/app/page.server";
import { ResourceType } from "@/types";
import ResourceCard from "./ResourceCard";

async function ResourceDis() {
  const resources = await fetchResources();

  return (
    <>
      <div className="text-xl mt-4 mb-4">Google Drive Resources</div>
      {resources.map((resource: ResourceType, i: number) => {
        const type: string = resource.inode_type;
        const name: string = resource.inode_path.path;
        const id: string = resource.resource_id;
        return <ResourceCard key={i} type={type} name={name} i={i} id={id}/>;
      })}
    </>
  );
}

export default ResourceDis;
