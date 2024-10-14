import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';

const SplaceScreen = ({navigation}) => {
	useEffect(()=>{
		setTimeout(()=>{
			navigation.navigate('OnBoardingScreen')
		},2000)
	},[])


	return (
		<View style={styles.Container}>
			<Image style={styles.img} source={require('./assets/Login.png')} />
			<View>
				<Text style={styles.one}>
					One<Text style={styles.link}>Link</Text>
				</Text>
			</View>

			{/* Footer section */}
			<View style={styles.footer}>
				<AntDesign name='copyright' size={18} />
				<Image source={require('./assets/ceoitboxLogo.png')} style={styles.logo} />
				<Text style={styles.text}>CEOITBOX</Text>
			</View>
		</View>
	)
}

export default SplaceScreen

const styles = StyleSheet.create({
	Container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	img: {
		width: 139,
		height: 126,
	},
	one: {
		color: '#4D8733',
		fontFamily: 'Poppins',
		fontSize: 48,
	},
	link: {
		color: '#B4D33B',
		fontFamily: 'Poppins',
		fontSize: 48,
	},
	footer: {
		position: 'absolute', // Position it at the bottom
		bottom: 30, // You can adjust this value for spacing from the bottom
		flexDirection: 'row',
		alignItems: 'center',
	},
	text: {
		fontSize: 12,
		fontFamily: 'Poppins',
		fontWeight: '300',
		color: '#000',
		marginLeft: 5, // To add space between the logo and text
	},
	logo: {
		marginLeft: 5, // Adjust space between icon and logo
	},
	footerLine:{
		position:'absolute',
		bottom:10,
	}
})
