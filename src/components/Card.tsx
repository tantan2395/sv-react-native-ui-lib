import React, { type ReactNode } from 'react';
import { Pressable, View, type ViewStyle } from 'react-native';
import { ScaledSheet, vs, s } from 'react-native-size-matters';

export interface CardProps {
  height?: number;
  width?: number;
  marginRight?: number;
  marginLeft?: number;
  marginBottom?: number;
  marginTop?: number;
  paddingRight?: number;
  paddingLeft?: number;
  paddingBottom?: number;
  paddingTop?: number;
  testID?: string;
  backgroundColor?: string;
  children?: ReactNode;
  onPress?: () => void;
}

/**
 * Card component properties
 *
 * @property {string} [label] - Optional text displayed on the Card.
 * @property {number} [height] - Optional height of the Card in pixels.
 * @property {number} [width] - Optional width of the Card in pixels.
 * @property {number} [marginRight] - Optional marginRight of the Card in pixels.
 * @property {number} [marginLeft] - Optional marginLeft of the Card in pixels.
 * @property {number} [marginBottom] - Optional marginBottom of the Card in pixels.
 * @property {number} [marginTop] - Optional marginTop of the Card in pixels.
 * @property {number} [paddingRight] - Optional paddingRight of the Card in pixels.
 * @property {number} [paddingLeft] - Optional paddingLeft of the Card in pixels.
 * @property {number} [paddingBottom] - Optional paddingBottom of the Card in pixels.
 * @property {number} [paddingTop] - Optional paddingTop of the Card in pixels.
 * @property {string} [backgroundColor] - Optional color of the Card (e.g., hex, RGB).
 * @property {() => void} [onPress] - Optional callback triggered when the button is pressed.
 * @property {string} [testID] - Optional Used to locate this view in end-to-end tests.
 */
const Card: React.FC<CardProps> = (props) => {
  const cardCustomMainStyle = () => {
    let result: ViewStyle = {};

    if (props.height) {
      result.height = vs(props.height);
    }

    if (props.width) {
      result.width = s(props.width);
    }

    if (props.marginRight) {
      result.marginRight = s(props.marginRight);
    }

    if (props.marginLeft) {
      result.marginLeft = s(props.marginLeft);
    }

    if (props.marginBottom) {
      result.marginBottom = vs(props.marginBottom);
    }

    if (props.marginTop) {
      result.marginTop = vs(props.marginTop);
    }

    if (props.paddingRight) {
      result.paddingRight = s(props.paddingRight);
    }

    if (props.paddingLeft) {
      result.paddingLeft = s(props.paddingLeft);
    }

    if (props.paddingBottom) {
      result.paddingBottom = vs(props.paddingBottom);
    }

    if (props.paddingTop) {
      result.paddingTop = vs(props.paddingTop);
    }

    result.backgroundColor = props.backgroundColor;

    return result;
  };

  const renderCard = () => (
    <View style={[styles.card, cardCustomMainStyle()]} testID={props.testID}>
      {props.children}
    </View>
  );

  if (props.onPress) {
    return (
      <Pressable onPress={props.onPress} testID={`${props.testID}-button`}>
        {renderCard()}
      </Pressable>
    );
  }

  return renderCard();
};

const styles = ScaledSheet.create({
  card: {
    position: 'relative',
    height: '100@vs',
    width: '100@s',
    borderRadius: '16@vs',
    borderColor: '#D0D5DD',
    borderWidth: 1,
    marginRight: '0@s',
    marginLeft: '0@s',
    marginBottom: '0@vs',
    marginTop: '0@vs',
    paddingRight: '0@s',
    paddingLeft: '0@s',
    paddingBottom: '0@vs',
    paddingTop: '0@vs',
  },
});

export default Card;
