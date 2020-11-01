import React from 'react';
import SnapCarousel from 'react-native-snap-carousel';
import { View, Image, Dimensions, StyleSheet } from 'react-native';

const images = [
  require('../assets/carousel/1.png'),
  require('../assets/carousel/2.png'),
  require('../assets/carousel/3.png'),
];
const { width } = Dimensions.get('window');
const renderItem = ({ item }) => {
  return (
    <View style={styles.carouselItem}>
      <Image source={item} />
    </View>
  );
}

export const Carousel = () => {
  return (
    <SnapCarousel
    inactiveSlideOpacity={1}
    inactiveSlideScale={1}
    firstItem={1}
    sliderWidth={width - 50}
    itemWidth={(width - 50) / 2}
    data={images}
    renderItem={renderItem}
  />
  )
}

const styles = StyleSheet.create({
  carouselItem: {
    width: '100%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
  }
})

