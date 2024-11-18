import { useContext } from "react"
import AuthContext from "../context/auth"
import { AuthRoutes } from "./auth.routes"
import { AppRoutes } from "./app.routes"

export const Routes = () => {

    const { signed }: { signed: boolean } = useContext(AuthContext) ?? {
        signed: false,
    }

    return <>
        {!signed ? <AuthRoutes/> : <AppRoutes/>}
    </>
}