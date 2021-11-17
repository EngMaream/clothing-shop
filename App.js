import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Sign from "./app/sign/views/Sign";
import Home from "./app/home/views/Home";
import Details from "./app/details/views/Details";
import IconButton from "./app/components/IconButton";
const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Sign">
                <Stack.Screen
                    name="Sign"
                    component={Sign}
                    options={{
                        title: "", //Set Header Title
                        headerStyle: {
                            backgroundColor: "#f9f7f8", //Set Header color
                        },
                        headerTintColor: "#f9f7f8", //Set Header text color
                        headerTitleStyle: {
                            fontWeight: "bold", //Set Header text style
                        },
                    }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: "Home", //Set Header Title
                        headerStyle: {
                            backgroundColor: "#f9f7f8", //Set Header color
                        },
                        headerTintColor: "#f9f7f8", //Set Header text color
                        headerTitleStyle: {
                            fontWeight: "bold", //Set Header text style
                        },
                        headerRight: () => (
                            <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
                                <IconButton sourceImage={require("./assets/search.png")} />
                                <IconButton sourceImage={require("./assets/shopping.png")} />
                            </View>
                        ),
                    }}
                />
                <Stack.Screen
                    name="Details"
                    component={Details}
                    options={{
                        title: "", //Set Header Title
                        headerStyle: {
                            backgroundColor: "#f9f7f8", //Set Header color
                        },
                        headerTintColor: "#000", //Set Header text color
                        headerTitleStyle: {
                            fontWeight: "bold", //Set Header text style
                        },
                        headerRight: () => (
                            <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
                                <IconButton
                                    sourceImage={require("./assets/favorite.png")}
                                    style={{ width: 25, height: 25 }}
                                />
                            </View>
                        ),
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
