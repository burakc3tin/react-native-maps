import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
           <MapView
          style= {styles.map}
    initialRegion={{
      latitude: 41.015137,
      longitude: 28.979530,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map :{
    alignSelf:'stretch',
    height : 500
  }
})
export default App;
