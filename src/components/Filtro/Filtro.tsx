import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";

type FiltroProps = {
  setSearchText(texto: string): void;
  setTipoPesquisa(texto: string): void;
  tipoPesquisa: string;
};

export const Filtro = ({
  setSearchText,
  setTipoPesquisa,
  tipoPesquisa,
}: FiltroProps) => {
  const mudarTipoPesquisa = () => {
    setTipoPesquisa(tipoPesquisa === "nome" ? "valor" : "nome");
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <Feather
          style={styles.searchIcon}
          name="search"
          size={16}
          color="#43d3aa"
        />
        <TextInput
          style={styles.input}
          placeholder="Pesquisar..."
          placeholderTextColor="#bdd4cf"
          onChangeText={setSearchText}
          keyboardType={"default"}
        />
      </View>

      <TouchableOpacity onPress={mudarTipoPesquisa} style={styles.filterIcon}>
        <Feather name="filter" size={20} color="#43d3aa" />
        <Text style={styles.filterText}>
          Filtro: {tipoPesquisa === "nome" ? "valor" : "nome"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 20,
  },
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth: 1,
    borderColor: "#43d3aa",
    borderRadius: 8,
    marginTop: 12,
    height: 45,
    width: "100%",
  },
  searchIcon: {
    paddingLeft: 5,
  },
  input: {
    width: "100%",
    height: 40,
    margin: 12,
    marginLeft: 0,
    padding: 10,
    borderRadius: 5,
    borderWidth: 0,
    fontSize: 12,
    color: "#bdd4cf",
  },
  filterIcon: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  filterText: {
    marginLeft: 4,
    color: "#43d3aa",
    fontSize: 16,
  },
});
