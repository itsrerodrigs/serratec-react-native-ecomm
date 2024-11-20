import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

type Cardproduto = {
    imagem: string,
    nome: string,
    quantidade: number,
    valor: number,
}

export const CardProduto = ({ imagem, nome, quantidade, valor}: Cardproduto) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerItem}>
                <Image source={{uri: imagem}} style={styles.imagem} />
                <View style={styles.details}>
                    <Text style={styles.text}>{nome}</Text>
                    <Text style={styles.text}>Quantidade: {quantidade}</Text>
                    <Text style={styles.text}>R${valor}</Text>
                </View>
            </View>

            <View style={styles.containerIcons}>
                <TouchableOpacity style={styles.ButtonIcon}>
                    <FontAwesome6 name="edit" size={40} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonIcon}>
                    <FontAwesome6 name="trash-can" size={40} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        backgroundColor: "lightgray",
    },
    containerItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "70%",
    },
    imagem: {
        width: 100,
        height: 100,
        borderRadius: 12,
    },
    details: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignContent: "flex-start",
        marginLeft: 10,
    },
    containerIcons: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "30%",
    },
    text: {
        fontSize: 16,
    },
    ButtonIcon: {
        marginHorizontal: 5,
    },
});
