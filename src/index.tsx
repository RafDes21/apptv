import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from './styles';
import { Card, ViewVideo } from './components';

export default function App() {
  return (
    <View style={styles.container}>
        <ViewVideo/>
        <View style={styles.contentCard}>
            <Card/>
        </View>
    </View>
  );
}
