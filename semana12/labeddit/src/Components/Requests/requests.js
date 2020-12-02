import axios from "axios";

export const requestPost = (baseUrl, body, header) => {
  
  axios
    .post(baseUrl, body, {headers: header})
    .then((response) => {
      
      localStorage.setItem("token", response.data.token);
    })
    .catch((error) => {
      console.log(error);
      alert("usuário inválido ou senha incorreta");
    });
};

export const requestPut = (baseUrl, body) => {
  const header = {
    Authorization: localStorage.getItem("token")
  }
  axios
    .put(baseUrl, body, {headers: header})
    .then((response) => {
      console.log("metodo put", response);
    })
    .catch((error) => {
      console.log(error);
    });
};
