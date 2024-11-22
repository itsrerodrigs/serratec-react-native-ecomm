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
  Dimensions,
} from "react-native";

const imagemFundo = require("../../../assets/panoFundo.png");
const logo = require("../../../assets/transparente.png");
const { width } = Dimensions.get("window");

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
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <TextInput
          placeholderTextColor={"#bdd3ce"}
          style={styles.input}
          placeholder="Digite seu email"
          value={email}
          onChangeText={(e) => {
            setEmail(e);
          }}
        />
        <TextInput
          placeholderTextColor={"#bdd3ce"}
          style={styles.input}
          secureTextEntry={true}
          placeholder="Digite sua senha"
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
  },
  logo: {
    position: "absolute",
    top: 10,
    width: width * 0.6,
    height: width * 0.6,
    zIndex: 1,
  },

  signInContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  input: {
    width: "100%",
    top: 65,
    height: 50,
    borderColor: "#43d3aa",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    color: "#bdd3ce",
    backgroundColor: "#e7e7e746",
    marginVertical: 10,
  },
  button: {
    padding: 20,
    top: 65,
    width: "100%",
    backgroundColor: "#bdd3ce",
    borderColor: "#43d3aa",
    borderWidth: 1,
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 10,
  },
  textButton: {
    color: "#114552",
    fontSize: 16,
    fontWeight: "bold",
  },
  label: {
    flex: 1,
    fontSize: width * 0.08,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  errorText: {
    backgroundColor: "red",
    borderRadius: 3,
    color: "#bdd3ce",
    fontSize: 14,
    top: 91,
  },
});
