import React from 'react'
import { useProtectedPage } from '../Hooks/useProtectedPage'

export default function CreateTripPage(){
  useProtectedPage()
    
    
    return(
        <div>
         Pagina de criação
        </div>
    )
}