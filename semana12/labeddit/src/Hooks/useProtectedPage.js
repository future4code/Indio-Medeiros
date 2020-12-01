import { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { goToPageLogin } from "../Components/Coordination/coordinator"

export const useProtectedPage = () => {
    const history = useHistory()
    useEffect(() => {
        const token = localStorage.getItem("token")
        !token && goToPageLogin(history)
    }, [history])
}