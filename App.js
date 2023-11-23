import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends React.Component {

  state = {
    value: 0,
    total_taps: 0
  }

  incrementValue = () => {
    this.setState({
      value: this.state.value + 1,
      total_taps: this.state.total_taps + 1
    })
    console.log("Value: " + (this.state.value + 1))
  }

  decrementValue = () => {
    this.setState({
      value: this.state.value - 1,
      total_taps: this.state.total_taps + 1
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 60, marginBottom: -20}}>{this.state.value}</Text>
        <Text style={{fontSize: 16, padding: 20, color: 'grey'}}>{"Total taps: " + this.state.total_taps}</Text>
        <StatusBar style="auto" />
        <View style={{flexDirection: 'row'}}>
          <Button
            onPress={this.decrementValue}
            icon={
              <Icon
                name="minus"
                size={15}
                color="white"
              />
            }
            title=" Decrease"
          />
          <Text> </Text>
          <Button 
            onPress={this.incrementValue} 
            icon={
              <Icon
                name="plus"
                size={15}
                color="white"
              />
            }
            title=" Increase"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
