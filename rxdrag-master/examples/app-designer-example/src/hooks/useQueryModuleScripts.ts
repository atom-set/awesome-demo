/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react"
import { IScript, LogicType } from "../interfaces/flow"
import { on, EVENT_DATA_CHANGED, off } from "./events"
import { Entities } from "./events/entityName"
import { ID } from "@rxdrag/shared"
import { allScripts } from "../data/logic"

export function useQueryModuleScripts(moduleId: ID | undefined) {
  const [loading, setLoading] = useState<boolean>()
  const [scripts, setScripts] = useState<IScript[]>()

  const fillData = useCallback(() => {
    setLoading(true)
    setTimeout(() => {
      setScripts(allScripts.filter(script => script.moduleId === moduleId && script.type === LogicType.normal))
      setLoading(false)
    }, 300)
  }, [moduleId])

  useEffect(() => {
    fillData()
  }, [fillData])

  const handleDataEvent = useCallback((event: CustomEvent) => {
    if (event.detail === Entities.Script) {
      fillData()
    }
  }, [fillData])

  useEffect(() => {
    on(EVENT_DATA_CHANGED, handleDataEvent as any);
    return () => {
      off(EVENT_DATA_CHANGED, handleDataEvent as any);
    }
  }, [handleDataEvent])

  return { scripts, loading }
}