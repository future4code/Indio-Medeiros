
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ApplicationFormPage from '../Components/Pages/ApplicationFormPage'
import CreateTripPage from '../Components/Pages/CreateTripPage'
import HomePage from '../Components/Pages/HomePage'
import ListTripPage from '../Components/Pages/ListTripsPage'
import LoginPage from '../Components/Pages/LoginPage'
import NavBar from '../Components/Nav/NavBar'




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
            </Switch>
        </BrowserRouter>
    )
}