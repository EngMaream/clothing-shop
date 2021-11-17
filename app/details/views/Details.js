import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import IconButton from "../../components/IconButton";

const SIZE = [
    {
        id: 1,
        text: "S",
    },
    {
        id: 2,
        text: "M",
    },
    {
        id: 3,
        text: "L",
    },
    {
        id: 4,
        text: "XL",
    },
    {
        id: 5,
        text: "XXL",
    },
    {
        id: 6,
        text: "XXXL",
    },
    {
        id: 7,
        text: "XXXXL",
    },
];
const COLOR = [
    {
        id: 1,
        backgroundColor: "#fffc",
    },
    {
        id: 2,
        backgroundColor: "#c5b6b1",
    },
    {
        id: 3,
        backgroundColor: "#d6e1ff",
    },
    {
        id: 4,
        backgroundColor: "#f5d6ff",
    },
    {
        id: 5,
        backgroundColor: "#d4eeeb",
    },
    {
        id: 6,
        backgroundColor: "#ddd9d0",
    },
    {
        id: 7,
        backgroundColor: "#ffd5df",
    },
];
const Details = ({ route }) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity>
            <Text
                style={{
                    fontSize: 20,
                    borderRadius: 10,
                    color: "#000",
                    padding: 10,
                    marginHorizontal: 10,
                    borderWidth: 1,
                    borderColor: "#9da1aa",
                }}>
                {item.text}
            </Text>
        </TouchableOpacity>
    );
    const renderItem1 = ({ item }) => (
        <TouchableOpacity>
            <Text
                style={{
                    fontSize: 20,
                    borderRadius: 10,
                    color: "#000",
                    padding: 10,
                    paddingHorizontal: 23,
                    marginHorizontal: 10,
                    borderColor: "#9da1aa",
                    backgroundColor: item.backgroundColor,
                }}></Text>
        </TouchableOpacity>
    );
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#f9f7f8" }}>
            <View style={{ marginHorizontal: 20, backgroundColor: "#f9f7f8" }}>
                <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 30, marginHorizontal: 10, color: "#000" }}>
                        {route.params.paramKey.text}
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                        <IconButton sourceImage={require("../../../assets/star.png")} style={{ margin: 0 }} />
                        <Text style={{ fontSize: 20, color: "#000", marginTop: 10 }}>4.8 </Text>
                        <Text style={{ fontSize: 20, color: "#9da1aa", marginTop: 10 }}>(2.6k+ review)</Text>
                    </View>
                    <Image source={route.params.paramKey.image} style={{ width: 340, height: 390, borderRadius: 20 }} />
                </View>
                <Text style={{ fontSize: 25, marginHorizontal: 10, color: "#000" }}>Select Size</Text>
                <FlatList
                    style={{ marginVertical: 10 }}
                    data={SIZE}
                    renderItem={renderItem}
                    horizontal={true}
                    keyExtractor={(item) => item.id.toString()}
                    listKey={(item, index) => index.toString()}
                />
                <Text style={{ fontSize: 25, marginHorizontal: 10, color: "#000" }}>Select Color</Text>
                <FlatList
                    style={{ marginVertical: 10 }}
                    data={COLOR}
                    renderItem={renderItem1}
                    horizontal={true}
                    keyExtractor={(item) => item.id.toString()}
                    listKey={(item, index) => index.toString()}
                />
                <View style={{ flexDirection: "row", marginVertical: 20 }}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ position: "absolute", bottom: 3, fontSize: 20, color: "#fc975f" }}>$</Text>
                        <Text style={{ marginLeft: 13, fontSize: 30, color: "#9da1aa" }}>
                            {route.params.paramKey.price}
                        </Text>
                    </View>
                    <View
                        style={{
                            height: "100%",
                            width: Dimensions.get("window").width / 1.54,
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
                                borderRadius: 13,
                            }}>
                            Add to Cart
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default Details;
