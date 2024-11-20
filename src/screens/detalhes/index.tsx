import React from "react";
import { Button } from "react-native";
import { useAuth } from "../../context/auth";
import { DetalhesProps, StackNavigation } from "../../routes/app.routes";
import { RouteProp } from "@react-navigation/native";

export type DetalhesScreenProps = {
    navigation: DetalhesProps,
    route: RouteProp<StackNavigation>
}

export const Detalhes = () => {

    const { signOut } = useAuth();

    return (
        <>
            <Button title="Logout" onPress={signOut} />
        </>
    );
};
