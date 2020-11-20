import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import DetailsScreen from './Screens/DetailsScreen'

export default function ListTripPage(){
    const [listTrip, setListTrip] = useState()
    const history = useHistory()
    
    const onDetails = (event) => {
        localStorage.setItem("tripId", event.target.id )
        history.push("/application-form")
        console.log("tripId", event.target.id )
    }


    useEffect(() => {
        getListTrip()
        
    },[])

    const getListTrip = () => {
        axios
        .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/indio/trips")
        .then(response => {
            console.log (response.data.trips)
            const list = response.data.trips.map((trip) =>{
                return <DetailsScreen
                    id={trip.id}
                    name= {trip.name}
                    date={trip.date}
                    description={trip.description}
                    planet={trip.planet}
                    durationInDays={trip.durationInDays}
                    onclick={onDetails}
                />    
             })
             setListTrip(list)
        })
        .catch(error => {
            console.log(error)
        })
    }
    return(
        <div>
            {listTrip}
            
        </div>
    )
}