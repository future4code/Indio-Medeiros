import axios from "axios"
import { useEffect, useState } from "react"
import { useProtectedPage } from "../Hooks/useProtectedPage"


export default function TripDetailsPage(){
    const [trip, setTrip] = useState({})
    useProtectedPage()

    useEffect(() => {
        getTripDetail()
    }, [])

    const getTripDetail = () => {
        axios
        .get (
            "https://us-central1-labenu-apis.cloudfunctions.net/labeX/caio-dumont/trip/3Ga6Stvj6B687TNgFK72",
            {
                headers: {
                    auth: localStorage.getItem("token")
                }
            }
        )
        .then(response => {
            setTrip(response.data.trip)
        })
        .catch(error => {
            console.log(error)
        })
    }
    return(
        <div>
            <p>Detalhes da viagem</p>
            <p>{trip.name}</p>
        </div>
    )
}