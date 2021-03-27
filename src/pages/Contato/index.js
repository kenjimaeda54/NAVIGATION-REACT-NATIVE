import React from "react";
import { Button, View, Text } from "react-native";
import { useNavigation,StackActions } from "@react-navigation/native"



export default function Contato({route}) {
    const navigation = useNavigation();
    
    navigation.setOptions({
        title:`Contato ${route.params?.nome}`
    })

    function Voltar() {
        navigation.goBack();
    }

    function Inicio(){
        navigation.dispatch(StackActions.popToTop());
        //melhor opção para garantir funcionalidade para votlar ao inicio
        //aplicar o popToTo,porque o mesmo zera suas pilhas,ou seja
        //se a pessoa tentar retornar no inicio o aplicativo fecha
    }



    return (
        <View styles={{flex:1,marginTop:50,marginBottom:10}}>
            <Text>Seja bem vindo a tela de contato</Text>

            <Button
                title="Voltar tela"
                onPress={Voltar}
            />
            <Button 
                title="Voltar inicio"
                onPress={Inicio}
                style={{marginTop:20}}
            />
        </View>
    );
}