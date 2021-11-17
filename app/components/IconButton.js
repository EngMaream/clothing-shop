import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";

const IconButton = ({ sourceImage, onPress, style }) => {
    return (
        <TouchableOpacity
            style={{
                margin: 5,
                marginHorizontal: 15,
            }}
            onPress={onPress}>
            <Image
                style={{
                    width: 35,
                    height: 35,
                    margin: 5,
                    ...style,
                }}
                source={sourceImage}
            />
        </TouchableOpacity>
    );
};

export default IconButton;
