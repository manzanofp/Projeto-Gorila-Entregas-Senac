import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image, ScrollView, TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


import { createStackNavigator } from '@react-navigation/stack';


// configuração da telas
function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
      <View>
      <Text>Pagina Home aqui</Text>
    </View>
    );
}

function SettingsScreen() {
  return (
    <View>
      <Text>Pagina Screean aqui</Text>
    </View>
  )
}

function OrderHistoryScreen() {
 return (
 <ScrollView>
  <View style={styles.container}>
    <View style={styles.rectangle}>
      <View style={styles.sectionText}>
            <Text style={styles.textSuperiorHistory}>Pedido em Andamento - N° 1</Text>
            <Image source={require('./assets/arrow-right.png')} style={styles.sectionArrow} />
      </View>
      <View style={styles.box}>
        <Image style={styles.logo} source={require('./assets/macarrao-patinho.png')} />
        <Text style={styles.textbox}> Macarrão com patinho</Text>
      </View>

      <View style={styles.box}>
        <Image style={styles.logo} source={require('./assets/salada-abacate.png')} />
        <Text style={styles.textbox}> Salada com abacate</Text>
      </View>

        <Text style={styles.textbox}> Mais 1 item...</Text>
    </View>
  </View>
 </ScrollView>
 )
}

function OrderScreen() {
  return(
      <View>
      <Text>Order Page Here</Text>
    </View>
  )
}


//##########################################################################################

const TopNavigator = createNativeStackNavigator();

function NavigatorStack() {
  return (
    <TabStack.Navigator>
      <TabStack.Screen name="HomeStack" component={SettingsScreen} />
    </TabStack.Navigator>
  );
}

const TabStack = createNativeStackNavigator();

function Stack() {
  return (
    <TabStack.Navigator>
      <TabStack.Screen name="HomeStack" component={SettingsScreen} />
    </TabStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home Screen" component={HomeScreen} options={{ tabBarLabel: "", tabBarIcon: ({size}) => ( 
        <MaterialIcons name="home" color={'black'} size={size} />)}} />

      <Tab.Screen name="Histórico de pedidos" component={OrderHistoryScreen} options={{ tabBarLabel: "", tabBarIcon: ({size})=>( 
        <MaterialIcons name="list-alt" color={'green'} size={size} />)}} />

      <Tab.Screen name="Acompanhar pedido" component={OrderScreen} options={{ tabBarLabel: "", tabBarIcon: ({size})=>( 
        <MaterialIcons name="shopping-bag" size={size} />)}} />

      <Tab.Screen name="Settings" component={Stack} options={{ tabBarLabel: "", tabBarIcon: ({size})=>( 
        <MaterialIcons name="settings"  color={'black'} size={size} />)}} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
        marginBottom: 20,
    },

    box: {
        padding: 5,
        borderRadius: 7,
        marginTop: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
    },

    textbox : {
      height: '60%',
      color: 'black',
      fontFamily: 'Inter',
      fontSize: 13,
      fontStyle: 'normal',
      fontWeight: 'bold',
      lineHeight: 60,
      justifyContent: 'right',
    },

     logo: {
      marginTop: 5,
      marginRight: '5%',
      width: '80%',
      maxWidth: '15%',
      height: 42,
      borderRadius: 7,
      alignSelf: 'flex-start',
    },

    sectionText: {
      marginBottom: 20,
      marginLeft: 13, 
      marginRight: 16,
    },

    sectionArrow: {
      width: 15,
      height: 15,
      top: 5,
      right: 20,
      position: 'absolute',
    },

  textSuperiorHistory: {
      width: 183,
      height: 20,
      color: 'black',
      fontFamily: 'Inter',
      fontSize: 13,
      fontStyle: 'normal',
      fontWeight: 'bold',
      lineHeight: 20, 
    },

  rectangle: {
  width: 333,
  height: '100%',
  backgroundColor: 'white',
  shadowColor: 'black',
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.10,
  shadowRadius: 4.65,
  elevation: 7,
 },


});

export default function App(){
  return(
    <NavigationContainer>
     <MyTabs />
   </NavigationContainer>
  );
}