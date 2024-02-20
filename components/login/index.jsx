import React, {useState} from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import styles from "./styles";

export default function Login({navigation}){
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    
    function logar(){
        if (user == 'ju' && pass=='123'){
            navigation.navigate('Home')
        }else{
            console.log('Não logou')
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.loginBox}>
                <View>
                    <Text style={styles.title}>Login</Text>
                </View>
                <View style={styles.box}>
                    <TextInput
                        placeholder='User'
                        style={styles.inputBox}
                        onChangeText={setUser}
                        value={user}
                    >
                    </TextInput>
                </View>
                <View style={styles.box}>
                    <TextInput
                        placeholder='Pass'
                        style={styles.inputBox}
                        onChangeText={setPass}
                        value={pass}
                        secureTextEntry={true}
                    >
                    </TextInput>
                </View>
                <View style={styles.box}>
                    <Pressable 
                        style={styles.button}
                        onPress={()=>logar()}
                        >
                        <Text style={styles.textButton}>OK</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}