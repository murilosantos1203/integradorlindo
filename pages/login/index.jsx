import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Pressable, Image, ScrollView, KeyboardAvoidingView, TouchableOpacity, Alert } from 'react-native'
import styles from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import logomarca from "../../assets/logomenu.png"

export default function Login({ navigation }) {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleLogin = async () => {
        setLoading(true);
        try {
            const response = await axios.post(
                'http://murilosantos.pythonanywhere.com/api/token/',
                {
                    username: user,
                    password: password
                }
            );
            AsyncStorage.setItem('username', user);
            setToken(response.data.access);
            navigation.navigate('MyTabs');
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            Alert.alert('Erro', 'Usuário ou senha incorretos.');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (token) {
            AsyncStorage.setItem('token', token)
                .then(() => {
                    console.log("Token salvo com sucesso: ", token);
                })
                .catch((error) => {
                    console.error("Erro ao salvar o token: ", error);
                });
        }
    }, [token])

    return (
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
            <View style={styles.header}>
                <Image source={logomarca} style={styles.logomarca} />
            </View>
            <TextInput
                placeholder='Usuário'
                onChangeText={setUser}
                value={user}
                style={styles.caixa}
                placeholderTextColor="#aaa"
            />
            <TextInput
                placeholder='Senha'
                onChangeText={setPassword}
                value={password}
                style={styles.caixa}
                secureTextEntry={true}
                placeholderTextColor="#aaa"
            />

            <Pressable
                style={({ pressed }) => [
                    styles.btnLogin,
                    { opacity: pressed ? 0.6 : 1 }
                ]}
                onPress={handleLogin}
                disabled={loading}
            >
                <Text style={{ fontSize: 20, color: 'white' }}>{loading ? 'Carregando...' : 'Login'}</Text>
            </Pressable>
            
            <TouchableOpacity
                onPress={() => navigation.navigate('SignUp')}
            >
                <Text style={styles.btnSignIn}>Sign Up</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
