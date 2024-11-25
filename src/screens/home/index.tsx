import React from "react";
import { StyleSheet, View } from "react-native";
import { FlatListProdutos } from "../../components/FlatListProdutos/FlatListProdutos";
import { HomeProps } from "../../routes/app.routes";

export type HomeScreenProps = {
  navigation: HomeProps;
};

export const Home = ({ navigation }: HomeScreenProps) => {
  return (
    <>
      <View style={styles.container}>
        <FlatListProdutos navigation={navigation} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#114552",
  },
});
