import React, { Component } from 'react';
import {StyleSheet, Image,Text, View, StatusBar, Button ,TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback,} from 'react-native';
import { Tile, Icon } from 'react-native-elements';

class Symbol extends Component{
    constructor(props){
        super(props);
        
    }

    render()
    {
        if(this.props.value == 1)
          return (
              <View style={styles.container}>
                <Image  style={styles.container}
               source={require('../assets/circle.jpg')}
               />
               </View>
          );

        else if(this.props.value == 0 )
        {
            return(<Text></Text>);
        }
        else {
            return (
                <View style={styles.container}>
                  <Image  style={styles.container}
                 source={require('../assets/cross.png')}
                 />
                 </View>
            );
        }
    }
}

export default Symbol;
const styles=StyleSheet.create({
    container: {
        height: 80,
        width: 80,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center'
    }
})