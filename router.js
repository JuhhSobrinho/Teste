import React, {useState} from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, View, StyleSheet} from 'react-native';

import Posto from './src/pages/posto';
import Salvo from './src/pages/salvo';
import Config from './src/pages/Configuracao/Config';
import Local from './src/pages/Local';
import Mais from "./src/pages/Mais";


const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator 
        screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle:{
                position: 'absolute',
                backgroundColor: '#62D9AD',
                height: 70,
                borderTopWidth: 0,

                borderRadius: 4,

            }
        }}>
            <Tab.Screen
             name="Local"
             component={Local} 
             options={{
                headerShown: false,
                tabBarIcon: ({color, size, focused}) => {
                    if (focused) {
                        return <View><Image
                        style={styles.icon}
                        source={require('./assets/local.png')}/>
                        <View style={styles.line} />
                        </View>
                    }

                    return <Image
                    style={styles.iconF}
                    source={require('./assets/local.png')}
                    />
                }
                }} />


            <Tab.Screen 
            name="Posto" 
            component={Posto}
            options={{
                headerShown: false,
                tabBarIcon: ({color, size, focused}) => {
                    if (focused) {
                        return <View><Image
                        style={styles.icon}
                        source={require('./assets/posto.png')}/>
                        <View style={styles.line} />
                        </View>
                    }

                    return <Image
                    style={styles.iconF}
                    source={require('./assets/posto.png')}
                    />
                }
                }}
            />

            <Tab.Screen 
            name="Mais" 
            component={Mais} 
            options={{
                headerShown: false,
                tabBarIcon: ({color, size, focused}) => {
                    if (focused) {
                        return <View><Image
                        style={styles.icon}
                        source={require('./assets/mais.png')}/>
                        <View style={styles.line} />
                        </View>
                    }

                    return <Image
                    style={styles.iconF}
                    source={require('./assets/mais.png')}
                    />
                }
                }}
            
            />
            
            <Tab.Screen 
            name="Salvo" 
            component={Salvo} 
            options={{
                headerShown: false,
                tabBarIcon: ({color, size, focused}) => {
                    if (focused) {
                        return <View><Image
                        style={styles.icon}
                        source={require('./assets/salvo.png')}/>
                        <View style={styles.line} />
                        </View>
                    }

                    return <Image
                    style={styles.iconF}
                    source={require('./assets/salvo.png')}
                    />
                }
                }}
            
            />

            <Tab.Screen 
            name="Config" 
            component={Config}
            options={{
                headerShown: false,
                tabBarStyle:{display: 'none',},
                tabBarIcon: ({color, size, focused}) => {
                    if (focused) {
                        return <View><Image
                        style={styles.icon}
                        source={require('./assets/config.png')}/>
                        <View style={styles.line} />
                        </View>
                    }

                    return <Image
                    style={styles.iconF}
                    source={require('./assets/config.png')}
                    />
                }
                }}
            
            />

        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    line:{ 
        height: 1,
        backgroundColor: '#ffff',
        marginTop: 4,
        width: 45,
        
    },
    icon:{
        height: 45,
        width: 45,
    },

    iconF:{
        height: 40,
        width: 40, 
        opacity: 0.7,
    },
});