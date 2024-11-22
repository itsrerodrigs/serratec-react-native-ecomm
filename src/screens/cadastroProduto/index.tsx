import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Button } from "react-native";
import { useAuth } from "../../context/auth";
import { CadastroProdutoProps, StackNavigation } from "../../routes/app.routes";
import { RouteProp } from "@react-navigation/native";
import { api1 } from "../../services/api";

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
    <View style={styles.container}>
      <Button title="Logout" onPress={signOut} color="#43d3aa" />
      <View style={styles.inputSpacing} />
      <TextInput
        placeholder="Imagem"
        value={imagem}
        onChangeText={setImagem}
        style={styles.input}
      />
      <TextInput
        placeholder="Nome do Produto"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />
      <TextInput
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Valor"
        value={valor}
        onChangeText={setValor}
        keyboardType="numeric"
        style={styles.input}
      />
      <TouchableOpacity onPress={criarProduto} style={styles.button}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  imagePicker: {
    alignItems: "center",
    marginVertical: 30,
  },
  imagem: {
    width: 200,
    height: 200,
    marginTop: 8,
  },
  input: {
    height: 40,
    borderColor: "#bdd4cf",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#43d3aa",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  inputSpacing: {
    height: 40,
  },
});
