
import { StyleSheet } from "react-native";
import { colors } from "../../../configs"
const base_style = StyleSheet.create({
    container: {
        alignSelf: "center",
        paddingRight: 20,
        paddingLeft: 30,
        marginBottom: 25,
        marginTop: 10,
    },
    image: {
        width: 150,
        height: 250,
        resizeMode: 'stretch',
        borderRadius: 20,

    },
    imageContainer: {
        marginBottom: 20,

    },
    title: {
        fontWeight: "bold",
        color: "black",
        fontSize: 16,
    },
    read: {
        color: "red",
        fontSize: 14,
        fontWeight: "bold",
    },
    readContainer: {
        marginTop: 10
    },
    bottomContainer: {
        width: 150,
        height: 60,
    }
})
export default {
    dark: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
        },
    }),
    light: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
        },
    })
}