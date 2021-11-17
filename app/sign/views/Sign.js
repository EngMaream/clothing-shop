import React from "react";
import { View, Text, Image, Dimensions, ScrollView } from "react-native";

const Sign = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "#f9f7f8" }}>
            <ScrollView style={{ marginHorizontal: 20, backgroundColor: "#f9f7f8" }}>
                <View style={{ alignItems: "center" }}>
                    <Image source={require("../../../assets/fashion.jpg")} style={{ width: 390, height: 550 }} />
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontSize: 60, color: "#9da1aa" }}>.</Text>
                        <Text style={{ fontSize: 60, color: "#000" }}>.</Text>
                        <Text style={{ fontSize: 60, color: "#9da1aa" }}>.</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View>
                        <Text style={{ fontSize: 20, color: "#9da1aa" }}>Tops</Text>
                        <Text style={{ fontSize: 20, color: "#9da1aa" }}>T-Shirts</Text>
                        <Text style={{ fontSize: 20, color: "#9da1aa" }}>Hoodies</Text>
                        <Text style={{ fontSize: 20, color: "#9da1aa" }}>126+ Categories</Text>
                    </View>
                    <View
                        style={{
                            height: "100%",
                            width: Dimensions.get("window").width / 2,
                        }}>
                        <Text
                            style={{
                                textAlignVertical: "center",
                                textAlign: "center",
                                fontSize: 20,
                                backgroundColor: "#000",
                                color: "#fff",
                                width: 160,
                                height: 50,
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                                borderTopRightRadius: 13,
                                borderBottomRightRadius: 13,
                            }}
                            onPress={() => navigation.navigate("Home")}>
                            Sign up →
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default Sign;
