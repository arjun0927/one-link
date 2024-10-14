import { StyleSheet, TextInput, TouchableOpacity, View, Image, Text } from 'react-native'
import React, { useState , useEffect} from 'react'
import GeneratedLinks from '../components/GeneratedLinks';
import AntDesign from 'react-native-vector-icons/dist/AntDesign'
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Feather from 'react-native-vector-icons/dist/Feather'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

 // State to hold generated links
 // Get route parameters

const Home = () => {
	const [isClicked, setIsClicked] = useState(false);
	const [logoutClick, setLogOutClick] = useState(false);
	const [newUpdate, setNewUpdate] = useState(false);
	const [links, setLinks] = useState([]);

	const route = useRoute();
	// console.warn(props.createdAt,props.domain);
	
	
	// const { createdAt, domain } = route.params;
	// console.warn(route.params?.createdAt);
	// console.warn(route.params?.domain);

	useEffect(() => {
        if (route.params?.createdAt && route.params?.domain) {
            // Append the new link (domain and createdAt) to the links state
            setLinks((prevLinks) => [
                ...prevLinks,
                { domain: route.params.domain, createdAt: route.params.createdAt },
            ]);
        }
    }, [route.params]);
	// console.warn(links);
	

	const toggleDialog = () => {
		setIsClicked(!isClicked);
	};

	const toggleDialog2 = () => {
		setIsClicked(!isClicked);
		setLogOutClick(!logoutClick);
	};

	const closeDialogue = () => {
		setLogOutClick(!logoutClick);
	};

	const newFeatures = () => {
		setNewUpdate(!newUpdate);
	};

	const navigateVideoScreen = ()=>{
		setTimeout(() => {
			navigation.navigate('video');
		}, );
	}


	const navigation = useNavigation()

	const clickProfile = () => {
		setTimeout(() => {
			navigation.navigate('Profile')
			setIsClicked(!isClicked);
		},);
	};

	const goToSetting = () => {
		setTimeout(() => {
			navigation.navigate('Settings');
			setIsClicked(!isClicked);
		},);
	}
	const generateLink = ()=>{
		setTimeout(() => {
			navigation.navigate('CreateLink');
		},);
	}


	return (
		<View style={styles.container}>
			<View style={styles.navContainer}>
				<View style={styles.leftNav}>
					<Image style={styles.imgLogo} source={require('./assets/Login.png')} />
					<Text style={styles.one}>One
						<Text style={styles.second}>Link</Text>
					</Text>
				</View>
				<View style={styles.rightNav}>
					<TouchableOpacity onPress={() => navigateVideoScreen()}>
						<Feather style={styles.videoIcon} name="video" size={18} />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => newFeatures()}>
						<Ionicons style={styles.navIcon} name="volume-high-outline" size={23} />
					</TouchableOpacity>

					<TouchableOpacity onPress={toggleDialog} >
						<Image source={require('./assets/navimg.png')} />
					</TouchableOpacity>
				</View>
			</View>

			<View style={styles.inputtext}>
				<AntDesign style={styles.icon} name={'search1'} size={17} />
				<TextInput placeholderTextColor={'black'} placeholder='Search' color={'black'} style={styles.textinput} />
			</View>

			<View style={styles.btn}>
				<TouchableOpacity onPress={()=> generateLink()}>
					<Text style={styles.btnText}>
						+ Create One link
					</Text>
				</TouchableOpacity>
			</View>


			<View style={styles.linktxt}>
				<Text style={styles.leftlinktext}>
					Links with highest clicks:
				</Text>
				<Text style={styles.viewall}>View all</Text>
			</View>

			{/* Dialogue Box */}
			{isClicked && (
				<View style={styles.dialogueContainer}>
					<TouchableOpacity onPress={() => clickProfile()}>
						<View style={styles.item}>
							<Image style={{ width: 17, height: 17, marginTop: 3, }} source={require('./assets/navimg.png')} />
							<Text style={styles.dialogueText}>Profile</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => goToSetting()}>
						<View style={styles.item}>
							<Feather style={{ marginTop: 3, }} name="settings" size={14} color={"black"} />
							<Text style={styles.dialogueText}>Setting</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => toggleDialog2()}>
						<View style={styles.item}>
							<MaterialIcons style={{ marginTop: 3, }} name="logout" size={13} color={"black"} />
							<Text style={styles.dialogueText}>Logout</Text>
						</View>
					</TouchableOpacity>
				</View>
			)}
			{logoutClick && (
				<View style={styles.logOutDialogueContainer}>
					<View style={styles.insideLogOut}>
						<Text style={styles.dialogueTextLogOut}>Are you sure you want to log out?</Text>
						<View style={styles.dialogueSlider}></View>

						<View style={styles.lastBtn}>
							<TouchableOpacity>
								<Text style={styles.yes}>Yes</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => closeDialogue()}>
								<View style={styles.noCircle}>
									<Text style={styles.no}>No</Text>
								</View>
							</TouchableOpacity>
						</View>

					</View>
				</View>
			)}

			{newUpdate && (
				<View style={styles.newUpdateContainer}>
					<View style={styles.newUpdateTop}>
						<View>
							<TouchableOpacity onPress={() => newFeatures()}>
								<AntDesign style={styles.newUpdateIconTop} name={'arrowleft'} size={25} />
							</TouchableOpacity>
						</View>
						<View style={styles.newUpdateTopRight}>
							<View style={styles.inputtext2}>
								{/* <AntDesign style={styles.icon} name={'search1'} size={17} /> */}
								{/* <TextInput style={styles.newUpdateInput} placeholder='Search' placeholderTextColor={'blue'} /> */}
							</View>

							<View>
								<AntDesign style={styles.newUpdateIcon} name={'close'} size={15} />
							</View>
						</View>
					</View>
					<View>
						<Text style={styles.whatText}>WHAT’S NEW</Text>
					</View>
					<View>
						<Text style={styles.whatTextFooter}>We are excited to introduce the latest updates to our site!</Text>
					</View>
				</View>
			)}

			<GeneratedLinks links={links} />
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		position: 'relative',
		backgroundColor:'#FFF'
	},
	navContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 35,
		marginHorizontal: 25,
	},
	imgLogo: {
		width: 34,
		height: 31,
	},
	one: {
		color: '#4D8733',
		fontFamily: 'Poppins',
		fontSize: 16,
		fontWeight: '700',
		paddingLeft: 4,
		marginTop: 2.5,
	},
	second: {
		color: '#B4D33B',
		fontFamily: 'Poppins',
		fontSize: 16,
		fontWeight: '700',
	},
	leftNav: {
		flexDirection: 'row',
	},
	rightNav: {
		flexDirection: 'row',
		gap: 15,
	},
	navIcon: {
		color: 'black',
		marginTop: 3,
	},
	inputtext: {
		flexDirection: 'row',
		alignItems: 'center',
		position: 'relative',
		width: '90%',
		marginTop: 25,
		borderRadius: 20,
		backgroundColor: '#EFEFEF',
		opacity: 0.45,
		alignSelf: 'center',
	},
	textinput: {
		width: '100%',
		height: 45,
		paddingLeft: 35,
	},
	icon: {
		position: 'absolute',
		left: 10,
		color: '#000000',
	},

	btn: {
		width: 180,
		backgroundColor: '#4D8733',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 7,
		marginHorizontal: 'auto',
		marginTop: 30,
	},
	btnText: {
		fontSize: 14,
		color: 'white',
		padding: 10,
	},
	linktxt: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 30,
		marginTop: 50,
	},
	leftlinktext: {
		fontSize: 17,
		fontWeight: '400',
		color: '#000',
	},
	viewall: {
		color: '#1E5307',
		fontSize: 12,
		fontWeight: '300',
	},
	date: {
		color: 'black',
		fontSize: 9,
		fontWeight: '500'
	},

	dialogueContainer: {
		width: 134,
		height: 126,
		backgroundColor: '#fff',
		borderRadius: 20,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		top: 60,
		right: 50,
		gap: 10,
	},
	item: {
		flexDirection: 'row',
		gap: 10,
	},
	dialogueText: {
		color: 'black',
		fontSize: 15,
		fontWeight: '500',
	},
	clickedContainer: {
		flex: 1, // Ensure it takes the full height
		backgroundColor: 'rgba(70, 70, 75, 0.50)',
	},
	logOutDialogueContainer: {
		width: 238,
		height: 126,
		borderRadius: 30,
		position: 'absolute',
		backgroundColor: 'white',
		top: 370,
		right: 85,
		zIndex: 30,
	},
	insideLogOut: {
		backgroundColor: '#FFF',
		marginTop: 20,
		marginHorizontal: 40,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 10,
	},
	dialogueTextLogOut: {
		color: '#1F1F1F',
		textAlign: 'center',
		fontSize: 14,
		fontWeight: '500',
		lineHeight: 20,
	},
	dialogueSlider: {
		width: 180,
		height: 0.5,
		backgroundColor: 'black',
		opacity: 0.5,
	},
	lastBtn: {
		flexDirection: 'row',
		gap: 110,
	},
	yes: {
		color: '#6CA851',
		fontWeight: '500',
		fontSize: 14,
		lineHeight: 20,
	},
	no: {
		color: '#FFF',
		fontSize: 14,
		fontWeight: '500',
		lineHeight: 20,
	},
	noCircle: {
		width: 40,
		height: 25,
		borderRadius: 15,
		backgroundColor: '#6CA851',
		justifyContent: 'center',
		alignItems: 'center',
	},
	newUpdateContainer: {
		width: 340,
		height: 130,
		borderRadius: 10,
		backgroundColor: '#FFF',
		position: 'absolute',
		top: 90,
		flexDirection: 'column',
		padding: 10,
		alignSelf: 'center'
	},
	newUpdateTop: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 10,

	},
	newUpdateTopRight: {
		flexDirection: 'row',
		marginRight: 10,
	},
	newUpdateIcon: {
		color: 'black'
	},
	whatText: {
		fontSize: 14,
		color: '#1F1F1F',
		fontWeight: '600',
		lineHeight: 20,
		marginLeft: 15,
		marginTop: 15,
	},
	whatTextFooter: {
		fontSize: 11,
		color: 'black',
		fontWeight: '400',
		lineHeight: 20,
		marginLeft: 15,
		marginTop: 5,
	},
	inputtext2: {
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 20,
		opacity: 0.45,

	},
	newUpdateInput: {
		width: 100,
		height: 20,
		borderRadius: 20,
		backgroundColor: 'black',
		justifyContent: 'space-between'
	},
	newUpdateIconTop: {
		color: 'green',
		marginLeft: 10,
	},
	videoIcon: {
		color: 'black',
		marginTop: 5,
	},
	videoIconCircle: {
		width: 44,
		height: 44,
		borderRadius: 22,
		backgroundColor: '#4D8733',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		bottom: -500,
		right: 20,
	},
	bottomVideoIcon: {
		color: 'white',
	}



})
