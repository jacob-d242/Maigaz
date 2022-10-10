import React from "react";
import { View, TextInput } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import FontAwesome  from "react-native-vector-icons/FontAwesome";
import { COLORS } from "../../../constants/Index";

export default function Input (props) {
    const { icon, style, ...restProps } = props;
    return (
        <View style={[styles.cont, style]}>
            <FontAwesome name={icon} size={18} color="black" style={styles.icon}/>
            <TextInput
                {...restProps}
                style={styles.input}
            />
        </View>
    )
}
const styles = ScaledSheet.create({
    cont: {
        flexDirection: "row",
        alignItems: "center",
        width: "90%",    
        backgroundColor: COLORS.primary,
        borderRadius: 20,
        marginBottom: "20@ms"
    },
    input: {
        fontFamily: "Poppins-Regular",
        fontSize: "16@ms",
        width: "80%",
    },
    icon: {
        marginHorizontal: "20@ms"
    }
})