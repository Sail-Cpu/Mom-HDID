import { StyleSheet, Text, View } from 'react-native';
//Components
import BottomHead from "../components/BottomHead/BottomHead";

const Home = () => {
    return(
        <View style={styles.container}>
            <BottomHead />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: "100%",
        height: "100%",
    }
})

export default Home;