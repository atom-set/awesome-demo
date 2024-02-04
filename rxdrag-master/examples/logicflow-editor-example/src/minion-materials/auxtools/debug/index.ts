
import { createId } from "@rxdrag/shared";
import { debugSchema } from "./schema";
import { NodeType } from "@rxdrag/minions-schema";
import { IRxDragActivityMaterial } from "../../interfaces";
import { DEFAULT_INPUT_NAME } from "../../consts";
import { debugIcon } from "@rxdrag/react-shared";

export interface IDebugConfig {
  tip?: string,
  closed?: boolean
}
export const debugMaterial: IRxDragActivityMaterial<IDebugConfig> = {
  activityName: "debug",
  icon: debugIcon,
  label: "$debug",
  activityType: NodeType.Activity,
  color: "orange",
  defaultPorts: {
    inPorts: [
      {
        id: createId(),
        name: DEFAULT_INPUT_NAME,
        label: "",
      },
    ],
  },
  subTitle: (config?: IDebugConfig) => {
    return config?.tip
  },
  schema: debugSchema,
}