import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Login = ({ navigation }) => {

  const handleClick = () => {
    setTimeout(() => {
      navigation.navigate('SignIn');
    });
  };
  const handleClick2 = () => {
    setTimeout(() => {
      navigation.navigate('CreateAccount');
    });
  }

  const handleSkip = () => {
    // Navigate to SignIn screen or whichever screen you want to go to
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <View style={styles.leftNav}>
          <Image style={styles.imgLogo} source={require('./assets/Login.png')} />
          <Text style={styles.one}>
            One<Text style={styles.link}>Link</Text>
          </Text>
        </View>
        {/* Added onPress handler to Skip button */}
        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text1}>Advanced Analytics & Tracking</Text>
        <View style={styles.text2Container}>
          <Text style={styles.text2}>Link Management & Customization. & QR Code Generation</Text>
        </View>

        <View style={styles.imgContainer}>
          <View style={styles.firstImg}>
            <Image source={require('./assets/first.png')} />
          </View>
          <View style={styles.secondImg}>
            <Image source={require('./assets/second.png')} />
          </View>
          <View style={styles.forthImg}>
            <Image source={require('./assets/forth.png')} />
          </View>
          <View style={styles.starImg}>
            <Image source={require('./assets/sixth.png')} />
          </View>
          <View style={styles.fifthImg}>
            <Image source={require('./assets/fifth.png')} />
          </View>

          <View style={styles.circleWrapper}>
            <Image source={require('./assets/third.png')} style={styles.circleImage} />

            <View style={styles.circle}>
              <Text style={styles.cicleContent}>#1</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={handleClick2} style={styles.btn1}>
          <Text style={styles.btnText}>Create an Account</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleClick} style={styles.btn2}>
          <Text style={[styles.btnText, styles.btnTextSignIn]}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor:'#FFF'
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 30,
    marginHorizontal: 30,
  },
  leftNav: {
    flexDirection: 'row',
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
    paddingLeft: 4,
  },
  skip: {
    color: '#4C4B4B',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textContainer: {
    marginHorizontal: 30,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    color: '#B2C2AA',
    fontSize: 17,
    fontWeight: '600',
  },
  text2: {
    fontSize: 26.25,
    textAlign: 'center',
    fontWeight: '700',
    color:'#4D8733',
  },
  text2Container: {
    width: 280,
    marginTop: 10,
  },
  imgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    position: 'relative',
  },
  firstImg: {
    position: 'absolute',
    top: 10,
    left: -205,
  },
  secondImg: {
    position: 'absolute',
    top: 20,
    left: -205,
  },
  circleWrapper: {
    width: 117,
    height: 117,
    borderRadius: 75,
    backgroundColor: '#F9FFE4',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    right: 10,
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
    transform: [{ rotateZ: '-12.88deg' }],
    position: 'absolute',
    top: 15,
    left: 10,
  },
  starImg: {
    width: 111,
    height: 111,
    position: "absolute",
    left: 139,
    top: 0,
  },
  fifthImg: {
    position: "absolute",
    left: 170,
    top: 30,
  },
  btnContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    alignItems: 'center',
    marginBottom: 50,
  },
  btn1: {
    width: '85%',
    height: 45,
    borderRadius: 10,
    backgroundColor: 'rgba(77, 135, 51, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
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
  footerLine:{
		position:'absolute',
		bottom:10,
    right:127,
	}
});
