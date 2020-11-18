import React, { useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components'
import axios from 'axios';
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: 200,
    },
  },
}));

const Div= styled.div `
    display:flex;
    margin: auto;
    height:400px;
    border-radius: 10px;
    margin-top: 250px;
    flex-direction:column;
    width:300px;
    align-items:center;
    border: 1px solid black;
`

const Button = styled.button `
    font-size: 1.2em;
    padding:5px;
    width:200px;
    margin-top:10px;
    background-color:white;
    border-radius: 5px;
    :hover{
        cursor: pointer;
    }
`


export default function LoginPage(){
  const classes = useStyles();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  
  useEffect(() => {
      const token = localStorage.getItem("token")
      token? history.push("/trips/details") : history.push("/login")
  }, [history])

  //login
  function loginAdm() {
    console.log(email);
    const body = {
      email: email,
      password: password
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/indio/login",
        body
      )
      .then(response => {
        localStorage.setItem("token", response.data.token);
        history.push("/trips/details");
      })
      .catch(error => {
        console.log(error);
      });
  }

//inputs controlados: email e senha
const handleEmail = (event) => {
  setEmail(event.target.value)
  console.log(email)
}

const handlePassword = (event) => {
  setPassword(event.target.value)
}

  return (
  <Div>
    <form className={classes.root} noValidate autoComplete="off">
      <div>
          <h1>Login Adm</h1>
      </div>
      
      <div>
      <TextField
          label="E-mail"
          variant="outlined"
          size="small"
          type="email"
          onChange={handleEmail}
          value={email}
        />
       
    </div>

    <div>
        <TextField
          label="Senha"
          variant="outlined"
          size="small"
          type= "password"
          onChange={handlePassword}
          value={password}
        />
      </div>
    
    </form>
    <div>
      <Button onClick={loginAdm}>login</Button>
    </div>
  </Div>
  );
}
