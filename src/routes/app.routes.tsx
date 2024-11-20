import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { Home } from "../screens/home";
import { Detalhes } from "../screens/detalhes";
import { CadastroProduto } from "../screens/cadastroProduto";

export type StackNavigation = {
    Home: undefined,
    Detalhes: {id: string, nome: string},
    CadastroProduto: undefined,
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;
export type HomeProps = NativeStackNavigationProp<StackNavigation, "Home">;
export type DetalhesProps = NativeStackNavigationProp<StackNavigation, "Detalhes">;
export type CadastroProdutoProps = NativeStackNavigationProp<StackNavigation, "CadastroProduto">;

const { Navigator, Screen } = createNativeStackNavigator<StackNavigation>();

export const AppRoutes = () => {
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