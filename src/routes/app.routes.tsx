import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { Home } from "../screens/home";
import { Detalhes } from "../screens/detalhes";

export type StackNavigation = {
    Home: undefined,
    Detalhes: {id: string, nome: string},
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;
export type HomeProps = NativeStackNavigationProp<StackNavigation, "Home">;
export type DetalhesProps = NativeStackNavigationProp<StackNavigation, "Detalhes">;

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
        </Navigator>
    )
}