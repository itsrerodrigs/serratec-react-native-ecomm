import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { Home } from "../screens/home";
import { Detalhes } from "../screens/detalhes";
import { CadastroProduto } from "../screens/cadastroProduto";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Perfil } from "../screens/perfil";
import { Text, TouchableOpacity } from "react-native";
import { useAuth } from "../context/auth";

export type StackNavigation = {
    Home: undefined,
    Detalhes: {id: string, nome: string},
    CadastroProduto: undefined,
    Perfil: undefined,
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;
export type HomeProps = NativeStackNavigationProp<StackNavigation, "Home">;
export type DetalhesProps = NativeStackNavigationProp<StackNavigation, "Detalhes">;
export type CadastroProdutoProps = NativeStackNavigationProp<StackNavigation, "CadastroProduto">;
export type PerfilProps = NativeStackNavigationProp<StackNavigation, "Perfil">;

const { Navigator, Screen } = createNativeStackNavigator<StackNavigation>();

const Tab = createBottomTabNavigator();

function Fluxo1() {
    return (
        <Navigator initialRouteName="Home">
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="Detalhes"
                component={Detalhes}
                options={({ route }) => ({ title: `Detalhes - ${route.params.nome} id:${route.params.id}` })}
            />
            <Screen
                name="CadastroProduto"
                component={CadastroProduto}
                options={{title: 'Cadastrar Produto'}}
            />
        </Navigator>
    )
}



export const AppRoutes = () => {

    const { signOut } = useAuth();

    return (
        <Tab.Navigator>
            <Tab.Screen options={{headerShown: false}} name={"Fluxo1"} component={Fluxo1} />
            <Tab.Screen name="Perfil" component={Perfil} />
            <Tab.Screen name="Logout" component={Perfil} options={{tabBarButton: () => (<TouchableOpacity onPress={signOut}>
                <Text>Sair</Text>
            </TouchableOpacity>)}}/>
        </Tab.Navigator>
    )
}