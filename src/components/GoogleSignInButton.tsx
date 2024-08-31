import React from 'react';
import { Image, Pressable, Text, View, type ViewStyle } from 'react-native';
import { ScaledSheet, vs, s } from 'react-native-size-matters';

const icon = require('../assets/google-signin-icon.png');

export interface GoogleSignInButtonProps {
  height?: number;
  width?: number;
  onPress?: () => void;
}

/**
 * GoogleSignInButton component properties
 *
 * @property {number} [height] - Optional height of the button in pixels.
 * @property {number} [width] - Optional width of the button in pixels.
 * @property {() => void} [onPress] - Optional callback triggered when the button is pressed.
 */
const GoogleSignInButton: React.FC<GoogleSignInButtonProps> = (props) => {
  const buttonCustomMainStyle = () => {
    let result: ViewStyle = {};

    if (props.height) {
      result.height = vs(props.height);
    }

    if (props.width) {
      result.width = s(props.width);
    }

    return result;
  };

  return (
    <Pressable onPress={props.onPress} testID="google-signin-button">
      <View style={[styles.main, styles.button, buttonCustomMainStyle()]}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.label}>{`Sign in with Google`}</Text>
      </View>
    </Pressable>
  );
};

const styles = ScaledSheet.create({
  main: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  button: {
    height: '44@vs',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8@vs',
    borderColor: '#D0D5DD',
    borderWidth: 1,
  },
  label: {
    fontWeight: '600',
    fontSize: '14@msr',
    lineHeight: '20@mvsr',
    color: '#344054',
    marginLeft: '15@s',
  },
  icon: {
    height: '24@ms',
    width: '24@ms',
  },
});

export default GoogleSignInButton;
