import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import babelConfig from '../../babel.config';

const Weather = () => {
  const [showSearch, toggleSearch] = useState(false);
  return (
    <SafeAreaView style={{backgroundColor: 'dodgerblue', flex: 2}}>
      {/* Searchbar */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: 20,
          backgroundColor: showSearch ? '#fff' : 'transparent',
          borderRadius: 40,
        }}>
        {showSearch ? (
          <TextInput
            placeholder="Search  City"
            placeholderTextColor={'#000'}
            style={{left: 20}}
          />
        ) : null}

        <TouchableOpacity
          onPress={() => toggleSearch(!showSearch)}
          style={{
            width: 50,
            backgroundColor: 'lightgrey',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
          }}>
          <Icon name="search" size={20} />
        </TouchableOpacity>
      </View>
      {/* Weather Display */}
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'flex-start',
          flex: 1,
          top: 30,
        }}>
        {/* Location */}
        <View style={{flexDirection: 'row', top: 20}}>
          <Text style={{fontSize: 30, fontWeight: 900, color: '#fff'}}>
            Patna ,{' '}
          </Text>
          <Text
            style={{
              alignItems: 'center',
              fontSize: 20,
              justifyContent: 'center',
              top: 10,
              color: '#fff',
              fontWeight: 700,
            }}>
            Bihar
          </Text>
        </View>
        {/* Image */}
        <View
          style={{alignContent: 'center', justifyContent: 'center', top: 30}}>
          <Image
            source={require('../assets/partlycloudy.png')}
            style={{width: 200, height: 200}}
          />
        </View>
        {/* Temperature */}
        <View style={{alignItems: 'center', justifyContent: 'center', top: 40}}>
          <Text style={{fontSize: 40, fontWeight: 900, color: '#fff'}}>
            23&deg;
          </Text>
          <Text style={{fontSize: 25, fontWeight: 600, color: '#fff'}}>
            Partly Cloudy
          </Text>
        </View>
      </View>
      {/* other stats like wind speed and sunrise time */}
      <View
        style={{
          flex: 1,
          alignContent: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            top: 100,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/wind.png')}
              style={{height: 30, width: 30}}
            />
            <Text
              style={{
                fontSize: 18,
                marginLeft: 10,
                color: '#fff',
                fontWeight: 800,
              }}>
              22Km
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/drop.png')}
              style={{height: 30, width: 30}}
            />
            <Text
              style={{
                fontSize: 18,
                marginLeft: 10,
                color: '#fff',
                fontWeight: 800,
              }}>
              23%
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/sun.png')}
              style={{height: 30, width: 30}}
            />
            <Text
              style={{
                fontSize: 18,
                marginLeft: 10,
                color: '#fff',
                fontWeight: 800,
              }}>
              6:05 AM
            </Text>
          </View>
        </View>
      </View>
      {/* Daily Forecast */}
      <View
        style={{
          justifyContent: 'space-around',
          alignItems: 'flex-start',
          padding: 10,
          flex: 1,
          top:40
        }}>
        <View style={{alignItems: 'flex-start'}}>
          {/* Heading */}
          <View
            style={{
              flexDirection: 'row',
              padding: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="calendar" size={20} color={'#fff'} />
            <Text style={{color: '#fff', marginLeft: 10, fontWeight: 800}}>
              Daily Forecast
            </Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{top:10,padding:15,}}>
            <View style={{flexDirection:'row',flex:1}}>
              <View style={{padding:10,borderRadius:20,backgroundColor:'grey',height:'60%',opacity:0.6}}>
                <Image
                  source={require('../assets/heavyrain.png')}
                  style={{height: 50, width: 50}}
                />
                <Text style={{fontSize:15,textAlign:'center',color:'#fff',fontWeight:800}}>Monday</Text>
                <Text style={{fontSize:15,textAlign:'center',color:'#fff',fontWeight:800}}>13&deg;</Text>
              </View>
              <View style={{padding:10,borderRadius:20,backgroundColor:'grey',height:'60%',opacity:0.6,left:10}}>
                <Image
                  source={require('../assets/heavyrain.png')}
                  style={{height: 50, width: 50}}
                />
                 <Text style={{fontSize:15,textAlign:'center',color:'#fff',fontWeight:800}}>Tuesday</Text>
                 <Text style={{fontSize:15,textAlign:'center',color:'#fff',fontWeight:800}}>13&deg;</Text>
              </View>
              <View style={{padding:10,borderRadius:20,backgroundColor:'grey',height:'60%',opacity:0.6,left:20}}>
                <Image
                  source={require('../assets/heavyrain.png')}
                  style={{height: 50, width: 50}}
                />
                 <Text style={{fontSize:15,textAlign:'center',color:'#fff',fontWeight:800}}>Wednesday</Text>
                <Text style={{fontSize:15,textAlign:'center',color:'#fff',fontWeight:800}}>13&deg;</Text>
              </View>
              <View style={{padding:10,borderRadius:20,backgroundColor:'grey',height:'60%',opacity:0.6,left:30}}>
                <Image
                  source={require('../assets/heavyrain.png')}
                  style={{height: 50, width: 50}}
                />
                 <Text style={{fontSize:15,textAlign:'center',color:'#fff',fontWeight:800}}>Thursday</Text>
                <Text style={{fontSize:15,textAlign:'center',color:'#fff',fontWeight:800}}>13&deg;</Text>
              </View>
              <View style={{padding:10,borderRadius:20,backgroundColor:'grey',height:'60%',opacity:0.6,left:40}}>
                <Image
                  source={require('../assets/heavyrain.png')}
                  style={{height: 50, width: 50}}
                />
                 <Text style={{fontSize:15,textAlign:'center',color:'#fff',fontWeight:800}}>Friday</Text>
                <Text style={{fontSize:15,textAlign:'center',color:'#fff',fontWeight:800}}>13&deg;</Text>
              </View>
              <View style={{padding:10,borderRadius:20,backgroundColor:'grey',height:'60%',opacity:0.6,left:50}}>
                <Image
                  source={require('../assets/heavyrain.png')}
                  style={{height: 50, width: 50}}
                />
                 <Text style={{fontSize:15,textAlign:'center',color:'#fff',fontWeight:800}}>Saturday</Text>
                <Text style={{fontSize:15,textAlign:'center',color:'#fff',fontWeight:800}}>13&deg;</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Weather;

const styles = StyleSheet.create({});
