import React from "react";
import { useMemo } from "react";
import { IElement } from "./IElement";
import { useElementName } from "./useElementName";
import { useTranslate } from "@rxdrag/react-locales";

export function useProcess(element: any, modeler: any): IElement {
  const t = useTranslate();

  const name = useElementName(element, modeler);
  const iElement: IElement = useMemo(() => {
    return {
      type: t("AppBpmn.Process"),
      name: name,
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill-rule="evenodd" d="M16.177 0l.137.002c.452.009.9.037 1.342.082.346.036.62.303.68.646l.437 2.536c.055.319.296.57.608.655.986.269 1.923.653 2.796 1.14.28.155.624.145.885-.039l2.083-1.47a.775.775 0 01.937.022c.86.699 1.645 1.484 2.343 2.343.22.27.223.653.023.937l-1.439 2.038a.833.833 0 00-.031.896c.512.889.92 1.846 1.204 2.855a.833.833 0 00.653.601l2.435.42c.342.059.61.333.645.679a15.928 15.928 0 01.08 2.064l-.003.114c-.012.382-.038.76-.077 1.134a.775.775 0 01-.645.68l-2.396.412a.835.835 0 00-.656.61 12.511 12.511 0 01-1.2 2.917.832.832 0 00.034.892l1.396 1.978c.2.284.196.667-.023.936a16.104 16.104 0 01-2.343 2.343.775.775 0 01-.937.023l-1.99-1.404a.833.833 0 00-.88-.026c-.907.516-1.886.922-2.916 1.2a.833.833 0 00-.61.656l-.414 2.396a.775.775 0 01-.679.646 16.096 16.096 0 01-3.312 0 .775.775 0 01-.679-.646l-.423-2.452a.834.834 0 00-.598-.636 12.474 12.474 0 01-1.468-.514 12.49 12.49 0 01-1.417-.68.833.833 0 00-.878.03l-2.026 1.43a.775.775 0 01-.937-.023 16.069 16.069 0 01-2.342-2.342.774.774 0 01-.024-.936l1.402-1.986a.833.833 0 00.032-.896 12.507 12.507 0 01-1.214-2.911.833.833 0 00-.655-.606l-2.386-.412a.775.775 0 01-.646-.678 16.097 16.097 0 010-3.314.775.775 0 01.646-.678l2.386-.412a.833.833 0 00.655-.606 12.507 12.507 0 011.214-2.911.833.833 0 00-.032-.896L3.552 6.853a.774.774 0 01.023-.936 16.091 16.091 0 012.343-2.343.775.775 0 01.937-.023l2.03 1.433c.26.177.6.182.874.028.915-.512 1.88-.9 2.87-1.167a.833.833 0 00.612-.656l.424-2.46a.775.775 0 01.679-.645C14.845.032 15.348.004 15.85 0h.326zM16 6.4c-5.302 0-9.6 4.297-9.6 9.599 0 5.302 4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6-4.298-9.6-9.6-9.6zm-3 4.283c0-1.425 1.637-2.203 2.715-1.29l5.69 4.815c.794.672.794 1.91 0 2.583l-5.69 4.815c-1.078.913-2.715.134-2.715-1.29z"></path></svg>,
    }
  }, [name, t]);

  return iElement;
}