
import React, { useEffect } from 'react'
import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom'
import CreateTripPage from '../Components/CreateTripPage'
import NavBar from '../Components/NavBar'
import TripDetailsPage from '../Components/TripDetailsPage'
import { useProtectedPage } from '../Hooks/useProtectedPage'

export default function ProtectedRouter(){
    const history = useHistory()
    useEffect(() => {
        const token = localStorage.getItem("token")
        if(!token){

        }
    }, [])
   

    return (
        <BrowserRouter>
            <Switch>
                //Para criarmos viagens
                <Route exact path="/trips/create">
                    <NavBar/>
                    <CreateTripPage/>
                </Route>

                //Para vermos os candidatos de uma viagem
                <Route exact path="/trips/details">
                    <NavBar/>
                    <TripDetailsPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}