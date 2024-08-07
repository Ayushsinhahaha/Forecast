import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Homepage = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'dodgerblue',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('../../src/assets/weather.png')}
        style={{width: 250, height: 250, bottom: 70}}></Image>
      <Text style={{fontSize: 40, fontWeight: 900}}>Weather </Text>
      <Text style={{fontSize: 40, fontWeight: 900}}>Application </Text>
      <Text style={{fontSize: 24, fontWeight: 600, top: 20}}>
        Get to know your weather maps
      </Text>
      <View style={{top: 70,width:'70%'}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Weather')}  style={{backgroundColor:'#6AB5FF',padding:20,borderRadius:20,}}>
          <Text style={{textAlign:'center',color:'#fff',fontWeight:600,fontSize:21}}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({});
