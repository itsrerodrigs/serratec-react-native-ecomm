import { View, TextInput, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";

export const Filtro = () => {
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
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
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
    height: 40,
    margin: 12,
    marginLeft: 0,
    padding: 10,
    borderRadius: 5,
    borderWidth: 0,
    fontSize: 12,
    color: "#bdd4cf",
  },
});
