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

const Mainscreen = ({navigation}) => {
  // const [showSearch, toggleSearch] = useState(true);
  const [showSearch, toggleSearch] = useState(true);
  const [locations, setLocations] = useState([1, 2, 3]);

  const handleLocation = loc => {
    console.log('location', loc);
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'dodgerblue',
        flex: 1,
        alignItems: 'center',
      }}>
      {/* Search Section */}
      <View style={{width: '90%', margin: 20}}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: showSearch ? '#fff' : 'transparent',
            borderRadius: 20,
            justifyContent: 'space-between',
            height: 50,
          }}>
          {showSearch ? (
            <TextInput
              placeholder="Search Place"
              placeholderTextColor={'black'}
              style={{fontSize: 18, marginLeft: 20}}
            />
          ) : null}
          <TouchableOpacity
            onPress={() => toggleSearch(!showSearch)}
            style={{
              width: '15%',
              backgroundColor: 'lightgrey',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 45,
              // flex:1
              // alignSelf:'center'
            }}>
            <Icon name="search" size={20} color="black" style={{}} />
          </TouchableOpacity>
        </View>
        {locations.length > 0 && showSearch ? (
          <View style={{}}>
            {locations.map((loc, index) => {
              return (
                <TouchableOpacity
                  onPress={() => handleLocation(loc)}
                  style={{
                    flexDirection: 'row',
                    borderColor: 'black',
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 20,
                    top: 5,
                    backgroundColor: '#fff',
                  }}
                  key={index}>
                  <Icon name="map-pin" size={20} />
                  <Text style={{marginLeft: 20, fontSize: 16}}>
                    Patna,Bihar
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ) : null}
      </View>
      {/* Forecast */}
      <View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            flex: 1,
            bottom: 20,
            // top:50
          }}>
          {/* Location */}
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 30, fontWeight: 900, color: '#fff'}}>
              Patna,
            </Text>
            <Text
              style={{fontSize: 20, top: 10, color: '#fff', fontWeight: 600}}>
              {' '}
              India
            </Text>
          </View>
          {/* weather Image */}
          <View
            style={{
              // justifyContent: 'space-around',
              flexDirection: 'column',
              // flex: 1,
              // top: 20,
            }}>
            <Image
              source={require('../assets/partlycloudy.png')}
              style={{height: 300, width: 300}}
            />
          </View>
          {/* Degree Celcius */}
          <View style={{flex: 1}}>
            <Text
              style={{
                fontSize: 60,
                // top: 10,
                color: '#fff',
                fontWeight: 600,
                textAlign: 'center',
                left: 20,
              }}>
              23 &deg;
            </Text>
            <Text style={{fontSize: 30, color: '#fff', fontWeight: 500}}>
              Partly Cloudy
            </Text>
          </View>
          {/* other stats */}
          {/* <View> */}
          <View
            style={{
              flexDirection: 'row',
              padding: 30,
              // flex: 1,
              bottom: 100,
              // justifyContent: 'center',
              // bottom:100,
              // alignItems:'center'
            }}>
            <View
              style={{
                // flex: 1,
                // justifyContent: 'center', // Center text horizontally
                // alignItems: 'center',
                flexDirection: 'row',
                margin: 10,
              }}>
              <Image
                source={require('../assets/wind.png')}
                style={{height: 30, width: 30}}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: '#fff',
                  fontWeight: 800,
                  padding: 5,
                }}>
                22km
              </Text>
            </View>
            <View
              style={{
                // flex: 1,
                // justifyContent: 'center', // Center text horizontally
                // alignItems: 'center',
                flexDirection: 'row',
                margin: 10,
              }}>
              <Image
                source={require('../assets/drop.png')}
                style={{height: 30, width: 30}}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: '#fff',
                  fontWeight: 800,
                  padding: 5,
                }}>
                23%
              </Text>
            </View>
            <View
              style={{
                // flex: 1,
                // justifyContent: 'center', // Center text horizontally
                // alignItems: 'center',
                flexDirection: 'row',
                margin: 10,
              }}>
              <Image
                source={require('../assets/sun.png')}
                style={{height: 30, width: 30}}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: '#fff',
                  fontWeight: 800,
                  padding: 5,
                }}>
                6:05 AM
              </Text>
            </View>
            {/* </View> */}
          </View>
          {/* Next Days Forecast */}
          <View style={{flex: 1, flexDirection: 'row', bottom: 20,}}>
            <Icon name="calendar" size={20} />
            <Text style={{marginLeft: 10}}>Daily Forecast</Text>
          </View>
          <ScrollView contentContainerStyle={{justifyContent: 'center'}}>
            <View style={{padding:10,backgroundColor:'lightgrey',opacity:0.8,borderRadius:30}}>
              <Image source={require('../assets/heavyrain.png')} style={{width:50,height:50}} />
              <Text>Monday</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Mainscreen;

const styles = StyleSheet.create({});
