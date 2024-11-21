import React from "react";
import { Button } from "react-native";
import { useAuth } from "../../context/auth";
import { DetalhesProps, StackNavigation } from "../../routes/app.routes";
import { RouteProp, useRoute } from "@react-navigation/native";
import { CardDetalhes } from "../../components/CardDetalhes/CardDetalhes";

export type DetalhesScreenProps = {
    navigation: DetalhesProps,
    route: RouteProp<StackNavigation>
}

type DetalhesScreenRouteProp = RouteProp<StackNavigation, "Detalhes">

export const Detalhes = () => {

    const { signOut } = useAuth();
    const route = useRoute<DetalhesScreenRouteProp>();
    const { id } = route.params;

    return (
        <>
            <Button title="Logout" onPress={signOut} />
            <CardDetalhes id={id}/>
        </>
    );
};
