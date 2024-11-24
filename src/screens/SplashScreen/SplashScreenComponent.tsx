import { useEffect } from "react";
import { View, StyleSheet, Animated } from "react-native";

type SplashScreenProps = {
  onFinish: () => void;
};
export const SplashScreenComponent = ({ onFinish }: SplashScreenProps) => {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }).start(() => {
          onFinish();
        });
      }, 1000);
    });
  }, [fadeAnim, onFinish]);
  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../../../assets/transparente.png")}
        style={{ ...styles.image, opacity: fadeAnim }}
      />
      <Animated.Text style={{ ...styles.text, opacity: fadeAnim }}>
        Bem-vindo
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#114552",
  },

  image: {
    width: 300,
    height: 300,
  },

  text: {
    fontSize: 30,
    color: "#bdd4cf",
  },
});
