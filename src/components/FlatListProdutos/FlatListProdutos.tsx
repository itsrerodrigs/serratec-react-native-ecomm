import { FlatList, View, StyleSheet, Text, ActivityIndicator, Alert } from "react-native";
import { CardProduto } from "../CardProduto/CardProduto";
import { useEffect, useState } from "react";
import { HomeScreenProps } from "../../screens/home";
import { api1 } from "../../services/api";

export const URL = "https://673bbe7b96b8dcd5f3f74e80.mockapi.io/api";

export type Produto = {
    id: string,
    imagem: string,
    nome: string,
    quantidade: number,
    valor: number,
};

type FlatListProdutosProps = {
    navigation: HomeScreenProps['navigation'];
};

const ItemSeparator = () => { return <View style={styles.separator} />; };

export const FlatListProdutos = ({ navigation }: FlatListProdutosProps) => {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [loading, setLoading] = useState(true);

    const obterDados = async () => {
        setLoading(true);
        try {
            const { data } = await api1.get(`${URL}/produtos`);
            setProdutos(data);
        } catch (err) {
            console.log("Erro ao carregar produtos. ", err);
        }
        setLoading(false);
    };

    const deleteProduto = async (id: string) => {
        const confirmed = await showConfirmDialog(); 
        if (!confirmed) { 
            return;
        }
        try {
            const { data } = await api1.delete(`${URL}/produtos/${id}`);
            const newList = produtos.filter((item) => item.id !== data.id);
            setProdutos(newList);
        } catch (err) {
            console.log("Erro ao tentar excluir o Produto. ", err);
        }
    }

    const showConfirmDialog = () => {
        return new Promise<boolean>((bool) => {
            Alert.alert(
                "Confirmar",
                "Deseja mesmo deletar este item?",
                [
                    {
                        text: "Cancelar",
                        onPress: () => bool(false),
                    },
                    {
                        text: "OK",
                        onPress: () => bool(true),
                    }
                ]
            );
        });
    };    

    useEffect(() => {
        obterDados();
    }, []);

    return (
        <>
            <Text style={styles.titulo}>Produtos</Text>
            <View style={styles.container}>
                {loading ? (
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <ActivityIndicator size="large" />
                    </View>
                ) : (
                    <FlatList
                        data={produtos}
                        renderItem={({ item }) => (
                            <CardProduto
                                id={item.id}
                                imagem={item.imagem}
                                nome={item.nome}
                                quantidade={item.quantidade}
                                valor={item.valor}
                                navigation={navigation}
                                onPress={() => deleteProduto(item.id)}
                            />
                        )}
                        ItemSeparatorComponent={ItemSeparator}
                        keyExtractor={(item) => item.id}
                    />
                )}
            </View>
        </>
    );
};
// 5f2859 6b3d5b 
const styles = StyleSheet.create({
    titulo: {
        marginVertical: 20,
        marginHorizontal: 10,
        fontSize: 18,
        textAlign: "center",
        fontWeight: "500",
    },
    container: {
        backgroundColor: "#114552",
    },
    separator: {
        height: 2,
        backgroundColor: '#bdd3ce',
        marginHorizontal: 10,
    },
});



    
