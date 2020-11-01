import React from "react"
import Svg, { Path } from "react-native-svg";

export function SvgHeart(props) {
  if (props.isLiked) {
    return (
      <Svg width={18} height={16} viewBox="0 0 18 16" fill="none" {...props}>
        <Path
          d="M16.076 1.343a4.584 4.584 0 00-6.483 0l-.884.884-.883-.884a4.584 4.584 0 00-6.483 6.484l.883.883 6.483 6.483 6.484-6.483.883-.883a4.584 4.584 0 000-6.484z"
          fill="#F04393"
        />
      </Svg>
    )
  }
  return (
    <Svg width={19} height={17} viewBox="0 0 19 17" fill="none" {...props}>
      <Path
        d="M17.076 2.343a4.584 4.584 0 00-6.483 0l-.884.884-.883-.884a4.584 4.584 0 00-6.483 6.484l.883.883 6.483 6.483 6.484-6.483.883-.883a4.584 4.584 0 000-6.484v0z"
        stroke="#A6A6A6"
      />
    </Svg>
  )
}
