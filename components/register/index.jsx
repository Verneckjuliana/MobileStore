import React, {useState} from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import styles from "./styles";
import app from "../fireBaseConfig";
import axios from "axios";

export default function Register({navigation}){
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [cep, setCep] = useState('')
    const [rua, setRua] = useState('')
    const auth = getAuth(app);

    function pesquisar(){
        console.log("entrou")
        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => {
            console.log(response.data.logradouro)
        })
    }
    
    function cadastrar(){
        createUserWithEmailAndPassword(auth, user, pass)
         .then((userCredential) => {
            const user = userCredential.user;
            navigation.navigate("Home")
        })
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
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
                    <TextInput
                        placeholder='CEP'
                        style={styles.inputBox}
                        onChangeText={setCep}
                        value={cep}
                    >
                    </TextInput>
                </View>
                <View style={styles.box}>
                    <Pressable 
                        style={styles.button}
                        onPress={()=>pesquisar()}
                        >
                        <Text style={styles.textButton}>OK</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}