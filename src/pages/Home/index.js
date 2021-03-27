import React from "react";
import { Button, View,Text } from "react-native";
import { useNavigation } from "@react-navigation/native"



export default function Home() {
    const navigation = useNavigation();

    function irSobre() {
        navigation.navigate("Sobre", { nome: "Matheus", email: "kenji@gmail" });

    }

    return (
        <View>
            <Text>Seja bem vindo a tela de Home</Text>
            <Button
                title="Ir para sobre"
                onPress={irSobre}
            >
                Ir para tela sobre
            </Button>
        </View>
    );
}