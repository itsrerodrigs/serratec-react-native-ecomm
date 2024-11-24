import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import Feather from '@expo/vector-icons/Feather';

const NetworkStatus = () => {
  const netInfo = useNetInfo();

  if (!netInfo.isConnected) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Sem conexão com a internet</Text>
        <Feather name="wifi-off" size={24} color="white" />
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    backgroundColor: 'red',
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginRight: 6,
  },
});

export default NetworkStatus;
