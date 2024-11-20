import { useContext, useState } from "react";
import AuthContext from "../../context/auth";
import {
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const imagemFundo = require("../../../assets/panoFundo.png");
const logo = require("../../../assets/transparente.png");

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [error, setError] = useState<string>("");
  // @ts-ignore
  const { signIn } = useContext(AuthContext);

  const validarEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };
  const validarSenha = (senha: string) => {
    return senha.length >= 6 && senha.length <= 10;
  };
  const logar = () => {
    if (!validarEmail(email)) {
      setError("Por favor, insira um email válido.");
      return;
    }

    if (!validarSenha(senha)) {
      setError("A senha deve ter entre 6 a 10 caracteres.");
      return;
    }
    setError("");

    const usuario = {
      nome: "João",
      email: email,
      senha: senha,
    };
    signIn(usuario);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={imagemFundo} style={styles.imageBackground}>
        <Image source={logo} style={styles.logo} />
        <TextInput
          placeholderTextColor={"white"}
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(e) => {
            setEmail(e);
          }}
        />
        <TextInput
          placeholderTextColor={"white"}
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
          value={senha}
          onChangeText={(e) => {
            setSenha(e);
          }}
        />
        <TouchableOpacity
          onPress={() => {
            logar();
          }}
          style={styles.button}
        >
          <Text style={styles.textButton}>ENTRAR</Text>
        </TouchableOpacity>
      </ImageBackground>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    gap: 20,
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
    justifyContent: "center",
    backgroundColor: "black",
  },
  logo: {
    position: "absolute",
    top: 10,
    width: 250,
    height: 250,
    zIndex: 1,
  },

  signInContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
  },
  input: {
    width: "100%",
    top: 60,
    height: 50,
    borderColor: "#43d3aa",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    color: "#041515",
    backgroundColor: "#e7e7e746",
  },
  button: {
    padding: 20,
    top: 60,
    width: "100%",
    backgroundColor: "#bdd3ce",
    borderColor: "#43d3aa",
    borderWidth: 1,
    alignItems: "center",
    borderRadius: 5,
  },
  textButton: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  label: {
    flex: 1,
    fontSize: 26,
    color: "white",
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    fontSize: 14,
  },
});
