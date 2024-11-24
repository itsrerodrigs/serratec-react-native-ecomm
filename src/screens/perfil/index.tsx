import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { ImagePickerComponent } from "../../components/ImagePickerComponent/ImagePickerComponent";
import { api1 } from "../../services/api";
import { useAuth } from "../../context/auth";

export const Perfil = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const { user } = useAuth();

  const handleSave = async () => {
    try {
      if (nome !== user.nome || email !== user.email) {
        await api1.put(`/usuarios/${user.id}`, {
          nome: nome,
          email: email,
        });
        alert("Perfil atualizado com sucesso!");
      } else {
        alert("Não há dados novos para alterar.");
      }
    } catch (err) {
      console.error("Erro ao atualizar:", err);
      alert("Erro ao atualizar perfil. Tente novamente mais tarde.");
    }
  };

  const handleChangePassword = async () => {
    if (novaSenha.trim() === "") {
      Alert.alert("Erro", "A nova senha não pode ser vazia!");
    } else if (novaSenha !== confirmarSenha) {
      Alert.alert("Erro", "As senhas não correspondem!");
    } else {
      try {
        await api1.put(`/usuarios/${user.id}`, {
          senha: novaSenha,
        });
        alert("Senha alterada com sucesso!");
      } catch (err) {
        console.error("Erro ao tentar atualizar a senha: ", err);
        alert("Erro ao alterar a senha. Tente novamente mais tarde.");
      }
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user || !user.id) {
        console.error("User ID is not set");
        return;
      }

      try {
        const response = await api1.get(`/usuarios/${user.id}`);
        const data = response.data;
        setNome(data.nome);
        setEmail(data.email);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (user && user.id) {
      fetchUserData();
    }
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.salvarButtonContainer}></View>
      <View style={styles.profileImageContainer}>
        <ImagePickerComponent />
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
      <TouchableOpacity onPress={handleSave} style={styles.button}>
        <Text style={styles.salvarButtonText}>SALVAR</Text>
      </TouchableOpacity>
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
        <TouchableOpacity onPress={handleChangePassword} style={styles.button}>
          <Text style={styles.salvarButtonText}>ALTERAR SENHA</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  salvarButtonText: {
    color: "#114552",
    fontSize: 16,
  },
  profileImageContainer: {
    width: "100%",
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
    marginVertical: 8,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
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
