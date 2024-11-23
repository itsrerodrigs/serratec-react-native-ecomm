import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useAuth } from "../../context/auth";

export const Perfil = () => {
  const { signOut } = useAuth();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleSave = () => {
    console.log({ nome, email });
    alert("Perfil atualizado com sucesso!");
  };

  const handleChangePassword = () => {
    if (novaSenha !== confirmarSenha) {
      Alert.alert("Erro", "As senhas não correspondem!");
    } else {
      console.log({ novaSenha });
      alert("Senha alterada com sucesso!");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.salvarButtonContainer}>
        <TouchableOpacity onPress={handleSave} style={styles.salvarButton}>
          <Text style={styles.salvarButtonText}>SALVAR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.profileImageContainer}>
        <TouchableOpacity onPress={() => console.log("Profile image pressed")}>
          <Image
            source={{ uri: "https://via.placeholder.com/150" }}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>
      <TextInput
        placeholderTextColor={"#bdd4cf"}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />
      <TextInput
        placeholderTextColor={"#bdd4cf"}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <Text style={styles.changePasswordText}>Deseja alterar senha?</Text>
      <TextInput
        placeholderTextColor={"#bdd4cf"}
        placeholder="Nova senha"
        value={novaSenha}
        onChangeText={setNovaSenha}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        placeholderTextColor={"#bdd4cf"}
        placeholder="Confirmar senha"
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
        secureTextEntry
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleChangePassword}
          style={styles.buttonSenha}
        >
          <Text style={styles.salvarButtonText}>ALTERAR SENHA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#114552",
  },
  salvarButtonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  salvarButton: {
    width: "25%",
    height: 50,
    backgroundColor: "#bdd3ce",
    borderColor: "#43d3aa",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  salvarButtonText: {
    color: "#114552",
    fontSize: 16,
  },
  profileImageContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  input: {
    height: 50,
    borderColor: "#43d3aa",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    color: "#bdd4cf",
  },
  changePasswordText: {
    fontSize: 14,
    color: "#bdd4cf",
    marginBottom: 8,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  buttonSenha: {
    width: "100%",
    height: 50,
    backgroundColor: "#bdd3ce",
    borderColor: "#43d3aa",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
