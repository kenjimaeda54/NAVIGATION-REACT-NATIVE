import React from "react";
import { Button, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native"



export default function Sobre({ route }) {
    const navigation = useNavigation();

    function irHome() {
        navigation.goBack();

    }

    return (
        <View>
            <Text>Seja bem vindo a tela de Home</Text>
            {/*se nao colocar ? vai dar erro se não voltar nada*/}
            <Text>{route.params?.nome}</Text>
            <Text>{route.params?.email}</Text>
            <Button
                title="Ir para sobre"
                onPress={irHome}
            >
                Ir para tela  inicio
            </Button>
        </View>
    );
}