import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplaceScreen from './screens/SplaceScreen';
import Login from './screens/Login';
import OnBoardingScreen from './screens/OnBoardingScreens/OnBoardingScreen';
import SignIn from './screens/SignIn';
import CreateAccount from './screens/CreateAccount';
import HomeNavigation from './screens/HomeNavigation';
import Profile from './components/Profile';
import HelpAndSupport from './components/HelpAndSupport';
import Settings from './components/Settings';
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "white" />
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name='SplaceScreen' component={SplaceScreen} />
				<Stack.Screen name='OnBoardingScreen' component={OnBoardingScreen} />
				<Stack.Screen name='Login' component={Login} />
				<Stack.Screen name='SignIn' component={SignIn} /> 
				<Stack.Screen name='CreateAccount' component={CreateAccount} /> 
				<Stack.Screen name='Home' component={HomeNavigation} /> 
				<Stack.Screen name='Profile' component={Profile} /> 
				<Stack.Screen name='HelpAndSupport' component={HelpAndSupport} /> 
				<Stack.Screen name='Settings' component={Settings} /> 
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;

const styles = StyleSheet.create({});
