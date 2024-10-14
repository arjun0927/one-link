import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/dist/Feather';
import { useNavigation } from '@react-navigation/native';

const CreateLink = () => {
	const [edit1, setEdit1] = useState(false);
	const [edit2, setEdit2] = useState(false);
	const [edit3, setEdit3] = useState(false);
	const [title, setTitle] = useState(''); // State for the link title
	const [url1, setUrl1] = useState(''); // State for URL 1
	const [name1, setName1] = useState(''); // State for name 1
	const [url2, setUrl2] = useState(''); // State for URL 2
	const [name2, setName2] = useState(''); // State for name 2
	const [url3, setUrl3] = useState(''); // State for URL 3
	const [name3, setName3] = useState(''); // State for name 3
	const [generatedLink, setGeneratedLink] = useState(null);

	const clickEdit1 = () => setEdit1(!edit1);
	const clickEdit2 = () => setEdit2(!edit2);
	const clickEdit3 = () => setEdit3(!edit3);

	const navigation = useNavigation();

	const generateLink = async () => {
		try {
			const bodyData = {
				title,
				description: '',
				links: [
					{ name: name1, url: url1 },
					{ name: name2, url: url2 },
					{ name: name3, url: url3 }
				]
			};

			const response = await fetch('https://onlk.in/api/ver1/create', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(bodyData),
			});

			const data = await response.json();
			// console.warn(data.createdAt,data.domain);
			const { createdAt, domain } = data.link;

			if (response.ok) {
				setGeneratedLink(data.link); // Optional, if you want to store the entire link object
				console.log('Response:', data);
				Alert.alert('Success', 'OneLink created successfully!', [{ text: 'OK' }]);

				setTitle('');
				setUrl1('');
				setName1('');
				setUrl2('');
				setName2('');
				setUrl3('');
				setName3('');

				// Navigate with only createdAt and domain
				navigation.navigate('Home', { createdAt, domain });
			} else {
				Alert.alert('Error', 'Failed to create OneLink', [{ text: 'OK' }]);
				console.log('Error:', data); // Handle the error response
			}
		} catch (error) {
			Alert.alert('Error', 'Failed to create OneLink', [{ text: 'OK' }]);
			console.log('Error:', error);
		}

	};


	return (
		<View style={styles.container}>
			<View style={styles.headingContainer}>
				<Text style={styles.create}>Create your</Text>
				<Text style={styles.one}>One<Text style={styles.link}>Link</Text>!</Text>
			</View>

			<View style={styles.inputContainer}>
				<View style={styles.inputContainerBox}>
					<Text style={styles.inputBoxHeading}>Link Title</Text>
					<View>
						<TextInput
							style={styles.textInputBox}
							color={'black'}
							placeholder='Enter link title'
							placeholderTextColor={'#808782'}
							value={title}
							onChangeText={setTitle}
						/>
					</View>
				</View>
				{/* URL 1 */}
				<View style={styles.inputContainerBox}>
					<Text style={styles.inputBoxHeading}>URL 1</Text>
					{edit1 ? (
						<View style={styles.inputBox}>
							<TextInput
								color={'black'}
								style={styles.textInputBox}
								placeholder='Enter Title'
								placeholderTextColor={'#808782'}
								value={name1}
								onChangeText={setName1}
							/>
							<TouchableOpacity>
								<Feather
									style={[styles.editIcon, edit1 ? { color: '#B9B9B9' } : { color: 'black' }]}
									name={'edit-2'}
									size={13}
								/>
							</TouchableOpacity>
						</View>
					) : null}
					<View style={styles.inputBox}>
						<TextInput
							color={'black'}
							style={styles.textInputBox}
							placeholder='Enter URL 1'
							placeholderTextColor={'#808782'}
							value={url1}
							onChangeText={setUrl1}
						/>
						<TouchableOpacity onPress={clickEdit1}>
							<Feather
								style={[styles.editIcon, edit1 ? { color: '#B9B9B9' } : { color: 'black' }]}
								name={'edit-2'}
								size={13}
							/>
						</TouchableOpacity>
					</View>
				</View>

				{/* URL 2 */}
				<View style={styles.inputContainerBox}>
					<Text style={styles.inputBoxHeading}>URL 2</Text>
					{edit2 ? (
						<View style={styles.inputBox}>
							<TextInput
								color={'black'}
								style={styles.textInputBox}
								placeholder='Enter Title'
								placeholderTextColor={'#808782'}
								value={name2}
								onChangeText={setName2}
							/>
							<TouchableOpacity>
								<Feather
									style={[styles.editIcon, edit2 ? { color: '#B9B9B9' } : { color: 'black' }]}
									name={'edit-2'}
									size={13}
								/>
							</TouchableOpacity>
						</View>
					) : null}
					<View style={styles.inputBox}>
						<TextInput
							color={'black'}
							style={styles.textInputBox}
							placeholder='Enter URL 2'
							placeholderTextColor={'#808782'}
							value={url2}
							onChangeText={setUrl2}
						/>
						<TouchableOpacity onPress={clickEdit2}>
							<Feather
								style={[styles.editIcon, edit2 ? { color: '#B9B9B9' } : { color: 'black' }]}
								name={'edit-2'}
								size={13}
							/>
						</TouchableOpacity>
					</View>
				</View>

				{/* URL 3 */}
				<View style={styles.inputContainerBox}>
					<Text style={styles.inputBoxHeading}>URL 3</Text>
					{edit3 ? (
						<View style={styles.inputBox}>
							<TextInput
								color={'black'}
								style={styles.textInputBox}
								placeholder='Enter Title'
								placeholderTextColor={'#808782'}
								value={name3}
								onChangeText={setName3}
							/>
							<TouchableOpacity>
								<Feather
									style={[styles.editIcon, edit3 ? { color: '#B9B9B9' } : { color: 'black' }]}
									name={'edit-2'}
									size={13}
								/>
							</TouchableOpacity>
						</View>
					) : null}
					<View style={styles.inputBox}>
						<TextInput
							color={'black'}
							style={styles.textInputBox}
							placeholder='Enter URL 3'
							placeholderTextColor={'#808782'}
							value={url3}
							onChangeText={setUrl3}
						/>
						<TouchableOpacity onPress={clickEdit3}>
							<Feather
								style={[styles.editIcon, edit3 ? { color: '#B9B9B9' } : { color: 'black' }]}
								name={'edit-2'}
								size={13}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</View>

			<TouchableOpacity onPress={generateLink}>
				<View style={styles.btn}>
					<Text style={styles.generateLink}>Generate OneLink</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default CreateLink;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF',
		position: 'relative',
		padding: 20,
	},
	headingContainer: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 30,
	},
	create: {
		color: '#1F1F1F',
		fontSize: 20,
		fontWeight: '600',
	},
	one: {
		color: '#4D8733',
		fontSize: 20,
		fontWeight: '600',
	},
	link: {
		color: '#B4D33B',
		fontSize: 20,
		fontWeight: '600',
	},
	inputContainer: {
		width: '90%',
		alignSelf: 'center',
		padding: 10,
		marginTop: 20,
	},
	inputContainerBox: {
		flexDirection: 'column',
		paddingTop: 20,
	},
	inputBoxHeading: {
		color: '#2C2C2C',
		fontSize: 12,
		fontWeight: '500',
		marginBottom: 3,
	},
	textInputBox: {
		backgroundColor: '#EFEFEF',
		borderRadius: 20,
		paddingLeft: 20,
		width: '100%',
		marginBottom: 2,
	},
	inputBox: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
	},
	editIcon: {
		position: 'absolute',
		right: 20,
		bottom: -4,
	},
	btn: {
		width: '80%',
		height: 45,
		backgroundColor: '#4D8733',
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		marginTop: 35,
	},
	generateLink: {
		color: '#FFF',
		fontSize: 14,
		fontWeight: '500',
	},
});
