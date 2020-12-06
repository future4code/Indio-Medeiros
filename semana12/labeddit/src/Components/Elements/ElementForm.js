import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ButtonLogin, ButtonSingup, DivForm, InputForm } from "./styledForm";
import { goToPageSignup } from "../Coordination/coordinator";
import { requestPost } from "../Requests/requests";
import { loginUrl, signupUlr } from "./urls/requestsUrls";

export default function ElementForm() {
  const [form, setForm] = useState("");
  const history = useHistory();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmission = (event) => {
    event.preventDefault();

    if (history.location.pathname === "/") {
      requestPost(loginUrl, form);
    } else {
      requestPost(signupUlr, form);
    }
  };

  return (
    <DivForm>
      <form onSubmit={handleSubmission}>
        {history.location.pathname === "/signup" && (
          <div>
            <InputForm
              required
              pattern=".{8,}"
              title="minímo de 8 caracteres"
              placeholder="Nome Completo"
              label="Nome"
              name="username"
              value={form.name}
             
              onChange={handleInputChange}
            />
          </div>
        )}

        <div>
          <InputForm
            required
            placeholder="E-mail"
            label="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <InputForm
            required
            placeholder="Senha"
            label="Senha"
            pattern=".{6,}"
            title="minímo de 6 caracters"
            type="password"
            name="password"
            value={form.password}
            
            onChange={handleInputChange}
          />
        </div>

        <div>
          {history.location.pathname === "/" ? (
            <ButtonLogin>Logar</ButtonLogin>
          ) : (
            <ButtonLogin>Cadastrar</ButtonLogin>
          )}
        </div>
      </form>
      {history.location.pathname === "/" && (
        <div>
          <ButtonSingup
            onClick={() => {
              goToPageSignup(history);
            }}
          >
            Cadastre-se
          </ButtonSingup>
        </div>
      )}
    </DivForm>
  );
}
