import React from "react";
import { Button } from "react-native";
import { useAuth } from "../../context/auth";
import { CardProduto } from "../../components/CardProduto/CardProduto";
import { FlatListProdutos } from "../../components/FlatListProdutos/FlatListProdutos";
import { HomeProps } from "../../routes/app.routes";
import { Detalhes } from "../detalhes";

export type HomeScreenProps = {
    navigation: HomeProps,
}

export const Home = ({ navigation }: HomeScreenProps) => {

    const { signOut } = useAuth();

    return (
        <>
            <Button title="Logout" onPress={signOut} />
            <FlatListProdutos navigation={navigation} />
        </>
    );
};
