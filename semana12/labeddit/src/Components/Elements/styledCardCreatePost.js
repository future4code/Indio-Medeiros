import styled from "styled-components";
import { ButtonColor } from "./color/colorWebSite";

export const DivFormCardPost = styled.form`
  display: flex;
  flex-direction: column;
  width: 345px;
`;
export const Textarea = styled.textarea`
  font-family: roboto;
  padding: 8px;
  width: 328px;
  height: 100px;
  border-radius: 8px;
  outline: none;
  font-size: 1.3em;
  resize: none;
  border: 1px solid #dcdcdc;
  ::placeholder {
    color: #dcdcdc;
  }
  :focus {
    border-color: purple;
  }
    
  }
`;
export const ButtonCreatePost = styled(ButtonColor)`
  width: 345px;
  font-size: 1.2em;
  margin-top: 10px;
  margin-left: 1px;
  height: 40px;
  border: 1px solid white;
`;

export const InputTitle = styled.input`
  padding: 8px;
  width: 328px;
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
