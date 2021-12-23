import { StyleSheet } from "react-native";
import { marvelColor } from "../../../Utils/constants"
export default StyleSheet.create({
    container: {
        flexDirection: "row",
        borderRadius: 20,
        backgroundColor: '#fff',
    },
    image: {
        height: 150,
        width: 100,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,

    },
    rightContainer: {
        padding: 10,
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 2,
        color: "black"
    },
    description: {
        fontSize: 12,
        marginVertical: 5
    },
    numbers: {
        fontSize: 10,
        color: 'rgba(0,0,0,.6)'
    },
    button: {
        marginTop: 5
    },
    read: {
        color: marvelColor,
    }
})