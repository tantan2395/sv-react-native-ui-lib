import { StyleSheet, View } from 'react-native';
import {
  Button,
  ButtonVariant,
  Card,
  Column,
  Label,
  Row,
} from 'sv-react-native-ui-lib';

export default function App() {
  const icon = require('../assets/icon.png');

  return (
    <View style={styles.main}>
      <Card>
        <Column>
          <Button
            variant={ButtonVariant.IconOnly}
            leadingIconSrc={icon}
            height={32}
            width={32}
          />
          <Button
            variant={ButtonVariant.IconOnly}
            leadingIconSrc={icon}
            height={32}
            width={32}
          />
        </Column>
      </Card>

      <Card>
        <Row justifyContent="space-around" alignItems="flex-end">
          <Button
            variant={ButtonVariant.IconOnly}
            leadingIconSrc={icon}
            height={32}
            width={32}
          />
          <Button
            variant={ButtonVariant.IconOnly}
            leadingIconSrc={icon}
            height={32}
            width={32}
          />
        </Row>
      </Card>

      <Label text="Hello World" fontWeight={'200'} />
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
