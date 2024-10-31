"use client";
import { fetchSingleResource } from "@/app/page.server";
import { ResourceCardPropsType } from "@/types";
import React from "react";

function ResourceCard({ name, type, id }: ResourceCardPropsType) {
  const handleClick = async () => {
    const info = await fetchSingleResource(id);
    console.log("INFO:", info);
  };
  return (
    <div
      onClick={handleClick}
      className="flex border-b-2 items-center hover:cursor-pointer"
    >
      {type === "directory" ? (
        <>
          <i className="fa-regular fa-folder"></i>
          <div className="ml-2">{name}</div>
        </>
      ) : (
        <>
          <i className="fa-regular fa-file"></i>
          <div className="ml-2">{name}</div>
        </>
      )}
    </div>
  );
}

export default ResourceCard;
