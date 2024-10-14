import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window'); // Get device screen width

const slides = [
  {
    id: '1',
    headerImage: require('../assets/Login.png'), // Replace with your header image
    headerTitle: 'OneLink',
    title: 'Advanced Analytics & Tracking',
    image: require('../assets/1.png'), // Replace with your image
  },
  {
    id: '2',
    headerImage: require('../assets/Login.png'),
    headerTitle: 'OneLink',
    title: 'Link Management & Customization.',
    image: require('../assets/2.png'), // Replace with your image
  },
  {
    id: '3',
    headerImage: require('../assets/Login.png'),
    headerTitle: 'OneLink',
    title: 'QR Code Generation & Social Media Integration',
    image: require('../assets/3.png'), // Replace with your image
  }
];

const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const navigation = useNavigation();

  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems && viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  const handleSkip = () => {
    // Move to the next slide when Skip is clicked
    const nextIndex = currentIndex + 1;
    if (nextIndex < slides.length) {
      flatListRef.current.scrollToIndex({ animated: true, index: nextIndex });
    } else {
      navigation.navigate('Login'); // Navigate to Home if at the last slide
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View style={[styles.slide, { width }]}>
        {/* Header */}
        <View style={styles.header}>
          <Image source={item.headerImage} style={styles.headerImage} />
          <Text style={styles.headerTitle}>{item.headerTitle}</Text>
        </View>

        {/* Main Content */}
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>

        {/* Footer Line Image */}
        <Image source={item.footerLineImage} style={styles.footerLineImage} />
      </View>
    );
  };

  const renderDots = () => {
    return (
      <View style={styles.dotsContainer}>
        {slides.map((_, i) => (
          <View key={i} style={[styles.dot, currentIndex === i ? styles.activeDot : styles.inactiveDot]} />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        keyExtractor={(item) => item.id}
        ref={flatListRef}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        // Ensure full width on FlatList
        decelerationRate="fast"
        snapToInterval={width} // Snap the FlatList to the width of the device
        snapToAlignment="center"
        bounces={false} // Prevent content from bouncing
      />
      {renderDots()}
      <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start', // Changed to flex-start to align items to the left
    position: 'absolute',
    top: 25,
    paddingHorizontal: 10, // Optional padding for the header
  },
  headerImage: {
    width: 34,
    height: 31,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4D8733', // Changed to specified color
    paddingLeft: 4, // Padding of 4 as requested
  },
  skipButton: {
    position: 'absolute',
    top: 25,
    right: 20,
    color: '#4C4B4B',
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontWeight: 'bold',
  },
  skipText: {
    fontSize: 16,
    color: '#4C4B4B',
    fontWeight: '600',
  },
  image: {
    width: '100%',
    height: 238,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 29,
    fontWeight: 'bold',
    color: '#4D8733',
    textAlign: 'center',
    fontFamily: 'Poppins',
  },
  footerLineImage: {
    position: 'absolute',
    bottom: 10, // Adjust height as needed
    resizeMode: 'contain',
  },
  dotsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 80,
    right: 185,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 2,
  },
  activeDot: {
    backgroundColor: '#4D8733',
  },
  inactiveDot: {
    backgroundColor: '#ccc',
  },
});

