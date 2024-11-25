import {
  FlatList,
  View,
  StyleSheet,
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
  return <View />;
};

export const FlatListProdutos = ({ navigation }: FlatListProdutosProps) => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [tipoPesquisa, setTipoPesquisa] = useState<any>("nome");

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


  const produtosFiltrados = produtos.filter((produto) =>  {
    if(tipoPesquisa === "nome") {
      return produto.nome.toLowerCase().includes(searchText.toLowerCase());
    } else if (tipoPesquisa === "valor") {
      return produto.valor.toString().includes(searchText);
    }
    return true;
  });

  return (
    <>
      <Filtro tipoPesquisa={tipoPesquisa} setTipoPesquisa={setTipoPesquisa} setSearchText={setSearchText} />
           <View style={styles.container}>
        {loading ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <FlatList
            data={produtosFiltrados}
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
  container: {
    flex: 1,
    width: "100%",
  },
  flatListContent: {
    paddingBottom: 150,
  },
});
