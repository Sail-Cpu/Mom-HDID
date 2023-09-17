import { StyleSheet, Text, View } from 'react-native';
//Pages
import Home from "./Pages/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1E26',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
