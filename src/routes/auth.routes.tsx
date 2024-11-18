import {
    createNativeStackNavigator,
    NativeStackNavigationProp,
    NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { Login } from "../screens/login";

type StackNavigation = {
    Login: undefined;
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>;
export type LoginProps = NativeStackScreenProps<StackNavigation, "Login">;

const { Navigator, Screen } = createNativeStackNavigator<StackNavigation>();

export const AuthRoutes = () => {
    return (
        <Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
            <Screen name="Login" component={Login}/>
        </Navigator>
    )
}