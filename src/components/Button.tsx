import React from 'react';
import {
  Image,
  Pressable,
  Text,
  View,
  type ImageSourcePropType,
  type ViewStyle,
  type ImageStyle,
} from 'react-native';
import { ScaledSheet, vs, s } from 'react-native-size-matters';
import { ButtonVariant } from '../constants';

export interface ButtonProps {
  variant?: ButtonVariant;
  label?: string;
  height?: number;
  width?: number;
  buttonColor?: string;
  labelColor?: string;
  leadingIconSrc?: ImageSourcePropType;
  trailingIconSrc?: ImageSourcePropType;
  iconHeight?: number;
  iconWidth?: number;
  onPress?: () => void;
  testID?: string;
}

/**
 * Button component properties
 *
 * @property {ButtonVariant} [variant] - Optional Variant type of the button
 * @property {string} [label] - Optional text displayed on the button.
 * @property {number} [height] - Optional height of the button in pixels.
 * @property {number} [width] - Optional width of the button in pixels.
 * @property {string} [buttonColor] - Optional color of the button (e.g., hex, RGB).
 * @property {string} [labelColor] - Optional color of the label (e.g., hex, RGB).
 * @property {ImageSourcePropType} [leadingIconSrc] - Optional source for the leading (left) icon.
 * @property {ImageSourcePropType} [trailingIconSrc] - Optional source for the trailing (right) icon.
 * @property {number} [iconHeight] - Optional height of the icons in pixels.
 * @property {number} [iconWidth] - Optional width of the icons in pixels.
 * @property {() => void} [onPress] - Optional callback triggered when the button is pressed.
 * @property {string} [testID] - Optional Used to locate this view in end-to-end tests.
 */
const Button: React.FC<ButtonProps> = (props) => {
  if (props.variant === ButtonVariant.IconOnly) {
    if (!props.leadingIconSrc) {
      throw new Error('leadingIconSrc is required.');
    }
  }

  const buttonCustomMainStyle = () => {
    let result: ViewStyle = {};

    if (props.height) {
      result.height = vs(props.height);
    }

    if (props.width) {
      result.width = s(props.width);
    }

    if (props.buttonColor) {
      result.backgroundColor = props.buttonColor;
    }

    return result;
  };

  const renderIcon = (src: ImageSourcePropType) => {
    let result: ImageStyle = {};

    if (props.iconHeight) {
      result.height = vs(props.iconHeight);
    }

    if (props.iconWidth) {
      result.width = s(props.iconWidth);
    }

    return <Image source={src} style={[styles.icon, result]} />;
  };

  const renderLabel = () => {
    if (props.variant !== ButtonVariant.IconOnly) {
      if (props.label) {
        return (
          <Text
            style={[styles.label, { color: props.labelColor }]}
            testID={`${props.testID}-button-label`}
          >
            {props.label}
          </Text>
        );
      }
    }

    return;
  };

  const renderTrailingIcon = () => {
    if (props.variant !== ButtonVariant.IconOnly) {
      if (props.trailingIconSrc) {
        return renderIcon(props.trailingIconSrc);
      }
    }

    return;
  };

  const renderLeadingIcon = () => {
    if (props.variant === ButtonVariant.IconOnly) {
      if (props.leadingIconSrc) {
        return renderIcon(props.leadingIconSrc);
      }
    }

    return;
  };

  return (
    <Pressable onPress={props.onPress} testID={`${props.testID}-button`}>
      <View style={[styles.main, styles.button, buttonCustomMainStyle()]}>
        {renderLeadingIcon()}
        {renderLabel()}
        {renderTrailingIcon()}
      </View>
    </Pressable>
  );
};

const styles = ScaledSheet.create({
  main: {
    flexDirection: 'row',
    backgroundColor: '#444CE7',
    position: 'relative',
  },
  button: {
    height: '48@vs',
    width: '129@s',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: '8@vs',
  },
  label: {
    fontWeight: '600',
    fontSize: '14@msr',
    lineHeight: '20@mvsr',
    color: '#FFFFFF',
  },
  icon: {
    height: '24@ms',
    width: '24@ms',
  },
});

export default Button;
