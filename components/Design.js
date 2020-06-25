import React, { Component } from 'react';
import {StyleSheet, Text, View, StatusBar ,TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback,
  ImageBackground, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Tile, Icon, Button, colors } from 'react-native-elements';
import Symbol from './Symbol';
import Winner from './Winner';
class Design extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            player: 'First',
            arr : [0,0,0,0,0,0,0,0,0],
            winner: 'null'
        }
        this.onPress = this.onPress.bind(this);
    }
    onPress(value) {
          
        console.log(value);
        if(this.state.winner=='null'){
            if(this.state.player == 'First')
            {
                var newArr=[];
                for(var i=0;i<9;i++)
                    {
                        if(i==value)
                        newArr.push(1);
                        else
                        newArr.push(this.state.arr[i]);
                    }
                    this.setState({ arr : newArr}, () => {
                            var arr1 = this.state.arr;
                            console.log(this.state.arr);
                            if( (arr1[0]!=0 && arr1[0]==arr1[1] && arr1[1]==arr1[2]) || (arr1[3]!=0 && arr1[3]==arr1[4] && arr1[4]==arr1[5] ) || (arr1[6]!=0 && arr1[6]==arr1[7] && arr1[7]==arr1[8])
                                    || (arr1[0]!=0 && arr1[0]==arr1[3] && arr1[3]==arr1[6]) || (arr1[1]!=0 && arr1[1]==arr1[4] && arr1[4]==arr1[7]) || (arr1[2]!=0 && arr1[2]==arr1[5] && arr1[5]==arr1[8])
                                    || (arr1[0]!=0 && arr1[0]==arr1[4] && arr1[4]==arr1[8]) || (arr1[2]!=0 && arr1[2]==arr1[4] && arr1[4]==arr1[6]))
                            { console.log('yes');
                                console.log(this.state.player);
                                this.setState({winner: this.state.player});
                                console.log(this.state.winner);
                                
                            }
                          else{
                              this.setState({player: 'Second'});
                          }
                    });
                
            }
            else {
                var newArr=[];
                for(var i=0;i<9;i++)
                    {
                        if(i==value)
                        newArr.push(2);
                        else
                        newArr.push(this.state.arr[i]);
                    }
                    this.setState({ arr : newArr}, () => {
                        var arr1 = this.state.arr;
                        console.log(this.state.arr);
                            if( (arr1[0]!=0 && arr1[0]==arr1[1] && arr1[1]==arr1[2]) || (arr1[3]!=0 && arr1[3]==arr1[4] && arr1[4]==arr1[5] ) || (arr1[6]!=0 && arr1[6]==arr1[7] && arr1[7]==arr1[8])
                                    || (arr1[0]!=0 && arr1[0]==arr1[3] && arr1[3]==arr1[6]) || (arr1[1]!=0 && arr1[1]==arr1[4] && arr1[4]==arr1[7]) || (arr1[2]!=0 && arr1[2]==arr1[5] && arr1[5]==arr1[8])
                                    || (arr1[0]!=0 && arr1[0]==arr1[4] && arr1[4]==arr1[8]) || (arr1[2]!=0 && arr1[2]==arr1[4] && arr1[4]==arr1[6]))
                            { console.log('yes');
                                console.log(this.state.player);
                                this.setState({winner: this.state.player});
                                console.log(this.state.winner);
                                
                            }
                            else{
                                this.setState({player: 'First'});
                            }
                    });
                
            }
        
        
         }
       
     
        
        
    }

    resetGame(){
        var newArr=[0,0,0,0,0,0,0,0,0];
        this.setState({ arr: newArr, player: 'First', winner: 'null'});
        
    }
    render()
    {
        return(
            
            <View style={styles.container} >
                <Image source={require('../assets/background.png')} style={styles.backgroundImage} />
                <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
                <View style={{margin:50, alignItems: 'center'}}>
                     <Text style={styles.textStyle}>Let's Play</Text>
                    <Text style={styles.textStyle}>Tic Tac Toe</Text>
                </View>
                </Animatable.View>
                <Winner winner={this.state.winner} />
                <Animatable.View animation="fadeInUp" duration={2000} delay={3000}>
                <View style={{ flexDirection: 'column', alignItems: 'center',marginTop:100}}>   
                    <View style={styles.container2}>
                         <TouchableOpacity  onPress={() => this.onPress(0)} ><View style={styles.rectStyle}><View styles={{  alignItems: 'center', justifyContent: 'center'}}><Symbol  value={this.state.arr[0]} /></View></View></TouchableOpacity>
                         <TouchableOpacity  onPress={() => this.onPress(1)} ><View style={styles.rectStyle}><Symbol  value={this.state.arr[1]} /></View></TouchableOpacity>
                         <TouchableOpacity  onPress={() => this.onPress(2)} ><View style={styles.rectStyle}><Symbol  value={this.state.arr[2]} /></View></TouchableOpacity>
                    </View>
                    <View style={styles.container2}>
                         <TouchableOpacity  onPress={() => this.onPress(3)} ><View style={styles.rectStyle} ><Symbol  value={this.state.arr[3]} /></View></TouchableOpacity>
                         <TouchableOpacity  onPress={() => this.onPress(4)} ><View style={styles.rectStyle}><Symbol  value={this.state.arr[4]} /></View></TouchableOpacity>
                         <TouchableOpacity  onPress={() => this.onPress(5)} ><View style={styles.rectStyle}><Symbol  value={this.state.arr[5]} /></View></TouchableOpacity>
                    </View>
                    <View style={styles.container2}>
                         <TouchableOpacity  onPress={() => this.onPress(6)} ><View style={styles.rectStyle}><Symbol  value={this.state.arr[6]} /></View></TouchableOpacity>
                         <TouchableOpacity  onPress={() => this.onPress(7)} ><View style={styles.rectStyle}><Symbol  value={this.state.arr[7]} /></View></TouchableOpacity>
                         <TouchableOpacity  onPress={() => this.onPress(8)} ><View style={styles.rectStyle}><Symbol  value={this.state.arr[8]} /></View></TouchableOpacity>
                    </View>
                    
                 </View>
                    </Animatable.View>
                    <Animatable.View animation="fadeInUp" duration={2000} delay={4000}>
                    <View style={{marginTop:50}}>
                        <Text style={styles.textStyle2}>{this.state.player} Player Turn--></Text>
                    </View>
                    </Animatable.View>
                    <Animatable.View animation="fadeInUp" duration={2000} delay={5000}><View style={styles.button}><Button raised reverse type='clear'  title='Play Again'titleStyle={{ color: 'yellow'}} onPress={() => this.resetGame()}></Button></View></Animatable.View>
                        
             </View>
            
        );
    }
}

export default Design;

const styles = StyleSheet.create({
    container: {
       alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
        
    },
    container2: {
        
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textStyle: {
        fontFamily: 'Roboto',
        fontSize: 40,
        color: '#FF7111'
    },
    textStyle2:{
        fontSize: 20,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        color: 'blue'
    },
   rectStyle: {
       width: 100,
       height: 100,
       borderWidth: 3,
       

   },
   backgroundImage: {
    position: 'absolute',
    opacity: 1
   },
   button: {
       
       marginTop: 100,
       width: 300,
       borderRadius: 100,
       borderWidth: 2
   }
})