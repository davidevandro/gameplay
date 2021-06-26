
import React from 'react';

import { theme } from '../../global/styles/theme';
import { TextInput, TextInputProps } from 'react-native';
import { styles } from './styles';

export function TextArea({...rest}:TextInputProps){
    

    return (
        <TextInput
            style = {styles.container}
            {...rest}
        />
    );
}