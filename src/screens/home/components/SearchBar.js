import React ,{useState} from 'react';
import { View,TextInput,StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/Index';

export default function () {
    const [seachText,setSearchText] = useState()
    return (
        <View style={{alignItems:'center'}}>

            <View style={styles.container}>
                <TextInput
                    placeholder="What are looking for?"
                    onChangeText={text => setSearchText }
                    />
            </View>
         </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin:8,
        width: '90%',
        borderRadius: 30,
        borderColor: COLORS.primary,
        borderWidth: 1,
        alignItems: 'center',
    }
})