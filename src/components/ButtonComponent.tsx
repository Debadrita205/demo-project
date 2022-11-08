/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {ButtonComponentProps} from './types';

const ButtonComponent: FC<ButtonComponentProps> = props => {
    return (
        <TouchableOpacity
            style={[
                styles.buttonContainer,
                {
                    backgroundColor: props.backgroundColor,
                    borderRadius: props.borderRadius ? props.borderRadius : 10,
                    opacity: props.isDisabled ? 0.8 : 1,
                    borderColor: props.borderColor ?? props.backgroundColor,
                    borderWidth: props.borderWidth ?? props.borderWidth,
                },
                props.textLeft && {
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                },
            ]}
            disabled={props.isDisabled ? props.isDisabled : false}
            onPress={props.onPressed}
            activeOpacity={0.5}
        >
            <Text
                style={[
                    styles.textStyle,
                    {
                        color: props.textColor,
                        fontSize: props.textSize ? props.textSize : 18,
                    },
                ]}
            >
                {props.title}
            </Text>
        </TouchableOpacity>
    );
};

export default ButtonComponent;

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontWeight: '500',
    },
    iconStyles: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
