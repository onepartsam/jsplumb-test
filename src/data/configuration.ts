import { Dictionary } from "lodash";
import { IClientNodeItem } from "../objects/designer";
import {
  getClientNodesAndConnections,
  parseConfiguration
} from "../state/utils";
import { workflowLibraries } from "./libraries";

const ConfigurationString = `
{
  "sources":[
     {
        "name":"TagSource",
        "key":"TagSource",
        "type":"IN_MEMORY_SRC",
        "config":{
           "tags":[
              "CGR_V_WIN",
              "CGR_V_WIN_Original"
           ]
        }
     }
  ],
  "processors":[
     {
        "name":"Windspeedformula",
        "key":"Windspeedformula",
        "type":"MUTATOR",
        "inputs":[
           "op_login"
        ],
        "config":{
           "equations":[
              {
                 "variable":"CGR_V_WIN",
                 "equation":"CGR_V_WIN_Original * 0.99 + 0.361"
              }
           ]
        }
     }
  ],
  "sinks":[
     {
        "name":"liveSink",
        "key":"liveSink",
        "type":"IN_MEMORY_SINK",
        "inputs":[
           "op_Windspeedformula"
        ],
        "config":{
           "tags":[
              "CGR_V_WIN"
           ]
        }
     }
  ]
}
`;

export let nodes: Dictionary<IClientNodeItem> = {};
export let connections: Array<[string, string]> = [];

let configurationObj = parseConfiguration(ConfigurationString);

[nodes, connections] = getClientNodesAndConnections(
  configurationObj,
  workflowLibraries
);
