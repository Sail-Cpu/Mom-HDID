import {View, Text, StyleSheet} from "react-native";

const Temp = () => {

    const tMin = 10;
    const tMax = 22;
    const temp = 18;

    const percentage = (temp-tMin) * 100 / (tMax- tMin);


    return(
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.text}>{tMin}°</Text>
                <View style={styles.tempBar}>
                    <View style={[styles.tempBarContent, {width: `${percentage}%`}]}></View>
                </View>
                <Text style={styles.text}>{tMax}°</Text>
            </View>
            <View style={styles.bottom}>
                <Text style={[styles.tempText, {left: `${percentage-5}%`}]}>{temp}°</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        width: "100%",
        height: "17%",
    },
    top: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    text: {
        fontSize: 17,
        color: "#fff"
    },
    tempBar: {
        width: "70%",
        height: 17,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "#5ABFA3",
    },
    tempBarContent: {
        height: "100%",
        backgroundColor: "#5ABFA3"
    },
    bottom: {
        height: 20,
        width: "70%",
    },
    tempText: {
        position: "relative",
        fontSize: 17,
        color: "#fff",
    }
})

export default Temp;