import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

export const Navbar: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Feather name="home" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.navItem}>Produtos</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.navItem}>Equipe</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1E90FF',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navItem: {
    fontSize: 16,
    color: 'white',
  },
});