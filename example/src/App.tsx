import { StyleSheet, View } from 'react-native';
import { Button } from 'sv-react-native-ui-lib';

export default function App() {
  const icon = require('../assets/icon.png');

  return (
    <View style={styles.main}>
      <Button
        label="Button CTA 1"
        leadingIconSrc={icon}
        trailingIconSrc={icon}
      />

      <Button
        label="Button CTA 2"
        leadingIconSrc={icon}
        trailingIconSrc={icon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    margin: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
