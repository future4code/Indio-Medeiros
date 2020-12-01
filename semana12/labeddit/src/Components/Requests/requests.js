
import axios from "axios"

export const requestPost = (baseUrl, body, header) => {
    axios
    .post(baseUrl , body , header)
    .then(response => {
        console.log("metodo post", response)
        localStorage.setItem("token", response.data.token)
    })
    .catch(error => {
        console.log(error)
        alert("usuário inválido ou senha incorreta")
    })
}

export const requestGet = (baseUrl, header) => {
    axios
    .get(baseUrl , header)
    .then(response => {
        console.log("metodo post", response)
    })
    .catch(error => {
        console.log(error)
    })
}

export const requestPut = (baseUrl, body, header) => {
    axios
    .put(baseUrl , body , header)
    .then(response => {
        console.log("metodo post", response)
    })
    .catch(error => {
        console.log(error)
    })
}