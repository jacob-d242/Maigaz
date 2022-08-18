import React from 'react'
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS } from '../../../constants/Index'
export default function ProfileBtn({heading,iconName}) {
    return (
        <TouchableOpacity
            style={styles.profileButton}
        >
            <TextInput style={styles.heading}>{heading}</TextInput>
            <Icon
                name={iconName}
                size={35}
                style={styles.iconStyle}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    profileButton: {
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        height: 50
        
    },
    iconStyle: {
        marginRight: 20,
        color:COLORS.lightPrimary,
    },
    heading: {
        fontSize: 20,
        marginLeft: 10,
    }
})