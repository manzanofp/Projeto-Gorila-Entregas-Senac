import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// configuração da telas
function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
        <ScrollView>
            <View style={styles.container}>
              <View style={styles.section}>
                    <Text style={styles.textsuperior}>Olá Thiago!</Text>
                    <Text style={styles.text}>Seja Bem Vindo!</Text>
                    <View style={styles.rowContainer1}>
                      <Button title="🔍" onPress={() => handleSearch(searchQuery)} />
                      <TextInput
                        style={styles.searchInput}
                        placeholder="Pesquisar..."
                        value={searchQuery}
                        onChangeText={(text) => setSearchQuery(text)}
                      />
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.text}>   Populares</Text>
                    <View style={styles.rowContainer}>
                        <View style={[styles.box]}>
                          <Text style={styles.textbox}> Clássico de Frango</Text>
                          <Image style={styles.logo} source={require('./frango.jpg')} />
                          <Text style={styles.textboxPreco}> R$ 30,99</Text>
                        </View>
                        <View style={[styles.box]}>
                          <Text style={styles.textbox}> Clássico de Frango</Text>
                          <Image style={styles.logo} source={require('./frango.jpg')} />
                          <Text style={styles.textboxPreco}> R$ 30,99</Text>
                        </View>
                        <View style={[styles.box]}>
                         <Text style={styles.textbox}> Clássico de Frango</Text>
                          <Image style={styles.logo} source={require('./frango.jpg')} />
                          <Text style={styles.textboxPreco}> R$ 30,99</Text>
                        </View>
                        <View style={[styles.box]}>
                         <Text style={styles.textbox}> Clássico de Frango</Text>
                          <Image style={styles.logo} source={require('./frango.jpg')} />
                          <Text style={styles.textboxPreco}> R$ 30,99</Text>
                        </View>
                        <View style={[styles.box]}>
                         <Text style={styles.textbox}> Clássico de Frango</Text>
                          <Image style={styles.logo} source={require('./frango.jpg')} />
                          <Text style={styles.textboxPreco}> R$ 30,99</Text>
                        </View>
                        <View style={[styles.box]}>
                         <Text style={styles.textbox}> Clássico de Frango</Text>
                          <Image style={styles.logo} source={require('./frango.jpg')} />
                          <Text style={styles.textboxPreco}> R$ 30,99</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

function SettingsScreen() {
  return (
    <View>
      <Text>Pagina Screean aqui</Text>
    </View>
  )
}

//##########################################################################################
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
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={Stack} />
    </Tab.Navigator>
  );
}

const handleSearch = (searchQuery) => {
  console.log('Procure aqui... ' + searchQuery);
  // Execute a ação de pesquisa aqui, como fazer uma solicitação à API, filtrar dados, etc.
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
    },
    section: {
        marginBottom: 20,
    },
    textsuperior: {
        fontSize: 16,
        marginTop: 30,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    rowContainer1: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    rowContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    box: {
        padding: 10,
        backgroundColor: 'lemonchiffon',
        borderRadius: 7,
        marginTop: 30,
        marginHorizontal: 15,
        width: 140,
        opacity: 0.5,
        height: 160,
    },
    textbox : {
        alignSelf: 'center',
        position: 'absolute',
        fontSize: 12,
        fontWeight: 'bold',
        color: 'Black',
    },
     logo: {
      marginTop: 25,
      width: 95,
      height: 90,
      borderRadius: 7,
      alignSelf: 'center'
    },
    textboxPreco: {
        marginTop: 12,
        alignSelf: 'lefth',
        fontSize: 12,
        fontWeight: 'bold',
        color: 'Black',
    },
    searchInput: {
      width: '85%',
      height: '50%',
      borderRadius: 7,
      borderWidth: 1,
      borderColor: 'black',
      padding: 7,
      marginTop: 10,
      marginBottom: 10,
    }
});

export default function App(){
  return(
    <NavigationContainer>
     <MyTabs/>
    </NavigationContainer>
  );
}