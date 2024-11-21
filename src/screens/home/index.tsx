import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity } from "react-native";
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
            <TouchableOpacity style={styles.botaoCadastrar} onPress={ () => navigation.navigate("CadastroProduto")}>  
                <Text>Pressione aqui</Text>
            </TouchableOpacity> 
            <FlatListProdutos navigation={navigation} />
        </>
    );
};

const styles = StyleSheet.create({
    botaoCadastrar: {
        padding: 20,
        width: "100%",
        backgroundColor: "#bdd3ce",
        borderColor: "#43d3aa",
        borderWidth: 1,
        alignItems: "center",
        borderRadius: 5,
    }
})