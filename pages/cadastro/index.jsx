import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'; 
import styles from './styles'
import logomarca from "../../assets/logomenu.png"


const schemaCadastro = z.object({
  usuario: z.string().min(5, 'O mínimo de caracteres é 5!').max(10, 'O máximo de caracteres é 10!'),
  email: z.string().min(10, 'O mínimo de caracteres é 10!').email('Informe um email válido!'),
  senha: z.string().min(6, 'Informe 6 caracteres!').max(8, 'O máximo de caracteres é 8!'),
  confirmarSenha: z.string()
}).refine(data => data.senha === data.confirmarSenha, {
  message: 'As senhas não coincidem',
  path: ['confirmarSenha']
});

export default function Cadastro({ navigation }) {
  const { control, handleSubmit, formState: { errors }, watch } = useForm({
    resolver: zodResolver(schemaCadastro),
  });

  const handleCadastro = async (data) => {
    try {
      const token = await AsyncStorage.getItem('access_token'); 
      const adminUsername = 'smart_user'; 
      const adminPassword = '123456'; 

      const adminResponse = await axios.post('http://murilosantos.pythonanywhere.com/api/token/', {
        username: adminUsername,
        password: adminPassword
      });

      const adminToken = adminResponse.data.access;

      const response = await axios.post('http://murilosantos.pythonanywhere.com/api/create_user', {
        username: data.usuario,
        email: data.email,
        password: data.senha
      }, {
        headers: {
          Authorization: `Bearer ${adminToken}`
        }
      });

      console.log("Usuário cadastrado com sucesso:", response.data);
      Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");
      navigation.navigate('Login');

    } catch (error) {
      console.error("Erro no cadastro:", error);
      const errorMessage = error.response?.data?.detail || "Erro desconhecido";
      Alert.alert("Erro no cadastro", errorMessage);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formulario}>
      <View style={styles.header}>
                <Image source={logomarca} style={styles.logomarca} />
            </View>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.campo}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Username"
            />
          )}
          name="usuario"
          rules={{ required: true }}
        />
        {errors.usuario && (
          <Text style={styles.mensagem}>{errors.usuario.message}</Text>
        )}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.campo}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Email Address"
            />
          )}
          name="email"
          rules={{ required: true }}
        />
        {errors.email && (
          <Text style={styles.mensagem}>{errors.email.message}</Text>
        )}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.campo}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
              placeholder="Senha"
            />
          )}
          name="senha"
          rules={{ required: true }}
        />
        {errors.senha && (
          <Text style={styles.mensagem}>{errors.senha.message}</Text>
        )}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.campo}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
              placeholder="Confirmar Senha"
            />
          )}
          name="confirmarSenha"
          rules={{ required: true }}
        />
        {errors.confirmarSenha && (
          <Text style={styles.mensagem}>{errors.confirmarSenha.message}</Text>
        )}
        {errors.confirmarSenha && (
          <Text style={styles.mensagem}>As senhas não coincidem.</Text>
        )}
        <TouchableOpacity onPress={handleSubmit(handleCadastro)}>
          <Text style={styles.botao}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.botao}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}