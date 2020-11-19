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
      background: "white"
    },
  },
}));

const Div= styled.div `
    display:flex;
    margin: auto;
    height:400px;
    border-radius: 10px;
    box-shadow: 1px 1px 8px gray;
    margin-top: 250px;
    flex-direction:column;
    width:300px;
    align-items:center;
    background-color:#F5F5F5;
   
`

const Button = styled.button `
    font-size: 1.2em;
    padding:5px;
    width:200px;
    margin-top:10px;
    margin-left: 16px;
    border: none;
    box-shadow: 1px 1px 2px gray;
    background-color:#3E38F2;
    color: white;
    border-radius: 5px;
    :hover{
        cursor: pointer;
        background-color:#5C73F2;
    }
`


export default function LoginPage(){
  const classes = useStyles();
  const [form, setForm] = useState({email: "", password: ""})
  const history = useHistory()

  
  useEffect(() => {
      const token = localStorage.getItem("token")
      token? history.push("/trips/details") : history.push("/login")
  }, [history])

  //login
  function onSubmitForm(event) {
    event.preventDefault();
    const body = {
      email: form.email,
      password: form.password
    };
 
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/indio/login",
        body
      )
      .then(response => {
        localStorage.setItem("token", response.data.token);
        history.push("/trips/details");
        console.log("token", response.data.token)
      })
      .catch(error => {
        console.log(error);
      });
     
  }

//inputs controlados: email e senha
const handleInput = (event) => {
  const {value, name} = event.target
  console.log (name, value)
  setForm({...form, [name]: value})
  
}

  return (
  <Div>
    <form onSubmit={onSubmitForm} className={classes.root} >
      <div>
          <h1>Login</h1>
      </div>
      
      <div>
      <TextField
          label="E-mail"
          variant="outlined"
          size="small"
          type="email"
          onChange={handleInput}
          value={form.email}
          name={"email"}
          required
        />
       
    </div>

    <div>
        <TextField
          label="Senha"
          variant="outlined"
          size="small"
          type= "password"
          onChange={handleInput}
          value={form.password}
          name={"password"}
          required
        />
      </div>

      
      <Button>login</Button>
    </form>
    
    
  </Div>
  );
}
