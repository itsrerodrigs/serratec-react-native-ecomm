import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigation } from '../../routes/app.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

export type DetalhesIntegrantesRouteProp = RouteProp<StackNavigation, "DetalhesIntegrantes">;
export type DetalhesIntegrantesNavigationProp = NativeStackNavigationProp<StackNavigation, "DetalhesIntegrantes">;

export type Props = {
  route: DetalhesIntegrantesRouteProp;
  navigation: DetalhesIntegrantesNavigationProp;
};

export const DetalhesIntegrantes: React.FC<Props> = ({ route }) => {
  const { name, role, description, image, linkedin, github} = route.params;


  const openLink = (url: string) => {
    Linking.openURL(url).catch((err) => console.error("Erro ao abrir o link:", err));
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.role}>{role}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => openLink(linkedin)} />
        <Ionicons name="logo-linkedin" size={30} color="black" />
        <TouchableOpacity onPress={() => openLink(github)} />
        <Ionicons name="logo-github" size={30} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#114552'
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  role: {
    fontSize: 18,
    color: '#43d3aa', 
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
    color: '#bdd4cf', 
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
});
