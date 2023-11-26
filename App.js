import React, { useState, useEffect } from 'react';
import {
  View, Text, StyleSheet, TextInput, Button, Image, ScrollView, TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AntDesign } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';


import { createStackNavigator } from '@react-navigation/stack';


// configuração da telas
function AcompanharPedidoScreen() {
  const marmitas = [
    {
      nome: 'Macarrão com Patinho',
      preco: 'R$31,90',
      imagem: require('./classicoDeFrango.PNG'),
    },
    {
      nome: 'Salada com Abacate',
      preco: 'R$24,90',
      imagem: require('./saladaComAbacate.JPG'),
    },
    {
      nome: 'Salmão com Arroz',
      preco: 'R$40,90',
      imagem: require('./salmaoComArroz.JPG'),
    },
  ];

  return (
    <ScrollView style={styles.containerPedidos}>
      <View style={styles.content}>
        {/* Ícone de retorno */}
        <TouchableOpacity
          style={[styles.arrow, { marginLeft: -20 }]}
          onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
          <Text style={styles.acompanheSeuPedido}>Acompanhe seu Pedido</Text>
        </TouchableOpacity>

        {/* Retângulo branco para exibir o pedido */}
        <View style={styles.pedidoContainer}>
          {/* Texto do pedido */}
          <Text style={styles.pedidoText}>Pedido - N° 1</Text>

          {/* Marmitas */}
          {marmitas.map((marmita, index) => (
            <View key={index} style={styles.marmitaContainer}>
              <Image source={marmita.imagem} style={styles.marmitaImagem} />
              <View style={styles.textContainer}>
                <Text style={styles.marmitaNome}>{marmita.nome}</Text>
                <Text style={styles.marmitaPreco}>{marmita.preco}</Text>
              </View>
            </View>
          ))}

          {/* Texto: Total */}
          <View style={styles.totalContainer}>
            <Text style={styles.total}>Total:</Text>
            <Text style={styles.totalValor}>R$122,60</Text>
          </View>
          {/* Informação de pagamento */}
          <View style={styles.pagoPeloAppContainer}>
            <Text style={styles.pagoPeloApp}>Pago pelo aplicativo</Text>
            <Text style={styles.numeroCartao}>**** (MasterCard)</Text>
          </View>
          {/* Endereço de entrega */}
          <View style={styles.enderecoContainer}>
            <Text style={styles.enderecoTitulo}>Endereço de entrega:</Text>
            <Text style={styles.enderecoTexto}>
              Rua Manga Natal, 786 {'\n'}
              Jd. dos Prados - São Paulo - SP
            </Text>
          </View>
        </View>
        {/* Checkboxes */}
        <View style={styles.checkboxesContainer}>
          <View style={styles.checkboxItem}>
            {/* Componente de checkbox */}
            <CheckBox />
            <Text>Confirmado pelo restaurante</Text>
          </View>
          <View style={styles.checkboxItem}>
            {/* Componente de checkbox */}
            <CheckBox />
            <Text>Em preparo</Text>
          </View>
          <View style={styles.checkboxItem}>
            {/* Componente de checkbox */}
            <CheckBox />
            <Text>Saiu para entrega</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

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
  return (
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
      <Tab.Screen name="Home Screen" component={HomeScreen} options={{
        tabBarLabel: "", tabBarIcon: ({ size }) => (
          <MaterialIcons name="home" color={'black'} size={size} />)
      }} />

      <Tab.Screen name="Histórico de pedidos" component={OrderHistoryScreen} options={{
        tabBarLabel: "", tabBarIcon: ({ size }) => (
          <MaterialIcons name="list-alt" color={'green'} size={size} />)
      }} />

      <Tab.Screen name="Acompanhar pedido" component={AcompanharPedidoScreen} options={{
        tabBarLabel: "", tabBarIcon: ({ size }) => (
          <MaterialIcons name="shopping-bag" size={size} />)
      }} />

      <Tab.Screen name="Settings" component={Stack} options={{
        tabBarLabel: "", tabBarIcon: ({ size }) => (
          <MaterialIcons name="settings" color={'black'} size={size} />)
      }} />
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

  textbox: {
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
    containerPedidos: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f5f5f5',
    },
    content: {
      flex: 1,
      padding: 20,
    },
    arrow: {
      marginTop: 20,
      marginBottom: 20,
    },
    acompanheSeuPedido: {
      width: 130,
      height: 20,
      fontSize: 12,
      alignSelf: 'center',
      fontFamily: 'Inter',
      fontWeight: '600',
      color: '#000000',
      marginLeft: 25,
      marginTop: -17,
    },
    pedidoContainer: {
      width: 340,
      height: 520,
      backgroundColor: 'white',
      alignSelf: 'center',
      marginTop: 20,
      borderRadius: 15,
      marginBottom: 20,
      padding: 20,
    },
    pedidoText: {
      fontSize: 14,
      fontFamily: 'Inter',
      fontWeight: '500',
      color: '#000000',
      marginBottom: 10,
      marginLeft: 10,
    },
    marmitaContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      padding: 10,
    },
    marmitaImagem: {
      width: 42,
      height: 32,
      borderRadius: 8,
      marginRight: 10,
    },
    textContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    marmitaNome: {
      fontSize: 13,
      fontFamily: 'Inter',
      fontWeight: '500',
      color: '#000000',
      width: 150,
      marginRight: 30,
    },
    marmitaPreco: {
      fontSize: 12,
      fontFamily: 'Inter',
      fontWeight: '500',
      color: '#0FA958',
    },
    total: {
      fontSize: 14,
      fontFamily: 'Inter',
      fontWeight: '500',
      color: '#000000',
      marginBottom: 10,
      marginLeft: 10,
    },
    totalValor: {
      fontSize: 12,
      fontFamily: 'Inter',
      fontWeight: '500',
      color: '#0FA958',
      marginBottom: 10,
      marginRight: 10,
    },
    totalContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,
    },
    pagoPeloAppContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 10,
      padding: 10,
      backgroundColor: 'white',
      borderRadius: 10,
    },

    pagoPeloApp: {
      marginTop: -10,
      fontSize: 14,
      fontFamily: 'Inter', //Fonte do projeto
      fontWeight: '500',
      color: '#000000',
    },
    numeroCartao: {
      marginTop: -10,
      fontSize: 14,
      fontFamily: 'Inter',
      fontWeight: '500',
      color: '#000000',
    },
    enderecoContainer: {
      marginTop: -10,
      padding: 10,
      backgroundColor: 'white',
      borderRadius: 10,
    },
    enderecoTitulo: {
      fontSize: 14,
      fontFamily: 'Inter',
      fontWeight: '500',
      color: '#000000',
      marginBottom: 5,
    },
    enderecoTexto: {
      fontSize: 12,
      fontFamily: 'Inter',
      fontWeight: '400',
      color: '#000000',
    },
    checkboxesContainer: {
      marginTop: -145, // Ajuste de espaço entre o endereço e os checkboxes
      marginLeft: -20, // Ajuste de margem para os checkboxes
    },
    checkboxItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: -20, // Espaçamento entre os checkboxes
      marginLeft: 25,
    },

  });

  export default function App() {
    return(
    <NavigationContainer>
<MyTabs />
    </NavigationContainer >
  );
}