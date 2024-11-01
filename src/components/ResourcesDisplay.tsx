import { ResourcesDisplayPropsType, ResourceType } from "@/types";
import ResourceCard from "./ResourceCard";

async function ResourcesDisplay({ resources }: {resources: ResourcesDisplayPropsType}) {
  console.log("resources display");
  return (
    <>
      <div className="text-xl mt-4 mb-4">Google Drive Resources</div>
      {resources.json.map((resource: ResourceType, i: number) => {
        const type: string = resource.inode_type;
        const name: string = resource.inode_path.path;
        const id: string = resource.resource_id;
        return (
          <ResourceCard
            token={resources.token}
            key={i}
            type={type}
            name={name}
            i={i}
            id={id}
          />
        );
      })}
    </>
  );
}

export default ResourcesDisplay;
