import React, { useContext } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import MapView, { Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewStyle from './../../Utils/MapViewStyle.json'
import { UserLocationContext } from '../../Context/UserLocationContext';


export default function AppMapView() {

  const { location, setLocation } = useContext(UserLocationContext);

  // if (location?.latitude != null) {
  return location?.latitude && (
    <View style={Styles.container}>
      <MapView style={Styles.map}
        // styleStyleSheet={Styles.map}
        provider={PROVIDER_GOOGLE}
        customMapStyle={MapViewStyle}
        showsUserLocation={true}
        region={{
          latitude:  location?.latitude ,
          longitude: location?.longitude,
          latitudeDelta: 0.0422,
          longitudeDelta: 0.0421,
        }}
      >
        {/* <Marker
          coordinates = {{
            latitude:   location?.latitude,
            longitude:  location?.longitude,

            // latitude:
            //   location?.latitude,
            // longitude:
            //   location?.longitude,
         
           } }
        />
        <Marker /> */}
      </MapView>
    </View>
  )
  // }else {}
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    flex: 1,
    height: '100%',
    width: '100%'
  },
  marker: { width: 60, height: 60 }
})