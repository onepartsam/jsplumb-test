import { NodeGroupType } from "./enums";

export interface IWorkflowLibraryItem {
  Id: number;
  Name: string;
  Type: string;
  Description: string;
  Icon: string;
  NoInputs: number;
  NoOutputs: number;
  IsActive: boolean;
}

export interface IWorkflowSection {
  Id: number;
  Name: NodeGroupType;
  Description: string;
  Operations: IWorkflowLibraryItem[];
}

interface INodeItem {
  key: string;
  type: string;
  position: { left: number; top: number };
  inputs: string[];
}

export interface IBaseConfiguration {
  name: string;
  description: string;
}

export interface IClientNodeItem extends INodeItem {
  icon: string;
  outputs: string[];
  configuration: IBaseConfiguration;
}

export interface IServiceNodeItem extends INodeItem {
  name: string;
  description: string;
  config: Omit<IBaseConfiguration, "name" | "description">;
}
