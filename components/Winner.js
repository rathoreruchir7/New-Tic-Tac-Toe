import React, { Component } from 'react';
import {StyleSheet, Image,Text, View, StatusBar, Button ,TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback,} from 'react-native';
import { Tile, Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
class Winner extends Component{
    constructor(props){
        super(props);
    }

    render()
    {
        if(this.props.winner != 'null')
         {
             return (
                <Animatable.View animation="fadeInRightBig" duration={2000}> 
             <Text style={{color: 'green' , fontFamily: 'monospace' , fontSize: 30}}>{this.props.winner} Player Wins</Text>
             </Animatable.View>
             );
         }

         else{
             return (<Text></Text>);
         }
    }
}

export default Winner;