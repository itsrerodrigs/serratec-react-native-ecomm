import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { HomeScreenProps } from "../../screens/home";

type CardProdutoProps = {
  id: string;
  imagem: string;
  nome: string;
  quantidade: number;
  valor: number;
  navigation: HomeScreenProps["navigation"];
  onPress: () => void;
};

export const CardProduto = ({
  id,
  imagem,
  nome,
  quantidade,
  valor,
  navigation,
  onPress,
}: CardProdutoProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerItem}>
        <View style={styles.containerImagem}>
          <Image source={{ uri: imagem }} style={styles.imagem} />
        </View>

        <View style={styles.details}>
          <Text style={styles.nome}>{nome}</Text>
          <Text style={styles.quantidade}>Quantidade: {quantidade}</Text>
          <Text style={styles.valor}>R${valor}</Text>
        </View>
      </View>

      <View style={styles.containerIcons}>
        <TouchableOpacity
          style={styles.ButtonIcon}
          onPress={() =>
            navigation.navigate("Detalhes", { id: id, nome: nome })
          }
        >
          <FontAwesome6 name="edit" size={24} color="#43d3aa" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonIcon} onPress={onPress}>
          <FontAwesome6 name="trash-can" size={24} color="#43d3aa" />
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
  containerImagem: {
    width: 120,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  containerItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "70%",
  },
  imagem: {
    width: "95%",
    height: "90%",
    borderRadius: 6,
  },
  details: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    marginLeft: 16,
    gap: 4,
  },
  nome: {
    color: "#bdd4cf",
    fontWeight: "500",
    fontSize: 18,
  },
  quantidade: {
    color: "#bdd4cf",
    fontWeight: "500",
    fontSize: 16,
  },
  valor: {
    color: "#cb9758",
    fontSize: 16,
    fontWeight: "bold",
  },
  containerIcons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "30%",
  },
  ButtonIcon: {
    marginHorizontal: 5,
  },
});
