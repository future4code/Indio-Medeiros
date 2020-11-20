import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function TripIdSelect (props) {
    const [listTrip, setListTrip] = useState()
    
    useEffect(() => {
        getListTrip()
        
    },[])

    const getListTrip = () => {
        axios
        .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/indio/trips")
        .then(response => {
            console.log (response.data.trips)
            const list = response.data.trips.map((trip) =>{
                return <option id={trip.id} value={trip.id} name={trip.id}>{trip.name}</option>    
             })
             setListTrip(list)
        })
        .catch(error => {
            console.log(error)
        })
    }
   
    return (
      
            <div>
                <select onChange={props.onchange} name={props.name}>
                    { listTrip}
                </select>
                  
            </div>
    )

}