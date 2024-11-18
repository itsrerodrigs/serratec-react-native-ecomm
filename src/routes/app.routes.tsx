import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { Home } from "../screens/home";

type StackNavigation = {
    Home: undefined,
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;
export type HomeProps = NativeStackNavigationProp<StackNavigation, "Home">;

const { Navigator, Screen } = createNativeStackNavigator<StackNavigation>();

export const AppRoutes = () => {
    return (
        <Navigator initialRouteName="Home">
            <Screen
                name="Home"
                component={Home}
            />
        </Navigator>
    )
}