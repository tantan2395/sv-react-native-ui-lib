import { StyleSheet, View } from 'react-native';
import { LoginV1 } from 'sv-react-native-ui-lib';

export default function App() {
  // const icon = require('../assets/icon.png');

  return (
    <View style={styles.main}>
      {/* <Button
        label="Button CTA 1"
        leadingIconSrc={icon}
        trailingIconSrc={icon}
      /> */}

      <LoginV1 />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    height: '100%',
    marginHorizontal: 40,
    justifyContent: 'center',
  },
});
