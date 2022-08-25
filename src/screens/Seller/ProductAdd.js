import React from 'react';
import { StyleSheet ,View,Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import Input from '../../components/Input';
import { COLORS } from '../../constants/Index';
export default function ProductAdd ({navigation}) {
    return (
        <SafeAreaView >
            <Icon
                name="close-circle"
                size={40}
                style={styles.closeCircle}
                onPress={()=>navigation.goBack()}
            />
            <View style={styles.container}>
                <Text style={ {fontFamily:'Inter-Bold',fontSize:18,marginTop:10}}>Add a new Product Below</Text>
            <Input
                label="Product Name"
                placeholder="Product Name"
            />
            <Input
                    label="Product Quantity"
                    placeholder="Product Quantity"
            />
            <Input
                label="Product Price"
                />
                <Input
                label="Store adress"
            />
                <View style={{ alignItems: 'center',marginTop:15}}>
                    <Text style={ {fontFamily:'Inter-Regular',fontSize:17}}>Click Below to Upload Image</Text>
                    <Icon
                        name="file-upload"
                        size={100}
                        style={{color: COLORS.lightPrimary}}
                    />   
            </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        paddingBottom:10
    },
    closeCircle: {
        color: COLORS.lightPrimary,
        margin: 5,
    }

})