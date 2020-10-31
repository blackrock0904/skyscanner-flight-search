import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';

export const NavBarLine = () => {
  return (
    <LinearGradient
      colors={['#3C4CAD', '#00C3FF']}
      style={styles.active}
      start={[0, 0]}
      end={[1, 1]}
    />
  )
}

const styles = StyleSheet.create({
  active: {
    width: '100%',
    height: 3,
    borderRadius: 2,
    position: 'absolute',
    bottom: -10,
    shadowOpacity: 0.15
  }
})
