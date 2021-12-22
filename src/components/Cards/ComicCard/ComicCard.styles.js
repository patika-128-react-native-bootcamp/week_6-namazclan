import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        alignSelf: "center",
        paddingRight:20,
        paddingLeft:30,
        marginBottom: 25,
        marginTop: 10,
        paddingRight: 30
    },
    image: {
        width: 150,
        height: 250,
        resizeMode: 'stretch'
    },
    imageContainer: {
        marginBottom: 20,

    },
    title: {
        fontWeight: "bold",
        color: "black",
        fontSize: 14,

    },
    read: {
        color: "red",
        fontSize: 14,
        fontWeight: "bold",
    },
    readContainer: {
        marginTop: 10
    },
    author: {
        fontSize: 12,
        fontWeight: "bold",
        color: '#ef4322',
    }
})