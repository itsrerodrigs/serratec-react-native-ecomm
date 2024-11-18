// fazer o import da tela ex: import Login from "../screens/login"

import { useContext, useState } from "react";
import AuthContext from "../../context/auth";
import { ImageBackground, View, Text,TextInput, TouchableOpacity, StyleSheet } from "react-native";

const imagemFundo = "https://img.freepik.com/fotos-gratis/mulher-em-casa-usando-smartphone-na-frente-do-computador-enquanto-toma-cafe_23-2148793444.jpg?semt=ais_hybrid";
export const Login = () => {

    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    // @ts-ignore
    const { signIn } = useContext(AuthContext);

    const logar = () => {
        const usuario = {
            nome: "João",
            email: email,
            senha: senha,
        };
        signIn(usuario);
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={{uri: imagemFundo}} style={styles.imageBackground}>
                <View style={styles.signInContainer}>
                    <Text style={styles.label}>SIGN IN 'Provisório'</Text>
                </View>
                <TextInput
                    placeholderTextColor={"white"}
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={(e) => {
                        setEmail(e);
                    }}
                />
                <TextInput
                    placeholderTextColor={"white"}
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="Password"
                    value={senha}
                    onChangeText={(e) => {
                        setSenha(e);
                    }}
                />
                <TouchableOpacity
                    onPress={() => {
                        logar();
                    }}
                    style={styles.button}
                >
                    <Text style={styles.textButton}>ENTRAR</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        gap: 30,
        alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: 10,
        justifyContent: "center",
        backgroundColor: "black"
    },
    signInContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 24,
    },
    input: {
        width: "100%",
        height: 50,
        borderColor: "#ddd",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        color: "#fbfbfb",
        backgroundColor: "#e7e7e746",
    },
    button: {
        padding: 20,
        width: "100%",
        backgroundColor: "#e7e7e7",
        alignItems: "center",
        borderRadius: 5,
    },
    textButton: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    label: {
        flex: 1,
        fontSize: 26,
        color: "white",
        fontWeight: "bold",
    },
});