export type ResourceType = {
  knowledge_base_id: string;
  created_at: string;
  modified_at: string;
  indexed_at: null | string;
  inode_type: string;
  resource_id: string;
  inode_path: { path: string };
  inode_id: null | string;
  content_hash: string;
  content_mime: string;
  size: number;
  status: string;
};

export type ResourceCardPropsType = {
  name: string;
  type: string;
  i: number;
  id: string;
  token: string | null;
};

export type CardPropsType = {
  name: string;
  handleClick: () => void;
};

export type ResourcesDisplayPropsType = {
  json: ResourceType[];
  token: string;
};
