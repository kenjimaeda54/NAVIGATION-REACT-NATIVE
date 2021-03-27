import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/pages/Home"
import Sobre from "./src/pages/Sobre"

export default function App() {
  const Stack = createStackNavigator();

  return (


    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"  >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Inicio',//muda o nome do titulo do header
            headerStyle:{
              backgroundColor: "black",
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen name="Sobre" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>


  );
}

