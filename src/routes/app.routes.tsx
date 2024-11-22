import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { Home, HomeScreenProps } from "../screens/home";
import { Detalhes } from "../screens/detalhes";
import { CadastroProduto } from "../screens/cadastroProduto";
import { Perfil } from "../screens/perfil";
import { Text, TouchableOpacity, StyleSheet, View, Button, Alert } from "react-native";
import { useAuth } from "../context/auth";

export type StackNavigation = {
    HomeStack: undefined,
    Detalhes: { id: string, nome: string },
    CadastroProduto: undefined,
    Perfil: undefined,
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;
export type HomeProps = NativeStackNavigationProp<StackNavigation, "HomeStack">;
export type DetalhesProps = NativeStackNavigationProp<StackNavigation, "Detalhes">;
export type CadastroProdutoProps = NativeStackNavigationProp<StackNavigation, "CadastroProduto">;
export type PerfilProps = NativeStackNavigationProp<StackNavigation, "Perfil">;

const { Navigator, Screen } = createNativeStackNavigator<StackNavigation>();
const Tab = createBottomTabNavigator();

function HomeStack() {
    return (
        <Navigator initialRouteName="HomeStack">
            <Screen
                name="HomeStack"
                component={Home}
                options={{
                    title: 'Home',
                }}
            />
            <Screen
                name="Detalhes"
                component={Detalhes}
                options={({ route }) => ({ title: `Detalhes - id do produto: ${route.params.id}` })}
            />
            <Screen
                name="CadastroProduto"
                component={CadastroProduto}
                options={{ title: 'Cadastrar Produto' }}
            />
        </Navigator>
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

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Perfil') {
                        iconName = 'person';
                    } else if (route.name === 'Logout') {
                        iconName = 'exit';
                    }

                    return <Ionicons name={iconName} size={iconSize} color={"black"} />;
                },
                tabBarLabelStyle: styles.tabLabel,
                tabBarActiveTintColor: "#cb9758",
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                    headerShown: false,
                }}
            />

            <Tab.Screen
                name="Perfil"
                component={Perfil}
            />

            <Tab.Screen
                name="Logout"
                component={View}
                options={{
                    tabBarButton: () => (
                        <TouchableOpacity onPress={signOut} style={styles.tabButton}>
                            <Ionicons name="exit" size={26} color="black" />
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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    tabLabel: {
        fontSize: 12,
        color: 'gray',
        fontWeight: 'bold',
    },
});
