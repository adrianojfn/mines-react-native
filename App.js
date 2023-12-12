import { StyleSheet, Text, View } from 'react-native';
import params from './src/params'
import Field from './src/components/Field';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Starting the Mines!</Text>
      <Text>Grid size: {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>

      <Field />
      <Field opened />
      <Field opened nearMines={1}/>
      <Field opened nearMines={2}/>
      <Field opened nearMines={3}/>
      <Field opened nearMines={6}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
