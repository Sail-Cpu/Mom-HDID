import {View, Text, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const Calendar = () => {
    return(
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.title}>Saturday</Text>
                <View style={styles.right}>
                    <Icon name="arrow-back-ios" size={30} color="#fff" />
                    <Icon name="arrow-forward-ios" size={30} color="#fff" />
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "32%",
    },
    top: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "60%",
    },
    right: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 37,
        fontWeight: 900,
        color: "#fff",
    }
})

export default Calendar;