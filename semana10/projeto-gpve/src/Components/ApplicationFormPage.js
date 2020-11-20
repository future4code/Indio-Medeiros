import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components'
import axios from 'axios';
import Country from './Selects/CountrySelect';
import TripIdSelect from './Selects/TripIdSelect';


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

export default function ApplicationFormPage(){
    const [form , setForm] = useState()
    const classes = useStyles();

    const handleInput = (event) => {
        const {value, name, id} = event.target
        
        setForm({...form, [name]:value})
      }

      function onSubmitForm(event) {
        event.preventDefault();
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText ,
            profession: form.profession,
            country: form.country
        };
        console.log("body", body)
        axios
          .post(
            `https://us-central1-labenu-apis.cloudfunctions.net/labeX/indio/trips/${form.id}/apply`,
            body
          )
          .then(response => {
              console.log(response)
  
          })
          .catch(error => {
            console.log(error);
          });
         
      }

    return(
        <Div>
            <form onSubmit={onSubmitForm} className={classes.root} >
            <div>
                <h1>Candidato</h1>
            </div>
            
            <div>
            <TextField
                pattern={"[A-Za-z]{3,}"}
                label="nome"
                variant="outlined"
                size="small"
                type="text"
                onChange={handleInput}
                // value={''}
                name={"name"}
                required
                />
            
            </div>

            <div>
                <TextField
                min="18"
                label="idade"
                variant="outlined"
                size="small"
                type= "number"
                onChange={handleInput}
                // value={''}
                name={"age"}
                required
                />
            </div>

            <div>
                <TextField
                pattern={"[A-Za-z]{30,}"}
                label="mensagem"
                variant="outlined"
                size="small"
                type= "text"
                onChange={handleInput}
                // value={''}
                name={"applicationText"}
                required
                />
            </div>

            <div>
                <TextField
                pattern={"[A-Za-z]{10,}"}
                label="Profissão"
                variant="outlined"
                size="small"
                type= "text"
                onChange={handleInput}
                // value={''}
                name={"profession"}
                required
                />
            </div>

            <div>
                <Country 
                name="country"
                onchange={handleInput}
                required/>
            </div>

            <div>
                <TripIdSelect 
                name="trip"
                onchange={handleInput}
                required/>
            </div>

            <Button>inscrever-se</Button>
        </form>
    </Div>
    )
}