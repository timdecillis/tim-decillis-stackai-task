import { fetchResources } from "@/app/page.server";

async function Resources() {
  const resources = await fetchResources();

  return (
    <>
      <div>Resources</div>
      {resources.map((resource, i) => {
        const type = resource.inode_type;
        const name = resource.inode_path.path;
        return (
          <div key={i}>
            {i + 1}
            <div>{name}</div>
            <div>{type}</div>
          </div>
        );
      })}
    </>
  );
}

export default Resources;
