import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackNavigation } from "../../routes/app.routes";
import { FlatListIntegrantes } from '../../components/FlatListIntegrantes/FlatListIntegrantes'; 
import { CardIntegrante } from "../../components/CardIntegrante/CardIntegrante";

export type IntegrantesScreenNavigationProp = NativeStackNavigationProp<StackNavigation, 'Integrantes'>;

export const Integrantes: React.FC = () => {
  const [integrantes, setIntegrantes] = useState([]);
  const navigation = useNavigation<IntegrantesScreenNavigationProp>(); 

  useEffect(() => { 
    const fetchIntegrantes = async () => { 
      try { 
        const response = await fetch("https://67439dd4b7464b1c2a6560d6.mockapi.io/team/team"); 
        if (!response.ok) { 
          throw new Error("Erro na resposta da API"); 
        } 
        const data = await response.json(); 
        setIntegrantes(data); 
      } catch (error) { 
        console.error("Erro ao buscar integrantes:", error); 
      } 
    }; 
    
    fetchIntegrantes();
  }, []);

  const handlePressItem = (item: any) => {
    navigation.navigate("DetalhesIntegrantes", {
      name: item.name,
      role: item.position,
      description: item.description,
      image: item.image,
      linkedin: item.linkedin,
      github: item.github,
    });
  };

  return (
    <View style={styles.container}>
      <FlatListIntegrantes
        data={integrantes} 
        onPressItem={handlePressItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#114552",
    paddingTop: 8,
  },
  list: {
    padding: 16,
    backgroundColor: "##114552",
    marginTop: 10,
    borderRadius: 10,
  },
  card: {
    flexDirection: "row",
    padding: 12,
    marginBottom: 15,
    backgroundColor: "##114552",
    borderRadius: 8,
    elevation: 5, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTextContainer: {
    marginLeft: 12,
    justifyContent: "center",
  },
  cardName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  cardPosition: {
    fontSize: 14,
    color: "#777",
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#e0e0e0",
  },
  button: {
    backgroundColor: "#43d3aa",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});