import styled from "styled-components";
import {
  ButtonColor,
  DivColorForm,
  ButtonTextColor,
} from "./color/colorWebSite";

export const DivForm = styled(DivColorForm)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 400px;
  height: 280px;
  margin: auto;
  padding-top: 30px;
  padding-bottom: 30px;
`;
export const ButtonLogin = styled(ButtonColor)`
  width: 300px;
  border: 1px solid white;
  border-bottom-left-radius: 30px;
  border-top-right-radius: 30px;
  font-size: 1.2em;
  margin-top: 10px;
  height: 40px;
`;
export const ButtonSingup = styled(ButtonTextColor)`
  width: 300px;
  font-size: 1.2em;
  margin-top: 10px;
  height: 40px;
`;
export const InputForm = styled.input`
  padding: 8px;
  width: 285px;
  margin: 15px 0px;
  border-radius: 8px;
  outline: none;
  font-size: 1.3em;
  border: 1px solid #dcdcdc;
  ::placeholder {
    color: #dcdcdc;
  }
  :focus {
    border-color: purple;
  }
`;
