
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ApplicationFormPage from '../Components/ApplicationFormPage'
import CreateTripPage from '../Components/CreateTripPage'
import HomePage from '../Components/HomePage'
import ListTripPage from '../Components/ListTripsPage'
import LoginPage from '../Components/LoginPage'
import NavBar from '../Components/NavBar'
import TripDetailsPage from '../Components/TripDetailsPage'



export default function Router(){
    return (
        <BrowserRouter>
            <Switch>
                //Para o usuário escolher entre login e formulário de aplicação
                <Route exact path="/">
                    <NavBar/>
                    <HomePage/>
                </Route>

                //Para qualquer usuário poder se increver
                <Route exact path="/application-form">
                    <NavBar/>
                    <ApplicationFormPage/>
                </Route>

                //Para o admin poder se logar
                <Route exact path="/login">
                    <NavBar/>
                    <LoginPage/>
                </Route>

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

                //Para vermos todas as viagens
                <Route exact path="/trips/list">
                    <NavBar/>
                    <ListTripPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}