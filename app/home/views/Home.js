import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import IconButton from "../../components/IconButton";
const DATA = [
    {
        id: 1,
        text: "All",
    },
    {
        id: 2,
        text: "Winter",
    },
    {
        id: 3,
        text: "Women",
    },
    {
        id: 4,
        text: "Eyewear",
    },
    {
        id: 5,
        text: "Men",
    },
];
const IMAGE = [
    {
        id: 1,
        text: "Casual Jeans Shoes",
        price: "178.99",
        image: require("../../../assets/im1.jpg"),
    },
    {
        id: 2,
        text: "Casual Jeans Shoes",
        price: "18.99",
        image: require("../../../assets/im2.jpg"),
    },
    {
        id: 3,
        text: "Casual Jeans Shoes",
        price: "69.99",
        image: require("../../../assets/im3.jpg"),
    },
    {
        id: 4,
        text: "Casual Jeans Shoes",
        price: "140.99",
        image: require("../../../assets/im4.jpg"),
    },
];
const Home = ({ navigation }) => {
    const [data, setData] = useState(DATA);

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
        <View style={{ alignItems: "center" }}>
            <TouchableOpacity onPress={() => navigation.navigate("Details", { paramKey: item })}>
                <Image source={item.image} style={{ width: 250, height: 380, margin: 10, borderRadius: 20 }} />
                <IconButton
                    sourceImage={require("../../../assets/favorite.png")}
                    style={{ position: "absolute", bottom: 330, right: 10 }}
                />
            </TouchableOpacity>

            <Text style={{ fontSize: 20, marginHorizontal: 10, color: "#000" }}>{item.text}</Text>
            <Text style={{ position: "absolute", left: 77, bottom: 3, fontSize: 20, color: "#fc975f" }}>$</Text>
            <Text style={{ marginLeft: 13, fontSize: 30, color: "#9da1aa" }}>{item.price}</Text>
        </View>
    );
    const renderItem2 = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate("Details", { paramKey: item })}>
            <Image source={item.image} style={{ width: 160, height: 350, margin: 10, borderRadius: 20 }} />
            <IconButton
                sourceImage={require("../../../assets/favorite.png")}
                style={{ width: 25, height: 25, position: "absolute", bottom: 310, right: 10 }}
            />
        </TouchableOpacity>
    );
    return (
        <View style={{ flex: 1, backgroundColor: "#f9f7f8" }}>
            <ScrollView style={{ marginHorizontal: 10, backgroundColor: "#f9f7f8" }}>
                <Text style={{ fontSize: 35, marginHorizontal: 10, color: "#000" }}>Find Your style</Text>
                <FlatList
                    style={{ marginHorizontal: 10, marginVertical: 10 }}
                    data={DATA}
                    renderItem={renderItem}
                    horizontal={true}
                    keyExtractor={(item) => item.id.toString()}
                    listKey={(item, index) => index.toString()}
                />
                <FlatList
                    style={{ marginHorizontal: 10, marginVertical: 10 }}
                    data={IMAGE}
                    renderItem={renderItem1}
                    horizontal={true}
                    keyExtractor={(item) => item.id.toString()}
                    listKey={(item, index) => index.toString()}
                />
                <View style={{ flexDirection: "row", backgroundColor: "#f9f7f8" }}>
                    <Text style={{ fontSize: 35, marginHorizontal: 10, color: "#000" }}>Most Popular</Text>
                    <View
                        style={{
                            height: "100%",
                            width: Dimensions.get("window").width / 2,
                            alignItems: "center",
                        }}>
                        <Text
                            style={{
                                fontSize: 20,
                                position: "absolute",
                                bottom: 10,
                                marginHorizontal: 10,
                                color: "#fc975f",
                            }}>
                            see all
                        </Text>
                    </View>
                </View>
                <FlatList
                    style={{ marginHorizontal: 10, marginVertical: 10 }}
                    data={IMAGE}
                    renderItem={renderItem2}
                    horizontal={true}
                    keyExtractor={(item) => item.id.toString()}
                    listKey={(item, index) => index.toString()}
                />
            </ScrollView>
        </View>
    );
};

export default Home;
