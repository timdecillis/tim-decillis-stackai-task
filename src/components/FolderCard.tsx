import { CardPropsType } from "@/types";
import { FolderIcon } from "lucide-react";
import React from "react";

function FolderCard({ name, handleClick }: CardPropsType) {
  return (
    <div
      onClick={handleClick}
      className="flex border-b-2 items-center hover:cursor-pointer"
    >
      <FolderIcon />
      <div className="ml-2">{name}</div>
    </div>
  );
}

export default FolderCard;
