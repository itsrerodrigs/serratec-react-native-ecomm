import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useAuth } from '../../context/auth';
import { HomeScreenProps } from '../../screens/home';
import AntDesign from '@expo/vector-icons/AntDesign';

type NavbarProps = {
  navigation: HomeScreenProps['navigation'];
};

export const Navbar = ({ navigation }: NavbarProps) => {

  const { signOut } = useAuth();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerIcon}>
        <Feather name="home" size={24} color="white" onPress={() => navigation.navigate("Home")}/>
        <Text style={styles.navItem}>Produtos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containerIcon}>
        <AntDesign name="team" size={24} color="white" />
        <Text style={styles.navItem}>Equipe</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containerIcon} onPress={signOut}>
        <MaterialCommunityIcons name="logout" size={24} color="white" />
        <Text style={styles.navItem}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerIcon: {
    alignItems: "center"
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#43d3aa',
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