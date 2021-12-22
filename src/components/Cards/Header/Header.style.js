import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5,
        marginTop: 5
    },
    image: {
        width: 80,
        height: 30,
        resizeMode: 'cover'
    }
})