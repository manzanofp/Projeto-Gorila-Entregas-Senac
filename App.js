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

function DetailsScreen() {
  return (
    <ScrollView>
      <View style={styles.headerImageContainer}>
        <Image style={styles.detailsImage} source={require('./classicchiken.png')} />
      </View>
      <View>
        <Text style={styles.popularItem}>Marmita popular</Text>
        <View style={styles.titleContainer}>
          <Text style={styles.detailsTitle}>Clássico de Frango</Text>
          <Text style={styles.detailsPrice}>R$30,90</Text>
        </View>
        <View style={styles.detailsAvaliation}>
          <MaterialIcons name="star" color={'green'} style={styles.svgIcon}/>
          <Text style={styles.popularItem}>5.0 (2 mil avaliações)</Text>
        </View>
        <View>
          <Text style={styles.descriptionTitle}>Descrição</Text>
        </View>
        <View>
          <Text style={styles.popularItem}>✨ Uma Trindade Deliciosa: Apresentamos o nosso “Trio Saboroso” - a combinação perfeita de sabores do clássico que aquece o coração e enche a barriga.</Text>
          <Text style={styles.popularItem}>🍗 Filé de Frango Grelhado: Comece com um filé de frango suculento, grelhado à perfeição, com aquele sabor defumado inconfundível. Delicioso a cada mordida.</Text>
          <Text style={styles.popularItem}>🍚 Arroz Aromático: Nosso arroz é cozido até o ponto certo, permeado com aromas que o transportam para um mundo de sabores exóticos.</Text>
          <Text style={styles.popularItem}>🌽 Creme de Milho: Acompanhando, você encontrará nosso creme de milho cremoso, que adiciona uma doçura suave e uma textura incrível a cada garfada.</Text>
          <Text style={styles.popularItem}>Peça agora e desfrute do equilíbrio perfeito de sabores que só podemos oferecer!</Text>
        </View>
        <View style={styles.numberOptionsContainer}>
          <TouchableOpacity>
            <View style={styles.additensButton}>
              <MaterialIcons name="remove" size={20} color="black" />
              <Text>1</Text>
              <MaterialIcons name="add" size={20} color="black" />
            </View>
          </TouchableOpacity>
          <View style={styles.freeDelivery}>
            <MaterialIcons name="check-circle" color={'green'} style={styles.svgIcon}/>
            <Text style={styles.deliveryText}>Frete grátis!</Text>
          </View>
        </View>
        <View style={styles.orderNowContainer}>
          <View style={styles.bagContainer}>
            <MaterialIcons name="shopping-bag" color={'green'} size={22}/>
          </View>
          <TouchableOpacity style={styles.orderNowButton}>
            <Text style={styles.orderNowButtonText}>Pedir Agora</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

function CartScreen() {
  return (
    <ScrollView>
      <View style={styles.cartBlob}>
        <View style={styles.cartContainer}>
          <View style={styles.cartCards}>
            <Image style={styles.cartImage} source={require('./pasta.png')} />
            <View>  
              <View style={styles.cartCardTitle}>       
                <Text style={styles.cartCardTitleText}>Macarrão com Patinho</Text>
                <MaterialIcons name="favorite-border" size={20} color="black" style={styles.cartCardTitleIcon}/>
              </View>
              <View style={styles.cartCardPrice}>
                <View style={styles.additensButton}>
                  <MaterialIcons name="remove" size={20} color="black" />
                  <Text>1</Text>
                  <MaterialIcons name="add" size={20} color="black" />
                </View>
                <Text style={styles.cartCardPriceText}>R$31,90</Text>
              </View>  
            </View>
          </View>
          <View style={styles.cartCards}>
            <Image style={styles.cartImage} source={require('./salad.png')} />
            <View>  
              <View style={styles.cartCardTitle}>       
                <Text style={styles.cartCardTitleText}>Salada com abacate</Text>
                <MaterialIcons name="favorite-border" size={20} color="black" style={styles.cartCardTitleIcon}/>
              </View>
              <View style={styles.cartCardPrice}>
                <View style={styles.additensButton}>
                  <MaterialIcons name="remove" size={20} color="black" />
                  <Text>1</Text>
                  <MaterialIcons name="add" size={20} color="black" />
                </View>
                <Text style={styles.cartCardPriceText}>R$24,90</Text>
              </View>  
            </View>
          </View>
          <View style={styles.cartCards}>
            <Image style={styles.cartImage} source={require('./salmon.png')} />
            <View>  
              <View style={styles.cartCardTitle}>       
                <Text style={styles.cartCardTitleText}>Salmão com Arroz</Text>
                <MaterialIcons name="favorite-border" size={20} color="black" style={styles.cartCardTitleIcon}/>
              </View>
              <View style={styles.cartCardPrice}>
                <View style={styles.additensButton}>
                  <MaterialIcons name="remove" size={20} color="black" />
                  <Text>1</Text>
                  <MaterialIcons name="add" size={20} color="black" />
                </View>
                <Text style={styles.cartCardPriceText}>R$40,90</Text>
              </View>  
            </View>
          </View>
        </View>
        <View style={styles.cartSpaceBetween}></View>
        <View style={styles.cartTotalContainer}>
          <View style={styles.cartUnderLine}></View>
          <View style={styles.cartTotal}>
            <Text style={styles.cartTotalText}>Total</Text>
            <Text style={styles.cartTotalText}>R$122,60</Text>
          </View>
          <View style={styles.checkOutContainer}>
            <TouchableOpacity style={styles.checkOutCart}>
              <Text style={styles.checkOutCartText}>Fazer o check-out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </ScrollView>
  )
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

      <Tab.Screen name="Detalhes" component={DetailsScreen} options={{ tabBarLabel: "", tabBarIcon: ({size}) => ( 
          <MaterialIcons name="subject" color={'black'} size={size} />)}}/>

      <Tab.Screen name="Meu Pedido" component={CartScreen} options={{ tabBarLabel: "", tabBarIcon: ({size}) => ( 
        <MaterialIcons name="shopping-cart" color={'black'} size={size} />)}} />   

      <Tab.Screen name="Histórico de pedidos" component={OrderHistoryScreen} options={{ tabBarLabel: "", tabBarIcon: ({size})=>( 
        <MaterialIcons name="list-alt" color={'black'} size={size} />)}} />

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

  headerImageContainer: {
    height: 347,
    backgroundColor: '#ECECEC',
    paddingTop: 99,
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    ustifyContent: 'center'
  },

  detailsImage: {
    width: 211.35,
    height: 159,
  },

  popularItem: {
    margin: 12,
    fontSize: 9,
    color: 'rgba(0, 0, 0, 0.6)'
  },

  titleContainer: {
    margin: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  detailsTitle: {
    fontSize: 16,
    color: '#000000'
  },

  detailsPrice: {
    color: '#0FA958',
    marginRight: 12,
    fontSize: 16,
    fontWeight: 'bold'
  },

  detailsAvaliation: {
    marginLeft: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  svgIcon: {
    width: 13,
    height: 13
  },

  descriptionTitle: {
    fontSize: 9,
    color: '#000000',
    fontWeight: 'bold',
    marginLeft: 12
  },

  numberOptionsContainer: {
    margin: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  additensButton: {
    width: 70,
    height: 26,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
  },

  freeDelivery: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  deliveryText: {
    marginLeft: 4,
    marginRight: 8
  },

  orderNowContainer: {
    margin: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  bagContainer: {
    width: 50,
    height: 41,
    borderWidth: 1,
    borderColor: '#0FA958',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', 
  },

  orderNowButton: {
    width: 248,
    height: 41,
    backgroundColor: '#0FA958',
    marginLeft: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  orderNowButtonText: {
    color: 'white',
    fontSize: 9
  },

  cartBlob: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  cartContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cartCards: {
    marginTop: 24,
    width: 317,
    height: 95,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },

  cartImage: {
    width: 80,
    height: 65,
  },

  cartCardTitle: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  cartCardTitleText: {
    fontSize: 13,
    color: '#000000',
    fontWeight: 'bold'
  },

  cartCardTitleIcon: {
    marginLeft: 8,
  },

  cartCardPrice: {
    marginTop: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  cartCardPriceText: {
    fontSize: 14,
    color: '#0FA958',
    fontWeight: 'bold'
  },

  cartSpaceBetween: {
    height: 140
  },

  cartUnderLine: {
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.6)',
  },

  cartTotal: {
    marginTop: 16,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  cartTotalText: {
    fontSize: 12,
    fontWeight: 'bold'
  },

  checkOutContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },

  checkOutCart: {
    marginTop: 40,
    width: '90%',
    height: 41,
    backgroundColor: '#0FA958',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }, 

  checkOutCartText: {
    color: 'white',
    fontSize: 9
  }
});

export default function App(){
  return(
    <NavigationContainer>
     <MyTabs />
   </NavigationContainer>
  );
}