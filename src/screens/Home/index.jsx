import { View, Text } from 'react-native';
import styles from './style';
import Title from '../../components/Title';

export default function Home() {
  return (
    <View style = {styles.container}>
      <Title title={"Today is birthdarte to Felps Felipada 🎂"}/>
    </View>
  )
}