import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { COLORS } from '../../../constants/Index'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function Input({
    label,
    password,
    error,
    iconName,
    onFocus = () => { },
    ...props
}) {
    const [isFocused, setIsfocused] = useState(false);
    const [hidePassword,setHidePassword] = useState(password);
    return (
        <View style={ {marginTop:15}}>
            <Text style={styles.inputlabel} >{label}</Text>
            <View style={[styles.inputcontainer,
                {
                    borderColor: error
                        ? 'red'
                        : isFocused
                        ? COLORS.primary
                        : COLORS.secondary
                },
            ]}>
                <Icon
                    name={iconName}                    
                    style={styles.icons}
                />
                <TextInput
                    secureTextEntry={hidePassword}
                    autoCorrect={false}
                    onFocus={() => {
                        onFocus();
                        setIsfocused(true);
                    }}
                    onBlur={() => {
                        setIsfocused(false);
                    }}
                    style={{fontSize:16,flex:1,color:COLORS.lightSecondary}}
                    {...props}
                />
                {password &&
                     <Icon
                     onPress={()=>setHidePassword(!hidePassword)}
                     style={styles.icons}
                     name={hidePassword ? 'eye-outline':'eye-off-outline'}
                 />
                }
                
              
               
            </View>
            {error && (
                <Text style={styles.errorMessage}>{ error}</Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    inputlabel: {
        paddingTop:2,
        fontSize: 18,
        fontFamily: "Inter-Medium",
        color:COLORS.lightSecondary
    },
    inputcontainer: {
        borderRadius: 8,
        height: 46,
        width: '90%',
        backgroundColor: '#FFFFFF',
        borderWidth: 0.8,
        paddingHorizontal: 8,
        flexDirection:'row',
        alignItems: 'center',
    },
    icons: {
        color: COLORS.lightSecondary,
        marginRight: 10,
        fontSize: 25
    },
    errorMessage: {
        color: 'red',
        fontSize: 15,
        marginTop: 7,
    }
})