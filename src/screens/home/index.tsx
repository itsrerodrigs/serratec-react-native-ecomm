import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../context/auth";
import { CardProduto } from "../../components/CardProduto/CardProduto";
import { FlatListProdutos } from "../../components/FlatListProdutos/FlatListProdutos";
import { HomeProps } from "../../routes/app.routes";
import { Detalhes } from "../detalhes";
import { Navbar } from "../../components/Navbar/Navbar";

export type HomeScreenProps = {
    navigation: HomeProps,
}

export const Home = ({ navigation }: HomeScreenProps) => {

    return (
        <>
            <View style={styles.container}>
                <View style={styles.containerMenu}>
                    <TouchableOpacity style={styles.botaoCadastrar} onPress={() => navigation.navigate("CadastroProduto")}>  
                        <Text style={styles.textBotaoCadastrar}>Cadastrar novo produto</Text>
                    </TouchableOpacity>
                </View>
                
                <FlatListProdutos navigation={navigation} />
                
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    containerMenu: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 20,
    },
    botaoCadastrar: {
        padding: 4, 
        width: "100%", 
        backgroundColor: "#43d3aa", 
        borderColor: "gray", 
        borderWidth: 1, 
        alignItems: "center",
        elevation: 5
    }, 
    textBotaoCadastrar: {
        textAlign: "center",
        color: "#fff",
        fontSize: 12,
        fontWeight: "bold",
    },
})
