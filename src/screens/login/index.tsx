import { useContext, useState } from "react";
import { useAuth } from "../../context/auth";
import {
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import UsuarioService from "../../services/UsuarioService";
import { Controller, useForm } from "react-hook-form";

const logo = require("../../../assets/transparente.png");

export const Login = () => {
  // @ts-ignore
  const { signIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const logar = async (data: any) => {
    setLoading(true);

    try {
      const resp = await UsuarioService.login(data);
      signIn(resp);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível fazer login.");
    } finally {
      setLoading(false);
    }
  };
  //style={styles.container}
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ImageBackground
        style={styles.imageBackground}
        source={require("../../../assets/panoFundo.png")}
      >
        <Image source={logo} style={styles.logo} />

        {errors.senha && (
          <Text
            style={{ color: "#bdd3ce", backgroundColor: "red", padding: 4 }}
          >
            Senha é obrigatória.
          </Text>
        )}
        {errors.email && (
          <Text
            style={{ color: "#bdd3ce", backgroundColor: "red", padding: 4 }}
          >
            E-mail é obrigatório.
          </Text>
        )}

        <View style={styles.signInContainer}>
          <Text style={styles.label}>LOGIN</Text>
        </View>

        <Controller
          control={control}
          name="email"
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              maxLength={60}
              placeholderTextColor={"white"}
              style={styles.input}
              placeholder="Email"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
            />
          )}
        />

        <Controller
          control={control}
          name="senha"
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              autoCapitalize="none"
              maxLength={12}
              placeholderTextColor={"white"}
              style={styles.input}
              secureTextEntry={true}
              placeholder="Password"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />

        <TouchableOpacity
          disabled={loading}
          onPress={handleSubmit(logar)}
          style={styles.button}
        >
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Text style={styles.textButton}>ENTRAR</Text>
          )}
        </TouchableOpacity>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    gap: 30,
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
    justifyContent: "flex-end",
  },
  logo: {
    top: 75,
    width: 200,
    height: 200,
  },
  signInContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    color: "#fbfbfb",
    backgroundColor: "#e7e7e746",
  },
  button: {
    padding: 20,
    width: "100%",
    backgroundColor: "#e7e7e7",
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
});
