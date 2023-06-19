import * as React from "react";
import {
  BrowserJsPlumbInstance,
  Connection,
  newInstance,
  AnchorId
} from "@jsplumb/community";
import {
  defaultOptions,
  inputAnchors,
  outputAnchors,
  sourceEndpoint,
  targetEndpoint
} from "./options";
import { IClientNodeItem } from "../objects/designer";
import { Dictionary, isEqual } from "lodash";
import { IAnchor } from "../objects/index";
import { nodes, connections } from "../data/configuration";

/**
 * Custom hook to use the Js plumb
 */
export const useJsPlumb = (): ((containerElement: HTMLDivElement) => void) => {
  const containerRef = React.useRef<HTMLDivElement>();
  const [instance, setInstance] = React.useState<BrowserJsPlumbInstance>(
    null as any
  );

  //callback ref to save the container ref
  const containerCallbackRef = React.useCallback(
    (containerElement: HTMLDivElement) => {
      containerRef.current = containerElement;
    },
    []
  );

  //effect to create the jsplumb instance
  React.useEffect(() => {
    let jsPlumbInstance = newInstance({
      ...defaultOptions,
      container: containerRef.current
    });

    setInstance(jsPlumbInstance);

    return () => {
      jsPlumbInstance.destroy();
    };
  }, []);

  //helper function to add an endpoints to the node
  const addEndpoints = React.useCallback(
    (toId: string, sourceAnchors: IAnchor[], targetAnchors: IAnchor[]) => {
      sourceAnchors.forEach((x) => {
        instance.addEndpoint(toId, sourceEndpoint, {
          anchor: x.position,
          uuid: x.id
        });
      });

      targetAnchors.forEach((x) => {
        instance.addEndpoint(toId, targetEndpoint, {
          anchor: x.position,
          uuid: x.id
        });
      });
    },
    [instance]
  );

  const getAnchors = (port: string[], anchorIds: AnchorId[]): IAnchor[] => {
    //if there is only one port, show the port in center(inputAnchors example:["TopLeft", "BottomLeft", "Left"] ie, left (index 2))
    //otherwise go by the inputAnchors, outputAnchors order
    return port.map(
      (x, index): IAnchor => ({
        id: x,
        position: anchorIds[port.length === 1 ? 2 : index]
      })
    );
  };

  //effect to add Endpoints
  React.useEffect(() => {
    if (!instance) return;

    Object.values(nodes).forEach((x) => {
      if (!instance.selectEndpoints({ element: x.key }).length) {
        addEndpoints(
          x.key,
          getAnchors(x.outputs, outputAnchors),
          getAnchors(x.inputs, inputAnchors)
        );
      }
      // else {
      //   console.log("element and endpoints are already there");
      // }
    });
  }, [nodes, instance]);

  //effect to add new connections
  React.useEffect(() => {
    if (!instance) return;

    let exisitngConnectionUuids = (instance.getConnections() as Connection[]).map(
      (x) => x.getUuids()
    );

    connections.forEach((x) => {
      let c = exisitngConnectionUuids.find((y) => isEqual(x, y));
      if (!c) {
        instance.connect({ uuids: x });
      }
      // else {
      //   console.log("connection already there");
      // }
    });
  }, [connections, instance]);

  return containerCallbackRef;
};
