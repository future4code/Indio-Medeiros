import React, { useState } from 'react'
import { useProtectedPage } from '../Hooks/useProtectedPage'
import PlanetSelect from './Selects/PlanetSelect'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components'
import axios from 'axios';


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
    height:500px;
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

export default function CreateTripPage(){
  const [form, setForm] = useState()
  useProtectedPage()
  const classes = useStyles();



  const handleInput = (event) => {
    const {value, name} = event.target
    setForm({...form, [name]: value})
    console.log(name, value)
  }

  const createTrip = (event) => {
    event.preventDefault()
   
    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.durationInDays
    }
    console.log(body)

    axios
    .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/indio/trips`, 
    body,{
      headers: {
        auth: localStorage.getItem("token")
    }
    
    })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
    
  }

    
    return(
      <Div>
        
      <form onSubmit={createTrip} className={classes.root} >
      <div>
          <h1>Criar viagem</h1>
      </div>
      
      <div>
      <TextField
          pattern={"[A-Za-z]{5}"}
          label="Nome da viagem"
          variant="outlined"
          size="small"
          type="text"
          onChange={handleInput}
          name={"name"}
          required
          />
      
      </div>

      <div>
         <PlanetSelect
          name="planet"
          onchange={handleInput}
          required
         />
      </div>

      <div>
          <TextField
          variant="outlined"
          size="small"
          type= "date"
          onChange={handleInput}
          name={"date"}
          required
          />
      </div>

      <div>
          <TextField
          pattern={"[A-Za-z]{30}"}
          label="Descrição"
          variant="outlined"
          size="small"
          type= "text"
          onChange={handleInput}
          name={"description"}
          required
          />
      </div>


      <div>
      <TextField
          min="50"
          label="Duração em dias"
          variant="outlined"
          size="small"
          type= "number"
          onChange={handleInput}
          name={"durationInDays"}
          required
          />
      </div>

      <Button>inscrever-se</Button>
  </form>
</Div>
    )
}