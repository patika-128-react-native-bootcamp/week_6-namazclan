import React from "react";
import { View, Text, FlatList, ScrollView } from "react-native"
import styles from "./ModalCardStyle"
import Modal from "react-native-modal";
const ModalCard = ({ visible, onClose, theme, selected, comics, description, name }) => {
    const renderItem = ({ item }) => (
        <View style={styles[theme].listContainer}>
            <Text style={styles[theme].list} >{item.name}</Text>
        </View>
    );
    const renderEmpty = () => (
        <Text>No data</Text>
    );
    return (
        <Modal
            style={styles[theme].modal}
            isVisible={visible}
            onSwipeComplete={onClose}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
            swipeDirection="down"
        >
            <View style={styles[theme].container}>

                <View style={styles[theme].nameContainer} >
                    <Text style={styles[theme].name}>{name} - {selected}</Text>
                </View>

                {selected == "Wiki" ? (
                    <ScrollView>
                        <Text style={styles[theme].description} >
                            {description ? description : "No data"}
                        </Text>
                    </ScrollView>
                ) : (

                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={comics.items}
                        renderItem={renderItem}
                        ListEmptyComponent={renderEmpty}
                    />
                )}

            </View>
        </Modal>
    )
};

export default ModalCard;