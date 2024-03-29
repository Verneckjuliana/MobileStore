import React, {useState} from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import styles from "./styles";
import app from "../fireBaseConfig";

export default function Login({navigation}){
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const auth = getAuth(app);
    
    function logar(){
        signInWithEmailAndPassword(auth, user, pass)
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