import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Feather from 'react-native-vector-icons/dist/Feather';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const CreateAccount = ({ navigation }) => {
    const [press, setPress] = useState(true);
    const [isRemembered, setIsRemembered] = useState(false); // State for the checkbox

    const handleClick = () => {
        setTimeout(() => {
            navigation.navigate('Home')
        });
    };

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            enableOnAndroid={true}
            extraScrollHeight={100} // Adjusts the extra space above the keyboard
            keyboardShouldPersistTaps="handled"
        >
            <View style={styles.container}>
                <View style={styles.navContainer}>
                    <Image style={styles.imgLogo} source={require('./assets/Login.png')} />
                    <Text style={styles.one}>One<Text style={styles.link}>Link</Text></Text>
                </View>

                <View style={styles.textContainer}>
                    <View style={styles.circleWrapper}>
                        <Image source={require('./assets/third.png')} style={styles.circleImage} />
                        <View style={styles.circle}>
                            <Text style={styles.cicleContent}>#1</Text>
                        </View>
                    </View>
                    <Text style={styles.text}>CREATE AN ACCOUNT</Text>
                    <View style={styles.forthImg}>
                        <Image source={require('./assets/forth.png')} />
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={styles.textInput}>
                        <MaterialCommunityIcons name={"email-outline"} size={18} color={'#808782'} style={styles.user} />
                        <TextInput color={'black'} placeholderTextColor={'#808782'} placeholder='Enter Your Email' />
                    </View>

                    <View style={styles.inputContainer}>
                        <View style={styles.textInput1}>
                            <MaterialIcons name={"lock-outline"} size={18} color={'#808782'} style={styles.user} />
                            <TextInput
                                placeholderTextColor={'#808782'}
                                placeholder='Password'
                                secureTextEntry={!press}
								color={'black'}
                                style={styles.inputText}
                            />

                            <TouchableOpacity style={styles.eyeBtn} onPress={() => setPress(!press)}>
                                {press ? <Feather name={'eye-off'} size={18} color={'#8F8F8F'} /> :
                                    <Feather name={'eye'} size={18} color={'#8F8F8F'} />
                                }
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.rememberForgotContainer}>
                        <TouchableOpacity style={styles.rememberMeContainer} onPress={() => setIsRemembered(!isRemembered)}>
                            <View style={[styles.checkbox, isRemembered && styles.checkedCheckbox]} />
                            <Text style={styles.rememberText}>Remember me</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.forgotText}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Button Container */}
                <View style={styles.btnContainer}>
                    <TouchableOpacity onPress={handleClick} style={styles.btn2}>
                        <Text style={[styles.btnText, styles.btnTextSignIn]}>Sign In</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.lineContainer}>
                    <View style={styles.leftLine}></View>
                    <Text style={styles.Or}>Or</Text>
                    <View style={styles.rightLine}></View>
                </View>

                <View style={styles.footer}>
                    <View style={styles.googleContainer}>
                        <Image source={require('./assets/googleIcon.png')} />
                        <Text style={styles.google}>Google</Text>
                    </View>
                    <View>
                        <Text style={styles.account}>Don’t have account ?  <Text style={styles.signup}>Sign Up</Text></Text>
                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default CreateAccount;

const styles = StyleSheet.create({
	container: {
		flex:1,
		backgroundColor:'#FFF',
	},
	navContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 35,
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
	},
	link: {
		color: '#B4D33B',
		fontFamily: 'Poppins',
		fontSize: 16,
		fontWeight: '700',
	},
	textContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'wrap',
		marginTop: 20,
	},
	text: {
		width: 250,
		fontSize: 30,
		fontWeight: '700',
		textAlign: 'center',
		fontFamily: 'Poppins',
		color:'#4D8733'
	},
	circleWrapper: {
		width: 117,
		height: 117,
		borderRadius: 75,
		backgroundColor: '#F9FFE4',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		top: 45,
		left: -43,
	},
	circleImage: {
		width: 60,
		height: 60,
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: [{ translateX: -30 }, { translateY: -30 }],
	},
	circle: {
		width: 75,
		height: 75,
		backgroundColor: '#B4D33B',
		borderRadius: 37.5,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: [{ translateX: -37.5 }, { translateY: -37.5 }],
	},
	cicleContent: {
		fontSize: 25,
		color: '#fff',
		fontWeight: 'bold',
	},
	forthImg: {
		width: 120,
		height: 120,
		backgroundColor: '#03fcba',
		transform: [{ rotateZ: '-14.88deg' }],
		position: 'absolute',
		top: 35,
		right: -30,
	},
	box: {
		width: '100%',
		height: 300,
		backgroundColor: 'rgba(255, 255, 255, 0.70)',
		position: 'absolute',
		bottom: 340,
		borderTopWidth: 1,
		borderTopColor: '#E1EFDB',
	},
	textInput: {
		backgroundColor: '#EFEFEF',
		borderRadius: 14,
		flexDirection: "row",
		marginHorizontal: 30,
		borderWidth: 1,
		borderColor: '#E7FFDD',
		height: 45,
		marginTop: 35,
	},
	textInput1: {
		backgroundColor: '#EFEFEF',
		borderRadius: 14,
		flexDirection: "row",
		marginHorizontal: 30,
		borderWidth: 1,
		borderColor: '#E7FFDD',
		height: 45,
		marginTop: 15,
		paddingRight: 40,
		position: 'relative',
	},
	eyeBtn: {
		position: 'absolute',
		right: 10,
		top: 12,
	},
	inputText: {
		flex: 1,
	},
	user: {
		marginTop: 12,
		marginHorizontal: 10,
	},
	rememberForgotContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginHorizontal: 30,
		marginTop: 15,
	},
	rememberMeContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	checkbox: {
		width: 17,
		height: 17,
		borderWidth: 1,
		borderColor: 'black',
		borderRadius: 4,
		marginRight: 10,
	},
	checkedCheckbox: {
		backgroundColor: '#B4D33B',
	},
	rememberText: {
		color: '#8C8C8C',
		fontSize: 11,
		fontFamily: 'Poppins',
	},
	forgotText: {
		color: '#4D8733',
		fontSize: 11,
		fontFamily: 'Poppins',
	},
	btnContainer: {
		position: 'absolute',
		bottom: 310,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},

	btn2: {
		width: '85%',
		height: 45,
		borderRadius: 10,
		backgroundColor: '#4D8733',
		justifyContent: 'center',
		alignItems: 'center',
	},
	btnText: {
		fontWeight: '600',
		fontSize: 17,
		color: '#4D8733',
	},
	btnTextSignIn: {
		color: '#FCFDF8',
	},
	footerLine: {
		position: 'absolute',
		bottom: 10,
		right: 127,
	},
	lineContainer:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
		position:'absolute',
		bottom:235,
		left:40,
		
	},
	leftLine: {
		width: 155,
		height: 1,
		backgroundColor: '#EEE',
	},
	rightLine: {
		width: 155,
		height: 1,
		backgroundColor: '#EEE',
	},
	Or:{
		color:'#ACACAC',
		fontSize:18,
		fontWeight:'600',
	},
	footer:{
		flexDirection:'column',
		justifyContent:'center',
		alignItems:'center',
		position:'absolute',
		bottom:90,
		left:100,
		gap:60,
	},
	googleContainer:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
	},
	google:{
		color:'#1F1F1F',
		fontSize:18,
		fontWeight:'600',
	},
	account:{
		fontSize:16,
		fontWeight:'400',
		color:'#1F1F1F'
	},
	signup:{
		fontSize:16,
		fontWeight:'600',
		color:'#4D8733',
	}
	
});
