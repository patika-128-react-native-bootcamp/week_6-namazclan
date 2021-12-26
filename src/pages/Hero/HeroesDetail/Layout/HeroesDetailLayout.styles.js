import { StyleSheet } from "react-native";
import { colors } from "../../../../configs"
const base_style = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        //flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 20,
    },
    titleContainer: {
        borderRadius: 15,
        padding: 6,

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 10
    },
    row: {
        flexDirection: 'row',

    },
    buttonContainer: {
        padding: 8,
        marginHorizontal: 15,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        width: 100
    },
    subTitle: {

        fontSize: 16,
        marginHorizontal: 10
    }
})
export default {
    dark: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: colors.MainDarkGray,
        },
        titleContainer: {
            ...base_style.titleContainer,
            backgroundColor: colors.MainDarkGray,
        },
        title: {
            ...base_style.title,
            color: colors.MainWhite,
        },
        buttonContainer: {
            ...base_style.buttonContainer,
            backgroundColor: colors.MainDarkGray,
        },
        subTitle: {
            ...base_style.subTitle,
            color: colors.MainWhite,
        }
    }),
    light: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: colors.MainWhite,
        },
        titleContainer: {
            ...base_style.titleContainer,
            backgroundColor: colors.MainWhite
        },
        title: {
            ...base_style.title,
            color: colors.MainDarkGray,
        },
        buttonContainer: {
            ...base_style.buttonContainer,
            backgroundColor: colors.MainWhite,
        },
        subTitle: {
            ...base_style.subTitle,
            color: colors.MainRed,
        }
    })
}
