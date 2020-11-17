
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ApplicationFormPage from './ApplicationFormPage'
import CreateTripPage from './CreateTripPage'
import HomePage from './HomePage'
import ListTripPage from './ListTripsPage'
import LoginPage from './LoginPage'
import NavBar from './NavBar'
import TripDetailsPage from './TripDetailsPage'

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

                //Para vermos todas as viagens
                <Route exact path="/trips/list">
                    <NavBar/>
                    <ListTripPage/>
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