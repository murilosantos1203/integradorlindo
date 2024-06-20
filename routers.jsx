import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import  Geo from './pages/geo/';
import Login from './pages/login';
import Cadastro from './pages/cadastro';
import Sensores from './pages/sensores';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarStyle: {
                backgroundColor: 'white',
                paddingBottom: 1,
                paddingTop: 1,
                borderTopColor: 'transparent'
            },
            tabBarActiveTintColor: '#88EAF0',
            tabBarInactiveTintColor: '#555'
        }}  >
                {/* <Tab.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                    tabBarStyle: { display: 'none' },
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="user" size={size} color={color} />
                    )
                }}
            />

                <Tab.Screen
                name="SignUp"
                component={Cadastro}
                options={{
                    headerShown: false,
                    tabBarStyle: { display: 'none' },
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="user" size={size} color={color} />
                    )
                }}
            /> */}
                
            <Tab.Screen
                name="Mapa"
                component={Geo}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="map" size={size} color={color} />
                    )
                }}
            />
        
            <Tab.Screen
                name="Sensores"
                component={Sensores}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="eye" size={size} color={color} />
                    )
                }}
            />

        

        </Tab.Navigator>
    );
}
export default function Routers() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={Cadastro} options={{ headerShown: false }} />
                <Stack.Screen name="MyTabs" component={MyTabs} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}