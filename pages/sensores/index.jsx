import React, { useState, useEffect } from "react"; 
import { View, Text, ActivityIndicator, StyleSheet, ScrollView, Image } from "react-native"; 
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import axios from "axios"; 
import Icon from 'react-native-vector-icons/FontAwesome6';
import logomarca from "../../assets/logomenu.png"


export default function Sensores() { 
    const [sensores, setSensores] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => { 
        async function fetchSensores() { 
            try { 
                const token = await AsyncStorage.getItem('token');
                console.log(token);
                const response = await axios.get('http://murilosantos.pythonanywhere.com/api/sensores/', { 
                    headers: { 
                        'Authorization': `Bearer ${token}` 
                    } 
                }); 
                console.log("passei aqui");
                setSensores(response.data); 
                setLoading(false); 
            } catch (error) { 
                setError(error); 
                setLoading(false); 
                console.log(error); 
            } 
        } 
        fetchSensores(); 
    }, []); 

    if (loading) { 
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Carregando...</Text>
            </View>
        ); 
    } 
    if (error) { 
        return (
            <View style={styles.loadingContainer}>
                <Text>Erro ao carregar os dados: {error.message}</Text>
            </View>
        ); 
    } 

    return ( 
        <View style={styles.container}> 
        <View style={styles.header}>
                <Image source={logomarca} style={styles.logomarca} />
            </View>
            <View style={styles.itens}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.sensoresContainer}> 
                    {sensores.map(sensor => ( 
                        <View key={sensor.id} style={styles.sensor}> 
                            <Text style={styles.text}>ID: {sensor.id}</Text> 
                            <Text style={styles.text}>{'Tipo: '}<Text style={[{color: '#317176', fontWeight: 'bold'}]}>{sensor.tipo}</Text></Text>  
                            <Text style={styles.text}>Responsável: {sensor.responsavel}</Text> 
                            <Text style={styles.text}>Longitude: {sensor.longitude}</Text> 
                            <Text style={styles.text}>Latitude: {sensor.latitude}</Text> 
                            <View style={styles.alinhar}> 
                                <View style={styles.localizacao}> 
                               
                                    <View style={{ maxWidth: '80%' }}>  
                                        <Text style={styles.localizacao}>Localização: {sensor.localizacao}</Text> 
                                    </View> 
                                </View> 
                            </View> 
                        </View> 
                    ))} 
                </View>
            </ScrollView>
        </View>
        </View> 
    ); 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    scrollView: {
        marginVertical: 20,
    },
    sensoresContainer: {
        flex: 1,
    },
    sensor: {
        marginBottom: 20,
        padding: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
    },
    text: {
        fontSize: 16,
    },
    alinhar: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    localizacao: {
        fontSize: 16,
    },
    mapMarker: {
        marginRight: 10,
    },
    logomarca: {
        marginTop:50,
        marginLeft:30,
        width: 150, 
        height: 60, 
        resizeMode: 'contain', 
        borderColor: 'black',
  
      },
    
      itensview: {
        flex: 1,
        marginTop: 20
      }
});
