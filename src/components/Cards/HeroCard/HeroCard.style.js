import { StyleSheet } from "react-native";
import { colors } from "../../../configs";

const base_style = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderRadius: 20,
        backgroundColor: colors.MainWhite,
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
        color: colors.MainBlack
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
        color: colors.MainRed,
    }
})
export default {
    light: StyleSheet.create({
        ...base_style,
    }),
    dark: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: colors.MainGray,
        },
        title: {
            ...base_style.title,
            color: colors.MainBlack
        },
        numbers: {
            ...base_style.numbers,
            color: colors.MainBlack
        },
        description: {
            ...base_style.description,
            color: colors.MainBlack
        },

    })
}



