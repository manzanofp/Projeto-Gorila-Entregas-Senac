import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TextInput, Button, Image, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
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
      imagem: require('./assets/classicoDeFrango.PNG'),
    },
    {
      nome: 'Salada com Abacate',
      preco: 'R$24,90',
      imagem: require('./assets/saladaComAbacate.JPG'),
    },
    {
      nome: 'Salmão com Arroz',
      preco: 'R$40,90',
      imagem: require('./assets/salmaoComArroz.JPG'),
    },
  ];

  return (
    <ScrollView style={styles.container}>
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
            <View style={styles.container}>
              <TouchableOpacity
                onPress={() => navigation.openDrawer()}
                style={styles.menuButton}
              >
                <Text style={styles.buttonText}>☰</Text>
              </TouchableOpacity>

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
                    <Text style={styles.text}> Populares</Text>
                    <View style={styles.rowContainer}>  

                      <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('Clássico de Frango', 'R$ 30,99', '✨ Uma Trindade Deliciosa: Apresentamos o nosso “Trio Saboroso” - a combinação perfeita de sabores do clássico que aquece o coração e enche a barriga.\n🍗 Filé de Frango Grelhado: Comece com um filé de frango suculento, grelhado à perfeição, com aquele sabor defumado inconfundível. Delicioso a cada mordida.\n🍚 Arroz Aromático: Nosso arroz é cozido até o ponto certo, permeado com aromas que o transportam para um mundo de sabores exóticos.\n🌽 Creme de Milho: Acompanhando, você encontrará nosso creme de milho cremoso, que adiciona uma doçura suave e uma textura incrível a cada garfada.', require('./assets/calssicofrango.jpeg'))}>
                          <View>
                            <Text style={styles.textbox}> Clássico de Frango</Text>
                            <Image style={styles.logo} source={require('./assets/calssicofrango.jpeg')} />
                            <Text style={styles.textboxPreco}> R$ 30,99</Text>
                          </View>
                      </TouchableOpacity>

                         <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('Salada Gorgonzola', 'R$ 19,90', 
                         '🥗 Uma explosão de sabores aguarda por você nesta salada exclusiva! Experimente o contraste único entre o frescor dos vegetais selecionados e a intensidade cremosa do queijo gorgonzola.\nCrocantes folhas de alface, rúcula e agrião são cuidadosamente misturadas para criar uma base exuberante. Acrescentamos nozes tostadas e uvas vermelhas suculentas, oferecendo uma textura crocante e doce que harmoniza perfeitamente com o gosto marcante do gorgonzola.\n🧀 O molho especial, preparado artesanalmente, é o toque final dessa obra-prima culinária. Combinando azeite de oliva extra virgem, vinagre balsâmico e segredinhos de nossa cozinha, este molho realça cada camada de sabor, proporcionando uma experiência gastronômica inigualável.', require('./assets/saladaG.jpeg'))}>
                          <View>
                            <Text style={styles.textbox}>Salada Gorgonzola</Text>
                            <Image style={styles.logo} source={require('./assets/saladaG.jpeg')} />
                            <Text style={styles.textboxPreco}> R$ 19,90</Text>
                          </View>
                      </TouchableOpacity>

                         <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('Lanche de Atum', 'R$ 12,90', '🥪 Este lanche é uma celebração de sabores e nutrientes! Delicie-se com a combinação perfeita de atum suculento, misturado com maionese cremosa, salada e temperos especiais, tudo cuidadosamente servido entre duas fatias de pão integral macio.\n🐟 O atum, fonte de proteína de alta qualidade, é delicadamente misturado com a maionese, proporcionando uma textura irresistível e um sabor rico. Complementado por uma pitada de cebola picada e temperos secretos, cada mordida oferece uma explosão de sabores harmoniosos.\n🌟 Para aqueles que buscam uma opção saudável e saborosa, este lanche é a escolha ideal. Rico em ômega-3 e repleto de nutrientes essenciais, é uma maneira deliciosa de satisfazer sua fome, seja como um almoço rápido ou um lanche reforçado a qualquer hora do dia.',require('./assets/lancheatum.jpeg') )}>
                          <View>
                            <Text style={styles.textbox}> Lanche de Atum</Text>
                            <Image style={styles.logo} source={require('./assets/lancheatum.jpeg')} />
                            <Text style={styles.textboxPreco}> R$ 12,90</Text>
                          </View>
                      </TouchableOpacity>

                         <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('Macarrão e Patinho', 'R$ 31,90', '🌿 Prepare-se para uma explosão de sabores reconfortantes com nosso prato especial de macarrão com carne de patinho. Feito com carinho e ingredientes frescos, este prato combina a suculência da carne de patinho moída e o delicioso molho de tomate.\n🥩 A carne de patinho, selecionada cuidadosamente, é cozida lentamente em um molho rico e encorpado, temperado com ervas aromáticas e um toque especial de alho. O resultado é uma mistura irresistível de sabores que se fundem harmoniosamente a cada garfada\n🍝 O macarrão al dente, cuidadosamente cozido para manter sua textura perfeita, absorve o sabor do molho, criando uma combinação de sabores que é simplesmente inigualável\nEste prato é uma escolha perfeita para aqueles que buscam um clássico reconfortante e saboroso. Seja para um almoço em família ou para saciar a fome após um longo dia!',require('./assets/macarraop.jpeg'))}>
                          <View>
                            <Text style={styles.textbox}>Macarrão e Patinho</Text>
                            <Image style={styles.logo} source={require('./assets/macarraop.jpeg')} />
                            <Text style={styles.textboxPreco}> R$ 31,90</Text>
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

function DetailsScreen() {
  return (
    <ScrollView>
      <View style={styles.headerImageContainer}>
        <Image style={styles.detailsImage} source={require('./assets/classicoDeFrango.PNG')} />
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
            <Image style={styles.cartImage} source={require('./assets/macarrao-patinho.png')} />
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
            <Image style={styles.cartImage} source={require('./assets/salada-abacate.png')} />
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
            <Image style={styles.cartImage} source={require('./assets/salmaoComArroz.JPG')} />
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
  );
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
      <Tab.Screen name="Home Screen" component={HomeScreen} options={{
        tabBarLabel: "", tabBarIcon: ({ size }) => (
          <MaterialIcons name="home" color={'black'} size={size} />)
      }} />

      <Tab.Screen name="Histórico de pedidos" component={OrderHistoryScreen} options={{
        tabBarLabel: "", tabBarIcon: ({ size }) => (
          <MaterialIcons name="list-alt" color={'green'} size={size} />)
      }} />

      <Tab.Screen name="Meu Pedido" component={CartScreen} options={{ tabBarLabel: "", tabBarIcon: ({size}) => ( 
        <MaterialIcons name="shopping-cart" color={'black'} size={size} />)}} />

      <Tab.Screen name="Detalhes" component={DetailsScreen} options={{ tabBarLabel: "", tabBarIcon: ({size}) => ( 
          <MaterialIcons name="subject" color={'black'} size={size} />)}}/>

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

//##########################################################################################
// Função da tela de detalhes dos pedidos feito com o Stack navigator.
const Stack = createNativeStackNavigator();

function ProductDetailsScreen({ route }) {
  const { productName, productPreco, prodctDescricao, imagePath } = route.params;
  const [number, setNumber] = useState('');
  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  return (
    <ScrollView>
            <View style={styles.container}>
                    <View style={styles.rowContainer1}>
                          <View>
                            <Image style={styles.logoD} source={imagePath}  />
                          </View>
                    </View>
                    <View style={styles.rowContainer1}>
                      <Text style={{fontSize:20, fontWeight: 'bold', marginTop: 20, marginRight: 5, marginLeft:5}}> {productName}</Text>
                      <Text style={{fontSize:20, fontWeight: 'bold', marginTop: 22, marginRight: 10, marginLeft:10}}> {productPreco}</Text>
                    </View>
                    <View style={styles.columnContainer}>
                      <Text style={{fontSize:16, fontWeight: 'bold', marginTop: 22, marginRight: 10, marginLeft:10}}>Detalhes</Text>
                      <Text style={{fontSize:13, marginTop: 5, marginRight: 10, marginLeft:10, marginBottom: 22}}>{prodctDescricao} </Text>

                    </View>
                    <View style={styles.rowContainer}>

                      <TouchableOpacity style={styles.button} onPress={decrement}>
                        <Text style={styles.buttonTextD}>-</Text>
                      </TouchableOpacity>

                      <TextInput
                        style={styles.input}
                        value={number.toString()}
                        keyboardType="numeric"
                        onChangeText={(text) => setNumber(parseInt(text) || 0)}
                      />

                      <TouchableOpacity style={styles.button} onPress={increment}>
                        <Text style={styles.buttonTextD}>+</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.customButton}
                        onPress={() => handleSearchAndNavigate(searchQuery)}
                      >
                        <Text style={styles.buttonText}>Adicionar</Text>
                      </TouchableOpacity>

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
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
        marginBottom: 20,
    },
    content:{
      flex:1,
      padding:20,
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

    pedidoText:{
      fontSize: 14,
      fontFamily: 'Inter',
      fontWeight: '500',
      color: '#000000',
      marginBottom: 10,
      marginLeft: 10,
    },

    marmitaContainer: {
      width: 42,
      height: 32,
      borderRadius: 8,
      marginRight: 10,
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

    marmitaPreco:{
      fontSize: 12,
      fontFamily: 'Inter',
      fontWeight : 'normal',
      color: '#0FA958',
    },

    total:{
      fontSize: 14,
      fontFamily: 'Inter',
      fontWeight: '500',
      color: '#000000',
      marginBottom: 10,
      marginLeft: 10,
    },

    totalValor:{
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
      justifyContent:  'space-between',
      alignItems:  'center',
      marginVertical: 10,
      padding: 10,
      backgroundColor: 'White',
      borderRadius: 10,
    },

    pagoPeloApp: {
      marginTop: -10,
      fontSize: 14,
      fontFamily: 'Inter',
      fontWeight: '500',
      color:'#000000',

    },

    numeroCartao: {
      margimtop: -10,
      fontSize: 14,
      fontFamily: 'Inter',

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
      marginTop: -145,
      marginLeft: -20, 
    },
    checkboxItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: -20,
      marginLeft: 25,
    },

    menuButton: {
      position: 'absolute',
      left: 10,
      top: 0.5,
      padding: 10,
    },
    buttonText: {
      fontSize: 20,
      marginTop: 10
    },
    button: {
      backgroundColor: 'lightgray',
      borderRadius: 5,
      paddingHorizontal: 5,
      paddingVertical: 5,
      marginHorizontal: 5,
    },
    customButton: {
    backgroundColor: 'lightgray',
    borderRadius: 5,
    paddingHorizontal: 7,
    paddingVertical: 5,
    marginHorizontal: 5,
    },
    buttonTextD: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    input: {
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
    section: {
        marginBottom: 20,
    },
    textsuperior: {
        fontSize: 16,
        marginTop: 50,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    rowContainer1: {
        flexDirection: 'row',
    },
    rowContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    columnContainer: {
        flexDirection: 'column',
    },

    box: {
      padding: 10,
      backgroundColor: 'lemonchiffon',
      borderRadius: 7,
      marginTop: 30,
      marginHorizontal: 15,
      width: 140,
      opacity: 1,
      height: 160,
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
    logoD: {
      marginTop: 0,
      width: 329,
      height: 329,
      borderRadius: 7,
      alignSelf: 'center'
    },

    sectionText: {
      marginBottom: 20,
      marginLeft: 13, 
      marginRight: 16,
    },

    textboxPreco: {
      marginTop: 12,
      alignSelf: 'lefth',
      fontSize: 12,
      fontWeight: 'bold',
      color: 'Black',
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

 searchInput: {
  width: '85%',
  height: '50%',
  borderRadius: 7,
  borderWidth: 1,
  borderColor: 'black',
  padding: 7,
  marginTop: 10,
  marginBottom: 10,
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

  export default function App() {
    return(
    <NavigationContainer>
     <MyTabs/>
    </NavigationContainer>
  );
}