import { StyleSheet } from "react-native";
import { colors } from "../../../configs"
const base_style = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        paddingBottom: 15,
        width: "100%",
    },
    image: {
        width: 80,
        height: 30,
        resizeMode: 'cover'
    }
})
export default {
    dark: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: colors.MainGray,
        },
    }),
    light: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: colors.MainWhite,
        },
    })
}