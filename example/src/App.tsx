import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { add, minus, multiply, divide } from '@react-native-mdt/awesome-native-module';

export default function App() {
  const [resultAdd, setResultAdd] = React.useState<number | undefined>();
  const [resultMin, setResultMin] = React.useState<number | undefined>();
  const [resultMul, setResultMul] = React.useState<number | undefined>();
  const [resultDiv, setResultDiv] = React.useState<number | undefined>();

  React.useEffect(() => {
    add(8, 4).then(setResultAdd);
    minus(8, 4).then(setResultMin);
    multiply(8, 4).then(setResultMul);
    divide(8, 4).then(setResultDiv);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result Add: {resultAdd}</Text>
      <Text>Result Minus: {resultMin}</Text>
      <Text>Result Multiply: {resultMul}</Text>
      <Text>Result Divide: {resultDiv}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
