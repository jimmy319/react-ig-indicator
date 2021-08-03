import { useState, useEffect } from 'react'

// constants
const DEFAULT_NUMBER_OF_FOCUS_OBJECT = 3
const MEDIUM_SCALE_RATIO = 0.7
const SMALL_SCALE_RATIO = 0.5

/**
 * Calculating the scene boundary and the size of dots on scene, depending on the position of the active dot.
 */
const useCamera = (
  targetPos = 0,
  numberOfFocusObj = DEFAULT_NUMBER_OF_FOCUS_OBJECT
) => {
  // range of the focus area of camera (the size of dots in the focus area remain unchanged)
  const [focusArea, setFocusArea] = useState([0, 0 + numberOfFocusObj - 1])

  // handle the movement of target
  useEffect(() => {
    // backward movement
    if (targetPos < focusArea[0]) {
      setFocusArea([targetPos, targetPos + numberOfFocusObj - 1])
    } else if (targetPos > focusArea[1]) {
      const newFocusStartPos = focusArea[0] + (targetPos - focusArea[1])
      setFocusArea([newFocusStartPos, newFocusStartPos + numberOfFocusObj - 1])
    }
  }, [targetPos, focusArea, numberOfFocusObj])

  if (typeof targetPos !== 'number') {
    throw new Error(
      'The first parameter - targetPos you passed in should be a number'
    )
  }

  return {
    getDotScaleRatio: (dotPosition) => {
      // handling exception
      if (typeof dotPosition !== 'number') {
        throw new Error(
          'getDotScaleRatio() only takes a number as its first parameter'
        )
      }

      // out of focus area
      if (!(dotPosition >= focusArea[0] && dotPosition <= focusArea[1])) {
        const distance = Math.min(
          Math.abs(dotPosition - focusArea[0]),
          Math.abs(dotPosition - focusArea[1])
        )

        if (distance === 1) {
          return MEDIUM_SCALE_RATIO
        }

        if (distance === 2) {
          return SMALL_SCALE_RATIO
        }

        return 0
      }
      return 1
    }
  }
}

export default useCamera
