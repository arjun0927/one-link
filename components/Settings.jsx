import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert,Image } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/dist/AntDesign'
import Feather from 'react-native-vector-icons/dist/Feather'
import { useNavigation } from '@react-navigation/native'
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

const Settings = () => {

	const navigation = useNavigation();
	const [imageUri, setImageUri] = useState(null);

	const goback = () => {
		navigation.goBack();
	};

	// Function to open image picker options
	const openImagePicker = () => {
		Alert.alert(
			"Upload Logo",
			"Choose an option",
			[
				{
					text: "Camera",
					onPress: () => launchCamera({ mediaType: 'photo' }, (response) => {
						if (response.didCancel) {
							console.log('User cancelled image picker');
						} else if (response.errorCode) {
							console.log('ImagePicker Error: ', response.errorMessage);
						} else {
							const uri = response.assets[0].uri;
							setImageUri(uri);  // Set the image URI to the state
						}
					})
				},
				{
					text: "Gallery",
					onPress: () => launchImageLibrary({ mediaType: 'photo' }, (response) => {
						if (response.didCancel) {
							console.log('User cancelled image picker');
						} else if (response.errorCode) {
							console.log('ImagePicker Error: ', response.errorMessage);
						} else {
							const uri = response.assets[0].uri;
							setImageUri(uri);  // Set the image URI to the state
						}
					})
				},
				{
					text: "Cancel",
					style: "cancel"
				}
			]
		);
	};

	return (
		<View style={styles.container}>
			<View style={styles.navContainer}>
				<TouchableOpacity onPress={goback}>
					<AntDesign style={styles.icon} name={'arrowleft'} size={25} />
				</TouchableOpacity>
				<Text style={styles.navText}> Settings</Text>
			</View>

			<View style={styles.boxContainer}>
				<View style={styles.box1}>
					<View style={styles.boxTopHeading}>
						<Text style={styles.boxText}>Upload Logo</Text>
						<TouchableOpacity>
							<View style={styles.boxBtn}>
								<Text style={styles.boxBtnText}>Save</Text>
							</View>
						</TouchableOpacity>
					</View>
					<View style={styles.boxSlider}></View>

					<TouchableOpacity onPress={openImagePicker}>
						<View style={styles.uploadBox}>
							<View style={styles.uploadBoxContainer}>
								<View>
									<Feather style={styles.icon} name={'upload'} size={22} />
								</View>
								<View >
									<Text style={styles.uploadBoxText}>Upload Logo</Text>
								</View>
							</View>
						</View>
					</TouchableOpacity>

					{/* Display selected image */}
					{imageUri && (
						<View style={styles.imagePreviewContainer}>
							<Text>Selected Image:</Text>
							<Image source={{ uri: imageUri }} style={styles.previewImage} />
						</View>
					)}
				</View>

				<View style={styles.box1}>
					<View style={styles.boxTopHeading}>
						<Text style={styles.boxText}>Add Domain</Text>
						<TouchableOpacity>
							<View style={styles.boxBtn}>
								<Text style={styles.boxBtnText}>Save</Text>
							</View>
						</TouchableOpacity>
					</View>
					<View style={styles.boxSlider}></View>

					<View style={styles.inputBox}>
						<TextInput color={'black'} style={styles.input} placeholderTextColor={'#808782'} placeholder='Enter Domain' />
					</View>
				</View>
			</View>
		</View>
	)
}

export default Settings;

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
	boxContainer: {
		width: '100%',
		flexDirection: 'column',
		gap: 35,
		marginTop: 30,
	},
	box1: {
		width: '90%',
		height: 170,
		backgroundColor: '#FAFAFA',
		// backgroundColor:'red',
		borderRadius: 20,
		marginHorizontal: 'auto',
		flexDirection: 'column',
		gap: 10,

	},
	boxTopHeading: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 20,
	},
	boxText: {
		color: '#000',
		fontSize: 20,
		fontWeight: '500'
	},
	boxBtn: {
		width: 92,
		height: 34,
		borderRadius: 10,
		backgroundColor: '#878B85',
		justifyContent: 'center',
		alignItems: 'center',
	},
	boxBtnText: {

		color: '#FFF',
		fontSize: 18,
		fontWeight: '500'
	},
	boxSlider: {
		width: '95%',
		height: 0.5,
		backgroundColor: 'black',
		opacity: 0.3,
		marginTop: 10,
		marginHorizontal: 'auto'
	},
	uploadBox: {
		width: '50%',
		padding: 15,
		borderStyle: 'dashed',
		borderColor: '#B1A9A9',
		borderWidth: 2,
		borderRadius: 10,
		marginHorizontal: 'auto',
		marginTop: 10,
	},
	uploadBoxContainer: {
		flexDirection: 'row',
		gap: 15,
		justifyContent: 'center',
		alignItems: 'center',
	},
	uploadBoxText: {
		color: '#000',
		fontSize: 16,
		fontWeight: '500'
	},
	inputBox: {
		marginTop: 10,
	},
	input: {
		borderColor: '#B1A9A9',
		borderWidth: 1,
		width: '90%',
		marginHorizontal: 'auto',
		borderRadius: 10,
		paddingHorizontal: 15,
	},
	imagePreviewContainer: {
		marginTop: 10,
		alignItems: 'center',
	},
	previewImage: {
		width: 100,
		height: 100,
		borderRadius: 10,
		marginTop: 10,
	},
})