import React from "react";
import { Button } from "react-native";
import { useAuth } from "../../context/auth";
import { CadastroProdutoProps, StackNavigation } from "../../routes/app.routes";
import { RouteProp } from "@react-navigation/native";

export type CadastroPordutoScreenProps = {
    navigation: CadastroProdutoProps,
    route: RouteProp<StackNavigation>
}

export const CadastroPorduto = () => {

    const { signOut } = useAuth();
   
    return (
        <>
            <Button title="Logout" onPress={signOut} /> 
        </>
    );
};
