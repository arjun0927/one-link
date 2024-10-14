import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/dist/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/dist/Entypo'
import { useNavigation } from '@react-navigation/native'

const HelpAndSupport = () => {
	const navigation = useNavigation();

	const goback = () => {
		navigation.goBack();
	};

	return (
		<View style={styles.container}>
			<View style={styles.navContainer}>
				<TouchableOpacity onPress={goback}>
					<AntDesign style={styles.icon} name={'arrowleft'} size={25} />
				</TouchableOpacity>
				<Text style={styles.navText}> Help and Support </Text>
			</View>
			<View style={styles.section}>
				<View style={styles.boxContainer}> 
					<View style={styles.iconCircle}>
						<MaterialCommunityIcons style={styles.icon} name={'email'} size={14} />
					</View>
					<View style={styles.textContainer}>
						<Text style={styles.write}>Write us at</Text>
						<Text style={styles.onelink}>onelink@customercare.com</Text>
					</View>
				</View>
				<View style={styles.boxContainer}> 
					<View style={styles.iconCircle}>
						<Entypo style={styles.icon} name={'help-with-circle'} size={14} />
					</View>
					<View style={styles.textContainer}>
						<Text style={styles.faq}>FAQ!</Text>

					</View>
				</View>
			</View>
		</View>
	);
}

export default HelpAndSupport;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		position: 'relative',
		backgroundColor: '#FFF',
	},
	navContainer: {
		flexDirection: 'row',
		gap: 18,
		marginTop: 23,
		paddingHorizontal: 25,
	},
	icon: {
		color: 'black',
		marginTop: 2,
	},
	navText: {
		color: '#000',
		fontSize: 19,
		fontWeight: '400',
	},
	section: {
		flexDirection: 'column',
		gap: 20,
		marginTop: 30,
	},
	boxContainer: {
		width: '90%',
		height: 74,
		marginHorizontal: 'auto',
		borderWidth: 1,
		borderColor: '#F5F5F8',
		padding: 10,
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius:20,
	},
	textContainer: {
		marginLeft: 14,
	},
	write: {
		color: '#827F7F',
		fontSize: 14,
		fontWeight:'400',
	},
	onelink: {
		color: '#4D8733',
		fontSize: 14,
		fontWeight:'400'
	},
	iconCircle:{
		backgroundColor:'#DCFACF',
		width:43,
		height:43,
		borderRadius:21.5,
		justifyContent:'center',
		alignItems:'center',
	},
	faq:{
		color:'#404040',
		fontSize:14,
		fontWeight:'400',
	}
});
