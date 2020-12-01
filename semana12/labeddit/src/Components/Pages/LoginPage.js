import React from "react";
import ElementForm from "../Elements/ElementForm";
import { DivPageForm,  Img, LabEddit } from "./styledPagesForm";
import backgorundImage from "../../img/backgroundForm.png"
import labEddit from "../../img/labeddit.png"
export default function LoginPage() {
  return (
    <DivPageForm>
        <LabEddit src={labEddit}/>
      <ElementForm />
     
    </DivPageForm>
  );
}
