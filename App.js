import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// funções para configuração das telas por bottom-tabs (menu inferior)
function HomeScreen() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (searchQuery) => {
    console.log('Procure aqui... ' + searchQuery);
  }

  const handleBoxPress = (productName, productPreco, prodctDescricao, imagePath) => {
   navigation.navigate('Detalhes do Produto', { productName, productPreco, prodctDescricao, imagePath });
  };  

  return (
        <ScrollView>
            <View style={styles.containerka}>
              <View style={styles.sectionka}>
                    <Text style={styles.textsuperiorka}>Olá Thiago!</Text>
                    <Text style={styles.textka}>Seja Bem Vindo!</Text>
                    <View style={styles.rowContainer1ka}>
                      <Button title="🔍" onPress={() => handleSearch(searchQuery)} />
                      <TextInput
                        style={styles.searchInputka}
                        placeholder="Pesquisar..."
                        value={searchQuery}
                        onChangeText={(text) => setSearchQuery(text)}
                      />
                    </View>
                </View>

                <View style={styles.sectionka}>
                    <Text style={styles.textka}> Populares</Text>
                    <View style={styles.rowContainerka}>  

                      <TouchableOpacity style={styles.boxka} onPress={() => handleBoxPress('Clássico de Frango', 'R$ 30,99', '✨ Uma Trindade Deliciosa: Apresentamos o nosso “Trio Saboroso” - a combinação perfeita de sabores do clássico que aquece o coração e enche a barriga.\n🍗 Filé de Frango Grelhado: Comece com um filé de frango suculento, grelhado à perfeição, com aquele sabor defumado inconfundível. Delicioso a cada mordida.\n🍚 Arroz Aromático: Nosso arroz é cozido até o ponto certo, permeado com aromas que o transportam para um mundo de sabores exóticos.\n🌽 Creme de Milho: Acompanhando, você encontrará nosso creme de milho cremoso, que adiciona uma doçura suave e uma textura incrível a cada garfada.', require('./assets/calssicofrango.jpeg'))}>
                          <View>
                            <Text style={styles.textboxka}> Clássico de Frango</Text>
                            <Image style={styles.logoka} source={require('./assets/calssicofrango.jpeg')} />
                            <Text style={styles.textboxPrecoka}> R$ 30,99</Text>
                          </View>
                      </TouchableOpacity>

                         <TouchableOpacity style={styles.boxka} onPress={() => handleBoxPress('Salada Gorgonzola', 'R$ 19,90', 
                         '🥗 Uma explosão de sabores aguarda por você nesta salada exclusiva! Experimente o contraste único entre o frescor dos vegetais selecionados e a intensidade cremosa do queijo gorgonzola.\nCrocantes folhas de alface, rúcula e agrião são cuidadosamente misturadas para criar uma base exuberante. Acrescentamos nozes tostadas e uvas vermelhas suculentas, oferecendo uma textura crocante e doce que harmoniza perfeitamente com o gosto marcante do gorgonzola.\n🧀 O molho especial, preparado artesanalmente, é o toque final dessa obra-prima culinária. Combinando azeite de oliva extra virgem, vinagre balsâmico e segredinhos de nossa cozinha, este molho realça cada camada de sabor, proporcionando uma experiência gastronômica inigualável.', require('./saladaG.jpeg'))}>
                          <View>
                            <Text style={styles.textboxka}>Salada Gorgonzola</Text>
                            <Image style={styles.logoka} source={require('./saladaG.jpeg')} />
                            <Text style={styles.textboxPrecoka}> R$ 19,90</Text>
                          </View>
                      </TouchableOpacity>

                         <TouchableOpacity style={styles.boxka} onPress={() => handleBoxPress('Lanche de Atum', 'R$ 12,90', '🥪 Este lanche é uma celebração de sabores e nutrientes! Delicie-se com a combinação perfeita de atum suculento, misturado com maionese cremosa, salada e temperos especiais, tudo cuidadosamente servido entre duas fatias de pão integral macio.\n🐟 O atum, fonte de proteína de alta qualidade, é delicadamente misturado com a maionese, proporcionando uma textura irresistível e um sabor rico. Complementado por uma pitada de cebola picada e temperos secretos, cada mordida oferece uma explosão de sabores harmoniosos.\n🌟 Para aqueles que buscam uma opção saudável e saborosa, este lanche é a escolha ideal. Rico em ômega-3 e repleto de nutrientes essenciais, é uma maneira deliciosa de satisfazer sua fome, seja como um almoço rápido ou um lanche reforçado a qualquer hora do dia.',require('./lancheatum.jpeg') )}>
                          <View>
                            <Text style={styles.textboxka}> Lanche de Atum</Text>
                            <Image style={styles.logoka} source={require('./lancheatum.jpeg')} />
                            <Text style={styles.textboxPrecoka}> R$ 12,90</Text>
                          </View>
                      </TouchableOpacity>

                         <TouchableOpacity style={styles.boxka} onPress={() => handleBoxPress('Macarrão e Patinho', 'R$ 31,90', '🌿 Prepare-se para uma explosão de sabores reconfortantes com nosso prato especial de macarrão com carne de patinho. Feito com carinho e ingredientes frescos, este prato combina a suculência da carne de patinho moída e o delicioso molho de tomate.\n🥩 A carne de patinho, selecionada cuidadosamente, é cozida lentamente em um molho rico e encorpado, temperado com ervas aromáticas e um toque especial de alho. O resultado é uma mistura irresistível de sabores que se fundem harmoniosamente a cada garfada\n🍝 O macarrão al dente, cuidadosamente cozido para manter sua textura perfeita, absorve o sabor do molho, criando uma combinação de sabores que é simplesmente inigualável\nEste prato é uma escolha perfeita para aqueles que buscam um clássico reconfortante e saboroso. Seja para um almoço em família ou para saciar a fome após um longo dia!',require('./macarraop.jpeg'))}>
                          <View>
                            <Text style={styles.textboxka}>Macarrão e Patinho</Text>
                            <Image style={styles.logoka} source={require('./macarraop.jpeg')} />
                            <Text style={styles.textboxPrecoka}> R$ 31,90</Text>
                          </View>
                      </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
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

function AcompanharPedido() {
  return(
      <View>
      <Text>Acompanhar Pedido por aqui</Text>
    </View>
  )
}

function SettingsScreen() {
  return (
    <View>
      <Text>Pagina configurações aqui</Text>
    </View>
  )
}

//Chamando as funções para navegação por bottom tabs (menu inferior)
//Na chamada da home chamei a função My Stack, assim posso usar tanto o bottom tabs quanto o Stack vavigator para navegar entre as telas 
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>

      <Tab.Screen name="Home" component={MyStack}  options={{headerShown: false, tabBarLabel: "", tabBarIcon: ({size}) => ( 
        <MaterialIcons name="home" color={'black'} size={size} />) }} />
        
      <Tab.Screen name="Histórico de pedidos" component={OrderHistoryScreen} options={{headerShown: false, tabBarLabel: "", tabBarIcon: ({size})=>( 
        <MaterialIcons name="list-alt" color={'green'} size={size} />)}} />

      <Tab.Screen name="Acompanhar pedido" component={AcompanharPedido} options={{ headerShown: false, tabBarLabel: "", tabBarIcon: ({size})=>( 
        <MaterialIcons name="shopping-bag" size={size} />)}} />

      <Tab.Screen name="Settings" component={Stack} options={{headerShown: false, tabBarLabel: "", tabBarIcon: ({size})=>( 
        <MaterialIcons name="settings"  color={'black'} size={size} />)}} />
    </Tab.Navigator>
  );
}

//##########################################################################################
// Função da tela de detalhes dos pedidos feito com o Stack navigator.
const Stack = createNativeStackNavigator();

function ProductDetailsScreen({ route }) {
  const { productName, productPreco, prodctDescricao, imagePath } = route.params;
  const [number, setNumber] = useState(0);
  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  const navigation = useNavigation();
  const handleBoxPress = () => {
    navigation.navigate('Meu Pedido', { productName, productPreco, quantidade: number, imagePath });
    };

  return (
    <ScrollView>
            <View style={styles.containerka}>
                    <View style={styles.rowContainer1ka}>
                          <View>
                            <Image style={styles.logoDka} source={imagePath}  />
                          </View>
                    </View>
                    <View style={styles.rowContainer1ka}>
                      <Text style={{fontSize:20, fontWeight: 'bold', marginTop: 20, marginRight: 5, marginLeft:5}}> {productName}</Text>
                      <Text style={{fontSize:20, fontWeight: 'bold', marginTop: 22, marginRight: 10, marginLeft:10}}> {productPreco}</Text>
                    </View>
                    <View style={styles.columnContainerka}>
                      <Text style={{fontSize:16, fontWeight: 'bold', marginTop: 22, marginRight: 10, marginLeft:10}}>Detalhes</Text>
                      <Text style={{fontSize:13, marginTop: 5, marginRight: 10, marginLeft:10, marginBottom: 22}}>{prodctDescricao} </Text>

                    </View>
                    <View style={styles.rowContainerka}>

                      <TouchableOpacity style={styles.buttonka} onPress={decrement}>
                        <Text style={styles.buttonTextDka}>-</Text>
                      </TouchableOpacity>

                      <TextInput
                        style={styles.inputka}
                        value={number.toString()}
                        keyboardType="numeric"
                        onChangeText={(text) => setNumber(parseInt(text) || 0)}
                      />

                      <TouchableOpacity style={styles.buttonka} onPress={increment}>
                        <Text style={styles.buttonTextDka}>+</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.customButtonka}
                        onPress={handleBoxPress}
                      >
                        <Text style={styles.buttonTextka}>Adicionar</Text>
                      </TouchableOpacity>

                    </View>
            </View>
    </ScrollView>
  );
}

//Função para finalizar o pedido
function pedidos({ route }) {
  const { productName, productPreco, quantidade, imagePath} = route.params;
  // Converter o preço para um número e remover o 'R$' para calcular o total
  const preco = parseFloat(productPreco.replace('R$ ', '').replace(',', '.'));

  // Calcular o total multiplicando a quantidade pelo preço
  const total = (quantidade || 0) * preco;
  
  return (
    <ScrollView>
            <View style={styles.containerka}>
                    <View style={styles.rowContainer1ka}> 
                        <View  style={styles.box1ka}>
                          <Image style={{width: 85, height: 80, borderRadius: 7, alignSelf: 'left', marginTop:10}} source={imagePath}  />
                          <Text style={styles.productNameka}> {productName}</Text>
                          <Text style={styles.productPriceka}> {productPreco}</Text>
                          <Text style={styles.productQTDka}> QTD:  {quantidade}</Text>
                         </View>
                      </View>
                      <View style={styles.rowContainerka}>
                        <TouchableOpacity
                          style={styles.botaopedidoka}
                          onPress={() => handleSearchAndNavigate(searchQuery)}
                        >
                          <Text style={styles.buttonTextka}>Finalizar Pedido</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={{fontSize: 15, fontWeight: 'bold', textAlign: 'center', marginRight: 200, marginTop: 350}}> Total: {total}</Text>
                      </View>
            </View>
    </ScrollView>
  );
}

// Chamando as funções por Stack navigator (Chama as telas em pilha, como se houvesse um histórico das telas)
// Aqui eu crio uma função que chama a Home
function MyStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Detalhes do Produto" component={ProductDetailsScreen} />
      <Stack.Screen name="Meu Pedido" component={pedidos} />
      {/* Adicione outras telas do seu stack navigator, se houver */}
    </Stack.Navigator>
  );
}

//#########################################################################################
// Função para navegação por Drawer (menu lateral)
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {/* Você pode adicionar itens personalizados ou alterar o conteúdo do menu lateral aqui */}
      <DrawerItem label="Sair" onPress={() => alert('Sair')} />
    </DrawerContentScrollView>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      {/* Adicione outras telas do Drawer Navigator aqui */}
    </Drawer.Navigator>
  );
}

//############################################################################################################

// Styles dos componentes
const styles = StyleSheet.create({
    containerka: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
      buttonTextka: {
      fontSize: 20,
      marginTop: 10
    },
    buttonka: {
      backgroundColor: 'lightgray',
      borderRadius: 5,
      paddingHorizontal: 5,
      paddingVertical: 5,
      marginHorizontal: 5,
    },
     productNameka: {
    position: 'absolute',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    left: 103,
    top: 40
    },
    productPriceka: {
      position: 'absolute',
      fontSize: 13,
      fontWeight: 'bold',
      textAlign: 'center',
      left: 230,
      top: 40
    },
    productQTDka: {
      position: 'absolute',
      fontSize: 12,
      fontWeight: 'bold',
      textAlign: 'center',
      left: 103,
      top: 70
  },
    customButtonka: {
    backgroundColor: 'lightgray',
    borderRadius: 5,
    paddingHorizontal: 7,
    paddingVertical: 5,
    marginHorizontal: 5,
    },
    botaopedidoka: {
    backgroundColor: 'lightgray',
    borderRadius: 5,
    paddingHorizontal: 7,
    paddingVertical: 5,
    marginHorizontal: 2,
    textAlign: 'center',
    left: 70,
    top: 380
    },
    buttonTextDka: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    inputka: {
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      paddingHorizontal: 10,
      paddingVertical: 5,
      minWidth: 50,
      textAlign: 'center',
      width: 50,
      height: 35
    },
    sectionka: {
        marginBottom: 20,
    },
    textsuperiorka: {
        fontSize: 16,
        marginTop: 50,
    },
    textka: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    rowContainer1ka: {
        flexDirection: 'row',
    },
    rowContainerka: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    columnContainerka: {
        flexDirection: 'column',
    },
    boxka: {
        padding: 10,
        backgroundColor: 'lemonchiffon',
        borderRadius: 7,
        marginTop: 30,
        marginHorizontal: 15,
        width: 140,
        opacity: 1,
        height: 160,
    },
    box1ka: {
        padding: 5,
        backgroundColor: 'lemonchiffon',
        borderRadius: 7,
        marginTop: 20,
        width: 300,
        opacity: 1,
        height: 100,
    },
    textboxka: {
        alignSelf: 'center',
        position: 'absolute',
        fontSize: 12,
        fontWeight: 'bold',
        color: 'Black',
    },
     logoka: {
      marginTop: 25,
      width: 95,
      height: 90,
      borderRadius: 7,
      alignSelf: 'center'
    },
    logoDka: {
      marginTop: 0,
      width: 329,
      height: 329,
      borderRadius: 7,
      alignSelf: 'center'
    },
    textboxPrecoka: {
        marginTop: 12,
        alignSelf: 'lefth',
        fontSize: 12,
        fontWeight: 'bold',
        color: 'Black',
    },
    searchInputka: {
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
