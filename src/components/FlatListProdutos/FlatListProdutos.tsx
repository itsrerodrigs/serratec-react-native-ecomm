import {
  FlatList,
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  Alert,
  RefreshControl,
} from "react-native";
import { CardProduto } from "../CardProduto/CardProduto";
import { useEffect, useState } from "react";
import { HomeScreenProps } from "../../screens/home";
import { api1 } from "../../services/api";
import { Filtro } from "../Filtro/Filtro";

export type Produto = {
  id: string;
  imagem: string;
  nome: string;
  quantidade: number;
  valor: number;
};

type FlatListProdutosProps = {
  navigation: HomeScreenProps["navigation"];
};

const ItemSeparator = () => {
  return <View style={styles.separator} />;
};

export const FlatListProdutos = ({ navigation }: FlatListProdutosProps) => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const obterDados = async () => {
    setLoading(true);
    try {
      const { data } = await api1.get(`/produtos`);
      setProdutos(data);
    } catch (err) {
      console.log("Erro ao carregar produtos. ", err);
    }
    setLoading(false);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await obterDados();
    setRefreshing(false);
  };

  const deleteProduto = async (id: string) => {
    const confirmed = await showConfirmDialog();
    if (!confirmed) {
      return;
    }
    try {
      const { data } = await api1.delete(`/produtos/${id}`);
      const newList = produtos.filter((item) => item.id !== data.id);
      setProdutos(newList);
    } catch (err) {
      console.log("Erro ao tentar excluir o Produto. ", err);
    }
  };

  const showConfirmDialog = () => {
    return new Promise<boolean>((bool) => {
      Alert.alert("Confirmar", "Deseja mesmo deletar este item?", [
        {
          text: "Cancelar",
          onPress: () => bool(false),
        },
        {
          text: "OK",
          onPress: () => bool(true),
        },
      ]);
    });
  };

  useEffect(() => {
    obterDados();
    const unsubscribe = navigation.addListener("focus", () => {
      obterDados();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <>
      <Filtro />
      <Text style={styles.titulo}>PRODUTOS</Text>
      <View style={styles.container}>
        {loading ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
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
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            contentContainerStyle={styles.flatListContent}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  titulo: {
    fontSize: 26,
    textAlign: "center",
    fontWeight: "600",
    color: "#bdd4cf",
    padding: 20,
    marginBottom: 10,
  },
  container: {
    backgroundColor: "#e7e7e746",
    marginBottom: 60,
    width: "100%",
  },
  separator: {
    height: 2,
    backgroundColor: "#bdd3ce",
    marginHorizontal: 10,
  },
  flatListContent: {
    paddingBottom: 150,
  },
});
