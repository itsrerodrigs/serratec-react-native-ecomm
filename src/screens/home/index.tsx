import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
        <View style={styles.container}>
            <Button title="Logout" onPress={signOut} />
            <View style={styles.containerMenu}>
                <TouchableOpacity style={styles.botaoCadastrar} onPress={() => navigation.navigate("CadastroProduto")}>  
                    <Text style={styles.textBotaoCadastrar}>Cadastrar novo produto</Text>
                </TouchableOpacity> 
            </View>
            
            <FlatListProdutos navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        gap: 15,
    },
    containerMenu: {
        width: "40%",
        justifyContent: "center",
        alignItems: "center",
       
    },
    botaoCadastrar: {
        padding: 20,
        width: "100%",
        backgroundColor: "#bdd3ce",
        borderColor: "#43d3aa",
        borderWidth: 1,
        alignItems: "center",
        borderRadius: 5,
    }, 
    textBotaoCadastrar: {
        textAlign: "center",
    }
})