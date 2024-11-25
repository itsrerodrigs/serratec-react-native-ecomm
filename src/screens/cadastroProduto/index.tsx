import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from "react-native";
import { useAuth } from "../../context/auth";
import { CadastroProdutoProps, StackNavigation } from "../../routes/app.routes";
import { RouteProp } from "@react-navigation/native";
import { api1 } from "../../services/api";

const logo = require("../../../assets/transparente.png");

export type CadastroProdutoScreenProps = {
  navigation: CadastroProdutoProps;
  route: RouteProp<StackNavigation>;
};

export const CadastroProduto = () => {
  const { signOut } = useAuth();
  const [imagem, setImagem] = useState("");
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [valor, setValor] = useState("");

  const criarProduto = async () => {
    if (!nome || !quantidade || !valor) {
      Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const novoProduto = {
      nome,
      imagem,
      quantidade: parseInt(quantidade),
      valor: parseFloat(valor),
    };

    try {
      const { data } = await api1.post("/produtos", novoProduto);
      console.log("Produto criado com sucesso:", data);
      Alert.alert("Sucesso", "Produto cadastrado com sucesso!");
      setImagem("");
      setNome("");
      setQuantidade("");
      setValor("");
    } catch (err) {
      console.error("Erro ao criar o produto:", err);
      Alert.alert(
        "Erro",
        "Não foi possível cadastrar o produto. Tente novamente."
      );
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.avoidingView}
    >
      <View style={styles.backgroundContainer}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          keyboardShouldPersistTaps="handled"
        >
          <Image source={logo} style={styles.logo} />
          <View style={styles.inner}>
            <TextInput
              placeholder="Imagem"
              placeholderTextColor={"#bdd3ce"}
              value={imagem}
              onChangeText={setImagem}
              style={[styles.input, styles.inputTextColor]}
            />
            <TextInput
              placeholder="Nome do Produto"
              placeholderTextColor={"#bdd3ce"}
              value={nome}
              onChangeText={setNome}
              style={[styles.input, styles.inputTextColor]}
            />
            <TextInput
              placeholder="Quantidade"
              placeholderTextColor={"#bdd3ce"}
              value={quantidade}
              onChangeText={setQuantidade}
              keyboardType="numeric"
              style={[styles.input, styles.inputTextColor]}
            />
            <TextInput
              placeholder="Valor"
              placeholderTextColor={"#bdd3ce"}
              value={valor}
              onChangeText={setValor}
              keyboardType="numeric"
              style={[styles.input, styles.inputTextColor]}
            />
            <TouchableOpacity onPress={criarProduto} style={styles.button}>
              <Text style={styles.textButton}>ENVIAR</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  avoidingView: {
    flex: 1,
  },
  backgroundContainer: {
    backgroundColor: "#114552",
    flex: 1,
    resizeMode: "cover",
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  inner: {
    width: "100%",
    alignItems: "center",
    padding: 20,
  },
  input: {
    width: "95%",
    height: 50,
    borderColor: "##43d3aa",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#e7e7e746",
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  inputTextColor: {
    color: "#bdd3ce",
  },
  button: {
    width: "95%",
    height: 50,
    backgroundColor: "#bdd3ce",
    borderColor: "#43d3aa",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  textButton: {
    color: "#114552",
    fontSize: 16,
  },
});
