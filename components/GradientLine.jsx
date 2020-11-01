import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export const GradientLine = ({myStyles, children}) => {
  return (
    <LinearGradient 
      colors={['#3C4CAD', '#00C3FF']}
      style={myStyles}
      start={[0, 0]}
      end={[1, 0]}
    >{children}
    </LinearGradient>
  )
}
