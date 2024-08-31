import type React from 'react';
import { Text, View } from 'react-native';
import { FacebookSignInButton, GoogleSignInButton } from '../../components';
import { ScaledSheet } from 'react-native-size-matters';

export interface LoginV1Props {
  googleSignIn?: () => void;
  facebookSignIn?: () => void;
  testID?: string;
  header?: string;
  subHeader?: string;
}

/**
 * LoginV1 component properties
 *
 * @property {() => void;} [googleSignIn] - Optional callback triggered when the button is pressed.
 * @property {() => void;} [facebookSignIn] - Optional callback triggered when the button is pressed.
 * @property {string} [testID] - Optional Used to locate this view in end-to-end tests.
 * @property {string} [header] - Optional text displayed as a Header.
 * @property {string} [subHeader] - Optional text displayed as a SubHeader.
 *
 */
const LoginV1: React.FC<LoginV1Props> = (props) => {
  return (
    <View style={styles.main} testID={props.testID}>
      <View style={styles.header} testID={`${props.testID}-header`}>
        <Text style={styles.headerText} testID={`${props.testID}-headerText`}>
          {props.header ?? `Login`}
        </Text>
        <Text
          style={styles.subHeaderText}
          testID={`${props.testID}-subHeaderText`}
        >
          {props.subHeader ?? `Connect with social media`}
        </Text>
      </View>

      <View style={styles.cta} testID={`${props.testID}-subHeader`}>
        <GoogleSignInButton onPress={props.googleSignIn} />
        <FacebookSignInButton onPress={props.facebookSignIn} />
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  main: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  cta: {
    height: '100@vs',
    justifyContent: 'space-between',
  },
  header: {
    height: '90@vs',
  },
  headerText: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: '24@mvs',
    lineHeight: '32@mvs',
  },
  subHeaderText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: '14@mvs',
    lineHeight: '20@mvs',
    color: '#98A2B3',
  },
});

export default LoginV1;
