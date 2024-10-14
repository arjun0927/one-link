import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/dist/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Home from './Home';
import VideoScreen from '../components/VideoScreen';
import CreateLink from './CreateLink';
import Dashboard from './Dashboard';


const Tab = createBottomTabNavigator();

export default function HomeNavigation() {
	

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    // Style for the circular background when focused
                    const circleStyle = {
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        backgroundColor: focused ? '#fff' : 'transparent',
                        justifyContent: 'center',
                        alignItems: 'center',
                    };

                    // Return the appropriate icon for each route
                    if (route.name === 'Home') {
                        return (
                            <View style={circleStyle}>
                                <Feather name="home" size={23} color={color} />
                            </View>
                        );
                    } else if (route.name === 'Dashboard') {
                        return (
                            <View style={circleStyle}>
                                <MaterialCommunityIcons name="view-dashboard-outline" size={23} color={color} />
                            </View>
                        );
                    } else if (route.name === 'CreateLink') {
                        return (
                            <View style={circleStyle}>
                                <Ionicons name="add-circle-outline" size={30} color={color} />
                            </View>
                        );
                    } else if (route.name === 'video') {
                        return (
                            <View style={circleStyle}>
                                <Feather color={color}  name="video" size={25} />
                            </View>
                        );
                    } 
                },
                
                tabBarActiveTintColor: '#4D8733',  // Color when tab is focused (green)
                tabBarInactiveTintColor: '#fff',  // Color when tab is not focused (white)
                tabBarShowLabel: false,  // Hide labels for a cleaner look
                headerShown: false,  // Hide header
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 13,  // Adjust margin bottom
                    left: '19%',  // Align it center by leaving 5% space from left and right
                    right: '19%',
                    height: 55,  // Increase height if needed
                    borderRadius: 40,  // Round the corners
                    backgroundColor: 'rgba(91, 149, 65, 0.90)',  // Background color
                },
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="CreateLink" component={CreateLink} />
            <Tab.Screen name="Dashboard" component={Dashboard} />
            <Tab.Screen name="video" component={VideoScreen} />
            
        </Tab.Navigator>
    );
}
