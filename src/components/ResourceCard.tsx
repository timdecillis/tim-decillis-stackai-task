"use client";
import { fetchSingleResource } from "@/app/page.server";
import { ResourceCardPropsType } from "@/types";
import FolderCard from "./FolderCard";
import FileCard from "./FileCard";
import ResourcesDisplay from "./ResourcesDisplay";

function ResourceCard({ name, type, id, token }: ResourceCardPropsType) {
  let info;
  const handleClick = async () => {
    const response = await fetchSingleResource(id, token);
    info = response;
  };
  return (
    <div onClick={handleClick} className="flex border-b-2 items-center">
      {type === "directory" ? (
        <FolderCard handleClick={handleClick} name={name} />
      ) : (
        <FileCard handleClick={handleClick} name={name} />
      )}
      {info && <ResourcesDisplay resources={info} />}
    </div>
  );
}

export default ResourceCard;
