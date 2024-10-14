import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Feather from 'react-native-vector-icons/dist/Feather';
import { DataTable } from 'react-native-paper';
import { Table, Row, Rows } from 'react-native-table-component';
import { useNavigation } from '@react-navigation/native';

const Dashboard = () => {
	const [isClicked, setIsClicked] = useState(false);
	const [isClicked2, setIsClicked2] = useState(false);
	const [profile, setProfile] = useState(false);
	const [dotDialogue, setDotDialogue] = useState(null);
	const [tableshow, setTableShow] = useState(false);
	const [logoutClick, setLogOutClick] = useState(false);
	const [copuURL, setCopyURL] = useState(null);
	const [edit, setEdit] = useState(null);

	const data = [
		// Sample data
		{ name: 'Kalyani', url: 'https://example.com', clicks: 568 },
		{ name: 'Kalyani', url: 'https://example.com', clicks: 568 },
		{ name: 'Kalyani', url: 'https://example.com', clicks: 568 },
		{ name: 'Kalyani', url: 'https://example.com', clicks: 568 },
		{ name: 'Kalyani', url: 'https://example.com', clicks: 568 },
		{ name: 'Kalyani', url: 'https://example.com', clicks: 568 },
		{ name: 'Kalyani', url: 'https://example.com', clicks: 568 },
		{ name: 'Kalyani', url: 'https://example.com', clicks: 568 },
		{ name: 'Kalyani', url: 'https://example.com', clicks: 568 },
		{ name: 'Kalyani', url: 'https://example.com', clicks: 568 },

		// Add more items as needed
	];
	const header = ['City', 'Country', ''];
	const tableData =
		[
			['kanpur', 'india', 'mozila/'],
			['kanpur', 'india', 'mozila/'],
			['kanpur', 'india', 'mozila/'],
			['kanpur', 'india', 'mozila/'],
			['kanpur', 'india', 'mozila/'],
			['kanpur', 'india', 'mozila/'],
			['kanpur', 'india', 'mozila/'],
			['kanpur', 'india', 'mozila/'],
			['kanpur', 'india', 'mozila/'],
			['kanpur', 'india', 'mozila/'],
			['kanpur', 'india', 'mozila/'],
			['kanpur', 'india', 'mozila/'],
		];


	const closeDialogue = () => {
		setLogOutClick(!logoutClick);
		setDotDialogue(null);
	};
	const toggleDialog = () => {
		setProfile(!profile);
	};
	const toggleDotDialogue = (index) => {
		setDotDialogue(index);
		setIsClicked2(!isClicked2)
	};
	const toggleDialog2 = () => {
		setIsClicked(!isClicked);
		setLogOutClick(!logoutClick);
	};

	const toggleDotDialogue2 = (index) => {
		setEdit(edit === index ? null : index);
		setDotDialogue(null); // Close dot dialogue
	};

	const close = () => {
		setEdit(null);
		setDotDialogue(null);
		setTableShow(false);
	};
	const copyBox = (index) => {
		setCopyURL(index);
		setTimeout(() => {
			setCopyURL(null);
		}, 1000);
		setDotDialogue(null);
	};


	const clickPlusCircle = () => {
		setTableShow(!tableshow);
	}

	const navigation = useNavigation();

	const clickProfile = () => {
		setTimeout(() => {
			navigation.navigate('Profile')
			setProfile(!profile);
		},);
	};

	const goToSetting = () => {
		setTimeout(() => {
			navigation.navigate('Settings');
			setProfile(!profile);
		},);
	}

	return (
		<View style={styles.container}>
			{/* Navigation Bar */}
			<View style={styles.navContainer}>
				<View style={styles.leftNav}>
					<Image style={styles.imgLogo} source={require('./assets/Login.png')} />
					<Text style={styles.one}>One<Text style={styles.second}>Link</Text></Text>
				</View>
				<View style={styles.rightNav}>

					<TouchableOpacity onPress={toggleDialog}>
						<Image source={require('./assets/navimg.png')} />
					</TouchableOpacity>
				</View>
			</View>

			{/* Search Bar */}
			<View style={styles.inputTextContainer}>
				<View style={styles.inputtext}>
					<AntDesign style={styles.icon} name={'search1'} size={17} />
					<TextInput color={'black'} placeholderTextColor={'black'} placeholder='Search' style={styles.textinput} />
				</View>
				<View style={styles.iconCircle}>
					<FontAwesome5 style={styles.icon} name={'sliders-h'} size={17} />
				</View>
			</View>

			{/* Table Container */}
			<View style={styles.tableContainer}>
				<DataTable style={styles.containerTable}>
					<DataTable.Header style={styles.tableHeader}>
						<DataTable.Title style={styles.cellWithBorder}><Text style={styles.header}>Title</Text></DataTable.Title>
						<DataTable.Title style={styles.cellWithBorder}><Text style={styles.header}>URL</Text></DataTable.Title>
						<DataTable.Title style={styles.cellWithBorder}><Text style={styles.header}>Clicks</Text></DataTable.Title>
						<DataTable.Title style={styles.iconColumn}></DataTable.Title>
					</DataTable.Header>
					<FlatList
						data={data}
						renderItem={({ item, index }) => (
							<View>
								<DataTable.Row style={[
									styles.row,
									index === data.length - 1 && styles.lastRow
								]}>
									<DataTable.Cell style={styles.cellWithBorder}>{item.name}</DataTable.Cell>
									<DataTable.Cell style={styles.cellWithBorder}>{item.url}</DataTable.Cell>
									<DataTable.Cell style={styles.cellWithBorder}>{item.clicks}</DataTable.Cell>
									<DataTable.Cell style={styles.iconColumn}>
										<TouchableOpacity onPress={() => toggleDotDialogue(index)}>
											<Entypo style={styles.icon} name={'dots-three-vertical'} size={17} />
										</TouchableOpacity>
									</DataTable.Cell>
								</DataTable.Row>
								{(dotDialogue === index && isClicked2) ? (
									<View style={[
										styles.dialogueBox
									]}>
										<View style={styles.dialogueBoxRow1}>
											<TouchableOpacity onPress={() => toggleDotDialogue2(dotDialogue)}>
												<Feather name={'edit-2'} color={'black'} size={15} />
											</TouchableOpacity>
											<TouchableOpacity onPress={closeDialogue}>
												<AntDesign name={'delete'} color={'black'} size={15} />
											</TouchableOpacity>
										</View>
										<View style={styles.dialogueBoxRow1}>
											<TouchableOpacity onPress={() => copyBox(index)}>
												<Feather name={'copy'} color={'black'} size={15} />
											</TouchableOpacity>
											<TouchableOpacity onPress={clickPlusCircle}>
												<AntDesign name={'pluscircleo'} color={'black'} size={15} />
											</TouchableOpacity>
										</View>
									</View>
								) : null}

								{
									copuURL === index && (
										<View style={[styles.copyBox, { zIndex: 20 }]}>
											<View style={styles.copyBoxContent}>
												<AntDesign size={10} color={'#4D8733'} name={'checkcircle'} />
												<Text style={{ fontSize: 10, color: '#4D8733', fontWeight: '600' }}>Copied!</Text>
											</View>
										</View>
									)
								}
							</View>

						)}
					/>


				</DataTable>

				{profile && (
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

				{tableshow && (
					<View style={styles.table2Container}>
						<TouchableOpacity style={[styles.iconClose]} onPress={close}>
							<AntDesign name={'close'} color={'black'} size={22} />
						</TouchableOpacity>
						<Table borderStyle={{
							borderWidth: 1,
							borderColor: '#E8E5E5',
						}} style={styles.table2} >
							<Row style={styles.table2Row} textStyle={styles.tableText} data={header} />
							<Rows textStyle={styles.tableText} style={styles.table2RowData} data={tableData} />
						</Table>
					</View>
				)}

				{logoutClick && (
					<View style={styles.logOutDialogueContainer}>
						<View style={styles.insideLogOut}>
							<Text style={styles.dialogueTextLogOut}>Are you sure you want to Delete this link ?</Text>
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




				{/* Edit Dialogue positioned above the table */}
				{edit !== null && (
					<View style={[styles.editDialogue, { zIndex: 1 }]}>
						<View style={styles.iconClose}>
							<TouchableOpacity onPress={close}>
								<AntDesign name={'close'} color={'black'} size={22} />
							</TouchableOpacity>
						</View>
						<View>
							<Text style={styles.linkTitle}>Link Title</Text>
						</View>
						<View style={styles.dialogueInputBox}>
							<View style={styles.inputCloseIconContainer}>
								<TextInput color={'black'} placeholderTextColor={'#808782'} placeholder='Enter Title' style={styles.textInputField} />
								<TouchableOpacity style={styles.closeIconStyle} >
									<AntDesign name={'close'} color={'black'} size={10} />
								</TouchableOpacity>
							</View>
							<View style={styles.inputCloseIconContainer}>
								<TextInput color={'black'} placeholderTextColor={'#808782'} placeholder='Alias' style={styles.textInputField} />
								<TouchableOpacity style={styles.closeIconStyle} >
									<AntDesign name={'close'} color={'black'} size={10} />
								</TouchableOpacity>
							</View>
						</View>

						<View>
							<Text style={styles.linkTitle}>URL 1</Text>
						</View>
						<View style={styles.dialogueInputBox}>
							<View style={styles.inputCloseIconContainer}>
								<TextInput color={'black'} placeholderTextColor={'#808782'} placeholder='Enter Title' style={styles.textInputField} />
								<TouchableOpacity style={styles.closeIconStyle} >
									<AntDesign name={'close'} color={'black'} size={10} />
								</TouchableOpacity>
							</View>
							<View style={styles.inputCloseIconContainer}>
								<TextInput color={'black'} placeholderTextColor={'#808782'} placeholder='URL 1' style={styles.textInputField} />
								<TouchableOpacity style={styles.closeIconStyle} >
									<AntDesign name={'close'} color={'black'} size={10} />
								</TouchableOpacity>
							</View>
						</View>

						<View>
							<Text style={styles.linkTitle}>URL 2</Text>
						</View>

						<View style={styles.dialogueInputBox}>
							<View style={styles.inputCloseIconContainer}>
								<TextInput color={'black'} placeholderTextColor={'#808782'} placeholder='Enter Title' style={styles.textInputField} />
								<TouchableOpacity style={styles.closeIconStyle}>
									<AntDesign name={'close'} color={'black'} size={10} />
								</TouchableOpacity>
							</View>
							<View style={styles.inputCloseIconContainer}>
								<TextInput color={'black'} placeholderTextColor={'#808782'} placeholder='URL 2' style={styles.textInputField} />
								<TouchableOpacity style={styles.closeIconStyle} >
									<AntDesign name={'close'} color={'black'} size={10} />
								</TouchableOpacity>
							</View>
						</View>


						<View>
							<Text style={styles.linkTitle}>URL 3</Text>
						</View>
						<View style={styles.dialogueInputBox}>
							<View style={styles.inputCloseIconContainer}>
								<TextInput color={'black'} placeholderTextColor={'#808782'} placeholder='Enter Title' style={styles.textInputField} />
								<TouchableOpacity style={styles.closeIconStyle} >
									<AntDesign name={'close'} color={'black'} size={10} />
								</TouchableOpacity>
							</View>
							<View style={styles.inputCloseIconContainer}>
								<TextInput color={'black'} placeholderTextColor={'#808782'} placeholder='URL 3' style={styles.textInputField} />
								<TouchableOpacity style={styles.closeIconStyle} >
									<AntDesign name={'close'} color={'black'} size={10} />
								</TouchableOpacity>
							</View>
						</View>

					</View>
				)}
			</View>

			{/* Pagination Dots */}
			<View style={styles.dotContainer}>
				<TouchableOpacity>
					<View style={styles.dotCircle}>
						<Text style={styles.num}>1</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity>
					<View style={styles.dotCircle2}>
						<Text style={styles.num2}>2</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity>
					<View style={styles.dotCircle}>
						<Text style={styles.num}>3</Text>
					</View>
				</TouchableOpacity>
				<View>
					<Text>...</Text>
				</View>
				
					<View style={styles.dotCircle}>
						<Entypo name={'chevron-small-right'} size={19} />
					</View>
				
			</View>
		</View>
	);
};

export default Dashboard;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		backgroundColor: '#F9F9F9',
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
		fontSize: 16,
		fontWeight: '700',
		paddingLeft: 4,
		marginTop: 2.5,
	},
	second: {
		color: '#B4D33B',
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
	inputTextContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 10,
	},
	inputtext: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '75%',
		marginTop: 25,
		borderRadius: 20,
		backgroundColor: '#EFEFEF',
		opacity: 0.45,
		alignSelf: 'center',
		paddingLeft: 20,
	},
	textinput: {
		width: '100%',
		height: 45,
	},
	icon: {
		color: '#000000',
	},
	iconCircle: {
		width: 40,
		height: 38,
		borderRadius: 10,
		backgroundColor: '#EFEFEF',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 23,
	},
	tableContainer: {
		marginTop: 30,
		width: '88%',
		alignSelf: 'center',
		height: '55.5%',
		borderRadius: 10,
		position: 'relative', // This allows child elements to position themselves absolutely
	},
	tableHeader: {
		backgroundColor: '#EFF3ED',
	},
	header: {
		color: '#383535',
		fontSize: 12,
		fontWeight: '700',
	},
	row: {
		borderColor: '#E8E5E5',
		borderWidth: 1,
		backgroundColor: '#F9F9F9',
		zIndex: 1,  // Lower zIndex than the dialogue box
	},
	lastRow: {
		borderBottomWidth: 1,
	},
	cellWithBorder: {
		borderRightWidth: 1,
		borderRightColor: '#E8E5E5',
		paddingLeft: 10,
	},
	iconColumn: {
		width: 40,
		justifyContent: 'center',
		alignItems: 'center',
	},
	dotCircleContainer:{
		marginTop:20,
	},
	dotContainer: {
		flexDirection: 'row',
		position: 'absolute',
		bottom: 110,
		alignSelf: 'center',
		gap: 3,
	},
	dotCircle: {
		width: 22,
		height: 22,
		borderRadius: 11,
		backgroundColor: '#d5dbd6',
		justifyContent: 'center',
		alignItems: 'center',
	},
	dotCircle2: {
		width: 22,
		height: 22,
		borderRadius: 11,
		backgroundColor: '#4D8733',
		color: 'white',
		justifyContent: 'center',
		alignItems: 'center'
	},
	num: {
		fontSize: 11,
		fontWeight: '400',
		color: 'black'
	},
	num2: {
		fontSize: 11,
		fontWeight: '400',
		color: 'white'
	},
	dialogueBox: {
		width: 57,
		height: 50,
		backgroundColor: '#FFF',
		borderRadius: 10,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 10,
		position: 'absolute',
		zIndex: 10,
		elevation: 10,
		top: 0,
		right: 80,
	},

	dialogueBoxRow1: {
		flexDirection: 'row',
		gap: 10,
	},
	editDialogue: {
		flexDirection: 'column',
		borderRadius: 10,
		backgroundColor: '#FFF',
		padding: 20,
		elevation: 3,
		width: '95%',
		alignSelf: 'center',
		marginTop: 10,
		position: 'absolute', // Position it absolutely
		top: -50, // Adjust according to your layout
		zIndex: 1, // Higher zIndex to ensure it appears above the table
	},
	iconClose: {
		alignSelf: 'flex-end',
		padding: 5,
	},
	linkTitle: {
		fontSize: 14,
		fontWeight: '600',
		marginBottom: 5,
		color: '#2C2C2C',
		marginTop: 10,
	},
	dialogueInputBox: {
		flexDirection: 'column',
		marginBottom: 10,
	},
	textInputField: {
		borderRadius: 10,
		padding: 10,
		backgroundColor: '#EFEFEF',
		width: '95%',
		height: 40,
		color: 'black',
		marginTop: 2,
	},
	inputCloseIconContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	closeIconStyle: {
		position: 'absolute',
		right: 20,
	},
	table2Container: {
		flexDirection: 'column',
		borderRadius: 10,
		backgroundColor: '#FFF',
		elevation: 3,
		width: '100%',
		alignSelf: 'center',
		marginTop: 10,
		position: 'absolute', // Position it absolutely
		top: -50, // Adjust according to your layout
		zIndex: 1,
		padding: 15,
		paddingBottom: 40,
	},
	table2: {
		marginTop: 10,
	},
	table2Row: {
		backgroundColor: '#EFF3ED',
		height: 38,
	},
	table2RowData: {
		height: 37,
		backgroundColor: '#F9F9F9',
	},
	tableText: {
		margin: 6,
		textAlign: 'center',
		fontSize: 14,
		color: '#333333', // Text color for table contents
	},
	logOutDialogueContainer: {
		width: 238,
		height: 126,
		borderRadius: 30,
		position: 'absolute',
		backgroundColor: 'white',
		top: 180,
		right: 60,
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
	copyBox: {
		width: 80,
		height: 30,
		borderRadius: 10,
		backgroundColor: '#FFF',
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		top: 10,
		right: 75,
	},
	copyBoxContent: {
		flexDirection: 'row',
		gap: 10,

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
		top: -100,
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

});
