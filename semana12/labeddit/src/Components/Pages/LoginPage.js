import React from "react";
import ElementForm from "../Elements/ElementForm";
import { DivPageForm, LabEddit } from "./styledPagesForm";
import labEddit from "../../img/labeddit.png";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
export default function LoginPage() {
    useProtectedPage()
  
  return (
    <DivPageForm>
      <LabEddit src={labEddit} />
      <ElementForm />
    </DivPageForm>
  );
}
