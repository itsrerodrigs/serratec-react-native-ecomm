import { useContext } from "react"
import { useAuth } from "../context/auth"
import { AuthRoutes } from "./auth.routes"
import { AppRoutes } from "./app.routes"

export const Routes = () => {

    const { signed }: { signed: boolean } = useAuth() ?? {
        signed: false,
    }

    return <>
        {!signed ? <AuthRoutes/> : <AppRoutes/>}
    </>
}