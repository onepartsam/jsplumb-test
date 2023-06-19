import { values } from "lodash";
import * as React from "react";
import { nodes } from "../data/configuration";
import { useJsPlumb } from "./useJsPlumb";

export const WorkflowCanvas: React.FC = () => {
  const containerCallbackRef = useJsPlumb();

  return (
    <div id={"canvas-container"} ref={containerCallbackRef}>
      {values(nodes).map((x) => (
        <div
          key={x.key}
          className={"node-item"}
          id={x.key}
          style={{ top: x.position.top, left: x.position.left }}
        >
          <img
            src={`https://renewanalytics.bahwancybertek.com/RETINAImages/ProcessedIcons/${x.icon}`}
          />
          <div className={"node-label"}>{x.configuration.name}</div>
        </div>
      ))}
    </div>
  );
};
