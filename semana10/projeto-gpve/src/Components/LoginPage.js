import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: 200,
    },
  },
}));

const Form = styled.form `
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
    font-size: 1.5em;
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

  return (
    <Form className={classes.root} noValidate autoComplete="off">
      <div>
          <h1>Login Adm</h1>
      </div>
      
      <div>
      <TextField
          label="Usuário"
          id="outlined-size-small"
          variant="outlined"
          size="small"
        />
    </div>

    <div>
        <TextField
          label="Senha"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          type= "password"
        />
      </div>
    <div>
      <Button>login</Button>
    </div>
    </Form>
  );
}
