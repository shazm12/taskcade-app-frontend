import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';


interface CheckboxProps {
    isChecked: boolean,
    onPress: () => void
}

const Checkbox = (props: CheckboxProps) => {
    const {onPress, isChecked } = props;
    const checked =  props.isChecked ? 'checkbox-blank-circle' : 'checkbox-blank-circle-outline';
    return (
        <Pressable onPress={onPress}>
            <MaterialCommunityIcons name={checked} size={24} />
        </Pressable>
    )
}

export default Checkbox;
