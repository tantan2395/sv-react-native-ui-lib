import React, { type ReactNode } from 'react';
import { View, type FlexAlignType } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

export interface RowProps {
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
 * Row component properties
 *
 * @property {FlexAlignType} [justifyContent] - Optional
 * @property {FlexAlignType} [alignItems] - Optional
 * @property {string} [testID] - Optional Used to locate this view in end-to-end tests.
 */
const Row: React.FC<RowProps> = (props) => {
  return (
    <View
      style={[
        styles.row,
        { justifyContent: props.justifyContent, alignItems: props.alignItems },
      ]}
    >
      {props.children}
    </View>
  );
};

const styles = ScaledSheet.create({
  row: {
    position: 'relative',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});

export default Row;
