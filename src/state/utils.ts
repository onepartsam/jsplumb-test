import {
  Dictionary,
  flattenDeep,
  isPlainObject,
  keyBy,
  random,
  range,
  values
} from "lodash";
import {
  IClientNodeItem,
  IServiceNodeItem,
  IWorkflowLibraryItem,
  IWorkflowSection
} from "../objects/designer";

export const parseConfiguration = (
  configurationStr: string
): IServiceNodeItem[] => {
  let nodes: IServiceNodeItem[] = [];

  let configurationObj: any = null;
  try {
    configurationObj = JSON.parse(configurationStr);
  } catch (err) {}

  if (isPlainObject(configurationObj)) {
    nodes = flattenDeep(values(configurationObj));
  }

  const rect = document.getElementById("root").getBoundingClientRect();

  nodes.forEach((node) => {
    if (!node.position) {
      node.position = {
        left: random(0, rect.width - 100),
        top: random(0, rect.height - 100)
      };
    }

    if (!Array.isArray(node.inputs)) {
      node.inputs = [];
    }
  });

  return nodes;
};

const flattenLibraries = (
  sections: IWorkflowSection[]
): IWorkflowLibraryItem[] => {
  return flattenDeep(sections.map((x) => x.Operations));
};

const getEndPointUuids = (
  key: string,
  type: "ip" | "op",
  _count: string | number
): string[] => {
  let count = parseInt(_count as string);
  return range(0, count).map((x) => {
    if (count === 1) {
      return `${type}_${key}`;
    } else if (count === 2) {
      return `${type}_${[true, false][x % 2]}_${key}`;
    } else {
      return `${type}_${x}_${key}`;
    }
  });
};

const getClientNodeItem = (
  nodeItem: IServiceNodeItem,
  library: IWorkflowLibraryItem
): IClientNodeItem => {
  return {
    key: nodeItem.key,
    //name: nodeItem.name,
    //description: nodeItem.description || library.Description,
    type: nodeItem.type,
    position: nodeItem.position,
    inputs: getEndPointUuids(nodeItem.key, "ip", library.NoInputs),
    configuration: {
      ...nodeItem.config,
      name: nodeItem.name,
      description: nodeItem.description
    },
    icon: library.Icon,
    outputs: getEndPointUuids(nodeItem.key, "op", library.NoOutputs)
  };
};

export const getClientNodesAndConnections = (
  nodeItems: IServiceNodeItem[],
  sections: IWorkflowSection[]
): [Dictionary<IClientNodeItem>, Array<[string, string]>] => {
  if (!Array.isArray(nodeItems) || !Array.isArray(sections)) {
    return [{}, []];
  }

  let libraries = flattenLibraries(sections);
  let clientItems = nodeItems.map((x) =>
    getClientNodeItem(
      x,
      libraries.find((l) => l.Type === x.type)
    )
  );

  //get connections from client and service node items
  let connections: Array<[string, string]> = [];
  clientItems.forEach((x) => {
    let item = nodeItems.find((n) => n.key === x.key);
    item.inputs.forEach((sourceUuid, index) => {
      //TODO fix
      let targetUuid = x.inputs[index] ? x.inputs[index] : x.inputs[0];
      //sourceUuid: "op_true_7m1z0zr" or "op_dvox94y"
      //targetUuid: "ip_false_a0fujwc" or "ip_8nork9p"
      connections.push([sourceUuid, targetUuid]);
    });
  });

  return [keyBy(clientItems, (x) => x.key), connections];
};
