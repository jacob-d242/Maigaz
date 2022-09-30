import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Icon  from 'react-native-vector-icons/AntDesign'
import { COLORS } from '../../../constants/Index'
import MapView from 'react-native-maps'
export default function Maps({navigation}) {
    return (
        <View style={{alignItems:'flex-start'}}> 
            <Icon
                onPress={() => navigation.goBack()}
                name="back"
                size={26}
                style={styles.icon}
            />
             <MapView
                initialRegion={{
                    
                    longitude: 39.667595543696606,
                    latitude: -4.0649330990155566,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                style={styles.map}
                provider="google"
            ></MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        padding: 5,
        color: '#fff',
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        margin: 5,
        width: 40,
        height: 40
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
})