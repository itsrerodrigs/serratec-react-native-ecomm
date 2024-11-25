// app.routes.tsx
import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { Home } from "../screens/home";
import { Detalhes } from "../screens/detalhes";
import { CadastroProduto } from "../screens/cadastroProduto";
import { Perfil } from "../screens/perfil";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { useAuth } from "../context/auth";
import { Integrantes } from "../screens/equipe/index";
import { DetalhesIntegrantes } from "../screens/equipe/detalhesIntegrantes";

export type StackNavigation = {
  HomeStack: undefined;
  Detalhes: { id: string; nome: string };
  CadastroProduto: undefined;
  Perfil: undefined;
  Integrantes: undefined;
  DetalhesIntegrantes: {
    name: string;
    role: string;
    description: string;
    image: string;
    github: string;
    linkedin: string;
  };
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;
export type HomeProps = NativeStackNavigationProp<StackNavigation, "HomeStack">;
export type DetalhesProps = NativeStackNavigationProp<
  StackNavigation,
  "Detalhes"
>;
export type CadastroProdutoProps = NativeStackNavigationProp<
  StackNavigation,
  "CadastroProduto"
>;
export type PerfilProps = NativeStackNavigationProp<StackNavigation, "Perfil">;
export type IntegrantesProps = NativeStackNavigationProp<
  StackNavigation,
  "Integrantes"
>;
export type DetalhesIntegrantesProps = NativeStackNavigationProp<
  StackNavigation,
  "DetalhesIntegrantes"
>;

const { Navigator, Screen } = createNativeStackNavigator<StackNavigation>();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Navigator initialRouteName="HomeStack">
      <Screen
        name="HomeStack"
        component={Home}
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Screen
        name="Detalhes"
        component={Detalhes}
        options={({ route }) => ({
          title: `Detalhes - id do produto: ${route.params.id}`,
        })}
      />
      <Screen
        name="CadastroProduto"
        component={CadastroProduto}
        options={{ title: "Cadastrar Produto" }}
      />
      <Screen
        name="Integrantes"
        component={Integrantes}
        options={{
          title: "Equipe",
        }}
      />
      <Screen
        name="DetalhesIntegrantes"
        component={DetalhesIntegrantes}
        options={({ route }) => ({
          title: `Detalhes de ${route.params.name}`,
        })}
      />
    </Navigator>
  );
}

function DrawerRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="Produtos"
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#bdd4cf",
          opacity: 0.9,
        },
        drawerLabelStyle: {
          color: "#114552",
          fontWeight: "bold",
        },
        drawerActiveBackgroundColor: "#cb9758",
        drawerActiveTintColor: "#bdd4cf",
        drawerInactiveTintColor: "#114552",
      }}
    >
      <Drawer.Screen name="Produtos" component={HomeStack} />
      <Drawer.Screen name="Cadastrar Produto" component={CadastroProduto} />
    </Drawer.Navigator>
  );
}

export const AppRoutes = () => {
  const { signOut } = useAuth();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          let iconName: any;
          const iconSize = 26;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Perfil") {
            iconName = "person";
          } else if (route.name === "Integrantes") {
            iconName = "people";
          } else if (route.name === "Logout") {
            iconName = "exit";
          }

          return <Ionicons name={iconName} size={iconSize} color={"#114552"} />;
        },
        tabBarLabelStyle: styles.tabLabel,
        tabBarActiveTintColor: "#cb9758",
      })}
    >
      <Tab.Screen
        name="Home"
        component={DrawerRoutes}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen name="Perfil" component={Perfil} />

      <Tab.Screen
        name="Integrantes"
        component={Integrantes}
        options={{
          title: "Equipe",
        }}
      />

      <Tab.Screen
        name="Logout"
        component={View}
        options={{
          tabBarButton: () => (
            <TouchableOpacity onPress={signOut} style={styles.tabButton}>
              <Ionicons name="exit" size={26} color="#114552" />
              <Text style={styles.tabLabel}>Sair</Text>
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabButton: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  tabLabel: {
    fontSize: 12,
    color: "#114552",
    fontWeight: "bold",
  },
});
