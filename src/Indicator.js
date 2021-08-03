import React from 'react'
import Dot from './Dot'
import useCamera from './useCamera'

const CAMERA_MODE_CONDITION = 5
const DEFAULT_DOT_SIZE = 8
const DEFAULT_ACTIVE_DOT_COLOR = '#0095f6'
const DEFAULT_DOT_COLOR = '#a8a8a8'
const DEFAULT_DOT_SPACING = 4

function Indicator ({
  totalAmount,
  activeIndex,
  dotSize,
  dotColor,
  activeDotColor,
  dotSpacing,
  renderDot,
  wrapperStyleClass
}) {
  const { getDotScaleRatio } = useCamera(activeIndex)

  if (typeof totalAmount !== 'number' || totalAmount <= 0) {
    return null
  }

  return (
    <div
      className={wrapperStyleClass}
      style={{ display: 'flex', alignItems: 'center' }}
    >
      {[...Array(totalAmount)].map((element, index) => {
        const props = {
          key: `dot-${index}`,
          position: index,
          scaleRatio:
            totalAmount > CAMERA_MODE_CONDITION ? getDotScaleRatio(index) : 1,
          size: dotSize,
          color: index === activeIndex ? activeDotColor : dotColor,
          spacing: dotSpacing
        }
        const defaultDotElement = <Dot {...props} />

        if (typeof renderDot === 'function') {
          return renderDot({ ...props, defaultDotElement })
        } else {
          return defaultDotElement
        }
      })}
    </div>
  )
}

Indicator.defaultProps = {
  totalAmount: 0,
  activeIndex: 0,
  dotSize: DEFAULT_DOT_SIZE,
  dotColor: DEFAULT_DOT_COLOR,
  activeDotColor: DEFAULT_ACTIVE_DOT_COLOR,
  dotSpacing: DEFAULT_DOT_SPACING
}

export default Indicator
