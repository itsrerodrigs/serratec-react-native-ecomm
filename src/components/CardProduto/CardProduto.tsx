import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { HomeScreenProps } from "../../screens/home";

type CardProdutoProps = {
    id: string,
    imagem: string,
    nome: string,
    quantidade: number,
    valor: number,
    navigation: HomeScreenProps['navigation'],
    onPress: () => void,
};

export const CardProduto = ({ id, imagem, nome, quantidade, valor, navigation, onPress }: CardProdutoProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerItem}>
                <Image source={{ uri: imagem }} style={styles.imagem} />
                <View style={styles.details}>
                    <Text style={styles.text}>{nome}</Text>
                    <Text style={styles.text}>Quantidade: {quantidade}</Text>
                    <Text style={styles.text}>R${valor}</Text>
                </View>
            </View>

            <View style={styles.containerIcons}>
                <TouchableOpacity style={styles.ButtonIcon} onPress={() => navigation.navigate("Detalhes", { id: id, nome: nome })}>
                    <FontAwesome6 name="edit" size={30} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonIcon} onPress={onPress}>
                    <FontAwesome6 name="trash-can" size={30} color="white" />
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
    },
    containerItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "70%",
    },
    imagem: {
        width: 120,
        height: 120,
        borderRadius: 12,
    },
    details: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignContent: "flex-start",
        marginLeft: 16,
    },
    containerIcons: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "30%",
    },
    text: {
        fontSize: 16,
        fontWeight: "500",
        color: "white",
    },
    ButtonIcon: {
        marginHorizontal: 5,
    },
});
