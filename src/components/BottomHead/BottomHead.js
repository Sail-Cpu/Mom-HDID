import {View, StyleSheet, Text} from "react-native";
//Components
import Calendar from "./Calendar";
import Temp from "./Temp";
//Icon

const BottomHead = () => {
    return(
        <View style={styles.container}>
            <Calendar/>
            <Temp/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "40%",
        backgroundColor: '#324359',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 10
    }
})

export default BottomHead;