import { CardPropsType } from "@/types";
import { FileIcon } from "lucide-react";
import React from "react";

function FileCard({ name }: CardPropsType) {
  return (
    <div
      className="flex border-b-2 items-center"
    >
      <FileIcon />
      <div className="ml-2">{name}</div>
    </div>
  );
}

export default FileCard;
