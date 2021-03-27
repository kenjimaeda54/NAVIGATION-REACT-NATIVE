import React from "react";
import { Button, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native"



export default function Sobre({ route }) {
    const navigation = useNavigation();

    navigation.setOptions({
        title: `Sobre ${route.params?.nome}`
    })

    function irHome() {
        navigation.goBack();

    }

    function irContato() {
        navigation.navigate('Contato', {nome:"Ricardo"});
    }

    return (
        <View style={{flex:1,marginTop:50,marginBottom:10}}>
            <Text>Seja bem vindo a tela sobre</Text>
            {/*Precisa colcoar o ? ou se não quando não retornar nada vai dar erro*/}
            <Text>{route.params?.email}</Text>
            <Button
                title="Tela inicio"
                onPress={irHome}
            />
            <Button
                title="Tela contato"
                onPress={irContato}
                style={{ marginTop: 20 }}
            />
        </View>
    );
}