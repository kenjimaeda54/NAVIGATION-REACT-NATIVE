import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/pages/Home"
import Sobre from "./src/pages/Sobre"
import Contato from "./src/pages/Contato"

export default function App() {
  const Stack = createStackNavigator();

  return (


    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Inicio",
            headerStyle:{
              backgroundColor: "black",
            },
            headerTintColor: "white",
            headerShown:false,
            // retira o modelo padrão do header então fica sem header no inicio
                            
          }}

        />
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="Contato" component={Contato} />
      </Stack.Navigator>
    </NavigationContainer>


  );
}

