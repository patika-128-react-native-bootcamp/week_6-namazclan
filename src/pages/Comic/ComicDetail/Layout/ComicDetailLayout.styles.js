import { StyleSheet, Dimensions } from "react-native";
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    innerContainer: {
        flex: 1,
        margin: 15,
        backgroundColor: "rgba(52, 52, 52, 0.7)",
        borderRadius: 25,
    },
    title: {
        color: "white",
        alignSelf: "center",
        fontSize: 32,

        fontWeight: "bold",
    },
    titleContainer: {
        backgroundColor: "rgba(52, 52, 52, 0.8)",
        paddingVertical: 15,
        borderRadius: 25
    }
})