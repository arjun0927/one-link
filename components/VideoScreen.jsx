import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { useNavigation } from '@react-navigation/native';
useNavigation

const VideoScreen = () => {

	const navigation = useNavigation();

	const goback = () => {
		setTimeout(() => {
			navigation.goBack();
		},);
	};

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>goback()}>
	  <View style={styles.navIcon}>
        <AntDesign style={styles.closeIcon} name={'close'} size={25} />
      </View>
	  </TouchableOpacity>
      <View style={styles.contentContainer}>
        <Text style={styles.topHeading}>
          Master Your Links in Minutes! 📲
        </Text>
        <Text style={styles.topHeadingContent}>
          Watch this quick guide to effortlessly manage, customize, and track your URLs with onlk.in. Elevate your link game today!
        </Text>
      </View>
    </View>
  );
};

export default VideoScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
	flexDirection:'column',
	gap:10,
	padding:20,
  },
  navIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  closeIcon: {
    color: 'black',
	marginTop:5,
  },
  contentContainer: {
	gap:10,
  },
  topHeading: {
    fontSize: 34,
    fontWeight: '600',
	color:'#4D8733',

  },
  topHeadingContent: {
    fontSize: 17,
    color: '#868383',
	fontWeight:'400',
  },
});
