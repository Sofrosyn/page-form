import React from "react";
import useDesigner from "./hooks/useDesigner";
import { FormElements } from "./FormElements";

function PropertiesFormSidebar() {
  const { selectedElement } = useDesigner();
  if (!selectedElement) return null;
  const PropertiesForm = FormElements[selectedElement?.type].propertiesComponent;
  return <PropertiesForm />;
}

export default PropertiesFormSidebar;
