import ResourcesDisplay from "@/components/ResourcesDisplay";
import { fetchResources } from "./page.server";

export default async function Home() {
  const resources = await fetchResources();
  const token = resources.token || "";
  return (
    <div className="p-12 border-gray-500 border-solid border-2 m-8">
      <ResourcesDisplay resources={{ ...resources, token }} />
    </div>
  );
}
