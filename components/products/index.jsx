import React, {useState} from "react";
import { View, Text, TextInput, Pressable, FlatList } from "react-native";
import styles from "./styles";

export default function Products(){

    const lista = [
        {
            id: '1',
            pastel: 'Carne',
            valor: 'R$ 7,00'
        },
        {
            id: '2',
            pastel: 'Pizza',
            valor: 'R$ 7,00'
        },
        {
            id: '3',
            pastel: 'Frango',
            valor: 'R$ 7,00'
        },
        {
            id: '4',
            pastel: 'Queijo',
            valor: 'R$ 7,00'
        },
        {
            id: '5',
            pastel: 'Chocolate',
            valor: 'R$ 10,00'
        }
    ]

    return(
        <View style={styles.container}>
            <View style={styles.loginBox}>
                <View>
                    <Text style={styles.title}>Products</Text>
                    <FlatList
                        data = {lista}
                        numColumns={2}
                        renderItem={({item})=>
                            <View>
                                <Text>Pastel: {item.pastel} Valor: {item.valor}</Text>
                            </View>
                    }
                    >

                    </FlatList>
                </View>
            </View>
        </View>
    )
}