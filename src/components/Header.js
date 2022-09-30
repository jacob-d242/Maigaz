import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../constants/Index'
export default function Header({ Title, style,iconName ,onPress}) {
    return (
        <View style={styles.header}>
            <Icon
                onPress={onPress}
                size={30}
                name='arrow-left'
                style={{marginLeft:10}}
            />
            <Text style={styles.headerTitle}>
                {Title}
            </Text>
            <Icon
                
                size={30}
                name={iconName}
                style={{marginRight:10}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        backgroundColor: '#ffff',
        height: 60,
        width: '100%',
},
    headerTitle: {
        alignItems: 'center',
        color: COLORS.lightSecondary,
        fontSize: 30,
        fontFamily:'Inter-Bold',
    }
})