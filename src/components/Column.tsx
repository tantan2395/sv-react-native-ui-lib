import React, { type ReactNode } from 'react';
import { View, type FlexAlignType } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

export interface ColumnProps {
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  alignItems?: FlexAlignType;
  testID?: string;
  children?: ReactNode;
}

/**
 * Column component properties
 *
 * @property {FlexAlignType} [justifyContent] - Optional
 * @property {FlexAlignType} [alignItems] - Optional
 * @property {string} [testID] - Optional Used to locate this view in end-to-end tests.
 */
const Column: React.FC<ColumnProps> = (props) => {
  return (
    <View
      style={[
        styles.Column,
        { justifyContent: props.justifyContent, alignItems: props.alignItems },
      ]}
      testID={props.testID}
    >
      {props.children}
    </View>
  );
};

const styles = ScaledSheet.create({
  Column: {
    position: 'relative',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});

export default Column;
