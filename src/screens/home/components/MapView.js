import React,{useState} from 'react'
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import Icon  from 'react-native-vector-icons/AntDesign'
import { COLORS } from '../../../constants/Index'
import MapView from 'react-native-maps'
export default function Maps({ navigation }) {
    const [initiaRegion, setInitialRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })
    return (
        <View style={{ alignItems: 'center' }}> 
            <View style={{ flexDirection:'row',justifyContent: 'space-around',marginTop:10}}>
                <Icon
                    onPress={() => navigation.goBack()}
                    name="back"
                    size={22}
                    style={styles.icon}
                />

            <TextInput
                style={styles.input}
            />
            </View>
             <MapView
                initialRegion={{
                    
                    longitude: initiaRegion.longitude,
                    latitude: initiaRegion.latitude,
                    latitudeDelta: initiaRegion.latitudeDelta,
                    longitudeDelta: initiaRegion.longitudeDelta,
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
        height: 35
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    input: {
        borderRadius:20,
        width: '80%',
        backgroundColor: COLORS.primary,
        height: 40,
    }
})