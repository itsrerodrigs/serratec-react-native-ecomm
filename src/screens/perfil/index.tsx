import { Button } from "react-native";
import { useAuth } from "../../context/auth";

export const Perfil = () => {

    const { signOut } = useAuth();

    return (
        <>
            <Button title="Logout" onPress={signOut} />
        </>
    );
};
