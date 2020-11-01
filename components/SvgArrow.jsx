import React from "react"
import Svg, { Path } from "react-native-svg";
import { StyleSheet } from 'react-native';

export function SvgArrow(props) {
  return (
    <Svg style={styles.container} width={14} height={10} viewBox="0 0 14 10" fill="none" {...props}>
      <Path
        d="M1 5h12M9 1l4 4-4 4"
        stroke="#C4C4C4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  }
})
