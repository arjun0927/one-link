import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/dist/AntDesign'

import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = () => {
	const navigation = useNavigation();

	const goback = () => {
		setTimeout(() => {
			navigation.goBack();
		},);
	};

	const helpAndSupportNavigation = ()=>{
		setTimeout(() => {
			navigation.navigate('HelpAndSupport');
		},);
	}

	return (
		<View style={styles.container}>
			<View style={styles.navContainer}>
				<TouchableOpacity onPress={() => goback()}>
					<AntDesign style={styles.icon} name={'arrowleft'} size={25} />
				</TouchableOpacity>
				<MaterialIcons style={styles.icon} name={'edit'} size={25} />
			</View>

			<View style={styles.profileContainer}>
				<View style={styles.slider}></View>
				<View style={styles.mainProfile}>
					<View style={styles.leftProfile}>
						<Image style={styles.imgProfile} source={require('../screens/assets/profileImg.png')} />
					</View>
					<View style={styles.rightProfile}>
						<View>
							<Text style={styles.profileName}>Shreya Bhandhre</Text>
						</View>
						<View>
							<Text style={styles.profileGmail}>shreya@gmail.com</Text>
						</View>
						<LinearGradient colors={['#1E5307', '#3DC500']} style={styles.linearGradient}>
							<View style={styles.smallSlider}></View>
						</LinearGradient>
						<View>
							<Text style={styles.profileProcess}>70% Completed</Text>
						</View>
					</View>
				</View>
			</View>

			<View style={styles.linkContainer}>
				<TouchableOpacity>
					<View style={styles.linkSection}>
						<View style={styles.linkRow}>
							<View style={styles.iconCircle}>
								<MaterialIcons name="sync" size={20} color="black" />
							</View>
							<Text style={styles.txt}>Link Stats Overview</Text>
						</View>
						<View>
							<AntDesign name="right" size={20} color="black" />
						</View>
					</View>
				</TouchableOpacity>
				<TouchableOpacity>
					<View style={styles.linkSection}>
						<View style={styles.linkRow}>
							<View style={styles.iconCircle}>
								<MaterialCommunityIcons name="tune-variant" size={20} color="black" />
							</View>
							<Text style={styles.txt}>Customization Settings</Text>
						</View>
						<View>
							<AntDesign name="right" size={20} color="black" />
						</View>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={()=> helpAndSupportNavigation()}>
					<View style={styles.linkSection}>
						<View style={styles.linkRow}>
							<View style={styles.iconCircle}>
								<Feather name="help-circle" size={20} color="black" />
							</View>
							<Text style={styles.txt}>Help & Support</Text>
						</View>
						<View>
							<AntDesign name="right" size={20} color="black" />
						</View>
					</View>
				</TouchableOpacity>
				<TouchableOpacity>
					<View style={styles.linkSection}>
						<View style={styles.linkRow}>
							<View style={styles.iconCircle}>
								<Feather name="help-circle" size={20} color="black" />
							</View>
							<Text style={styles.txt}>Logout</Text>
						</View>
						<View>
							<AntDesign name="right" size={20} color="black" />
						</View>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default Profile

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		position: 'relative',
		backgroundColor: '#FFF',
	},
	navContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 25,
		marginVertical: 25,
	},
	icon: {
		color: 'black',
	},
	profileContainer: {
		marginTop: 25,
	},
	slider: {
		width: '50%',
		height: 2,
		backgroundColor: 'black',
		opacity: 0.2,
		alignSelf: 'center',
	},
	mainProfile: {
		backgroundColor: '#FFF',
		elevation: 3,
		width: '90%',
		height: 115,
		alignSelf: 'center',
		borderRadius: 15,
		marginVertical: 15,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
	},
	leftProfile: {
		width: '45%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	imgProfile: {
		width: 89,
		height: 89,
		borderRadius: 44.5,
	},
	rightProfile: {
		width: '45%',
		flexDirection: 'column',
	},
	profileName: {
		color: '#1F1F1F',
		fontSize: 16,
		fontWeight: '500',
		marginTop: 10,
	},
	profileGmail: {
		color: '#8D919A',
		fontSize: 12,
		fontWeight: '500',
		marginTop: 1,
	},
	linearGradient: {
		width: '60%',
		height: 3,
		marginTop: 13,
		borderRadius: 3,
	},
	profileProcess: {
		color: '#1F1F1F',
		fontSize: 13,
		fontWeight: '500',
		marginTop: 2,
	},
	linkContainer: {
		paddingHorizontal: 20,
		marginVertical: 20,
	},
	linkSection: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 10,
		paddingVertical: 10,
		borderRadius: 10,
		paddingHorizontal: 10,
	},
	linkRow: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	iconCircle: {
		width: 35,
		height: 35,
		borderRadius: 17.5,
		backgroundColor: '#F1F1F1',
		marginRight: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	txt:{
		color:'#67676D',
		fontSize:16,
		fontWeight:'400',
	}
});
