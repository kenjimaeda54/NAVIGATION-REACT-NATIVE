import React from "react";
import { Button, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native"



export default function Home() {
    const navigation = useNavigation();

    function irSobre() {
        navigation.navigate("Sobre", {nome:"Ricardo", email:"kenji@gmail.com"})
    }

    return (
        <View style={{flex:1,marginTop:50,marginBottom:10}}>
            <Text>Seja bem vindo a tela home</Text>
            <Button
                title="Tela sobre"
                onPress={irSobre}
            />
        </View>
    );
}