import React from 'react';
import { Text, type TextStyle } from 'react-native';
import { ScaledSheet, mvs } from 'react-native-size-matters';

export interface LabelProps {
  text?: string;
  color?: string;
  fontSize?: number;
  lineHeight?: number;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900
    | 'ultralight'
    | 'thin'
    | 'light'
    | 'medium'
    | 'regular'
    | 'semibold'
    | 'condensedBold'
    | 'condensed'
    | 'heavy'
    | 'black'
    | undefined;
  testID?: string;
}

/**
 * Label component properties
 *
 * @property {LabelVariant} [text] - Optional
 * @property {string} [color] - Optional
 * @property {number} [fontSize] - Optional
 * @property {number} [lineHeight] - Optional
 * @property {string} [fontWeight] - Optional
 * @property {string} [testID] - Optional Used to locate this view in end-to-end tests.
 */
const Label: React.FC<LabelProps> = (props) => {
  const labelCustomMainStyle = () => {
    let result: TextStyle = {};

    if (props.fontSize) {
      result.fontSize = mvs(props.fontSize);
    }

    if (props.lineHeight) {
      result.lineHeight = mvs(props.lineHeight);
    }

    result.fontWeight = props.fontWeight;
    result.color = props.color;

    return result;
  };

  return (
    <Text style={[styles.label, labelCustomMainStyle()]} testID={props.testID}>
      {props.text}
    </Text>
  );
};

const styles = ScaledSheet.create({
  label: {
    position: 'relative',
    fontWeight: '100',
    fontSize: '14@msr',
    lineHeight: '20@mvsr',
    color: '#1D2939',
  },
});

export default Label;
