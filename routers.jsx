import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./components/login";
import Home from "./components/home";
import Products from "./components/products";

const Pilha = createStackNavigator()

export default function Routers(){
    return(
        <NavigationContainer>
            <Pilha.Navigator>
                <Pilha.Screen
                    name="Login"
                    component={Login}
                >
                </Pilha.Screen>
                <Pilha.Screen
                    name="Home"
                    component={Home}
                >
                </Pilha.Screen>
                <Pilha.Screen
                    name="Products"
                    component={Products}
                >
                </Pilha.Screen>
            </Pilha.Navigator>
        </NavigationContainer>
    )
}
