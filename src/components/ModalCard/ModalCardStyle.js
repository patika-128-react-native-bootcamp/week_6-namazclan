import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../configs";
const deviceSize = Dimensions.get("window");
const base_style = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: deviceSize.height / 3,
    },
    modal: {
        justifyContent: "flex-end",
        margin: 0,
    },
    description: {
        fontSize: 18
    },
    list: {
        fontSize: 18
    },
    listContainer: {
        borderWidth: 0.5,
        padding: 5,
        borderRadius: 10,
        marginVertical: 5
    },
    name: {
        marginBottom: 5,
        fontSize: 22,
        color: colors.MainBlack
    },
    nameContainer: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderColor: colors.MainBlack
    }
})
export default {
    dark: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: colors.MainGray,
        },
        description: {
            ...base_style.description,
            color: colors.MainWhite
        },
        list: {
            ...base_style.list,
            color: colors.MainWhite
        },
        listContainer: {
            ...base_style.listContainer,
            backgroundColor: colors.MainDarkGray
        }
    }),
    light: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: colors.MainWhite,
        },
        description: {
            ...base_style.description,
            color: colors.MainDarkGray
        },
        list: {
            ...base_style.list,
            color: colors.MainDarkGray
        },
        listContainer: {
            ...base_style.listContainer,
            backgroundColor: colors.MainWhite
        }
    })
}