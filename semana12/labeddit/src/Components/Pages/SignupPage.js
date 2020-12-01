import React from "react";
import backgorundImage from "../../img/backgroundForm.png"
import ElementForm from "../Elements/ElementForm";
import { DivPageForm, Img, H1} from "./styledPagesForm";

export default function SignupPage() {
  return (
    <DivPageForm>
            <H1>Cadastre-se</H1>
         <Img src={backgorundImage}/>
      <ElementForm />
    </DivPageForm>
  );
 
}
